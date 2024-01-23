import { sql } from "@vercel/postgres";

export default async function Home() {
  const posts = await sql`SELECT * FROM posts`;
  const results = posts.rows;
  console.log(results, "re");

  return (
    <main>
      <div>
        <h1>This is posts</h1>
        {results.map((post) => (
          <div key={post.id}>
            <h3 key={post.Title}>{post.title}</h3>
            <h3 key={post.Content}>{post.content}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
