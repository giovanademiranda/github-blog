import Header from "@/components/Header";

export default function Post() {
  const userPost = "github-blog";
  return (
    <>
      <Header type="post" userPost={{ title: userPost, login: "", date: "", comment: "" }} />
      <div className="max-w-4xl w-full flex items-center justify-center">
        <div className="w-full flex flex-col gap-3">
          <p className="text-base text-base-text text-justify">
            <strong>Programming languages all have built-in data structures, but these often differ from one language to another.
            </strong>
            This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
          </p>
          <div className="pt-8">
            <h3 className="text-base text-brand-blue">Dynamic typing</h3>
            <p className="text-base text-base-text">JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
            </p>
          </div>
          <div className="flex flex-col bg-base-post rounded-sm p-4 mt-8">
            <p>conteudo</p>
          </div>
        </div>
      </div>
    </>
  )
}