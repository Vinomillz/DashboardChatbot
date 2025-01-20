
import DriverTable from "@/components/drivers/DriverTable";
import BackButton from "@/components/posts/BackButton";

const PostsPage = () => {
    return ( <>
    <BackButton text="Go Back" link="/" />
    <DriverTable />
    </> );
}
 
export default PostsPage;