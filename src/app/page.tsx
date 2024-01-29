import Card from "@/components/Card";
import Header from "@/components/Header";
import Input from "@/components/Input";
import { SpinnerGap } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { getUserProfile, searchIssues } from "./api/services";

const GITHUB_USERNAME = 'giovanademiranda';
const REPO = `${GITHUB_USERNAME}/github-blog`;

export default async function Home({ searchParams }: { searchParams: { filter: string } }) {
  const userProfile = await getUserProfile(GITHUB_USERNAME);
  const userPosts = await searchIssues(REPO, searchParams.filter || '');
  console.log(searchParams.filter)

  if (!userProfile && !userPosts) {
    return <div className="flex justify-center items-center m-96">
      <SpinnerGap className="rotate-45 animate-spin" size={64} weight="bold" />
      <p className="font-bold text-base-subtitle text-2xl">Carregando</p>
    </div>
  }

  return (
    <>
      <Header type="blog" userProfile={userProfile} />
      <div className="md:max-w-4xl w-full flex flex-col items-center justify-center pb-5 md:pb-11 p-4">
        <div className="w-full flex flex-col gap-1 md:gap-3">
          <div className="flex flex-row justify-between">
            <h2 className="font-normal md:font-medium text-sm md:text-lg text-base-subtitle">Publicações</h2>
            <p className="text-sm text-base-span">{userPosts.items.length} publicaç{userPosts.items.length > 1 ? 'ões' : 'ão'}</p>
          </div>
          <Input />
        </div>
        <div className="w-full md:grid md:grid-cols-2 md:grid-rows-3 gap-2 md:gap-8">
          {userPosts.items.map((post) => (
            <Link
              data-cy='post'
              key={post.number}
              className="w-full flex justify-center mt-10 md:justify-between"
              href={`/Post/${post.number}`}>
              <Card post={post} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
