import IngridientList from './IngridientList'
import DirectionList from './DirectionList'

export default function RecipeDetailView({recipe}) {
    return (
        <div className="recipe-holder">
                <div className="bg-white mb-6 text-center p-5">
                    <p className="font-bold text-4xl">{recipe.name}</p>
                    <p className="mt-2">{recipe.description}</p>
                </div>
                <IngridientList ingridients = {recipe.ingredients} />
                <DirectionList directions = {recipe.directions} />
        </div>
    )
}
