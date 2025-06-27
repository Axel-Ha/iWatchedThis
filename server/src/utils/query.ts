export const queryHomePageAnimes = `
    id
    title { romaji }
    coverImage { large }
    episodes
`;
export const queryInfoAnimes = `
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