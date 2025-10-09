'use client';
import { useAppSelector } from "@/store";
import SimpleWidget from "./SimpleWidget"
import { IoCalculatorOutline } from "react-icons/io5";

const WidgetGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap gap-2 justify-center items-center mt-5">
        <SimpleWidget title={count} subtitle="Global counter" href="/dashboard/counter" icon={<IoCalculatorOutline size={40} className="text-blue-600"/>} label="View Counter" />
    </div>
  )
}

export default WidgetGrid