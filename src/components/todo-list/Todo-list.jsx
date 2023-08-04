import React, { Component } from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.scss';

class TodoList extends Component {
  render() {
    const {
      items,
      onRemove,
      onToggleDone,
      onToggleImportant,
      showModalWindow,
      openModalWindow,
      closeModalWindow,
      onItemEdit,
    } = this.props;

    return (
      <table className='table'>
        <thead className='table__header'>
          <tr className='todo-list-table-row'>
            <th className='todo-list-table-row__task-title'>Task</th>
            <th className='todo-list-table-row__task-btn'>Edit</th>
            <th className='todo-list-table-row__task-btn'>Delete</th>
            <th className='todo-list-table-row__task-btn'>Archiv</th>
            <th className='todo-list-table-row__task-btn'>Done</th>
          </tr>
        </thead>

        <tbody>
          <TodoListItem
            items={items}
            onRemove={(id) => onRemove(id)}
            onToggleDone={(id) => onToggleDone(id)}
            onToggleImportant={(id) => onToggleImportant(id)}
            showModalWindow={showModalWindow}
            openModalWindow={openModalWindow}
            closeModalWindow={closeModalWindow}
            onItemEdit={onItemEdit}
          />
        </tbody>
      </table>
    );
  }
}

export default TodoList;
