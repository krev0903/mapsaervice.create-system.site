import React from 'react'
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';

export default function Welcome() {
    
    const auth = {
        user: true, // または実際のユーザー情報
      };

    return (
        <>
            <Header />
            <Sidebar auth={auth} />
        </>
    );
}
