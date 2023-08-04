import React, { Component } from 'react';
import './Item-add-form.scss';
import ModalWindow from '../modal-window/modal-window';

class ItemAddForm extends Component {
  state = {
    label: '',
    description: '',
    isShow: false,
  };

  openModalWindow = () => {
    this.setState({
      isShow: true,
    });
  };

  closeModalWindow = () => {
    this.setState({
      isShow: false,
    });
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onSubmit = () => {
    const { label, description } = this.state;
    this.props.onItemAdd(label, description);
    this.setState({
      label: '',
      description: '',
    });
    this.closeModalWindow();
  };

  render() {
    const { label, description, isShow } = this.state;
    if (isShow) {
      return (
        <>
          <ModalWindow
            onDescriptionChange={(e) => this.onDescriptionChange(e)}
            onLabelChange={(e) => this.onLabelChange(e)}
            onSubmit={() => this.onSubmit()}
            closeModalWindow={this.closeModalWindow}
            label={label}
            description={description}
          />
          <button className='addTaskBtn' onClick={this.openModalWindow}>
            Add task
          </button>
        </>
      );
    }

    return (
      <button className='addTaskBtn' onClick={this.openModalWindow}>
        Add task
      </button>
    );
  }
}

export default ItemAddForm;
