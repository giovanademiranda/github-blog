import { Issue } from "@/types/github";

export default function Card({ post }: { post: Issue }) {
  return (
    <div className="w-full flex flex-col p-8 bg-base-post rounded-lg hover:border-base-label hover:border-2">
      <div className="flex gap-2 flex-row justify-center">
        <p className="font-bold text-base-title text-xl">{post.title}
        </p>
        <div className="flex flex-row gap-1">
          <span className="text-base-span text-sm">Há</span>
          <p className="text-base-span text-sm text-nowrap">{post.created_at}</p>
        </div>
      </div>
      <div className="flex pt-5">
        <p className="text-base-text text-base text-justify">{post.body}
        </p>
      </div>
    </div>
  )
}