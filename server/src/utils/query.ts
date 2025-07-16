export const queryHomePageAnimes = `
    id
    title { romaji, native, english }
    coverImage { large }
    episodes
`;
export const queryInfoAnimes = `
  id
  title { romaji, native, english }
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
        title { romaji, native, english }
        format
        status
        coverImage {
          medium
        }
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
  tags {
    name
    isMediaSpoiler
    rank
  }
`;


export const queryCharactersAndVoiceActors = `
    edges {
      role
      node {
        name { full }
        image { medium }
      }
      voiceActorRoles(language: JAPANESE) {
        voiceActor {
          name { full }
          image { medium }
        }
      }
    }
`;

export const queryStaffs = `
  edges {
    role
    node {
      name { full }
      image { medium }
    }
  }
`;