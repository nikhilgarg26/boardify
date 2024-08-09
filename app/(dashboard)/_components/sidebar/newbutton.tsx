"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { CreateOrganization } from "@clerk/nextjs"
import { Plus } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export const NewButton = () => {
    return (
        <Dialog>
            <DialogTrigger className="flex justify-center mt-2">
                <TooltipProvider>
                    <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                            <div className="aspect-square w-10 ">
                                <button className="bg-white/25 h-full w-full rounded-md flex justify-center items-center hover:bg-white/40 transition">
                                    <Plus className="text-white opacity-100"></Plus>
                                </button>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>Create Organization</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </DialogTrigger>
            <DialogContent className="p-0 border-none bg-transparent max-w-[480px]">
                <CreateOrganization></CreateOrganization>
            </DialogContent>
        </Dialog>
    )
}

