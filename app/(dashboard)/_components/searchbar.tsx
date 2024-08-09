"use client"

import qs from "query-string"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { stringify } from "querystring"
import { ChangeEvent, useEffect, useState } from "react"
import { useDebounceValue } from "usehooks-ts"

export const Searchbar = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>("");

    const [debouncedValue, setDebounce] = useDebounceValue(value, 500)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        const url = qs.stringifyUrl({
            url: "/",
            query: {
                search: debouncedValue
            },
        }, {
            skipEmptyString: true,
            skipNull: true
        })

        router.push(url);
    }, [debouncedValue, router])

    return (
        <div className="lg:w-1/2 flex items-center">
            <SearchIcon className="absolute ml-3 h-4 w-4 text-slate-500"></SearchIcon>
            <Input className="pl-10" placeholder="Search Boards" onChange={handleChange} />
        </div>
    )
}