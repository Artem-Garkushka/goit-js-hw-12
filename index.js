import{a as w,S as $,i as a}from"./assets/vendor-hwdYKDic.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const E="47376168-762e2e3775122625ea22809a6",S="https://pixabay.com/api/";async function f(t,s=1,o=15){const n=`${S}?key=${E}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=${o}`;try{return(await w.get(n)).data}catch{throw new Error("Failed to fetch images")}}function b(t){t.innerHTML=""}function g(t,s){const o=t.map(({webformatURL:n,largeImageURL:e,tags:r,likes:d,views:y,comments:L,downloads:v})=>`
      <a href="${e}" class="gallery__item">
        <div class="photo-card">
          <img src="${n}" alt="${r}" loading="lazy" />
          <div class="info">
            <li><h3>Likes</h3> <p>${d}</p></li>
            <li><h3>Views</h3> <p>${y}</p></li>
            <li><h3>Comments</h3> <p>${L}</p></li>
            <li><h3>Downloads</h3> <p>${v}</p></li>
          </div>
        </div>
      </a>
    `).join("");s.insertAdjacentHTML("beforeend",o),t.length>0&&setTimeout(()=>{s.lastElementChild.scrollIntoView({behavior:"smooth",block:"end"})},300)}const m=document.querySelector("#search-form"),u=document.querySelector(".gallery"),l=document.querySelector(".loader"),i=document.querySelector(".load-more");let h="",c=1;const p=new $(".gallery a");m.addEventListener("submit",function(t){if(t.preventDefault(),h=m.elements.searchQuery.value.trim(),!h){a.error({title:"Error",message:"Please enter a search query!"});return}c=1,b(u),i.classList.add("is-hidden"),l.classList.remove("is-hidden"),f(h,c).then(function(s){if(l.classList.add("is-hidden"),s.hits.length===0){a.warning({title:"No results",message:"Sorry, no images found!"});return}g(s.hits,u),p.refresh(),s.totalHits>c*15?i.classList.remove("is-hidden"):(i.classList.add("is-hidden"),a.info({title:"End of results",message:"You've reached the end of the search results."}))}).catch(function(s){a.error({title:"Error",message:s.message}),l.classList.add("is-hidden"),i.classList.add("is-hidden")})});i.addEventListener("click",function(){c+=1,l.classList.remove("is-hidden"),f(h,c).then(function(t){if(l.classList.add("is-hidden"),t.hits.length===0){a.warning({title:"No more results",message:"Sorry, no more images found!"}),i.classList.add("is-hidden");return}g(t.hits,u),p.refresh();const o=document.querySelectorAll(".gallery__item")[0].getBoundingClientRect().height;window.scrollBy(0,o*2),t.totalHits>c*15?i.classList.remove("is-hidden"):(i.classList.add("is-hidden"),a.info({title:"End of results",message:"You've reached the end of the search results."}))}).catch(function(t){a.error({title:"Error",message:t.message}),l.classList.add("is-hidden"),i.classList.add("is-hidden")})});
//# sourceMappingURL=index.js.map
