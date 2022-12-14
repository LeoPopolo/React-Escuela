import React from "react";
import "./index.css";

function TodoSearch({searchValue, setSearchValue, loading}) {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <input 
        value={searchValue}
        onChange={(onSearchValueChange)}
        placeholder="Buscar" 
        disabled={loading}/>
    );
}

export { TodoSearch };