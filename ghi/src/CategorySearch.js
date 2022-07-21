import React, { useEffect, useState } from "react"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import cities from "./worldcities.json"
import categories from "./categories.json"
import categories_id from './categories_id.json'




function CategorySearch(props) {

  const [selectedCities, setSelectedCities] = useState([{city:'Denver', admin_name: 'Colorado', country: 'United States', id: 0}])
  const [selectedCategory, setSelectedCategory] = useState()
  const [rankedCities, setRankedCities] = useState()


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
    console.log(item.alias)

    
  // useEffect(() => {
  //   async function getRankedCities() {
  //     const cities_formatted = selectedCities.join('%3B').replaceAll(',', '%2C').replaceAll(' ','%20')
  //     const url = `${process.env.REACT_APP_API-YELP}/api-yelp/businesses/categories/${selectedCategory}&quantity=2cities=${cities_formatted}`
  //     const response = await fetch(url)
  //     if (response.ok) {
  //       const data = await response.json()
  //       setRankedCities(data)
  //     }
  //   }
  //   getRankedCities()
  // }, [setRankedCities])
      
    // Call api using the category
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

  // function listRankedCities(city_list) {
  //   return (
  //     <div className="container vertical-scrollable" style={{maxHeight:150, overflow: 'scroll'}}>
  //       {city_list.map(item => {
  //         return (
  //           <div key={item.id} className="row">
  //             <div className="col-10">
  //               {item.city}, {item.admin_name}, {item.country}
  //             </div>
  //             <div className="col-2">
  //               <button onClick={() => setSelectedCities(selectedCities.filter(city => city.id !== item.id))} className="btn btn-xs btn-danger">X</button>
  //             </div>
  //           </div>
  //       )})}
  //     </div>
  //   )}


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


