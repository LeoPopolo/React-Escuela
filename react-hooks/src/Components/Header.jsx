import React, { useState, useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

const Header = () => {
    const [ darkMode, setDarkMode ] = useState(false);

    const color = useContext(ThemeContext);

    if (darkMode) {
        document.body.style.background = "#252525";
    } else {
        document.body.style.background = "#fff";
    }

    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className='Header'>
            <h1
                style={{ color }}
            >Rick and Morty</h1>
            <button 
                type="button"
                onClick={handleClick}
            >{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
    );
}

export default Header;