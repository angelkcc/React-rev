import { useEffect, useMemo, useState } from "react";
import { Button } from "./buttons/button";
import CardWrapper from "./cards/wrapper.card";

const Counter = () => {
  //   let x = 0;
  const [count, setCount] = useState(0); // {count:0} , {count:1}
  const [count1, setCount1] = useState(0); // {count:0} , {count:1}
  //if usestate changes component re-renders and the function is called again and again--it survives multiple renders and the value is preserved between renders
  //if useRef changes component does not re-render and the function is not called again and again--it also survives multiple renders and the value is preserved between renders
  //so usestate is used in the case like counter where we want to re-render the component when the value changes and 
  // useRef is used in the case like input where we don't want to re-render the component when the value changes
  //useState is also used when we want change in UI

  const handleIncr = () => {
    // x++;
    //? value update
    // setCount(count + 1); // 0 + 1 -> 1 -> count -> 1
    // setCount(count + 1); // 0 + 1 -> 1 -> count -> 1
    // setCount(count + 1); // 0 + 1 -> 1 -> count -> 1
    //* function update
    setCount((prev) => {
      return prev + 1;
    });
    // setCount((prev) => {
    //   return prev + 1;
    // });
    // console.log("clicked Incr", x);
  };
  const handleDecr = () => {
    // setCount(count - 1);
    // setCount(count - 1);
    setCount((prev) => {
      return prev - 1;
    });
    // setCount((prev) => {
    //   return prev - 1;
    // });
    // x--;
    // console.log("clicked Decr", x);
  };
const result =useMemo(()=>{
  for(let i=1;i<=9999999;i++){
    //
  }
  console.log("calculate");
  return count *10;
},[count])

  //* use effect
  // useEffect(callback,dependency_arr?)
  //? w/o arr
  // useEffect(() => {
  //   console.log("use effect");
  // });
  //? empty dependency  arr
  // useEffect(() => {
  //   console.log("empty dependency array");
  // }, []);

  //? with dependent states
  useEffect(
    () => {
      console.log("dependency array", count);
      // setCount((prev) => prev + 1);

      //* cleanup-> called when the component is unmounted or when the dependencies change
      //umounted -> when the component is removed from the DOM
      
      return () => {
        console.log("clean up");
      };
    },
    [count],
    // setCount,
  );

  // console.log("counter rerendered", count);//this runs before useEffect runs because useEffect runs after the render is committed to the screen

  return (
    <CardWrapper>
      <h1>{count}</h1>
      <h2>{count1}</h2>
      <Button onClick={handleDecr} label="Decrement" />
      <Button onClick={handleIncr} label="Increment" />
      <Button
        onClick={() => {
          setCount1(count1 + 1);
        }}
        label="Increment 1"
      />
    </CardWrapper>
  );
};

export default Counter;