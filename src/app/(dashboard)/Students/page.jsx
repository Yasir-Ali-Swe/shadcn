"use client"
import React from 'react'
import { useState } from 'react';
import StudentChart from '@/components/Home/Students'
import StudentRevenueChart from "@/components/Students/StudentRevenue";
import StudentTable from '@/components/Students/StudentTable';
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
        <section className="min-h-screen bg-background p-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-foreground">Student Dashboard</h1>
                    <p className="text-muted-foreground mt-2">
                        Track student activity, revenue insights, and enrollment details in one place.
                    </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
                    <div className='lg:col-span-8'>
                        <StudentRevenueChart />
                    </div>
                    <div className='lg:col-span-4'>
                        <StudentChart />
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
                    </div>
                    <div className='lg:hidden'>
                        <Button onClick={toggleFilters}>{showFilters ? "Hide Filters" : "Show Filters"}</Button>
                        {showFilters && (
                            <div className='mt-2 flex flex-col gap-4'>
                                <Input type="text" placeholder="Search name" className={"w-[60%]"} />
                                <Input type="text" placeholder="Search Email" className={"w-[60%]"} />
                                <Input type="text" placeholder="Search Phone" className={"w-[60%]"} />
                                <div className='flex items-center gap-2'>
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
                                    <Button variant={"outline"} size={"lg"}>Apply</Button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
                <div className='mt-5'>
                    <StudentTable />
                </div>
            </div>
        </section>
    )
}

export default page






