import{a as I,S as $,i as c}from"./assets/vendor-hwdYKDic.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const v="47376168-762e2e3775122625ea22809a6",w="https://pixabay.com/api/";async function b(e,r=1,i=15){const n=`${w}?key=${v}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${i}`;try{return(await I.get(n)).data}catch{throw new Error("Failed to fetch images")}}function S(e){e.innerHTML=""}function q(e,r){const i=e.map(({webformatURL:n,largeImageURL:t,tags:o,likes:s,views:p,comments:y,downloads:L})=>`
      <a href="${t}" class="gallery__item">
        <div class="photo-card">
          <img src="${n}" alt="${o}" loading="lazy" />
          <div class="info">
            <li><h3>Likes</h3> <p>${s}</p></li>
            <li><h3>Views</h3> <p>${p}</p></li>
            <li><h3>Comments</h3> <p>${y}</p></li>
            <li><h3>Downloads</h3> <p>${L}</p></li>
          </div>
        </div>
      </a>
    `).join("");r.insertAdjacentHTML("beforeend",i),e.length>0&&setTimeout(()=>{r.lastElementChild.scrollIntoView({behavior:"smooth",block:"end"})},300)}const d=document.querySelector("#search-form"),m=document.querySelector(".gallery"),_=document.querySelector(".loader"),g=document.querySelector(".load-more");let u="",l=1;const E=new $(".gallery a");d.addEventListener("submit",function(e){if(e.preventDefault(),u=d.elements.searchQuery.value.trim(),!u){c.error({title:"Помилка",message:"Будь ласка, введіть запит для пошуку!"});return}l=1,S(m),a(!0),h()});function h(){b(u,l).then(function(e){if(a(!1),e.hits.length===0){c.warning({title:"Результати відсутні",message:"Вибачте, зображень не знайдено!"});return}q(e.hits,m),E.refresh(),f(e.totalHits>l*15)}).catch(function(e){c.error({title:"Помилка",message:e.message}),a(!1),f(!1)})}g.addEventListener("click",function(){l+=1,a(!0),h(),O()});function a(e){_.classList.toggle("is-hidden",!e)}function f(e){g.classList.toggle("is-hidden",!e)}function O(){const r=document.querySelectorAll(".gallery__item")[0].getBoundingClientRect().height;window.scrollBy(0,r*2)}
//# sourceMappingURL=index.js.map
