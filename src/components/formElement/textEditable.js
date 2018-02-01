import React from 'react';

const TextEditable = field => {
  const { name, value, onChange, onBlur, ...rest } = field.input;
  return (
    <div>
      <input
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
        type="text"
      />
    </div>
  );
};

export default TextEditable;
