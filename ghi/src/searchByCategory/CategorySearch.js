import React, { useEffect, useState } from "react"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import cities from "../worldcities.json"
import categories from "./categories_id.json"
import categories_id from './categories_id.json'
import { useNavigate } from "react-router-dom"
import { Redirect } from "react-router-dom"
import Button from 'react-bootstrap/Button'




function CategorySearch(props) {

  const northAmericaList = [{ city: 'Austin', admin_name: 'Texas', country: 'United States', id: 1840019590 }, { city: 'Atlanta', admin_name: 'Georgia', country: 'United States', id: 1840013660 }, { city: 'Miami', admin_name: 'Florida', country: 'United States', id: 1840015149 }, { city: 'Las Vegas', admin_name: 'Nevada', country: 'United States', id: 1840020364 }, { city: 'Denver', admin_name: 'Colorado', country: 'United States', id: 1840018789 }, { city: 'Toronto', admin_name: 'Ontario', country: 'Canada', id: 1124279679 }, { city: 'Seattle', admin_name: 'Washington', country: 'United States', id: 1840021117 }, { city: 'Dallas', admin_name: 'Texas', country: 'United States', id: 1840019440 }, { city: 'San Francisco', admin_name: 'California', country: 'United States', id: 1840021543 }, { city: 'Vancouver', admin_name: 'British Columbia', country: 'Canada', id: 1124825478 }]
  const europeList = [{ city: 'Warsaw', admin_name: 'Mazowieckie', country: 'Poland', id: 1616024847 }, { city: 'Lisbon', admin_name: 'Lisboa', country: 'Portugal', id: 1620619017 }, { city: 'Porto', admin_name: 'Porto', country: 'Portugal', id: 1620356810 }, { city: 'Belgrade', admin_name: 'Beograd', country: 'Serbia', id: 1688374696 }, { city: 'Sofia', admin_name: 'Sofia-Grad', country: 'Bulgaria', id: 1100762037 }, { city: 'Kraków', admin_name: 'Małopolskie', country: 'Poland', id: 1616172264 }, { city: 'Berlin', admin_name: 'Berlin', country: 'Germany', id: 1276451290 }, { city: 'Budapest', admin_name: 'Budapest', country: 'Hungary', id: 1348611435 }, { city: 'Istanbul', admin_name: 'İstanbul', country: 'Turkey', id: 1792756324 }]
  const oceaniaList = [{ city: 'Melbourne', admin_name: 'Victoria', country: 'Australia', id: 1036533631 }, { city: 'Sydney', admin_name: 'New South Wales', country: 'Australia', id: 1036074917 }, { city: 'Auckland', admin_name: 'Auckland', country: 'New Zealand', id: 1554435911 }, { city: 'Wellington', admin_name: 'Wellington', country: 'New Zealand', id: 1554772152 }, { city: 'Honolulu', admin_name: 'Hawaii', country: 'United States', id: 1840013305 }, { city: 'Christchurch', admin_name: 'Canterbury', country: 'New Zealand', id: 1554377228 }, { city: 'Perth', admin_name: 'Western Australia', country: 'Australia', id: 1036178956 }, { city: 'Suva', admin_name: 'Rewa', country: 'Fiji', id: 1242615095 }, { city: 'Queenstown', admin_name: 'Tasmania', country: 'Australia', id: 1036082142 }, { city: 'Brisbane', admin_name: 'Queensland', country: 'Australia', id: 1036192929 }]
  const asiaList = [{ city: 'Seoul', admin_name: 'Seoul', country: 'South Korea', id: 1410836482 }, { city: 'Bangkok', admin_name: 'Krung Thep Maha Nakhon', country: 'Thailand', id: 1764068610 }, { city: 'Chiang Mai', admin_name: 'Chiang Mai', country: 'Thailand', id: 1764662886 }, { city: 'Phuket', admin_name: 'Phuket', country: 'Thailand', id: 1764327831 }, { city: 'Kuala Lumpur', admin_name: 'Kuala Lumpur', country: 'Malaysia', id: 1458988644 }, { city: 'Ko Pha-Ngan', admin_name: 'Surat Thani', country: 'Thailand', id: 1764665411 }, { city: 'Taipei', admin_name: 'Taipei', country: 'Taiwan', id: 1158881289 }, { city: 'Singapore', admin_name: 'Central Singapore', country: 'Singapore', id: 1702341327 }, { city: 'Ubud', admin_name: 'Bali', country: 'Indonesia', id: 1360332409 }, { city: 'Ho Chi Minh City', admin_name: 'Hồ Chí Minh', country: 'Vietnam', id: 1704774326 }]

  const [selectedCities, setSelectedCities] = useState(oceaniaList)
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

  const handleOnCitySelect = function (item) {
    setSelectedCities([...selectedCities, { city: item.city, admin_name: item.admin_name, country: item.country, id: item.id }])
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
    navigate('category', { state: { category: item, cities: selectedCities } })

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
    console.log('selected cities', city_list)
    return (
      <div className="container vertical-scrollable" style={{ maxHeight: 150, overflowY: 'scroll', backgroundColor: 'white' }}>
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
          )
        })}
      </div>
    )
  }

  function presetButtons() {
    return (
      <>
        <Button variant="secondary" style={{borderRadius:30, opacity:.9, marginTop: 10}} onClick={() => setSelectedCities(northAmericaList)}> North America</Button>{' '}
        <Button variant="secondary" style={{borderRadius:30, opacity:.9, marginTop: 10}} onClick={() => setSelectedCities(europeList)}> Europe</Button>{' '}
        <Button variant="secondary" style={{borderRadius:30, opacity:.9, marginTop: 10}} onClick={() => setSelectedCities(asiaList)}> Asia</Button>{' '}
        <Button variant="secondary" style={{borderRadius:30, opacity:.9, marginTop: 10}} onClick={() => setSelectedCities(oceaniaList)}> Oceania</Button> 
      </>

    )
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6' style={{ paddingBottom: 400, paddingRight: 100 }}>
          <div className='d-flex justify-content-center'>
          </div>
          <div style={{ width: 300 }}>
            <ReactSearchAutocomplete
              key='category search'
              items={categories_id}
              fuseOptions={{ keys: ['title', 'alias'] }}
              resultStringKeyName='title'
              onSelect={handleOnCategorySelect}
              autoFocus
              formatResult={formatCategoryResult}
              maxResults={5}
              handleOnSearch={handleOnCategorySearch}
              placeholder="Search for a thing to do"
              handleOnHover={handleOnCategoryHover}
              handleOnFocus={handleOnCategoryFocus}
              styling={{ borderRadius: "10px" }}
            />
          </div>
        </div>
        <div className='col-6' style={{ paddingBottom: 400 }}>
          <div className='justify-content-center'>
          </div>
          <div style={{ width: 300 }}>
            <ReactSearchAutocomplete
              items={cities}
              fuseOptions={{ keys: ['city', 'country', 'admin_name'] }}
              resultStringKeyName='city'
              onSelect={handleOnCitySelect}
              autoFocus
              formatResult={formatCityResult}
              maxResults={5}
              handleOnSearch={handleOnCitySearch}
              placeholder="Search for a city"
              handleOnHover={handleOnCityHover}
              handleOnFocus={handleOnCityFocus}
              styling={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
      <div className='text-center' style={{ backgroundColor: "white", fontSize: 20, fontWeight: "bold", opacity: .9, borderRadius: 30, overflowX: "hidden", marginTop: -200, width: 650 }}>
        Your Current Cities Selection
        <div className='text-center' style={{ fontSize: 17 }}>
          {listSelectedCities(selectedCities)}
        </div>

      </div>
      {presetButtons()}
    </div>
  )
}


export default CategorySearch


