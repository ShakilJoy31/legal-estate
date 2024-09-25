"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from 'framer-motion'


const links = [
    { url: "/login", title: "Login" },
    { url: "/profile", title: "Profile" },
    { url: "/contact", title: "Contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgrondColor: "rgb(255,255,255)"
        }
    }
    const centerVariants = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0
        }
    }
    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgrondColor: "rgb(255,255,255)"
        }
    }
    const listVariants = {
        closed: {
            x: "100vw"
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    }
    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0
        },
        opened: {
            x: 0,
            opacity: 1
        }

    }
    return (<div className="h-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 text-xl pt-4">
        <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
            <Link href="/" className="text-sm bg-white rounded-md font-semibold flex items-center justify-around" >
                <span className="flex justify-center w-full text-black">Legal</span>
                <span className="w-12 h-8 rounded bg-black text-white flex items-center justify-center border border-white">Estate</span>
            </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 w-1/3">
            {
                links.map((link, index) => {
                    return (
                        <div key={index} className={`${link.url === pathname ? "bg-black text-white rounded-md px-4 py-1" : ""}`}>
                            <Link href={link.url}>
                                {link.title}
                            </Link>
                        </div>
                    )
                })
            }
        </div>

        <div className="md:hidden lg:hidden sm:hidden flex">
            <button onClick={() => setOpen(!open)} className="w-10 h-8 flex flex-col justify-between z-50 relative">
                <motion.div animate={open ? "opened" : "closed"} variants={topVariants} className="w-10 h-1 bg-white rounde origin-left"></motion.div>
                <motion.div animate={open ? "opened" : "closed"} variants={centerVariants} className="w-10 h-1 bg-white rounded"></motion.div>
                <motion.div animate={open ? "opened" : "closed"} variants={bottomVariants} className="w-10 h-1 bg-white rounded origin-left"></motion.div>
            </button>

            {
                open && (
                    <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
                        {
                            links.map((link, index) => {
                                return (
                                    <motion.div key={index} variants={listItemVariants}>
                                        <Link href={link.url} key={index}>
                                            {link.title}
                                        </Link>
                                    </motion.div>
                                )
                            })
                        }
                    </motion.div>
                )
            }

        </div>

    </div>)
}

export default Navbar;





// <div className="flex justify-between items-center">
//             <div className="flex gap-x-3">
//                 <TheButton>Home</TheButton>
//                 <TheButton>About</TheButton>
//                 <TheButton>Projects</TheButton>
//                 <TheButton>Blogs</TheButton>
//             </div>

//             <div>
//                 <p>Paragraph</p>
//             </div>

//             <div>
//                 <p>The icons</p>
//             </div>
//         </div>