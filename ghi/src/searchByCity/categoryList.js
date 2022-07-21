import { useLocation, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


function CategoryList() {
    const location = useLocation()
    // console.log(location.state)
    const [categories, setCategories] = useState([]);
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
    async function getCategories() {
        const fetchConfig = {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/categories/?location=${location.state.city.city}&quantity=2`;
        console.log(url, 'this is url')
        const response = await fetch(url, fetchConfig);
        console.log(response, 'this is response')
        if (response.ok) {
            console.log('got response')
            const data = await response.json();
            setCategories(data["categories"].map(city=>city[0]));
        }
    }
    getCategories();
  }, []);
  
  const listBusinesses = (category) => {
    <div className="container-fluid py-2">
        businesses.map


    </div>


  }

  const listCategories = (categories) => 
        {categories.map(category=>
            listBusinesses(category)
        )}


  return(
    <div>
        {listCategories(categories)}
    </div>
  )


export default CategoryList


    <h2 class="font-weight-light">Bootstrap 4 Horizontal Scrolling Cards with Flexbox</h2>
    <div class="d-flex flex-row flex-nowrap">
        <div class="card card-body">Card</div>
        <div class="card card-body">Card</div>
        <div class="card card-body">Card</div>
        <div class="card card-body">Card</div>
        <div class="card card-body">Card</div>
        <div class="card card-body">Card</div>
        <div class="card card-body">Card</div>
        <div class="card card-body">Card</div>
        <div class="card card-body">Card</div>
        <div class="card card-body">Card</div>
        <div class="card card-body">Card</div>
        <div class="card card-body">Card</div>
        <div class="card card-body">Card</div>
        <div class="card card-body">Card</div>
    </div>
</div>