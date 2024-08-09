"use client"

import { cn } from "@/lib/utils"
import { useOrganization, useOrganizationList } from "@clerk/nextjs"
import Image from "next/image"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface ItemProps {
    id: string,
    name: string,
    imageUrl: string
}


export const Item = ({ id, name, imageUrl }: ItemProps) => {
    const { organization } = useOrganization();
    const { setActive } = useOrganizationList();

    const isActive = organization?.id === id;

    const onClick = () => {
        if (!setActive) return;

        setActive({ organization: id })
    }
    return (
        <div className="aspect-square w-10 relative">
            <TooltipProvider>
                <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                        <Image fill alt={name} src={imageUrl} onClick={onClick} className={cn("rounded-md scale-90 cursor-pointer hover:scale-125 transition", isActive && "opacity-100 scale-110") }></Image>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        <p>{name}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}