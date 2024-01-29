import { getSortedPostsData } from "@/lib/posts"
import Link from "next/link"

export default async function Posts() {
    const allPosts = await getSortedPostsData()
    console.log(allPosts)
return <div className="mt-10 mx-10 md:flex md:justify-evenly md:itens-center">
    {
        allPosts.map(({id, title, date})=>(
            <h1 className="">
                <Link href={`/posts/@{id}`}>
                {title} - {date}
                </Link>
            </h1>
        ))
    }
</div>
}