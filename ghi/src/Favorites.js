import React, { useEffect, useState } from 'react';
import { useAuthContext } from './users/Auth';

function Favorites(props) {

    const { token } = useAuthContext();
    const [favorites, setFavorites] = useState([]);
    console.log('token',token)

    
    async function getFavorites() {
        const fetchConfig = {
            method: "get",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        };
        const url = `${process.env.REACT_APP_USER}/user/favorites/`
        console.log('url', url)
        const response = await fetch(url, fetchConfig);
        console.log('response', response)
        if (response.ok) {
            console.log('got response')
            const data = await response.json();
            setFavorites(data)
        }
    }
    useEffect(() => {
        getFavorites();
    }, []);


    return (
        <ul>
            {/* {console.log('favorites', favorites)}
            {favorites?.map(item => {
            return (
            <li className="list-group list-group-horizontal" key = {item.id}>
                <p className="list-group-item">
                {item.id}
                </p>
            </li>
            )})} */}
        </ul>
)}

export default Favorites;
