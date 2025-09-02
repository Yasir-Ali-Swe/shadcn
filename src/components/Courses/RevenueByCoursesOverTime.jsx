"use client"
import * as React from "react"
import {
    Bar,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
} from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    ChartContainer,
    ChartTooltip,
} from "@/components/ui/chart"

import { Users, DollarSign, BookOpen } from "lucide-react"

export const description = "Revenue by Course Bar Chart"

const courseData = [
    { course: "Mathematics", students: 200, revenue: 8500 },
    { course: "Physics", students: 150, revenue: 6200 },
    { course: "Chemistry", students: 120, revenue: 5100 },
    { course: "Biology", students: 90, revenue: 3700 },
    { course: "Computer Science", students: 220, revenue: 10500 },
    { course: "English", students: 180, revenue: 7200 },
    { course: "History", students: 140, revenue: 5600 },
    { course: "Geography", students: 100, revenue: 4300 },
    { course: "Economics", students: 160, revenue: 6800 },
    { course: "Business Studies", students: 130, revenue: 5400 },
    { course: "Accounting", students: 110, revenue: 4700 },
    { course: "Statistics", students: 95, revenue: 3900 },
    { course: "Political Science", students: 80, revenue: 3400 },
    { course: "Philosophy", students: 70, revenue: 3100 },
    { course: "Psychology", students: 150, revenue: 6100 },
    { course: "Sociology", students: 120, revenue: 4900 },
    { course: "Law", students: 100, revenue: 4300 },
    { course: "Medical Science", students: 140, revenue: 7200 },
    { course: "Pharmacology", students: 90, revenue: 3800 },
    { course: "Engineering Mechanics", students: 160, revenue: 7400 },
    { course: "Electrical Engineering", students: 130, revenue: 6900 },
    { course: "Civil Engineering", students: 115, revenue: 5700 },
    { course: "Mechanical Engineering", students: 125, revenue: 6000 },
    { course: "Data Science", students: 200, revenue: 9500 },
    { course: "Artificial Intelligence", students: 170, revenue: 8800 },
    { course: "Machine Learning", students: 160, revenue: 8500 },
    { course: "Web Development", students: 210, revenue: 9800 },
    { course: "Mobile App Development", students: 180, revenue: 9100 },
    { course: "Graphic Design", students: 150, revenue: 7000 },
    { course: "Digital Marketing", students: 140, revenue: 6800 },
];


const chartConfig = {
    revenue: {
        label: "Revenue",
        color: "var(--chart-3)",
    },
}

export default function CoursesRevenueBarChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-indigo-500" />
                    Course Revenue
                </CardTitle>
                <CardDescription>
                    Revenue generated from each course (with enrollment insights)
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="h-[360px] w-full"
                >
                    <BarChart
                        data={courseData}
                        margin={{
                            top: 20,
                            right: 20,
                            left: 20,
                            bottom: 20,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="course" />
                        <YAxis />
                        <ChartTooltip
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    const { course, revenue, students } = payload[0].payload
                                    return (
                                        <div className="rounded-md border bg-background p-2 shadow-sm">
                                            <p className="font-medium flex items-center gap-1">
                                                <BookOpen className="h-4 w-4 text-indigo-500" />
                                                {course}
                                            </p>
                                            <p className="flex items-center gap-1">
                                                <DollarSign className="h-4 w-4 text-green-500" />
                                                Revenue: ${revenue.toLocaleString()}
                                            </p>
                                            <p className="flex items-center gap-1">
                                                <Users className="h-4 w-4 text-blue-500" />
                                                Students: {students}
                                            </p>
                                        </div>
                                    )
                                }
                                return null
                            }}
                        />
                        <Bar
                            dataKey="revenue"
                            fill="var(--color-revenue)"
                            radius={[6, 6, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
