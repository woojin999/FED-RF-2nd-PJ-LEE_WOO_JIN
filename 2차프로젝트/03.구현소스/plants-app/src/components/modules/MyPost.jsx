import React, { Fragment, useContext, useRef, useState } from "react";

import { dCon } from "./dCon";
import { Link, useNavigate } from "react-router-dom";

function MyPost(props) {
  const myCon = useContext(dCon);
  let meminfo = JSON.parse(myCon.loginSts);

  const goBdNav = useNavigate();

  // console.log(meminfo.uid);

  const baseData = JSON.parse(localStorage.getItem("board-data"));
  const [pageNum, setPageNum] = useState(1);
  // console.log(baseData);
  let memCartCount = 0;
  baseData.map((v) => {
    if (v.uid == meminfo.uid) {
      memCartCount++;
    }
  });
  // console.log(memCartCount);
  const totalCount = useRef(memCartCount);
  const selRecord = useRef(null);
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
    const myData = [];
    const selData = [];

    orgData.map((v) => {
      if (v.uid == meminfo.uid) {
        myData.push(v);
      }
    });

    // for문으로 배열 만들기
    for (let i = sNum; i < eNum; i++) {
      // 끝번호가 전체 갯수보다 크면 나가
      if (i >= totalCount.current) break;
      // 대상 배열값 추가
      selData.push(myData[i]);
    } /// for ///

    // console.log(selData);
    let pgCnt = 0;
    return selData.map((v, i) => (
      // v.uid == meminfo.uid &&
      <tr key={i}>
        {/* 시작번호를 더하여 페이지별 순번을 변경 */}
        <td>{i + sNum + 1}</td>
        <td>
          {/* <Link
                to="/board"
                onClick={(e) => {
                  // e.preventDefault();
                  // 읽기 모드로 변경
                  // setMode("R");
                  // 해당 데이터 저장하기
                  selRecord.current = v;
                }}
              >
                {v.tit}
              </Link> */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // 읽기 모드로 변경
              // setMode("R");
              // 해당 데이터 저장하기
              // selRecord.current = v;
              goBdNav("/board", { state: { mode: "R", selRcd: v } });
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
  };

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
  };
  return (
    // selData.map((v, i) => <div>dd</div>) &&
    <div>
      <h2>My Post</h2>
      <div className="board-area mybd">
        <div className="board-list">
          <table className="mylist-table">
            <thead>
              <tr>
                <th>No</th>
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
      </div>
    </div>
  );
}

export default MyPost;
