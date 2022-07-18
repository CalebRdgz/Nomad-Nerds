import { useState} from "react"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import cities from "./worldcities.json"



function CitySearch(props) {

  const [selectedCities, setSelectedCities] = useState([{city:'Denver', admin_name: 'Colorado', country: 'United States', id: 0}])

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
    setSelectedCities([...selectedCities,{city: item.city, admin_name: item.admin_name, country: item.country, id: item.id}])
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

  const listSelectedCities = (city_list) => (
    <ul>
      {city_list.map(item => {
        return (
        <li className="list-group list-group-horizontal" key = {item.id}>
          <p className="list-group-item">
            {item.city}, {item.admin_name}, {item.country}
          </p>
          <button onClick={() => setSelectedCities(selectedCities.filter(city => city.id !== item.id))} className="btn btn-danger btn-sm list-group-item">X</button>
        </li>
      )})}
    </ul>
  )

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
            formatResult={formatResult}
            maxResults={5}
          />
        </div>
      </header>
      {listSelectedCities(selectedCities)}
    </div>
  )
  }

export default CitySearch


