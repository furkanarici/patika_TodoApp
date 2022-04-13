import React, { useState, useEffect } from "react";

import Form from "./Form.jsx";

const Header = ({}) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <Form />
    </header>
  );
};

export default Header;
