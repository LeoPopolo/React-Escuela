import React from "react";
import { TodoContext } from "../TodoContext";
import "./index.css";

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

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