import { getSortedPostsData } from "@/lib/posts"

export default async function Posts() {
    const allPosts = await getSortedPostsData()
    console.log(allPosts)
return <h1>Lista de posts </h1>
}