
var faunadb = require('faunadb')
var client = new faunadb.Client({secret: process.env.FAUNADB_SECRET})

const {
  Index,
  Function: Fn,
  Call, 
  Select,
  Match,
  Collection,
  Ref,
  Get,
  Paginate
} = faunadb.query

export default async (req, res) => {
  
  const doc = await client.query(
    Paginate(Match(Index('recipe_slugs')))
  )

  res.send(doc.data)

}
