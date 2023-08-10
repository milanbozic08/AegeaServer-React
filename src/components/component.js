import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <label className="component-text">{props.text}</label>
      <label className="component-text1">
        <span>Name</span>
        <br></br>
      </label>
      <input
        type="text"
        name="name_in_user"
        placeholder={props.textinput_placeholder}
        className="component-textinput input"
      />
      <label className="component-label">
        <span>Password</span>
        <br></br>
      </label>
      <input
        type="text"
        name="name_in_pass"
        placeholder={props.textinput_placeholder1}
        className="component-textinput1 input"
      />
      <button
        name="name_bt_login"
        type="button"
        className="component-button button"
      >
        {props.button}
      </button>
    </div>
  )
}

AppComponent.defaultProps = {
  textinput_placeholder1: 'password',
  rootClassName: '',
  textinput_placeholder: 'user',
  text: 'Sign In',
  button: 'Log In',
}

AppComponent.propTypes = {
  textinput_placeholder1: PropTypes.string,
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
}

export default AppComponent
