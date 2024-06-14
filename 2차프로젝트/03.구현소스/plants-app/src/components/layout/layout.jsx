// 전체 레이아웃 컴포넌트 //

import { useLayoutEffect } from "react";
import FooterArea from "./FooterArea";
import MainArea from "./MainArea";
import TopArea from "./TopArea";

export default function Layout(){
    
    useLayoutEffect(()=>{
        window.scrollTo(0, 0);
    });
    // 
    return(
        <>
            {/* 상단영역 */}
            <TopArea/>
            {/* 메인영역 */}
            <MainArea/>
            {/* 하단영역 */}
            <FooterArea/>
        </>
    );
} ///////Layout ////