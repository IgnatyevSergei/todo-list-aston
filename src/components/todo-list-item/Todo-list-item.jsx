import React, { Component } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BiArchiveIn } from 'react-icons/bi';
import { IoMdDoneAll } from 'react-icons/io';
import './todo-list-item.scss';
import EditItemInForm from '../edit-item-in-form/edit-item-in-form';
import ShowTask from '../show-task/show-task';

class TodoListItem extends Component {
  render() {
    const {
      items,
      onRemove,
      onToggleDone,
      onToggleImportant,
      closeModalWindow,
      openModalWindow,
      showModalWindow,
      onItemEdit,
    } = this.props;

    return items.map(({ id, label, done, archive }) => {
      let style = 'table-task-content';
      if (done) {
        style += ' done';
      }
      if (archive) {
        style += ' archive';
      }
      return (
        <tr className='row' key={id}>
          {/* <td className={style}>{label}</td> */}
          <ShowTask
            styleProps={style}
            label={label}
            items={this.props.items}
            id={id}
          />

          <td className='table-btn'>
            <EditItemInForm
              items={this.props.items}
              id={id}
              closeModalWindow={closeModalWindow}
              openModalWindow={openModalWindow}
              showModalWindow={showModalWindow}
              onItemEdit={onItemEdit}
            />
          </td>
          <td className='table-btn'>
            <button className='item-btn' onClick={() => onRemove(id)}>
              <AiFillDelete size='25' />
            </button>
          </td>
          <td className='table-btn'>
            <button className='item-btn' onClick={() => onToggleImportant(id)}>
              <BiArchiveIn size='25' />
            </button>
          </td>
          <td className='table-btn'>
            <button className='item-btn' onClick={() => onToggleDone(id)}>
              <IoMdDoneAll size='25' />
            </button>
          </td>
        </tr>
      );
    });
  }
}

export default TodoListItem;
