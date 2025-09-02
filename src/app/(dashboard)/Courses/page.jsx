import React from 'react'
import CourseChart from "@/components/Courses/CoursesChart"
import CoursesRevenueBarChart from "@/components/Courses/RevenueByCoursesOverTime"
import CourseTable from "@/components/Courses/CourseTable"
const page = () => {
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
                <div className='my-5'>
                    <CourseTable />
                </div>
            </div>
        </section>
    )
}

export default page