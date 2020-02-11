import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
    </button>
    </div>

    {/* Conditional rendering in case there isn't any options to render */}
    {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
    {
      // Splitting all of the options into their own component
      props.options.map((option, index) => (
        <Option
          key={option}
          optionText={option}
          count={index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

export default Options;
