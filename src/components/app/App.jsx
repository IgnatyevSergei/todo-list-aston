import React, { Component } from 'react';
import './app.scss';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';
import OnToggleTheme from '../on-toggle-theme/on-toggle-theme';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchText: '',
      filter: 'all',
      theme: '',
    };
  }

  onFilterChange = (filterName) => {
    this.setState({
      filter: filterName,
    });
  };

  setSearchText = (text) => {
    this.setState({
      searchText: text,
    });
  };

  onRemove(id) {
    this.setState((state) => {
      const indx = state.items.findIndex((item) => item.id === id);
      const items = [
        ...state.items.slice(0, indx),
        ...state.items.slice(indx + 1),
      ];
      return { items };
    });
  }

  onItemAdd = (label, description) => {
    this.setState((state) => {
      const item = {
        id: Date.now(),
        label: label,
        description: description,
        done: false,
        archive: false,
      };
      return {
        items: [...state.items, item],
      };
    });
  };

  onItemEdit = (label, description, items, id) => {
    const index = items.findIndex((el) => el.id === id);
    const oldItem = items[index];
    const newItem = { ...oldItem, label, description };

    this.setState({
      items: [...items.slice(0, index), newItem, ...items.slice(index + 1)],
    });
  };

  toggleProperties = (items, id, property) => {
    const index = items.findIndex((item) => item.id === id);
    const oldItem = items[index];
    const itemNewValue = !oldItem[property];
    const newItem = { ...oldItem, [property]: itemNewValue };
    return [...items.slice(0, index), newItem, ...items.slice(index + 1)];
  };

  onToggleDone = (id) => {
    this.setState((state) => {
      return {
        items: this.toggleProperties(state.items, id, 'done'),
      };
    });
  };

  onToggleArchive = (id) => {
    this.setState((state) => {
      const items = this.toggleProperties(state.items, id, 'archive');
      return {
        items,
      };
    });
  };

  onSearchChange = (items, search) => {
    if (search.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };

  filterItems(items, filter) {
    if (filter === 'all') {
      return items;
    } else if (filter === 'active') {
      return items.filter((item) => !item.done && !item.archive);
    } else if (filter === 'done') {
      return items.filter((item) => item.done);
    } else if (filter === 'archive') {
      return items.filter((item) => item.archive);
    }
  }

  onToggleDarkTheme = () => {
    this.setState({
      theme: 'light',
    });
  };

  onToggleLightTheme = () => {
    this.setState({
      theme: 'dark',
    });
  };

  componentDidMount() {
    let localStorageData = JSON.parse(localStorage.getItem('todoList'));
    let localStorageTheme = JSON.parse(localStorage.getItem('theme'));
    if (localStorageData !== null) {
      this.setState({
        items: localStorageData,
        theme: localStorageTheme,
      });
    }
  }

  componentDidUpdate() {
    let localStorageData = JSON.parse(localStorage.getItem('todoList'));
    const { items } = this.state;
    if (items.length === 1) {
      localStorage.setItem('todoList', JSON.stringify(this.state.items));
      localStorage.setItem('theme', JSON.stringify(this.state.theme));
    }
    if (items.length === 0) {
      localStorage.removeItem('todoList');
    }
    if (items.length > 1) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].label !== localStorageData[i]?.label) {
          localStorage.setItem('todoList', JSON.stringify(this.state.items));
          localStorage.setItem('theme', JSON.stringify(this.state.theme));
        }
        if (items[i].done !== localStorageData[i]?.done) {
          localStorage.setItem('todoList', JSON.stringify(this.state.items));
          localStorage.setItem('theme', JSON.stringify(this.state.theme));
        }
        if (items[i].archive !== localStorageData[i]?.archive) {
          localStorage.setItem('todoList', JSON.stringify(this.state.items));
          localStorage.setItem('theme', JSON.stringify(this.state.theme));
        }
      }
    }
  }

  render() {
    const { items, searchText, filter, theme } = this.state;
    const visibleItems = this.onSearchChange(
      this.filterItems(items, filter),
      searchText
    );
    let style = 'container';
    if (theme === 'dark') {
      style += '-dark';
    }

    return (
      <div className={style}>
        <AppHeader />
        <OnToggleTheme
          onToggleDarkTheme={() => this.onToggleDarkTheme()}
          onToggleLightTheme={() => this.onToggleLightTheme()}
          theme={theme}
        />
        <ItemAddForm
          onItemAdd={this.onItemAdd}
          openModalWindow={() => this.openModalWindow()}
          closeModalWindow={this.closeModalWindow}
          showModalWindow={this.state.showModalWindow}
          theme={theme}
        />
        <ItemStatusFilter
          onFilter={this.onFilterChange}
          setSearchText={this.setSearchText}
          theme={theme}
        />
        <TodoList
          items={visibleItems}
          onRemove={(id) => this.onRemove(id)}
          onToggleDone={this.onToggleDone}
          onToggleArchive={this.onToggleArchive}
          showModalWindow={this.state.showModalWindow}
          openModalWindow={() => this.openModalWindow()}
          closeModalWindow={this.closeModalWindow}
          onItemEdit={this.onItemEdit}
          theme={theme}
        />
      </div>
    );
  }
}

export default App;
