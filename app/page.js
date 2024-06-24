import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-between items-center flex-col p-20 bg-black min-h-screen">
      <div className="text-white">
        <h1 className="text-3xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
        <ol className="flex flex-col text-xl m-5">
          <a className="hover:underline" href="/week-2">Week 2 Assignment</a>
          <a className="hover:underline" href="/week-3">Week 3 Assignment </a>
          <a className="hover:underline" href="/week-4">Week 4 Assignment </a>
          <a className="hover:underline" href="/week-5">Week 5 Assignment </a>
          <a className="hover:underline" href="/week-6">Week 6 Assignment </a>
          <a className="hover:underline" href="/week-7">Week 7 Assignment </a>


       </ol>
      </div>
    </main>
  );
}
