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
export const description = "Courses vs Tutors Bar Chart"
const chartData = [
    { course: "Mathematics", tutors: 45 },
    { course: "Physics", tutors: 32 },
    { course: "Chemistry", tutors: 28 },
    { course: "Biology", tutors: 20 },
    { course: "Computer Science", tutors: 55 },
    { course: "English", tutors: 40 },
    { course: "History", tutors: 15 },
    { course: "Economics", tutors: 25 },
    { course: "Psychology", tutors: 30 },
    { course: "Sociology", tutors: 18 },
    { course: "Political Science", tutors: 22 },
    { course: "Philosophy", tutors: 14 },
    { course: "Geography", tutors: 16 },
    { course: "Statistics", tutors: 27 },
    { course: "Business Studies", tutors: 35 },
    { course: "Accounting", tutors: 29 },
    { course: "Marketing", tutors: 21 },
    { course: "Finance", tutors: 26 },
    { course: "Law", tutors: 19 },
    { course: "Medicine", tutors: 23 },
    { course: "Nursing", tutors: 17 },
    { course: "Engineering", tutors: 38 },
    { course: "Art & Design", tutors: 12 },
    { course: "Music", tutors: 10 },
    { course: "Foreign Languages", tutors: 24 }
];


const chartConfig = {
    tutors: {
        label: "Tutors Offering",
        color: "var(--chart-3)",
    },
}

export default function CoursesTutorsBarChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Courses by Tutors</CardTitle>
                <CardDescription>
                    Number of tutors offering each course category
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[300px] w-full"
                >
                    <BarChart
                        accessibilityLayer
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
                                    className="w-[140px]"
                                    nameKey="tutors"
                                />
                            }
                        />
                        <Bar
                            dataKey="tutors"
                            fill="var(--color-tutors)"
                            radius={[6, 6, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
