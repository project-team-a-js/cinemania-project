import{a as M}from"./vendor-CJ4cOYKs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const T=document.querySelector(".menu-button"),m=document.querySelector(".mobile-menu");T.addEventListener("click",O);function O(){m.style.display!="none"?m.style.display="block":m.style.display="none",console.log(m.style.display)}const v=document.querySelector("body"),g=document.querySelector(".toggle");let N=localStorage.getItem("mode");N==="light"&&(v.classList.add("light"),g.classList.add("active"));g.addEventListener("click",()=>(v.classList.toggle("light"),v.classList.contains("light")?localStorage.setItem("mode","light"):localStorage.setItem("mode","dark")));g.addEventListener("click",()=>g.classList.toggle("active"));const x=document.querySelector(".modal"),G=document.querySelector(".footer-link"),P=document.querySelector(".modal-close-btn");function U(){x.style.display="flex"}function F(){x.style.display="none"}G.addEventListener("click",e=>{e.preventDefault(),U()});P.addEventListener("click",F);const S="bca6557ef64423ebe36f13a6f80e4fa5",E=document.getElementById("year-select"),H=new Date().getFullYear(),f=document.getElementById("search-input"),b=document.getElementById("clear-btn"),u=document.getElementById("movie-list"),Y=document.getElementById("search-form");for(let e=H;e>=1900;e--){const t=document.createElement("option");t.value=e,t.textContent=e,E.appendChild(t)}f.addEventListener("input",()=>{b.style.display=f.value?"inline":"none"});b.addEventListener("click",()=>{f.value="",b.style.display="none",w()});document.addEventListener("DOMContentLoaded",()=>{w()});async function w(){try{const e=`https://api.themoviedb.org/3/trending/movie/week?api_key=${S}`,s=await(await fetch(e)).json();!s.results||s.results.length===0?u.innerHTML='<p style="grid-column: 1/-1; text-align: center;">Trend film bulunamadı.</p>':k(s.results)}catch(e){console.error("Trend filmler alınamadı:",e),u.innerHTML='<p style="grid-column: 1/-1; text-align: center;">Trend filmleri alırken hata oluştu.</p>'}}Y.addEventListener("submit",async e=>{e.preventDefault();const t=f.value.trim(),s=E.value;if(!t&&!s){w();return}try{let a=`https://api.themoviedb.org/3/search/movie?api_key=${S}`;t&&(a+=`&query=${encodeURIComponent(t)}`),s&&(a+=`&year=${s}`);const o=await(await fetch(a)).json();!o.results||o.results.length===0?u.innerHTML='<p style="grid-column: 1/-1; text-align: center;">Hiçbir sonuç bulunamadı.</p>':k(o.results)}catch(a){console.error("Arama sırasında hata oluştu:",a),u.innerHTML='<p style="grid-column: 1/-1; text-align: center;">Arama sırasında hata oluştu.</p>'}});function k(e){const t=`
    <svg style="height:0; width:0; position:absolute" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="starGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#F84119" />
          <stop offset="100%" stop-color="rgba(248, 159, 25, 0.68)" />
        </linearGradient>
      </defs>
    </svg>
  `;u.innerHTML=t+e.map(s=>{const{poster_path:a,title:n,release_date:o,vote_average:r}=s,c=o?o.split("-")[0]:"N/A",l=a?`https://image.tmdb.org/t/p/w500${a}`:"https://via.placeholder.com/500x750?text=No+Image",d=Math.round((r||0)/2),y=Array(5).fill(0).map((p,i)=>`
      <svg class="star ${i<d?"filled":""}" viewBox="0 0 24 24" >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
      `).join("");return`
      <div class="movie-card">
        <img src="${l}" alt="${n}" />
        <div class="movie-info">
          <div class="movie-title">${n.toUpperCase()}</div>
          <div class="movie-meta">${c}</div>
        </div>
        <div class="rating-stars">${y}</div>
      </div>
    `}).join("")}const D="bca6557ef64423ebe36f13a6f80e4fa5",I="https://api.themoviedb.org",L=document.querySelector(".upcoming-movie");let A=new Map;async function j(){try{(await M.get(`${I}/3/genre/movie/list?api_key=${D}&language=en-EN`)).data.genres.forEach(t=>{A.set(t.id,t.name)})}catch(e){console.error("Error fetching movie genres:",e)}}function R(e){return e.map(t=>A.get(t)||"Unknown Genre").join(", ")}function J(){const e=new Date,t=e.getFullYear(),s=e.getMonth(),a=new Date(t,s,1),n=new Date(t,s+1,0),o=r=>{const c=r.getFullYear(),l=String(r.getMonth()+1).padStart(2,"0"),d=String(r.getDate()).padStart(2,"0");return`${c}-${l}-${d}`};return{startDate:o(a),endDate:o(n)}}function _(e,t){q(t)?e.textContent="Remove from My Library":e.textContent="Add to My Library"}function K(e){let t,s,a,n;const o=window.innerWidth;o>=1280&&e.backdrop_path?(t=`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`,s=` https://image.tmdb.org/t/p/w780${e.backdrop_path} 780w,
        https://image.tmdb.org/t/p/w1280${e.backdrop_path} 1280w,
        https://image.tmdb.org/t/p/original${e.backdrop_path} 1920w
        `,a="(min-width: 1280px) 805px",n="movie-image-backdrop"):o>=768&&e.backdrop_path?(t=`https://image.tmdb.org/t/p/w780${e.backdrop_path}`,s=` https://image.tmdb.org/t/p/w300${e.backdrop_path} 300w,
        https://image.tmdb.org/t/p/w780${e.backdrop_path} 780w
        `,a=`(min-width: 768px) 704px,
        (max-width: 1279px) 704px`,n="movie-image-backdrop"):(t=e.poster_path?`https://image.tmdb.org/t/p/w342${e.poster_path}`:"https://via.placeholder.com/320x460?text=Görsel+Yok",s=` https: //image.tmdb.org/t/p/w185${e.poster_path} 185w,
        https://image.tmdb.org/t/p/w342${e.poster_path} 342w,
        https://image.tmdb.org/t/p/w500${e.poster_path} 500w
        `,a=`(max-width: 320px) 280px,
        (max-width: 767px) 280px`,n="movie-image-poster");const r=e.release_date?new Date(e.release_date).toLocaleDateString():"Unknown Release Date",c=e.vote_average?e.vote_average.toFixed(1):"",l=e.vote_count?e.vote_count.toLocaleString():"",d=R(e.genre_ids),y=e.title.toUpperCase();L.innerHTML=`
    <div class="upcoming-movie-container">
        <img src="${t}" 
            srcset="${s.trim()}" 
            sizes="${a.trim()}" 
            class="movieImage ${n}"
            alt="${e.title} Poster Görseli"/>
        <div class="upcoming-info">
            <p class="upcoming-title">${y}</p>
            <div class="upcoming-info-details">
                <div class="info-tablet-details">
                    <div class="info-detail">
                        <p class="info-p">Release Date</p>
                        <span class="info-span info-color">${r}</span>
                    </div>
                    <div class="info-detail">
                        <p class="info-p">Vote / Votes</p>
                        <div class="info-votes-container">
                          <span class="info-span info-votes">${c}</span>
                          <p> / </p>
                          <span class="info-span info-votes">${l}</span>
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
                        <span class="info-span">${d}</span>
                    </div>
                </div>
                
            </div>
            <div class="upcoming-about">
                <p class="info-p info-about">ABOUT</p>
                <p class="info-p">${e.overview}</p>
            </div>
            <button class="addLibrary" data-id="${e.id}">Add to My Library</button>
        </div>
    </div>`;const p=L.querySelector(".addLibrary");_(p,e.id),p.addEventListener("click",()=>{const i=parseInt(p.getAttribute("data-id"));let h=$();q(i)?(h=h.filter(C=>C!==i),localStorage.setItem("myLibrary",JSON.stringify(h))):V(i),_(p,i)})}async function z(){await j();const{startDate:e,endDate:t}=J();try{const a=(await M.get(`${I}/3/discover/movie`,{params:{api_key:D,"primary_release_date.gte":e,"primary_release_date.lte":t,sort_by:"popularity.desc"}})).data.results;if(a&&a.length>0){const n=Math.floor(Math.random()*a.length),o=a[n];K(o)}else L.innerHTML="<p>No upcoming movies found for this month.</p>"}catch(s){console.error("Error fetching upcoming movies:",s)}}function V(e){let t=$();t=t||[],t.includes(e)||(t.push(e),localStorage.setItem("myLibrary",JSON.stringify(t)))}function $(){const e=localStorage.getItem("myLibrary");return e?JSON.parse(e):[]}function q(e){return $().includes(e)}document.addEventListener("DOMContentLoaded",z);const W=window.location.hostname.includes("github.io"),B=W?"/cinemania-project":"";document.querySelectorAll('a[href^="/"]').forEach(e=>{const t=e.getAttribute("href");e.setAttribute("href",B+t)});document.querySelectorAll('object[data^="/"]').forEach(e=>{const t=e.getAttribute("data");e.setAttribute("data",B+t)});
//# sourceMappingURL=styles-CRH66WWd.js.map
