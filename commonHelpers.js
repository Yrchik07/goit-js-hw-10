/* empty css                      */import{f as p,i as g}from"./assets/vendor-77e16229.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function u(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=u(e);fetch(e.href,o)}})();const r=document.querySelector("button"),F=document.querySelector(".value[ data-days]"),b=document.querySelector(".value[ data-hours]"),v=document.querySelector(".value[ data-minutes]"),C=document.querySelector(".value[ data-seconds]");r.disabled=!0;let S=Date.now(),l,i,m;const L={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){l=t[0],l<S?g.show({message:"Please choose a date in the future",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}):(r.disabled=!1,r.style.background="#4E75FF",r.style.color="#FFF")}};p("#datetime-picker",L);r.addEventListener("click",()=>{r.disabled=!0,r.style.background="#CFCFCF",r.style.color="#989898",i=l-Date.now(),f(d(i)),m=setInterval(()=>{i-=1e3,f(d(i)),q(i)},1e3)});function d(t){const o=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),y=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:c,minutes:y,seconds:h}}function f({days:t,hours:n,minutes:u,seconds:s}){F.textContent=`${a(t)}`,b.textContent=`${a(n)}`,v.textContent=`${a(u)}`,C.textContent=`${a(s)}`}function q(t){t<=1e3&&clearInterval(m)}function a(t){return t.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
