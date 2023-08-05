import React, { Component } from 'react';

import './Item-status-filter.scss';
import SearchPanel from '../search-panel/Search-panel';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' },
  { name: 'archive', label: 'Archive' },
];

class ItemStatusFilter extends Component {
  render() {
    const {theme} = this.props
    let style = 'btn-controller';
    if(theme === 'dark') {
      style += ' dark'
    }
    const buttons = filterButtons.map((button) => {
      return (
        <button
          className={style}
          key={button.name}
          onClick={() => this.props.onFilter(button.name)}>
          {button.label}
        </button>
      );
    });
    return (
      <div className='control-panel'>
        <div className='control-panel__btn'>{buttons}</div>
        <SearchPanel setSearchText={this.props.setSearchText} />
      </div>
    );
  }
}

export default ItemStatusFilter;
