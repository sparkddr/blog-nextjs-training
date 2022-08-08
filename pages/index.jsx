import Link from "next/link";

export default function index() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="font-bold text-3xl">Bienvenue sur Chaloupe.io</h1>
      <p className="mt text-sm font-extralight">
        Le blog communautaire des afficionados de chaloupe
      </p>
      <div className="grid grid-cols-2 gap-5 mt-8">
        <div className="border border-gray-200 p-2 rounded-md">
          <h2 className="font-bold text-sm ">Lisez les articles</h2>
          <h3 className="font text-xs text-slate-700 ">
            Maximisez votre culture web
          </h3>
          <p className="font-light text-xs mt-1">
            Chaque auteur tente de t'apporter le plus de valeur possible par
            article
          </p>
          <Link href="/blog">
            <a className=" block text-xs mt-4 text-blue-600 underline">
              Visite le blog
            </a>
          </Link>
        </div>
        <div className="border border-gray-200 p-2 rounded-md">
          <h2 className="font-bold text-sm ">
            Fais un tour vers la liste de membres
          </h2>
          <h3 className="font text-xs text-slate-700">Faites vous des amis</h3>
          <p className="font-light text-xs mt-1">
            Ajoute, invite et discuteavec les différents membres
          </p>
          <Link href="/users">
            <a className=" block text-xs mt-4 text-blue-600 underline">
              Découvre la liste de membres
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
