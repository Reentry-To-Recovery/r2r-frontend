export enum SearchOrder {
    Asc = "asc",
    Desc = "desc"
}

export interface SearchPayload<TFilters, TSort> {
    offset: number
    limit: number
    filters: TFilters | null
    sort: TSort | null
}

export interface SearchResponseMeta {
    totalResults: number
    returnedResults: number
}