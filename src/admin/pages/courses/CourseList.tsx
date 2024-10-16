import { PaginationState, SortingState, createColumnHelper } from "@tanstack/react-table";
import { useState, useEffect, useMemo } from "react";
import { Course, SearchCoursesFilters, SearchCoursesSort } from "../../../types/Courses";
import { useAdminApi } from "../../../hooks/useAdminApi";
import { useNavigate } from "react-router-dom";
import AddNewButton from "../../../components/Buttons/AddNewButton";
import { SearchOrder, SearchPayload } from "../../../types/search";
import Table from "../../components/Table";
import AdminBreadcrumb from "../../components/AdminBreadcrumb";
import TableActionCell from "../../components/TableActionCell";
import ConfirmationModal from "../../components/ConfirmationModal";
import toast from "react-hot-toast";
import DebounceSearchBar from "../../components/DebounceSearchBar";

const columnHelper = createColumnHelper<Course>();

export default function CourseList() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 });
    const [totalResults, setTotalResults] = useState<number>(0);
    const [sorting, setSorting] = useState<SortingState>([{ id: "title", desc: false }])
    const [titleSearch, setTitleSearch] = useState<string>("");
    const [activeFilter, setActiveFilter] = useState<string>("");
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [courseToDelete, setCourseToDelete] = useState<Course | null>(null);

    const { fetchCourses, deleteCourse } = useAdminApi();
    const navigate = useNavigate();

    const handleActiveFilterChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        e.preventDefault();
        setActiveFilter(e.target.value);
        setPagination((prevPagination) => ({ pageIndex: 0, pageSize: prevPagination.pageSize }));
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
                <div className="flex" style={{ columnGap: "8px" }}>
                    <button className="solid-button" onClick={() => { navigate(`${context.cell.row.original.id}/edit`) }}>Edit</button>
                    <button
                        className="solid-button"
                        onClick={() => {
                            setShowDeleteModal(true);
                            setCourseToDelete(context.cell.row.original);
                        }}
                    >
                        Delete
                    </button>
                </div>
            </TableActionCell>
        })
    ], [navigate]);

    const handleDeleteCourse = async () => {
        try {
            await deleteCourse(courseToDelete?.id ?? "");
            toast.success("Course deleted successfully");
        } catch (e: any) {
            console.log(e);
            const errorMessage = e.response?.data?.errorMessage;
            toast.error(errorMessage ?? "Error deleting course");
        } finally {
            const payload: SearchPayload<SearchCoursesFilters, SearchCoursesSort> = {
                offset: pagination.pageIndex * pagination.pageSize,
                limit: pagination.pageSize,
                sort: { field: sorting[0].id, order: sorting[0].desc ? SearchOrder.Desc : SearchOrder.Asc },
                filters: {
                    title: titleSearch,
                    active: activeFilter === "true" ? true : (activeFilter === "false" ? false : null)
                }
            };

            try {
                const response = await fetchCourses(payload);

                setCourses(response.data.courses);
                setTotalResults(response.meta.totalResults);
            } catch (e) {
                console.log(e);
            }

            setShowDeleteModal(false);
        }
    }

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
                    <DebounceSearchBar
                        id="courseTitleSearch"
                        onDebounce={(query: string) => {
                            setTitleSearch(query);
                        }}
                        placeholder="Search titles"
                    />
                    <select className="select-filter input" name="active" value={activeFilter} onChange={handleActiveFilterChange}>
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
            <ConfirmationModal
                showModal={showDeleteModal}
                onConfirm={() => { handleDeleteCourse() }}
                onCancel={() => {
                    setShowDeleteModal(false);
                    setCourseToDelete(null);
                }}
            >
                <span>
                    <span>Are you sure you would like to delete</span>{' '}
                    <span style={{ fontWeight: "bold" }}>{courseToDelete?.title ?? ""}</span>{"?"}
                </span>
            </ConfirmationModal>
        </div>
    );
}
