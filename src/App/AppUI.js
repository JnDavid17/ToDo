import React from 'react';
// Importamos nuestro contexto
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
  } = React.useContext( TodoContext )

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      {/* Podemos acceder a nuestro contexto con el consumer */}
          <TodoList>
            {error && <TodosError/>}
            {loading && <TodosLoading/>}
            {(!loading && !searchedTodos.length) && <EmptyTodos/>}
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

            {
              openModal &&(
                <Modal>
                  <TodoForm/>
              </Modal>
              )
            }

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export { AppUI };