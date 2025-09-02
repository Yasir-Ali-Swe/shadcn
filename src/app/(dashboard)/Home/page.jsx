import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaDollarSign } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
const metrics = [
    {
        title: "Total Sales / Revenue",
        value: "$25,000",
        icon: FaDollarSign,
        description: "Total revenue generated",
        trend: "+12% from last month",
    },
    {
        title: "Total Courses Sold",
        value: "1,200",
        icon: IoBookOutline,
        description: "Courses purchased by students",
        trend: "+8% from last month",
    },
    {
        title: "Active Tutors",
        value: "50",
        icon: FaChalkboardTeacher,
        description: "Currently active tutors",
        trend: "+4 new this month",
    },
    {
        title: "Active Students",
        value: "5,000",
        icon: PiStudent,
        description: "Currently enrolled students",
        trend: "+15% from last month",
    },
]

const page = () => {
    return (
        <div className="min-h-screen bg-background p-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-foreground">Overview of key metrics</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((metric, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
                                <span className="text-2xl"><metric.icon /></span>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                                <p className="text-xs text-muted-foreground mb-2">{metric.description}</p>
                                <p className="text-xs text-green-600 font-medium">{metric.trend}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page