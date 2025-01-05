import Navbar from "@/components/Navbar";
// import Vendors from "@/components/pages/Vendors";
import Sidebar from "@/components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      
      <Navbar  />
      <div className="flex">
        <div className="hidden md:block h-[100vh] w-[300px]">
         
          <Sidebar />
        </div>
        <div className="p-5 w-full md:max-w-[1140px] ">
          
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
