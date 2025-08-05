import{a as A}from"./vendor-CJ4cOYKs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const ge=document.querySelector(".menu-button"),q=document.querySelector(".mobile-menu");ge.addEventListener("click",ye);function ye(){q.classList.add("displayB")}const F=document.querySelector("body"),B=document.querySelector(".toggle");let fe=localStorage.getItem("mode");fe==="light"&&(F.classList.add("light"),B.classList.add("active"));B.addEventListener("click",()=>(F.classList.toggle("light"),F.classList.contains("light")?localStorage.setItem("mode","light"):localStorage.setItem("mode","dark")));B.addEventListener("click",()=>B.classList.toggle("active"));document.addEventListener("mouseup",function(e){q.contains(e.target)||q.classList.remove("displayB")});const w=document.querySelector(".team-modal"),H=document.querySelector(".footer-link"),U=document.querySelector(".team-modal .modal-close-btn"),he=document.querySelector(".team-modal .team-container"),x=document.querySelector(".team-modal .member-card"),ve=[{name:"Abdullah Furkan Toy",role:"FullStack Developer",image:"",gitLink:"https://github.com/okazaki55",linkedLink:"https://www.linkedin.com/in/a-furkan-t/"},{name:"Aykut Şahinbaş",role:"FullStack Developer",image:"./img/aykut-sahinbas.jpeg",gitLink:"https://github.com/ayktshnbs",linkedLink:""},{name:"Burak Ezer",role:"FullStack Developer",image:"./img/burak-ezer.jpeg",gitLink:"https://github.com/burak-ezer",linkedLink:""},{name:"Çağla Karabudak Akın",role:"FullStack Developer",image:"./img/cagla-karabudak-akin.jpg",gitLink:"https://github.com/caglaakin",linkedLink:"https://www.linkedin.com/in/%C3%A7a%C4%9Fla-karabudak-ak%C4%B1n-b118b118a/"},{name:"Emre Ayvaz",role:"FullStack Developer",image:"./img/emre-ayvaz.jpeg",gitLink:"https://github.com/Emreayvz",linkedLink:"https://www.linkedin.com/in/emreayvz/"},{name:"Erdem İzcikılınç",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"İlker Şelimen",role:"FullStack Developer",image:"",gitLink:"https://github.com/ilkerthedev",linkedLink:"https://www.linkedin.com/in/ilker-%C5%9Felimen-206338266/"},{name:"Mehmet Öndüç",role:"FullStack Developer",image:"./img/mehmet-onduc.jpeg",gitLink:"https://github.com/Mehmetonduc",linkedLink:"https://www.linkedin.com/in/muhammet-mehmet-%C3%B6nd%C3%BC%C3%A7-b07582210/"},{name:"Özgür Korkmaz",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Umay Ece Mantar",role:"FullStack Developer",image:"./img/umay-ece-mantar.jpeg",gitLink:"https://github.com/cicikusdev",linkedLink:"https://www.linkedin.com/in/umayecemantar"}],be="./img/no-user-image.jpeg";function ke(e){x.innerHTML="",e.forEach(t=>{const o=t.image===""?be:t.image,n=document.createElement("li");n.classList.add("team-member"),n.innerHTML=`
      <img class="member-img" src="${o}" alt="${t.name}"/>
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
    `,x.appendChild(n)}),x.children.length>0&&he.appendChild(x)}function Le(){w&&(w.style.display="flex",ke(ve))}function j(){w&&(w.style.display="none")}H&&H.addEventListener("click",e=>{e.preventDefault(),Le()});w&&w.addEventListener("click",e=>{e.target===w&&j()});document.addEventListener("keydown",e=>{e.key==="Escape"&&w&&w.style.display==="flex"&&j()});U&&U.addEventListener("click",j);let N,$=!1;function z(e){try{return(JSON.parse(localStorage.getItem("myLibrary"))||[]).includes(e)}catch(t){return console.error("Error checking library:",t),!1}}function D(e){const t=document.getElementById("movie-modal"),o=document.getElementById("modal-poster");e.poster_path?o.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`:o.src="https://via.placeholder.com/300x450?text=No+Image",o.alt=e.title||e.name||"Film";const n=document.getElementById("modal-title");n.textContent=e.title||e.name||"No Title";const a=e.vote_average?e.vote_average.toFixed(1):"0.0",r=e.vote_count||0;document.getElementById("modal-rating").textContent=a,document.getElementById("modal-vote-count").textContent=r;const i=e.popularity?e.popularity.toFixed(1):"0.0";document.getElementById("modal-popularity").textContent=i;let s="No genre information";if(e.genres&&Array.isArray(e.genres))s=e.genres.map(g=>g.name).join(", ");else if(e.genre_ids&&Array.isArray(e.genre_ids)){const g={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};s=e.genre_ids.slice(0,3).map(y=>g[y]||"Unknown").join(", ")}document.getElementById("modal-genres").textContent=s,document.getElementById("modal-overview").textContent=e.overview||"No overview available. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";const p=document.querySelector(".add-to-library-btn");z(e.id)?p.textContent="Remove from my library":p.textContent="Add to my library";const d=p.cloneNode(!0);p.replaceWith(d),d.addEventListener("click",()=>{z(e.id)?(Ee(e.id),d.textContent="Add to my library"):(we(e.id),d.textContent="Remove from my library")}),t.classList.remove("hidden"),t.classList.add("show"),t.style.display="flex",document.body.style.overflow="hidden",$=!0}function we(e){try{let t=JSON.parse(localStorage.getItem("myLibrary"))||[];t.includes(e)||(t.push(e),localStorage.setItem("myLibrary",JSON.stringify(t)));const o=document.querySelector(".add-to-library-btn");o.textContent="Added to Library!",o.style.background="var(--orange)",o.style.color="white",setTimeout(()=>{o.textContent="Remove from my library",o.style.background="transparent",o.style.color="var(--orange)"},100),document.dispatchEvent(new CustomEvent("libraryUpdated"))}catch(t){console.error("Error adding movie to library:",t),alert("Error adding movie to library. Please try again.")}}function Ee(e){try{const o=(JSON.parse(localStorage.getItem("myLibrary"))||[]).filter(a=>a!==e);localStorage.setItem("myLibrary",JSON.stringify(o));const n=document.querySelector(".add-to-library-btn");n.textContent="Removed from Library!",n.style.background="var(--orange)",n.style.color="white",setTimeout(()=>{n.textContent="Add to my library",n.style.background="transparent",n.style.color="var(--orange)"},100),document.dispatchEvent(new CustomEvent("libraryUpdated"))}catch(t){console.error("Error removing movie from library:",t),alert("Error removing movie from library. Please try again.")}}function S(){const e=document.getElementById("movie-modal");e.classList.add("hidden"),e.classList.remove("show"),e.style.display="none",document.body.style.overflow="auto",$=!1}window.closeMovieModal=S;function Me(){$||(clearTimeout(N),N=setTimeout(()=>{$||S()},500))}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("movie-modal"),t=document.querySelector(".close-modal");t&&(t.onclick=n=>{n.stopPropagation(),S()}),e.onclick=n=>{n.target===e&&S()};const o=e.querySelector(".modal-content");o&&(o.onclick=n=>{n.stopPropagation()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&!e.classList.contains("hidden")&&S()}),e.addEventListener("mouseenter",()=>{clearTimeout(N)}),e.addEventListener("mouseleave",()=>{$||Me()})});const Z="bca6557ef64423ebe36f13a6f80e4fa5",K="https://api.themoviedb.org/3/",Q=async()=>{const e=`${K}trending/all/day?api_key=${Z}`;return(await fetch(e)).json()},Se=async e=>{const t=`${K}movie/${e}/videos?api_key=${Z}`;return(await fetch(t)).json()},$e=document.querySelector(".content"),R=document.querySelector(".trailer"),Ce=({title:e,overview:t,name:o})=>{const n=document.createElement("div");return e!==void 0?n.innerHTML=`
    <h1 class="title">${e}</h1>
    <p class="description">
      ${t}
    </p>
    <button class="button">Watch Trailer</button>
    <button class="button2">More Details</button>
    `:n.innerHTML=`
    <h1 class="title">${o}</h1>
    <p class="description">
      ${t}
    </p>
    <button class="button">Watch Trailer</button>
    <button class="button2">More Details</button>
    `,n},xe=({key:e})=>{const t=document.createElement("div");return t.innerHTML=`
<dialog class="video-modal">
  <form method="dialog">
    <button class="video-modal-close">X</button>
  </form>
  <iframe id="trailer-iframe" src="https://www.youtube.com/embed/${e}?enablejsapi=1&autoplay=1"
</iframe>
</dialog>
    `,t},_e=async e=>{const{results:t}=await Q(),o=t.map(Ce);$e.replaceChildren(o[e]),document.querySelector("header").style.background=`linear-gradient(to right,hsla(0, 0%, 7%, 1), hsla(0, 0%, 7%, 0)),url('https://image.tmdb.org/t/p/original/${t[e].backdrop_path}') no-repeat center center / cover`,Ie(t[e].id),Be(e)},Ie=async e=>{const{results:t}=await Se(e),o=document.querySelector(".button");if(t.length>0){const n=t[0].key;let a=document.querySelector(".video-modal"),r=document.getElementById("trailer-iframe");if(!a){const s=xe({key:n});R.replaceChildren(s),a=document.querySelector(".video-modal"),r=document.getElementById("trailer-iframe")}const i=o.cloneNode(!0);o.replaceWith(i),i.addEventListener("click",function(){r.src=`https://www.youtube.com/embed/${n}?enablejsapi=1&autoplay=1`,a.showModal()}),a.addEventListener("click",s=>{s.target===a&&a.close()}),a.addEventListener("close",()=>{r&&(r.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),r.src=`https://www.youtube.com/embed/${n}?enablejsapi=1`)})}else{const n=o.cloneNode(!0);o.replaceWith(n),n.addEventListener("click",function(){var r=document.createElement("dialog");r.classList.add("trailer-error"),R.replaceChildren(r),r.innerHTML=`
      <form method="dialog">
        <button class="video-modal-close">X</button>
      </form>
      <p>OOPS... We are very sorry! But we couldn’t find the trailer.</p>
      <img src="../img/IMG_9881 1.png" alt="">
      `,r.showModal(),r.addEventListener("click",i=>{i.target===r&&r.close()})})}},Be=async e=>{const{results:t}=await Q(),o=t[e];document.querySelector(".button2").addEventListener("click",function(){D(o)})};_e(Math.floor(Math.random()*19));document.addEventListener("DOMContentLoaded",function(){const e=document.createElement("button");e.id="scroll-up-btn",e.className="scroll-up-btn",e.innerHTML=`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 14L12 9L17 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,e.setAttribute("aria-label","Scroll to top"),e.title="Back to top",document.body.appendChild(e),window.addEventListener("scroll",function(){const t=window.pageYOffset||document.documentElement.scrollTop,o=window.innerHeight,a=document.documentElement.scrollHeight-o*1.8;t>a?e.classList.add("show"):e.classList.remove("show")}),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})});const X="bca6557ef64423ebe36f13a6f80e4fa5",ee="https://api.themoviedb.org",Te="https://image.tmdb.org/t/p/",E=document.querySelector(".my-movies-select"),M=document.querySelector(".load-btn"),T=document.querySelector(".movie-list"),Y=document.querySelector(".btn-link");let te=new Map,C=[],_=[];async function Ae(){try{(await A.get(`${ee}/3/genre/movie/list?api_key=${X}&language=en-EN`)).data.genres.forEach(t=>{te.set(t.id,t.name)})}catch(e){console.error("Error fetching movie genres:",e)}}function De(){if(!E)return;E.innerHTML="";const e=document.createElement("option");e.value="all",e.textContent="All Genres",E.appendChild(e),te.forEach((t,o)=>{const n=document.createElement("option");n.value=o,n.textContent=t,E.appendChild(n)})}async function J(){const e=localStorage.getItem("myLibrary");let t=[];if(e)try{t=JSON.parse(e)}catch(n){console.error("Error parsing localStorage 'myLibrary' data:",n),t=[]}T.innerHTML="";const o=t.map(n=>A.get(`${ee}/3/movie/${n}?api_key=${X}`).then(a=>a.data).catch(a=>(console.error(`Error fetching movie with ID ${n}:`,a),null)));C=(await Promise.all(o)).filter(n=>n!==null),O(C),Fe()}function O(e){if(_=e,_.length===0){T.innerHTML="<p>No movies found for the selected genre.</p>";return}const t=`
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
    `,o=_.map(n=>{const{poster_path:a,title:r,release_date:i,vote_average:s}=n,p=i?i.split("-")[0]:"N/A",k=a?`${Te}w500${a}`:"https://via.placeholder.com/500x750?text=No+Image",d=Math.round((s||0)/2),g=Array(5).fill(0).map((y,h)=>`
          <svg class="star ${h<d?"filled":""}" viewBox="0 0 24 24" >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>`).join("");return`
      <li class="movie-card">
        <img src="${k}" alt="${r}" />
        <div class="movie-info">
          <div class="movie-title">${(r||"").toUpperCase()}</div>
          <div class="movie-meta">${p}</div>
        </div>
        <div class="rating-stars">${g}</div>
      </li>
    `}).join("");T.innerHTML=t+o,qe()}function qe(){document.querySelectorAll(".movie-card").forEach((t,o)=>{t.addEventListener("click",()=>{const n=_[o];n&&D(n)})})}function Fe(){M&&Y&&(C.length===0?(M.classList.add("hiddenBtn","searchBtn"),M.textContent="Search movie",Y.href="./catalog.html",T.innerHTML="<p class='noMovieInfo'>OOPS... <br>We are very sorry!<br>You don’t have any movies at your library.</p>"):(M.classList.remove("hiddenBtn","searchBtn"),M.textContent="Load more"))}function Ne(){E&&E.addEventListener("change",e=>{const t=e.target.value;if(t==="all")O(C);else{const o=C.filter(n=>n.genres.some(a=>a.id===parseInt(t)));O(o)}})}document.addEventListener("DOMContentLoaded",()=>{document.body.id==="library-page"&&(document.addEventListener("libraryUpdated",()=>{J()}),Ae().then(()=>{De(),J(),Ne()}))});const ne="bca6557ef64423ebe36f13a6f80e4fa5",oe="https://api.themoviedb.org",L="https://image.tmdb.org/t/p/",I=document.querySelector(".upcoming-movie");let ae=new Map,P=null;async function Oe(){try{(await A.get(`${oe}/3/genre/movie/list?api_key=${ne}&language=en-EN`)).data.genres.forEach(t=>{ae.set(t.id,t.name)})}catch(e){console.error("Error fetching movie genres:",e)}}function Pe(e){return e.map(t=>ae.get(t)||"Unknown Genre").join(", ")}function je(){const e=new Date,t=e.getFullYear(),o=e.getMonth(),n=new Date(t,o,1),a=new Date(t,o+1,0),r=i=>{const s=i.getFullYear(),p=String(i.getMonth()+1).padStart(2,"0"),k=String(i.getDate()).padStart(2,"0");return`${s}-${p}-${k}`};return{startDate:r(n),endDate:r(a)}}function W(e,t){ie(t)?e.textContent="Remove from My Library":e.textContent="Add to My Library"}function re(e){if(!e){const y=document.createElement(`<div>
        <p>OOPS...
          We are very sorry!
          But we couldn’t find any movie.</p>
      </div>`);I.innerHTML=y;return}P=e;let t,o,n,a;const r=window.innerWidth;r>=1280&&e.backdrop_path?(t=`${L}w1280${e.backdrop_path}`,o=` ${L}w780${e.backdrop_path} 780w,
        ${L}w1280${e.backdrop_path} 1280w,
        ${L}original${e.backdrop_path} 1920w
        `,n="(min-width: 1280px) 805px",a="movie-image-backdrop"):r>=768&&e.backdrop_path?(t=`${L}w780${e.backdrop_path}`,o=` ${L}w300${e.backdrop_path} 300w,
        ${L}w780${e.backdrop_path} 780w
        `,n=`(min-width: 768px) 704px,
        (max-width: 1279px) 704px`,a="movie-image-backdrop"):(t=e.poster_path?`${L}w342${e.poster_path}`:"https://via.placeholder.com/320x460?text=Görsel+Yok",o=` ${L}w185${e.poster_path} 185w,
        ${L}w342${e.poster_path} 342w,
        ${L}w500${e.poster_path} 500w
        `,n=`(max-width: 320px) 280px,
        (max-width: 767px) 280px`,a="movie-image-poster");const i=e.release_date?new Date(e.release_date).toLocaleDateString():"Unknown Release Date",s=e.vote_average?e.vote_average.toFixed(1):"-",p=e.vote_count?e.vote_count.toLocaleString():"-",k=Pe(e.genre_ids),d=e.title.toUpperCase();I.innerHTML=`
    <div class="upcoming-movie-container">
        <img src="${t}" 
            srcset="${o.trim()}" 
            sizes="${n.trim()}" 
            class="movieImage ${a}"
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
                          <span class="info-span info-votes">${p}</span>
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
                        <span class="info-span">${k}</span>
                    </div>
                </div>
                
            </div>
            <div class="upcoming-about">
                <p class="info-p info-about">ABOUT</p>
                <p class="info-p">${e.overview}</p>
            </div>
            <button class="addLibrary" data-id="${e.id}">Add to My Library</button>
        </div>
    </div>`;const g=I.querySelector(".addLibrary");W(g,e.id),g.addEventListener("click",()=>{const y=parseInt(g.getAttribute("data-id"));let h=G();ie(y)?(h=h.filter(m=>m!==y),localStorage.setItem("myLibrary",JSON.stringify(h))):He(y),W(g,y)})}async function Ge(){await Oe();const{startDate:e,endDate:t}=je();try{const n=(await A.get(`${oe}/3/discover/movie`,{params:{api_key:ne,"primary_release_date.gte":e,"primary_release_date.lte":t,sort_by:"popularity.desc"}})).data.results;if(n&&n.length>0){const a=Math.floor(Math.random()*n.length),r=n[a];re(r)}else I.innerHTML="<p>No upcoming movies found for this month.</p>"}catch(o){console.error("Error fetching upcoming movies:",o)}}function He(e){let t=G();t=t||[],t.includes(e)||(t.push(e),localStorage.setItem("myLibrary",JSON.stringify(t)))}function G(){const e=localStorage.getItem("myLibrary");return e?JSON.parse(e):[]}function ie(e){return G().includes(e)}function Ue(e,t){let o;return function(...n){const a=this;clearTimeout(o),o=setTimeout(()=>e.apply(a,n),t)}}const ze=Ue(()=>{P?re(P):upcomingMovieContainer.innerHTML=""},250);document.addEventListener("DOMContentLoaded",Ge);window.addEventListener("resize",ze);const se={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDA5M2Y5MzcwZWVhYjYyZGRhZDEyMTViYTMzYzdkYyIsIm5iZiI6MTc0Mzc5MjUzNi41MTMsInN1YiI6IjY3ZjAyOTk4ZjVhODBhYTU0NTk5NTM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kD8CV4_F8L2GVoP85qrIIvPuEascfTURrC1KNOeDj4Q"}};let le={};function Re(){return fetch("https://api.themoviedb.org/3/genre/movie/list?language=en-US",se).then(e=>e.json()).then(e=>{e.genres.forEach(t=>{le[t.id]=t.name})})}function Ye(e){return e.map(t=>le[t]).filter(Boolean).slice(0,2)}document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme");const e=document.getElementById("weekly-cards"),t=document.getElementById("loader-weekly");Re().then(()=>{fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",se).then(o=>o.json()).then(o=>{const n=o.results.slice(0,3);e.innerHTML="",t.style.display="none",n.forEach(a=>{const r=a.poster_path?`https://image.tmdb.org/t/p/w500${a.poster_path}`:"https://via.placeholder.com/500x750?text=No+Image",i=a.title||a.name||"Untitled",s=Ye(a.genre_ids).join(", "),p=(a.release_date||a.first_air_date||"Unknown").split("-")[0],k=Math.round((a.vote_average||0)*10)/10,d=5,g=Math.floor(k/2),y=k%2>=1?1:0,h=d-g-y,m=[...Array(g).fill('<svg class="star-weekly full"><use xlink:href="#icon-star"></use></svg>'),...Array(y).fill('<svg class="star-weekly half"><use xlink:href="#icon-star-half"></use></svg>'),...Array(h).fill('<svg class="star-weekly empty"><use xlink:href="#icon-star-outline"></use></svg>')].join(""),l=document.createElement("div");l.className="card-weekly",l.style.backgroundImage=`url(${r})`,l.style.backgroundSize="cover",l.style.backgroundPosition="center",l.style.display="flex",l.style.objectFit="contain",l.style.alignItems="flex-end",l.style.borderRadius="10px",l.style.position="relative",l.style.overflow="hidden",l.style.boxShadow=" linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%)",l.innerHTML=`
            <div class="card-weekly-content">
            <div class="card-info">
              <h3>${i}</h3>
              <p>${s} | ${p}</p>
              </div>
              <span class="star-weekly">${m}</span>
            </div>
            
          `,e.appendChild(l),l.addEventListener("click",()=>{D(a)})})}).catch(o=>{console.error("Error fetching data:",o),e.innerHTML="<p>Error loading movies.</p>",t.style.display="none"})})});const V="bca6557ef64423ebe36f13a6f80e4fa5";function Je(){const e=document.getElementById("search-input"),t=document.getElementById("clear-btn"),o=document.getElementById("movie-list"),n=document.getElementById("search-form"),a=document.getElementById("pagination"),r=document.getElementById("year-select");if(!e||!t||!o||!n||!a||!r){console.error("Gerekli HTML elementleri bulunamadı! Sayfanızın doğru yüklendiğinden emin olun.");return}let i=24,s=1,p=[];e.addEventListener("input",()=>{t.style.display=e.value?"inline":"none"}),t.addEventListener("click",()=>{e.value="",t.style.display="none",s=1,d()}),r.addEventListener("change",()=>{s=1,d()});function k(m,l,u){if(m){const c=new URL("https://api.themoviedb.org/3/search/movie");return c.searchParams.append("api_key",V),c.searchParams.append("query",m),c.searchParams.append("page",l),u&&c.searchParams.append("primary_release_year",u),c.toString()}else{const c=new URL("https://api.themoviedb.org/3/discover/movie");return c.searchParams.append("api_key",V),c.searchParams.append("sort_by","popularity.desc"),c.searchParams.append("page",l),u&&c.searchParams.append("primary_release_year",u),c.toString()}}async function d(){const m=e.value.trim(),l=r.value;try{const u=k(m,s,l),f=await(await fetch(u)).json();if(!f.results||f.results.length===0){o.innerHTML='<p style="grid-column: 1/-1; text-align: center;">Sonuç bulunamadı.</p>',i=1,h();return}i=f.total_pages>24?24:f.total_pages,g(f.results),h()}catch(u){console.error("Film verisi alınamadı:",u),o.innerHTML='<p style="grid-column: 1/-1; text-align: center;">Film verisi alınırken hata oluştu.</p>',i=1,h()}}n.addEventListener("submit",m=>{m.preventDefault(),s=1,d()});function g(m){p=m;const l=`
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
    `;o.innerHTML=l+m.map(u=>{const{poster_path:c,title:f,release_date:v,vote_average:b}=u,ce=v?v.split("-")[0]:"N/A",de=c?`https://image.tmdb.org/t/p/w500${c}`:"https://via.placeholder.com/500x750?text=No+Image",me=Math.round((b||0)/2),ue=Array(5).fill(0).map((We,pe)=>`
              <svg class="star ${pe<me?"filled":""}" viewBox="0 0 24 24" >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>`).join("");return`
            <div class="movie-card" data-movie-id="${u.id}">
              <img src="${de}" alt="${f}" />
              <div class="movie-info">
                <div class="movie-title">${f.toUpperCase()}</div>
                <div class="movie-meta">${ce}</div>
              </div>
              <div class="rating-stars">${ue}</div>
            </div>
          `}).join(""),y()}function y(){document.querySelectorAll(".movie-card").forEach((l,u)=>{l.addEventListener("click",()=>{const c=p[u];c&&D(c)})})}function h(){a.innerHTML="";const m=3,l=document.createElement("button");l.textContent="<",l.classList.add("arrow-btn"),l.disabled=s===1,l.onclick=()=>{s>1&&(s--,d())},a.appendChild(l);let u=s,c=u+m-1;c>i&&(c=i);for(let v=u;v<=c;v++){const b=document.createElement("button");b.textContent=v.toString().padStart(2,"0"),b.classList.add("page-btn"),v===s&&b.classList.add("active"),b.onclick=()=>{s=v,d()},a.appendChild(b)}if(c<i){const v=document.createElement("span");v.textContent="...",v.classList.add("ellipsis"),a.appendChild(v);const b=document.createElement("button");b.textContent=i.toString().padStart(2,"0"),b.classList.add("page-btn"),b.onclick=()=>{s=i,d()},a.appendChild(b)}const f=document.createElement("button");f.textContent=">",f.classList.add("arrow-btn"),f.disabled=s===i,f.onclick=()=>{s<i&&(s++,d())},a.appendChild(f)}d(),h()}document.addEventListener("DOMContentLoaded",Je);
//# sourceMappingURL=styles-DlIaA27x.js.map
