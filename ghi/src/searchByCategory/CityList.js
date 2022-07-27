import React, { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'


function CityList() {

    const location = useLocation()
    const [rankedCities, setRankedCities] = useState()

    const category = location.state.category.alias
    const cities = location.state.cities
    
    let formatted_cities = cities.map(city => [city.city, city.admin_name, city.country].join(',')).join(';')
    // useEffect(() => {
    //     async function getPhotos() {
    //         const fetchConfig = {
    //             method: 'get',
    //             headers: {
    //                 // "Content-Type": "application/json",
    //                 // 'Accept': 'application/json',
    //                 // "Access-Control-Allow-Origin": "http://localhost:3000, http://localhost",
    //                 // "Access-Control-Allow-Credentials": "true",
    //                 // "Access-Control-Allow-Headers": "*",
    //                 // "Access-Control-Request-Headers": "*"
    //             }
    //         }

    //         for (let city of cities) {
    //             const data = {
    //                 method: 'flickr.photos.search',
    //                 api_key: process.env.REACT_APP_API_FLICKR_KEY,
    //                 text: `${city.city}, ${city.admin_name}, ${city.country}, City`,
    //                 per_page: 1,
    //                 geo_context: 2,
    //                 sort: 'interestingness-desc',
    //                 format: "json",
    //                 nojsoncallback: 1
    //             }
    //             const parameters = new URLSearchParams(data)
    //             const url = `${process.env.REACT_APP_API_FLICKR_URL}/rest/?${parameters}`
    //             const response = await fetch(url, fetchConfig)
    //             if (response.ok) {
    //                 const data = await response.json()
    //                 photos[city.id] = data
    //             }
    //             else {
    //                 console.log(response)
    //             }
    //         }
    //     }
    //     getPhotos()
    // },[cities])

    useEffect(() => {
        async function getCities() {
            const fetchConfig = {
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                }
            }
            const url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/categories/search/?categories=${category}&quantity=2&cities=${formatted_cities}`
            const response = await fetch(url, fetchConfig)
            
            if (response.ok) {
                const data = await response.json()
                setRankedCities(data)
                
            }
        }
        getCities()
    }, [category])

    

    if (!rankedCities) {
        return ( <div>LOADING</div>)
    }

    useEffect(() => {
        async function getCities() {
            const fetchConfig = {
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                }
            }
            const url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/categories/search/?categories=${category}&quantity=2&cities=${formatted_cities}`
            const response = await fetch(url, fetchConfig)
            
            if (response.ok) {
                const data = await response.json()
                setRankedCities(data)
                
            }
        }
        getCities()
    }, [category])
            

    return (
        <ul className="user-profiles-list-basic">
            {rankedCities['categories'].map((city, index) =>
                
            <li key={index}>
                {/* <a href="#" className="user-avatar">
                    <img src="assets/images/avatars/1.jpg" width="80" alt="Profile of Adeline Yong" />
                </a> */}
                <p>
                    <a href="">{city[0]}</a>
                    <span>{city[0]}</span>
                </p>
                <a className="delete" href="#"><i className="fa fa-close"></i></a>
            </li>
            )}
        </ul>
    )
}

export default CityList