function scrollFn() {
  // console.log("휠");
  const page = document.querySelectorAll(".page");
  const mpage = document.querySelectorAll(".mpage");
  // console.log(page);

  const screenH = (window.innerHeight / 5) * 4;

  const pagePos = [];
  page.forEach((e, i) => {
    pagePos[i] = e.offsetTop;
  });
  // console.log(pagePos);

  page.forEach((e, i) => {
    let pos = e.getBoundingClientRect().top;

    if (pos < screenH) {
      page[i].classList.add("on");
    }
  });

  const mpagePos = [];
  mpage.forEach((e, i) => {
    mpagePos[i] = e.offsetTop;
  });
  // console.log(mpagePos);

  mpage.forEach((e, i) => {
    let pos = e.getBoundingClientRect().top;

    if (pos < screenH) {
      mpage[i].classList.add("on");
    }
  });
}

// } ///////// actPage 함수 //////////////////
export { scrollFn };
