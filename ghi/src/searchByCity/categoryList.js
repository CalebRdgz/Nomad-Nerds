import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function CategoryList() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const city = (location.state.city.city).replace(/ /g, '%20');
  // const category = location.state.category
  // let formatted_businesses = businesses.map(business =>
  //     [business.id, business.name, business.image_url, business.rating,
  //         business.location.display_address[0], business.location.display_address[1],
  //         business.price])
  // console.log('businesses', businesses)
  // console.log('formatted_businesses', formatted_businesses)
  async function getCategories() {
    const fetchConfig = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const categories_url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/categories/?location=${city}&quantity=1`;
    console.log(categories_url, "this is categories url");
    const response = await fetch(categories_url, fetchConfig);
    console.log(response, "this is category response");
    if (response.ok) {
      const data = await response.json();
      console.log('data from categories', data)
      setCategories(data["categories"].map((category) => category[0]));
    }
  }
  async function getBusinesses() {
    console.log(categories, "before if statement");
    if (categories) {
      const fetchConfig = {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      };
      for (let i = 0; i < 10; i++) {
        if (categories[i]) {
          console.log("categories", categories[i], i);
          const business_url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/list?category=${categories[i]}&location=${city}&quantity=1`;
          const response = await fetch(business_url, fetchConfig);
          console.log('business url', business_url)
          if (response.ok) {
            const data = await response.json();
            console.log('data', data)
            setBusinesses((businesses) => [...businesses, data]);
            console.log('businesses', businesses)
          }
        }
      }
    }
  }
  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    getBusinesses();
  }, [categories]);
//   return (
//     <ul className="user-profiles-list-basic">
//       {categories.slice(0, 5).map((category, index) => (
//         <div key={index}>
//           <h1>{category}</h1>
//             <ul className="test">
//                 {businesses[0].map((business, index) => (
//                     <div key={index}>
//                         <Card style={{ width: '18rem' }}>
//                         <Card.Img variant="top" src={business.image_url} height={200} />
//                         <Card.Title>{business.name}</Card.Title>
//                         {business.location.display_address[0]} <br />
//                         </Card>
                        
//                     </div>
//                 ))}
//             </ul>
//         </div>
//       ))}
//     </ul>)
    }

export default CategoryList