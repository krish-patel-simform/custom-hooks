import { withDemo } from "../HOC/withDemo";
import { useFetch } from "../hooks/useFetch";

const URL = "https://jsonplaceholder.typicode.com/posts?_limit=3";

const PostContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const PostStyle = {
  border: "1px solid gray",
};

function DemoOfUseFetch() {
  const [loding, data] = useFetch(URL);

  if (loding) return <h6>Loading....</h6>;

  if (data.error) return <h6>{data.error}</h6>;

  console.log(data.data);

  if (data.data instanceof Array) {
    return (
      <>
        <div style={PostContainerStyle}>
          {data.data.map((post) => {
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
