import React, { useEffect, useState } from 'react';
import { useAuthContext } from './users/Auth';
import Card from "react-bootstrap/Card";

function Favorites() {

    const { token } = useAuthContext();
    const [favorites, setFavorites] = useState([]);
    const [businesses, setBusinesses] = useState([]);
    console.log('token',token)

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
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            }
        };
        const url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/details?id=${favorite}`;
        return fetch(url, fetchConfig);
    }

    function getBusinesses() {
        if (favorites && favorites.length > 0) {
            Promise.all(favorites
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
    console.log('favorites', favorites)

    async function deleteFavorite() {
        const fetchConfig = {
            credentials: "include",
            method: "delete",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        };
        const id = favorites
        const url = `${process.env.REACT_APP_USER}/user/favorites/${id}`
        const response = await fetch(url, fetchConfig);
        console.log('response', response)
        if (response.ok) {
            const data = await response.json();
            setFavorites(data);
        }

    }

    return (
        
        <div>
            <h1 className="text-center"> My Favorites </h1>
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
                                        {store.display_address[0]} <br />
                                        {store.display_address[1]} <br />
                                        Price: {store.price} <br />
                                        Rating: {store.rating}
                                    </Card.Text>
                                    <button className="btn btn-danger" onClick={deleteFavorite}>X</button>
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
