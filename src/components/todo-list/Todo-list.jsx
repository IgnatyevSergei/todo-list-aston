import React, { Component } from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.scss';

class TodoList extends Component {
  render() {
    const {
      items,
      onRemove,
      onToggleDone,
      onToggleArchive,
      showModalWindow,
      openModalWindow,
      closeModalWindow,
      onItemEdit,
      theme,
    } = this.props;

    let style = 'table__header';
    if (theme === 'dark') {
      style += '-dark';
    }

    return (
      <table className='table'>
        <thead className={style}>
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
            onToggleArchive={(id) => onToggleArchive(id)}
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
