import Card from "@/components/Card";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header type="blog" />
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
