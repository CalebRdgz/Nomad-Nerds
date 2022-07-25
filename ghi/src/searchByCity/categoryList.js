import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
      console.log('got category response')
      const data = await response.json();
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
      for (let i = 0; i < 5; i++) {
        if (categories[i]) {
          const business_url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/list?category=${categories[i]}&location=${city}&quantity=1`;
          const response = await fetch(business_url, fetchConfig);
          if (response.ok) {
            const data = await response.json();
            console.log(data, 'data')
            setBusinesses(businesses => [...businesses, data]);
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


  if (!categories || !businesses) {
    return ( <div>Loading...</div>)
  }
    

  return (
    <ul className="user-profiles-list-basic">
    <h1>{categories[0]}</h1>
        {/* <ul className="container-fluid py-2">
            <div className="d-flex flex-row flex-nowrap">
            {businesses[0]['businesses'].slice(0,10).map((business, index) =>
                <div key={index}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={business.image_url} height={200} />
                    <Card.Title>{business.name}</Card.Title>
                        <Card.Body>
                            <Card.Text>
                                {business.location.display_address[0]} <br />
                                {business.location.display_address[1]} <br />
                                Price: {business.price} <br />
                                Rating: {business.rating}
                            </Card.Text>
                            <Button variant="light">❤️️</Button>
                        </Card.Body>
                    </Card>
                </div>)}
            </div>
        </ul>
    <h1>{categories[1]}</h1>
        <ul className="container-fluid py-2">
            <div className="d-flex flex-row flex-nowrap">
                {businesses[1]['businesses'].slice(0,10).map((business, index) =>
                    <div key={index}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={business.image_url} height={200} />
                        <Card.Title>{business.name}</Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    {business.location.display_address[0]} <br />
                                    {business.location.display_address[1]} <br />
                                    Price: {business.price} <br />
                                    Rating: {business.rating}
                                </Card.Text>
                                <Button variant="light">❤️️</Button>
                            </Card.Body>
                        </Card>
                    </div>)}
                </div>
            </ul>
    <h1>{categories[2]}</h1>
        <ul className="container-fluid py-2">
            <div className="d-flex flex-row flex-nowrap">
                    {businesses[2]['businesses'].slice(0,10).map((business, index) =>
                        <div key={index}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={business.image_url} height={200} />
                            <Card.Title>{business.name}</Card.Title>
                                <Card.Body>
                                    <Card.Text>
                                        {business.location.display_address[0]} <br />
                                        {business.location.display_address[1]} <br />
                                        Price: {business.price} <br />
                                        Rating: {business.rating}
                                    </Card.Text>
                                    <Button variant="light">❤️️</Button>
                                </Card.Body>
                            </Card>
                        </div>)}
                    </div>
                </ul>
    <h1>{categories[3]}</h1>
        <ul className="container-fluid py-2">
            <div className="d-flex flex-row flex-nowrap">
                    {businesses[3]['businesses'].slice(0,10).map((business, index) =>
                        <div key={index}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={business.image_url} height={200} />
                            <Card.Title>{business.name}</Card.Title>
                                <Card.Body>
                                    <Card.Text>
                                        {business.location.display_address[0]} <br />
                                        {business.location.display_address[1]} <br />
                                        Price: {business.price} <br />
                                        Rating: {business.rating}
                                    </Card.Text>
                                    <Button variant="light">❤️️</Button>
                                </Card.Body>
                            </Card>
                        </div>)}
                    </div>
                </ul>
    <h1>{categories[4]}</h1>
        <ul className="container-fluid py-2">
            <div className="d-flex flex-row flex-nowrap">
                    {businesses[4]['businesses'].slice(0,10).map((business, index) =>
                        <div key={index}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={business.image_url} height={200} />
                            <Card.Title>{business.name}</Card.Title>
                                <Card.Body>
                                    <Card.Text>
                                        {business.location.display_address[0]} <br />
                                        {business.location.display_address[1]} <br />
                                        Price: {business.price} <br />
                                        Rating: {business.rating}
                                    </Card.Text>
                                    <Button variant="light">❤️️</Button>
                                </Card.Body>
                            </Card>
                        </div>)}
                    </div>
                </ul> */}
      {/* {categories.slice(0, 5).map((category, index) => (
        <div key={index}>
          <h1>{category}</h1> */}

        {/* </div>
      ))} */}
    </ul>
  );
}

export default CategoryList;
