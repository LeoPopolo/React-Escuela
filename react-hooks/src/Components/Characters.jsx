import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react';
import Search from './Search';
import useCharacters from '../Hooks/useCharacters';
import '../Styles/Characters.css';

const initialState = {
  favorites: []
}

const api = 'https://rickandmortyapi.com/api/character/';

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state;
  }
}

const Characters = ({darkMode}) => {

    const [ favorites, dispatch ] = useReducer(favoriteReducer, initialState);
    const [ search, setSearch ] = useState('');
    const searchInput = useRef(null);

    const characters = useCharacters(api);

    const handleClick = favorite => {
      dispatch({type: 'ADD_TO_FAVORITE', payload: favorite});
    }

    const handleSearch = useCallback(() => {
      setSearch(searchInput.current.value);
    }, []);

    const filteredUsers = useMemo(() => 
      characters.filter(user => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
      [characters, search]
    );

    return (
        <div className='characters'>

          <Search
            search={search}
            searchInput={searchInput}
            handleSearch={handleSearch}
          />

          <div className='data-container'>
            <div className='characters-container'>
              {filteredUsers.map(character => (
                
                <div className={`item ${darkMode && 'dark-item'} ${!darkMode && 'light-item'}`} key={character.id}>
                  <h2>{character.name}</h2>
                  <button type='button' onClick={() => handleClick(character)}>Agregar a favoritos
                  </button>
                </div>
              ))}
            </div>

            <div className='favorites-container'>

              <h2
                className={`${darkMode && 'darkmode-title'} ${!darkMode && 'lightmode-title'}`}
              >Favoritos</h2>

              {favorites.favorites.map(favorite => (
                <li key={favorite.id}>
                  {favorite.name}
                </li>
              ))}
            </div>
          </div>
        </div>
    );
}

export default Characters;