"use client"

import { useEffect, useState} from "react"
import { useRouter } from 'next/navigation'

export default function Search() {
  
  const router = useRouter()

  const [wantSearch, setWantSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  
  const handleSearchExec = (event:  React.KeyboardEvent<HTMLInputElement>) => {
    const isEnterPressed = event.key === 'Enter'

    if (isEnterPressed) {
      event.preventDefault()
      setWantSearch(false)
      router.push(`/animes?search=${searchQuery}`)
    }
  }
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isKPressed = event.key.toLowerCase() === 'k'
      const isCtrlPressed = event.ctrlKey || event.metaKey
      

      if (isCtrlPressed && isKPressed) {
        event.preventDefault() 
        setWantSearch(prev => !prev)        
        return
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [])
  
  if (wantSearch){
    return (
      <main className="h-screen w-screen flex fixed z-40 bg-white/50 justify-center items-center">
        <div className="w-1/3 h-fit py-3 bg-white self-center flex justify-center items-center">
          <input 
            type="text" onKeyDown={handleSearchExec} name="searchBox" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search an Anime" 
            className="px-6 py-2 outline-none text-xl w-full text-center"
          />
        </div>
      </main>
    )
  } else {
    return null
  }
}