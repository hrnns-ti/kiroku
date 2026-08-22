
export default async function Animes() {

  const searchParam = ""
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
          # episodes
          description
          # seasonYear
          # genres
          # format
        }
      }
    }
  `

  const variables = {
    "search": searchParam,
    "page": page,
    "perPage": perPage
  }


  

  return (
    <main className="h-screen flex flex-col justify-end p-6">
      <div className="p-8 bg-white w-full h-10/11 rounded-xl flex flex-col gap-8">
            
      </div>
    </main>
  )
}
