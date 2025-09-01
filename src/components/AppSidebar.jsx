import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'
import { User, Home, Inbox, Calendar, NotepadText, ChartNoAxesCombined } from 'lucide-react'
import { PiStudent, PiChalkboardTeacher } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import Link from 'next/link'
import Image from 'next/image';


const links = [
    {
        title: "Home",
        url: "/Home",
        icon: Home
    },
    {
        title: "Students",
        url: "/Students",
        icon: PiStudent
    },
    {
        title: "Tutors",
        url: "/Tutors",
        icon: PiChalkboardTeacher
    },
    {
        title: "Courses",
        url: "/Courses",
        icon: NotepadText
    },
    {
        title: "Analytics",
        url: "/Analytics",
        icon: ChartNoAxesCombined
    },

]

const AppSidebar = () => {
    return (
        <Sidebar collapsible='icon'>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/" >
                                <IoSchoolOutline size={64}  />
                                <span className="flex items-center text-xl font-semibold">
                                    Tutor Universe
                                </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className={"text-base"}>System Overview</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                {
                                    links.map((links, index) => (
                                        <SidebarMenuButton asChild key={index}>
                                            <Link href={links.url} className='my-3'>
                                                <links.icon className='mr-2' />
                                                <span className="flex items-center text-base">
                                                    {links.title}
                                                </span>
                                            </Link>
                                        </SidebarMenuButton>
                                    ))
                                }
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>Footer</SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar