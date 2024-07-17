import React, { Fragment, useContext, useRef, useState } from "react";

import { initBoardData } from "../func/board_fn";
import { dCon } from "../modules/dCon";
import $ from "jquery";

import "../../css/board.scss";

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
  // console.log("전체 개수", totalCount);
  // [2] 선택 데이터 저장
  const selRecord = useRef(null);
  // -> 특정 리스트 글 제목 클릭시 데이터 저장함

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

    // 3. 일부 데이터만 선택
    // 예시로 0번부터 9번까지만 선택
    // 한페이지당 10개라면
    // 페이지 번호와 연관 시켜본다
    // 1,2,3,4 .....
    // 시작번호 = (페이지번호-1) * 단위 수
    let sNum = (pageNum - 1) * unitSize;
    // 끝번호 = (페이지번호-1) * 단위 수
    let eNum = pageNum * unitSize;
    // console.log("첫번호:", sNum, "/끝번호:", eNum);
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
    }
  }; //submitFn

  // 코드 리턴
  return (
    <div className="board-area">
      <h2>Question</h2>
      {mode == "L" && <ListMode bindList={bindList} pagingList={pagingList} />}
      {mode == "W" && <WriteMode sts={JSON.parse(sts)} />}
      {mode == "R" && <ReadMode selRecord={selRecord}/>}
      <table className="boardBtn">
        <tbody>
          <tr>
            <td>
              {mode == "L" && sts && <button onClick={clickButton}>Write</button>}
              {mode == "W" && (
                <>
                  <button onClick={clickButton}>List</button>
                  <button onClick={clickButton}>Submit</button>
                </>
              )}
              {mode == "R" && <button onClick={clickButton}>List</button>}
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
                defaultValue={data.cont}
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
                value={data.cont}
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

export default Board;
