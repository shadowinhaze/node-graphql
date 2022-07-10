const tracksSchema = `
  type Track {
    id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }

  type Query {
    tracks: [Track]
    track(id: ID!): Track
  }
`
export default tracksSchema
