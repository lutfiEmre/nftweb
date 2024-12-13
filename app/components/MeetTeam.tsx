import React from 'react';
// Update the import path
import ProfileCard from "./ProfileCard";

const MeetTeam = () => {
    return (
        <div id={"team"} className={'flex flex-col mb-[150px] mt-[128px]'}>
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
                    Meet the visionary minds behind Activate Earth—a dynamic team dedicated to transforming everyday habits into exciting, rewarding adventures!
                </p>
            </div>
            <ProfileCard/>
        </div>
    );
};

export default MeetTeam;
