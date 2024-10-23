import { Sortable } from "../components/Containers/SortableItem"

export interface CourseSection {
    id: string
    courseId: string
    title: string
    sortIndex: number
    content: CourseSectionContent[]
}

export interface FetchCourseSectionsResponse {
    sections: CourseSection[]
}

export interface OrderCourseSectionsPayload {
    orderedSectionIds: string[]
}

export interface CourseSectionContent {
    id: string
    sectionId: string
    sortIndex: number
    lesson: Lesson | null
    quiz: Quiz | null
}

export interface Lesson {
    id: string
    title: string
    description: string
    contentUrl: string
}

export interface Quiz {
    id: string
    title: string
}

export interface AddEditCourseSectionPayload {
    title: string
}
