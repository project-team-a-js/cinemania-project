import{a as h}from"./assets/vendor-CJ4cOYKs.js";/* empty css                      */(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const M=document.querySelector(".menu-button"),p=document.querySelector(".mobile-menu");M.addEventListener("click",x);function x(){p.style.display!="none"?p.style.display="block":p.style.display="none",console.log(p.style.display)}const b=document.querySelector(".modal"),S=document.querySelector(".footer-link"),D=document.querySelector(".modal-close-btn");function k(){b.style.display="flex"}function E(){b.style.display="none"}S.addEventListener("click",t=>{t.preventDefault(),k()});D.addEventListener("click",E);const w="bca6557ef64423ebe36f13a6f80e4fa5",v="https://api.themoviedb.org",g=document.querySelector(".upcoming-movie");let L=new Map;async function N(){try{(await h.get(`${v}/3/genre/movie/list?api_key=${w}&language=en-EN`)).data.genres.forEach(e=>{L.set(e.id,e.name)})}catch(t){console.error("Error fetching movie genres:",t)}}function O(t){return t.map(e=>L.get(e)||"Unknown Genre").join(", ")}function A(){const t=new Date,e=t.getFullYear(),r=t.getMonth(),a=new Date(e,r,1),o=new Date(e,r+1,0),n=s=>{const d=s.getFullYear(),l=String(s.getMonth()+1).padStart(2,"0"),m=String(s.getDate()).padStart(2,"0");return`${d}-${l}-${m}`};return{startDate:n(a),endDate:n(o)}}function y(t,e){_(e)?t.textContent="Remove from My Library":t.textContent="Add to My Library"}function I(t){let e,r,a,o;const n=window.innerWidth;n>=1280&&t.backdrop_path?(e=`https://image.tmdb.org/t/p/w1280${t.backdrop_path}`,r=` https://image.tmdb.org/t/p/w780${t.backdrop_path} 780w,
        https://image.tmdb.org/t/p/w1280${t.backdrop_path} 1280w,
        https://image.tmdb.org/t/p/original${t.backdrop_path} 1920w
        `,a="(min-width: 1280px) 805px",o="movie-image-backdrop"):n>=768&&t.backdrop_path?(e=`https://image.tmdb.org/t/p/w780${t.backdrop_path}`,r=` https://image.tmdb.org/t/p/w300${t.backdrop_path} 300w,
        https://image.tmdb.org/t/p/w780${t.backdrop_path} 780w
        `,a=`(min-width: 768px) 704px,
        (max-width: 1279px) 704px`,o="movie-image-backdrop"):(e=t.poster_path?`https://image.tmdb.org/t/p/w342${t.poster_path}`:"https://via.placeholder.com/320x460?text=Görsel+Yok",r=` https: //image.tmdb.org/t/p/w185${t.poster_path} 185w,
        https://image.tmdb.org/t/p/w342${t.poster_path} 342w,
        https://image.tmdb.org/t/p/w500${t.poster_path} 500w
        `,a=`(max-width: 320px) 280px,
        (max-width: 767px) 280px`,o="movie-image-poster");const s=t.release_date?new Date(t.release_date).toLocaleDateString():"Unknown Release Date",d=t.vote_average?t.vote_average.toFixed(1):"N/A",l=t.vote_count?t.vote_count.toLocaleString():"N/A",m=O(t.genre_ids);g.innerHTML=`
    <div class="upcoming-movie-container">
        <img src="${e}" 
            srcset="${r.trim()}" 
            sizes="${a.trim()}" 
            class="movieImage ${o}"
            alt="${t.title} Poster Görseli"/>
        <div class="upcoming-info">
            <p class="upcoming-title">${t.title}</p>
            <div class="upcoming-info-details">
                <div class="info-tablet-details">
                    <div class="info-detail">
                        <p class="info-p">Release Date</p>
                        <span class="info-span">${s}</span>
                    </div>
                    <div class="info-detail">
                        <p class="info-p">Vote / Votes</p>
                        <span class="info-span">${d} / ${l}</span>
                    </div>
                </div>
                <div class="info-tablet-details">
                    <div class="info-detail">
                        <p class="info-p">Popularity</p>
                        <span class="info-span">${t.popularity}</span>
                    </div>
                    <div class="info-detail">
                        <p class="info-p">Genres</p>
                        <span class="info-span">${m}</span>
                    </div>
                </div>
                
            </div>
            <div class="upcoming-about">
                <p class="info-p">ABOUT</p>
                <p class="info-p">${t.overview}</p>
            </div>
            <button class="addLibrary" data-id="${t.id}">Add to My Library</button>
        </div>
    </div>`;const i=g.querySelector(".addLibrary");y(i,t.id),i.addEventListener("click",()=>{const c=parseInt(i.getAttribute("data-id"));let u=f();_(c)?(u=u.filter($=>$!==c),localStorage.setItem("myLibrary",JSON.stringify(u))):P(c),y(i,c)})}async function q(){await N();const{startDate:t,endDate:e}=A();try{const a=(await h.get(`${v}/3/discover/movie`,{params:{api_key:w,"primary_release_date.gte":t,"primary_release_date.lte":e,sort_by:"popularity.desc"}})).data.results;if(a&&a.length>0){const o=Math.floor(Math.random()*a.length),n=a[o];I(n)}else g.innerHTML="<p>No upcoming movies found for this month.</p>"}catch(r){console.error("Error fetching upcoming movies:",r)}}function P(t){let e=f();e=e||[],e.includes(t)||(e.push(t),localStorage.setItem("myLibrary",JSON.stringify(e)))}function f(){const t=localStorage.getItem("myLibrary");return t?JSON.parse(t):[]}function _(t){return f().includes(t)}document.addEventListener("DOMContentLoaded",q);
//# sourceMappingURL=index.js.map
