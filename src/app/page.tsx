import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="max-w-7xl w-full flex flex-col items-center justify-center">
      <div className="w-[65%] flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <h2 className="font-medium text-lg text-base-subtitle">Publicações</h2>
          <p className="text-sm text-base-span">6 publicações</p>
        </div>
        <input type="text" placeholder="Buscar conteúdo" className="bg-base-input border-base-border px-4 py-3 rounded-md .placeholder-base-label::placeholder text-base-text font-normal text-base outline-none border focus:border-brand-blue" />
      </div>
      <div className="w-[65%] flex justify-center mt-10 md:justify-between gap-9 md:gap-y-4">
        <Card />
      </div>
    </div>
  )
}
