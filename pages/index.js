import Head from 'next/head'
import List from '../components/List'
import ListItem from '../components/ListItem'
import { getIndexRecipeInfo } from '../lib/recipes';

export default function Home({recipes}) {
  var allRecipies = recipes.map(recipe => {
    return <ListItem key={recipe.id} recipe={recipe} />
  }) 
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Recipes by Poddar family</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <List recipes={allRecipies}></List>
    </div>
  )
}

export async function getStaticProps(context) {
  var data = await getIndexRecipeInfo();
  var recipes = data.map(recipe => {
    return {
      id: recipe.ref.id,
      url: '/recipe/' + recipe.data.slug,
      name: recipe.data.name,
      description: recipe.data.description,
      time: recipe.data.requiredTime,
      image: '/images/recipe/' + (recipe.data.image ? recipe.data.image : 'default.jpg'),
      author: recipe.data.author ? recipe.data.author : 'Swetank Poddar'
    }
  })
  return {
    props: {recipes}
  }
}