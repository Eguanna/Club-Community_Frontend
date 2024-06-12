import Header from "@/app/ui/Header";
import { Navbar } from "@nextui-org/react";

export default function Home() {
    // DB에서는 useEffect, useState, axios 등등을 쓰지 않고 가져온다?
    
    return (
    <div className="min-w-96 w-5/6 grid place-items-center"> MainPage
        {/* <div className="Header">Header</div> */}
        <Header/>
        <Navbar />
        <main>
          <div className="ServiceMain" > ServiceMain</div>
        </main>
    </div>
    );
}