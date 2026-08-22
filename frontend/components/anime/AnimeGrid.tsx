"use client"

import { useState } from "react"
import Image from "next/image";

interface AnimeGridProps {
  initialData: any[];
  searchQuery?: string;
}

export default function AnimeGrid({ initialData, searchQuery }: AnimeGridProps) {
  const [animes, setAnimes] = useState<any[]>(initialData)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadMore = async () => {
    setIsLoading(true)
    const nextPage = page + 1

    const query = `
      query($search: String, $page: Int, $perPage: Int, $sort: [MediaSort])  {
        Page(page: $page, perPage: $perPage) {
          media(search: $search, type: ANIME, sort: $sort) {
            id
            coverImage { extraLarge }
            title { romaji }
          }
        }
      }
    `

    const variables: any = {
      page: nextPage,
      perPage: 20,
    }

    if (searchQuery) {
      variables.search = searchQuery
    } else {
      variables.sort = ["SCORE_DESC"]
    }

    try {
      const response = await fetch('https://graphql.anilist.co', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ query, variables })
      })

      const data = await response.json()
      const newAnimes = data?.data?.Page?.media || []

      setAnimes((prev) => [...prev, ...newAnimes])
      setPage(nextPage)
    } catch (error) {
      console.error("Gagal memuat data", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (animes.length === 0) {
    return <p className="self-center">Anime tidak ditemukan</p>
  }

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {animes.map((anime: any) => (
          <div key={anime.id} className="flex flex-col gap-2">              
            <div className="w-full aspect-3/4 relative rounded-md overflow-hidden bg-gray-200">
              <Image 
                src={anime.coverImage?.extraLarge} 
                alt={anime.title?.romaji || "Anime Cover"} 
                className="object-cover w-full h-full"
                width={500}
                height={500}
                quality={75}
                loading="eager"
              ></Image>
            </div>                
            <h3 className="font-semibold text-sm line-clamp-2" title={anime.title?.romaji}>
              {anime.title?.romaji}
            </h3>
          </div>
        ))}
      </div>

      {/* Tombol Load More */}
      <button 
        onClick={handleLoadMore}
        disabled={isLoading}
        className="self-center px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 disabled:bg-gray-400 transition-colors"
      >
        {isLoading ? "Memuat..." : "Load More"}
      </button>
    </div>
  )
}