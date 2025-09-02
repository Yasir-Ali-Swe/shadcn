"use client"
import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
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
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Top Courses by Student Enrollments and Revenue"

// Dummy data: top courses with number of enrolled students and revenue
const chartData = [
    { course: "Mathematics", students: 120, revenue: 2400 },
    { course: "Physics", students: 95, revenue: 1900 },
    { course: "Chemistry", students: 80, revenue: 1600 },
    { course: "Biology", students: 70, revenue: 1400 },
    { course: "Computer Science", students: 150, revenue: 3000 },
    { course: "English", students: 110, revenue: 2200 },
    { course: "History", students: 50, revenue: 1000 },
    { course: "Economics", students: 65, revenue: 1300 },
    { course: "Psychology", students: 75, revenue: 1500 },
    { course: "Sociology", students: 60, revenue: 1200 },
]

const chartConfig = {
    students: {
        label: "Enrollments",
        color: "var(--chart-3)",
    },
}

export default function TopCoursesBarChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Top Courses by Enrollment</CardTitle>
                <CardDescription>
                    Number of students enrolled and revenue for each course category
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[300px] w-full"
                >
                    <BarChart
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                            bottom: 20,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="course"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                        />
                        <YAxis />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[160px]"
                                    formatter={(value, name, props) => {
                                        const revenue = props.payload.revenue
                                        return [`${value}`, `${name} - $${revenue} revenue`]
                                    }}
                                />
                            }
                        />
                        <Bar
                            dataKey="students"
                            fill="var(--color-students)"
                            radius={[6, 6, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
