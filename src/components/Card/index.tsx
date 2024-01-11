export default function Card() {
  return (
    <div className="flex flex-col p-8 bg-base-post rounded-lg hover:border-base-label hover:border-2">
      <div className="flex flex-row justify-between">
        <h3 className="font-bold text-base-title text-xl">JavaScript data types and data structures</h3>
        <span className="text-base-span text-sm">Há 1 dia</span>
      </div>
      <div className="flex pt-5">
        <p className="text-base-text text-base">Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...
        </p>
      </div>
    </div>
  )
}