import React from 'react';
import PropTypes from 'prop-types';
import classes from './Slider.css';

const Slider = ({ onClick, isOn, 'data-testid': dataTestId }) => {
  const click = () => {
    onClick();
  };
  return (
    <label className={classes.Switch} htmlFor="referencing">
      <input
        type="checkbox"
        checked={isOn}
        onClick={click}
        id="referencing"
        data-testid={dataTestId}
      />
      <span className={classes.Slider} />
    </label>
  );
};

Slider.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOn: PropTypes.bool.isRequired,
  'data-testid': PropTypes.string.isRequired,
};

export default Slider;
