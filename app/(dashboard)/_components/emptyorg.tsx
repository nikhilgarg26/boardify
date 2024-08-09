"use client "

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { CreateOrganization } from "@clerk/nextjs"
import Image from "next/image"


export const Emptyorg = () => {
    return (<div className="h-full flex flex-col items-center justify-center">
        <Image alt="Image" src="/element.png" width={250} height={250}>
        </Image>
        <h2 className="text-2xl font-semibold mt-6">Welcome to Boardify</h2>
        <p className="text-base font-normal mt-2">Create an oragnization to get started.</p>
        <div className="mt-3">
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Create Organization</Button>
                </DialogTrigger>
                <DialogContent className="p-0 border-none bg-transparent max-w-[480px]">
                    <CreateOrganization></CreateOrganization>
                </DialogContent>
            </Dialog>
        </div>
    </div>)
}