"use client"
import * as React from "react"
import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Eye, Pencil, Trash2 } from "lucide-react"

const data = [
    { id: "1", name: "Mathematics", category: "Science", tutors: 5, students: 200, revenue: 8500, status: "Published", createdAt: "2023-08-15" },
    { id: "2", name: "Computer Science", category: "Technology", tutors: 8, students: 220, revenue: 10500, status: "Published", createdAt: "2023-06-20" },
    { id: "3", name: "History", category: "Arts", tutors: 3, students: 140, revenue: 5600, status: "Unpublished", createdAt: "2023-07-10" },
    { id: "4", name: "Biology", category: "Science", tutors: 4, students: 90, revenue: 3700, status: "Published", createdAt: "2023-05-12" },
    { id: "5", name: "English", category: "Language", tutors: 6, students: 180, revenue: 7200, status: "Published", createdAt: "2023-09-01" },
    { id: "6", name: "Algebra", category: "Science", tutors: 5, students: 200, revenue: 8500, status: "Published", createdAt: "2023-08-15" },
    { id: "7", name: "Robotics", category: "Technology", tutors: 8, students: 220, revenue: 10500, status: "Published", createdAt: "2023-06-20" },
    { id: "8", name: "Ecnomics", category: "Arts", tutors: 3, students: 140, revenue: 5600, status: "Unpublished", createdAt: "2023-07-10" },
    { id: "9", name: "Chemistry", category: "Science", tutors: 4, students: 90, revenue: 3700, status: "Published", createdAt: "2023-05-12" },
    { id: "10", name: "Physics", category: "Language", tutors: 6, students: 180, revenue: 7200, status: "Published", createdAt: "2023-09-01" },
]

const columns = [
    {
        accessorKey: "name",
        header: "Course Name",
        cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "tutors",
        header: "Tutors Offering",
    },
    {
        accessorKey: "students",
        header: "Students Enrolled",
    },
    {
        accessorKey: "revenue",
        header: "Revenue",
        cell: ({ row }) => (
            <span className="font-semibold text-green-600">
                ${row.getValue("revenue").toLocaleString()}
            </span>
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <span
                className={`px-2 py-1 rounded text-sm ${row.getValue("status") === "Published"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                    }`}
            >
                {row.getValue("status")}
            </span>
        ),
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
    },
    {
        id: "actions",
        header: "Actions",
        cell: () => (
            <div className="flex gap-2">
                <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                    <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="icon">
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        ),
    },
]

export default function CourseTable() {
    const [pagination, setPagination] = React.useState({
        pageIndex: 0,
        pageSize: 5,
    })

    const table = useReactTable({
        data,
        columns,
        state: {
            pagination,
        },
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    return (
        <div className="w-full">
            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-between py-4">
                <div className="text-sm text-muted-foreground">
                    Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
