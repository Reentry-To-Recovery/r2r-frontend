import { PaginationState, SortingState, createColumnHelper } from "@tanstack/react-table";
import { useState, useEffect, useMemo } from "react";
import { Course, SearchCoursesFilters, SearchCoursesSort } from "../../../types/courses";
import { useAdminApi } from "../../../hooks/useAdminApi";
import { useNavigate } from "react-router-dom";
import AddNewButton from "../../../components/Buttons/AddNewButton";
import { SearchOrder, SearchPayload } from "../../../types/search";
import Table from "../../components/Table";
import AdminBreadcrumb from "../../components/AdminBreadcrumb";
import TableActionCell from "../../components/TableActionCell";

const columnHelper = createColumnHelper<Course>();

export default function CourseList() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 });
    const [totalResults, setTotalResults] = useState<number>(0);
    const [sorting, setSorting] = useState<SortingState>([{ id: "title", desc: false }])
    const [titleSearch, setTitleSearch] = useState<string>("");
    const [activeFilter, setActiveFilter] = useState<string>("");

    const { fetchCourses } = useAdminApi();
    const navigate = useNavigate();

    const handleTitleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        setTitleSearch(e.target.value);
    }

    const handleActiveFilterChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        e.preventDefault();
        setActiveFilter(e.target.value);
    }

    const columns = useMemo(() => [
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
            row => row.hasCertificate,
            {
                header: "Has Certificate?",
                enableSorting: false
            }
        ),
        columnHelper.accessor(
            row => row.active,
            {
                header: "Active?",
                enableSorting: false
            }
        ),
        columnHelper.display({
            id: "actions",
            header: "Actions",
            cell: context => <TableActionCell>
                <button className="solid-button" onClick={() => { navigate(`${context.cell.row.original.id}/edit`) }}>Edit Course</button>
            </TableActionCell>
        })
    ], [navigate]);

    useEffect(() => {
        const payload: SearchPayload<SearchCoursesFilters, SearchCoursesSort> = {
            offset: pagination.pageIndex * pagination.pageSize,
            limit: pagination.pageSize,
            sort: { field: sorting[0].id, order: sorting[0].desc ? SearchOrder.Desc : SearchOrder.Asc },
            filters: {
                title: titleSearch,
                active: activeFilter === "true" ? true : (activeFilter === "false" ? false : null)
            }
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
    }, [fetchCourses, pagination, sorting, titleSearch, activeFilter]);

    return (
        <div className="webpage flex justify">
            <AdminBreadcrumb links={[]} current="Courses" />
            <div className="list-view">
                <div className="filters">
                    <input
                        type="search"
                        className="search"
                        placeholder="Search titles"
                        onChange={handleTitleSearchChange}
                        value={titleSearch}
                    />
                    <select className="select-filter" name="active" value={activeFilter} onChange={handleActiveFilterChange}>
                        <option value="">Show All Active/Inactive</option>
                        <option value="true">Active Only</option>
                        <option value="false">Inactive Only</option>
                    </select>
                </div>
                <div >
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
        </div>
    );
}