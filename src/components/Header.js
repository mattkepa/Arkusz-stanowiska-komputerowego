import React from 'react';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__logo"></div>
      <h1 className="header__heading">Arkusz stanowiska komputerowego</h1>
      <p className="header__lead">
        Ten arkusz kalkulacyjny wydatków pomoże Ci podliczyć koszty stworzenia
        nowego stanowiska komputerowego.
      </p>
    </div>
  );
}

export default Header;
