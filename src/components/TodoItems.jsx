import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        {isComplete ? (
          <FaRegCheckCircle size={22} className="w-7" />
        ) : (
          <MdRadioButtonUnchecked size={22} className="w-7" />
        )}
        <p className={`ml-2 text-[17px] ${isComplete ? "line-through" : ""}`}>
          {text}
        </p>
      </div>
      <MdDelete
        size={20}
        className="cursor-pointer"
        onClick={() => {
          deleteTodo(id);
        }}
      />
    </div>
  );
};

export default TodoItems;
