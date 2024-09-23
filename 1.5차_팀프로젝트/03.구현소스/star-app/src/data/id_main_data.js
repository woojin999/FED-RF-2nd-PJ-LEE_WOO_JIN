// 스벅 PJ 데이터 JS - main_starwars_data.js

/*************************************
  [ 데이터 항목 객체 생성시 유의사항 ] 

    1. 모든 데이터는 구분할 수 있는 
    유일키 (기본키)를 생성한다!
    
    2. 항목별 데이터는 객체로 구성한다
    
    3. 반복데이터는 객체를 반복하여 
    배열로 구성한다 
    
    4. 반복데이터가 객체일 경우 배열로
    변환하여 사용한다.

  *************************************/


/********************************
 *   [ 3. 메인영역 데이터 ]
********************************/
//3-1 세계관 데이터
    const contentData = [
      {
        boxClass: 'box1',
        title: 'Official Timeline',
        subtitle: 'The Eras of Star Wars',
        description: 'Every saga has a beginning, middle, and end. The stories of the galaxy far, far away span thousands of years, with eras defined along a mythological timeline giving context to its past, present, and future. As Star Wars continues to expand and evolve, these eras provide a sense of scope to an epic tale still being told.'
      },
      {
        boxClass: 'box2',
        title: 'The Story of',
        subtitle: 'Humanity Set in the Galaxy',
        description: 'The Star Wars series depicts the conflict between the Jedi Knights and the Sith Empire, set against the backdrop of the galaxy. This science fiction epic expresses themes such as familial love, courage, and sacrifice through its extensive universe and characters, and its gripping storyline, all unfolding amidst the dualistic struggle between light and dark. Witness the human drama that unfolds in the infinite realm of space.'
      },
      {
        boxClass: 'box3',
        title: "Star Wars' Epic Saga Across Eras",
        subtitle: 'The Mythical Journey Through Time',
        description: 'The Star Wars saga spans thousands of years in the galaxy, unfolding its narrative across distinct eras along a mythical timeline of past, present, and future. This division into eras lends an epic scale and context to the ever-expanding Star Wars universe, aiding the understanding of the ongoing saga. The eras provide a framework to explore the vast expanse of interconnected stories, from ancient legends to an uncertain future, infusing them with a sense of mythic grandeur as part of a greater cosmic cycle.'
      },
      {
        boxClass: 'box4',
        title: 'The Pioneer of Fandom Culture',
        subtitle: 'The Star Wars Universe',
        description: 'Star Wars is the hugely popular American space opera film series created by George Lucas. It has become a massive cultural phenomenon, transcending just movies by expanding across various media like TV shows, books, and comics. Star Wars represents American culture itself and has cultivated one of the largest fan bases worldwide, especially in the United States.'
      }
    ];

    /* 
slice()

기존 배열을 건드리지 않고, 지정된 범위의 요소를 복사하여 새로운 배열을 반환합니다.
array.slice(start, end) 형태로 사용합니다.
start 인덱스부터 end 인덱스 전까지의 요소를 복사합니다.


splice()

기존 배열 자체를 수정합니다.
array.splice(start, deleteCount, item1, item2, ...) 형태로 사용합니다.
start 인덱스부터 deleteCount 개수만큼의 요소를 제거합니다.
제거된 위치에 item1, item2, ... 등의 새로운 요소를 추가할 수 있습니다.



따라서 slice(1)은 기존 배열을 건드리지 않고, 인덱스 1부터 배열 끝까지의 요소를 복사하여 새로운 배열을 반환합니다.
반면에 splice(1)은 기존 배열에서 인덱스 1부터 시작하여 요소를 제거하기 시작합니다. 이때 deleteCount를 지정하지 않으면 인덱스 1부터 배열의 끝까지 모든 요소를 제거합니다.
예를 들어, const arr = [1, 2, 3, 4, 5];라는 배열이 있다면:

arr.slice(1) 결과는 [2, 3, 4, 5]이 됩니다. 원본 배열은 변경되지 않습니다.
arr.splice(1) 결과는 [2, 3, 4, 5]이 되지만, 원본 배열은 [1]로 변경됩니다. */

//3-2 뉴스아이템데이터
    const newsItemData = [
      {tit: '12 Star Wars Movie Poster Designs Found Only in Japan',
        src: 'news01.jpg',
        info:`Many Star Wars collectors have long coveted items produced exclusively for fans and audiences in Japan, be it toys, food premiums, apparel items, or posters.  During the original trilogy era of the late ‘70s and early ‘80s, marketing teams around the world were often given broad latitude to create Star Wars poster campaigns to suit local tastes and sensibilities, resulting in a rich variety of advertising imagery. This tradition shifted during the era of the prequels, however, when the same key advertising imagery was utilized across all markets around the globe, with the exception of — interestingly — the US, which did not enjoy the expanded poster campaigns seen in Europe and Asia. There has been a return in recent years to some regionally exclusive poster designs, including in Japan, again giving fans and collectors an opportunity to add a truly unique poster to their collection. As Star Wars Celebration heads back to Japan in 2025, StarWars.com is revisiting some of those rarities.The following 12 Japanese Star Wars movie posters feature designs and/or illustrations used nowhere else in the world, making them especially appealing to fans wishing to collect each unique poster from a specific title (or every title!). You will notice that prequel posters are conspicuously absent from the list, as there were no poster graphics created exclusively for Japan during that era.`},
      {tit: 'The Hunt for Jedi Is on in Marvel\'s Star Wars: Inquisitors - Exclusive Reveal',
        src: 'news02.jpg',
        info:`The final season of Star Wars: The Bad Batch is here! In Bad Batch Declassified, we’ll explore our favorite moments from each episode, available only on Disney+. Armor up and join us for the ride. Spoiler warning: This article discusses details and plot points from the Star Wars: The Bad Batch episode, “Into the Breach.” If there are two things the Bad Batch are really good at, it’s breaking in — and breaking out. With Omega in the custody of Dr. Hemlock at Mount Tantiss, her Clone Force 99 brothers are concerned only with getting her back. In “Into the Breach,” they come up with a plan to sneak aboard an Imperial station and steal the facility’s coordinates; difficult, to be sure, but the team thankfully has an ex-vice admiral up its collective sleeve. Yet as they devise this covert op, Omega proves to be ever the Batcher herself — already plotting as escape for herself and Hemlock’s other captive children. A great dual-caper tale, here are five highlights.`},
      {tit: 'Disneyland After Dark: Star Wars Nite Kicks Off Tonight',
        src: 'news03.jpg',
        info:`“The Jedi cannot help who they are. Their compassion leaves a trail.” The Grand Inquisitor’s words in Obi-Wan Kenobi form the cold heart of Marvel’s upcoming Star Wars: Inquisitors, which StarWars.com is excited to reveal. A new miniseries kicking off July 3 from writer Rodney Barnes and artist Ramon Rosanas, Inquisitors follows the Empire’s Jedi hunters as they narrow in on a new target: Tensu Run, a survivor of Order 66 looking to spread hope and rebuild the Jedi Order. He has won the attention of Darth Vader, who is determined to have Tensu killed at any cost. Check out Nick Bradshaw’s cover for issue #1, along with variants by Alex Maleev and the legendary Walt Simonson, in the gallery below.`},
      {tit: 'New LEGO Star Wars Ultimate Collector Series TIE Interceptor Revealed',
        src: 'news04.jpg',
        info:`The wait is almost over. Disneyland After Dark: Star Wars Nite is back starting tonight with a celebration fit for a Naboo queen! Set for the evenings of April 16, April 18, April 23, April 25, and April 30 as well as May 2, May 7, and May 9, the special event encompasses the weeks around Star Wars Day, on May the 4th, with a private party inside Disneyland from 9 p.m. to 1 a.m. each night. The adventure begins at Disneyland Park with mix-in starting at 6 p.m., and no theme park reservation required. Take on the Trade Federation in a meeting with Queen Amidala from Star Wars: The Phantom Menace or study the philosophy of the Force with Ahsoka Tano, Anakin Skywalker’s former Padawan from Ahsoka. Galactic encounters abound throughout the park where you can cross paths with Ewoks in Critter Country, BB-8 rolling through Frontierland, Darth Maul, Darth Vader, and Emperor Palpatine in Tomorrowland, and a host of other denizens in Star Wars: Galaxy’s Edge including Hera Syndulla, Chopper, the Mandalorian and Grogu, and more! Enjoy a tasting menu from around the galaxy as you sample an adorable Grogu Candy Apple, a Galactic Princess Sundae fit for Princess Leia, a Level 1313 Loaded Bowl, Wookiee Funnel Cake, and more! Join the Resistance at a Lightsaber Meet-up with Rey and watch out for the March of the First Order, led by Captain Phasma and her stormtroopers. Fly the Millennium Falcon and join the fight against evil with access to ride Millennium Falcon: Smugglers Run, Rise of the Resistance, and other attractions. Learn the ways of the Jedi and the art of defense in the Lightsaber Instructional demonstration. Forge a custom lightsaber at Savi’s Workshop or build your own droid counterpart at the Droid Depot. Shop for other exclusive merchandise including a pullover hoodie and trading pin and the first to market May the 4th collection available for early release. And finish the evening by taking in a show by the cantina crooners Figrin D’an and the Modal Nodes around the Rivers of America.`}
    ];
//3-3 시리즈데이터
const seriesData = [
  {
    idx:1,
    imgClass: 'series-img hover-img',
    src: 'series_01.jpg',
    title: 'Tales of the Empire',
    info: 'A journey into the fearsome Galactic Empire through the eyes of two warriors on divergent paths.',
    detail: 'Rating: TV-PG Release Date: May 4, 2024 Genre: Animation, Anthology, Science Fiction Journey into the fearsome Galactic Empire through the eyes of two warriors on divergent paths, set during different eras. After losing everything, young Morgan Elsbeth navigates the expanding Imperial world toward a path of vengeance, while former Jedi Barriss Offee does what she must to survive a rapidly changing galaxy. The choices they make will define their destinies.'
  },
  {
    idx:2,
    imgClass: 'series-img hover-img',
    src: 'series_02.jpg',
    title: 'The Acolyte',
    info: 'An investigation into a shocking crime spree pits a respected Jedi Master against a dangerous warrior from his past.',
    detail:'Rating: TV-14 Release Date: June 4, 2024 Genre: Mystery, Science Fiction An investigation into a shocking crime spree pits a respected Jedi Master against a dangerous warrior from his past. As more clues emerge, they travel down a dark path where sinister forces reveal all is not what it seems…'
  },
  {
    idx:3,
    imgClass: 'series-img hover-img',
    src: 'series_03.jpg',
    title: 'Ahsoka',
    info: 'Former Jedi Knight Ahsoka Tano investigates an emerging threat to a vulnerable galaxy.',
    detail:'Rating: TV-14 Release Date: August 22, 2023 Genre: Action, Adventure, Science Fiction Set after the fall of the Empire, "Ahsoka" follows the former Jedi knight Ahsoka Tano as she investigates an emerging threat to a vulnerable galaxy.'
  },
  {
    idx:4,
    imgClass: 'series-img hover-img',
    src: 'series_04.jpg',
    title: 'The Mandalorian',
    info: 'After the fall of the Empire, a lone Mandalorian makes his way through the lawless galaxy with his foundling, Grogu.',
    detail:'Rating: TV-14 Release Date: November 12, 2019 Genre: Action, Adventure, Science Fiction After the fall of the Empire, a lone Mandalorian makes his way through the lawless galaxy with his foundling, Grogu.'
  },
  {
    idx:5,
    imgClass: 'series-img hover-img',
    src: 'series_05.jpg',
    title: 'Andor',
    info: 'In a dangerous era, Cassian Andor embarks on a path destined to turn him into a rebel hero.',
    detail:'Rating: TV-14 Release Date: September 21, 2022 Genre: Action, Adventure, Science Fiction In a dangerous era, Cassian Andor embarks on a path destined to turn him into a rebel hero. Original series now streaming, only on Disney+. Directed By Toby Haynes, Susanna White, Benjamin Caron Written By Tony Gilroy, Dan Gilroy, Stephen Schiff, Beau Willimon'
  },
  {
    idx:6,
    imgClass: 'series-img hover-img',
    src: 'series_06.jpg',
    title: 'Tales of the Jedi',
    info: 'Tales built around Jedi from the prequel era, featuring Ahsoka Tano, Count Dooku, and others.',
    detail:'Rating: TV-PG Release Date: October 26, 2022 Genre: Animation, Anthology, Science Fiction A six-episode event featuring parables built around Jedi from the prequel era. Journey into the lives of two distinctly different Jedi — Ahsoka Tano and Count Dooku. Each will be put to the test as they make choices that will define their destinies.'
  },
  {
    idx:7,
    imgClass: 'series-img hover-img',
    src: 'series_07.jpg',
    title: 'Obi-Wan Kenobi',
    info: 'During the reign of the Empire, Obi-Wan Kenobi embarks on a crucial mission.',
    detail:'Rating: TV-14 Release Date: May 27, 2022 Genre: Action, Adventure, Science Fiction During the reign of the Empire, Obi-Wan Kenobi embarks on a crucial mission. Directed By Deborah Chow'
  },
  {
    idx:8,
    imgClass: 'series-img hover-img',
    src: 'series_08.jpg',
    title: 'The Book of Boba Fett',
    info: 'Go inside The Book of BobaFett, now streaming on Disney+, with episode guides, Databank entries, and a bounty of in-depth articles.',
    detail:'Rating: TV-14 Release Date: December 29, 2021 Genre: Action, Adventure, Science Fiction Go inside The Book of Boba Fett, now streaming on Disney+, with episode guides, Databank entries, and a bounty of in-depth articles.'
  }
];
//3-4 비주얼배너 데이터
const visualData = [
  {
    title: 'The Bad Batch',
    series: 'Star Wars series',
    desc: 'The Bad Batch follows the elite clones as they navigate a changing galaxy after the Clone War. Each member possesses a unique skill, making them an exceptional and formidable crew.',
    href: "/Badbatch"
  },
  {
    title: 'The Mandalorian',
    series: 'Star Wars series',
    desc: 'After the fall of the Empire, a lone Mandalorian makes his way through the lawless galaxy with his foundling, Grogu.',
    href: "/Themandalorian"
  },
  {
    title: 'Ahsoka',
    series: 'Star Wars series',
    desc: 'Set after the fall of the Empire, "Ahsoka" follows the former Jedi knight Ahsoka Tano as she investigates an emerging threat to a vulnerable galaxy.',
    href: "/Ahsoka"
  }
];
/* **************************************** */
    const htmlData = {
      IdContentArea: `
      <div>
        <h2 class="main_tit">
           <small>epic journey through</small> <br />
           The ages of Star Wars
        </h2>
      </div>
      ${contentData.map(v=>`
      <div class="txt-content ${v.boxClass}">
      <h4 class="tit">${v.title}</h4>
      <h2 class="tit title-sub2">${v.subtitle}</h2>
      <span class="desc"
        >${v.description}
      </span>
    </div>
      `).join('')}
    `,
      IdNewsArea:`
      <div class="news-area box fx-box">
      <div class="left-wrap">
        <div class="left-box news-box">
          <h2>12 Star Wars Movie Poster Designs Found Only in Japan</h2>
          <div class="left-img hover-img"></div>
        </div>
      </div>
      <div class="right-wrap">
        <h4>More News + Features</h4>
        ${newsItemData.slice(1).map((v)=>`
        <div class="item-box news-box">
        <div class="series-img hover-img"></div>
        <p class="info">
         ${v.tit}
        </p>
      </div>
        `).join('')}
        <div class="btnbox">
          <a class="btn" href="https://www.starwars.com/news" target="_blank">VIEW ALL</a>
          <a class="btn yellow" href="https://www.starwars.com/news/star-wars-japanese-posters" target="_blank">MORE INFO</a>
        </div>
      </div>
    </div>
    <!-- 한번더붙임 -->
    <div class="right-wrap second">
      <h4 class="title-sub2">ALL series</h4>
      ${seriesData.map(v=>`
      <div class="item-box">
        <div class="${v.imgClass}"></div>
        <p class="info"><strong class="title-topic">${v.title}</strong></p>
        <span class="info"
          >${v.info}</span></div>
      `).join('')}
      <div class="btnbox">
        <a class="btn" href="https://www.starwars.com/series" target="_blank">VIEW ALL</a>
        <a class="btn yellow" href="https://www.starwars.com/search?q=TRAILER" target="_blank">WATCH TRAILER▶</a>
      </div>
    </div>
      `,
      IdVisualArea:`
      
      <div class="visualView fx-box">
       ${visualData.map(v=>`
       <div class="visualimg">
       <span
         >${v.title}
         <p>${v.series}</p>
         <p class="desc">${v.desc}
         </p>
         <a class="btn" href="${v.href}">MORE VIEW</a></span
       >
     </div>`).join('')}
    </div>
      `,
    


    };/////////////// htmlData 객체 ///////////////

    export { htmlData ,
      contentData, newsItemData, seriesData , visualData}