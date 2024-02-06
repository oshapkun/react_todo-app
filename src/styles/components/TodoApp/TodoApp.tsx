import React, { useState } from 'react';
import { useTodos } from '../../../Store';
import { TodoList } from '../TodoList/TodoLis';
import { TodosFilter } from '../TodosFilter';

export const TodoApp: React.FC = () => {
  const {
    addTodo,
    clearCompleted,
    toggleAll,
    remainingTodos,
  } = useTodos();

  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>

        <form>
          <input
            type="text"
            data-cy="createTodo"
            className="new-todo"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          />
        </form>
      </header>

      <section className="main">
        <input
          type="checkbox"
          id="toggle-all"
          className="toggle-all"
          data-cy="toggleAll"
          onChange={toggleAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <TodoList />

      </section>

      <footer className="footer">
        <span className="todo-count">
          {remainingTodos}
          {' '}
          items left
        </span>

        <TodosFilter />

        <button
          type="button"
          className="clear-completed"
          onClick={clearCompleted}
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
};
