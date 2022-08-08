import Link from "next/link";

export default function index(props) {
  return (
    <div className="p-5">
      <h1 className="text-center text-3xl font-bold mt-5 mb-8">
        La liste des utilisateurs
      </h1>
      {props.users.map((user) => {
        return (
          <div
            key={user.id}
            className="flex max-w-lg h-10 p-5 mt-5  mx-auto justify-between items-center border border-gray-200 rounded-lg"
          >
            <h2>{user.username}</h2>
            <Link href={"/users/" + user.id}>
              <a className="text-blue-600 underline font-light text-sm">
                Contacter
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  return {
    props: { users },
  };
}
