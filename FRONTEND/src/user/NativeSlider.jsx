import React from 'react';

const NativeSlider = ({ name, value, min, max, step, onChange }) => {
  return (
    <div className='nav-slider'>
      <label>{name}:</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(name, parseFloat(e.target.value))}
      />
      <span>{value}</span>
    </div>
  );
};

export default NativeSlider;
