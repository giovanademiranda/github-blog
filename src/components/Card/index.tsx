import { Issue } from "@/types/github";
import { format } from 'date-fns';

export default function Card({ post }: { post: Issue }) {
  const formattedCreatedAt = format(new Date(post.created_at), 'dd/MM/yy');

  return (
    <div className="w-full flex flex-col p-8 bg-base-post rounded-lg hover:border-base-label hover:border-2">
      <div className="flex gap-2 flex-row justify-between">
        <p className="font-bold text-base-title text-xl">{post.title}
        </p>
        <div className="flex flex-row gap-1">
          <p className="text-base-span text-sm text-nowrap">{formattedCreatedAt}</p>
        </div>
      </div>
      <div className="flex pt-5 max-h-36">
        <p className="text-base-text text-base text-justify text-ellipsis overflow-hidden">{post.body}...
        </p>
      </div>
    </div>
  )
}

