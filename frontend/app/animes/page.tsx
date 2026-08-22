import AnimeGrid from "@/components/anime/AnimeGrid";


interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Animes({ searchParams }: PageProps) {

  const resolvedParams = await searchParams;
  const searchParam = resolvedParams.search;  
  const searchQuery = typeof searchParam === 'string' ? searchParam : undefined;

  const page = 1
  const perPage = 20

  const query =`
    query($search: String, $page: Int, $perPage: Int, $sort: [MediaSort])  {
      Page(page: $page, perPage: $perPage) {
        media(search: $search, type: ANIME, sort: $sort) {
          coverImage {
            extraLarge
          }
          title {
            romaji
          }
          id
          # episodes
          description
          # seasonYear
          # genres
          # format
        }
      }
    }
  `

  const variables: any = {
    page: page,
    perPage: perPage,
  }
  
  if (searchQuery) {
    variables.search = searchQuery;
  } else {
    variables.sort = ["SCORE_DESC"]; 
  }

  const response = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  })

  const data = await response.json()
  const animeList = data?.data?.Page?.media || []
  
  return (
    <main className="h-screen flex flex-col justify-end p-6">
      <div className=" bg-white w-full h-10/11 rounded-xl flex flex-col gap-8 overflow-y-auto no-scrollbar">
        <AnimeGrid initialData={animeList} searchQuery={searchQuery}/>      
      </div>
    </main>
  )
}
