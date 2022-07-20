import {useState } from 'react'


function CityList(new_city) {

    const [selectedCities, setSelectedCities] = useState([{city:'Denver', admin_name: 'Colorado', country: 'United States', id: 0}])

    // selectedCities = setSelectedCities(...selectedCities, new_city)
    return (
        <ul>
        {selectedCities.map(item => {
          return (
          <li className="list-group list-group-horizontal" key = {item.id}>
            <p className="list-group-item">
              {item.city}, {item.admin_name}, {item.country}
            </p>
            <button onClick={() => setSelectedCities(selectedCities.filter(city => city.id !== item.id))} className="btn btn-danger">X</button>
          </li>
        )})}
      </ul>
)}

export default CityList