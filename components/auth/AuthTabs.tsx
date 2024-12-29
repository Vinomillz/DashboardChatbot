import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";


const AuthTabs = () => {
    return ( <div>
        <Tabs defaultValue="account" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="Login">Login</TabsTrigger>
    <TabsTrigger value="Register">Register</TabsTrigger>
  </TabsList>
  <TabsContent value="Login"><LoginForm /></TabsContent>
  <TabsContent value="Register"><RegisterForm /> </TabsContent>
</Tabs>

    </div> );
}
 
export default AuthTabs;