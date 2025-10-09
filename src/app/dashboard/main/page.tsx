import { WidgetGrid } from "@/components";

const MainPage = () => {
  return (
    <div className="p-2 text-black">
      <h1 className="text-3xl my-2">Dashboard</h1>
      <span className=" text-xl">Informacion general</span>
        <WidgetGrid/>
    </div>
  )
}

export default MainPage;