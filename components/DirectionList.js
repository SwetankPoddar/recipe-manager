import React, { useState } from 'react'

export default function DirectionList({directions}){

    const [showItems, setShowItems] = useState(true)
    const onClickAction = () =>  setShowItems(!showItems)

    return (
        <div className="p-5 shadow-2xl bg-white mt-2 relative">
            <div className={showItems ? 'border-b pb-5 mb-3' : ''}>
                <p className="text-center font-semibold text-2xl col-span-4">Directions</p>
                <button className="btn btn--primary  absolute top-2 sm:left-1" onClick={onClickAction}>{showItems ? 'Hide' : 'Show'}</button>
            </div>
            <ul className={"text-left space-y-2 divide-y divide-grey-500 " + (showItems ? '' : 'hidden')}>
                {directions.map((direction, index) => {
                    return <li key={"direction-" + index} className="p-5">{direction.description}</li>
                })}
            </ul>
        </div>
    )
}