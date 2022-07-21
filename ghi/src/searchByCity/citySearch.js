import { useState, useEffect } from "react"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import cities from "../worldcities.json"
import { useNavigate } from "react-router-dom"

function CitySearch(props) {

  const [selectedCity, setSelectedCity] = useState({city:'Denver', admin_name: 'Colorado', country: 'United States', id: 0})

  const navigate = useNavigate();
  
  const handleOnSearch = (string, results) => {
      // onSearch will have as the first callback parameter
      // the string searched and for the second the results.
      console.log('OnSearch')
    }

  const handleOnHover = (result) => {
    // the item hovered
    console.log('OnHover')
  }

  const handleOnSelect = function (item)  {
    setSelectedCity(item)
    navigate('city',{state: {city:item}} )
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.city}, {item.admin_name}, {item.country}</span>
      </>
    )
  }

  const listCategories = (categories) => (
    <ul className="list-group">
      {categories.map((item, index)=>{
        return(
          <li key ={index}>
          <a href=''>{item}</a>
          </li>
        )
      })}
    </ul>
  )

  // const listSelectedCities = (city_list) => (
  //   <ul>
  //     {city_list.map(item => {
  //       return (
  //       <li className="list-group list-group-horizontal" key = {item.id}>
  //         <p className="list-group-item">
  //           {item.city}, {item.admin_name}, {item.country}
  //         </p>
  //         <button onClick={() => setSelectedCities(selectedCities.filter(city => city.id !== item.id))} className="btn btn-danger btn-sm list-group-item">X</button>
  //       </li>
  //     )})}
  //   </ul>
  // )

  return (

    <div className="Test">
      <header className="Test-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={cities}
            fuseOptions={{keys: ['city', 'country', 'admin_name']}}
            resultStringKeyName='city'
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            placeholder = 'Enter a City'
            formatResult={formatResult}
            maxResults={5}
          />
        </div>
      </header>
    </div>
  )
  }

export default CitySearch




