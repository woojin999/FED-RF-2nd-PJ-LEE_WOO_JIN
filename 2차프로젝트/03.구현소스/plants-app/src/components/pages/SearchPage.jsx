import React from 'react';
import Searching from '../modules/Searching';
import { useLocation } from 'react-router-dom';

function SearchPage(props) {

    const loc = useLocation();

    let keyword = loc.state.keyword;
    // console.log("검색어" , keyword);

    return (
      <>
        <Searching kword={keyword} />
      </>
    );
}

export default SearchPage;