import React, { useEffect, useRef, useState } from "react";
import { FaRegCalendarPlus } from "react-icons/fa";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };
  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-slate-300  dark:bg-slate-700 place-self-center w-8/12 max-w-md flex flex-col px-5 min-h-[400px] rounded-xl">
      {/* -----------title------- */}
      <div className="flex items-center mt-7 gap-2 ">
        <FaRegCalendarPlus size={27} />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>
      {/* --------input box--------- */}
      <div className="flex items-center my-7 bg-gray-100 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-12 pl-6 pr-2 placeholder:text-slate-600 dark:text-black"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-blue-800 w-32 h-12 text-white text-lg font-medium cursor-pointer dark:bg-blue-600"
        >
          ADD +
        </button>
      </div>
      {/* -------todo list--------- */}
      <div>
        {todoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
