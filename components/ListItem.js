import Image from 'next/image'
export default function ListItem({ recipe }) {
    return (
      <article className="p-4 flex space-x-4 bg-white rounded">
        <Image src={recipe.image} alt="" className="rounded" height="300px" width="500px"/>
        <div className="flex-auto">
          <h2 className="text-lg font-semibold text-black mb-0.5">
            {recipe.name}
          </h2>
          <p>
            {recipe.description}
          </p>
          <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
            <div>
              <dt className="sr-only">Time</dt>
              <dd>
                <abbr title={`${recipe.time} minutes`}>{recipe.time} mins</abbr>
              </dd>
            </div>
          </dl>
            {/* <div className="flex-none w-full mt-0.5 font-normal">
              <dt className="inline">By</dt>{' '}
              <dd className="inline text-black">{recipe.author}</dd>
            </div> */}
            <div className="">
              <a href={recipe.url}>
                <button className="btn btn--primary mt-5">View recipe</button>
              </a>
            </div>
          
        </div>
      </article>
    )
  }