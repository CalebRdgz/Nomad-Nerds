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
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

function CategoryList() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [business_id, setBusiness_id] = useState("");
  const [favorites, setFavorites] = useState([]);
  const { token } = useAuthContext();
  const city = location.state.city.city.replace(/ /g, "%20");
  const state = location.state.city.admin_name.replace(/ /g, "%20");
  const cityAndState = city + "%2C%20" + state;
  const navigate = useNavigate();


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

  async function getCategories() {
    const fetchConfig = {
      method: "get",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    const categories_url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/categories/?location=${cityAndState}&quantity=1`;
    const response = await fetch(categories_url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setCategories(data["categories"]);
    }
  }

  function fetchBusinesses(category, city) {
    const fetchConfig = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/list?category=${category}&location=${cityAndState}&quantity=1`;
    return fetch(url, fetchConfig);
  }

  function getBusinesses() {
    if (categories && categories.length > 0) {
      Promise.all(
        categories.slice(0, 5).map((category) =>
          fetchBusinesses(category[0], city)
            .then((res) => res.json())
            .then((data) => ({ [category[1]]: data }))
        )
      ).then((data) => setBusinesses(data));
    }
  }

  async function addFavorite(id) {
    const url = `${process.env.REACT_APP_USER}/user/favorites/`;
    let content = { business_id: id };
    const fetchConfig = {
      credentials: "include",
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setBusiness_id(data);
      if (favorites.includes(id) == false) {
        setFavorites([...favorites, id]);
      }
    }
    if (response.status === 403) {
      if (
        window.confirm(
          "You cannot save favorites because you are not currently logged in. Would you like to log in?"
        )
      ) {
        navigate("/user/login/");
      } else {
      }
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
      const data = await response.json();
      setFavorites(favorites.filter((favorite) => favorite != id));
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


  return (
    <ul>
      {businesses.map((business, index) => (
        <div key={index}>
          <Container className="container-fluid">
            <h1
              className="card-title"
              style={{
                fontFamily: "papyrus",
                fontWeight: "bold",
                padding: 20,
                paddingTop: 90,
              }}
            >
              {Object.keys(business)}
            </h1>
            <Row
              className="flex-nowrap flex-row"
              style={{ overflowX: "scroll" }}
            >
              {Object.values(business)[0]
                .slice(0, 15)
                .map((store, idx) => (
                  <Col key={idx} className="col-3">
                    <Card style={{ width: "19rem" }}>
                      <Card.Img
                        variant="top"
                        src={store.image_url}
                        height={250}
                      />
                      <Card.Body>
                        <Card.Title style={{ fontWeight: "bold" }}>
                        <Row style={{flexDirection: "row", alignItems: "flex-end"}}>
                          <div>{store.name}</div> 
                          <div style={{color: "green", fontSize: "16px"}}>{store.price ? store.price : ""}</div>
                        </Row>
                        {(store.rating) ? (
                            [...Array(Math.floor(store.rating))].map((_, i) => 
                            <span key={i}><BsStarFill size="1em"
                            color="rgb(222, 190, 60)"/>
                            </span>)
                          ) : ( 
                            ""
                          )}
                        {(store.rating) ? (
                          String(store.rating).slice(-2) == ".5" ? (<BsStarHalf size="1em"
                          color="rgb(222, 190, 60)"/>) : ("")
                        ) : (
                          ""
                        )}
                        </Card.Title>
                        <Card.Text>
                          {store.location.display_address[0]}
                          <br />
                          {store.location.display_address[1]}
                          <br />
                          {store.location.display_address[2]}
                          <Button variant="light"  style={{ float: "right" }}>
                            {favorites.includes(store.id) ? (
                              <AiFillHeart
                                size="1.8em"
                                style={{ color: "red" }}
                                onClick={() => deleteFavorite(store.id)}
                              />
                            ) : (
                              <AiOutlineHeart
                                size="1.8em"
                                onClick={() => addFavorite(store.id)}
                              />
                            )}
                          </Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Container>
        </div>
      ))}
    </ul>
  );
}
export default CategoryList;
