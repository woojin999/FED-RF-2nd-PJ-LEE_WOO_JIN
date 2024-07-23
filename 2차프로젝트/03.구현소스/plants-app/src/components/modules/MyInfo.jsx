import React, { useContext } from "react";
import { dCon } from "./dCon";

function MyInfo(props) {
  const myCon = useContext(dCon);
  let meminfo = JSON.parse(myCon.loginSts);
  // console.log(meminfo);

  return (
    <div className="myinfo-area">
      <InfoRead meminfo={meminfo} />
      {/* <button>Modify</button> */}
    </div>
  );
}

const InfoRead = ({ meminfo }) => {
  return (
    <>
      <h2>My Information</h2>
      <table className="info-tb">
        <tbody>
          <tr>
            <td>NAME</td>
            <td>{meminfo.uname}</td>
          </tr>
          <tr>
            <td>ID</td>
            <td>{meminfo.uid}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{meminfo.email}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default MyInfo;
