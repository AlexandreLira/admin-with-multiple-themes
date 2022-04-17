import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllPokemons, searchPokemon } from '../../services/api';

import DropDown from '../dropdown/DropDown';
import ThemeMenu from '../themeMenu/ThemeMenu';

import notifications from '../../assets/JsonData/notification.json'
import user_menu from '../../assets/JsonData/user_menus.json'
import user_image from '../../assets/images/ash_ketchum.jpg'
import './topnav.css';


const curr_user = {
    display_name: 'Ash Ketchum',
    image: user_image,
}

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav_right-user">
        <div className="topnav_right-user_image">
            <img src={user.image} alt="user" />
        </div>
        <div className="topnav_right-user_name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item, index) => (
    <Link to="/" key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const TopNav = () => {
    const [search, setSearch] = useState('')
    const [pokemons, setPokemons] = useState([])
    const navigate = useNavigate()

    const onChangeHandler = (event) => {
        setSearch(event.target.value)
    }

    const onSearchHandler = async () => {
        const result = await searchPokemon(search)
        navigate('pokemon')
        
    }

    useEffect(() => {
        const loadPokemons = async () => {
            const result = await getAllPokemons(10000, 0)
            setPokemons(result.results)
        }
        loadPokemons()
    }, [])

    return(
        <div className="topnav">
            <div className="topnav_search">
                <input 
                    type="text" 
                    className="topnav_search-input"
                    list="pokemonsList"
                    placeholder="Search here..."
                    value={search}
                    onChange={event => onChangeHandler(event)}
                />
                <datalist id="pokemonsList">
                    {pokemons.map((item, index) => {
                        const name = item.name.replaceAll('-', ' ')
                        return (
                            <option key={index} value={name} />
                        )
                    }
                    )}
                </datalist>
                <button onClick={onSearchHandler}>
                    <i className="bx bx-search topnav_search-icon"></i>
                </button>
            </div>
            <div className="topnav_right">

                <div className="topnav_right-item">
                    <DropDown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>

                <div className="topnav_right-item">
                    <DropDown
                        icon="bx bx-bell"
                        badge="12"
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                </div>

                <div className="topnav_right-item">
                    <ThemeMenu/>
                </div>
            </div>
        </div>
    )
}

export default TopNav;