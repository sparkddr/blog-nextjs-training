export default function Article(props) {
  return (
    <div className="max-w-4xl mx-auto pt-10">
      <h1 className="text-center font-bold text-2xl my-2 first-letter:capitalize">
        {props.postOfPage.title}
      </h1>
      <p className="font-light first-letter:capitalize">
        {" "}
        {props.postOfPage.body}
      </p>
    </div>
  );
}
export async function getStaticProps(context) {
  const article = context.params.article;
  const call = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await call.json();
  const postOfPage = posts.find((post) => post.id == article);
  return {
    props: {
      postOfPage,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  const paths = posts.map((item) => ({
    params: { article: item.id + "" },
  }));
  return {
    paths,
    fallback: false,
  };
}
