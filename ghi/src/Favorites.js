import React, { useEffect, useState } from "react";
import { useAuthContext } from "./users/Auth";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillHeart } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import debounce from 'lodash.debounce';

function Favorites() {
  const { token } = useAuthContext();
  const [favorites, setFavorites] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [sortedBusinesses, setSortedBusinesses] = useState([]);

  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    const token_info = JSON.parse(window.atob(base64));
    return token_info.user.username;
  }

  async function getFavorites() {
    const fetchConfig = {
      credentials: "include",
      method: "get",
      headers: {
        "Access-Control-Request-Headers": "*",
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `${process.env.REACT_APP_USER}/user/favorites/`;
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setFavorites(data);
    }
  }

  function fetchBusinesses(favorite) {
    const fetchConfig = {
      method: "get",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    };

    const url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/details?id=${favorite}`;
    return fetch(url, fetchConfig)
  }

  const throttleBusinesses = (favorite) =>             
     fetchBusinesses(favorite)
    .then((res) => res.json())
    .then((data) => ({ [favorite]: data }))

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

  async function getBusinesses() {
    if (favorites && favorites.length > 0) {
      const data = []
      for (let i=0;i<favorites.length;i++){
        data.push(throttleBusinesses(favorites[i]))
        await sleep(250)
      }
      Promise.all(data).then((data) => setBusinesses(data))

    }
  }
  
  async function deleteFavorite(id) {
    const fetchConfig = {
      credentials: "include",
      method: "delete",
      headers: {
        "Access-Control-Request-Headers": "*",
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `${process.env.REACT_APP_USER}/user/favorites/${id}`;
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      setFavorites(favorites.filter((favorite) => favorite !== id));
    }
  }

  function sortBusinesses() {
    const data = {};
    console.log('businesses', businesses)
    for (let business of businesses) {
      const city = Object.values(business)[0]["city"];
      const state = Object.values(business)[0]["state"];
      const location = city + ", " + state;
      if (data.hasOwnProperty(location)) {
        data[location].push(business);
      } else {
        data[location] = [business];
      }
    }
    setSortedBusinesses(data);
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

  const cardImage = (store) => {
    return (
      <Card.Img
        variant="top"
        src={Object.values(store)[0].image_url}
        height={250}
      />
    );
  };

  const cardTitle = (store) => {
    return (
      <Card.Title
        style={{
          fontWeight: "bold",
          backgroundColor: "rgb(250, 250, 250)",
          padding: 20,
          paddingTop: 10,
        }}
      >
        {Object.values(store)[0].name}
        <div style={{ color: "green", fontSize: "16px" }}>
          {Object.values(store)[0].price ? Object.values(store)[0].price : ""}
        </div>
        {Object.values(store)[0].rating
          ? [...Array(Math.floor(Object.values(store)[0].rating))].map(
            (_, i) => (
              <span key={i}>
                <BsStarFill size="1em" color="rgb(222, 190, 60)" />
              </span>
            )
          )
          : ""}
        {Object.values(store)[0].rating ? (
          String(Object.values(store)[0].rating).slice(-2) === ".5" ? (
            <BsStarHalf size="1em" color="rgb(222, 190, 60)" />
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </Card.Title>
    );
  };

  const cardBody = (store) => {
    return (
      <Card.Body>
        <Card.Text>
          {Object.values(store)[0].display_address[0]}
          <br />
          {Object.values(store)[0].display_address[1]}
          <br />
          {Object.values(store)[0].display_address[2]}
          <Button
            variant="light"
            style={{ float: "right" }}
            onClick={(e) => deleteFavorite(Object.values(store)[0].id)}
          >
            <AiFillHeart size="1.8em" color="red" />
          </Button>
        </Card.Text>
      </Card.Body>
    );
  };

  return (
    <div>
      <h1
        style={{
          fontFamily: "verdana",
          fontWeight: "bold",
          fontSize: "40px",
          textAlign: "center",
          paddingTop: 30,
        }}
      >
        {parseJwt(token)}'s Favorites{" "}
      </h1>
      <ul>
        {Object.keys(sortedBusinesses).map((location, index) => (
          <div key={index}>
            <Container className="container-fluid">
              <h1
                className="card-title"
                style={{
                  fontFamily: "verdana",
                  fontWeight: "bold",
                  fontSize: "30px",
                  paddingBottom: 20,
                  paddingTop: 50,
                }}
              >
                {location}
              </h1>
              <Row
                className="flex-nowrap flex-row"
                style={{ overflowX: "scroll" }}
              >
                {sortedBusinesses[location].map((store, idx) => (
                  <Col key={idx} className="col-3">
                    <Card
                      style={{
                        width: "18rem",
                        backgroundColor: "rgb(250, 250, 250)",
                      }}
                    >
                      {cardImage(store)}
                      {cardTitle(store)}
                      {cardBody(store)}
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Favorites;
