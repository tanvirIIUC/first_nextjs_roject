import SideNav from "@/components/shared/SideNav";

const DashboardLayout=({children})=> {
    
    //http://localhost:3000/products/12/ss/eqdwqd  
       return (
        <div className="flex">
            <SideNav/>
           {children}
           
        </div>
       );
     }
     
     export default DashboardLayout