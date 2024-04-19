
function Card({ name }: { name: string }) {
  return (
    <>
    <div className="w-40 h-96 bg-gray-400 rounded-lg">
      <div>{name}</div>
    </div>
    </>
  )
}

export default Card