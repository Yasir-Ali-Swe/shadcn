"use client"

import { TrendingUp } from "lucide-react"
import {
    CartesianGrid,
    Line,
    LineChart,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
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

export const description = "Revenue line chart for last 12 months"

const chartData = [
    { month: "January", revenue: 186 },
    { month: "February", revenue: 305 },
    { month: "March", revenue: 237 },
    { month: "April", revenue: 73 },
    { month: "May", revenue: 209 },
    { month: "June", revenue: 214 },
    { month: "July", revenue: 255 },
    { month: "August", revenue: 180 },
    { month: "September", revenue: 280 },
    { month: "October", revenue: 235 },
    { month: "November", revenue: 150 },
    { month: "December", revenue: 100 },
]

const chartConfig = {
    revenue: {
        label: "Revenue",
        color: "var(--chart-1)",
    },
}

export default function ChartLineDefault() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Last 12 Months Revenue</CardTitle>
                <CardDescription>January – December 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={chartData}
                            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => `$${value}`}
                            />
                            <ChartTooltip
                                cursor={{ strokeDasharray: "3 3" }}
                                content={
                                    <ChartTooltipContent
                                        formatter={(value) => [`$${value}`, "Revenue"]}
                                    />
                                }
                            />
                            <Line
                                type="monotone"
                                dataKey="revenue"
                                stroke="var(--color-revenue, var(--chart-1))"
                                strokeWidth={3}
                                dot={{ r: 4, fill: "var(--chart-1)" }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium">
                    Trending up by 5.2% this year <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                    Showing total revenue trend for 2024
                </div>
            </CardFooter>
        </Card>
    )
}
