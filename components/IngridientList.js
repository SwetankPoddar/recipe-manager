import ImageWithFallback from './ImageWithFallBack'
import React, { useState } from 'react'

export default function IngridientList({ingridients}) {

    const [showItems, setShowItems] = useState(true)
    const onClickAction = () =>  setShowItems(!showItems)

    const renderedIngridients = ingridients.map((ingridient, index) => {
        const imageUrl = ingridient.item.image_slug ? `/images/item/${ingridient.item.image_slug}` : `https://www.themealdb.com/images/ingredients/${ingridient.item.name}.png`
        return (
            <div className="rounded p-5 border-b" key={"ingridient-" + index}>
                <div className="flex items-center justify-center">
                    <ImageWithFallback key={ingridient.item.id} className="rounded" src={imageUrl} fallbackSrc='/images/item/default.jpg' width={100} height={100} />
                </div>
                <div className="flex items-center justify-center text-black text-1xl font-extrabold pt-1">
                    {ingridient.item.name.charAt(0).toUpperCase() + ingridient.item.name.slice(1)}
                </div>
                <div className="flex items-center justify-center text-black text-sm pb-3">
                    {ingridient.quantity}
                </div>
            </div>
        )
    })

    return (
        <div className="p-5 shadow-2xl bg-white relative">
            <div className={showItems ? 'border-b pb-5 mb-3' : ''}>
                <p className="text-center font-semibold text-2xl col-span-4">Ingredients</p>
                <button className="btn btn--primary absolute top-2 left-0" onClick={onClickAction}>{showItems ? 'Hide' : 'Show'}</button>
            </div>
            <div className={"flex flex-wrap justify-center " + (showItems ? '' : 'hidden')}>
                {renderedIngridients}
            </div>
        </div>
    )
}