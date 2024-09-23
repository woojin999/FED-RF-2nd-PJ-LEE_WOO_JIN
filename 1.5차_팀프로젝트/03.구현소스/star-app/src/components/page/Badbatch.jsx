///스타워즈PJ - 서브페이지 Badbatch
import React, { Fragment } from 'react';
//css
import "../../css/sub_badbatch.scss";
import "../../css/sub_badbatch_media.scss";

//module
import BbTopBanner from '../module/BbTopBanner';
import SubBtBanner from '../module/SubBtBanner';
import BbInfoArea from '../module/BbInfoArea';
import BbEpArea from '../module/BbEpArea';
import BbPosterArea from '../module/BbPosterArea';
/////////////////import area////////////////////////////

function Badbatch() {
    ///////////코드 리턴구역 /////////////////////////////////////
    return (
        <>
            {/* 1. 상단 타이틀 영역 */}
            <BbTopBanner/>
            <main className='badbatch'>

            {/* 2. 서브 컨텐츠: info area */}
            <BbInfoArea/>
            {/* 3. 서브 컨텐츠: episode-area */}
            <BbEpArea/>
            {/* 4. 서브 컨텐츠: sns-area */}

            {/* 5. 서브 컨텐츠: pos-area */}
            <BbPosterArea/>
            {/* 6. 서브 공통모듈: 하단배너 / bt-banner-area */}
            <SubBtBanner/>
            </main>
        </>
    );
}

export default Badbatch;