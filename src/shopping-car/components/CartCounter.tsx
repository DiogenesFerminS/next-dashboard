"use client";

interface Props {
  value?: number,
}

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, resetCounter, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";

export const CartCounter = ( {value = 0}: Props ) => {
  // const [count, setCount] = useState<number>(value)
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  const handleSum = () => {
    dispatch(addOne())
  } 

  const handleRes = () => {
    dispatch( substractOne() )
  } 

  const handleReset = () => {
    dispatch( resetCounter(0) )
  }

  useEffect(() => {
    dispatch( initCounterState(value) )
  },[dispatch, value])

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

        <button
          onClick={handleReset}
          className="bg-blue-800 hover:bg-blue-600 rounded-lg px-4 py-2 text-white font-bold text-2xl transition-all"
        >reset</button>
      </div>
    </>
  )
};