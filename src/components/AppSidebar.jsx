import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'
import { User, Home, Inbox, Calendar, Search, Settings } from 'lucide-react'
import Link from 'next/link'

const links = [
    {
        title: "Home",
        url: "/",
        icon: Home
    },
    {
        title: "Inbox",
        url: "/inbox",
        icon: Inbox
    },
    {
        title: "Calendar",
        url: "/calendar",
        icon: Calendar
    },
    {
        title: "Search",
        url: "/search",
        icon: Search
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings
    },
]

const AppSidebar = () => {
    return (
        <Sidebar collapsible='icon'>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                                <User className="mr-2 h-5 w-5" />
                                <span className="flex items-center text-2xl">
                                    Yasir Ali
                                </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className={"text-base"}>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                {
                                    links.map((links, index) => (
                                        <SidebarMenuButton asChild key={index}>
                                            <Link href={links.url} className='my-3'>
                                                <links.icon className="mr-2 h-5 w-5" />
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