import Card from "@/components/Card";
import Header from "@/components/Header";
import { SpinnerGap } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { getIssues, getUserProfile } from "./api/services";

const GITHUB_USERNAME = 'giovanademiranda';

async function getUser(username: string) {
  const profileData = await getUserProfile(GITHUB_USERNAME);
  return profileData
}

export default async function Home() {
  const userProfile = await getUser(GITHUB_USERNAME)
  const userPost = await getIssues()
  const posts = 6;

  if (!userProfile && !userPost) {
    return <div className="flex justify-center items-center m-96">
      <SpinnerGap className="rotate-45 animate-spin" size={64} weight="bold" />
      <p className="font-bold text-base-subtitle text-2xl">Carregando</p>
    </div>
  }
  return (
    <>
      <Header type="blog" userProfile={userProfile} />
      <div className="max-w-4xl w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <h2 className="font-medium text-lg text-base-subtitle">Publicações</h2>
            <p className="text-sm text-base-span">{userPost.length} publicaç{userPost.length > 1 ? 'ões' : 'ão'}</p>
          </div>
          <input type="text" placeholder="Buscar conteúdo" className="bg-base-input border-base-border px-4 py-3 rounded-md .placeholder-base-label::placeholder text-base-text font-normal text-base outline-none border focus:border-brand-blue" />
        </div>
        {userPost && userPost.map((post) => (
          <Link key={post.number} className="w-full grid grid-rows-3 grid-cols-2 justify-center mt-10 md:justify-between gap-8 md:gap-y-8" href={`/Post/${post.number}`}>
            <Card post={post} />
          </Link>
        ))}
      </div>
    </>
  )
}
