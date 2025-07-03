export const queryHomePageAnimes = `
    id
    title { romaji }
    coverImage { large }
    episodes
`;
export const queryInfoAnimes = `
  id
  title { romaji }
  coverImage { large }
  genres
  studios(isMain: true) {
    nodes {
      name
    }
  }
  averageScore
  popularity
  seasonYear
  season
  status
  format
  episodes
  duration
  bannerImage
  description
`;

export const queryHeaderAnimeInfo = `
  title { romaji, native, english }
  coverImage { large }
  bannerImage
  description
`

export const queryRelationAnimes = `
  relations {
    edges {
      relationType
      node {
        title { romaji }
        format
      }
    }
  }
`;

export const querySideBarAnimeInfos = `
  startDate { year, month, day }
  endDate { year, month, day }
  episodes
  duration
  format
  status
  season
  seasonYear
  genres
  source
  status
  type
  averageScore
  meanScore
  popularity
  favourites 
  studios(isMain: true) {
    nodes {
      name
    }
  }
  synonyms
`;