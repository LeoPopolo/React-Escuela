import React from "react";
import "./index.css";

function TodoList(props) {
    const renderFunc = props.children || props.render;

    return(
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(props.totalTodos > 0 && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
            {props.searchedTodos.map(renderFunc)}

            <ul>
                {renderFunc}
            </ul>
        </section>
    );
}

export { TodoList };
