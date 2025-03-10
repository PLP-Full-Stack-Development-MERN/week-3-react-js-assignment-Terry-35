import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 m-4 bg-white shadow-md rounded-md text-center">
      <h2 className="text-xl font-semibold">Counter</h2>
      <p className="text-2xl">{count}</p>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded-md m-2" 
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button 
        className="px-4 py-2 bg-red-500 text-white rounded-md" 
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
