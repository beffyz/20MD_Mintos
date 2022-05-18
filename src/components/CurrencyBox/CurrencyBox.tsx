import React, { FC } from 'react';
import styles from './CurrencyBox.module.scss';

type CurrencyBoxProps = {
    text: string,
    onClick: () => void,
}

const CurrencyBox:FC<CurrencyBoxProps> = ({ text, onClick }) => (
  <div className={styles.box}>
    <button onClick={onClick}>{text}</button>
  </div>
);

export default CurrencyBox;
