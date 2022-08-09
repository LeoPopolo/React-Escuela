import React from "react";

function EmptySearchResults(props) {
    return(
        <h2>Sin resultados para {props.searchText}</h2>
    );
}

export { EmptySearchResults };
