import Image from "next/image";

export default async function Home() {

  return (
    <main className="h-screen flex flex-col justify-end p-6">
      <div className="p-8 bg-white w-full h-10/11 rounded-xl flex flex-col gap-8">
        <div className="flex flex-row gap-6 w-full h-1/3 py-6">
          <div className="p-4 w-1/4 h-full bg-white rounded-xl border border-gray-200 hover:z-10 shadow-none hover:shadow-lg/5 transition-all"></div>
          <div className="p-4 w-1/4 h-full bg-white rounded-xl border border-gray-200 hover:z-10 shadow-none hover:shadow-lg/5 transition-all"></div>
          <div className="p-4 w-1/4 h-full bg-white rounded-xl border border-gray-200 hover:z-10 shadow-none hover:shadow-lg/5 transition-all"></div>
          <div className="p-4 w-1/4 h-full bg-white rounded-xl border border-gray-200 hover:z-10 shadow-none hover:shadow-lg/5 transition-all"></div>
        </div>
        <div className="flex flex-col gap-4 w-full h-1/2 p-3">
          <h1 className="text-2xl">Continue Watching</h1>
          <div></div>
        </div>
      </div>
    </main>
  )
}
