import React from "react";
import "./index.css";

function TodoSearch({searchValue, setSearchValue}) {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <input 
        value={searchValue}
        onChange={(onSearchValueChange)}
        placeholder="Buscar" />
    );
}

export { TodoSearch };