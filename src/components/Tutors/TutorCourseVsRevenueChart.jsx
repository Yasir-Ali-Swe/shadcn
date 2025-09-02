"use client"
import * as React from "react"
import {
    Bar,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
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

import { Users, DollarSign, Award } from "lucide-react"

export const description = "Top Tutors by Students Bar Chart"

const tutorData = [
    { tutor: "John Doe", students: 120, revenue: 4500 },
    { tutor: "Sarah Lee", students: 95, revenue: 3200 },
    { tutor: "Mike Smith", students: 150, revenue: 5800 },
    { tutor: "Emma Brown", students: 80, revenue: 2900 },
    { tutor: "David Wilson", students: 110, revenue: 4100 },
    { tutor: "Saljok", students: 120, revenue: 1500 },
    { tutor: "Uzair", students: 95, revenue: 2200 },
    { tutor: "Saad", students: 150, revenue: 5300 },
    { tutor: "Ali", students: 80, revenue: 3600 },
    { tutor: "Yasir", students: 110, revenue: 4300 },
]

const chartConfig = {
    students: {
        label: "Students Enrolled",
        color: "var(--chart-3)",
    },
}

export default function TopTutorsBarChart() {
    return (
        <Card>
            <CardHeader className="flex items-center justify-between">
                <div>
                    <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-500" />
                        Top Tutors
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        Based on student enrollments (with revenue insights)
                    </CardDescription>
                </div>
                <DollarSign className="h-6 w-6 text-green-500" />
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="h-[360px] w-full"
                >
                    <BarChart
                        data={tutorData}
                        margin={{
                            top: 20,
                            right: 20,
                            left: 20,
                            bottom: 20,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="tutor" />
                        <YAxis />
                        <ChartTooltip
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    const { tutor, students, revenue } = payload[0].payload
                                    return (
                                        <div className="rounded-md border bg-background p-2 shadow-sm">
                                            <p className="font-medium flex items-center gap-1">
                                                <Award className="h-4 w-4 text-yellow-500" />
                                                {tutor}
                                            </p>
                                            <p className="flex items-center gap-1">
                                                <Users className="h-4 w-4 text-blue-500" />
                                                Students: {students}
                                            </p>
                                            <p className="flex items-center gap-1">
                                                <DollarSign className="h-4 w-4 text-green-500" />
                                                Revenue: ${revenue.toLocaleString()}
                                            </p>
                                        </div>
                                    )
                                }
                                return null
                            }}
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
