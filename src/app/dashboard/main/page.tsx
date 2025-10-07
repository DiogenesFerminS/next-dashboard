import { SimpleWidget } from "@/components";

const MainPage = () => {
  return (
    <div className="p-2 text-black">
      <h1 className="text-3xl my-2">Dashboard</h1>
      <span className=" text-xl">Informacion general</span>
      <div className="flex flex-wrap gap-2 justify-center items-center mt-5">
        <SimpleWidget/>
      </div>
    </div>
  )
}

export default MainPage;