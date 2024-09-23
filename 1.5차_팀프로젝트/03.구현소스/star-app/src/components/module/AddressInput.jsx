import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const AddressInput = ({ changeAddr }) => {
    // changeAddr - 회원가입 양식 체크 전달함수 

    // 상태관리변수
    // [1] 우편번호  
   const [zonecode, setZonecode] = useState("");
   // [2] 주소
   const [address, setAddress] = useState("");
   // [3] 주소찾기 창 보이기 여부
   const [isOpen, setIsOpen] = useState(false);

   // 스타일객체 //////
   // [1] 다음주소창 테마 디자인 객체  (속성은 다음 API)
   // https://postcode.map.daum.net/guide#themeWizard
   const themeObj = {
      bgColor: "#01023D", //바탕 배경색
      searchBgColor: "#FFE400", //검색창 배경색
      contentBgColor: "#FAFAFA", //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
      pageBgColor: "#FAFAFA", //페이지 배경색
      //textColor: "", //기본 글자색
      //queryTextColor: "", //검색창 글자색
      postcodeTextColor: "#050FCC", //우편번호 글자색
      //emphTextColor: "", //강조 글자색
      outlineColor: "#E7E7E7" //테두리
   };

   // [2] 검색창 크기설정 객체
   const postCodeStyle = {
      width: "40vw",
      height: "60vh",
   };
   // [3] 전체박스 스타일 객체  
   const wholeBoxStyle = {
      display: "inline-block",
      verticalAlign: "top",
   };
   // [4] 팝업윈도우 스타일객체 
   const popupWindowStyle = {
      position: "fixed",
      top: "50%",
      left: "50%",
      translate: "-50% -50%",
      backgroundColor: "white",
      padding: "20px",
      border: "4px double #000",
      zIndex: "1",
   };

   // [5] 닫기버튼 스타일 
   const closeButtonStyle = {
      position: "absolute",
      top: "0",
      right: "0",
      fontSize: "40px",
      backgroundColor: "transparent",
      border: "none",
   };

   // 기능처리함수 ////////////////////////
   // [1] 주소선택 완료시처리 함수
   const completeHandler = (data) => {
      const { address, zonecode } = data;
      setZonecode(zonecode);
      setAddress(address);
   };
   // [2] 주소창 닫기처리 함수
   const closeHandler = (state) => {
      // 강제닫기
      if (state === "FORCE_CLOSE") {
         setIsOpen(false);
      // 선택완료시 닫기
      } else if (state === "COMPLETE_CLOSE") {
         setIsOpen(false);
      }
   };
   // [3] 주소창 열기/닫기 토글기능 함수 
   const toggleHandler = () => {
      setIsOpen((prevOpenState) => !prevOpenState);
   };

   // 랜더링 구역 : 매번 ////////////
   useEffect(() => {
      // 주소값과 우편번호 값을 갱신하는 함수호출 
      changeAddr(); // -> 내가생성한 함수를 프롭스 다운!
   }); ////// useEffect //////////

   // 코드리턴구역 //////////////////////
   return (
      <div style={wholeBoxStyle}>
         <div>
            <div style={{ paddingLeft: "20px", lineHeight: "2" }}>
               <button type="button" onClick={toggleHandler}>
                  Search Address
               </button>
               {/* 우편번호 표시박스 */}
               <div>
                  ZipCode :
                  <input
                     className="zipcode"
                     value={zonecode}
                     readOnly
                     onClick={toggleHandler}
                     placeholder="Click 'Search Address'"
                  />
               </div>
            </div>
            {isOpen && (
               <div style={popupWindowStyle}>
                  <DaumPostcode
                     theme={themeObj}
                     style={postCodeStyle}
                     onComplete={completeHandler}
                     onClose={closeHandler}
                  />
                  <button style={closeButtonStyle} onClick={toggleHandler}>
                     ×
                  </button>
               </div>
            )}
            {/* 주소 자동완성 앞부분  */}
            <input
               className="addr1"
               value={address}
               readOnly
               onClick={toggleHandler}
               style={{ width: "100%" }}
               placeholder="Click 'Search Address'"
            />
            {/* 주소 직접작성 뒷부분(상세주소) */}
            <input
               className="addr2"
               placeholder="input detail adress"
               style={{ width: "100%" }}
               onChange={changeAddr}
               onBlur={changeAddr}
            />
         </div>
      </div>
   );
};

export default AddressInput;
