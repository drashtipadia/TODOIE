import React from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";

const App = () => {
  return (
    <>
      <Header title="TODOIE" />
      <div className=" dark:bg-black dark:text-white grid min-h-screen">
        <Todo />
      </div>
    </>
  );
};

export default App;
