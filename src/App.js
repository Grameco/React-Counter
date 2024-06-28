import React, { useState } from "react";

function App() {
  const [count, handleCounter] = useState(0);

  function decrease() {
    handleCounter(count - 1);
    console.log("subtracted")
  }

  function increase() {
    handleCounter(count + 1);
    console.log("added")
  }

  function reset() {
    handleCounter(0);
  }

  return (
    <div className="flex flex-col gap-10 w-full min-h-[100vh] bg-[#282c34] justify-center items-center">
      <h1 className="text-[#0398d4] text-[3rem]">Increment and Decrement</h1>
      <div className="flex justify-center gap-12 py-3 rounded-sm font-semibold text-[2rem] text-[#344151] bg-white">
        <button onClick={decrease} className="w-20 border-r-2 text-center border-[#bfbfbf]">-</button>
        <div className='text-[2rem] font-semibold'>{count}</div>
        <button onClick = {increase} className="w-20 border-l-2 text-center border-[#bfbfbf]">+</button>
      </div>
      <button onClick = {reset} className="text-white bg-[#0398d4] px-5 py-2 rounded-sm text-lg" >Reset</button>
    </div>
  );
}

export default App;
