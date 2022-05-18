import React, { FC } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
    text: string,
    selected: boolean,
    onClick: () => void,
}

const Button:FC<ButtonProps> = ({ text, selected, onClick }) => (
  <button onClick={onClick} className={`${styles.btn} ${selected ? styles.btn_selected : ''}`}>
    <div className={`${styles.checkbox} ${selected ? styles.checkbox_selected : ''}`}>
      <span>X</span>
    </div>
    {text}
  </button>
);

export default Button;
