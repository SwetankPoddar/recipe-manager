import { getAllRecipeSlugs, getRecipeData } from '../../lib/recipes'
import Image from 'next/image'
import Head from 'next/head'

export default function Recipe({recipeData}){
    return (
        <>
            <Head>
                <title>Recipie for {recipeData.name}</title>
            </Head>
            <div className="recipe-holder">
                <div className="bg-white mb-6 text-center p-5 font-bold text-4xl">{recipeData.name}</div>
                {ingridients(recipeData.ingredients)}
                {directions(recipeData.directions)}
            </div>
        </>
    )
}

function ingridients(ingridients) {
    const renderedIngridients = ingridients.map((ingridient, index) => {
        const imageUrl = ingridient.item.image_slug ? `/images/item/${ingridient.item.image_slug}` : `https://www.themealdb.com/images/ingredients/${ingridient.item.name}-small.png`
        return (
            <div className="rounded" key={"ingridient-" + index}>
                <div className="flex items-center justify-center p-5 border-b">
                    <Image className="rounded" src={imageUrl} width={200} height={200} />
                </div>
                <div className="flex items-center justify-center text-black text-2xl font-extrabold pt-1">
                    {ingridient.item.name}
                </div>
                <div className="flex items-center justify-center text-black text-2xl pb-3">
                    {ingridient.quantity}
                </div>
            </div>
        )
    })

    return (
        <div className="p-5 shadow-2xl bg-white">
            <p className="text-center font-semibold text-2xl border-b pb-5 mb-3">Ingredients</p>
            <div className="flex flex-wrap justify-center">
                {renderedIngridients}
            </div>
        </div>
    )
}

function directions(directions){
    return (
        <div className="p-5 shadow-2xl bg-white mt-2">
            <p className="font-semibold text-2xl mb-3 border-b text-center pb-5">Directions</p>
            <ul className="text-left space-y-2 divide-y divide-grey-500">
                {directions.map((direction, index) => {
                    return <li key={"direction-" + index} className="p-5">{direction.description}</li>
                })}
            </ul>
        </div>
    )
}


export async function getStaticPaths() {
    const paths = await getAllRecipeSlugs()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const recipeData = await getRecipeData(params.slug)
    return {
        props: {
            recipeData
        }
    }
}