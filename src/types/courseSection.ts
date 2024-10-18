export interface CourseSection {
    id: string
    courseId: string
    title: string
    sortIndex: number
}

export interface FetchCourseSectionsResponse {
    sections: CourseSection[]
}

export interface OrderCourseSectionsPayload {
    orderedSectionIds: string[]
}
