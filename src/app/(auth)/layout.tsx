"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import "./styles.css"

const navLinks = [
    {menuName: "Register", href: "/register"},
    {menuName: "Login", href: "/login"},
    {menuName: "Forgot Password", href: "/forgot-password"}
]

const AuthLayout = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname()
    return (
        <>
            {
                navLinks.map((item) => {
                    const isActive = pathname.startsWith(item.href)
                    console.log(pathname, isActive)
                    return (
                        <Link href={item.href} key={item.menuName}
                            className={isActive ? "font-bold mr-4": "text-blue-500 mr-4"}
                        >
                            {item.menuName} | 
                        </Link>
                    )
                })
            }
            { children }
        </>
    )
}

export default AuthLayout;