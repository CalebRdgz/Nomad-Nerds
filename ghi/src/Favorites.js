import React, { useEffect, useState } from 'react';
import { useAuthContext } from './users/Auth';
// import jwt_decode from 'jwt_decode';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiOutlineHeart } from "react-icons/ai";

function Favorites() {

    const { token } = useAuthContext();
    const [favorites, setFavorites] = useState([]);
    const [businesses, setBusinesses] = useState([]);
    console.log('token',token)
    // const decoded = jwt_decode(token)
    // const user = decoded.user.username

    
    async function getFavorites() {
        const fetchConfig = {
            credentials: "include",
            method: "get",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        };
        const url = `${process.env.REACT_APP_USER}/user/favorites/`
        console.log('url', url)
        const response = await fetch(url, fetchConfig);
        console.log('response', response)
        if (response.ok) {
            console.log('got response')
            const data = await response.json();
            setFavorites(data);
        }
    }

    function fetchBusinesses(favorite) {
        const fetchConfig = {
            method: "get",
            headers: {
                "Access-Control-Allow-Origin":"*",
                "Content-Type": "application/json",               
            }
        };
        const url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/details?id=${favorite}`;
        return fetch(url, fetchConfig);
    }

    function getBusinesses() {
        if (favorites && favorites.length > 0) {
            Promise.all(favorites.slice(0,15)
                .map(favorite => fetchBusinesses(favorite)
                    .then(res => res.json())
                    .then(data => ({[favorite]: data}))))
                .then(data => setBusinesses(data))
        }
    }

    useEffect(() => {
        getFavorites();
    }, []);
    useEffect(() => {
        getBusinesses();
    }, [favorites]);
    console.log('businesses', businesses)

    return (
        
        <div>
            <h1 className="text-center"> My Favorite </h1>
                <ul>
                    {businesses.map((business, index) => (
                        <div key={index}>
                            {Object.values(business).map((store, idx) => (
                                <div key={idx} className="col-3">
                                    <Card>
                                    <Card.Img variant="top" src={store.image_url} height={200} />
                                    <Card.Title>{store.name}</Card.Title>
                                    <Card.Body>
                                    <Card.Text>
                                        <ul>
                                        <li>Rating: {store.rating}</li>
                                        <li>Price: {store.price}</li>
                                        <li>Address: {store.display_address}</li>
                                        <li>Phone: {store.display_phone}</li>
                                        </ul>
                                    </Card.Text>
                                    <Button variant="light">< AiOutlineHeart size="1.8em" />️
                                    </Button>
                                    </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    ))}
                </ul>
        </div>
)}

export default Favorites;
