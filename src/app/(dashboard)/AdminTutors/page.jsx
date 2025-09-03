"use client"
import { useState } from 'react';
import React from 'react'
import CourseVsTutorChart from '@/components/Home/CourseVsTutor'
import TutorChart from "@/components/Home/Tutors";
import TutorCourseVsRevenueChart from "@/components/Tutors/TutorCourseVsRevenueChart";
import TutorTable from "@/components/Tutors/TutorTable";
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
                    <h1 className="text-3xl font-bold text-foreground">Tutor Dashboard</h1>
                    <p className="text-muted-foreground mt-2">
                        Track tutors activity, revenue insights, and course details in one place.
                    </p>
                </div>
                <div>
                    <CourseVsTutorChart />
                </div>
                <div className='my-5 grid grid-cols-1 lg:grid-cols-12 gap-6'>
                    <div className='lg:col-span-4'>
                        <TutorChart />
                    </div>
                    <div className='lg:col-span-8'>
                        <TutorCourseVsRevenueChart />
                    </div>
                </div>
                <div className='mt-5 hidden lg:block'>
                    <h1 className="text-3xl font-bold text-foreground">Filtters</h1>
                    <div className='mt-2 flex gap-2 items-center'>
                        <Input type="text" placeholder="Search name" />
                        <Input type="text" placeholder="Search Email" />
                        <Input type="text" placeholder="Search Phone" />
                        <Select>
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select a Active or Inactive" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select Active or Inactive </SelectLabel>
                                    <SelectItem value="apple">Active</SelectItem>
                                    <SelectItem value="banana">Inactive</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select tutor course" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select by Course </SelectLabel>
                                    <SelectItem value="english">English</SelectItem>
                                    <SelectItem value="physics">Physics</SelectItem>
                                    <SelectItem value="chemistry">Chemistry</SelectItem>
                                    <SelectItem value="biology">Biology</SelectItem>
                                    <SelectItem value="computer-science">Computer Science</SelectItem>
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
                            <Input type="text" placeholder="Search Email" className={"w-[60%]"} />
                            <Input type="text" placeholder="Search Phone" className={"w-[60%]"} />
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Select a Active or Inactive" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select Active or Inactive </SelectLabel>
                                        <SelectItem value="apple">Active</SelectItem>
                                        <SelectItem value="banana">Inactive</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <div className='flex items-center gap-2'>
                                <Select>
                                    <SelectTrigger className="">
                                        <SelectValue placeholder="Select tutor course" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Select by Course </SelectLabel>
                                            <SelectItem value="english">English</SelectItem>
                                            <SelectItem value="physics">Physics</SelectItem>
                                            <SelectItem value="chemistry">Chemistry</SelectItem>
                                            <SelectItem value="biology">Biology</SelectItem>
                                            <SelectItem value="computer-science">Computer Science</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Button variant={"outline"} size={"lg"}>Apply</Button>
                            </div>
                        </div>
                    )}
                </div>
                <div className='my-5'>
                    <TutorTable />
                </div>
            </div>
        </section>
    )
}

export default page