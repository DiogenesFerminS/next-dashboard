import { redirect } from "next/navigation";

export default function Home() {
  redirect('/dashboard/main')
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
