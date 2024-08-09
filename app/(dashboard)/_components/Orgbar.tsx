"use client"

import Link from "next/link"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { OrganizationSwitcher } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { LayoutDashboard } from "lucide-react"

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
})

export const Orgbar = () => {
    return (
        <div className="hidden lg:flex flex-col space-y-6 w-[200px] pl-3 pt-2">
            <Link href="/">
                <div className="flex items-center gap-x-2">
                    <Image alt="Logo" src="/logo.svg" width={60} height={60}></Image>
                    <span className="font-semibold text-2xl">Boardify</span>
                </div>
            </Link>
            <div className="flex justify-center w-full border border-black rounded-md">
                <OrganizationSwitcher hidePersonal appearance={{
                    layout: {
                        logoPlacement: "outside"
                    },
                    elements: {
                        rootBox: {
                            padding: "4px 15px"
                        }
                    }
                }}></OrganizationSwitcher>
            </div>
            <div>
                <Button className="w-full ">
                    <Link href='/' className="w-full flex justify-start items-center">
                        <LayoutDashboard className="mx-2"></LayoutDashboard> Team Boards
                    </Link>
                </Button>
            </div>
        </div>
    )
}