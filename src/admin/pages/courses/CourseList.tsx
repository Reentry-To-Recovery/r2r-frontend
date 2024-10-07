import { ColumnSort, PaginationState, SortingState, createColumnHelper } from "@tanstack/react-table";
import { useState, useEffect } from "react";
import { Course, SearchCoursesFilters, SearchCoursesSort } from "../../../types/courses";
import { useAdminApi } from "../../../hooks/useAdminApi";
import { useNavigate } from "react-router-dom";
import AddNewButton from "../../../components/Buttons/AddNewButton";
import { SearchOrder, SearchPayload } from "../../../types/search";
import Table from "../../components/Table";

const columnHelper = createColumnHelper<Course>();

const columns = [
    columnHelper.accessor(
        row => row.id,
        {
            header: "Course ID",
            enableSorting: false
        }
    ),
    columnHelper.accessor(
        row => row.title,
        {
            header: "Title",
            enableSorting: true,
            sortDescFirst: false,
            id: "title"
        }
    ),
    columnHelper.accessor(
        row => row.description,
        {
            header: "Description",
            enableSorting: false
        }
    ),
    columnHelper.accessor(
        row => row.active,
        {
            header: "Active",
            enableSorting: false
        }
    )
];

export default function CourseList() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 });
    const [totalResults, setTotalResults] = useState<number>(0);
    const [sorting, setSorting] = useState<SortingState>([{ id: "title", desc: false }])

    const { fetchCourses } = useAdminApi();
    const navigate = useNavigate();

    useEffect(() => {
        const payload: SearchPayload<SearchCoursesFilters, SearchCoursesSort> = {
            offset: pagination.pageIndex * pagination.pageSize,
            limit: pagination.pageSize,
            sort: { field: sorting[0].id, order: sorting[0].desc ? SearchOrder.Desc : SearchOrder.Asc },
            filters: null
        };

        const fetchAdminCourses = async () => {
            try {
                const response = await fetchCourses(payload);

                setCourses(response.data.courses);
                setTotalResults(response.meta.totalResults);
            } catch (e) {
                console.log(e);
            }
        };

        fetchAdminCourses();
    }, [fetchCourses, pagination, sorting]);

    return (
        <div className="webpage flex justify">
            <div className="breadcrumb flex justify">
                <div className="inner-breadcrumb">Courses</div>
            </div>
            <div className="list-view">
                <AddNewButton />
                <Table
                    totalResults={totalResults}
                    columns={columns}
                    pagination={pagination}
                    setPagination={setPagination}
                    data={courses}
                    sorting={sorting}
                    onSortingChange={setSorting}
                />
            </div>
        </div>
    );
}