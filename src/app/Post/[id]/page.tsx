import { getIssue } from "@/app/api/services";
import Header from "@/components/Header";
import { SpinnerGap } from "@phosphor-icons/react/dist/ssr";

export default async function Post({ params }: { params: { id: string } }) {
  const issueNumber = params.id;
  const post = await getIssue(issueNumber);
  if (!post) {
    return <div className="flex justify-center items-center m-96">
      <SpinnerGap className="rotate-45 animate-spin" size={64} weight="bold" />
      <p className="font-bold text-base-subtitle text-2xl">Carregando</p>
    </div>
  }

  return (
    <>
      <Header type="post" />
      <div className="max-w-4xl w-full flex items-center justify-center">
        <div className="w-full flex flex-col gap-3">
          <p className="text-base text-base-text text-justify">
            {post.body}
          </p>
          <div className="flex flex-col bg-base-post rounded-sm p-4 mt-8">
            <p className="text-base text-base-title text-justify">{post.body}</p>
          </div>
        </div>
      </div >
    </>
  )
}