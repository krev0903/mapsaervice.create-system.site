import React from 'react'
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
export default function Welcome({ auth }) {

    return (
        <>
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
            <Header />
            <Sidebar />
            </div>
        </>
    );
}
