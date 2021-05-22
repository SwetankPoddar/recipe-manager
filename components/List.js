export default function List({ recipes }) {
    return (
      <ul className="divide-y space-y-2">
        {recipes}
      </ul>
    )
  }