import{a as q}from"./vendor-CJ4cOYKs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const oe=document.querySelector(".menu-button"),x=document.querySelector(".mobile-menu");oe.addEventListener("click",ae);function ae(){x.classList.add("displayB")}const _=document.querySelector("body"),C=document.querySelector(".toggle");let re=localStorage.getItem("mode");re==="light"&&(_.classList.add("light"),C.classList.add("active"));C.addEventListener("click",()=>(_.classList.toggle("light"),_.classList.contains("light")?localStorage.setItem("mode","light"):localStorage.setItem("mode","dark")));C.addEventListener("click",()=>C.classList.toggle("active"));document.addEventListener("mouseup",function(e){x.contains(e.target)||x.classList.remove("displayB")});const w=document.querySelector(".team-modal"),O=document.querySelector(".footer-link"),F=document.querySelector(".team-modal .modal-close-btn"),ie=document.querySelector(".team-modal .team-container"),S=document.querySelector(".team-modal .member-card"),se=[{name:"Abdullah Furkan Toy",role:"FullStack Developer",image:"",gitLink:"https://github.com/okazaki55",linkedLink:"https://www.linkedin.com/in/a-furkan-t/"},{name:"Aykut Şahinbaş",role:"FullStack Developer",image:"./img/aykut-sahinbas.jpeg",gitLink:"https://github.com/ayktshnbs",linkedLink:""},{name:"Burak Ezer",role:"FullStack Developer",image:"./img/burak-ezer.jpeg",gitLink:"https://github.com/burak-ezer",linkedLink:""},{name:"Çağla Karabudak Akın",role:"FullStack Developer",image:"./img/cagla-karabudak-akin.jpg",gitLink:"https://github.com/caglaakin",linkedLink:"https://www.linkedin.com/in/%C3%A7a%C4%9Fla-karabudak-ak%C4%B1n-b118b118a/"},{name:"Emre Ayvaz",role:"FullStack Developer",image:"./img/emre-ayvaz.jpeg",gitLink:"https://github.com/Emreayvz",linkedLink:"https://www.linkedin.com/in/emreayvz/"},{name:"Erdem İzcikılınç",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"İlker Şelimen",role:"FullStack Developer",image:"",gitLink:"https://github.com/ilkerthedev",linkedLink:"https://www.linkedin.com/in/ilker-%C5%9Felimen-206338266/"},{name:"Mehmet Öndüç",role:"FullStack Developer",image:"./img/mehmet-onduc.jpeg",gitLink:"https://github.com/Mehmetonduc",linkedLink:"https://www.linkedin.com/in/muhammet-mehmet-%C3%B6nd%C3%BC%C3%A7-b07582210/"},{name:"Özgür Korkmaz",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Umay Ece Mantar",role:"FullStack Developer",image:"./img/umay-ece-mantar.jpeg",gitLink:"https://github.com/cicikusdev",linkedLink:"https://www.linkedin.com/in/umayecemantar"}],le="../img/no-user-image.jpeg";function ce(e){S.innerHTML="",e.forEach(t=>{const a=t.image===""?le:t.image,o=document.createElement("li");o.classList.add("team-member"),o.innerHTML=`
      <img class="member-img" src="${a}" alt="${t.name}"/>
      <div class="member-info">
        <p class="member-p">${t.name}</p>
        <p class="member-p2">${t.role}</p>
        <div class="member-link-container">
          <a class="member-link" href="${t.linkedLink||"#"}" target="_blank">
            <svg class="link-svg" width="30" height="30">
              <use href="./img/upFooIcons.svg#creators-linkedin"></use>
            </svg>
          </a>
          <a class="member-link" href="${t.gitLink||"#"}" target="_blank">
            <svg class="link-svg" width="30" height="30">
              <use href="./img/upFooIcons.svg#creators-github"></use>
            </svg>
          </a>
        </div>
      </div>
    `,S.appendChild(o)}),S.children.length>0&&ie.appendChild(S)}function de(){w&&(w.style.display="flex",ce(se))}function D(){w&&(w.style.display="none")}O&&O.addEventListener("click",e=>{e.preventDefault(),de()});w&&w.addEventListener("click",e=>{e.target===w&&D()});document.addEventListener("keydown",e=>{e.key==="Escape"&&w&&w.style.display==="flex"&&D()});F&&F.addEventListener("click",D);let T,E=!1;function N(e){try{return(JSON.parse(localStorage.getItem("watchedMovies"))||[]).some(a=>a.id===e.id)}catch(t){return console.error("Error checking library:",t),!1}}function I(e){const t=document.getElementById("movie-modal"),a=document.getElementById("modal-poster");e.poster_path?a.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`:a.src="https://via.placeholder.com/300x450?text=No+Image",a.alt=e.title||e.name||"Film";const o=document.getElementById("modal-title");o.textContent=e.title||e.name||"No Title";const n=e.vote_average?e.vote_average.toFixed(1):"0.0",r=e.vote_count||0;document.getElementById("modal-rating").textContent=n,document.getElementById("modal-vote-count").textContent=r;const i=e.popularity?e.popularity.toFixed(1):"0.0";document.getElementById("modal-popularity").textContent=i;let s="No genre information";if(e.genres&&Array.isArray(e.genres))s=e.genres.map(y=>y.name).join(", ");else if(e.genre_ids&&Array.isArray(e.genre_ids)){const y={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};s=e.genre_ids.slice(0,3).map(f=>y[f]||"Unknown").join(", ")}document.getElementById("modal-genres").textContent=s,document.getElementById("modal-overview").textContent=e.overview||"No overview available.";const m=document.querySelector(".add-to-library-btn");N(e)?m.textContent="Remove from my library":m.textContent="Add to my library";const d=m.cloneNode(!0);m.replaceWith(d),d.addEventListener("click",()=>{N(e)?(pe(e),d.textContent="Add to my library"):(me(e),d.textContent="Remove from my library")}),t.classList.remove("hidden"),t.classList.add("show"),t.style.display="flex",document.body.style.overflow="hidden",E=!0}function me(e){try{let t=JSON.parse(localStorage.getItem("watchedMovies"))||[];if(t.find(r=>r.id===e.id)){alert("This movie is already in your library!");return}t.push(e),localStorage.setItem("watchedMovies",JSON.stringify(t));const o=document.querySelector(".add-to-library-btn"),n=o.textContent;o.textContent="Added to Library!",o.style.background="var(--orange)",o.style.color="white",setTimeout(()=>{o.textContent="Remove from my library",o.style.background="transparent",o.style.color="var(--orange)"},2e3)}catch(t){console.error("Error adding movie to library:",t),alert("Error adding movie to library. Please try again.")}}function pe(e){try{const a=(JSON.parse(localStorage.getItem("watchedMovies"))||[]).filter(n=>n.id!==e.id);localStorage.setItem("watchedMovies",JSON.stringify(a));const o=document.querySelector(".add-to-library-btn");o.textContent="Removed from Library!",o.style.background="var(--orange)",o.style.color="white",setTimeout(()=>{o.textContent="Add to my library",o.style.background="transparent",o.style.color="var(--orange)"},2e3)}catch(t){console.error("Error removing movie from library:",t),alert("Error removing movie from library. Please try again.")}}function M(){const e=document.getElementById("movie-modal");e.classList.add("hidden"),e.classList.remove("show"),e.style.display="none",document.body.style.overflow="auto",E=!1}window.closeMovieModal=M;function ue(){E||(clearTimeout(T),T=setTimeout(()=>{E||M()},500))}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("movie-modal"),t=document.querySelector(".close-modal");t&&(t.onclick=o=>{o.stopPropagation(),M()}),e.onclick=o=>{o.target===e&&M()};const a=e.querySelector(".modal-content");a&&(a.onclick=o=>{o.stopPropagation()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&!e.classList.contains("hidden")&&M()}),e.addEventListener("mouseenter",()=>{clearTimeout(T)}),e.addEventListener("mouseleave",()=>{E||ue()})});const z="bca6557ef64423ebe36f13a6f80e4fa5",U="https://api.themoviedb.org/3/",G=async()=>{const e=`${U}trending/all/day?api_key=${z}`;return(await fetch(e)).json()},ge=async e=>{const t=`${U}movie/${e}/videos?api_key=${z}`;return(await fetch(t)).json()},ye=document.querySelector(".content"),j=document.querySelector(".trailer"),fe=({title:e,overview:t,name:a})=>{const o=document.createElement("div");return e!==void 0?o.innerHTML=`
    <h1 class="title">${e}</h1>
    <p class="description">
      ${t}
    </p>
    <button class="button">Watch Trailer</button>
    <button class="button2">More Details</button>
    `:o.innerHTML=`
    <h1 class="title">${a}</h1>
    <p class="description">
      ${t}
    </p>
    <button class="button">Watch Trailer</button>
    <button class="button2">More Details</button>
    `,o},he=({key:e})=>{const t=document.createElement("div");return t.innerHTML=`
<dialog class="video-modal">
  <form method="dialog">
    <button class="video-modal-close">X</button>
  </form>
  <iframe id="trailer-iframe" src="https://www.youtube.com/embed/${e}?enablejsapi=1&autoplay=1"
</iframe>
</dialog>
    `,t},ve=async e=>{const{results:t}=await G(),a=t.map(fe);ye.replaceChildren(a[e]),document.querySelector("header").style.background=`linear-gradient(to right,hsla(0, 0%, 7%, 1), hsla(0, 0%, 7%, 0)),url('https://image.tmdb.org/t/p/original/${t[e].backdrop_path}') no-repeat center center / cover`,be(t[e].id),ke(e)},be=async e=>{const{results:t}=await ge(e),a=document.querySelector(".button");if(t.length>0){const o=t[0].key;let n=document.querySelector(".video-modal"),r=document.getElementById("trailer-iframe");if(!n){const s=he({key:o});j.replaceChildren(s),n=document.querySelector(".video-modal"),r=document.getElementById("trailer-iframe")}const i=a.cloneNode(!0);a.replaceWith(i),i.addEventListener("click",function(){r.src=`https://www.youtube.com/embed/${o}?enablejsapi=1&autoplay=1`,n.showModal()}),n.addEventListener("click",s=>{s.target===n&&n.close()}),n.addEventListener("close",()=>{r&&(r.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),r.src=`https://www.youtube.com/embed/${o}?enablejsapi=1`)})}else{const o=a.cloneNode(!0);a.replaceWith(o),o.addEventListener("click",function(){var r=document.createElement("dialog");r.classList.add("trailer-error"),j.replaceChildren(r),r.innerHTML=`
      <form method="dialog">
        <button class="video-modal-close">X</button>
      </form>
      <p>OOPS... We are very sorry! But we couldn’t find the trailer.</p>
      <img src="../img/IMG_9881 1.png" alt="">
      `,r.showModal(),r.addEventListener("click",i=>{i.target===r&&r.close()})})}},ke=async e=>{const{results:t}=await G(),a=t[e];document.querySelector(".button2").addEventListener("click",function(){I(a)})};ve(Math.floor(Math.random()*19));document.addEventListener("DOMContentLoaded",function(){const e=document.createElement("button");e.id="scroll-up-btn",e.className="scroll-up-btn",e.innerHTML=`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 14L12 9L17 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,e.setAttribute("aria-label","Scroll to top"),e.title="Back to top",document.body.appendChild(e),window.addEventListener("scroll",function(){const t=window.pageYOffset||document.documentElement.scrollTop,a=window.innerHeight,n=document.documentElement.scrollHeight-a*1.8;t>n?e.classList.add("show"):e.classList.remove("show")}),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("filmGrid"),t=document.getElementById("emptyMessage");a(),e.addEventListener("click",n=>{const r=n.target.closest(".film-card");if(r){const i=r.dataset.id,m=(JSON.parse(localStorage.getItem("myLibrary"))||[]).find(b=>b.id.toString()===i);m?I(m):console.log(`Film ID'si ${i} olan film bulunamadı.`)}});function a(){const n=JSON.parse(localStorage.getItem("myLibrary"))||[];e.innerHTML="",n.length===0?t.classList.remove("hidden"):(t.classList.add("hidden"),n.forEach(r=>{const i=o(r);e.insertAdjacentHTML("beforeend",i)}))}function o(n){const r=`https://image.tmdb.org/t/p/w500/${n.poster_path}`,i=n.genres?n.genres.map(s=>s.name).join(", "):"Tür bilgisi yok";return`
            <div class="film-card" data-id="${n.id}">
                <img src="${r}" alt="${n.title}" loading="lazy">
                <div class="film-info">
                    <h3 class="film-title">${n.title}</h3>
                    <p class="film-meta">${i} | ${n.release_date?n.release_date.substring(0,4):"Tarih yok"}</p>
                    <span class="film-rating">${n.vote_average?n.vote_average.toFixed(1):"0.0"}</span>
                </div>
            </div>
        `}});const R="bca6557ef64423ebe36f13a6f80e4fa5",J="https://api.themoviedb.org",k="https://image.tmdb.org/t/p/",$=document.querySelector(".upcoming-movie");let Y=new Map,B=null;async function Le(){try{(await q.get(`${J}/3/genre/movie/list?api_key=${R}&language=en-EN`)).data.genres.forEach(t=>{Y.set(t.id,t.name)})}catch(e){console.error("Error fetching movie genres:",e)}}function we(e){return e.map(t=>Y.get(t)||"Unknown Genre").join(", ")}function Me(){const e=new Date,t=e.getFullYear(),a=e.getMonth(),o=new Date(t,a,1),n=new Date(t,a+1,0),r=i=>{const s=i.getFullYear(),m=String(i.getMonth()+1).padStart(2,"0"),b=String(i.getDate()).padStart(2,"0");return`${s}-${m}-${b}`};return{startDate:r(o),endDate:r(n)}}function P(e,t){V(t)?e.textContent="Remove from My Library":e.textContent="Add to My Library"}function W(e){if(!e){const f=document.createElement(`<div>
        <p>OOPS...
          We are very sorry!
          But we couldn’t find any movie.</p>
      </div>`);$.innerHTML=f;return}B=e;let t,a,o,n;const r=window.innerWidth;r>=1280&&e.backdrop_path?(t=`${k}w1280${e.backdrop_path}`,a=` ${k}w780${e.backdrop_path} 780w,
        ${k}w1280${e.backdrop_path} 1280w,
        ${k}original${e.backdrop_path} 1920w
        `,o="(min-width: 1280px) 805px",n="movie-image-backdrop"):r>=768&&e.backdrop_path?(t=`${k}w780${e.backdrop_path}`,a=` ${k}w300${e.backdrop_path} 300w,
        ${k}w780${e.backdrop_path} 780w
        `,o=`(min-width: 768px) 704px,
        (max-width: 1279px) 704px`,n="movie-image-backdrop"):(t=e.poster_path?`${k}w342${e.poster_path}`:"https://via.placeholder.com/320x460?text=Görsel+Yok",a=` ${k}w185${e.poster_path} 185w,
        ${k}w342${e.poster_path} 342w,
        ${k}w500${e.poster_path} 500w
        `,o=`(max-width: 320px) 280px,
        (max-width: 767px) 280px`,n="movie-image-poster");const i=e.release_date?new Date(e.release_date).toLocaleDateString():"Unknown Release Date",s=e.vote_average?e.vote_average.toFixed(1):"-",m=e.vote_count?e.vote_count.toLocaleString():"-",b=we(e.genre_ids),d=e.title.toUpperCase();$.innerHTML=`
    <div class="upcoming-movie-container">
        <img src="${t}" 
            srcset="${a.trim()}" 
            sizes="${o.trim()}" 
            class="movieImage ${n}"
            alt="${e.title} Poster Görseli"/>
        <div class="upcoming-info">
            <p class="upcoming-title">${d}</p>
            <div class="upcoming-info-details">
                <div class="info-tablet-details">
                    <div class="info-detail">
                        <p class="info-p">Release Date</p>
                        <span class="info-span info-color">${i}</span>
                    </div>
                    <div class="info-detail">
                        <p class="info-p">Vote / Votes</p>
                        <div class="info-votes-container">
                          <span class="info-span info-votes">${s}</span>
                          <p> / </p>
                          <span class="info-span info-votes">${m}</span>
                        </div>
                    </div>
                </div>
                <div class="info-tablet-details">
                    <div class="info-detail">
                        <p class="info-p">Popularity</p>
                        <span class="info-span">${e.popularity.toFixed(2)}</span>
                    </div>
                    <div class="info-detail">
                        <p class="info-p">Genres</p>
                        <span class="info-span">${b}</span>
                    </div>
                </div>
                
            </div>
            <div class="upcoming-about">
                <p class="info-p info-about">ABOUT</p>
                <p class="info-p">${e.overview}</p>
            </div>
            <button class="addLibrary" data-id="${e.id}">Add to My Library</button>
        </div>
    </div>`;const y=$.querySelector(".addLibrary");P(y,e.id),y.addEventListener("click",()=>{const f=parseInt(y.getAttribute("data-id"));let L=A();V(f)?(L=L.filter(p=>p!==f),localStorage.setItem("myLibrary",JSON.stringify(L))):Se(f),P(y,f)})}async function Ee(){await Le();const{startDate:e,endDate:t}=Me();try{const o=(await q.get(`${J}/3/discover/movie`,{params:{api_key:R,"primary_release_date.gte":e,"primary_release_date.lte":t,sort_by:"popularity.desc"}})).data.results;if(o&&o.length>0){const n=Math.floor(Math.random()*o.length),r=o[n];W(r)}else $.innerHTML="<p>No upcoming movies found for this month.</p>"}catch(a){console.error("Error fetching upcoming movies:",a)}}function Se(e){let t=A();t=t||[],t.includes(e)||(t.push(e),localStorage.setItem("myLibrary",JSON.stringify(t)))}function A(){const e=localStorage.getItem("myLibrary");return e?JSON.parse(e):[]}function V(e){return A().includes(e)}function $e(e,t){let a;return function(...o){const n=this;clearTimeout(a),a=setTimeout(()=>e.apply(n,o),t)}}const Ce=$e(()=>{B?W(B):upcomingMovieContainer.innerHTML=""},250);document.addEventListener("DOMContentLoaded",Ee);window.addEventListener("resize",Ce);const Z={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDA5M2Y5MzcwZWVhYjYyZGRhZDEyMTViYTMzYzdkYyIsIm5iZiI6MTc0Mzc5MjUzNi41MTMsInN1YiI6IjY3ZjAyOTk4ZjVhODBhYTU0NTk5NTM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kD8CV4_F8L2GVoP85qrIIvPuEascfTURrC1KNOeDj4Q"}};let K={};function Ie(){return fetch("https://api.themoviedb.org/3/genre/movie/list?language=en-US",Z).then(e=>e.json()).then(e=>{e.genres.forEach(t=>{K[t.id]=t.name})})}function xe(e){return e.map(t=>K[t]).filter(Boolean).slice(0,2)}document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme");const e=document.getElementById("weekly-cards"),t=document.getElementById("loader-weekly");Ie().then(()=>{fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",Z).then(a=>a.json()).then(a=>{const o=a.results.slice(0,3);e.innerHTML="",t.style.display="none",o.forEach(n=>{const r=n.poster_path?`https://image.tmdb.org/t/p/w500${n.poster_path}`:"https://via.placeholder.com/500x750?text=No+Image",i=n.title||n.name||"Untitled",s=xe(n.genre_ids).join(", "),m=(n.release_date||n.first_air_date||"Unknown").split("-")[0],b=Math.round((n.vote_average||0)*10)/10,d=5,y=Math.floor(b/2),f=b%2>=1?1:0,L=d-y-f,p=[...Array(y).fill('<svg class="star-weekly full"><use xlink:href="#icon-star"></use></svg>'),...Array(f).fill('<svg class="star-weekly half"><use xlink:href="#icon-star-half"></use></svg>'),...Array(L).fill('<svg class="star-weekly empty"><use xlink:href="#icon-star-outline"></use></svg>')].join(""),l=document.createElement("div");l.className="card-weekly",l.style.backgroundImage=`url(${r})`,l.style.backgroundSize="cover",l.style.backgroundPosition="center",l.style.display="flex",l.style.objectFit="contain",l.style.alignItems="flex-end",l.style.borderRadius="10px",l.style.position="relative",l.style.overflow="hidden",l.style.boxShadow=" linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%)",l.innerHTML=`
            <div class="card-weekly-content">
            <div class="card-info">
              <h3>${i}</h3>
              <p>${s} | ${m}</p>
              </div>
              <span class="star-weekly">${p}</span>
            </div>
            
          `,e.appendChild(l),l.addEventListener("click",()=>{I(n)})})}).catch(a=>{console.error("Error fetching data:",a),e.innerHTML="<p>Error loading movies.</p>",t.style.display="none"})})});const H="bca6557ef64423ebe36f13a6f80e4fa5";function _e(){const e=document.getElementById("search-input"),t=document.getElementById("clear-btn"),a=document.getElementById("movie-list"),o=document.getElementById("search-form"),n=document.getElementById("pagination"),r=document.getElementById("year-select");if(!e||!t||!a||!o||!n||!r){console.error("Gerekli HTML elementleri bulunamadı! Sayfanızın doğru yüklendiğinden emin olun.");return}let i=24,s=1,m=[];e.addEventListener("input",()=>{t.style.display=e.value?"inline":"none"}),t.addEventListener("click",()=>{e.value="",t.style.display="none",s=1,d()}),r.addEventListener("change",()=>{s=1,d()});function b(p,l,u){if(p){const c=new URL("https://api.themoviedb.org/3/search/movie");return c.searchParams.append("api_key",H),c.searchParams.append("query",p),c.searchParams.append("page",l),u&&c.searchParams.append("primary_release_year",u),c.toString()}else{const c=new URL("https://api.themoviedb.org/3/discover/movie");return c.searchParams.append("api_key",H),c.searchParams.append("sort_by","popularity.desc"),c.searchParams.append("page",l),u&&c.searchParams.append("primary_release_year",u),c.toString()}}async function d(){const p=e.value.trim(),l=r.value;try{const u=b(p,s,l),g=await(await fetch(u)).json();if(!g.results||g.results.length===0){a.innerHTML='<p style="grid-column: 1/-1; text-align: center;">Sonuç bulunamadı.</p>',i=1,L();return}i=g.total_pages>24?24:g.total_pages,y(g.results),L()}catch(u){console.error("Film verisi alınamadı:",u),a.innerHTML='<p style="grid-column: 1/-1; text-align: center;">Film verisi alınırken hata oluştu.</p>',i=1,L()}}o.addEventListener("submit",p=>{p.preventDefault(),s=1,d()});function y(p){m=p;const l=`
      <svg style="height:0; width:0; position:absolute" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="starGradientFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#F84119" />
            <stop offset="100%" stop-color="rgba(248, 159, 25, 0.68)" />
          </linearGradient>
          <linearGradient id="starGradientStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#F84119" />
            <stop offset="100%" stop-color="rgba(248, 159, 25, 0.68)" />
          </linearGradient>
        </defs>
      </svg>
    `;a.innerHTML=l+p.map(u=>{const{poster_path:c,title:g,release_date:h,vote_average:v}=u,Q=h?h.split("-")[0]:"N/A",X=c?`https://image.tmdb.org/t/p/w500${c}`:"https://via.placeholder.com/500x750?text=No+Image",ee=Math.round((v||0)/2),te=Array(5).fill(0).map((Te,ne)=>`
              <svg class="star ${ne<ee?"filled":""}" viewBox="0 0 24 24" >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>`).join("");return`
            <div class="movie-card" data-movie-id="${u.id}">
              <img src="${X}" alt="${g}" />
              <div class="movie-info">
                <div class="movie-title">${g.toUpperCase()}</div>
                <div class="movie-meta">${Q}</div>
              </div>
              <div class="rating-stars">${te}</div>
            </div>
          `}).join(""),f()}function f(){document.querySelectorAll(".movie-card").forEach((l,u)=>{l.addEventListener("click",()=>{const c=m[u];c&&I(c)})})}function L(){n.innerHTML="";const p=3,l=document.createElement("button");l.textContent="<",l.classList.add("arrow-btn"),l.disabled=s===1,l.onclick=()=>{s>1&&(s--,d())},n.appendChild(l);let u=s,c=u+p-1;c>i&&(c=i);for(let h=u;h<=c;h++){const v=document.createElement("button");v.textContent=h.toString().padStart(2,"0"),v.classList.add("page-btn"),h===s&&v.classList.add("active"),v.onclick=()=>{s=h,d()},n.appendChild(v)}if(c<i){const h=document.createElement("span");h.textContent="...",h.classList.add("ellipsis"),n.appendChild(h);const v=document.createElement("button");v.textContent=i.toString().padStart(2,"0"),v.classList.add("page-btn"),v.onclick=()=>{s=i,d()},n.appendChild(v)}const g=document.createElement("button");g.textContent=">",g.classList.add("arrow-btn"),g.disabled=s===i,g.onclick=()=>{s<i&&(s++,d())},n.appendChild(g)}d(),L()}document.addEventListener("DOMContentLoaded",_e);
//# sourceMappingURL=styles-CeG0Tjbp.js.map
