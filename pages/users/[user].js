export default function User(props) {
  console.log(props);
  return (
    <div className="max-w-lg mx-auto border border-gray-200 rounded-md p-4 mt-8">
      <h1 className="text-xl ">{props.user.name}</h1>
      <h2 className="font-light">Username : {props.user.username}</h2>
      <ul className=" border border-gray-200 rounded-md mt-2 text-sm font-light">
        <li className="py-1 px-3 border-b border-gray-200">
          Username : {props.user.username}{" "}
        </li>
        <li className="py-1 px-3 border-b border-gray-200">
          Email : {props.user.email}{" "}
        </li>
        <li className="py-1 px-3 border-b border-gray-200">
          Site Web : {props.user.website}{" "}
        </li>
        <li className="py-1 px-3">Téléphone : {props.user.phone} </li>
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  const userId = context.params.user;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await data.json();

  return {
    props: { user },
  };
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  const paths = users.map((user) => ({ params: { user: user.id + "" } }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
