import React, { useState,useEffect,useRef } from "react";
import MinusBtn from "./components/MinusBtn";
import PlusBtn from "./components/PlusBtn";

const App = () => {
  const [data, setData] = useState(null)
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  useEffect(() => {
   countRef.current.value = count;
   console.log(countRef.current.value)
  },[count])
  const handleDecraseCount = () => {
    if (count === 0) {
      alert("Can't go down");
    } else {
      setCount(count - 1);
    }
  };
  const handleIncreamentCount = () => {
    if (count === 10) {
      alert("Reached to 10");
    } else {
      setCount(count + 1);
    }
  };
  return (
    <div className="App">
      <PlusBtn handleArtan={handleIncreamentCount}/>
      <span ref={countRef}>{count}</span>
      <MinusBtn handleAzalan={handleDecraseCount} />
    </div>
  );
};

export default App;
