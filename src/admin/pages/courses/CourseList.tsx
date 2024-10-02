import { createColumnHelper, useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table";
import { useState, useEffect } from "react";
import { Course } from "../../../types/Courses";
import { useAdminApi } from "../../../hooks/useAdminApi";
import { useNavigate } from "react-router-dom";
import AddNewButton from "../../../components/Buttons/AddNewButton";

const columnHelper = createColumnHelper<Course>();

const columns = [
    columnHelper.accessor(
        row => row.id,
        {
            header: "Course ID"
        }
    ),
    columnHelper.accessor(
        row => row.title,
        {
            header: "Title"
        }
    ),
    columnHelper.accessor(
        row => row.description,
        {
            header: "Description"
        }
    ),
    columnHelper.accessor(
        row => row.active,
        {
            header: "Active"
        }
    )
];

export default function CourseList() {
    const [courses, setCourses] = useState<Course[]>([]);
    const { fetchCourses } = useAdminApi();
    const navigate = useNavigate();
    const table = useReactTable({
        data: courses,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    useEffect(() => {
        const fetchAdminCourses = async () => {
            try {
                const response = await fetchCourses();

                setCourses(response.data.courses);
            } catch (e) {
                console.log(e);
            }
        };

        fetchAdminCourses();
    }, [fetchCourses]);

    return (
        <div className="webpage flex justify">
            <div className="breadcrumb flex justify">
                <div className="inner-breadcrumb">Courses</div>
            </div>
            <div className="list-view">
                <AddNewButton />
                <table>
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}