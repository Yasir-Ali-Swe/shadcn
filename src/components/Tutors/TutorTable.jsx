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
    { id: "1", name: "John Doe", email: "john@example.com", phone: "123-456-7890", courses: "Math, Physics", status: "Active" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", courses: "Chemistry", status: "Inactive" },
    { id: "3", name: "Michael Johnson", email: "michael@example.com", phone: "555-222-1111", courses: "Biology, History", status: "Active" },
    { id: "4", name: "Emily Davis", email: "emily@example.com", phone: "444-666-8888", courses: "English", status: "Active" },
    { id: "5", name: "William Brown", email: "william@example.com", phone: "333-777-9999", courses: "Computer Science", status: "Inactive" },
    { id: "6", name: "Olivia Wilson", email: "olivia@example.com", phone: "222-888-5555", courses: "Math", status: "Active" },
    { id: "7", name: "James Taylor", email: "james@example.com", phone: "111-333-4444", courses: "Physics, Chemistry", status: "Active" },
    { id: "8", name: "Sophia Martinez", email: "sophia@example.com", phone: "999-000-1111", courses: "Biology", status: "Inactive" },
    { id: "9", name: "Daniel Anderson", email: "daniel@example.com", phone: "777-888-9999", courses: "English, History", status: "Active" },
    { id: "10", name: "Emma Thomas", email: "emma@example.com", phone: "666-555-4444", courses: "Computer Science", status: "Inactive" },
]

const columns = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
    },
    {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => <div>{row.getValue("email")}</div>,
    },
    {
        accessorKey: "phone",
        header: "Phone",
        cell: ({ row }) => <div>{row.getValue("phone")}</div>,
    },
    {
        accessorKey: "courses",
        header: "Courses Published",
        cell: ({ row }) => <div>{row.getValue("courses")}</div>,
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <span
                className={`px-2 py-1 rounded text-sm ${row.getValue("status") === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                    }`}
            >
                {row.getValue("status")}
            </span>
        ),
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
export default function StudentTable() {
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
