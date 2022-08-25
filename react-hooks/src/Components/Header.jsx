import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import '../Styles/Header.css';

const Header = ({darkMode, handleDarkMode}) => {

    const color = useContext(ThemeContext);

    if (darkMode) {
        document.body.style.background = "#252525";
    } else {
        document.body.style.background = "#fff";
    }

    return (
        <div className='Header'>
            <h1 className={`${darkMode && 'darkmode-title'} ${!darkMode && 'lightmode-title'}`}>Rick and Morty</h1>
            <button 
                className={`btn_set_darkmode ${darkMode && 'btn_set_darkmode--dark'} ${!darkMode && 'btn_set_darkmode--light'}`}
                type="button"
                onClick={handleDarkMode}
            >{darkMode ? 'Modo claro' : 'Modo oscuro'}</button>
        </div>
    );
}

export default Header;