import SheetsVisualizer from "../components/sheetsVisualizer/sheetsVisualizer";
import UserComponent from "../components/userComponent/userComponent";

export default function Dashboard (){
    return(
        <div className="h-dvh bg-rose-50 flex flex-col">   
            <div className="m-4">
                <UserComponent/>   
            </div>
            <div className="h-dvh flex items-center justify-center justify-self-center">
                <SheetsVisualizer/>
            </div>      
        </div>
    )
}