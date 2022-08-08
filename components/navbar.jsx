import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600">
      <ul className="flex gap-6 justify-center text-white p-2 ">
        <li>
          <Link href="/">
            <a>Accueil</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a>Liste</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
