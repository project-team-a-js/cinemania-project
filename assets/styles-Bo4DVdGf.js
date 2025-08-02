import{a as D}from"./vendor-CJ4cOYKs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const j=document.querySelector(".menu-button"),b=document.querySelector(".mobile-menu");j.addEventListener("click",Y);function Y(){b.style.display!="none"?b.style.display="block":b.style.display="none",console.log(b.style.display)}const k=document.querySelector("body"),w=document.querySelector(".toggle");let F=localStorage.getItem("mode");F==="light"&&(k.classList.add("light"),w.classList.add("active"));w.addEventListener("click",()=>(k.classList.toggle("light"),k.classList.contains("light")?localStorage.setItem("mode","light"):localStorage.setItem("mode","dark")));w.addEventListener("click",()=>w.classList.toggle("active"));const P=document.querySelector(".modal"),q=document.querySelector(".footer-link"),z=document.querySelector(".modal-close-btn");function J(){P.style.display="flex"}function R(){P.style.display="none"}q.addEventListener("click",e=>{e.preventDefault(),J()});z.addEventListener("click",R);const I="bca6557ef64423ebe36f13a6f80e4fa5",M=document.getElementById("search-input"),x=document.getElementById("clear-btn"),$=document.getElementById("movie-list"),H=document.getElementById("search-form"),y=document.getElementById("pagination"),B=document.getElementById("year-select");let c=24,i=1;M.addEventListener("input",()=>{x.style.display=M.value?"inline":"none"});x.addEventListener("click",()=>{M.value="",x.style.display="none",i=1,f()});B.addEventListener("change",()=>{i=1});document.addEventListener("DOMContentLoaded",()=>{f(),L()});function V(e,t,o){if(e){const a=new URL("https://api.themoviedb.org/3/search/movie");return a.searchParams.append("api_key",I),a.searchParams.append("query",e),a.searchParams.append("page",t),o&&a.searchParams.append("primary_release_year",o),a.toString()}else{const a=new URL("https://api.themoviedb.org/3/discover/movie");return a.searchParams.append("api_key",I),a.searchParams.append("sort_by","popularity.desc"),a.searchParams.append("page",t),o&&a.searchParams.append("primary_release_year",o),a.toString()}}async function f(){const e=M.value.trim(),t=B.value;try{const o=V(e,i,t),n=await(await fetch(o)).json();if(!n.results||n.results.length===0){$.innerHTML='<p style="grid-column: 1/-1; text-align: center;">Sonuç bulunamadı.</p>',c=1,L();return}c=n.total_pages>24?24:n.total_pages,Z(n.results),L()}catch(o){console.error("Film verisi alınamadı:",o),$.innerHTML='<p style="grid-column: 1/-1; text-align: center;">Film verisi alınırken hata oluştu.</p>',c=1,L()}}H.addEventListener("submit",e=>{e.preventDefault(),i=1,f()});function Z(e){const t=`
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
  `;$.innerHTML=t+e.map(o=>{const{poster_path:a,title:n,release_date:s,vote_average:r}=o,m=s?s.split("-")[0]:"N/A",u=a?`https://image.tmdb.org/t/p/w500${a}`:"https://via.placeholder.com/500x750?text=No+Image",p=Math.round((r||0)/2),h=Array(5).fill(0).map((g,d)=>`
            <svg class="star ${d<p?"filled":""}" viewBox="0 0 24 24" >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>`).join("");return`
          <div class="movie-card">
            <img src="${u}" alt="${n}" />
            <div class="movie-info">
              <div class="movie-title">${n.toUpperCase()}</div>
              <div class="movie-meta">${m}</div>
            </div>
            <div class="rating-stars">${h}</div>
          </div>
        `}).join("")}function L(){y.innerHTML="";const e=3,t=document.createElement("button");t.textContent="<",t.classList.add("arrow-btn"),t.disabled=i===1,t.onclick=()=>{i>1&&(i--,f())},y.appendChild(t);let o=i,a=o+e-1;a>c&&(a=c);for(let s=o;s<=a;s++){const r=document.createElement("button");r.textContent=s.toString().padStart(2,"0"),r.classList.add("page-btn"),s===i&&r.classList.add("active"),r.onclick=()=>{i=s,f()},y.appendChild(r)}if(a<c){const s=document.createElement("span");s.textContent="...",s.classList.add("ellipsis"),y.appendChild(s);const r=document.createElement("button");r.textContent=c.toString().padStart(2,"0"),r.classList.add("page-btn"),r.onclick=()=>{i=c,f()},y.appendChild(r)}const n=document.createElement("button");n.textContent=">",n.classList.add("arrow-btn"),n.disabled=i===c,n.onclick=()=>{i<c&&(i++,f())},y.appendChild(n)}const N="bca6557ef64423ebe36f13a6f80e4fa5",T="https://api.themoviedb.org",S=document.querySelector(".upcoming-movie");let U=new Map;async function W(){try{(await D.get(`${T}/3/genre/movie/list?api_key=${N}&language=en-EN`)).data.genres.forEach(t=>{U.set(t.id,t.name)})}catch(e){console.error("Error fetching movie genres:",e)}}function K(e){return e.map(t=>U.get(t)||"Unknown Genre").join(", ")}function Q(){const e=new Date,t=e.getFullYear(),o=e.getMonth(),a=new Date(t,o,1),n=new Date(t,o+1,0),s=r=>{const m=r.getFullYear(),u=String(r.getMonth()+1).padStart(2,"0"),p=String(r.getDate()).padStart(2,"0");return`${m}-${u}-${p}`};return{startDate:s(a),endDate:s(n)}}function C(e,t){A(t)?e.textContent="Remove from My Library":e.textContent="Add to My Library"}function X(e){let t,o,a,n;const s=window.innerWidth;s>=1280&&e.backdrop_path?(t=`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`,o=` https://image.tmdb.org/t/p/w780${e.backdrop_path} 780w,
        https://image.tmdb.org/t/p/w1280${e.backdrop_path} 1280w,
        https://image.tmdb.org/t/p/original${e.backdrop_path} 1920w
        `,a="(min-width: 1280px) 805px",n="movie-image-backdrop"):s>=768&&e.backdrop_path?(t=`https://image.tmdb.org/t/p/w780${e.backdrop_path}`,o=` https://image.tmdb.org/t/p/w300${e.backdrop_path} 300w,
        https://image.tmdb.org/t/p/w780${e.backdrop_path} 780w
        `,a=`(min-width: 768px) 704px,
        (max-width: 1279px) 704px`,n="movie-image-backdrop"):(t=e.poster_path?`https://image.tmdb.org/t/p/w342${e.poster_path}`:"https://via.placeholder.com/320x460?text=Görsel+Yok",o=` https: //image.tmdb.org/t/p/w185${e.poster_path} 185w,
        https://image.tmdb.org/t/p/w342${e.poster_path} 342w,
        https://image.tmdb.org/t/p/w500${e.poster_path} 500w
        `,a=`(max-width: 320px) 280px,
        (max-width: 767px) 280px`,n="movie-image-poster");const r=e.release_date?new Date(e.release_date).toLocaleDateString():"Unknown Release Date",m=e.vote_average?e.vote_average.toFixed(1):"",u=e.vote_count?e.vote_count.toLocaleString():"",p=K(e.genre_ids),h=e.title.toUpperCase();S.innerHTML=`
    <div class="upcoming-movie-container">
        <img src="${t}" 
            srcset="${o.trim()}" 
            sizes="${a.trim()}" 
            class="movieImage ${n}"
            alt="${e.title} Poster Görseli"/>
        <div class="upcoming-info">
            <p class="upcoming-title">${h}</p>
            <div class="upcoming-info-details">
                <div class="info-tablet-details">
                    <div class="info-detail">
                        <p class="info-p">Release Date</p>
                        <span class="info-span info-color">${r}</span>
                    </div>
                    <div class="info-detail">
                        <p class="info-p">Vote / Votes</p>
                        <div class="info-votes-container">
                          <span class="info-span info-votes">${m}</span>
                          <p> / </p>
                          <span class="info-span info-votes">${u}</span>
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
    </div>`;const g=S.querySelector(".addLibrary");C(g,e.id),g.addEventListener("click",()=>{const d=parseInt(g.getAttribute("data-id"));let v=E();A(d)?(v=v.filter(_=>_!==d),localStorage.setItem("myLibrary",JSON.stringify(v))):te(d),C(g,d)})}async function ee(){await W();const{startDate:e,endDate:t}=Q();try{const a=(await D.get(`${T}/3/discover/movie`,{params:{api_key:N,"primary_release_date.gte":e,"primary_release_date.lte":t,sort_by:"popularity.desc"}})).data.results;if(a&&a.length>0){const n=Math.floor(Math.random()*a.length),s=a[n];X(s)}else S.innerHTML="<p>No upcoming movies found for this month.</p>"}catch(o){console.error("Error fetching upcoming movies:",o)}}function te(e){let t=E();t=t||[],t.includes(e)||(t.push(e),localStorage.setItem("myLibrary",JSON.stringify(t)))}function E(){const e=localStorage.getItem("myLibrary");return e?JSON.parse(e):[]}function A(e){return E().includes(e)}document.addEventListener("DOMContentLoaded",ee);const G={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDA5M2Y5MzcwZWVhYjYyZGRhZDEyMTViYTMzYzdkYyIsIm5iZiI6MTc0Mzc5MjUzNi41MTMsInN1YiI6IjY3ZjAyOTk4ZjVhODBhYTU0NTk5NTM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kD8CV4_F8L2GVoP85qrIIvPuEascfTURrC1KNOeDj4Q"}};let O={};function ne(){return fetch("https://api.themoviedb.org/3/genre/movie/list?language=en-US",G).then(e=>e.json()).then(e=>{e.genres.forEach(t=>{O[t.id]=t.name})})}function ae(e){return e.map(t=>O[t]).filter(Boolean).slice(0,2)}document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme");const e=document.getElementById("weekly-cards"),t=document.getElementById("loader-weekly");ne().then(()=>{fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",G).then(o=>o.json()).then(o=>{const a=o.results.slice(0,3);e.innerHTML="",t.style.display="none",a.forEach(n=>{const s=n.poster_path?`https://image.tmdb.org/t/p/w500${n.poster_path}`:"https://via.placeholder.com/500x750?text=No+Image",r=n.title||n.name||"Untitled",m=ae(n.genre_ids).join(", "),u=(n.release_date||n.first_air_date||"Unknown").split("-")[0],p=Math.round((n.vote_average||0)*10)/10,h=5,g=Math.floor(p/2),d=p%2>=1?1:0,v=h-g-d,_=[...Array(g).fill('<svg class="star-weekly full"><use xlink:href="#icon-star"></use></svg>'),...Array(d).fill('<svg class="star-weekly half"><use xlink:href="#icon-star-half"></use></svg>'),...Array(v).fill('<svg class="star-weekly empty"><use xlink:href="#icon-star-outline"></use></svg>')].join(""),l=document.createElement("div");l.className="card-weekly",l.style.backgroundImage=`url(${s})`,l.style.backgroundSize="cover",l.style.backgroundPosition="center",l.style.display="flex",l.style.alignItems="flex-end",l.style.borderRadius="10px",l.style.position="relative",l.style.overflow="hidden",l.style.boxShadow=" linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%)",l.innerHTML=`
            <div class="card-weekly-content">
            <div class="card-info">
              <h3>${r}</h3>
              <p>${m} | ${u}</p>
              </div>
              <span class="star-weekly">${_}</span>
            </div>
            
          `,e.appendChild(l),l.addEventListener("click",()=>{openModal(n)})})}).catch(o=>{console.error("Error fetching data:",o),e.innerHTML="<p>Error loading movies.</p>",t.style.display="none"})})});
//# sourceMappingURL=styles-Bo4DVdGf.js.map
