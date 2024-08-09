import { List } from "./list"
import { NewButton } from "./newbutton"


export const Sidebar = () =>{
    return(
        <div className="fixed z-[1] left-0 bg-blue-800 h-full w-[65px] p-1 flex flex-col gap-y-4 text-white" >
            <NewButton></NewButton>
            <List></List>
        </div>
    )
}