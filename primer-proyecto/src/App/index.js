import React from "react";
import "./index.css";
import { AppUI } from "./AppUI";

function useLocalStorage(itemName, initialValue) {
  const [ error, setError] = React.useState(false);
  const [ loading, setLoading] = React.useState(true);
  const [ item, setItem ] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItems = [];
        
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(localStorageItems);
        }
  
        setItem(parsedItems);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  const saveItems = (newItems) => {
    try {
      const stringifiedItems = JSON.stringify(newItems);
  
      localStorage.setItem(itemName, stringifiedItems);
  
      setItem(newItems);
    } catch (error) {
      setError(error);
    }
  }

  return {
    item, 
    saveItems,
    loading,
    error
  };
}

function App() {

  const {
    item: todos, 
    saveItems: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

  const [ searchValue, setSearchValue ] = React.useState('');

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

  React.useEffect(() => {
    console.log('hola');
  }, [totalTodos]);

  return (
    <AppUI 
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
