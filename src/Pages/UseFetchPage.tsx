import { useEffect } from "react";
import { withDemo } from "../HOC/withDemo";
import { useFetch } from "../hooks/useFetch";

const URL = "https://jsonplaceholder.typicode.com/posts?_limit=3";

type Post = {
  title: string;
  body: string;
};

const PostContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const PostStyle = {
  border: "1px solid gray",
};

function DemoOfUseFetch() {
  const { data, error, loading, execute } = useFetch<Post[]>(URL);

  useEffect(() => {
    execute();
  }, []);

  if (loading) return <h6>Loading....</h6>;

  if (error) return <h6>{error}</h6>;

  console.log(data);

  if (data instanceof Array) {
    return (
      <>
        <div style={PostContainerStyle}>
          <input
            style={{ border: "1px solid black" }}
            type="text"
            onChange={execute}
            placeholder="Search here"
          />
          {data.map((post) => {
            return (
              <div key={post.id} style={PostStyle}>
                <p>Title : {post.title}</p>
                <pre>Body : {post.body}</pre>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const DemoWithUseFetch = withDemo(DemoOfUseFetch);

export default function UseFetchPage() {
  return <DemoWithUseFetch title="Use Fetch" />;
}
