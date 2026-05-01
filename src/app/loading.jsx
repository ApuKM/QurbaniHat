import React from 'react';
import { ClockLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex justify-center items-center h-[60vh]'>
            <ClockLoader />
        </div>
    );
};

export default loading;