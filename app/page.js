import Link from "next/link";


export default function Home() {
  return (
    <>
    <h1 className="flex-box justify-center mt-10 ml-10">
      Conheca o Next.js 13.4
    </h1>
    <h2 className="flex-box justify-center mt-10 ml-10">
      <Link href={`/posts`}>Posts</Link>
    </h2>
    </>
  );
}
