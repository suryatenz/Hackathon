import React from 'react'
import logo from './logo.jpg'
// /import logo1 from './logo3.jpg'
// import logo2 from './logo1.png'

const Content = () => {
    return (
        <>
            <div className="flex flex-col flex-wrap mt-8 mx-8">
                <div className=" flex flex-row flex-wrap w-full h-52 p-4 mb-3">
                    <a href="/profile">
                        <img src={logo} alt="Image" className=" mix-blend-darken w-32 h-44 ml-4 " />
                    </a>
                    <div className=' flex flex-col flex-wrap ml-12 text-[#e09744]'>
                        <div className=" text-2xl mb-5">
                            <p>Edease</p>
                        </div>
                        <div className=" flex  flex-wrap text-xl">
                            <p>Edease is a one stop solution for all students who wants to excell in their academics and build an outstanding career with <br /> marvellous mentorships and fabulous financial support.</p>
                        </div>
                        <div className=""></div>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap w-full h-52 p-4 mb-3">
                    <a href="/profile">
                        <img src={logo} alt="Image" className=" mix-blend-darken w-32 h-44 ml-4 mr-10" />
                    </a>
                    <div className=' flex flex-col text-[#e09744]'>
                        <div className=" text-2xl">
                            <p>Student</p>
                        </div>
                        <div className=" text-xl">
                            <p>Login as a student to access the course contents, learn new experiences, get college reviews and  <br />course reviews even create new courses to earn small amount of money</p>
                        </div>
                        <div className="">
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap w-full h-52 p-4 mb-3">
                    <a href="/profile">
                        <img src={logo} alt="Image" className="mix-blend-darken w-32 h-44 ml-4 mr-10" />
                    </a>
                    <div className=' flex flex-col text-[#e09744]'>
                        <div className=" text-2xl">
                            <p>TUTOR</p>
                        </div>
                        <div className=" text-xl">
                            <p>Login as a tutor to create content for free as well as paid and help students get top notch courses which helps them to excel. <br />Share tips and tricks to students via post feed which helps students in learning in new experiences</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap w-full h-52 p-4 mb-3">
                    <a href="/profile">
                        <img src={logo} alt="Image" className="mix-blend-darken w-32 h-44 ml-4 mr-10" />
                    </a>
                    <div className=' flex flex-col text-[#e09744]'>
                        <div className=" text-2xl">
                            <p>FINANCIAL SUPPORTER</p>
                        </div>
                        <div className=" text-xl">
                            <p>Be a helper and help students get financial aid and continue their education and pave their career towards success</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content
