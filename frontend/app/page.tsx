import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-end p-6">
      <div className="p-8 shadow-[inset_0_4px_12px_rgba(0,0,0,0.2)] bg-white w-full h-10/11 rounded-xl flex flex-col gap-8">
        <div className="flex flex-row gap-6 w-full h-1/3 py-6">
          <div className="p-4 w-1/4 h-full bg-white rounded-xl border border-gray-200 hover:z-10 shadow-none hover:shadow-black/5 transition-all flex flex-col justify-center items-center text-center">
            <h3 className="text-gray-400 font-semibold text-sm uppercase tracking-wider">Total Anime</h3>
            <p className="text-5xl font-bold text-gray-800 mt-2">128</p>
          </div>
          
          {/* Kotak 2: Watching */}
          <div className="p-4 w-1/4 h-full bg-white rounded-xl border border-gray-200 hover:z-10 shadow-none hover:shadow-black/5 transition-all flex flex-col justify-center items-center text-center">
            <h3 className="text-gray-400 font-semibold text-sm uppercase tracking-wider">Watching</h3>
            <p className="text-5xl font-bold text-amber-500 mt-2">3</p>
          </div>
          
          {/* Kotak 3: Plan to Watch */}
          <div className="p-4 w-1/4 h-full bg-white rounded-xl border border-gray-200 hover:z-10 shadow-none hover:shadow-black/5 transition-all flex flex-col justify-center items-center text-center">
            <h3 className="text-gray-400 font-semibold text-sm uppercase tracking-wider">Plan to Watch</h3>
            <p className="text-5xl font-bold text-blue-500 mt-2">15</p>
          </div>
          
          {/* Kotak 4: Completed */}
          <div className="p-4 w-1/4 h-full bg-white rounded-xl border border-gray-200 hover:z-10 shadow-none hover:shadow-black/5 transition-all flex flex-col justify-center items-center text-center">
            <h3 className="text-gray-400 font-semibold text-sm uppercase tracking-wider">Completed</h3>
            <p className="text-5xl font-bold text-green-500 mt-2">110</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full h-1/2 p-3">
          <h1 className="text-2xl">Continue Watching</h1>
          <div></div>
        </div>
      </div>
    </main>
  );
}
