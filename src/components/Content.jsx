import React, { useState, useEffect } from "react";

import TodoList from "./TodoList.jsx"
import ContentFooter from "./ContentFooter.jsx"

const Content = ({}) => {
  return (
    <>
      <div>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TodoList/>
        </section>
        {/* This footer should hidden by default and shown when there are todos */}
       <ContentFooter/>
      </div>
    </>
  );
};

export default Content;