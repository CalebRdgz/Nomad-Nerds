import React, { useEffect, useState } from 'react';
import { useAuthContext } from './users/Auth';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Favorites() {

    const { token } = useAuthContext();
    const [favorites, setFavorites] = useState([]);
    const [businesses, setBusinesses] = useState([]);
    const [sortedBusinesses, setSortedBusinesses] = useState([])
    console.log('token',token)

    function parseJwt(token) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const token_info = JSON.parse(window.atob(base64));
        console.log('token_info', token_info)
        return token_info.user.username
    }

    async function getFavorites() {
        const fetchConfig = {
            credentials: "include",
            method: "get",
            headers: {
                // "Access-Control-Request-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
                // "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
                "Authorization": `Bearer ${token}`,
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Headers": "*",
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
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Headers": "*"
            }
        };
        // const url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/details?id=${favorite}`;
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

    function sortBusinesses() {
        console.log('started the sortbusiness function')
        console.log('businesses', businesses)
        const data = {}
        for (let business of businesses) {
            console.log('in the for loop', business)
            const city = Object.values(business)[0]["city"]
            const state = Object.values(business)[0]["state"]
            console.log(city, state, "city and state")
            const location = city + ", " + state
            if (data.hasOwnProperty(location)) {
                data[location].push(business)
            } else {
                data[location] = [business]
            }
            console.log('data', data)
        } setSortedBusinesses(data);
    } 

    
    useEffect(() => {
        getFavorites();
    }, []);
    useEffect(() => {
        getBusinesses();
    }, [favorites]);
    useEffect(() => {
        sortBusinesses();
    }, [businesses]);
    console.log('businesses', businesses)

    // function priceCheck(check){
    //     if(check){
    //         return (Price: {Object.values(store)[0].price} <br />)
    //     }
    // }

    return (
        
        <div>
            <h1 className="text-center"> {parseJwt(token)}'s Favorites </h1>
                <ul>
                    {console.log('sorted businesses', sortedBusinesses)}
                    {Object.keys(sortedBusinesses).map((location, index) => 
                        <div key={index}>
                            <h1>{location}</h1>
                            <Container className="container-fluid">
                            <Row className="flex-nowrap flex-row" style={{overflowX: "scroll"}}>
                                {sortedBusinesses[location].map((store, idx) => (
                                    <Col key={idx} className="col-3">
                                    <Card>
                                        {console.log('store', store)}
                                    <Card.Img variant="top" src={Object.values(store)[0].image_url} height={200} />
                                    
                                        <Card.Title>{Object.values(store)[0].name}</Card.Title>
                                        <Card.Body>
                                            <Card.Text>
                                                {Object.values(store)[0].display_address[0]}<br />
                                                {Object.values(store)[0].display_address[1]}<br />
                                                {Object.values(store)[0].display_address[2]}<br />
                                                {Object.values(store)[0].price? `Price: ${Object.values(store)[0].price}`: ''}<br />    
                                                Rating: {Object.values(store)[0].rating}
                                            </Card.Text>
                                            <button className="btn btn-danger" onClick={(e) => deleteFavorite(Object.values(store)[0].id)}>X</button>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                            ))}
                            </Row>
                            </Container> 


                            
                        </div>)}

                </ul>
        </div>
)}

export default Favorites;
