import{a as T}from"./vendor-CJ4cOYKs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const le=document.querySelector(".menu-button"),A=document.querySelector(".mobile-menu");le.addEventListener("click",ce);function ce(){A.classList.add("displayB")}const D=document.querySelector("body"),_=document.querySelector(".toggle");let de=localStorage.getItem("mode");de==="light"&&(D.classList.add("light"),_.classList.add("active"));_.addEventListener("click",()=>(D.classList.toggle("light"),D.classList.contains("light")?localStorage.setItem("mode","light"):localStorage.setItem("mode","dark")));_.addEventListener("click",()=>_.classList.toggle("active"));document.addEventListener("mouseup",function(e){A.contains(e.target)||A.classList.remove("displayB")});const L=document.querySelector(".team-modal"),U=document.querySelector(".footer-link"),j=document.querySelector(".team-modal .modal-close-btn");let F=!1;function ue(){if(F)return;document.querySelectorAll(".image-placeholder[data-src]").forEach(t=>{const r=t.getAttribute("data-src"),o=t.querySelector(".member-img");if(r&&o){const n=new Image;n.onload=function(){o.src=this.src,o.classList.add("loaded"),t.removeAttribute("data-src")},n.onerror=function(){console.warn("Image failed to load:",r),t.removeAttribute("data-src")},n.src=r}}),F=!0}function pe(){L&&(L.style.display="flex",setTimeout(ue,100))}function G(){L&&(L.style.display="none")}U&&U.addEventListener("click",e=>{e.preventDefault(),pe()});L&&L.addEventListener("click",e=>{e.target===L&&G()});document.addEventListener("keydown",e=>{e.key==="Escape"&&L&&L.style.display==="flex"&&G()});j&&j.addEventListener("click",G);let O,$=!1;function R(e){try{return(JSON.parse(localStorage.getItem("myLibrary"))||[]).includes(e)}catch(t){return console.error("Error checking library:",t),!1}}function q(e){const t=document.getElementById("movie-modal"),r=document.getElementById("modal-poster");e.poster_path?r.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`:r.src="https://via.placeholder.com/300x450?text=No+Image",r.alt=e.title||e.name||"Film";const o=document.getElementById("modal-title");o.textContent=e.title||e.name||"No Title";const n=e.vote_average?e.vote_average.toFixed(1):"0.0",a=e.vote_count||0;document.getElementById("modal-rating").textContent=n,document.getElementById("modal-vote-count").textContent=a;const i=e.popularity?e.popularity.toFixed(1):"0.0";document.getElementById("modal-popularity").textContent=i;let l="No genre information";if(e.genres&&Array.isArray(e.genres))l=e.genres.map(y=>y.name).join(", ");else if(e.genre_ids&&Array.isArray(e.genre_ids)){const y={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};l=e.genre_ids.slice(0,3).map(c=>y[c]||"Unknown").join(", ")}document.getElementById("modal-genres").textContent=l,document.getElementById("modal-overview").textContent=e.overview||"No overview available. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";const h=document.querySelector(".add-to-library-btn");R(e.id)?h.textContent="Remove from my library":h.textContent="Add to my library";const v=h.cloneNode(!0);h.replaceWith(v),v.addEventListener("click",()=>{R(e.id)?(ye(e.id),v.textContent="Add to my library"):(me(e.id),v.textContent="Remove from my library")}),t.classList.remove("hidden"),t.classList.add("show"),t.style.display="flex",document.body.style.overflow="hidden",$=!0}function me(e){try{let t=JSON.parse(localStorage.getItem("myLibrary"))||[];t.includes(e)||(t.push(e),localStorage.setItem("myLibrary",JSON.stringify(t)));const r=document.querySelector(".add-to-library-btn");r.textContent="Added to Library!",r.style.background="var(--orange)",r.style.color="white",setTimeout(()=>{r.textContent="Remove from my library",r.style.background="transparent",r.style.color="var(--orange)"},100),document.dispatchEvent(new CustomEvent("libraryUpdated"))}catch(t){console.error("Error adding movie to library:",t),alert("Error adding movie to library. Please try again.")}}function ye(e){try{const r=(JSON.parse(localStorage.getItem("myLibrary"))||[]).filter(n=>n!==e);localStorage.setItem("myLibrary",JSON.stringify(r));const o=document.querySelector(".add-to-library-btn");o.textContent="Removed from Library!",o.style.background="var(--orange)",o.style.color="white",setTimeout(()=>{o.textContent="Add to my library",o.style.background="transparent",o.style.color="var(--orange)"},100),document.dispatchEvent(new CustomEvent("libraryUpdated"))}catch(t){console.error("Error removing movie from library:",t),alert("Error removing movie from library. Please try again.")}}function x(){const e=document.getElementById("movie-modal");e.classList.add("hidden"),e.classList.remove("show"),e.style.display="none",document.body.style.overflow="auto",$=!1}window.closeMovieModal=x;function ge(){$||(clearTimeout(O),O=setTimeout(()=>{$||x()},500))}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("movie-modal"),t=document.querySelector(".close-modal");t&&(t.onclick=o=>{o.stopPropagation(),x()}),e.onclick=o=>{o.target===e&&x()};const r=e.querySelector(".modal-content");r&&(r.onclick=o=>{o.stopPropagation()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&!e.classList.contains("hidden")&&x()}),e.addEventListener("mouseenter",()=>{clearTimeout(O)}),e.addEventListener("mouseleave",()=>{$||ge()})});const w="bca6557ef64423ebe36f13a6f80e4fa5",M="https://api.themoviedb.org",b="https://image.tmdb.org/t/p/",V=async()=>{const e=`${M}/3/trending/all/day?api_key=${w}`;return(await fetch(e)).json()},fe=async e=>{const t=`${M}/3/movie/${e}/videos?api_key=${w}`;return(await fetch(t)).json()},he=document.querySelector(".content"),J=document.querySelector(".trailer"),ve=({title:e,overview:t,name:r})=>{const o=document.createElement("div");return e!==void 0?o.innerHTML=`
    <h1 class="title">${e}</h1>
    <p class="description">
      ${t}
    </p>
    <button class="button">Watch Trailer</button>
    <button class="button2">More Details</button>
    `:o.innerHTML=`
    <h1 class="title">${r}</h1>
    <p class="description">
      ${t}
    </p>
    <button class="button">Watch Trailer</button>
    <button class="button2">More Details</button>
    `,o},be=({key:e})=>{const t=document.createElement("div");return t.innerHTML=`
<dialog class="video-modal">
  <form method="dialog">
    <button class="video-modal-close">X</button>
  </form>
  <iframe id="trailer-iframe" src="https://www.youtube.com/embed/${e}?enablejsapi=1&autoplay=1"
</iframe>
</dialog>
    `,t},Le=async e=>{const{results:t}=await V(),r=t.map(ve);he.replaceChildren(r[e]),document.querySelector("header").style.background=`linear-gradient(to right,hsla(0, 0%, 7%, 1), hsla(0, 0%, 7%, 0)),url('https://image.tmdb.org/t/p/original/${t[e].backdrop_path}') no-repeat center center / cover`,we(t[e].id),Ee(e)},we=async e=>{const{results:t}=await fe(e),r=document.querySelector(".button");if(t.length>0){const o=t[0].key;let n=document.querySelector(".video-modal"),a=document.getElementById("trailer-iframe");if(!n){const l=be({key:o});J.replaceChildren(l),n=document.querySelector(".video-modal"),a=document.getElementById("trailer-iframe")}const i=r.cloneNode(!0);r.replaceWith(i),i.addEventListener("click",function(){a.src=`https://www.youtube.com/embed/${o}?enablejsapi=1&autoplay=1`,n.showModal()}),n.addEventListener("click",l=>{l.target===n&&n.close()}),n.addEventListener("close",()=>{a&&(a.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),a.src=`https://www.youtube.com/embed/${o}?enablejsapi=1`)})}else{const o=r.cloneNode(!0);r.replaceWith(o),o.addEventListener("click",function(){var a=document.createElement("dialog");a.classList.add("trailer-error"),J.replaceChildren(a),a.innerHTML=`
      <form method="dialog">
        <button class="video-modal-close">X</button>
      </form>
      <p>OOPS... We are very sorry! But we couldn’t find the trailer.</p>
      <img src="../img/IMG_9881 1.png" alt="">
      `,a.showModal(),a.addEventListener("click",i=>{i.target===a&&a.close()})})}},Ee=async e=>{const{results:t}=await V(),r=t[e];document.querySelector(".button2").addEventListener("click",function(){q(r)})};Le(Math.floor(Math.random()*19));document.addEventListener("DOMContentLoaded",function(){const e=document.createElement("button");e.id="scroll-up-btn",e.className="scroll-up-btn",e.innerHTML=`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 14L12 9L17 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,e.setAttribute("aria-label","Scroll to top"),e.title="Back to top",document.body.appendChild(e),window.addEventListener("scroll",function(){const t=window.pageYOffset||document.documentElement.scrollTop,r=window.innerHeight,n=document.documentElement.scrollHeight-r*1.8;t>n?e.classList.add("show"):e.classList.remove("show")}),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})});const E=document.querySelector(".my-movies-select"),k=document.querySelector(".load-btn"),B=document.querySelector(".movie-list"),W=document.querySelector(".btn-link");let Z=new Map,C=[],I=[];async function Me(){try{(await T.get(`${M}/3/genre/movie/list?api_key=${w}&language=en-EN`)).data.genres.forEach(t=>{Z.set(t.id,t.name)})}catch(e){console.error("Error fetching movie genres:",e)}}function ke(){if(!E)return;E.innerHTML="";const e=document.createElement("option");e.value="all",e.textContent="All Genres",E.appendChild(e),Z.forEach((t,r)=>{const o=document.createElement("option");o.value=r,o.textContent=t,E.appendChild(o)})}async function Y(){const e=localStorage.getItem("myLibrary");let t=[];if(e)try{t=JSON.parse(e)}catch(o){console.error("Error parsing localStorage 'myLibrary' data:",o),t=[]}B.innerHTML="";const r=t.map(o=>T.get(`${M}/3/movie/${o}?api_key=${w}`).then(n=>n.data).catch(n=>(console.error(`Error fetching movie with ID ${o}:`,n),null)));C=(await Promise.all(r)).filter(o=>o!==null),N(C),xe()}function N(e){if(I=e,I.length===0){B.innerHTML="<p>No movies found for the selected genre.</p>";return}const t=`
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
    `,r=I.map(o=>{const{poster_path:n,title:a,release_date:i,vote_average:l}=o,h=i?i.split("-")[0]:"N/A",p=n?`${b}w500${n}`:"https://via.placeholder.com/500x750?text=No+Image",v=Math.round((l||0)/2),y=Array(5).fill(0).map((c,u)=>`
          <svg class="star ${u<v?"filled":""}" viewBox="0 0 24 24" >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>`).join("");return`
      <li class="movie-card">
        <img src="${p}" alt="${a}" />
        <div class="movie-info">
          <div class="movie-title">${(a||"").toUpperCase()}</div>
          <div class="movie-meta">${h}</div>
        </div>
        <div class="rating-stars">${y}</div>
      </li>
    `}).join("");B.innerHTML=t+r,Se()}function Se(){document.querySelectorAll(".movie-card").forEach((t,r)=>{t.addEventListener("click",()=>{const o=I[r];o&&q(o)})})}function xe(){k&&W&&(C.length===0?(k.classList.add("hiddenBtn","searchBtn"),k.textContent="Search movie",W.href="./catalog.html",B.innerHTML="<p class='noMovieInfo'>OOPS... <br>We are very sorry!<br>You don’t have any movies at your library.</p>"):(k.classList.remove("hiddenBtn","searchBtn"),k.textContent="Load more"))}function $e(){E&&E.addEventListener("change",e=>{const t=e.target.value;if(t==="all")N(C);else{const r=C.filter(o=>o.genres.some(n=>n.id===parseInt(t)));N(r)}})}document.addEventListener("DOMContentLoaded",()=>{document.body.id==="library-page"&&(document.addEventListener("libraryUpdated",()=>{Y()}),Me().then(()=>{ke(),Y(),$e()}))});const S=document.querySelector(".upcoming-movie");let K=new Map,P=null;async function Ce(){try{(await T.get(`${M}/3/genre/movie/list?api_key=${w}&language=en-EN`)).data.genres.forEach(t=>{K.set(t.id,t.name)})}catch(e){console.error("Error fetching movie genres:",e)}}function Ie(e){return e.map(t=>K.get(t)||"Unknown Genre").join(", ")}function _e(){const e=new Date,t=e.getFullYear(),r=e.getMonth(),o=new Date(t,r,1),n=new Date(t,r+1,0),a=i=>{const l=i.getFullYear(),h=String(i.getMonth()+1).padStart(2,"0"),p=String(i.getDate()).padStart(2,"0");return`${l}-${h}-${p}`};return{startDate:a(o),endDate:a(n)}}function z(e,t){X(t)?e.textContent="Remove from My Library":e.textContent="Add to My Library"}function Q(e){if(!S){console.log("Error: upcomingMovie not found.");return}if(!e){S.innerHTML=`<div>
        <p>OOPS...
          We are very sorry!
          But we couldn’t find any movie.</p>
      </div>`;return}P=e;let t,r,o,n;const a=window.innerWidth;a>=1280&&e.backdrop_path?(t=`${b}w1280${e.backdrop_path}`,r=` ${b}w780${e.backdrop_path} 780w,
        ${b}w1280${e.backdrop_path} 1280w,
        ${b}original${e.backdrop_path} 1920w
        `,o="(min-width: 1280px) 805px",n="movie-image-backdrop"):a>=768&&e.backdrop_path?(t=`${b}w780${e.backdrop_path}`,r=` ${b}w300${e.backdrop_path} 300w,
        ${b}w780${e.backdrop_path} 780w
        `,o=`(min-width: 768px) 704px,
        (max-width: 1279px) 704px`,n="movie-image-backdrop"):(t=e.poster_path?`${b}w342${e.poster_path}`:"https://via.placeholder.com/320x460?text=Görsel+Yok",r=` ${b}w185${e.poster_path} 185w,
        ${b}w342${e.poster_path} 342w,
        ${b}w500${e.poster_path} 500w
        `,o=`(max-width: 320px) 280px,
        (max-width: 767px) 280px`,n="movie-image-poster");const i=e.release_date?new Date(e.release_date).toLocaleDateString():"Unknown Release Date",l=e.vote_average?e.vote_average.toFixed(1):"-",h=e.vote_count?e.vote_count.toLocaleString():"-",p=Ie(e.genre_ids),v=e.title.toUpperCase();S.innerHTML=`
    <div class="upcoming-movie-container">
        <img src="${t}" 
            srcset="${r.trim()}" 
            sizes="${o.trim()}" 
            class="movieImage ${n}"
            alt="${e.title} Poster Görseli"/>
        <div class="upcoming-info">
            <p class="upcoming-title">${v}</p>
            <div class="upcoming-info-details">
                <div class="info-tablet-details">
                    <div class="info-detail">
                        <p class="info-p">Release Date</p>
                        <span class="info-span info-color">${i}</span>
                    </div>
                    <div class="info-detail">
                        <p class="info-p">Vote / Votes</p>
                        <div class="info-votes-container">
                          <span class="info-span info-votes">${l}</span>
                          <p> / </p>
                          <span class="info-span info-votes">${h}</span>
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
                        <span class="info-span">${p}</span>
                    </div>
                </div>
                
            </div>
            <div class="upcoming-about">
                <p class="info-p info-about">ABOUT</p>
                <p class="info-p">${e.overview}</p>
            </div>
            <button class="addLibrary" data-id="${e.id}">Add to My Library</button>
        </div>
    </div>`;const y=S.querySelector(".addLibrary");z(y,e.id),y.addEventListener("click",()=>{const c=parseInt(y.getAttribute("data-id"));let u=H();X(c)?(u=u.filter(d=>d!==c),localStorage.setItem("myLibrary",JSON.stringify(u))):Te(c),z(y,c)})}async function Be(){await Ce();const{startDate:e,endDate:t}=_e();try{const o=(await T.get(`${M}/3/discover/movie`,{params:{api_key:w,"primary_release_date.gte":e,"primary_release_date.lte":t,sort_by:"popularity.desc"}})).data.results;if(o&&o.length>0){const n=Math.floor(Math.random()*o.length),a=o[n];Q(a)}else S.innerHTML="<p>No upcoming movies found for this month.</p>"}catch(r){console.error("Error fetching upcoming movies:",r)}}function Te(e){let t=H();t=t||[],t.includes(e)||(t.push(e),localStorage.setItem("myLibrary",JSON.stringify(t)))}function H(){const e=localStorage.getItem("myLibrary");return e?JSON.parse(e):[]}function X(e){return H().includes(e)}function qe(e,t){let r;return function(...o){const n=this;clearTimeout(r),r=setTimeout(()=>e.apply(n,o),t)}}const Ae=qe(()=>{P?Q(P):upcomingMovieContainer.innerHTML=""},250);document.addEventListener("DOMContentLoaded",Be);window.addEventListener("resize",Ae);const ee={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDA5M2Y5MzcwZWVhYjYyZGRhZDEyMTViYTMzYzdkYyIsIm5iZiI6MTc0Mzc5MjUzNi41MTMsInN1YiI6IjY3ZjAyOTk4ZjVhODBhYTU0NTk5NTM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kD8CV4_F8L2GVoP85qrIIvPuEascfTURrC1KNOeDj4Q"}};let te={};function De(){return fetch("https://api.themoviedb.org/3/genre/movie/list?language=en-US",ee).then(e=>e.json()).then(e=>{e.genres.forEach(t=>{te[t.id]=t.name})})}function Oe(e){return e.map(t=>te[t]).filter(Boolean).slice(0,2)}document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme");const e=document.getElementById("weekly-cards"),t=document.getElementById("loader-weekly");De().then(()=>{fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",ee).then(r=>r.json()).then(r=>{const o=r.results.slice(0,3);e.innerHTML="",t.style.display="none",o.forEach(n=>{const a=n.poster_path?`https://image.tmdb.org/t/p/w500${n.poster_path}`:"https://via.placeholder.com/500x750?text=No+Image",i=n.title||n.name||"Untitled",l=Oe(n.genre_ids).join(", "),h=(n.release_date||n.first_air_date||"Unknown").split("-")[0],p=Math.round((n.vote_average||0)*10)/10,v=5,y=Math.floor(p/2),c=p%2>=1?1:0,u=v-y-c,d=[...Array(y).fill('<svg class="star-weekly full"><use xlink:href="#icon-star"></use></svg>'),...Array(c).fill('<svg class="star-weekly half"><use xlink:href="#icon-star-half"></use></svg>'),...Array(u).fill('<svg class="star-weekly empty"><use xlink:href="#icon-star-outline"></use></svg>')].join(""),s=document.createElement("div");s.className="card-weekly",s.style.backgroundImage=`url(${a})`,s.style.backgroundSize="cover",s.style.backgroundPosition="center",s.style.display="flex",s.style.objectFit="contain",s.style.alignItems="flex-end",s.style.borderRadius="10px",s.style.position="relative",s.style.overflow="hidden",s.style.boxShadow=" linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%)",s.innerHTML=`
            <div class="card-weekly-content">
            <div class="card-info">
              <h3>${i}</h3>
              <p>${l} | ${h}</p>
              </div>
              <span class="star-weekly">${d}</span>
            </div>
            
          `,e.appendChild(s),s.addEventListener("click",()=>{q(n)})})}).catch(r=>{console.error("Error fetching data:",r),e.innerHTML="<p>Error loading movies.</p>",t.style.display="none"})})});function Ne(){const e=document.getElementById("search-input"),t=document.getElementById("clear-btn"),r=document.getElementById("movie-list"),o=document.getElementById("search-form"),n=document.getElementById("pagination"),a=document.getElementById("year-select");if(!e||!t||!r||!o||!n||!a){console.error("Gerekli HTML elementleri bulunamadı! Şu elementlerin varlığını kontrol edin:"),console.error("- search-input"),console.error("- clear-btn"),console.error("- movie-list"),console.error("- search-form"),console.error("- pagination"),console.error("- year-select");return}let i=24,l=1;e.addEventListener("input",()=>{t.style.display=e.value?"inline":"none"}),t.addEventListener("click",()=>{e.value="",t.style.display="none",l=1,p()}),a.addEventListener("change",()=>{l=1,p()});function h(c,u,d){if(c){const s=new URL("https://api.themoviedb.org/3/search/movie");return s.searchParams.append("api_key",w),s.searchParams.append("query",c),s.searchParams.append("page",u),d&&s.searchParams.append("primary_release_year",d),s.toString()}else{const s=new URL("https://api.themoviedb.org/3/discover/movie");return s.searchParams.append("api_key",w),s.searchParams.append("sort_by","popularity.desc"),s.searchParams.append("page",u),d&&s.searchParams.append("primary_release_year",d),s.toString()}}async function p(){const c=e.value.trim(),u=a.value;try{const d=h(c,l,u),f=await(await fetch(d)).json();if(!f.results||f.results.length===0){r.innerHTML='<p style="grid-column: 1/-1; text-align: center;">Sonuç bulunamadı.</p>',i=1,y();return}i=f.total_pages>24?24:f.total_pages,v(f.results),y()}catch(d){console.error("Film verisi alınamadı:",d),r.innerHTML='<p style="grid-column: 1/-1; text-align: center;">Film verisi alınırken hata oluştu.</p>',i=1,y()}}o.addEventListener("submit",c=>{c.preventDefault(),l=1,p()});function v(c){const u=`
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
    `;r.innerHTML=u+c.map(s=>{const{poster_path:f,title:m,release_date:g,vote_average:ne}=s,oe=g?g.split("-")[0]:"N/A",re=f?`https://image.tmdb.org/t/p/w500${f}`:"https://via.placeholder.com/500x750?text=No+Image",ae=Math.round((ne||0)/2),se=Array(5).fill(0).map((Pe,ie)=>`
              <svg class="star ${ie<ae?"filled":""}" viewBox="0 0 24 24" >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>`).join("");return`
            <div class="movie-card">
              <img src="${re}" alt="${m}" />
              <div class="movie-info">
                <div class="movie-title">${m.toUpperCase()}</div>
                <div class="movie-meta">${oe}</div>
              </div>
              <div class="rating-stars">${se}</div>
            </div>
          `}).join(""),document.querySelectorAll(".movie-card").forEach((s,f)=>{s.addEventListener("click",()=>{const m=c[f];q(m)})})}function y(){n.innerHTML="";const c=3,u=document.createElement("button");u.textContent="<",u.classList.add("arrow-btn"),u.disabled=l===1,u.onclick=()=>{l>1&&(l--,p())},n.appendChild(u);let d,s;if(l+c-1>=i?(d=i-c+1,d<1&&(d=1),s=i):(d=l,s=d+c-1),d>1){const m=document.createElement("button");if(m.textContent="01",m.classList.add("page-btn"),m.onclick=()=>{l=1,p()},n.appendChild(m),d>2){const g=document.createElement("span");g.textContent="...",g.classList.add("ellipsis"),n.appendChild(g)}}for(let m=d;m<=s;m++){const g=document.createElement("button");g.textContent=m.toString().padStart(2,"0"),g.classList.add("page-btn"),m===l&&g.classList.add("active"),g.onclick=()=>{l=m,p()},n.appendChild(g)}if(s<i){const m=document.createElement("span");m.textContent="...",m.classList.add("ellipsis"),n.appendChild(m);const g=document.createElement("button");g.textContent=i.toString().padStart(2,"0"),g.classList.add("page-btn"),g.onclick=()=>{l=i,p()},n.appendChild(g)}const f=document.createElement("button");f.textContent=">",f.classList.add("arrow-btn"),f.disabled=l===i,f.onclick=()=>{l<i&&(l++,p())},n.appendChild(f)}p(),y()}document.addEventListener("DOMContentLoaded",Ne);
//# sourceMappingURL=non-critical-Dwpe7b4-.js.map
