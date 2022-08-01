import React, { useEffect, useState } from "react"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import cities from "../worldcities.json"
import categories from "./categories_id.json"
import categories_id from './categories_id.json'
import { useNavigate } from "react-router-dom"
import { Redirect } from "react-router-dom"




function CategorySearch(props) {

  const [selectedCities, setSelectedCities] = useState([{city:'Tampa', admin_name: 'Florida', country: 'United States', id: 1840015982},{city:'San Francisco', admin_name: 'California', country: 'United States', id: 1840021543}, {city: 'New York', admin_name: 'New York', country: 'United States', id: 1840034016}])
  const [selectedCategory, setSelectedCategory] = useState()
  const [rankedCities, setRankedCities] = useState()

  const navigate = useNavigate()

  const handleOnCitySearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnCityHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnCitySelect = function (item)  {
    setSelectedCities([...selectedCities,{city: item.city, admin_name: item.admin_name, country: item.country, id: item.id}])
  }

  const handleOnCityFocus = () => {
    console.log('Focused')
  }

  const formatCityResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.city}, {item.admin_name}, {item.country}</span>
      </>
    )
  }

  const handleOnCategorySearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnCategoryHover = (result) => {
    // the item hovered
    console.log(result)
  }


  const handleOnCategorySelect = function (item) {
    setSelectedCategory(item['alias'])
    console.log('alias', item.alias)
    console.log('item', item)
    navigate('category', {state:{category: item, cities: selectedCities}})

  }
  

  const handleOnCategoryFocus = () => {
    console.log('Focused')
  }

  const formatCategoryResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.title}</span>
      </>
    )
  }


  function listSelectedCities(city_list) {

    return (
    <div className="container vertical-scrollable" style={{maxHeight:150, overflow: 'scroll'}}>
      {city_list.map(item => {
        return (
          <div key={item.id} className="row">
            <div className="col-10">
              {item.city}, {item.admin_name}, {item.country}
            </div>
            <div className="col-2">
              <button onClick={() => setSelectedCities(selectedCities.filter(city => city.id !== item.id))} className="btn btn-xs btn-danger">X</button>
            </div>
          </div>
      )})}
    </div>
  )}

  return (
    <div className='container'>
      <div className='row gy-5'>
        <div className='col' style={{paddingBottom: 150}}>
          <div className='d-flex justify-content-center'>
          </div>
          <div style={{ width: 400 }}>
           <ReactSearchAutocomplete
              key='category search'
              items={categories_id}
              fuseOptions={{keys: ['title', 'alias']}}
              resultStringKeyName='title'
              onSelect={handleOnCategorySelect}
              autoFocus
              formatResult={formatCategoryResult}
              maxResults={5}
              handleOnSearch={handleOnCategorySearch}
              placeholder="Seach for a category"
              handleOnHover={handleOnCategoryHover}
              handleOnFocus={handleOnCategoryFocus}
              />
          </div>
        </div>
      <div className='row'>
        <div className='col' style={{paddingBottom: 150}}>
          <div className='d-flex justify-content-center'>
          </div>
          <div style={{ width: 400 }}>
           <ReactSearchAutocomplete
              items={cities}
              fuseOptions={{keys: ['city', 'country', 'admin_name']}}
              resultStringKeyName='city'
              onSelect={handleOnCitySelect}
              autoFocus
              formatResult={formatCityResult}
              maxResults={5}
              handleOnSearch={handleOnCitySearch}
              placeholder="Search for a location"
              handleOnHover={handleOnCityHover}
              handleOnFocus={handleOnCityFocus}
              />
          </div>
        </div>
      </div>
      <div className='text-center'>
        Current Pool of Cities
      </div>
      {listSelectedCities(selectedCities)}
      </div>
    </div>
  )
  }


export default CategorySearch


