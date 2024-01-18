export interface Issue {
  title: string;
  body: string;
}

export default function Card() {
  return (
    <div className="w-full flex flex-col p-8 bg-base-post rounded-lg hover:border-base-label hover:border-2">
      <div className="flex gap-2 flex-row justify-center">
        <p className="font-bold text-base-title text-xl">JavaScript data types and data structures
        </p>
        <div className="flex flex-row gap-1">
          <span className="text-base-span text-sm">Há</span>
          <p className="text-base-span text-sm text-nowrap">1 dia</p>
        </div>
      </div>
      <div className="flex pt-5">
        <p className="text-base-text text-base text-justify">Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...
        </p>
      </div>
    </div>
  )
}