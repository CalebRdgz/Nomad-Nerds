import React, { useEffect, useState } from 'react';
import { useAuthContext } from './users/Auth';

function Favorites() {

    const { token } = useAuthContext();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        async function getFavorites() {
            const fetchConfig = {
                method: "get",
                headers: {
                    "Content-Type": "application/json",

                },
            };
            const url = `${process.env.REACT_APP_USER}/user/mine/favorites/`
            console.log('url', url)
            const response = await fetch(url, fetchConfig);
            console.log('response', response)
            if (response.ok) {
                console.log('got response')
                const data = await response.json();
            }
        } 
        getFavorites();
        }, [setFavorites],
        );

        return (
            <ul>
            {console.log('favorites', favorites)}
            {favorites?.map(item => {
            return (
            <li className="list-group list-group-horizontal" key = {item.id}>
                <p className="list-group-item">
                {item.id}
                </p>
            </li>
            )})}
        </ul>
)}

export default Favorites;
