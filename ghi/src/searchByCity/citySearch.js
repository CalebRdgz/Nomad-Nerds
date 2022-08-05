import { useState, useEffect } from "react"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import cities from "../worldcities.json"
import { useNavigate } from "react-router-dom"

function CitySearch(props) {

  const [selectedCity, setSelectedCity] = useState({ city: 'Denver', admin_name: 'Colorado', country: 'United States', id: 0 })

  const navigate = useNavigate();

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results
  }

  const handleOnHover = (result) => {
    // the item hovered
  }

  const handleOnSelect = function (item) {
    setSelectedCity(item)
    navigate('city', { state: { city: item } })
  }

  const handleOnFocus = () => {
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
      {categories.map((item, index) => {
        return (
          <li key={index}>
            <a href=''>{item}</a>
          </li>
        )
      })}
    </ul>
  )


  return (

    <div className="Test">
      <header className="Test-header">
        <div style={{ width: 400, paddingTop: -100 }}>
          <ReactSearchAutocomplete
            items={cities}
            fuseOptions={{ keys: ['city', 'country', 'admin_name'] }}
            resultStringKeyName='city'
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            placeholder='Search a city to find things to do'
            formatResult={formatResult}
            maxResults={5}
            styling={{ borderRadius: "10px" }}
          />
        </div>
      </header>
    </div>
  )
}

export default CitySearch




