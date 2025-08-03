import{a as _}from"./vendor-CJ4cOYKs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const z=document.querySelector(".menu-button"),y=document.querySelector(".mobile-menu");z.addEventListener("click",B);function B(){y.style.display!="none"?y.style.display="block":y.style.display="none",console.log(y.style.display)}const $=document.querySelector("body"),v=document.querySelector(".toggle");let N=localStorage.getItem("mode");N==="light"&&($.classList.add("light"),v.classList.add("active"));v.addEventListener("click",()=>($.classList.toggle("light"),$.classList.contains("light")?localStorage.setItem("mode","light"):localStorage.setItem("mode","dark")));v.addEventListener("click",()=>v.classList.toggle("active"));const f=document.querySelector(".modal"),j=document.querySelector(".footer-link"),G=document.querySelector(".modal-close-btn"),H=document.querySelector(".team-container"),L=document.querySelector(".member-card"),Y=[{name:"Abdullah Furkan Toy",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Aykut Şahinbaş",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Burak Ezer",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Çağla Karabudak Akın",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Emre Ayvaz",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Erdem İzcikılınç",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"İlker Şelimen",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Mehmet Öndüç",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Özgür Korkmaz",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Umay Ece Mantar",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""}];function J(e){L.innerHTML="",e.forEach(t=>{const a=document.createElement("li");a.classList.add("team-member"),a.innerHTML=`
      <img class="member-img" src="${t.image}" alt="${t.name}"/>
      <div class="member-info">
        <p class="member-p">${t.name}</p>
        <p class="member-p2">${t.role}</p>
        <div class="member-link-container">
          <a class="member-link" href="${t.linkedLink||"#"}">
            <svg class="link-svg" width="30" height="30">
              <use href="./img/upFooIcons.svg#creators-linkedin"></use>
            </svg>
          </a>
          <a class="member-link" href="${t.gitLink||"#"}">
            <svg class="link-svg" width="30" height="30">
              <use href="./img/upFooIcons.svg#creators-github"></use>
            </svg>
          </a>
        </div>
      </div>
    `,L.appendChild(a),H.appendChild(L)})}function P(){f.style.display="flex",J(Y)}function w(){f.style.display="none"}j.addEventListener("click",e=>{e.preventDefault(),P()});f.addEventListener("click",e=>{e.target===f&&w()});document.addEventListener("keydown",e=>{e.key==="Escape"&&f.style.display==="flex"&&w()});G.addEventListener("click",w);const D="bca6557ef64423ebe36f13a6f80e4fa5",I="https://api.themoviedb.org/3/",T=async()=>{const e=`${I}trending/all/day?api_key=${D}`;return(await fetch(e)).json()},R=async e=>{const t=`${I}movie/${e}/videos?api_key=${D}`;return(await fetch(t)).json()},W=document.querySelector(".content"),Z=document.querySelector(".detail"),V=document.querySelector(".trailer"),K=({title:e,overview:t,name:a})=>{const s=document.createElement("div");return e!==void 0?s.innerHTML=`
  	<h1 class="title">${e}</h1>
    <p class="description">
      ${t}
    </p>
    <button class="button">Watch Trailer</button>
    <button class="button2">More Details</button>
    `:s.innerHTML=`
  	<h1 class="title">${a}</h1>
    <p class="description">
      ${t}
    </p>
    <button class="button">Watch Trailer</button>
    <button class="button2">More Details</button>
    `,s},Q=({id:e,vote_average:t,vote_count:a,overview:s,poster_path:n,popularity:o})=>{const r=document.createElement("div");return r.innerHTML=`
  	
    <dialog class="video-modal2">
	<form method="dialog">
		<button class="video-modal-close">Close</button>
	</form>
  <img style="width: 40px;" src="https://image.tmdb.org/t/p/original${n}" alt="">
	<pre>${e}
  ${t}
  ${a}
  ${s}
  ${o}</pre>
</dialog>
    `,r},X=({key:e})=>{const t=document.createElement("div");return t.innerHTML=`
<dialog class="video-modal">
	<form method="dialog">
		<button class="video-modal-close">Close</button>
	</form>
	<iframe src="https://www.youtube.com/embed/${e}">
</iframe>
</dialog>
    `,t},ee=async e=>{const{results:t}=await T(),a=t.map(K);W.replaceChildren(a[e]),document.querySelector("header").style.background=`linear-gradient(to right,hsla(0, 0%, 7%, 1), hsla(0, 0%, 7%, 0)),url('https://image.tmdb.org/t/p/original/${t[e].backdrop_path}') no-repeat center center / cover`,te(t[e].id),ne(e)},te=async e=>{const{results:t}=await R(e),a=t.map(X);V.replaceChildren(a[0]);const s=document.querySelector(".button"),n=document.querySelector(".video-modal");s.addEventListener("click",function(){n.showModal()})},ne=async e=>{const{results:t}=await T(),a=t.map(Q);Z.replaceChildren(a[e]);const s=document.querySelector(".button2"),n=document.querySelector(".video-modal2");s.addEventListener("click",function(){n.showModal()})};ee(Math.floor(Math.random()*19));document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("filmGrid"),t=document.getElementById("emptyMessage");a(),e.addEventListener("click",n=>{const o=n.target.closest(".film-card");if(o){const r=o.dataset.id;console.log(`Film ID'si ${r} olan kart tıklandı.`)}});function a(){const n=JSON.parse(localStorage.getItem("myLibrary"))||[];e.innerHTML="",n.length===0?t.classList.remove("hidden"):(t.classList.add("hidden"),n.forEach(o=>{const r=s(o);e.insertAdjacentHTML("beforeend",r)}))}function s(n){const o=`https://image.tmdb.org/t/p/w500/${n.poster_path}`,r=n.genres?n.genres.map(d=>d.name).join(", "):"Tür bilgisi yok";return`
            <div class="film-card" data-id="${n.id}">
                <img src="${o}" alt="${n.title}" loading="lazy">
                <div class="film-info">
                    <h3 class="film-title">${n.title}</h3>
                    <p class="film-meta">${r} | ${n.release_date?n.release_date.substring(0,4):"Tarih yok"}</p>
                    <span class="film-rating">${n.vote_average?n.vote_average.toFixed(1):"0.0"}</span>
                </div>
            </div>
        `}});const x="bca6557ef64423ebe36f13a6f80e4fa5",C="https://api.themoviedb.org",l="https://image.tmdb.org/t/p/",h=document.querySelector(".upcoming-movie");let A=new Map,M=null;async function ae(){try{(await _.get(`${C}/3/genre/movie/list?api_key=${x}&language=en-EN`)).data.genres.forEach(t=>{A.set(t.id,t.name)})}catch(e){console.error("Error fetching movie genres:",e)}}function oe(e){return e.map(t=>A.get(t)||"Unknown Genre").join(", ")}function se(){const e=new Date,t=e.getFullYear(),a=e.getMonth(),s=new Date(t,a,1),n=new Date(t,a+1,0),o=r=>{const d=r.getFullYear(),m=String(r.getMonth()+1).padStart(2,"0"),u=String(r.getDate()).padStart(2,"0");return`${d}-${m}-${u}`};return{startDate:o(s),endDate:o(n)}}function E(e,t){O(t)?e.textContent="Remove from My Library":e.textContent="Add to My Library"}function F(e){if(!e){const c=document.createElement(`<div>
        <p>OOPS...
          We are very sorry!
          But we couldn’t find any movie.</p>
      </div>`);h.innerHTML=c;return}M=e;let t,a,s,n;const o=window.innerWidth;o>=1280&&e.backdrop_path?(t=`${l}w1280${e.backdrop_path}`,a=` ${l}w780${e.backdrop_path} 780w,
        ${l}w1280${e.backdrop_path} 1280w,
        ${l}original${e.backdrop_path} 1920w
        `,s="(min-width: 1280px) 805px",n="movie-image-backdrop"):o>=768&&e.backdrop_path?(t=`${l}w780${e.backdrop_path}`,a=` ${l}w300${e.backdrop_path} 300w,
        ${l}w780${e.backdrop_path} 780w
        `,s=`(min-width: 768px) 704px,
        (max-width: 1279px) 704px`,n="movie-image-backdrop"):(t=e.poster_path?`${l}w342${e.poster_path}`:"https://via.placeholder.com/320x460?text=Görsel+Yok",a=` ${l}w185${e.poster_path} 185w,
        ${l}w342${e.poster_path} 342w,
        ${l}w500${e.poster_path} 500w
        `,s=`(max-width: 320px) 280px,
        (max-width: 767px) 280px`,n="movie-image-poster");const r=e.release_date?new Date(e.release_date).toLocaleDateString():"Unknown Release Date",d=e.vote_average?e.vote_average.toFixed(1):"",m=e.vote_count?e.vote_count.toLocaleString():"",u=oe(e.genre_ids),k=e.title.toUpperCase();h.innerHTML=`
    <div class="upcoming-movie-container">
        <img src="${t}" 
            srcset="${a.trim()}" 
            sizes="${s.trim()}" 
            class="movieImage ${n}"
            alt="${e.title} Poster Görseli"/>
        <div class="upcoming-info">
            <p class="upcoming-title">${k}</p>
            <div class="upcoming-info-details">
                <div class="info-tablet-details">
                    <div class="info-detail">
                        <p class="info-p">Release Date</p>
                        <span class="info-span info-color">${r}</span>
                    </div>
                    <div class="info-detail">
                        <p class="info-p">Vote / Votes</p>
                        <div class="info-votes-container">
                          <span class="info-span info-votes">${d}</span>
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
    </div>`;const p=h.querySelector(".addLibrary");E(p,e.id),p.addEventListener("click",()=>{const c=parseInt(p.getAttribute("data-id"));let g=S();O(c)?(g=g.filter(b=>b!==c),localStorage.setItem("myLibrary",JSON.stringify(g))):ie(c),E(p,c)})}async function re(){await ae();const{startDate:e,endDate:t}=se();try{const s=(await _.get(`${C}/3/discover/movie`,{params:{api_key:x,"primary_release_date.gte":e,"primary_release_date.lte":t,sort_by:"popularity.desc"}})).data.results;if(s&&s.length>0){const n=Math.floor(Math.random()*s.length),o=s[n];F(o)}else h.innerHTML="<p>No upcoming movies found for this month.</p>"}catch(a){console.error("Error fetching upcoming movies:",a)}}function ie(e){let t=S();t=t||[],t.includes(e)||(t.push(e),localStorage.setItem("myLibrary",JSON.stringify(t)))}function S(){const e=localStorage.getItem("myLibrary");return e?JSON.parse(e):[]}function O(e){return S().includes(e)}function le(e,t){let a;return function(...s){const n=this;clearTimeout(a),a=setTimeout(()=>e.apply(n,s),t)}}const ce=le(()=>{M?F(M):upcomingMovieContainer.innerHTML=""},250);document.addEventListener("DOMContentLoaded",re);window.addEventListener("resize",ce);const q={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDA5M2Y5MzcwZWVhYjYyZGRhZDEyMTViYTMzYzdkYyIsIm5iZiI6MTc0Mzc5MjUzNi41MTMsInN1YiI6IjY3ZjAyOTk4ZjVhODBhYTU0NTk5NTM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kD8CV4_F8L2GVoP85qrIIvPuEascfTURrC1KNOeDj4Q"}};let U={};function de(){return fetch("https://api.themoviedb.org/3/genre/movie/list?language=en-US",q).then(e=>e.json()).then(e=>{e.genres.forEach(t=>{U[t.id]=t.name})})}function pe(e){return e.map(t=>U[t]).filter(Boolean).slice(0,2)}document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme");const e=document.getElementById("weekly-cards"),t=document.getElementById("loader-weekly");de().then(()=>{fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",q).then(a=>a.json()).then(a=>{const s=a.results.slice(0,3);e.innerHTML="",t.style.display="none",s.forEach(n=>{const o=n.poster_path?`https://image.tmdb.org/t/p/w500${n.poster_path}`:"https://via.placeholder.com/500x750?text=No+Image",r=n.title||n.name||"Untitled",d=pe(n.genre_ids).join(", "),m=(n.release_date||n.first_air_date||"Unknown").split("-")[0],u=Math.round((n.vote_average||0)*10)/10,k=5,p=Math.floor(u/2),c=u%2>=1?1:0,g=k-p-c,b=[...Array(p).fill('<svg class="star-weekly full"><use xlink:href="#icon-star"></use></svg>'),...Array(c).fill('<svg class="star-weekly half"><use xlink:href="#icon-star-half"></use></svg>'),...Array(g).fill('<svg class="star-weekly empty"><use xlink:href="#icon-star-outline"></use></svg>')].join(""),i=document.createElement("div");i.className="card-weekly",i.style.backgroundImage=`url(${o})`,i.style.backgroundSize="cover",i.style.backgroundPosition="center",i.style.display="flex",i.style.objectFit="contain",i.style.alignItems="flex-end",i.style.borderRadius="10px",i.style.position="relative",i.style.overflow="hidden",i.style.boxShadow=" linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%)",i.innerHTML=`
            <div class="card-weekly-content">
            <div class="card-info">
              <h3>${r}</h3>
              <p>${d} | ${m}</p>
              </div>
              <span class="star-weekly">${b}</span>
            </div>
            
          `,e.appendChild(i),i.addEventListener("click",()=>{openModal(n)})})}).catch(a=>{console.error("Error fetching data:",a),e.innerHTML="<p>Error loading movies.</p>",t.style.display="none"})})});
//# sourceMappingURL=styles-DE11lBTz.js.map
