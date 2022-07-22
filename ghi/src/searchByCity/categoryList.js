import { useLocation, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CategoryList() {
    const location = useLocation()
    const [categories, setCategories] = useState([]);
    const [businesses, setBusinesses] = useState([]);
    const city = location.state.city.city
    const category = location.state.category
    let formatted_businesses = businesses.map(business => 
        [business.id, business.name, business.image_url, business.rating, 
            business.location.display_address[0], business.location.display_address[1],
            business.price])
    console.log('businesses', businesses)
    console.log('formatted_businesses', formatted_businesses)
    let formatted_categories = categories.map(category => [category.id, category.name])
    console.log('formatted_categories', formatted_categories)
    const id = location.state

    useEffect(() => {
    async function getCategories() {
        const fetchConfig = {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/categories/?location=${city}&quantity=2`;
        console.log(url, 'this is url')
        const response = await fetch(url, fetchConfig);
        console.log(response, 'this is category response')
        if (response.ok) {
            console.log('got response')
            const data = await response.json();
            setCategories(data["categories"].map(city=>city[0]));
        }
    }
    
    getCategories();
    console.log('categories', categories)
  }, []);


    useEffect(()=> {
        async function getBusinesses() {
            const fetchConfig = {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/list?category=${category}&location=${city}&quantity=2`;
            const response = await fetch(url, fetchConfig);
            console.log(response, 'this is business response')
            if (response.ok) {
                console.log('got response')
                const data = await response.json();
                setBusinesses(data);
            }
        }
        getBusinesses();
    }, [category]);
  
    return (
        <div class="container-fluid py-2">
        <h2 class="font-weight-light">Category</h2>
            <div class="d-flex flex-row flex-nowrap">
            {formatted_businesses.map((business, index) =>
            <div key={index}>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ business[2] } height={200} />
                <Card.Title>{ business[1] }</Card.Title>
                    <Card.Body>
                        <Card.Text>
                        { business[4] } <br />
                        {business[5]} <br />
                        Price: { business[6] } <br />
                        Rating: { business[3] }
                        </Card.Text>
                        <Button variant="light">❤️️</Button>
                    </Card.Body>
                </Card>
                </div> 
            )}
            </div>
        </div>
            
    )
}

export default CategoryList

//   const listBusinesses = (categories) => {
//         businesses.map(business=>)


//     </div>



//   const listCategories = (categories) => 
//         {categories.map(category=>
//             listBusinesses(category)
//         )}


//   return(
//     <div>
//         {listCategories(categories)}
//     </div>
//   )
//   }

