
import React from 'react';
import { InputFieldProps } from './type';
import styles from './style.module.css';

const InputField: React.FC<InputFieldProps> = ({ id, label, name, type, placeholder }) => {
  return (
    <div>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
