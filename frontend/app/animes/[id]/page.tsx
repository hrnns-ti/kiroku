export default async function AnimeId() {
  const query = `
    query ($id: Int) {
      Media(id: $id, type: ANIME) {
        id
        title {
          romaji
        }
        coverImage {
          extraLarge
        }
        description
        averageScore
        seasonYear
        episodes
      }
    }
  `

  // const payloadKiroku = {
  //   anime_id: anime.id, 
  //   title: anime.title.romaji,
  //   image_url: anime.coverImage.extraLarge,
  //   synopsis: anime.description,
  //   score: anime.averageScore,
  //   year: anime.seasonYear,
  //   total_episodes: anime.episodes,
  //   status: "plan_to_watch"
  // }
}