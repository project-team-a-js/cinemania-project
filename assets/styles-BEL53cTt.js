import{a as B}from"./vendor-CJ4cOYKs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();const ce=document.querySelector(".menu-button"),A=document.querySelector(".mobile-menu");ce.addEventListener("click",de);function de(){A.classList.add("displayB")}const q=document.querySelector("body"),C=document.querySelector(".toggle");let ue=localStorage.getItem("mode");ue==="light"&&(q.classList.add("light"),C.classList.add("active"));C.addEventListener("click",()=>(q.classList.toggle("light"),q.classList.contains("light")?localStorage.setItem("mode","light"):localStorage.setItem("mode","dark")));C.addEventListener("click",()=>C.classList.toggle("active"));document.addEventListener("mouseup",function(e){A.contains(e.target)||A.classList.remove("displayB")});let O,S=!1;function G(e){try{return(JSON.parse(localStorage.getItem("myLibrary"))||[]).includes(e)}catch(t){return console.error("Error checking library:",t),!1}}function T(e){const t=document.getElementById("movie-modal"),r=document.getElementById("modal-poster");e.poster_path?r.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`:r.src="https://via.placeholder.com/300x450?text=No+Image",r.alt=e.title||e.name||"Film";const n=document.getElementById("modal-title");n.textContent=e.title||e.name||"No Title";const o=e.vote_average?e.vote_average.toFixed(1):"0.0",a=e.vote_count||0;document.getElementById("modal-rating").textContent=o,document.getElementById("modal-vote-count").textContent=a;const s=e.popularity?e.popularity.toFixed(1):"0.0";document.getElementById("modal-popularity").textContent=s;let i="No genre information";if(e.genres&&Array.isArray(e.genres))i=e.genres.map(y=>y.name).join(", ");else if(e.genre_ids&&Array.isArray(e.genre_ids)){const y={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};i=e.genre_ids.slice(0,3).map(g=>y[g]||"Unknown").join(", ")}document.getElementById("modal-genres").textContent=i,document.getElementById("modal-overview").textContent=e.overview||"No overview available. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";const m=document.querySelector(".add-to-library-btn");G(e.id)?m.textContent="Remove from my library":m.textContent="Add to my library";const d=m.cloneNode(!0);m.replaceWith(d),d.addEventListener("click",()=>{G(e.id)?(me(e.id),d.textContent="Add to my library"):(pe(e.id),d.textContent="Remove from my library")}),t.classList.remove("hidden"),t.classList.add("show"),t.style.display="flex",document.body.style.overflow="hidden",S=!0}function pe(e){try{let t=JSON.parse(localStorage.getItem("myLibrary"))||[];t.includes(e)||(t.push(e),localStorage.setItem("myLibrary",JSON.stringify(t)));const r=document.querySelector(".add-to-library-btn");r.textContent="Added to Library!",r.style.background="var(--orange)",r.style.color="white",setTimeout(()=>{r.textContent="Remove from my library",r.style.background="transparent",r.style.color="var(--orange)"},100),document.dispatchEvent(new CustomEvent("libraryUpdated"))}catch(t){console.error("Error adding movie to library:",t),alert("Error adding movie to library. Please try again.")}}function me(e){try{const r=(JSON.parse(localStorage.getItem("myLibrary"))||[]).filter(o=>o!==e);localStorage.setItem("myLibrary",JSON.stringify(r));const n=document.querySelector(".add-to-library-btn");n.textContent="Removed from Library!",n.style.background="var(--orange)",n.style.color="white",setTimeout(()=>{n.textContent="Add to my library",n.style.background="transparent",n.style.color="var(--orange)"},100),document.dispatchEvent(new CustomEvent("libraryUpdated"))}catch(t){console.error("Error removing movie from library:",t),alert("Error removing movie from library. Please try again.")}}function $(){const e=document.getElementById("movie-modal");e.classList.add("hidden"),e.classList.remove("show"),e.style.display="none",document.body.style.overflow="auto",S=!1}window.closeMovieModal=$;function ye(){S||(clearTimeout(O),O=setTimeout(()=>{S||$()},500))}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("movie-modal"),t=document.querySelector(".close-modal");t&&(t.onclick=n=>{n.stopPropagation(),$()}),e.onclick=n=>{n.target===e&&$()};const r=e.querySelector(".modal-content");r&&(r.onclick=n=>{n.stopPropagation()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&!e.classList.contains("hidden")&&$()}),e.addEventListener("mouseenter",()=>{clearTimeout(O)}),e.addEventListener("mouseleave",()=>{S||ye()})});const Y="bca6557ef64423ebe36f13a6f80e4fa5",J="https://api.themoviedb.org/3/",W=async()=>{const e=`${J}trending/all/day?api_key=${Y}`;return(await fetch(e)).json()},ge=async e=>{const t=`${J}movie/${e}/videos?api_key=${Y}`;return(await fetch(t)).json()},fe=document.querySelector(".content"),U=document.querySelector(".trailer"),he=({title:e,overview:t,name:r})=>{const n=document.createElement("div");return e!==void 0?n.innerHTML=`
    <h1 class="title">${e}</h1>
    <p class="description">
      ${t}
    </p>
    <button class="button">Watch Trailer</button>
    <button class="button2">More Details</button>
    `:n.innerHTML=`
    <h1 class="title">${r}</h1>
    <p class="description">
      ${t}
    </p>
    <button class="button">Watch Trailer</button>
    <button class="button2">More Details</button>
    `,n},ve=({key:e})=>{const t=document.createElement("div");return t.innerHTML=`
<dialog class="video-modal">
  <form method="dialog">
    <button class="video-modal-close">X</button>
  </form>
  <iframe id="trailer-iframe" src="https://www.youtube.com/embed/${e}?enablejsapi=1&autoplay=1"
</iframe>
</dialog>
    `,t},be=async e=>{const{results:t}=await W(),r=t.map(he);fe.replaceChildren(r[e]),document.querySelector("header").style.background=`linear-gradient(to right,hsla(0, 0%, 7%, 1), hsla(0, 0%, 7%, 0)),url('https://image.tmdb.org/t/p/original/${t[e].backdrop_path}') no-repeat center center / cover`,Le(t[e].id),we(e)},Le=async e=>{const{results:t}=await ge(e),r=document.querySelector(".button");if(t.length>0){const n=t[0].key;let o=document.querySelector(".video-modal"),a=document.getElementById("trailer-iframe");if(!o){const i=ve({key:n});U.replaceChildren(i),o=document.querySelector(".video-modal"),a=document.getElementById("trailer-iframe")}const s=r.cloneNode(!0);r.replaceWith(s),s.addEventListener("click",function(){a.src=`https://www.youtube.com/embed/${n}?enablejsapi=1&autoplay=1`,o.showModal()}),o.addEventListener("click",i=>{i.target===o&&o.close()}),o.addEventListener("close",()=>{a&&(a.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),a.src=`https://www.youtube.com/embed/${n}?enablejsapi=1`)})}else{const n=r.cloneNode(!0);r.replaceWith(n),n.addEventListener("click",function(){var a=document.createElement("dialog");a.classList.add("trailer-error"),U.replaceChildren(a),a.innerHTML=`
      <form method="dialog">
        <button class="video-modal-close">X</button>
      </form>
      <p>OOPS... We are very sorry! But we couldn’t find the trailer.</p>
      <img src="../img/IMG_9881 1.png" alt="">
      `,a.showModal(),a.addEventListener("click",s=>{s.target===a&&a.close()})})}},we=async e=>{const{results:t}=await W(),r=t[e];document.querySelector(".button2").addEventListener("click",function(){T(r)})};be(Math.floor(Math.random()*19));document.addEventListener("DOMContentLoaded",function(){const e=document.createElement("button");e.id="scroll-up-btn",e.className="scroll-up-btn",e.innerHTML=`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 14L12 9L17 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,e.setAttribute("aria-label","Scroll to top"),e.title="Back to top",document.body.appendChild(e),window.addEventListener("scroll",function(){const t=window.pageYOffset||document.documentElement.scrollTop,r=window.innerHeight,o=document.documentElement.scrollHeight-r*1.8;t>o?e.classList.add("show"):e.classList.remove("show")}),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})});const z="bca6557ef64423ebe36f13a6f80e4fa5",V="https://api.themoviedb.org",Ee="https://image.tmdb.org/t/p/",E=document.querySelector(".my-movies-select"),M=document.querySelector(".load-btn"),I=document.querySelector(".movie-list"),H=document.querySelector(".btn-link");let Z=new Map,k=[],x=[];async function Me(){try{(await B.get(`${V}/3/genre/movie/list?api_key=${z}&language=en-EN`)).data.genres.forEach(t=>{Z.set(t.id,t.name)})}catch(e){console.error("Error fetching movie genres:",e)}}function $e(){if(!E)return;E.innerHTML="";const e=document.createElement("option");e.value="all",e.textContent="All Genres",E.appendChild(e),Z.forEach((t,r)=>{const n=document.createElement("option");n.value=r,n.textContent=t,E.appendChild(n)})}async function j(){const e=localStorage.getItem("myLibrary");let t=[];if(e)try{t=JSON.parse(e)}catch(n){console.error("Error parsing localStorage 'myLibrary' data:",n),t=[]}I.innerHTML="";const r=t.map(n=>B.get(`${V}/3/movie/${n}?api_key=${z}`).then(o=>o.data).catch(o=>(console.error(`Error fetching movie with ID ${n}:`,o),null)));k=(await Promise.all(r)).filter(n=>n!==null),D(k),ke()}function D(e){if(x=e,x.length===0){I.innerHTML="<p>No movies found for the selected genre.</p>";return}const t=`
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
    `,r=x.map(n=>{const{poster_path:o,title:a,release_date:s,vote_average:i}=n,m=s?s.split("-")[0]:"N/A",L=o?`${Ee}w500${o}`:"https://via.placeholder.com/500x750?text=No+Image",d=Math.round((i||0)/2),y=Array(5).fill(0).map((g,h)=>`
          <svg class="star ${h<d?"filled":""}" viewBox="0 0 24 24" >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>`).join("");return`
      <li class="movie-card">
        <img src="${L}" alt="${a}" />
        <div class="movie-info">
          <div class="movie-title">${(a||"").toUpperCase()}</div>
          <div class="movie-meta">${m}</div>
        </div>
        <div class="rating-stars">${y}</div>
      </li>
    `}).join("");I.innerHTML=t+r,Se()}function Se(){document.querySelectorAll(".movie-card").forEach((t,r)=>{t.addEventListener("click",()=>{const n=x[r];n&&T(n)})})}function ke(){M&&H&&(k.length===0?(M.classList.add("hiddenBtn","searchBtn"),M.textContent="Search movie",H.href="./catalog.html",I.innerHTML="<p class='noMovieInfo'>OOPS... <br>We are very sorry!<br>You don’t have any movies at your library.</p>"):(M.classList.remove("hiddenBtn","searchBtn"),M.textContent="Load more"))}function xe(){E&&E.addEventListener("change",e=>{const t=e.target.value;if(t==="all")D(k);else{const r=k.filter(n=>n.genres.some(o=>o.id===parseInt(t)));D(r)}})}document.addEventListener("DOMContentLoaded",()=>{document.body.id==="library-page"&&(document.addEventListener("libraryUpdated",()=>{j()}),Me().then(()=>{$e(),j(),xe()}))});const K="bca6557ef64423ebe36f13a6f80e4fa5",Q="https://api.themoviedb.org",w="https://image.tmdb.org/t/p/",_=document.querySelector(".upcoming-movie");let X=new Map,N=null;async function _e(){try{(await B.get(`${Q}/3/genre/movie/list?api_key=${K}&language=en-EN`)).data.genres.forEach(t=>{X.set(t.id,t.name)})}catch(e){console.error("Error fetching movie genres:",e)}}function Ce(e){return e.map(t=>X.get(t)||"Unknown Genre").join(", ")}function Ie(){const e=new Date,t=e.getFullYear(),r=e.getMonth(),n=new Date(t,r,1),o=new Date(t,r+1,0),a=s=>{const i=s.getFullYear(),m=String(s.getMonth()+1).padStart(2,"0"),L=String(s.getDate()).padStart(2,"0");return`${i}-${m}-${L}`};return{startDate:a(n),endDate:a(o)}}function F(e,t){te(t)?e.textContent="Remove from My Library":e.textContent="Add to My Library"}function ee(e){if(!e){const g=document.createElement(`<div>
        <p>OOPS...
          We are very sorry!
          But we couldn’t find any movie.</p>
      </div>`);_.innerHTML=g;return}N=e;let t,r,n,o;const a=window.innerWidth;a>=1280&&e.backdrop_path?(t=`${w}w1280${e.backdrop_path}`,r=` ${w}w780${e.backdrop_path} 780w,
        ${w}w1280${e.backdrop_path} 1280w,
        ${w}original${e.backdrop_path} 1920w
        `,n="(min-width: 1280px) 805px",o="movie-image-backdrop"):a>=768&&e.backdrop_path?(t=`${w}w780${e.backdrop_path}`,r=` ${w}w300${e.backdrop_path} 300w,
        ${w}w780${e.backdrop_path} 780w
        `,n=`(min-width: 768px) 704px,
        (max-width: 1279px) 704px`,o="movie-image-backdrop"):(t=e.poster_path?`${w}w342${e.poster_path}`:"https://via.placeholder.com/320x460?text=Görsel+Yok",r=` ${w}w185${e.poster_path} 185w,
        ${w}w342${e.poster_path} 342w,
        ${w}w500${e.poster_path} 500w
        `,n=`(max-width: 320px) 280px,
        (max-width: 767px) 280px`,o="movie-image-poster");const s=e.release_date?new Date(e.release_date).toLocaleDateString():"Unknown Release Date",i=e.vote_average?e.vote_average.toFixed(1):"-",m=e.vote_count?e.vote_count.toLocaleString():"-",L=Ce(e.genre_ids),d=e.title.toUpperCase();_.innerHTML=`
    <div class="upcoming-movie-container">
        <img src="${t}" 
            srcset="${r.trim()}" 
            sizes="${n.trim()}" 
            class="movieImage ${o}"
            alt="${e.title} Poster Görseli"/>
        <div class="upcoming-info">
            <p class="upcoming-title">${d}</p>
            <div class="upcoming-info-details">
                <div class="info-tablet-details">
                    <div class="info-detail">
                        <p class="info-p">Release Date</p>
                        <span class="info-span info-color">${s}</span>
                    </div>
                    <div class="info-detail">
                        <p class="info-p">Vote / Votes</p>
                        <div class="info-votes-container">
                          <span class="info-span info-votes">${i}</span>
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
                        <span class="info-span">${L}</span>
                    </div>
                </div>
                
            </div>
            <div class="upcoming-about">
                <p class="info-p info-about">ABOUT</p>
                <p class="info-p">${e.overview}</p>
            </div>
            <button class="addLibrary" data-id="${e.id}">Add to My Library</button>
        </div>
    </div>`;const y=_.querySelector(".addLibrary");F(y,e.id),y.addEventListener("click",()=>{const g=parseInt(y.getAttribute("data-id"));let h=P();te(g)?(h=h.filter(u=>u!==g),localStorage.setItem("myLibrary",JSON.stringify(h))):Te(g),F(y,g)})}async function Be(){await _e();const{startDate:e,endDate:t}=Ie();try{const n=(await B.get(`${Q}/3/discover/movie`,{params:{api_key:K,"primary_release_date.gte":e,"primary_release_date.lte":t,sort_by:"popularity.desc"}})).data.results;if(n&&n.length>0){const o=Math.floor(Math.random()*n.length),a=n[o];ee(a)}else _.innerHTML="<p>No upcoming movies found for this month.</p>"}catch(r){console.error("Error fetching upcoming movies:",r)}}function Te(e){let t=P();t=t||[],t.includes(e)||(t.push(e),localStorage.setItem("myLibrary",JSON.stringify(t)))}function P(){const e=localStorage.getItem("myLibrary");return e?JSON.parse(e):[]}function te(e){return P().includes(e)}function Ae(e,t){let r;return function(...n){const o=this;clearTimeout(r),r=setTimeout(()=>e.apply(o,n),t)}}const qe=Ae(()=>{N?ee(N):upcomingMovieContainer.innerHTML=""},250);document.addEventListener("DOMContentLoaded",Be);window.addEventListener("resize",qe);const ne={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDA5M2Y5MzcwZWVhYjYyZGRhZDEyMTViYTMzYzdkYyIsIm5iZiI6MTc0Mzc5MjUzNi41MTMsInN1YiI6IjY3ZjAyOTk4ZjVhODBhYTU0NTk5NTM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kD8CV4_F8L2GVoP85qrIIvPuEascfTURrC1KNOeDj4Q"}};let oe={};function Oe(){return fetch("https://api.themoviedb.org/3/genre/movie/list?language=en-US",ne).then(e=>e.json()).then(e=>{e.genres.forEach(t=>{oe[t.id]=t.name})})}function De(e){return e.map(t=>oe[t]).filter(Boolean).slice(0,2)}document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme");const e=document.getElementById("weekly-cards"),t=document.getElementById("loader-weekly");Oe().then(()=>{fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",ne).then(r=>r.json()).then(r=>{const n=r.results.slice(0,3);e.innerHTML="",t.style.display="none",n.forEach(o=>{const a=o.poster_path?`https://image.tmdb.org/t/p/w500${o.poster_path}`:"https://via.placeholder.com/500x750?text=No+Image",s=o.title||o.name||"Untitled",i=De(o.genre_ids).join(", "),m=(o.release_date||o.first_air_date||"Unknown").split("-")[0],L=Math.round((o.vote_average||0)*10)/10,d=5,y=Math.floor(L/2),g=L%2>=1?1:0,h=d-y-g,u=[...Array(y).fill('<svg class="star-weekly full"><use xlink:href="#icon-star"></use></svg>'),...Array(g).fill('<svg class="star-weekly half"><use xlink:href="#icon-star-half"></use></svg>'),...Array(h).fill('<svg class="star-weekly empty"><use xlink:href="#icon-star-outline"></use></svg>')].join(""),l=document.createElement("div");l.className="card-weekly",l.style.backgroundImage=`url(${a})`,l.style.backgroundSize="cover",l.style.backgroundPosition="center",l.style.display="flex",l.style.objectFit="contain",l.style.alignItems="flex-end",l.style.borderRadius="10px",l.style.position="relative",l.style.overflow="hidden",l.style.boxShadow=" linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%)",l.innerHTML=`
            <div class="card-weekly-content">
            <div class="card-info">
              <h3>${s}</h3>
              <p>${i} | ${m}</p>
              </div>
              <span class="star-weekly">${u}</span>
            </div>
            
          `,e.appendChild(l),l.addEventListener("click",()=>{T(o)})})}).catch(r=>{console.error("Error fetching data:",r),e.innerHTML="<p>Error loading movies.</p>",t.style.display="none"})})});const R="bca6557ef64423ebe36f13a6f80e4fa5";function Ne(){const e=document.getElementById("search-input"),t=document.getElementById("clear-btn"),r=document.getElementById("movie-list"),n=document.getElementById("search-form"),o=document.getElementById("pagination"),a=document.getElementById("year-select");if(!e||!t||!r||!n||!o||!a){console.error("Gerekli HTML elementleri bulunamadı! Sayfanızın doğru yüklendiğinden emin olun.");return}let s=24,i=1,m=[];e.addEventListener("input",()=>{t.style.display=e.value?"inline":"none"}),t.addEventListener("click",()=>{e.value="",t.style.display="none",i=1,d()}),a.addEventListener("change",()=>{i=1,d()});function L(u,l,p){if(u){const c=new URL("https://api.themoviedb.org/3/search/movie");return c.searchParams.append("api_key",R),c.searchParams.append("query",u),c.searchParams.append("page",l),p&&c.searchParams.append("primary_release_year",p),c.toString()}else{const c=new URL("https://api.themoviedb.org/3/discover/movie");return c.searchParams.append("api_key",R),c.searchParams.append("sort_by","popularity.desc"),c.searchParams.append("page",l),p&&c.searchParams.append("primary_release_year",p),c.toString()}}async function d(){const u=e.value.trim(),l=a.value;try{const p=L(u,i,l),f=await(await fetch(p)).json();if(!f.results||f.results.length===0){r.innerHTML='<p style="grid-column: 1/-1; text-align: center;">Sonuç bulunamadı.</p>',s=1,h();return}s=f.total_pages>24?24:f.total_pages,y(f.results),h()}catch(p){console.error("Film verisi alınamadı:",p),r.innerHTML='<p style="grid-column: 1/-1; text-align: center;">Film verisi alınırken hata oluştu.</p>',s=1,h()}}n.addEventListener("submit",u=>{u.preventDefault(),i=1,d()});function y(u){m=u;const l=`
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
    `;r.innerHTML=l+u.map(p=>{const{poster_path:c,title:f,release_date:v,vote_average:b}=p,re=v?v.split("-")[0]:"N/A",ae=c?`https://image.tmdb.org/t/p/w500${c}`:"https://via.placeholder.com/500x750?text=No+Image",se=Math.round((b||0)/2),ie=Array(5).fill(0).map((Pe,le)=>`
              <svg class="star ${le<se?"filled":""}" viewBox="0 0 24 24" >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>`).join("");return`
            <div class="movie-card" data-movie-id="${p.id}">
              <img src="${ae}" alt="${f}" />
              <div class="movie-info">
                <div class="movie-title">${f.toUpperCase()}</div>
                <div class="movie-meta">${re}</div>
              </div>
              <div class="rating-stars">${ie}</div>
            </div>
          `}).join(""),g()}function g(){document.querySelectorAll(".movie-card").forEach((l,p)=>{l.addEventListener("click",()=>{const c=m[p];c&&T(c)})})}function h(){o.innerHTML="";const u=3,l=document.createElement("button");l.textContent="<",l.classList.add("arrow-btn"),l.disabled=i===1,l.onclick=()=>{i>1&&(i--,d())},o.appendChild(l);let p=i,c=p+u-1;c>s&&(c=s);for(let v=p;v<=c;v++){const b=document.createElement("button");b.textContent=v.toString().padStart(2,"0"),b.classList.add("page-btn"),v===i&&b.classList.add("active"),b.onclick=()=>{i=v,d()},o.appendChild(b)}if(c<s){const v=document.createElement("span");v.textContent="...",v.classList.add("ellipsis"),o.appendChild(v);const b=document.createElement("button");b.textContent=s.toString().padStart(2,"0"),b.classList.add("page-btn"),b.onclick=()=>{i=s,d()},o.appendChild(b)}const f=document.createElement("button");f.textContent=">",f.classList.add("arrow-btn"),f.disabled=i===s,f.onclick=()=>{i<s&&(i++,d())},o.appendChild(f)}d(),h()}document.addEventListener("DOMContentLoaded",Ne);
//# sourceMappingURL=styles-BEL53cTt.js.map
