import{a as h}from"./assets/vendor-CJ4cOYKs.js";/* empty css                      */(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const x=document.querySelector(".menu-button"),p=document.querySelector(".mobile-menu");x.addEventListener("click",S);function S(){p.style.display!="none"?p.style.display="block":p.style.display="none",console.log(p.style.display)}const b=document.querySelector(".modal"),D=document.querySelector(".footer-link"),k=document.querySelector(".modal-close-btn");function E(){b.style.display="flex"}function O(){b.style.display="none"}D.addEventListener("click",t=>{t.preventDefault(),E()});k.addEventListener("click",O);const v="bca6557ef64423ebe36f13a6f80e4fa5",w="https://api.themoviedb.org",f=document.querySelector(".upcoming-movie");let L=new Map;async function I(){try{(await h.get(`${w}/3/genre/movie/list?api_key=${v}&language=en-EN`)).data.genres.forEach(e=>{L.set(e.id,e.name)})}catch(t){console.error("Error fetching movie genres:",t)}}function N(t){return t.map(e=>L.get(e)||"Unknown Genre").join(", ")}function q(){const t=new Date,e=t.getFullYear(),s=t.getMonth(),a=new Date(e,s,1),o=new Date(e,s+1,0),n=r=>{const d=r.getFullYear(),l=String(r.getMonth()+1).padStart(2,"0"),m=String(r.getDate()).padStart(2,"0");return`${d}-${l}-${m}`};return{startDate:n(a),endDate:n(o)}}function y(t,e){_(e)?t.textContent="Remove from My Library":t.textContent="Add to My Library"}function A(t){let e,s,a,o;const n=window.innerWidth;n>=1280&&t.backdrop_path?(e=`https://image.tmdb.org/t/p/w1280${t.backdrop_path}`,s=` https://image.tmdb.org/t/p/w780${t.backdrop_path} 780w,
        https://image.tmdb.org/t/p/w1280${t.backdrop_path} 1280w,
        https://image.tmdb.org/t/p/original${t.backdrop_path} 1920w
        `,a="(min-width: 1280px) 805px",o="movie-image-backdrop"):n>=768&&t.backdrop_path?(e=`https://image.tmdb.org/t/p/w780${t.backdrop_path}`,s=` https://image.tmdb.org/t/p/w300${t.backdrop_path} 300w,
        https://image.tmdb.org/t/p/w780${t.backdrop_path} 780w
        `,a=`(min-width: 768px) 704px,
        (max-width: 1279px) 704px`,o="movie-image-backdrop"):(e=t.poster_path?`https://image.tmdb.org/t/p/w342${t.poster_path}`:"https://via.placeholder.com/320x460?text=Görsel+Yok",s=` https: //image.tmdb.org/t/p/w185${t.poster_path} 185w,
        https://image.tmdb.org/t/p/w342${t.poster_path} 342w,
        https://image.tmdb.org/t/p/w500${t.poster_path} 500w
        `,a=`(max-width: 320px) 280px,
        (max-width: 767px) 280px`,o="movie-image-poster");const r=t.release_date?new Date(t.release_date).toLocaleDateString():"Unknown Release Date",d=t.vote_average?t.vote_average.toFixed(1):"",l=t.vote_count?t.vote_count.toLocaleString():"",m=N(t.genre_ids),$=t.title.toUpperCase();f.innerHTML=`
    <div class="upcoming-movie-container">
        <img src="${e}" 
            srcset="${s.trim()}" 
            sizes="${a.trim()}" 
            class="movieImage ${o}"
            alt="${t.title} Poster Görseli"/>
        <div class="upcoming-info">
            <p class="upcoming-title">${$}</p>
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
                          <span class="info-span info-votes">${l}</span>
                        </div>
                    </div>
                </div>
                <div class="info-tablet-details">
                    <div class="info-detail">
                        <p class="info-p">Popularity</p>
                        <span class="info-span">${t.popularity.toFixed(2)}</span>
                    </div>
                    <div class="info-detail">
                        <p class="info-p">Genres</p>
                        <span class="info-span">${m}</span>
                    </div>
                </div>
                
            </div>
            <div class="upcoming-about">
                <p class="info-p info-about">ABOUT</p>
                <p class="info-p">${t.overview}</p>
            </div>
            <button class="addLibrary" data-id="${t.id}">Add to My Library</button>
        </div>
    </div>`;const i=f.querySelector(".addLibrary");y(i,t.id),i.addEventListener("click",()=>{const c=parseInt(i.getAttribute("data-id"));let u=g();_(c)?(u=u.filter(M=>M!==c),localStorage.setItem("myLibrary",JSON.stringify(u))):C(c),y(i,c)})}async function U(){await I();const{startDate:t,endDate:e}=q();try{const a=(await h.get(`${w}/3/discover/movie`,{params:{api_key:v,"primary_release_date.gte":t,"primary_release_date.lte":e,sort_by:"popularity.desc"}})).data.results;if(a&&a.length>0){const o=Math.floor(Math.random()*a.length),n=a[o];A(n)}else f.innerHTML="<p>No upcoming movies found for this month.</p>"}catch(s){console.error("Error fetching upcoming movies:",s)}}function C(t){let e=g();e=e||[],e.includes(t)||(e.push(t),localStorage.setItem("myLibrary",JSON.stringify(e)))}function g(){const t=localStorage.getItem("myLibrary");return t?JSON.parse(t):[]}function _(t){return g().includes(t)}document.addEventListener("DOMContentLoaded",U);
//# sourceMappingURL=index.js.map
