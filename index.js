import{a as I,S as $,i as d}from"./assets/vendor-hwdYKDic.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const v="47376168-762e2e3775122625ea22809a6",w="https://pixabay.com/api/";async function b(e,r=1,s=15){const i=`${w}?key=${v}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${s}`;try{return(await I.get(i)).data}catch{throw new Error("Не вдалося завантажити зображення")}}function S(e){e.innerHTML=""}function q(e,r){const s=e.map(({webformatURL:i,largeImageURL:t,tags:o,likes:n,views:p,comments:y,downloads:L})=>`
      <a href="${t}" class="gallery__item">
        <div class="photo-card">
          <img src="${i}" alt="${o}" loading="lazy" />
          <div class="info">
            <ul>
              <li><h3>Likes</h3> <p>${n}</p></li>
              <li><h3>Views</h3> <p>${p}</p></li>
              <li><h3>Comments</h3> <p>${y}</p></li>
              <li><h3>Downloads</h3> <p>${L}</p></li>
            </ul>
          </div>
        </div>
      </a>
    `).join("");r.insertAdjacentHTML("beforeend",s),e.length>0&&setTimeout(()=>{r.lastElementChild.scrollIntoView({behavior:"smooth",block:"end"})},300)}const f=document.querySelector("#search-form"),g=document.querySelector(".gallery"),_=document.querySelector(".loader"),c=document.querySelector(".load-more");let u="",l=1;const E=new $(".gallery a");f.addEventListener("submit",function(e){if(e.preventDefault(),u=f.elements.searchQuery.value.trim(),!u){d.error({title:"Помилка",message:"Будь ласка, введіть запит для пошуку!"}),c.classList.add("is-hidden");return}l=1,S(g),a(!0),h()});function h(){b(u,l).then(function(e){if(a(!1),e.hits.length===0){d.warning({title:"Результати відсутні",message:"Вибачте, зображень не знайдено!"}),c.classList.add("is-hidden");return}q(e.hits,g),E.refresh(),m(e.totalHits>l*15)}).catch(function(e){d.error({title:"Помилка",message:e.message}),a(!1),m(!1)})}c.addEventListener("click",function(){l+=1,a(!0),h(),O()});function a(e){_.classList.toggle("is-hidden",!e)}function m(e){c.classList.toggle("is-hidden",!e)}function O(){const r=document.querySelectorAll(".gallery__item")[0].getBoundingClientRect().height;window.scrollBy(0,r*2)}
//# sourceMappingURL=index.js.map
