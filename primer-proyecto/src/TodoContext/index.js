import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos, 
        saveItems: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);
    
    const [ searchValue, setSearchValue ] = React.useState('');
    const [ openModal, setOpenModal ] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];
    
    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            
            return todoText.includes(searchText);
        });
    }


    const completeTodo = (text) => {
        const todoIndex = searchedTodos.findIndex(todo => todo.text === text);

        const newTodos = [...searchedTodos];

        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = searchedTodos.findIndex(todo => todo.text === text);

        const newTodos = [...searchedTodos];

        newTodos.splice(todoIndex, 1);

        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
        { props.children }
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };