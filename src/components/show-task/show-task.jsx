import React, { Component } from 'react';
import './show-task.scss';
import ModalWindow from '../modal-window/modal-window';

class ShowTask extends Component {
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

  render() {
    const { styleProps, label } = this.props;

    if (this.state.isShow) {
      return (
        <>
          <ModalWindow
            closeModalWindow={() => this.closeModal()}
            defaultValueLabel={this.state.newLabel}
            defaultValueDescription={this.state.newDescription}
          />
        </>
      );
    }

    return (
      <>
        <td onClick={this.handelChangeTask} className={styleProps}>
          {label}
        </td>
      </>
    );
  }
}

export default ShowTask;
