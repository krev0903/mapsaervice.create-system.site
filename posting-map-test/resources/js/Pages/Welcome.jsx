import React from 'react'
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';

export default function Welcome({ auth }) {

    return (
        <>
            <Header />
            <Sidebar />
        </>
    );
}
