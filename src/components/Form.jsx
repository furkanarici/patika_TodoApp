import React, { useState, useEffect } from "react";

const Form = ({}) => {
  return (
    <form>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autofocus
      />
    </form>
  );
};

export default Form;
