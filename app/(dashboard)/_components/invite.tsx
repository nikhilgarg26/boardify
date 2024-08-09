"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { OrganizationProfile } from "@clerk/nextjs"
import { Plus } from "lucide-react"

export const Invite = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="flex justify-center items-center">
                        <Plus className="mr-2"></Plus>
                        <p>
                            Invite members
                        </p>
                    </Button>
                </DialogTrigger>
                <DialogContent className="p-0 border-none bg-transparent max-w-[880px]">
                    <OrganizationProfile path="/"></OrganizationProfile>
                </DialogContent>
            </Dialog>
        </div>
    )
}