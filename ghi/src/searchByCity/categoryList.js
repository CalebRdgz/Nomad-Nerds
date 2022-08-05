import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAuthContext } from "../users/Auth";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import no_info from '../images/no_info.png'

function CategoryList() {
    const location = useLocation();
    const [categories, setCategories] = useState([]);
    const [businesses, setBusinesses] = useState([]);
    const [business_id, setBusiness_id] = useState('');
    const [businessesLoading, setBusinessesLoading] = useState(true)
    const [categoriesLoading, setCategoriesLoading]  = useState(true)
    const [favorites, setFavorites] = useState([]);
    const { token } = useAuthContext();
    const city = (location.state.city.city).replace(/ /g, '%20');
    const state = (location.state.city.admin_name).replace(/ /g, '%20');
    const cityAndState = city + '%2C%20' + state
    const navigate = useNavigate();
    
    async function getFavorites() {
        const fetchConfig = {
            credentials: "include",
            method: "get",
            headers: {
                "Access-Control-Request-Headers": "*",
                // "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
                "Authorization": `Bearer ${token}`,
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Headers": "*",
            }
        };
        const url = `${process.env.REACT_APP_USER}/user/favorites/`
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const data = await response.json();
            setFavorites(data);
        }
    }
    async function getCategories() {
        const fetchConfig = {
            method: "get",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        };
        const categories_url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/categories/?location=${city}&quantity=1`;
        const response = await fetch(categories_url, fetchConfig);
        if (response.ok) {
            const data = await response.json();
            setCategories(data["categories"])}
            setCategoriesLoading(false)        
    }

    function fetchBusinesses(category, city) {
        const fetchConfig = {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        };
        const url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/list?category=${category}&location=${city}&quantity=1`;
        return fetch(url, fetchConfig);
    }
    function getBusinesses() {
        if (categories && categories.length > 0) {
            Promise.all(categories.slice(0, 5)
                .map(category => fetchBusinesses(category[0], city)
                    .then(res => res.json())
                    .then(data => ({[category[1]]: data}))))
                .then(data => (setBusinessesLoading(false), setBusinesses(data)))
        }
    }
    async function addFavorite(id) {
        const url = `${process.env.REACT_APP_USER}/user/favorites/`
        let content = { business_id: id }
        const fetchConfig = {
            credentials: "include",
            method: "post",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(content)
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const data = await response.json();
            setBusiness_id(data);
            if (favorites.includes(id) == false) {
                setFavorites([...favorites, id])
            }
        } if (response.status === 403) {
            if (window.confirm("You cannot save favorites because you are not currently logged in. Would you like to log in?")) {
                navigate('/user/login/');
            } else {
            }

        }
    }
    async function deleteFavorite(id) {
        const fetchConfig = {
            credentials: "include",
            method: "delete",
            headers: {
                // "Access-Control-Allow-Headers": "*",
                // "Access-Control-Allow-Origin": "*",
                "Access-Control-Request-Headers": "*",
                "Authorization": `Bearer ${token}`,
            }
        };
        const url = `${process.env.REACT_APP_USER}/user/favorites/${id}`
        const response = await fetch(url, fetchConfig);
        console.log('response', response)
        if (response.ok) {
            const data = await response.json();
            console.log('favorites before', favorites)
            console.log('id', id)
            setFavorites(favorites.filter(favorite => favorite != id))
        }
    }
    useEffect(() => {
        getFavorites();
    }, []);
    useEffect(() => {
        getCategories();
    }, []);
    useEffect(() => {
        getBusinesses();
    }, [categories]);

    if (categoriesLoading === false && categories.length === 0 || businessesLoading === false && businesses.length === 0) {
        return (
            <div className="text-center">
                <img src = {no_info} style={{ height: 400, marginTop: 100}} />
                {console.log('city', location.state.city.city)}
                <h1>Can't find any businesses in {location.state.city.city}</h1>
                <p style={{ marginBottom: 250 }}className="large fw-bold mt-2 pt-1">Back to <a href="/"
                  className="link-danger">Home</a></p>
            </div>
        )
    } 

    else if (businessesLoading === true) {
        return (
            <div className="text-center">
                <img src = "https://theimaa.com.au/wp-content/uploads/2022/06/IMAA_Plan_Around_Globe_Gif_one.gif" style={{ height: 350, marginTop: 100, marginBottom: 30}}/>
                <h1 style={{ marginBottom: 100 }}>Loading...</h1>
            </div>
        )
    }

    return (
        <ul>
            {businesses.map((business, index) => (
<<<<<<< HEAD
                <div key={index}>
                    <Container className="container-fluid">
                        <h1 className="card-title" style={{ fontFamily: "papyrus", fontWeight: "bold", padding: 20, paddingTop: 90 }}>{Object.keys(business)}</h1>
                        <Row className="flex-nowrap flex-row" style={{ overflowX: "scroll" }}>
                            {Object.values(business)[0].slice(0, 15).map((store, idx) => (
                                <Col key={idx} className="col-3">
                                    <Card style={{ width: "18rem" }}>
                                        <Card.Img variant="top" src={store.image_url} height={250} />
                                        <Card.Title style={{ fontWeight: "bold" }}>{store.name}</Card.Title>
                                        <Card.Body>
                                            <Card.Title>{store.name}</Card.Title>
                                            <Card.Text>
                                                {store.location.display_address[0]}<br />
                                                {store.location.display_address[1]}<br />
                                                {store.location.display_address[2]}<br />
                                                {store.price ? `Price: ${store.price}` : ''}<br />
                                                Rating: {store.rating}
                                                <Button variant="light" style={{ float: "right" }}>
                                                    {favorites.includes(store.id) ? <AiFillHeart style={{ color: "red", size: '2em' }} onClick={() => deleteFavorite(store.id)} /> : <AiOutlineHeart onClick={() => addFavorite(store.id)} />}
                                                </Button>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>

=======
            <div key={index}>              
                <Container className="container-fluid">
                <h1 className="card-title" style={{fontFamily: "papyrus", fontWeight:"bold", padding:20, paddingTop: 90}}>{Object.keys(business)}</h1>
                <Row className="flex-nowrap flex-row" style={{overflowX: "scroll"}}>
                  {Object.values(business)[0].slice(0,15).map((store, idx) => (
                        <Col key={idx} className="col-3">
                        <Card style={{width: "18rem"}}>                           
                            <Card.Img variant="top" src={store.image_url} height={250} />
                            <Card.Body>
                            <Card.Title style={{fontWeight: "bold"}}>{store.name}</Card.Title>
                                <Card.Text>
                                    {store.location.display_address[0]}<br />
                                    {store.location.display_address[1]}<br />
                                    {store.location.display_address[2]}<br />
                                    {store.price? `Price: ${store.price}`: ''}<br /> 
                                    Rating: {store.rating}
                                    <Button variant="light"  style={{float: "right"}}>
                                    {favorites.includes(store.id) ?  <AiFillHeart style={{color: "red", size:'2em'}} onClick={() => deleteFavorite(store.id)}/> : <AiOutlineHeart onClick={() => addFavorite(store.id)}/>}
                                     </Button>
                                </Card.Text>                               
                            </Card.Body>
                        </Card>
                        </Col>
                ))}
                </Row>
                </Container>
            </div>
                            
>>>>>>> main
            ))}
        </ul>
    )
}
export default CategoryList;