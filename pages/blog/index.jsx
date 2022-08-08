import Link from "next/link";

export default function Index(props) {
  console.log(props);
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="font-bold text-3xl text-center">Bienvenue sur le Blog</h1>
      <h2 className="text-center font-extralight">Voici les articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 ">
        {props.posts.map((post) => (
          <div className="p-4 border border-gray-200 h-32 " key={post.id}>
            <h3 className="first-letter:capitalize font-semi-bold ">
              {post.title}
            </h3>
            <p className="text-sm font-light mt-2 line-clamp-2 md:line-clamp-1 first-letter:capitalize">
              {post.body}
            </p>
            <Link href={"/blog/" + post.id}>
              <a className=" block text-sm mt-2 font-extraligth text-blue-600 underline">
                Lire cet article
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  return {
    props: {
      posts,
    },
  };
}
