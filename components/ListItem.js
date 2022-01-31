import Image from 'next/image'
export default function ListItem({ recipe }) {
    return (
      <article className="p-4 flex space-x-4 bg-white rounded relative text-center">
        <Image src={recipe.image} alt="" className="rounded" height="300px" width="500px"/>
        <div>
          <h2 className="text-2xl font-bold text-black mb-4 mt-2">
            {recipe.name}
          </h2>
          <dl className="text-sm font-medium whitespace-pre mt-10">
            <div>
              <dt className="sr-only">Time</dt>
              <dd>
              {recipe.time} <abbr title={`${recipe.time} minutes`}>mins</abbr>
              </dd>
            </div>
          </dl>
          <div className='mt-12'>

            <a href={recipe.url}>
              <button className="btn btn--primary mt-5">View recipe</button>
            </a>
          </div>
        </div>
      </article>
    )
  }