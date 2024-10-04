import { SearchOrder } from "./search"

export interface Course {
    id: string
    title: string
    description: string
    iconUrl: string
    hasCertificate: boolean
    active: boolean
}

export interface SearchCoursesFilters {
    title: string | null
    active: boolean | null
}

export interface SearchCoursesSort {
    field: "title"
    order: SearchOrder
}