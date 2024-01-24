import { getIssue } from "@/app/api/services";
import Header from "@/components/Header";

export default async function Post({ params }: { params: { id: string } }) {
  const issueNumber = params.id;
  const post = await getIssue(issueNumber);
  if (!post) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <Header type="post" />
      <div className="max-w-4xl w-full flex items-center justify-center">
        <div className="w-full flex flex-col gap-3">
          <p className="text-base text-base-text text-justify">
            <strong>{post.body}
            </strong>
            {post.body}
          </p>
          <div className="pt-8">
            <h3 className="text-base text-brand-blue text-justify">{post.body}</h3>
            <p className="text-base text-base-text text-justify">{post.body}</p>
          </div>
          <div className="flex flex-col bg-base-post rounded-sm p-4 mt-8">
            <p className="text-base text-base-title text-justify">{post.body}</p>
          </div>
        </div>
      </div >
    </>
  )
}