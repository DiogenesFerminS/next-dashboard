"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, resetCounter, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
  value?: number,
}

interface ApiCounterResp {
  method: string;
  count: number;
}

const getCountFromApi = async (): Promise<ApiCounterResp> => {
  const resp = await fetch('http://localhost:3000/api/counter');
  const result = await resp.json();

  return  result;
};

export const CartCounter = ( {value = 0}: Props ) => {
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

    // useEffect(() => {
    //   dispatch( initCounterState(value) )
    // },[dispatch, value])
    useEffect(() => {
      getCountFromApi().then((value) => dispatch(initCounterState(value.count)))
    })

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