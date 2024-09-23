// 하단영역 컴포넌트 ///

// 하단메뉴 데이터 불러오기
import { htmlData } from "../../data/id_com_data";
// 하단영역 CSS 불러오기
import "../../css/common/footer_area.scss";

///////////////////////////////////////////////
/* 
dangerouslySetInnerHTML를 사용하여 HTML을 삽입할 때는 리액트 문법과 맞지 않는 HTML 속성들을 수정할 필요가 없다. dangerouslySetInnerHTML는 리액트가 해당 HTML을 문자열로 그대로 처리하므로, 리액트의 문법 검사를 피할 수 있다 
 */
export const FooterArea = () => {
  //// 코드 리턴구역 //////////////
  return(  
  <header id="footer-area" dangerouslySetInnerHTML={{ __html: htmlData.footerArea }} />
);
}; /////////// FooterArea /////////////////////
