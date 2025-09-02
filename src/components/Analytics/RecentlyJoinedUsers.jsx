"use client"

import { UserPlus, User } from "lucide-react"
import {
    CartesianGrid,
    Line,
    LineChart,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Daily new students and tutors for current month"


const dailyJoins = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    students: Math.floor(Math.random() * 20) + 5,
    tutors: Math.floor(Math.random() * 5) + 1,
}))

const chartConfig = {
    students: { label: "Students", color: "var(--chart-1)" },
    tutors: { label: "Tutors", color: "var(--chart-2)" },
}

export default function DailyJoinsChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>New Students & Tutors - Current Month</CardTitle>
                <CardDescription>Daily joins for students and tutors</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={dailyJoins}
                            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis
                                dataKey="day"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                            />
                            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                            <ChartTooltip
                                cursor={{ strokeDasharray: "3 3" }}
                                content={
                                    <ChartTooltipContent
                                        formatter={(value, name) => [`${value} `, name]}
                                    />
                                }
                            />
                            <Line
                                type="monotone"
                                dataKey="students"
                                stroke="var(--chart-1)"
                                strokeWidth={3}
                                dot={{ r: 4, fill: "var(--chart-1)" }}
                                activeDot={{ r: 6 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="tutors"
                                stroke="var(--chart-2)"
                                strokeWidth={3}
                                dot={{ r: 4, fill: "var(--chart-2)" }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium">
                    Latest join trends for students & tutors <UserPlus className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                    Showing daily joins for the current month
                </div>
            </CardFooter>
        </Card>
    )
}
