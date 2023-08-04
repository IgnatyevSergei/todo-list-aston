import React, { Component } from 'react';
import './on-toggle-theme.scss'

class OnToggleTheme extends Component {
  render() {
    const { onToggleDarkTheme, onToggleLightTheme, theme } = this.props;
    console.log(theme);
    return (
      <div className='theme-controller'>
        <button
          className='theme-controller__btn'
          disabled={theme === 'light'}
          onClick={onToggleDarkTheme}>
          Light
        </button>
        <button
          className='theme-controller__btn'
          disabled={theme === 'dark'}
          onClick={onToggleLightTheme}>
          Dark
        </button>
      </div>
    );
  }
}

export default OnToggleTheme
