
'use client'

import Link from "next/link"
import {Poppins} from "next/font/google"

const poppins = Poppins({subsets:['latin'],weight:'900'})

export const Menu = () => {
    
    return (
        <div className="shadow-md absolute z-40 top-6   left-0 right-0 h-auto bg-violet-200/30 p-2  rounded-lg backdrop-blur-md  mx-5 " >
             <nav className="text-violet-600 text-xl w-full flex justify-between items-center flex-row  h-15 mx-5 rounded-lg " >
            <div id="logo" className={`${poppins.className} text-sm  md:text-xl p-1 px-2 bg-violet-300 rounded-md`}>TABLE TENNIS
            </div>
            <ul className="flex flex-row pr-10 " >
                <li className=" d-flex justify-center alight-center  text-sm  w-11 h-11 ml-4  transition-all  bg-violet-300 p-2 shadow-2xl  hover:text-slate-200 hover:bg-violet-600  active:bg-violet-700 rounded-lg text-violet-600"><Link href="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-full">
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
                </Link></li>
                <li className="text-sm  w-11 h-11 ml-4 text-auto transition-allm bg-violet-300 p-2 shadow-2xl  hover:text-slate-200 hover:bg-violet-600 active:bg-violet-700 rounded-lg text-violet-600" ><Link href="/history"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" /></svg>
                </Link></li>
                <li className="text-sm  w-11 h-11 ml-4 text-auto transition-all  bg-violet-300 p-2 shadow-2xl hover:shadow-inner hover:text-slate-200 hover:bg-violet-600 active:bg-violet-700 rounded-lg text-violet-600" ><Link href="/atletas">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg></Link></li>
            </ul>
        </nav>
        </div>
       
    )
}