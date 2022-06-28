import React from 'react';
import './TodoItem.css';
import { TodoContext } from '../TodoContext';
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'

function TodoItem(props) {
  
  const {completedTodos, completeTodo } = React.useContext(TodoContext);

  return (
    <li className="TodoItem">
      <CompleteIcon
      completed={props.completed}
      onComplete={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <DeleteIcon
      onDelete={ props.onDelete}
      />
    </li>
  );
}

export { TodoItem };
