import { createColumnHelper, useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table";
import { useState, useEffect } from "react";
import { fetchAdminCourses } from "../../../api/courses";
import { Course } from "../../../types/Courses";

const columnHelper = createColumnHelper<Course>();

const columns = [
    columnHelper.accessor(
        row => row.id,
        {
            header: "ID"
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
    const table = useReactTable({
        data: courses,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetchAdminCourses();

                setCourses(response.data.courses);
            } catch (e) {
                console.log(e);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div>
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
    );
}