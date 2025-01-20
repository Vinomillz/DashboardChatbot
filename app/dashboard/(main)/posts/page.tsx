import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/posts/BackButton";

const PostsPage = () => {
    return ( <>
    <BackButton text="Go Back" link="/" />
    <PostsTable />
    </> );
}
 
export default PostsPage;