import { Component } from 'react';
import './edit-item-in-form.scss';
import { AiFillEdit } from 'react-icons/ai';

import ModalWindow from '../modal-window/modal-window';

class EditItemInForm extends Component {
  state = {
    newLabel: '',
    newDescription: '',
    isShow: false,
  };

  openModal = () => {
    this.setState({
      isShow: true,
    });
  };

  closeModal = () => {
    this.setState({
      isShow: false,
    });
  };

  onLabelChange = (e) => {
    this.setState({
      newLabel: e.target.value,
    });
  };

  onDescriptionChange = (e) => {
    this.setState({
      newDescription: e.target.value,
    });
  };

  handelChangeTask = () => {
    const { id, items } = this.props;
    console.log(items);
    const index = items.findIndex((el) => el.id === id);
    this.setState({
      newLabel: items[index].label,
      newDescription: items[index].description,
    });
    this.openModal();
  };

  onSubmit = () => {
    const { id, items } = this.props;
    const { newLabel, newDescription } = this.state;
    this.props.onItemEdit(newLabel, newDescription, items, id);
    this.setState({
      newLabel: '',
      newDescription: '',
    });
    this.closeModal();
  };

  render() {
    const { newLabel, newDescription } = this.state;
    if (this.state.isShow) {
      return (
        <>
          <ModalWindow
            onDescriptionChange={(e) => this.onDescriptionChange(e)}
            onLabelChange={(e) => this.onLabelChange(e)}
            onSubmit={() => this.onSubmit()}
            closeModalWindow={() => this.closeModal()}
            defaultValueLabel={newLabel}
            defaultValueDescription={newDescription}
          />
          <button className='item-btn' onClick={this.handelChangeTask}>
            <AiFillEdit size='25' />
          </button>
        </>
      );
    }
    return (
      <button className='item-btn' onClick={this.handelChangeTask}>
        <AiFillEdit size='25' />
      </button>
    );
  }
}

export default EditItemInForm;
