import React from "react";
import Image from "next/image";

const ProfileCard = () => {
    // Veriler burada tanımlanıyor
    const teamMembers = [
        {
            img: { src: "/rifat.svg", width: 290, height: 116, alt: "Rifat" },
            name: "Rıfat Sezgin",
            jobTitle: "Project Manager",
            socialMedia: [
                { platform: "Telegram", icon: "/telegram-icon.svg", link: "https://t.me/username" },
                { platform: "Twitter", icon: "/twitter-icon.svg", link: "https://twitter.com/username" },
                { platform: "Instagram", icon: "/instagram-icon.svg", link: "https://instagram.com/username" }
            ]
        },
        {
            img: { src: "/kemal.svg", width: 290, height: 116, alt: "Kemal" },
            name: "Kemal Konuklar",
            jobTitle: "Founder & Head of Team",
            socialMedia: [
                { platform: "Telegram", icon: "/telegram-icon.svg", link: "https://t.me/username" },
                { platform: "Twitter", icon: "/twitter-icon.svg", link: "https://twitter.com/username" },
                { platform: "Instagram", icon: "/instagram-icon.svg", link: "https://instagram.com/username" }
            ]
        },
        {
            img: { src: "/okta.svg", width: 290, height: 116, alt: "Oktay" },
            name: "Oktay Çavuşoğlu",
            jobTitle: "Marketing Lead",
            socialMedia: [
                { platform: "Telegram", icon: "/telegram-icon.svg", link: "https://t.me/username" },
                { platform: "Twitter", icon: "/twitter-icon.svg", link: "https://twitter.com/username" },
                { platform: "Instagram", icon: "/instagram-icon.svg", link: "https://instagram.com/username" }
            ]
        },
        {
            img: { src: "/sinan.svg", width: 290, height: 116, alt: "Sinan" },
            name: "Sinan Artun",
            jobTitle: "Senior Developer",
            socialMedia: [
                { platform: "Telegram", icon: "/telegram-icon.svg", link: "https://t.me/username" },
                { platform: "Twitter", icon: "/twitter-icon.svg", link: "https://twitter.com/username" },
                { platform: "Instagram", icon: "/instagram-icon.svg", link: "https://instagram.com/username" }
            ]
        },
        {
            img: { src: "/emre.svg", width: 290, height: 116, alt: "EmreLutfi" },
            name: "EmreLutfi",
            jobTitle: "Senior Developer",
            socialMedia: [
                { platform: "Telegram", icon: "/telegram-icon.svg", link: "https://t.me/username" },
                { platform: "Twitter", icon: "/twitter-icon.svg", link: "https://twitter.com/username" },
                { platform: "Instagram", icon: "/instagram-icon.svg", link: "https://instagram.com/username" }
            ]
        }
    ];

    // Render edilen bileşen
    return (
        <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-4 mt-[100px]">
            {teamMembers.map((member, index) => (
                <div key={index} className="w-fit  overflow-hidden rounded-[10px] h-[298px] flex flex-col">
                    <div className="bg-[#350332] w-full rounded-t-[10px] h-[50%]">
                        <Image
                            className="h-full object-cover"
                            src={member.img.src}
                            width={member.img.width}
                            height={member.img.height}
                            alt={member.img.alt}
                        />
                    </div>
                    <div className="bg-[#5F115A] gap-[8px] flex flex-col w-full justify-center items-center rounded-b-[10px] h-[70%]">
                        <h6 className="text-white leading-7 text-center rubik-medium lg:text-[18px] xl:text-[24px]">
                            {member.name}
                        </h6>
                        <h6 className="text-white text-center font-light text-[16px]">
                            {member.jobTitle}
                        </h6>
                        <div className="mt-[12px] flex flex-row gap-[24px]">
                            {member.socialMedia.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[32px] h-[32px] rounded-[4px] flex justify-center items-center cursor-pointer border-[#FF00CC] hover:bg-[#FF00CC] border-[1px]"
                                >
                                    {social.platform === "Telegram" && (
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1_693)">
                                                <path d="M14.959 3.08806L12.847 13.0511C12.687 13.7541 12.272 13.9291 11.681 13.5981L8.46197 11.2261L6.90897 12.7201C6.73697 12.8921 6.59397 13.0351 6.26197 13.0351L6.49397 9.75706L12.459 4.36706C12.719 4.13606 12.403 4.00706 12.056 4.23906L4.68097 8.88306L1.50597 7.88906C0.815973 7.67306 0.802973 7.19806 1.64997 6.86706L14.069 2.08206C14.644 1.86706 15.147 2.20906 14.959 3.08806Z" fill="white"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_693">
                                                    <rect width="16" height="16" fill="white" transform="translate(0 0.00708008)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    )}
                                    {social.platform === "Twitter" && (
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1_700)">
                                                <g clipPath="url(#clip1_1_700)">
                                                    <path d="M9.714 6.94608L15.945 0.54808H14.434L9.078 6.09808L4.879 0.50708L0.1 0.67108L6.414 8.85608L0 15.5021H1.378L7.049 9.68108L11.541 15.5021L16.016 15.3381L9.714 6.94608ZM7.761 8.95008L7.127 8.11908L2.119 1.55508L4.54 1.68608L8.408 6.79208L9.044 7.63308L14.233 14.4861L12.012 14.5191L7.761 8.95008Z" fill="white"/>
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_700">
                                                    <rect width="16" height="15" fill="white" transform="translate(0 0.50708)"/>
                                                </clipPath>
                                                <clipPath id="clip1_1_700">
                                                    <rect width="16" height="15" fill="white" transform="translate(0 0.50708)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    )}
                                    {social.platform === "Instagram" && (
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.20001 1.34033H10.8C12.9333 1.34033 14.6667 3.07367 14.6667 5.207V10.807C14.6667 11.8325 14.2593 12.816 13.5342 13.5411C12.809 14.2663 11.8255 14.6737 10.8 14.6737H5.20001C3.06668 14.6737 1.33334 12.9403 1.33334 10.807V5.207C1.33334 4.1815 1.74072 3.19799 2.46586 2.47285C3.191 1.74771 4.17451 1.34033 5.20001 1.34033ZM5.06668 2.67367C4.43016 2.67367 3.81971 2.92652 3.36962 3.37661C2.91953 3.8267 2.66668 4.43715 2.66668 5.07367V10.9403C2.66668 12.267 3.74001 13.3403 5.06668 13.3403H10.9333C11.5699 13.3403 12.1803 13.0875 12.6304 12.6374C13.0805 12.1873 13.3333 11.5769 13.3333 10.9403V5.07367C13.3333 3.747 12.26 2.67367 10.9333 2.67367H5.06668ZM11.5 3.67367C11.721 3.67367 11.933 3.76146 12.0893 3.91774C12.2455 4.07402 12.3333 4.28598 12.3333 4.507C12.3333 4.72801 12.2455 4.93997 12.0893 5.09625C11.933 5.25253 11.721 5.34033 11.5 5.34033C11.279 5.34033 11.067 5.25253 10.9108 5.09625C10.7545 4.93997 10.6667 4.72801 10.6667 4.507C10.6667 4.28598 10.7545 4.07402 10.9108 3.91774C11.067 3.76146 11.279 3.67367 11.5 3.67367ZM8.00001 4.67367C8.88407 4.67367 9.73191 5.02485 10.357 5.64998C10.9822 6.2751 11.3333 7.12294 11.3333 8.007C11.3333 8.89105 10.9822 9.7389 10.357 10.364C9.73191 10.9891 8.88407 11.3403 8.00001 11.3403C7.11596 11.3403 6.26811 10.9891 5.64299 10.364C5.01787 9.7389 4.66668 8.89105 4.66668 8.007C4.66668 7.12294 5.01787 6.2751 5.64299 5.64998C6.26811 5.02485 7.11596 4.67367 8.00001 4.67367ZM8.00001 6.007C7.46958 6.007 6.96087 6.21771 6.5858 6.59278C6.21072 6.96786 6.00001 7.47657 6.00001 8.007C6.00001 8.53743 6.21072 9.04614 6.5858 9.42121C6.96087 9.79629 7.46958 10.007 8.00001 10.007C8.53044 10.007 9.03915 9.79629 9.41422 9.42121C9.7893 9.04614 10 8.53743 10 8.007C10 7.47657 9.7893 6.96786 9.41422 6.59278C9.03915 6.21771 8.53044 6.007 8.00001 6.007Z" fill="white" fillOpacity="0.8"/>
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                ))
            }
        </div>


    );
};

export default ProfileCard;
