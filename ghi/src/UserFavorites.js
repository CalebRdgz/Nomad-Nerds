import React from 'react';

function UserFavorites(props) {
    return (
        <div className="favorites">
            <h1>Favorites</h1>
            {props.favorites}
            <ul>
                <li></li>
            </ul>
        </div>
    )
}

export default UserFavorites;