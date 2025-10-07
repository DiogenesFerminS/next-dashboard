"use client";

interface Props {
  value?: number,
}

import { useState } from "react";

export const CartCounter = ( {value = 0}: Props ) => {
  const [count, setCount] = useState<number>(value)

  const handleSum = () => {
    setCount((prev) => prev + 1 )
  } 

  const handleRes = () => {
    if(count === 0) return;
    setCount((prev) => prev - 1);
  } 

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex gap-4">
        <button
          onClick={handleSum}
          className="bg-green-800 hover:bg-green-600 rounded-lg px-4 py-2 text-white font-bold text-2xl transition-all"
        >+1</button>
        <button
          onClick={handleRes}
          className="bg-red-800 hover:bg-red-600 rounded-lg px-4 py-2 text-white font-bold text-2xl transition-all"
        >-1</button>
      </div>
    </>
  )
};