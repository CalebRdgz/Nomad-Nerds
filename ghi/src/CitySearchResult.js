import { useState, useEffect } from "react"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import cities from "./worldcities.json"


function CategorySearchResult(props) {
  const [selectedCities, setSelectedCities] = useState([{city:'Denver', admin_name: 'Colorado', country: 'United States', id: 0}])
  const [activities, setActivities] = useState([]);  
  useEffect(() => {
    async function getActivities() {
        const url = `${process.env.REACT_APP_API-YELP}/api-yelp/businesses/categories/search?location=nyc&quantity=2`;
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        console.log(response)
        if (response.ok) {
            console.log('ok')
            const data = await response.json();
            setActivities(data);
            console.log(data)
        }
    }
    getActivities();
  }, [setActivities]);
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
        {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
        <span style={{ display: 'block', textAlign: 'left' }}>{item.city}, {item.admin_name}, {item.country}</span>
      </>
    )
  }
  // function removeCity(item_key) {
  //   setSelectedCities(selectedCities.filter())
  // }
  const listSelectedCities = (city_list) => (
    <ul>
      {city_list.map(item => {
        return (
        <li className="list-group list-group-horizontal" key = {item.id}>
          <p className="list-group-item">
            {item.city}, {item.admin_name}, {item.country}
          </p>
          <button onClick={() => setSelectedCities(selectedCities.filter(city => city.id !== item.id))} className="btn btn-danger">X</button>
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
            placeholder="Enter location"
          />
        </div>
        <div>
          {listSelectedCities(selectedCities)}
        </div>
      </header>
    </div>
  )
  }
// }
export default CategorySearchResult