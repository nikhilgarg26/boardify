"use client"

import { useOrganization, UserButton } from "@clerk/nextjs"
import { Searchbar } from "./searchbar"
import { Invite } from "./invite"

export const Navbar = ()=>{
    const {organization} = useOrganization();
    console.log(organization);
    return(
        <div className="flex items-center gap-x-4 p-5 bg-gradient-to-l from-slate-200 ">
            <div className="hidden lg:flex lg:flex-1 gap-x-10">
                <Searchbar></Searchbar>
                {organization && <Invite></Invite>}
            </div>
            <div className="bloack lg:hidden flex-1 w-full">
                <Searchbar></Searchbar>
            </div>
            <UserButton></UserButton>
        </div>
    )
}