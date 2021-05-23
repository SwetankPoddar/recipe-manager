import { getAllRecipeSlugs, getRecipeData } from '../../lib/recipes'
import React, { useState } from 'react';

import Head from 'next/head'

import RecipeDetailView from '../../components/RecipeDetailView'

export default function Recipe({recipeData}){
    return (
        <>
            <Head>
                <title>Recipie for {recipeData.name}</title>
            </Head>
            
            <RecipeDetailView recipe={recipeData} />
        </>
    )
}


export async function getServerSidePaths() {
    const paths = await getAllRecipeSlugs()
    return {
        paths,
        fallback: false
    }
}

export async function getServerSideProps({params}){
    const recipeData = await getRecipeData(params.slug)
    return {
        props: {
            recipeData
        }
    }
}