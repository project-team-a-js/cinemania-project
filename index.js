import{a as y}from"./assets/vendor-CJ4cOYKs.js";/* empty css                      */(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();class S{constructor(){this.menuButton=document.querySelector(".menu-button"),this.mobileMenu=document.querySelector(".mobile-menu"),this.isMobileMenuOpen=!1,this.STORAGE_KEY="cinemania-theme",this.THEMES={DARK:"dark",LIGHT:"light"},this.DEFAULT_THEME=this.THEMES.DARK,this.root=document.documentElement,this.toggle=document.querySelector(".toggle"),this.init()}init(){this.initializeTheme(),this.setupMobileMenu(),this.setupThemeToggle()}setupMobileMenu(){this.menuButton&&this.mobileMenu?(this.menuButton.addEventListener("click",()=>{this.toggleMobileMenu()}),document.addEventListener("click",e=>{this.isMobileMenuOpen&&!this.mobileMenu.contains(e.target)&&!this.menuButton.contains(e.target)&&this.closeMobileMenu()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isMobileMenuOpen&&this.closeMobileMenu()})):console.warn("Mobile menu elements not found")}toggleMobileMenu(){this.isMobileMenuOpen?this.closeMobileMenu():this.openMobileMenu()}openMobileMenu(){this.mobileMenu.style.display="block",this.isMobileMenuOpen=!0,this.menuButton.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden"}closeMobileMenu(){this.mobileMenu.style.display="none",this.isMobileMenuOpen=!1,this.menuButton.setAttribute("aria-expanded","false"),document.body.style.overflow=""}initializeTheme(){const e=this.getSavedTheme();this.applyTheme(e)}setupThemeToggle(){this.toggle?(this.updateToggleState(),this.toggle.addEventListener("click",()=>{this.toggleTheme()})):console.warn("Theme toggle element not found")}getSavedTheme(){try{const e=localStorage.getItem(this.STORAGE_KEY);return Object.values(this.THEMES).includes(e)?e:this.DEFAULT_THEME}catch(e){return console.warn("Could not access localStorage:",e),this.DEFAULT_THEME}}saveTheme(e){try{localStorage.setItem(this.STORAGE_KEY,e)}catch(n){console.warn("Could not save theme to localStorage:",n)}}applyTheme(e){Object.values(this.THEMES).includes(e)||(console.warn(`Invalid theme: ${e}. Using default.`),e=this.DEFAULT_THEME),e===this.THEMES.LIGHT?this.root.setAttribute("data-theme","light"):this.root.removeAttribute("data-theme"),this.currentTheme=e,this.saveTheme(e),this.updateToggleState(),this.dispatchThemeChangeEvent(e)}updateToggleState(){this.toggle&&(this.currentTheme===this.THEMES.LIGHT?this.toggle.classList.add("active"):this.toggle.classList.remove("active"))}toggleTheme(){const e=this.currentTheme===this.THEMES.DARK?this.THEMES.LIGHT:this.THEMES.DARK;this.applyTheme(e)}dispatchThemeChangeEvent(e){const n=new CustomEvent("themechange",{detail:{theme:e}});document.dispatchEvent(n)}getCurrentTheme(){return this.currentTheme}setTheme(e){this.applyTheme(e)}isDarkMode(){return this.currentTheme===this.THEMES.DARK}isLightMode(){return this.currentTheme===this.THEMES.LIGHT}}const u=new S;window.headerManager=u;document.addEventListener("themechange",t=>{console.log(`Theme changed to: ${t.detail.theme}`)});window.addEventListener("resize",()=>{window.innerWidth>=768&&u.isMobileMenuOpen&&u.closeMobileMenu()});const b=document.querySelector(".modal"),_=document.querySelector(".footer-link"),$=document.querySelector(".modal-close-btn");function D(){b.style.display="flex"}function k(){b.style.display="none"}_.addEventListener("click",t=>{t.preventDefault(),D()});$.addEventListener("click",k);const M="bca6557ef64423ebe36f13a6f80e4fa5",v="https://api.themoviedb.org",m=document.querySelector(".upcoming-movie");let T=new Map;async function x(){try{(await y.get(`${v}/3/genre/movie/list?api_key=${M}&language=en-EN`)).data.genres.forEach(e=>{T.set(e.id,e.name)})}catch(t){console.error("Error fetching movie genres:",t)}}function A(t){return t.map(e=>T.get(e)||"Unknown Genre").join(", ")}function H(){const t=new Date,e=t.getFullYear(),n=t.getMonth(),i=new Date(e,n,1),o=new Date(e,n+1,0),s=a=>{const c=a.getFullYear(),d=String(a.getMonth()+1).padStart(2,"0"),p=String(a.getDate()).padStart(2,"0");return`${c}-${d}-${p}`};return{startDate:s(i),endDate:s(o)}}function f(t,e){E(e)?t.textContent="Remove from My Library":t.textContent="Add to My Library"}function O(t){let e,n,i,o;const s=window.innerWidth;s>=1280&&t.backdrop_path?(e=`https://image.tmdb.org/t/p/w1280${t.backdrop_path}`,n=` https://image.tmdb.org/t/p/w780${t.backdrop_path} 780w,
        https://image.tmdb.org/t/p/w1280${t.backdrop_path} 1280w,
        https://image.tmdb.org/t/p/original${t.backdrop_path} 1920w
        `,i="(min-width: 1280px) 805px",o="movie-image-backdrop"):s>=768&&t.backdrop_path?(e=`https://image.tmdb.org/t/p/w780${t.backdrop_path}`,n=` https://image.tmdb.org/t/p/w300${t.backdrop_path} 300w,
        https://image.tmdb.org/t/p/w780${t.backdrop_path} 780w
        `,i=`(min-width: 768px) 704px,
        (max-width: 1279px) 704px`,o="movie-image-backdrop"):(e=t.poster_path?`https://image.tmdb.org/t/p/w342${t.poster_path}`:"https://via.placeholder.com/320x460?text=Görsel+Yok",n=` https: //image.tmdb.org/t/p/w185${t.poster_path} 185w,
        https://image.tmdb.org/t/p/w342${t.poster_path} 342w,
        https://image.tmdb.org/t/p/w500${t.poster_path} 500w
        `,i=`(max-width: 320px) 280px,
        (max-width: 767px) 280px`,o="movie-image-poster");const a=t.release_date?new Date(t.release_date).toLocaleDateString():"Unknown Release Date",c=t.vote_average?t.vote_average.toFixed(1):"",d=t.vote_count?t.vote_count.toLocaleString():"",p=A(t.genre_ids),w=t.title.toUpperCase();m.innerHTML=`
    <div class="upcoming-movie-container">
        <img src="${e}" 
            srcset="${n.trim()}" 
            sizes="${i.trim()}" 
            class="movieImage ${o}"
            alt="${t.title} Poster Görseli"/>
        <div class="upcoming-info">
            <p class="upcoming-title">${w}</p>
            <div class="upcoming-info-details">
                <div class="info-tablet-details">
                    <div class="info-detail">
                        <p class="info-p">Release Date</p>
                        <span class="info-span info-color">${a}</span>
                    </div>
                    <div class="info-detail">
                        <p class="info-p">Vote / Votes</p>
                        <div class="info-votes-container">
                          <span class="info-span info-votes">${c}</span>
                          <p> / </p>
                          <span class="info-span info-votes">${d}</span>
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
                        <span class="info-span">${p}</span>
                    </div>
                </div>
                
            </div>
            <div class="upcoming-about">
                <p class="info-p info-about">ABOUT</p>
                <p class="info-p">${t.overview}</p>
            </div>
            <button class="addLibrary" data-id="${t.id}">Add to My Library</button>
        </div>
    </div>`;const r=m.querySelector(".addLibrary");f(r,t.id),r.addEventListener("click",()=>{const l=parseInt(r.getAttribute("data-id"));let h=g();E(l)?(h=h.filter(L=>L!==l),localStorage.setItem("myLibrary",JSON.stringify(h))):G(l),f(r,l)})}async function I(){await x();const{startDate:t,endDate:e}=H();try{const i=(await y.get(`${v}/3/discover/movie`,{params:{api_key:M,"primary_release_date.gte":t,"primary_release_date.lte":e,sort_by:"popularity.desc"}})).data.results;if(i&&i.length>0){const o=Math.floor(Math.random()*i.length),s=i[o];O(s)}else m.innerHTML="<p>No upcoming movies found for this month.</p>"}catch(n){console.error("Error fetching upcoming movies:",n)}}function G(t){let e=g();e=e||[],e.includes(t)||(e.push(t),localStorage.setItem("myLibrary",JSON.stringify(e)))}function g(){const t=localStorage.getItem("myLibrary");return t?JSON.parse(t):[]}function E(t){return g().includes(t)}document.addEventListener("DOMContentLoaded",I);
//# sourceMappingURL=index.js.map
