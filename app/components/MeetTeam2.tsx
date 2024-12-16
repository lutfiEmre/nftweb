import React from 'react';
import Image from 'next/image';
import ProfileCard from "@/app/components/ProfileCard";

// Array of team members (using the same data as you provided)
const teamMembers = [
    {
        img: { src: "/kemal.svg", width: 290, height: 116, alt: "Kemal" },
        name: "Kemal Konuklar",
        jobTitle: "Founder & Team Lead",
    },
    {
        img: { src: "/rifat.svg", width: 290, height: 116, alt: "Rıfat" },
        name: "Rıfat Sezgin",
        jobTitle: "Project Manager",
    },
    {
        img: { src: "/sinan.svg", width: 290, height: 116, alt: "Sinan" },
        name: "Sinan Artun",
        jobTitle: "Lead Developer",
    },
    {
        img: { src: "/emre.svg", width: 290, height: 116, alt: "Emre" },
        name: "Emre Lutfi",
        jobTitle: "Senior Developer",
    },
    {
        img: { src: "/deniz.svg", width: 290, height: 116, alt: "Deniz" },
        name: "Deniz Bugatov",
        jobTitle: "Data Scientist",
    },
    {
        img: { src: "/oktay.svg", width: 290, height: 116, alt: "Oktay" },
        name: "Oktay Çavuşoğlu",
        jobTitle: "Marketing Lead",
    },
    {
        img: { src: "/svetlena.svg", width: 290, height: 116, alt: "Svetlana" },
        name: "Svetlana Ryzhova",
        jobTitle: "Community Management",
    },
    {
        img: { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKw1aBDR4wCURivhIBuUE8jm4NQe0zLiDY4g&s", width: 290, height: 116, alt: "Sude" },
        name: "Sude Akarsu",
        jobTitle: "Online Communications Director",
    },
    {
        img: { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKw1aBDR4wCURivhIBuUE8jm4NQe0zLiDY4g&s", width: 290, height: 116, alt: "Doğuş" },
        name: "Doğuş Coşkun",
        jobTitle: "Financial Analyst",
    },
    {
        img: { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKw1aBDR4wCURivhIBuUE8jm4NQe0zLiDY4g&s", width: 290, height: 116, alt: "Güney" },
        name: "Güney Gürışık",
        jobTitle: "Financial Management",
    },
    {
        img: { src: "/eren.svg", width: 290, height: 116, alt: "Eren" },
        name: "Eren Erdem",
        jobTitle: "Legal Advisor",
    },
    {
        img: { src: "/buke.svg", width: 290, height: 116, alt: "Büke" },
        name: "Büke Özer",
        jobTitle: "Art Director",
    },
    {
        img: { src: "/betul.svg", width: 290, height: 116, alt: "Betül" },
        name: "Betül Tuğran",
        jobTitle: "Marketing Specialist",
    },
];

const MeetTeam2 = () => {
    return (
        <div id={"team"} className={'flex flex-col mb-[50px] mt-[88px]'}>
            <div className={'flex flex-col gap-[16px]'}>
                <div className={'flex flex-col justify-center text-center items-center'}>
                    <h4 className={'jost-bold text-[48px] text-white'}>
                        Meet The

                        <span className={'text-[#FF00CC] ml-3'}>
                     Team
                    </span>
                    </h4>
                </div>
                <p className={'rubik-regular text-center text-white text-opacity-80 text-[20px]'}>
                    Meet the visionary minds behind Activate Earth—a dynamic team dedicated to transforming everyday
                    habits into exciting, rewarding adventures!
                </p>
            </div>
            <div className={'flex flex-col my-[100px] justify-center gap-[30px] items-center'}>
                <div className={'hidden  2xl:flex gap-[90px] flex-col w-full justify-center items-center'}>
                    <div
                        className={'grid w-fit lg:grid-cols-5 grid-cols-2 justify-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-7 gap-8'}>
                        {teamMembers.slice(0, 7).map((member, index) => (
                            <div key={index} className={'flex flex-col items-center w-fit gap-[10px]'}>
                                <div className={'w-[180px] h-[180px] rounded-[11.75px]'}>
                                    <Image className={'w-full overflow-hidden rounded-[11px] h-full object-cover'}
                                           src={member.img.src} width={150}
                                           height={150} alt={member.img.alt}/>
                                </div>
                                <h4 className={'poppinssemibold h-[55px] tracking-wider mt-[7px] leading-7 w-full text-center text-[26.45px] text-white'}>
                                    {member.name}
                                </h4>
                                <h6 className={'poppinssemibold tracking-wider leading-7 w-full text-center text-[17px] text-[#0D6DFA]'}>
                                    {member.jobTitle}
                                </h6>
                            </div>
                        ))}

                    </div>
                    <div
                        className={'grid justify-items-center w-fit lg:grid-cols-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-6 gap-8'}>
                        {teamMembers.slice(7).map((member, index) => (
                            <div key={index} className={'flex flex-col items-center w-fit gap-[10px]'}>
                                <div className={'w-[180px] h-[180px] rounded-[11.75px]'}>
                                    <Image className={'w-full overflow-hidden rounded-[11px] h-full object-cover'}
                                           src={member.img.src} width={150}
                                           height={150} alt={member.img.alt}/>
                                </div>
                                <h4 className={'poppinssemibold h-[55px] tracking-wider mt-[7px] leading-7 w-full text-center text-[26.45px] text-white'}>
                                    {member.name}
                                </h4>
                                <h6 className={'poppinssemibold max-w-[300px] tracking-wider leading-7 w-full text-center text-[17px] text-[#0D6DFA]'}>
                                    {member.jobTitle}
                                </h6>
                            </div>
                        ))}

                    </div>
                </div>
                <div
                    className={'2xl:hidden grid lg:grid-cols-5 grid-cols-2 justify-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-7 gap-8'}>
                    {teamMembers.slice(0).map((member, index) => (
                        <div key={index} className={'flex flex-col items-center w-fit gap-[10px]'}>
                            <div className={'w-[180px] h-[180px] rounded-[11px]'}>
                                <Image className={'w-full rounded-[11px] h-full object-cover'} src={member.img.src}
                                       width={150}
                                       height={150} alt={member.img.alt}/>
                            </div>
                            <h4 className={'poppinssemibold h-[55px] tracking-wider mt-[7px] leading-7 w-full text-center text-[26.45px] text-white'}>
                                {member.name}
                            </h4>
                            <h6 className={'poppinssemibold tracking-wider leading-7 w-full text-center text-[17px] text-[#0D6DFA]'}>
                                {member.jobTitle}
                            </h6>
                        </div>
                    ))}
                </div>

                {/* Second row with 6 items, centered */}

            </div>

        </div>
    );
};

export default MeetTeam2;
