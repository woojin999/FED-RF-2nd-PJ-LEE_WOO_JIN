import { Outlet } from "react-router-dom";

export default function MainArea() {
    

    return(
        <main className="cont main-area">
            <Outlet/>
        </main>
    );
}