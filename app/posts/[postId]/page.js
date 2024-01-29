import { getPostData } from "@/lib/posts"

export default async function Post({params: { postId }}){
// tenho que pegar o post pelo id
//const post = await getPostData(postId)
    return(
        <h1>
            {JSON.stringify(postId)}
        </h1>
    // <div className="mt-10">
    //     <h2>
    //         <Link href="/posts">Voltar</Link>
    //     </h2>
    //     <h1>{post.title}</h1>
    //     <h2>{post.date}</h2>
    //     <div className="mt-10"
    //      dangerouslySetInnerHTML={{__html: post.contentHtml }}
    //      />
    // </div>
    )
}