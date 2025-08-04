import{a as D}from"./vendor-CJ4cOYKs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const z=document.querySelector(".menu-button"),L=document.querySelector(".mobile-menu");z.addEventListener("click",N);function N(){L.classList.add("displayB")}const M=document.querySelector("body"),h=document.querySelector(".toggle");let j=localStorage.getItem("mode");j==="light"&&(M.classList.add("light"),h.classList.add("active"));h.addEventListener("click",()=>(M.classList.toggle("light"),M.classList.contains("light")?localStorage.setItem("mode","light"):localStorage.setItem("mode","dark")));h.addEventListener("click",()=>h.classList.toggle("active"));document.addEventListener("mouseup",function(e){L.contains(e.target)||L.classList.remove("displayB")});const f=document.querySelector(".modal"),G=document.querySelector(".footer-link"),H=document.querySelector(".modal-close-btn"),Y=document.querySelector(".team-container"),b=document.querySelector(".member-card"),P=[{name:"Abdullah Furkan Toy",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Aykut Şahinbaş",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Burak Ezer",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Çağla Karabudak Akın",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Emre Ayvaz",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Erdem İzcikılınç",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"İlker Şelimen",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Mehmet Öndüç",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Özgür Korkmaz",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""},{name:"Umay Ece Mantar",role:"FullStack Developer",image:"",gitLink:"",linkedLink:""}];function J(e){b.innerHTML="",e.forEach(t=>{const a=document.createElement("li");a.classList.add("team-member"),a.innerHTML=`
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
    `,b.appendChild(a),Y.appendChild(b)})}function R(){f.style.display="flex",J(P)}function w(){f.style.display="none"}G.addEventListener("click",e=>{e.preventDefault(),R()});f.addEventListener("click",e=>{e.target===f&&w()});document.addEventListener("keydown",e=>{e.key==="Escape"&&f.style.display==="flex"&&w()});H.addEventListener("click",w);const I="bca6557ef64423ebe36f13a6f80e4fa5",T="https://api.themoviedb.org/3/",x=async()=>{const e=`${T}trending/all/day?api_key=${I}`;return(await fetch(e)).json()},W=async e=>{const t=`${T}movie/${e}/videos?api_key=${I}`;return(await fetch(t)).json()},Z=document.querySelector(".content"),V=document.querySelector(".detail"),E=document.querySelector(".trailer"),K=({title:e,overview:t,name:a})=>{const r=document.createElement("div");return e!==void 0?r.innerHTML=`
  	<h1 class="title">${e}</h1>
    <p class="description">
      ${t}
    </p>
    <button class="button">Watch Trailer</button>
    <button class="button2">More Details</button>
    `:r.innerHTML=`
  	<h1 class="title">${a}</h1>
    <p class="description">
      ${t}
    </p>
    <button class="button">Watch Trailer</button>
    <button class="button2">More Details</button>
    `,r},X=({id:e,vote_average:t,vote_count:a,overview:r,poster_path:n,popularity:o})=>{const s=document.createElement("div");return s.innerHTML=`
  	
    <dialog class="video-modal2">
	<form method="dialog">
		<button class="video-modal-close">X</button>
	</form>
  <img style="width: 40px;" src="https://image.tmdb.org/t/p/original${n}" alt="">
	<pre>${e}
  ${t}
  ${a}
  ${r}
  ${o}</pre>
</dialog>
    `,s},Q=({key:e})=>{const t=document.createElement("div");return t.innerHTML=`
<dialog class="video-modal">
	<form method="dialog">
		<button class="video-modal-close">X</button>
	</form>
	<iframe src="https://www.youtube.com/embed/${e}">
</iframe>
</dialog>
    `,t},ee=async e=>{const{results:t}=await x(),a=t.map(K);Z.replaceChildren(a[e]),document.querySelector("header").style.background=`linear-gradient(to right,hsla(0, 0%, 7%, 1), hsla(0, 0%, 7%, 0)),url('https://image.tmdb.org/t/p/original/${t[e].backdrop_path}') no-repeat center center / cover`,te(t[e].id),ne(e)},te=async e=>{const{results:t}=await W(e),a=t.map(Q),r=document.querySelector(".button");if(a[0]!=null){E.replaceChildren(a[0]);const n=document.querySelector(".video-modal");r.addEventListener("click",function(){n.showModal()})}else r.addEventListener("click",function(){var o=document.createElement("dialog");o.classList.add("trailer-error"),E.replaceChildren(o),o.innerHTML=`
      <form method="dialog">
		<button class="video-modal-close">X</button>
	</form>
  <p>OOPS... We are very sorry! But we couldn’t find the trailer.</p>
  <img src="../img/IMG_9881 1.png" alt="">
`,o.showModal()})},ne=async e=>{const{results:t}=await x(),a=t.map(X);V.replaceChildren(a[e]);const r=document.querySelector(".button2"),n=document.querySelector(".video-modal2");r.addEventListener("click",function(){n.showModal()})};ee(Math.floor(Math.random()*19));document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("filmGrid"),t=document.getElementById("emptyMessage");a(),e.addEventListener("click",n=>{const o=n.target.closest(".film-card");if(o){const s=o.dataset.id;console.log(`Film ID'si ${s} olan kart tıklandı.`)}});function a(){const n=JSON.parse(localStorage.getItem("myLibrary"))||[];e.innerHTML="",n.length===0?t.classList.remove("hidden"):(t.classList.add("hidden"),n.forEach(o=>{const s=r(o);e.insertAdjacentHTML("beforeend",s)}))}function r(n){const o=`https://image.tmdb.org/t/p/w500/${n.poster_path}`,s=n.genres?n.genres.map(d=>d.name).join(", "):"Tür bilgisi yok";return`
            <div class="film-card" data-id="${n.id}">
                <img src="${o}" alt="${n.title}" loading="lazy">
                <div class="film-info">
                    <h3 class="film-title">${n.title}</h3>
                    <p class="film-meta">${s} | ${n.release_date?n.release_date.substring(0,4):"Tarih yok"}</p>
                    <span class="film-rating">${n.vote_average?n.vote_average.toFixed(1):"0.0"}</span>
                </div>
            </div>
        `}});const C="bca6557ef64423ebe36f13a6f80e4fa5",O="https://api.themoviedb.org",l="https://image.tmdb.org/t/p/",y=document.querySelector(".upcoming-movie");let A=new Map,$=null;async function ae(){try{(await D.get(`${O}/3/genre/movie/list?api_key=${C}&language=en-EN`)).data.genres.forEach(t=>{A.set(t.id,t.name)})}catch(e){console.error("Error fetching movie genres:",e)}}function oe(e){return e.map(t=>A.get(t)||"Unknown Genre").join(", ")}function re(){const e=new Date,t=e.getFullYear(),a=e.getMonth(),r=new Date(t,a,1),n=new Date(t,a+1,0),o=s=>{const d=s.getFullYear(),m=String(s.getMonth()+1).padStart(2,"0"),u=String(s.getDate()).padStart(2,"0");return`${d}-${m}-${u}`};return{startDate:o(r),endDate:o(n)}}function _(e,t){F(t)?e.textContent="Remove from My Library":e.textContent="Add to My Library"}function B(e){if(!e){const c=document.createElement(`<div>
        <p>OOPS...
          We are very sorry!
          But we couldn’t find any movie.</p>
      </div>`);y.innerHTML=c;return}$=e;let t,a,r,n;const o=window.innerWidth;o>=1280&&e.backdrop_path?(t=`${l}w1280${e.backdrop_path}`,a=` ${l}w780${e.backdrop_path} 780w,
        ${l}w1280${e.backdrop_path} 1280w,
        ${l}original${e.backdrop_path} 1920w
        `,r="(min-width: 1280px) 805px",n="movie-image-backdrop"):o>=768&&e.backdrop_path?(t=`${l}w780${e.backdrop_path}`,a=` ${l}w300${e.backdrop_path} 300w,
        ${l}w780${e.backdrop_path} 780w
        `,r=`(min-width: 768px) 704px,
        (max-width: 1279px) 704px`,n="movie-image-backdrop"):(t=e.poster_path?`${l}w342${e.poster_path}`:"https://via.placeholder.com/320x460?text=Görsel+Yok",a=` ${l}w185${e.poster_path} 185w,
        ${l}w342${e.poster_path} 342w,
        ${l}w500${e.poster_path} 500w
        `,r=`(max-width: 320px) 280px,
        (max-width: 767px) 280px`,n="movie-image-poster");const s=e.release_date?new Date(e.release_date).toLocaleDateString():"Unknown Release Date",d=e.vote_average?e.vote_average.toFixed(1):"",m=e.vote_count?e.vote_count.toLocaleString():"",u=oe(e.genre_ids),v=e.title.toUpperCase();y.innerHTML=`
    <div class="upcoming-movie-container">
        <img src="${t}" 
            srcset="${a.trim()}" 
            sizes="${r.trim()}" 
            class="movieImage ${n}"
            alt="${e.title} Poster Görseli"/>
        <div class="upcoming-info">
            <p class="upcoming-title">${v}</p>
            <div class="upcoming-info-details">
                <div class="info-tablet-details">
                    <div class="info-detail">
                        <p class="info-p">Release Date</p>
                        <span class="info-span info-color">${s}</span>
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
    </div>`;const p=y.querySelector(".addLibrary");_(p,e.id),p.addEventListener("click",()=>{const c=parseInt(p.getAttribute("data-id"));let g=S();F(c)?(g=g.filter(k=>k!==c),localStorage.setItem("myLibrary",JSON.stringify(g))):ie(c),_(p,c)})}async function se(){await ae();const{startDate:e,endDate:t}=re();try{const r=(await D.get(`${O}/3/discover/movie`,{params:{api_key:C,"primary_release_date.gte":e,"primary_release_date.lte":t,sort_by:"popularity.desc"}})).data.results;if(r&&r.length>0){const n=Math.floor(Math.random()*r.length),o=r[n];B(o)}else y.innerHTML="<p>No upcoming movies found for this month.</p>"}catch(a){console.error("Error fetching upcoming movies:",a)}}function ie(e){let t=S();t=t||[],t.includes(e)||(t.push(e),localStorage.setItem("myLibrary",JSON.stringify(t)))}function S(){const e=localStorage.getItem("myLibrary");return e?JSON.parse(e):[]}function F(e){return S().includes(e)}function le(e,t){let a;return function(...r){const n=this;clearTimeout(a),a=setTimeout(()=>e.apply(n,r),t)}}const ce=le(()=>{$?B($):upcomingMovieContainer.innerHTML=""},250);document.addEventListener("DOMContentLoaded",se);window.addEventListener("resize",ce);const q={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDA5M2Y5MzcwZWVhYjYyZGRhZDEyMTViYTMzYzdkYyIsIm5iZiI6MTc0Mzc5MjUzNi41MTMsInN1YiI6IjY3ZjAyOTk4ZjVhODBhYTU0NTk5NTM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kD8CV4_F8L2GVoP85qrIIvPuEascfTURrC1KNOeDj4Q"}};let U={};function de(){return fetch("https://api.themoviedb.org/3/genre/movie/list?language=en-US",q).then(e=>e.json()).then(e=>{e.genres.forEach(t=>{U[t.id]=t.name})})}function pe(e){return e.map(t=>U[t]).filter(Boolean).slice(0,2)}document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme");const e=document.getElementById("weekly-cards"),t=document.getElementById("loader-weekly");de().then(()=>{fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",q).then(a=>a.json()).then(a=>{const r=a.results.slice(0,3);e.innerHTML="",t.style.display="none",r.forEach(n=>{const o=n.poster_path?`https://image.tmdb.org/t/p/w500${n.poster_path}`:"https://via.placeholder.com/500x750?text=No+Image",s=n.title||n.name||"Untitled",d=pe(n.genre_ids).join(", "),m=(n.release_date||n.first_air_date||"Unknown").split("-")[0],u=Math.round((n.vote_average||0)*10)/10,v=5,p=Math.floor(u/2),c=u%2>=1?1:0,g=v-p-c,k=[...Array(p).fill('<svg class="star-weekly full"><use xlink:href="#icon-star"></use></svg>'),...Array(c).fill('<svg class="star-weekly half"><use xlink:href="#icon-star-half"></use></svg>'),...Array(g).fill('<svg class="star-weekly empty"><use xlink:href="#icon-star-outline"></use></svg>')].join(""),i=document.createElement("div");i.className="card-weekly",i.style.backgroundImage=`url(${o})`,i.style.backgroundSize="cover",i.style.backgroundPosition="center",i.style.display="flex",i.style.objectFit="contain",i.style.alignItems="flex-end",i.style.borderRadius="10px",i.style.position="relative",i.style.overflow="hidden",i.style.boxShadow=" linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%)",i.innerHTML=`
            <div class="card-weekly-content">
            <div class="card-info">
              <h3>${s}</h3>
              <p>${d} | ${m}</p>
              </div>
              <span class="star-weekly">${k}</span>
            </div>
            
          `,e.appendChild(i),i.addEventListener("click",()=>{openModal(n)})})}).catch(a=>{console.error("Error fetching data:",a),e.innerHTML="<p>Error loading movies.</p>",t.style.display="none"})})});
//# sourceMappingURL=styles-B_pP_hI7.js.map
