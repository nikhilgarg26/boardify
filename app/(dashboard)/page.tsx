import { Emptyorg } from "@/app/(dashboard)/_components/emptyorg";
import { useOrganization } from "@clerk/nextjs";

const Dashboard = () => {
  // const {organization} = useOrganization();

  return (<div className="font-semibold p-6 h-[calc(100%-80px)] border-l border-t">
    {/* {!organization ? (<Emptyorg></Emptyorg>) : (<p>Board!!</p>)} */}
    <Emptyorg></Emptyorg>

  </div>);
}


export default Dashboard;