function a(t,...e){console.log(`[Photon Extension] ${t}`,...e)}function m(){const t=document.createElement("button");return t.className="photon-action-button",t.innerHTML=`
        <div class="button-content">
            <span class="button-icon">⭐</span>
        </div>
    `,t.onclick=e=>{e.stopPropagation(),a("Action button clicked!")},t}function u(t){const e=t.match(/(?:twitter\.com|x\.com)\/[^/]+\/status\/(\d+)/);return e?e[1]:null}function b(t){return t.replace("x.com","twitter.com")}function w(t){const e=document.createElement("div");e.className="tweet-preview-container";const o=document.createElement("iframe");o.className="tweet-preview-frame";const r=b(t);return o.src=`https://platform.twitter.com/embed/Tweet.html?dnt=false&embedId=twitter-widget-0&frame=false&hideCard=false&hideThread=false&id=${u(r)}&theme=dark`,e.appendChild(o),e}async function x(t){if(t.querySelector(".tweet-preview-container"))return;const e=t.querySelectorAll('a[href*="twitter.com"], a[href*="x.com"]');if(!e.length)return;const o=e[0].href;a("Found Twitter link:",o);const r=w(o),n=t.querySelector(".CZ9XtNP_BJSquWvM6_r8");n&&n.parentNode.insertBefore(r,n.nextSibling)}function p(t){if(t.querySelector(".photon-action-button"))return;const e=t.querySelector(".CZ9XtNP_BJSquWvM6_r8");if(!e)return;const o=m();e.appendChild(o),x(t)}function d(){document.querySelectorAll(".l-row.l-row-gap--xs").forEach(p)}function h(){["newly-created","about-to-graduate","graduated"].forEach(e=>{const o=document.querySelector(`[class*="${e}"]`);o&&(a(`Setting up observer for ${e} section`),new MutationObserver(n=>{n.forEach(f=>{f.addedNodes.forEach(i=>{var s;i.nodeType===1&&((s=i.classList)!=null&&s.contains("l-row-gap--xs")?[i]:i.querySelectorAll(".l-row.l-row-gap--xs")).forEach(p)})})}).observe(o,{childList:!0,subtree:!0}))})}const g=".photon-action-button{margin-left:12px!important;padding:6px 12px!important;background:#ffffff0d!important;border:1px solid rgba(255,255,255,.1)!important;border-radius:6px!important;color:#ffffffe6!important;cursor:pointer!important;transition:all .2s ease-in-out!important;-webkit-backdrop-filter:blur(5px)!important;backdrop-filter:blur(5px)!important}.photon-action-button:hover{background:#ffffff14!important;border-color:#fff3!important;transform:translateY(-1px)!important;box-shadow:0 4px 12px #0003!important}.photon-action-button:active{transform:translateY(0)!important}.button-content{display:flex!important;align-items:center!important;justify-content:center!important;gap:8px!important}.button-icon{font-size:14px!important;color:#ffffffe6!important}.tweet-preview-container{margin:12px 0!important;padding:16px!important;background:#141619b3!important;border-radius:12px!important;border:1px solid rgba(255,255,255,.08)!important;overflow:hidden!important;transition:all .3s ease-in-out!important;-webkit-backdrop-filter:blur(10px)!important;backdrop-filter:blur(10px)!important;box-shadow:0 4px 6px #0000001a!important}.tweet-preview-container:hover{background:#141619cc!important;border-color:#ffffff1f!important;box-shadow:0 6px 12px #00000026!important}.tweet-preview-frame{border:none!important;width:100%!important;height:250px!important;border-radius:8px!important;background:transparent!important;transition:all .3s ease!important;margin:0!important;padding:0!important}",l=document.createElement("style");l.textContent=g;document.head.appendChild(l);function c(){a("Initializing Photon Extension"),d(),h()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c();setTimeout(c,2e3);setInterval(d,1e3);