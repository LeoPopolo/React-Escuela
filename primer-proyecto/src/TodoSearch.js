import React from "react";

function TodoSearch() {
    const [ searchValue, setSearchValue ] = React.useState('');

    const onSearchValueChange = (event) => {
        console.log(event);
        setSearchValue(event.target.value);
    }

    return [
        <input 
        key="item-1"
        onChange={(onSearchValueChange)}
        placeholder="Cebolla" />,
        <p
        key="item-2"
        >{searchValue}</p>
    ];
}

export { TodoSearch };