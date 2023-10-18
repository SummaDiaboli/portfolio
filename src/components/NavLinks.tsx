import React, { useState, type LinkHTMLAttributes, useEffect } from "react"

const NavLinks = () => {
    const navLinks = [
        { name: "About", link: "#about" },
        { name: "Experience", link: "#experience" },
    ]

    const [activeAnchor, setActiveAnchor] = useState("about")

    const changeActiveAnchor = (el: HTMLAnchorElement) => {
        setActiveAnchor(el.hash)
    }

    const updateAnchor = () => {
        setActiveAnchor(location.hash)
    }

    useEffect(() => {
        console.log(activeAnchor)
        // console.log(document.URL.split("#")[1])
        setActiveAnchor(
            document.URL.split("#").length > 1
                ? `#${document.URL.split("#")[1]}`
                : "#about"
        )
    }, [])

    return (
        <div>
            <ul className="flex flex-col space-y-3">
                {navLinks.map((nav, index) => (
                    <a
                        key={`nav${index}`}
                        href={nav.link}
                        className={`flex max-w-fit flex-row items-center gap-x-2 group ${
                            nav.link === activeAnchor
                                ? "text-slate-200"
                                : "text-slate-500"
                        }`}
                        onClick={(e) => changeActiveAnchor(e.currentTarget)}
                    >
                        <div
                            className={`group-hover:w-14 group-hover:bg-slate-200 transition-all ${
                                nav.link === activeAnchor
                                    ? "w-14 h-[0.08rem] bg-slate-200"
                                    : "w-7 h-[0.08rem] bg-slate-500"
                            }`}
                        />

                        <p className="uppercase text-xs leading-tight tracking-widest font-bold group-hover:text-slate-200">
                            {nav.name}
                        </p>
                    </a>
                ))}
            </ul>
        </div>
    )
}

export default NavLinks
