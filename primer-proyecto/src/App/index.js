import React from "react";
import "./index.css";
import { TodoCounter } from "../TodoCounter/index";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoForm } from "../TodoForm/index.js";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { EmptySearchResults } from "../EmptySearchResults";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { ChangeAlert } from "../ChangeAlert";
import { Modal } from '../Modal/index.js';
import "./index.css";
import { TodoHeader } from '../TodoHeader';
import { useTodos } from './useTodos';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    completedTodos,
    totalTodos,
    searchValue, 
    setSearchValue,
    addTodo, 
    setOpenModal,
    sincronizeTodos
  } = useTodos();

  return (
    <React.Fragment>
        <div className="form-container">

            <div className="form">
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
            <TodoHeader loading={loading}>
                <TodoCounter 
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <TodoSearch 
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>

            <TodoList
                error={error}
                loading={loading}
                totalTodos={totalTodos}
                searchedTodos={searchedTodos}
                searchText={searchValue}
                onError={() => <TodosError/>}
                onLoading={() => <TodosLoading/>}
                onEmptyTodos={() => <EmptyTodos/>}
                onEmptySearchResults={() => 
                    <EmptySearchResults
                        searchText={searchValue}
                    />
                }
            >
                {todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onCompleted={() => completeTodo(todo.text)}
                        onDeleted={() => deleteTodo(todo.text)}
                    />
                )}
            </TodoList>

            { !!openModal && (
                <Modal>
                    <div className="modal">
                        <TodoForm
                        addTodo={addTodo}
                        setOpenModal={setOpenModal}
                        />
                    </div>
                </Modal>
            )}
            </div>
        </div>
        <ChangeAlert 
            sincronize={sincronizeTodos}
        />
    </React.Fragment>
);
}

export default App;
