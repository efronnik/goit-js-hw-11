import{S as m}from"./assets/vendor-874053e3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l="gallery-link",u="https://pixabay.com/api/";function f(a){const r=`?${new URLSearchParams({key:"42137546-386b5be41212ccd429cab5a80",q:a,image_type:"photo",orientation:"horizontal",safeSearch:!0})}`,o=u+r;return fetch(o).then(e=>e.json()).catch(e=>{throw toastError(`Error fetching images: ${e}`),e})}function g({largeImageURL:a,tags:s,webformatURL:r,likes:o,views:e,comments:t,downloads:i}){return`
    <a href="${a}" class="${l}">
      <figure>
        <img src="${r}" alt="${s}" class="gallery-image">
        <figcaption class="gallery__figcaption">
          <div class="image-item">Likes <span class="image-elem">${o}</span></div>
          <div class="image-item">Views <span class="image-elem">${e}</span></div>
          <div class="image-item">Comments <span class="image-elem">${t}</span></div>
          <div class="image-item">Downloads <span class="image-elem">${i}</span></div>
        </figcaption>
      </figure>
    </a>
  `}const n=document.querySelector(".gallery"),c=document.querySelector(".search-form"),d=document.querySelector(".loader");c.addEventListener("submit",async function(a){a.preventDefault();const s=a.target.elements.query.value;if(s!=="")try{const{hits:r}=await f(s);if(r.length>0){const o=r.map(g).join("");n.innerHTML=o,new m(`.${l}`).refresh()}else n.innerHTML='<p class="no-results-message">No images found.</p>'}catch(r){console.error("Error fetching images:",r)}finally{c.reset(),d.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
