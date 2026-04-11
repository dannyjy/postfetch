import type { Dispatch, SetStateAction } from "react"

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type URLContextValue = {
    submittedUrl: string;
    setSubmittedUrl: Dispatch<SetStateAction<string>>;
}

type ButtonProp = {
    handleClick: () => void
    text: string
    color: string
}

type PagerProp = {
    postLength: number
    currentPage: number
    itemsPerPage: number
    nextItems: () => void
    previousItem: () => void
}

export type { Post, URLContextValue, ButtonProp, PagerProp }