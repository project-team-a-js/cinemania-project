import{a as H}from"./vendor-CJ4cOYKs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const ne=document.querySelector(".menu-button"),C=document.querySelector(".mobile-menu");ne.addEventListener("click",oe);function oe(){C.classList.add("displayB")}const x=document.querySelector("body"),_=document.querySelector(".toggle");let ae=localStorage.getItem("mode");ae==="light"&&(x.classList.add("light"),_.classList.add("active"));_.addEventListener("click",()=>(x.classList.toggle("light"),x.classList.contains("light")?localStorage.setItem("mode","light"):localStorage.setItem("mode","dark")));_.addEventListener("click",()=>_.classList.toggle("active"));document.addEventListener("mouseup",function(e){C.contains(e.target)||C.classList.remove("displayB")});const w=document.querySelector(".team-modal"),F=document.querySelector(".footer-link"),O=document.querySelector(".team-modal .modal-close-btn"),ie=document.querySelector(".team-modal .team-container"),$=document.querySelector(".team-modal .member-card"),re=[{name:"Abdullah Furkan Toy",role:"FullStack Developer",image:"",gitLink:"https://github.com/okazaki55",linkedLink:"https://www.linkedin.com/in/a-furkan-t/"},{name:"Aykut Şahinbaş",role:"FullStack Developer",image:"./img/aykut-sahinbas.jpeg",gitLink:"https://github.com/ayktshnbs",linkedLink:""},{name:"Burak Ezer",role:"FullStack Developer",image:"./img/burak-ezer.jpeg",gitLink:"https://github.com/burak-ezer",linkedLink:""},{name:"Çağla Karabudak Akın",role:"FullStack Developer",image:"./img/cagla-karabudak-akin.jpg",gitLink:"https://github.com/caglaakin",linkedLink:"https://www.linkedin.com/in/%C3%A7a%C4%9Fla-karabudak-ak%C4%B1n-b118b118a/"},{name:"Emre Ayvaz",role:"FullStack Developer",image:"./img/emre-ayvaz.jpeg",gitLink:"https://github.com/Emreayvz",linkedLink:"https://www.linkedin.com/in/emreayvz/"},{name:"Erdem İzcikılınç",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"İlker Şelimen",role:"FullStack Developer",image:"",gitLink:"https://github.com/ilkerthedev",linkedLink:"https://www.linkedin.com/in/ilker-%C5%9Felimen-206338266/"},{name:"Mehmet Öndüç",role:"FullStack Developer",image:"./img/mehmet-onduc.jpeg",gitLink:"https://github.com/Mehmetonduc",linkedLink:"https://www.linkedin.com/in/muhammet-mehmet-%C3%B6nd%C3%BC%C3%A7-b07582210/"},{name:"Özgür Korkmaz",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Umay Ece Mantar",role:"FullStack Developer",image:"./img/umay-ece-mantar.jpeg",gitLink:"https://github.com/cicikusdev",linkedLink:"https://www.linkedin.com/in/umayecemantar"}],se="../img/no-user-image.jpeg";function le(e){$.innerHTML="",e.forEach(t=>{const a=t.image===""?se:t.image,o=document.createElement("li");o.classList.add("team-member"),o.innerHTML=`
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
    `,$.appendChild(o)}),$.children.length>0&&ie.appendChild($)}function ce(){w&&(w.style.display="flex",le(re))}function B(){w&&(w.style.display="none")}F&&F.addEventListener("click",e=>{e.preventDefault(),ce()});w&&w.addEventListener("click",e=>{e.target===w&&B()});document.addEventListener("keydown",e=>{e.key==="Escape"&&w&&w.style.display==="flex"&&B()});O&&O.addEventListener("click",B);const q="bca6557ef64423ebe36f13a6f80e4fa5",z="https://api.themoviedb.org/3/",U=async()=>{const e=`${z}trending/all/day?api_key=${q}`;return(await fetch(e)).json()},de=async e=>{const t=`${z}movie/${e}/videos?api_key=${q}`;return(await fetch(t)).json()},me=document.querySelector(".content"),pe=document.querySelector(".detail"),P=document.querySelector(".trailer"),ue=({title:e,overview:t,name:a})=>{const o=document.createElement("div");return e!==void 0?o.innerHTML=`
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
    `,o},ge=({popularity:e,vote_average:t,vote_count:a,overview:o,poster_path:n,original_title:i})=>{const r=document.createElement("div");return r.innerHTML=`
  <dialog class="video-modal2">
  <form method="dialog">
    <button class="video-modal-close">X</button>
  </form>
  <div class="movie-detail-card">
    <img src="https://image.tmdb.org/t/p/original${n}" alt="" />
    <div>
      <div>
        <h1>${i}</h1>
      </div>
      <div class="box">
        <div>
          <h2>Vote / Votes</h2>
          <p>${t} / ${a}</p>
        </div>
        <div>
          <h2>Popularity</h2>
          <p>${e}</p>
        </div>
        <div><h2>About</h2></div>
        <p>${o}</p>
      </div>
    </div>
  </div>
</dialog>
  `,r},he=({key:e})=>{const t=document.createElement("div");return t.innerHTML=`
<dialog class="video-modal">
	<form method="dialog">
		<button class="video-modal-close">X</button>
	</form>
	<iframe src="https://www.youtube.com/embed/${e}">
</iframe>
</dialog>
    `,t},ye=async e=>{const{results:t}=await U(),a=t.map(ue);me.replaceChildren(a[e]),document.querySelector("header").style.background=`linear-gradient(to right,hsla(0, 0%, 7%, 1), hsla(0, 0%, 7%, 0)),url('https://image.tmdb.org/t/p/original/${t[e].backdrop_path}') no-repeat center center / cover`,fe(t[e].id),ve(e)},fe=async e=>{const{results:t}=await de(e),a=t.map(he),o=document.querySelector(".button");if(a[0]!=null){P.replaceChildren(a[0]);const n=document.querySelector(".video-modal");o.addEventListener("click",function(){n.showModal()})}else o.addEventListener("click",function(){var i=document.createElement("dialog");i.classList.add("trailer-error"),P.replaceChildren(i),i.innerHTML=`
      <form method="dialog">
		<button class="video-modal-close">X</button>
	</form>
  <p>OOPS... We are very sorry! But we couldn’t find the trailer.</p>
  <img src="../img/IMG_9881 1.png" alt="">
`,i.showModal()})},ve=async e=>{const{results:t}=await U(),a=t.map(ge);pe.replaceChildren(a[e]);const o=document.querySelector(".button2"),n=document.querySelector(".video-modal2");o.addEventListener("click",function(){n.showModal()})};ye(Math.floor(Math.random()*19));let I,E=!1;function D(e){const t=document.getElementById("movie-modal"),a=document.getElementById("modal-poster");e.poster_path?a.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`:a.src="https://via.placeholder.com/300x450?text=No+Image",a.alt=e.title||e.name||"Film";const o=document.getElementById("modal-title");o.textContent=e.title||e.name||"No Title";const n=e.vote_average?e.vote_average.toFixed(1):"0.0",i=e.vote_count||0;document.getElementById("modal-rating").textContent=n,document.getElementById("modal-vote-count").textContent=i;const r=e.popularity?e.popularity.toFixed(1):"0.0";document.getElementById("modal-popularity").textContent=r;let l="No genre information";if(e.genres&&Array.isArray(e.genres))l=e.genres.map(u=>u.name).join(", ");else if(e.genre_ids&&Array.isArray(e.genre_ids)){const u={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};l=e.genre_ids.slice(0,3).map(g=>u[g]||"Unknown").join(", ")}document.getElementById("modal-genres").textContent=l,document.getElementById("modal-overview").textContent=e.overview||"No overview available.";const p=document.querySelector(".add-to-library-btn");p&&(p.replaceWith(p.cloneNode(!0)),document.querySelector(".add-to-library-btn").addEventListener("click",()=>{be(e)})),t.classList.remove("hidden"),t.classList.add("show"),t.style.display="flex",document.body.style.overflow="hidden",E=!0}function be(e){try{let t=JSON.parse(localStorage.getItem("watchedMovies"))||[];if(t.find(i=>i.id===e.id)){alert("This movie is already in your library!");return}t.push(e),localStorage.setItem("watchedMovies",JSON.stringify(t));const o=document.querySelector(".add-to-library-btn"),n=o.textContent;o.textContent="Added to Library!",o.style.background="var(--orange)",o.style.color="white",setTimeout(()=>{o.textContent=n,o.style.background="transparent",o.style.color="var(--orange)"},2e3)}catch(t){console.error("Error adding movie to library:",t),alert("Error adding movie to library. Please try again.")}}function M(){const e=document.getElementById("movie-modal");e.classList.add("hidden"),e.classList.remove("show"),e.style.display="none",document.body.style.overflow="auto",E=!1}window.closeMovieModal=M;function ke(){E||(clearTimeout(I),I=setTimeout(()=>{E||M()},500))}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("movie-modal"),t=document.querySelector(".close-modal");t&&(t.onclick=o=>{o.stopPropagation(),M()}),e.onclick=o=>{o.target===e&&M()};const a=e.querySelector(".modal-content");a&&(a.onclick=o=>{o.stopPropagation()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&!e.classList.contains("hidden")&&M()}),e.addEventListener("mouseenter",()=>{clearTimeout(I)}),e.addEventListener("mouseleave",()=>{E||ke()})});document.addEventListener("DOMContentLoaded",function(){const e=document.createElement("button");e.id="scroll-up-btn",e.className="scroll-up-btn",e.innerHTML=`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 14L12 9L17 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,e.setAttribute("aria-label","Scroll to top"),e.title="Back to top",document.body.appendChild(e),window.addEventListener("scroll",function(){const t=window.pageYOffset||document.documentElement.scrollTop,a=window.innerHeight,n=document.documentElement.scrollHeight-a*1.8;t>n?e.classList.add("show"):e.classList.remove("show")}),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("filmGrid"),t=document.getElementById("emptyMessage");a(),e.addEventListener("click",n=>{const i=n.target.closest(".film-card");if(i){const r=i.dataset.id,p=(JSON.parse(localStorage.getItem("myLibrary"))||[]).find(u=>u.id.toString()===r);p?D(p):console.log(`Film ID'si ${r} olan film bulunamadı.`)}});function a(){const n=JSON.parse(localStorage.getItem("myLibrary"))||[];e.innerHTML="",n.length===0?t.classList.remove("hidden"):(t.classList.add("hidden"),n.forEach(i=>{const r=o(i);e.insertAdjacentHTML("beforeend",r)}))}function o(n){const i=`https://image.tmdb.org/t/p/w500/${n.poster_path}`,r=n.genres?n.genres.map(l=>l.name).join(", "):"Tür bilgisi yok";return`
            <div class="film-card" data-id="${n.id}">
                <img src="${i}" alt="${n.title}" loading="lazy">
                <div class="film-info">
                    <h3 class="film-title">${n.title}</h3>
                    <p class="film-meta">${r} | ${n.release_date?n.release_date.substring(0,4):"Tarih yok"}</p>
                    <span class="film-rating">${n.vote_average?n.vote_average.toFixed(1):"0.0"}</span>
                </div>
            </div>
        `}});const G="bca6557ef64423ebe36f13a6f80e4fa5",Y="https://api.themoviedb.org",b="https://image.tmdb.org/t/p/",S=document.querySelector(".upcoming-movie");let J=new Map,T=null;async function Le(){try{(await H.get(`${Y}/3/genre/movie/list?api_key=${G}&language=en-EN`)).data.genres.forEach(t=>{J.set(t.id,t.name)})}catch(e){console.error("Error fetching movie genres:",e)}}function we(e){return e.map(t=>J.get(t)||"Unknown Genre").join(", ")}function Me(){const e=new Date,t=e.getFullYear(),a=e.getMonth(),o=new Date(t,a,1),n=new Date(t,a+1,0),i=r=>{const l=r.getFullYear(),p=String(r.getMonth()+1).padStart(2,"0"),u=String(r.getDate()).padStart(2,"0");return`${l}-${p}-${u}`};return{startDate:i(o),endDate:i(n)}}function j(e,t){W(t)?e.textContent="Remove from My Library":e.textContent="Add to My Library"}function R(e){if(!e){const v=document.createElement(`<div>
        <p>OOPS...
          We are very sorry!
          But we couldn’t find any movie.</p>
      </div>`);S.innerHTML=v;return}T=e;let t,a,o,n;const i=window.innerWidth;i>=1280&&e.backdrop_path?(t=`${b}w1280${e.backdrop_path}`,a=` ${b}w780${e.backdrop_path} 780w,
        ${b}w1280${e.backdrop_path} 1280w,
        ${b}original${e.backdrop_path} 1920w
        `,o="(min-width: 1280px) 805px",n="movie-image-backdrop"):i>=768&&e.backdrop_path?(t=`${b}w780${e.backdrop_path}`,a=` ${b}w300${e.backdrop_path} 300w,
        ${b}w780${e.backdrop_path} 780w
        `,o=`(min-width: 768px) 704px,
        (max-width: 1279px) 704px`,n="movie-image-backdrop"):(t=e.poster_path?`${b}w342${e.poster_path}`:"https://via.placeholder.com/320x460?text=Görsel+Yok",a=` ${b}w185${e.poster_path} 185w,
        ${b}w342${e.poster_path} 342w,
        ${b}w500${e.poster_path} 500w
        `,o=`(max-width: 320px) 280px,
        (max-width: 767px) 280px`,n="movie-image-poster");const r=e.release_date?new Date(e.release_date).toLocaleDateString():"Unknown Release Date",l=e.vote_average?e.vote_average.toFixed(1):"-",p=e.vote_count?e.vote_count.toLocaleString():"-",u=we(e.genre_ids),g=e.title.toUpperCase();S.innerHTML=`
    <div class="upcoming-movie-container">
        <img src="${t}" 
            srcset="${a.trim()}" 
            sizes="${o.trim()}" 
            class="movieImage ${n}"
            alt="${e.title} Poster Görseli"/>
        <div class="upcoming-info">
            <p class="upcoming-title">${g}</p>
            <div class="upcoming-info-details">
                <div class="info-tablet-details">
                    <div class="info-detail">
                        <p class="info-p">Release Date</p>
                        <span class="info-span info-color">${r}</span>
                    </div>
                    <div class="info-detail">
                        <p class="info-p">Vote / Votes</p>
                        <div class="info-votes-container">
                          <span class="info-span info-votes">${l}</span>
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
                        <span class="info-span">${u}</span>
                    </div>
                </div>
                
            </div>
            <div class="upcoming-about">
                <p class="info-p info-about">ABOUT</p>
                <p class="info-p">${e.overview}</p>
            </div>
            <button class="addLibrary" data-id="${e.id}">Add to My Library</button>
        </div>
    </div>`;const L=S.querySelector(".addLibrary");j(L,e.id),L.addEventListener("click",()=>{const v=parseInt(L.getAttribute("data-id"));let k=A();W(v)?(k=k.filter(d=>d!==v),localStorage.setItem("myLibrary",JSON.stringify(k))):$e(v),j(L,v)})}async function Ee(){await Le();const{startDate:e,endDate:t}=Me();try{const o=(await H.get(`${Y}/3/discover/movie`,{params:{api_key:G,"primary_release_date.gte":e,"primary_release_date.lte":t,sort_by:"popularity.desc"}})).data.results;if(o&&o.length>0){const n=Math.floor(Math.random()*o.length),i=o[n];R(i)}else S.innerHTML="<p>No upcoming movies found for this month.</p>"}catch(a){console.error("Error fetching upcoming movies:",a)}}function $e(e){let t=A();t=t||[],t.includes(e)||(t.push(e),localStorage.setItem("myLibrary",JSON.stringify(t)))}function A(){const e=localStorage.getItem("myLibrary");return e?JSON.parse(e):[]}function W(e){return A().includes(e)}function Se(e,t){let a;return function(...o){const n=this;clearTimeout(a),a=setTimeout(()=>e.apply(n,o),t)}}const _e=Se(()=>{T?R(T):upcomingMovieContainer.innerHTML=""},250);document.addEventListener("DOMContentLoaded",Ee);window.addEventListener("resize",_e);const V={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDA5M2Y5MzcwZWVhYjYyZGRhZDEyMTViYTMzYzdkYyIsIm5iZiI6MTc0Mzc5MjUzNi41MTMsInN1YiI6IjY3ZjAyOTk4ZjVhODBhYTU0NTk5NTM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kD8CV4_F8L2GVoP85qrIIvPuEascfTURrC1KNOeDj4Q"}};let Z={};function Ce(){return fetch("https://api.themoviedb.org/3/genre/movie/list?language=en-US",V).then(e=>e.json()).then(e=>{e.genres.forEach(t=>{Z[t.id]=t.name})})}function xe(e){return e.map(t=>Z[t]).filter(Boolean).slice(0,2)}document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme");const e=document.getElementById("weekly-cards"),t=document.getElementById("loader-weekly");Ce().then(()=>{fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",V).then(a=>a.json()).then(a=>{const o=a.results.slice(0,3);e.innerHTML="",t.style.display="none",o.forEach(n=>{const i=n.poster_path?`https://image.tmdb.org/t/p/w500${n.poster_path}`:"https://via.placeholder.com/500x750?text=No+Image",r=n.title||n.name||"Untitled",l=xe(n.genre_ids).join(", "),p=(n.release_date||n.first_air_date||"Unknown").split("-")[0],u=Math.round((n.vote_average||0)*10)/10,g=5,L=Math.floor(u/2),v=u%2>=1?1:0,k=g-L-v,d=[...Array(L).fill('<svg class="star-weekly full"><use xlink:href="#icon-star"></use></svg>'),...Array(v).fill('<svg class="star-weekly half"><use xlink:href="#icon-star-half"></use></svg>'),...Array(k).fill('<svg class="star-weekly empty"><use xlink:href="#icon-star-outline"></use></svg>')].join(""),s=document.createElement("div");s.className="card-weekly",s.style.backgroundImage=`url(${i})`,s.style.backgroundSize="cover",s.style.backgroundPosition="center",s.style.display="flex",s.style.objectFit="contain",s.style.alignItems="flex-end",s.style.borderRadius="10px",s.style.position="relative",s.style.overflow="hidden",s.style.boxShadow=" linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%)",s.innerHTML=`
            <div class="card-weekly-content">
            <div class="card-info">
              <h3>${r}</h3>
              <p>${l} | ${p}</p>
              </div>
              <span class="star-weekly">${d}</span>
            </div>
            
          `,e.appendChild(s),s.addEventListener("click",()=>{D(n)})})}).catch(a=>{console.error("Error fetching data:",a),e.innerHTML="<p>Error loading movies.</p>",t.style.display="none"})})});const N="bca6557ef64423ebe36f13a6f80e4fa5";function Ie(){const e=document.getElementById("search-input"),t=document.getElementById("clear-btn"),a=document.getElementById("movie-list"),o=document.getElementById("search-form"),n=document.getElementById("pagination"),i=document.getElementById("year-select");if(!e||!t||!a||!o||!n||!i){console.error("Gerekli HTML elementleri bulunamadı! Sayfanızın doğru yüklendiğinden emin olun.");return}let r=24,l=1,p=[];e.addEventListener("input",()=>{t.style.display=e.value?"inline":"none"}),t.addEventListener("click",()=>{e.value="",t.style.display="none",l=1,g()}),i.addEventListener("change",()=>{l=1,g()});function u(d,s,m){if(d){const c=new URL("https://api.themoviedb.org/3/search/movie");return c.searchParams.append("api_key",N),c.searchParams.append("query",d),c.searchParams.append("page",s),m&&c.searchParams.append("primary_release_year",m),c.toString()}else{const c=new URL("https://api.themoviedb.org/3/discover/movie");return c.searchParams.append("api_key",N),c.searchParams.append("sort_by","popularity.desc"),c.searchParams.append("page",s),m&&c.searchParams.append("primary_release_year",m),c.toString()}}async function g(){const d=e.value.trim(),s=i.value;try{const m=u(d,l,s),h=await(await fetch(m)).json();if(!h.results||h.results.length===0){a.innerHTML='<p style="grid-column: 1/-1; text-align: center;">Sonuç bulunamadı.</p>',r=1,k();return}r=h.total_pages>24?24:h.total_pages,L(h.results),k()}catch(m){console.error("Film verisi alınamadı:",m),a.innerHTML='<p style="grid-column: 1/-1; text-align: center;">Film verisi alınırken hata oluştu.</p>',r=1,k()}}o.addEventListener("submit",d=>{d.preventDefault(),l=1,g()});function L(d){p=d;const s=`
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
    `;a.innerHTML=s+d.map(m=>{const{poster_path:c,title:h,release_date:y,vote_average:f}=m,K=y?y.split("-")[0]:"N/A",X=c?`https://image.tmdb.org/t/p/w500${c}`:"https://via.placeholder.com/500x750?text=No+Image",Q=Math.round((f||0)/2),ee=Array(5).fill(0).map((Te,te)=>`
              <svg class="star ${te<Q?"filled":""}" viewBox="0 0 24 24" >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>`).join("");return`
            <div class="movie-card" data-movie-id="${m.id}">
              <img src="${X}" alt="${h}" />
              <div class="movie-info">
                <div class="movie-title">${h.toUpperCase()}</div>
                <div class="movie-meta">${K}</div>
              </div>
              <div class="rating-stars">${ee}</div>
            </div>
          `}).join(""),v()}function v(){document.querySelectorAll(".movie-card").forEach((s,m)=>{s.addEventListener("click",()=>{const c=p[m];c&&D(c)})})}function k(){n.innerHTML="";const d=3,s=document.createElement("button");s.textContent="<",s.classList.add("arrow-btn"),s.disabled=l===1,s.onclick=()=>{l>1&&(l--,g())},n.appendChild(s);let m=l,c=m+d-1;c>r&&(c=r);for(let y=m;y<=c;y++){const f=document.createElement("button");f.textContent=y.toString().padStart(2,"0"),f.classList.add("page-btn"),y===l&&f.classList.add("active"),f.onclick=()=>{l=y,g()},n.appendChild(f)}if(c<r){const y=document.createElement("span");y.textContent="...",y.classList.add("ellipsis"),n.appendChild(y);const f=document.createElement("button");f.textContent=r.toString().padStart(2,"0"),f.classList.add("page-btn"),f.onclick=()=>{l=r,g()},n.appendChild(f)}const h=document.createElement("button");h.textContent=">",h.classList.add("arrow-btn"),h.disabled=l===r,h.onclick=()=>{l<r&&(l++,g())},n.appendChild(h)}g(),k()}document.addEventListener("DOMContentLoaded",Ie);
//# sourceMappingURL=styles-3YJtJz79.js.map
