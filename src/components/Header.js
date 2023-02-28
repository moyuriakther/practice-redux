import React, { useState } from "react";
import notesImg from "../assets/images/notes.png";
import plusImg from "../assets/images/plus.png";
import ticket from "../assets/images/double-tick.png";
import { useDispatch } from "react-redux";
import { added, allCompleted, clearCompleted } from "../redux/todos/actions";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // if (e.key === "Enter") {
    dispatch(added(input));
    // }
    setInput("");
  };
  const completeAllTask = () => {
    dispatch(allCompleted());
  };
  const clearAllTask = () => {
    dispatch(clearCompleted());
  };
  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={notesImg} className="w-6 h-6" alt="Add todo" />
        <input
          onChange={handleInputChange}
          type="text"
          value={input}
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImg}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={completeAllTask}>
          <img className="w-4 h-4" src={ticket} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearAllTask}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
