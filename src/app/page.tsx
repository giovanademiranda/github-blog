import Card from "@/components/Card";
import Header from "@/components/Header";
import { SpinnerGap } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { getUserProfile, searchIssues } from "./api/services";

const GITHUB_USERNAME = 'giovanademiranda';

async function getUser(username: string) {
  const profileData = await getUserProfile(GITHUB_USERNAME);
  return profileData
}

async function getIssue(repo: string, term: string) {
  const issueData = await searchIssues(repo, term);
  return issueData;
}

export default async function Home() {
  const userProfile = await getUser(GITHUB_USERNAME)
  const userPost = await getIssue('repo-name', 'search-term')
  if (!userProfile && !userPost) {
    return <div className="flex justify-center items-center m-96">
      <SpinnerGap className="rotate-45 animate-spin" size={64} weight="bold" />
    </div>
  }
  return (
    <>
      <Header type="blog" userProfile={userProfile} userPost={userPost} />
      <div className="max-w-4xl w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <h2 className="font-medium text-lg text-base-subtitle">Publicações</h2>
            <p className="text-sm text-base-span">6 publicações</p>
          </div>
          <input type="text" placeholder="Buscar conteúdo" className="bg-base-input border-base-border px-4 py-3 rounded-md .placeholder-base-label::placeholder text-base-text font-normal text-base outline-none border focus:border-brand-blue" />
        </div>
        <Link className="w-full grid grid-rows-3 grid-cols-2 justify-center mt-10 md:justify-between gap-8 md:gap-y-8" href={"/Post"}>
          <Card />
          <Card />

          <Card />
          <Card />

          <Card />
          <Card />
        </Link>
      </div>
    </>
  )
}
