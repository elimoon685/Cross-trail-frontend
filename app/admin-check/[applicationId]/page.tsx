import { AdminApi } from "@/api/admin";
import AdminCheckBoard from "@/component/useClientComponent/adminCheckBoard";
type ViewApplicationPageProps = {
    params: Promise<{
        applicationId: string;
      }>;
  };
async function getTargetedApplicationData(id:string){
const res=AdminApi.getTargetedApplication()
}
const ViewApplication=async ({ params }:ViewApplicationPageProps)=>{
    const { applicationId} = await params; 
    console.log(applicationId)
    const initialData=await getTargetedApplicationData(applicationId)

    return (
    <div className="flex flex-col min-h-[calc(100vh-60px)] bg-[#DCEFF2] justify-center items-center">
  <AdminCheckBoard initialData={initialData}/>
    </div>)
}
export default ViewApplication