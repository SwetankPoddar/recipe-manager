
var faunadb = require('faunadb')
var client = new faunadb.Client({secret: process.env.FAUNADB_SECRET})


const {
    Index,
    Function: Fn,
    Match,
    Paginate,
    Get,
    Call
    } = faunadb.query

export async function getAllRecipeSlugs() {
    let slugs = await client.query(
        Paginate(Match(Index('recipe_slugs')))
    )

    return slugs.data.map(slug => {
        return {
            params: {
                slug: slug
            }
        }
    })
}

export async function getRecipeData(slug) {
    
    var data = await client.query(
        Get(Match(Index('unique_Recipe_slug'), slug))
    )
    
    data = data.data

    data.ingredients = await Promise.all(data.ingredients.map( async ({item, quantity}) => {
        var itemInfo = await client.query(Get(item))
        return {
            item: {id: itemInfo.ref.id,  ...itemInfo.data},
            quantity: quantity
        }
    }))

    return data
}

export async function getIndexRecipeInfo() {
    var data = await client.query(
        Call('get_all_recipes')
    )

    return data
}