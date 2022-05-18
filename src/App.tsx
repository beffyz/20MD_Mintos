import React, { useState } from 'react';
import styles from './App.module.scss';
import currencies from './models/currencyModel';
import Button from './components/Button/Button';
import CurrencyBox from './components/CurrencyBox/CurrencyBox';

const App = () => {
  const [checkedCurrencies, setCheckedCurrencies] = useState<string[]>([]);

  const currencyFilter = (currency: string) => (
    setCheckedCurrencies(checkedCurrencies.filter((item) => item !== currency))
  );

  const currencyToggle = (currency: string) => {
    if (checkedCurrencies.includes(currency)) {
      currencyFilter(currency);
    } else setCheckedCurrencies([...checkedCurrencies, currency]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className={styles.app}>
            <div>
              {checkedCurrencies.map((currency) => (
                <CurrencyBox
                  key={currency}
                  text={currency}
                  onClick={() => currencyFilter(currency)}
                />
              ))}
            </div>
            <div>
              {currencies.map((currency) => (
                <Button
                  key={currency}
                  text={currency}
                  selected={checkedCurrencies.includes(currency)}
                  onClick={() => currencyToggle(currency)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default App;
