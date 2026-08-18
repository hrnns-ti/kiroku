export default function Navbar() {
  return(
    <nav className="fixed flex flex-row px-12 py-8 w-full bg-white justify-center items-center">
      <div className="flex flex-row justify-center items-center gap-12">
        <a href="#" className="px-3 py-1 hover:text-zinc-400 active:text-black transition-colors ">
          <p>Dashboard</p>
        </a>
        <a href="#" className="px-3 py-1 hover:text-zinc-400 active:text-black transition-colors ">
          <p>Discover</p>
        </a>
        <a href="#" className="px-3 py-1 hover:text-zinc-400 active:text-black transition-colors ">
          <p>Watchlist</p>
        </a>
        <a href="#" className="px-3 py-1 hover:text-zinc-400 active:text-black transition-colors ">
          <p>Collections</p>
        </a>
      </div>
    </nav>
  )
}