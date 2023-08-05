import React, { Component } from 'react';
import './modal-window.scss';

class ModalWindow extends Component {
  render() {
    const {
      onDescriptionChange,
      onLabelChange,
      onSubmit,
      closeModalWindow,
      defaultValueLabel,
      defaultValueDescription,
    } = this.props;

    if (onSubmit) {
      return (
        <div className='modal-wrapper'>
          <div className='modal-window-container'>
            <span className='modal-window-container__task-name'>
              Task name:
            </span>
            <input
              defaultValue={defaultValueLabel}
              type='text'
              onChange={onLabelChange}
              className='modal-window-container__title'></input>
            <span className='modal-window-container__task-description'>
              Task description:
            </span>
            <textarea
              defaultValue={defaultValueDescription}
              onChange={onDescriptionChange}
              className='modal-window-container__description'
              placeholder='enter task description'
            />
            <div className='modal-window-container__btn'>
              <button className='modalBtn' onClick={onSubmit}>
                Save
              </button>
              <button className='modalBtn' onClick={closeModalWindow}>
                Close
              </button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className='modal-wrapper'>
        <div className='modal-window-container'>
          <span className='modal-window-container__task-name'>Task name:</span>
          <input
            defaultValue={defaultValueLabel}
            type='text'
            onChange={onLabelChange}
            className='modal-window-container__title'></input>
          <span className='modal-window-container__task-description'>
            Task description:
          </span>
          <textarea
            defaultValue={defaultValueDescription}
            onChange={onDescriptionChange}
            className='modal-window-container__description'
            placeholder='enter task description'
          />
          <div className='modal-window-container__btn'>
            <button className='modalBtn' onClick={closeModalWindow}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalWindow;
