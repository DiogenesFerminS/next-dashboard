import { CartCounter } from "@/shopping-car"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Counter - Page',
  description: "it's a easy counter"
}

const CounterPage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <span className="text-xl">Productos en el carrito</span>
      <CartCounter value={4}/>
      
    </div>
  )
}

export default CounterPage