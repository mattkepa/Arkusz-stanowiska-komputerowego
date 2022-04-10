import React from 'react';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__logo"></div>
      <h1 className="header__heading">Arkusz stanowiska komputerowego</h1>
      <p className="header__lead">
        Ten arkusz kalkulacyjny wadatków pomoże Ci podliczyć koszty stworzenia
        nowgo stanowiska komputerowego.
      </p>
    </div>
  );
}

export default Header;
