import Head from 'next/head'
import List from '../components/List'
import ListItem from '../components/ListItem'
import { getIndexRecipeInfo } from '../lib/recipes';

export default function Home({recipes}) {
  var allRecipies = recipes.map(recipe => {
    return <ListItem key={recipe.id} recipe={recipe} />
  }) 
  
  return (
    <>
      <Head>
          <title>Recipes by Poddar family</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white mb-6 text-center p-5 font-bold text-3xl">
          Recipes by Poddar Family
      </div>
      <List recipes={allRecipies}></List>
    </>
  )
}

export async function getServerSideProps(context) {
  var data = await getIndexRecipeInfo();
  var recipes = data.map(recipe => {
    return {
      id: recipe.ref.id,
      url: '/recipe/' + recipe.data.slug,
      name: recipe.data.name,
      description: recipe.data.description,
      time: recipe.data.requiredTime,
      image: '/images/recipe/' + (recipe.data.image ? recipe.data.image : 'default.svg'),
      author: recipe.data.author ? recipe.data.author : 'Swetank Poddar'
    }
  })
  return {
    props: {recipes}
  }
}