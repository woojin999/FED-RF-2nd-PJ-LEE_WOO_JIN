import React, { Fragment, useContext, useRef, useState } from "react";

import { initBoardData } from "../func/board_fn";
import { dCon } from "../modules/dCon";
import $ from "jquery";

import "../../css/board.scss";
import { useLocation } from "react-router-dom";

function Board(props) {
  const myCon = useContext(dCon);

  const sts = myCon.loginSts;

  initBoardData();

  const baseData = JSON.parse(localStorage.getItem("board-data"));
  const [pageNum, setPageNum] = useState(1);
  // [2] 기능모드
  const [mode, setMode] = useState("L");

  // 참조변수 //
  // [1] 전체 개수 - 매번 계산하지 않도록 참조변수로
  const totalCount = useRef(baseData.length);
  // [2] 선택 데이터 저장
  const selRecord = useRef(null);
  // -> 특정 리스트 글 제목 클릭시 데이터 저장함

  const loc = useLocation();

  // const myNavFn = () =>{
  // let mymode = loc.state.mode;
  // let selRcd = loc.state.selRcd;
  // console.log(mymode);
  // console.log(selRcd);
  // setMode(mymode);
  // }
  // setMode(mode);

  // 페이지당 개수
  const unitSize = 10;

  const bindList = () => {
    // console.log(baseData);

    // 1. 전체 원본 데이터 선택
    let orgData = baseData;

    // 2. 정렬 적용하기 : 내림차순
    orgData.sort((a, b) =>
      Number(a.idx) > Number(b.idx) ? -1 : Number(a.idx) < Number(b.idx) ? 1 : 0
    );

    // 시작번호 = (페이지번호-1) * 단위 수
    let sNum = (pageNum - 1) * unitSize;
    // 끝번호 = (페이지번호-1) * 단위 수
    let eNum = pageNum * unitSize;
    // 결과배열
    const selData = [];

    // for문으로 배열 만들기
    for (let i = sNum; i < eNum; i++) {
      // 끝번호가 전체 갯수보다 크면 나가
      if (i >= totalCount.current) break;
      // 대상 배열값 추가
      selData.push(orgData[i]);
    } /// for ///
    // console.log(selData);

    return selData.map((v, i) => (
      <tr key={i}>
        {/* 시작번호를 더하여 페이지별 순번을 변경 */}
        <td>{i + sNum + 1}</td>
        <td>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // 읽기 모드로 변경
              setMode("R");
              // 해당 데이터 저장하기
              selRecord.current = v;
            }}
          >
            {v.tit}
          </a>
        </td>
        <td>{v.unm}</td>
        <td>{v.date}</td>
        <td>{v.cnt}</td>
      </tr>
    ));
  }; // bindlist

  const pagingList = () => {
    // 페이징 개수
    let pagingCount = Math.floor(totalCount.current / unitSize);

    // 나머지 개수
    if (totalCount.current % unitSize > 0) {
      pagingCount++;
    }

    let pgCode = [];
    for (let i = 1; i <= pagingCount; i++) {
      pgCode.push(
        <Fragment key={i}>
          {i == pageNum ? (
            <b style={{ fontWeight: "900" }}>{i}</b>
          ) : (
            // 불일치시 링크코드
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPageNum(i);
              }}
            >
              {i}
            </a>
          )}
          {i !== pagingCount && " | "}
        </Fragment>
      );
    } /// for
    return pgCode;
  }; //paging

  const clickButton = (e) => {
    let btnText = e.target.innerText;
    switch (btnText) {
      case "Write":
        setMode("W");
        break;
      case "List":
        setMode("L");
        break;
      case "Submit":
        submitFn();
        break;
      case "Modify":
        setMode("M");
        break;
      case "Delete":
        deleteFn();
        break;
      default:
        break;
    }
  };

  const submitFn = () => {
    let title = $(".write-title").val().trim();

    let cont = $(".write-cont").val().trim();

    if (title == "") {
      alert("Insert title");
      return;
    } else if (cont == "") {
      alert("Insert cont");
      return;
    }

    if (mode == "W") {
      let today = new Date();

      let arrIdx = baseData.map((v) => parseInt(v.idx));

      let maxNum = Math.max(...arrIdx);

      let data = {
        idx: maxNum + 1,
        tit: title,
        cont: cont,
        att: "",
        date: today.toJSON().substr(0, 10),
        uid: JSON.parse(sts).uid,
        unm: JSON.parse(sts).uname,
        cnt: "0",
      };
      console.log(data);

      let locals = localStorage.getItem("board-data");
      locals = JSON.parse(locals);
      locals.push(data);
      localStorage.setItem("board-data", JSON.stringify(locals));

      totalCount.current = baseData.length;

      setMode("L");
    } else if (mode == "M") {
      let today = new Date();
      // 현재 데이터 idx값
      let currIdx = selRecord.current.idx;

      baseData.find((v) => {
        // console.log(v,selRecord);
        if (v.idx == currIdx) {
          // [ 업데이트 작업하기 ]
          // 기존항목변경 : tit, cont
          // 이미 선택된 selRecord 참조변수의 글번호인 idx로
          // 원본 데이터를 조회하여 기존 데이터를 업데이트함!

          // (1) 글제목 : tit
          v.tit = title;
          // (2) 글내용 : cont
          v.cont = cont;
          // 추가항목
          // (원래는 확정된 DB스키마에 따라 입력해야하지만
          // 우리가 사용하는 로컬스토리지의 확장성에 따라 필요한
          // 항목을 추가하여 넣는다!)
          // (3) 수정일 : mdate
          v.mdate = today.toJSON().substr(0, 10);

          // 해당항목을 만나면 끝남!
          return true;
        } /// if ///
      }); /////// find 메서드 /////////
      localStorage.setItem("board-data", JSON.stringify(baseData));
      setMode("L");
    }
  }; //submitFn

  const deleteFn = () => {
    // 삭제여부확인
    if (window.confirm("Are you sure you want to delete?")) {
      // 1. 해당항목 idx담기
      let currIdx = selRecord.current.idx;
      // 2. some()로 순회하여 해당항목 삭제하기
      // find()와 달리 some()은 결과값을 boolean값으로
      // 리턴하여 처리한다! 이것을 이용하여 코드처리해보자!
      baseData.some((v, i) => {
        if (v.idx == currIdx) {
          // 해당순번 배열값을 삭제하자!
          // 배열삭제는  splice(순번,1)
          baseData.splice(i, 1);

          // 리턴true할 경우 종료!
          return true;
        } ///// if ////
      }); ///// some ///////

      // 3. 로컬스에 업데이트하기 //////
      localStorage.setItem("board-data", JSON.stringify(baseData));

      // 4. 삭제후 리스트 리랜더링시 리스트 불일치로 인한
      // 에러를 방지하기 위하여 전체 개수를 바로 업데이트한다!
      totalCount.current = baseData.length;

      // 4. 리스트로 돌아가기 -> 리랜더링 /////
      // -> 모드변경! "L"
      setMode("L");
      // -> 삭제후 첫페이지로 이동!
      setPageNum(1);
    } ///////// if ///////////////
  }; //////// deleteFn ///////////////

  // 코드 리턴
  return (
    <div className="board-area">
      <h2>Question</h2>
      {mode == "L" && <ListMode bindList={bindList} pagingList={pagingList} />}
      {mode == "W" && <WriteMode sts={JSON.parse(sts)} />}
      {mode == "R" && <ReadMode selRecord={selRecord} />}
      {mode == "M" && <ModifyMode selRecord={selRecord} />}
      <table className="boardBtn">
        <tbody>
          <tr>
            <td>
              {mode == "L" && sts && (
                <button onClick={clickButton}>Write</button>
              )}
              {mode == "W" && (
                <>
                  <button onClick={clickButton}>List</button>
                  <button onClick={clickButton}>Submit</button>
                </>
              )}
              <>
                {mode == "R" &&
                  sts &&
                  JSON.parse(sts).uid == selRecord.current.uid && (
                    <>
                      <button onClick={clickButton}>Modify</button>
                      <button onClick={clickButton}>Delete</button>
                    </>
                  )}
                {mode == "R" && <button onClick={clickButton}>List</button>}
              </>

              {mode == "M" && (
                <>
                  <button onClick={clickButton}>Submit</button>
                  <button onClick={clickButton}>List</button>
                </>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
const ListMode = ({ bindList, pagingList }) => {
  return (
    <div className="board-list">
      <table className="list-table">
        <colgroup>
          <col span="1" style={{ width: "1%" }} />
          <col span="1" style={{ width: "40%" }} />
          <col span="1" style={{ width: "20%" }} />
          <col span="1" style={{ width: "20%" }} />
          <col span="1" style={{ width: "20%" }} />
        </colgroup>
        <thead>
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Date</th>
            <th>Hits</th>
          </tr>
        </thead>
        <tbody>{bindList()}</tbody>
        <tfoot>
          <tr>
            <td className="paging-td">{pagingList()}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const WriteMode = ({ sts }) => {
  return (
    <table className="other-table">
      <tbody>
        <tr>
          <td>Name</td>
          <td>
            <input type="text" defaultValue={sts.uname} readOnly />
          </td>
        </tr>
        <tr>
          <td>Email</td>
          <td>
            <input type="text" defaultValue={sts.email} readOnly />
          </td>
        </tr>
        <tr>
          <td>Title</td>
          <td>
            <input type="text" className="write-title" />
          </td>
        </tr>
        <tr>
          <td>Content</td>
          <td>
            <textarea
              className="write-cont"
              cols="60"
              maxLength="300"
              rows="10"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td>Attachment</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

const ReadMode = ({ selRecord }) => {
  const data = selRecord.current;
  return (
    <>
      <table className="other-table">
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input type="text" defaultValue={data.unm} readOnly />
            </td>
          </tr>
          <tr>
            <td>Title</td>
            <td>
              <input
                type="text"
                className="write-title"
                defaultValue={data.tit}
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td>Content</td>
            <td>
              <textarea
                className="write-cont"
                cols="60"
                maxLength="300"
                rows="10"
                defaultValue={data.cont}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>Attachment</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const ModifyMode = ({ selRecord }) => {
  const data = selRecord.current;
  return (
    <table className="other-table">
      <tbody>
        <tr>
          <td>Name</td>
          <td>
            <input type="text" defaultValue={data.unm} readOnly />
          </td>
        </tr>
        <tr>
          <td>Title</td>
          <td>
            <input
              type="text"
              className="write-title"
              defaultValue={data.tit}
            />
          </td>
        </tr>
        <tr>
          <td>Content</td>
          <td>
            <textarea
              className="write-cont"
              cols="60"
              maxLength="300"
              rows="10"
              defaultValue={data.cont}
            ></textarea>
          </td>
        </tr>
        <tr>
          <td>Attachment</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Board;
