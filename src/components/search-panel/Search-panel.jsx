import React, { Component } from "react";
import './search-panel.scss'

class SearchPanel extends Component {
  state = {
    search: "",
  };

  onChangeSearch = (e) => {
    this.setState({
      search: e.target.value,
    });

    this.props.setSearchText(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="search-box"
        placeholder="Enter the desired task"
        value={this.state.search}
        onChange={this.onChangeSearch}
      />
    );
  }
}

export default SearchPanel;
