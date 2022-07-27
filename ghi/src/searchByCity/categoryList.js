import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ScrollMenu from 'react-horizontal-scrolling-menu';

function CategoryList() {
    const location = useLocation();
    const [categories, setCategories] = useState([]);
    const [businesses, setBusinesses] = useState([]);
    const city = (location.state.city.city).replace(/ /g, '%20');
    async function getCategories() {
        const fetchConfig = {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const categories_url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/categories/?location=${city}&quantity=1`;
        const response = await fetch(categories_url, fetchConfig);
        if (response.ok) {
            //   console.log('got category response')
            const data = await response.json();
            setCategories(data["categories"].map((category) => category[0]));
        }
    }
    
    function fetchBusinesses(category, city) {
        const fetchConfig = {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":"*",
            },
        };
        const url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/list?category=${category}&location=${city}&quantity=1`;
        return fetch(url, fetchConfig);
    }
    function getBusinesses() {
        if (categories && categories.length > 0) {
            Promise.all(categories.slice(0, 5)
                .map(category => fetchBusinesses(category, city)
                    .then(res => res.json())
                    .then(data => ({[category]: data}))))
                // .then(data => data.reduce((acc, category)=>({...acc, ...category}),{}))
                .then(data => setBusinesses(data))
        }
    }
    useEffect(() => {
        getCategories();
    }, []);
    useEffect(() => {
        getBusinesses();
    }, [categories]);
    console.log('businesses', businesses)

    return (
        <ul className="user-profiles-list-basic">
            {businesses.map((business, index) => (
            <div key={index}>
              <h1>{Object.keys(business)}</h1>
                  {Object.values(business)[0].slice(0,15).map((store, idx) => (
                    <div key={idx}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={store.image_url} height={200} />
                            <Card.Title>{store.name}</Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    {store.location.display_address[0]} <br />
                                    {store.location.display_address[1]}<br />
                                    Price: {store.price} <br />
                                    Rating: {store.rating}
                                </Card.Text>
                            <Button variant="light">❤️️</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
                </div>
                            
            ))}
        </ul>
    )
}
export default CategoryList;