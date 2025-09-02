import React from 'react'
import CourseChart from "@/components/Courses/CoursesChart";
import TutorChart from "@/components/Home/Tutors";
import StudentChart from "@/components/Home/Students";
import RevenueChart from "@/components/Home/RevenueChart";
import RecentlyJoiedUsers from "@/components/Analytics/RecentlyJoinedUsers";
import TopCoursesBarChart from "@/components/Analytics/TopCoursesBarChart";
const page = () => {
    return (
        <section className='min-h-screen bg-background p-4'>
            <div className='max-w-7xl mx-auto'>
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-foreground">Platform Analytics</h1>
                    <p className="text-muted-foreground mt-2">
                        Get a complete overview of students, tutors, courses, and revenue trends across the platform.
                    </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <div>
                        <TutorChart />
                    </div>
                    <div>
                        <StudentChart />
                    </div>
                    <div>
                        <CourseChart />
                    </div>
                </div>
                <div className='my-5'>
                    <RevenueChart />
                </div>
                <div className='my-5'>
                    <RecentlyJoiedUsers />
                </div>
                <div className='my-5'>
                    <TopCoursesBarChart />
                </div>

            </div>
        </section>
    )
}

export default page