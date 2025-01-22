import React from 'react'
import CommunityCard from './CommunityCard'

const Community = () => {
    return (
        <>
            <div className='max-w-full p-6 my-8 md:p-11'>
                <h1 className='text-3xl font-bold text-center sm:text-4xl md:text-5xl'>
                    Explore Communities
                </h1>
                <div className="flex gap-4 mt-8 overflow-x-auto scrollbar-hide sm:flex-wrap sm:justify-center">
                    <CommunityCard desc="" name="BLOCKCHAIN" />
                    <CommunityCard desc="" name="Machine Learning" />
                    <CommunityCard desc="" name="Artificial Learning" />
                    <CommunityCard desc="" name="Artificial Intelligence" />
                    <CommunityCard desc="" name="Data Science" />
                    <CommunityCard desc="" name="Cyber Security" />
                    <CommunityCard desc="" name="Cloud Computing" />
                </div>
            </div>
        </>
    )
}

export default Community;
