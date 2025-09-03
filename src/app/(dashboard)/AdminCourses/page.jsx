"use client"
import React, { useState } from 'react'
import CourseChart from "@/components/Courses/CoursesChart"
import CoursesRevenueBarChart from "@/components/Courses/RevenueByCoursesOverTime"
import CourseTable from "@/components/Courses/CourseTable"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button';
const page = () => {
    const [showFilters, setShowFilters] = useState(false);
    const toggleFilters = () => {
        setShowFilters(!showFilters);
    }
    return (
        <section className='min-h-screen bg-background p-4'>
            <div className='max-w-7xl mx-auto'>
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-foreground">Courses Overview</h1>
                    <p className="text-muted-foreground mt-2">
                        Track Courses ,revenue insights, and course details in one place.
                    </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
                    <div className='lg:col-span-4'>
                        <CourseChart />
                    </div>
                    <div className='lg:col-span-8'>
                        <CoursesRevenueBarChart />
                    </div>
                </div>
                <div className='mt-5 hidden lg:block'>
                    <h1 className="text-3xl font-bold text-foreground">Filtters</h1>
                    <div className='mt-2 flex gap-2 items-center'>
                        <Input type="text" placeholder="Search name" />
                        <Input type="text" placeholder="Search Category" />
                        <Select>
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select a Published or Unpublished" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select Published or Unpublished </SelectLabel>
                                    <SelectItem value="apple">Published</SelectItem>
                                    <SelectItem value="banana">Unpublished</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className='lg:hidden mt-5'>
                    <Button onClick={toggleFilters}>{showFilters ? "Hide Filters" : "Show Filters"}</Button>
                    {showFilters && (
                        <div className='mt-2 flex flex-col gap-4'>
                            <Input type="text" placeholder="Search name" className={"w-[60%]"} />
                            <Input type="text" placeholder="Search Category" className={"w-[60%]"} />
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Select a Published or Unpublished" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select Published or Unpublished </SelectLabel>
                                        <SelectItem value="apple">Published</SelectItem>
                                        <SelectItem value="banana">Unpublished</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Button variant={"outline"} size={"lg"}>Apply</Button>

                        </div>
                    )}
                </div>
                <div className='my-5'>
                    <CourseTable />
                </div>
            </div>
        </section>
    )
}

export default page