const ce=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))d(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function o(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(l){if(l.ep)return;l.ep=!0;const i=o(l);fetch(l.href,i)}};ce();var de="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEJSURBVFiF7dYxToRAFMbx/0StiDGhJtmSAxAb8CrWHMR7eCEKYgOh4g40NLifxTqbYc2qxc7DxH0NE5rfN28ykwf/oApAgPI8v98Mz7JMgIqieDDHJWm/32u32wlQVVXRO3HEfQAfIvgfF3fOaZqmVYiu66IHOOK+whAmOEHLfTVNsx1+0vYoIb60/QxOsE4uivPzzkP8Ylfwil/x7/AnM7zv+3P3+yY6bva2b4r/8oWLg3NtuzF+54FhGFZ427Ymo9QLoLIsBWgcR1McgnP3Ieq6NsMfAS3LIukwvaZpaobjnBOgeZ5Xo1OSJPFxDuPR6cz2DDgLHOA1gDMr1Nct8Pb5fbfG/0R9AJuXK4WKqLCWAAAAAElFTkSuQmCC",ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEySURBVFiF7ZdNioQwEIWf8QheVGj8AddeJS5EEMGFXkHP5JvN6HQbf5IYXQz9wI1U5X1VKUME/pn4+2jLc2xuvLZwaS6lPAK6TQTAoig4C39bcTsEAVBKybWegFAqfxJit3JTCJshXBYKguA8mB++lztBAAzDcKmq67rTLrjaDgJgnuckyaqqHoX4SB6GgSTZNM3yru/72yCWgYvjWIFo29aoE0IIIwBl2rcg3jtxBOF53jXzWWmaLguN46gFYWV+dMhkWaZA1HW9CeHc/Ahi/XU4a/uekiRRZqIsy/W032M+6/V6KRBW5gCMzWdFUbRVtdGBcwfEqdbXpiWJNIIHAPi+j2ma9tbWArCGEEK8x2vfNfcCjSBszc+CtSCumOskmAyC1RVfJ0kHwuX/xVdfPasfBbxsSfCEZAUAAAAASUVORK5CYII=";const fe=document.querySelector(".for-canvas"),j=document.querySelector(".pen"),x=document.querySelector(".pen-color"),k=document.querySelector(".pen-slider"),F=document.querySelector(".bucket-color"),K=document.querySelector(".eraser"),me=document.querySelector(".clear"),P=document.querySelector(".save-image"),he=document.querySelectorAll(".header-icons-styles"),ge=document.querySelector(".selected-tools"),ve=document.querySelector(".save-storage"),ye=document.querySelector(".load-storage"),pe=document.querySelector(".delete-storage"),Se=document.querySelector(".undo"),Ae=document.querySelector(".redo");document.querySelector("header");const Q=document.querySelector(".diff-shapes"),z=document.querySelector(".diff-shapes-container"),Le=document.querySelectorAll(".shape"),c=document.createElement("canvas");c.id="canvas";const s=c.getContext("2d");let m=10,E="#fff",v="#000000",f=!1,Z=!1,n=[],p=-1,y=[],u="pen",T=[];function r(e){ge.textContent=e}function W(){he.forEach(e=>{e.classList.contains("selected-icon-style")&&e.classList.remove("selected-icon-style")})}Q.addEventListener("click",()=>{z.classList.toggle("invisible"),z.classList.toggle("scale-0"),z.classList.toggle("-translate-x-[70%]")});Le.forEach(e=>{e.addEventListener("click",()=>{W(),Q.classList.add("selected-icon-style"),f=!1,c.style.cursor="crosshair",m=10,v=x.firstElementChild.value,k.firstElementChild.value=m,u=e.getAttribute("data-value"),r(e.getAttribute("data-value"))})});F.addEventListener("input",()=>{E=F.firstElementChild.value,f&&(v=E),S(),A()});x.addEventListener("input",()=>{v=x.firstElementChild.value});K.addEventListener("click",()=>{r("Eraser"),f=!0,c.style.cursor=`url(${ue}) 12 25, auto`,u="pen",W(),K.classList.add("selected-icon-style"),v=E,m=20,k.firstElementChild.value=m});k.addEventListener("change",()=>{m=k.firstElementChild.value});j.addEventListener("click",_);Se.addEventListener("click",G);Ae.addEventListener("click",$);window.document.addEventListener("keydown",e=>{e.metaKey&&e.shiftKey&&e.key==="z"||e.ctrlKey&&e.key==="y"?$():(e.ctrlKey&&e.key==="z"||e.metaKey&&e.key==="z")&&G()});function G(){p<0||(p--,S(),A(),r("Undo"),setTimeout(f?()=>r("eraser"):()=>r(u),1e3))}function $(){n.length-1!==p&&(p++,S(),A(),r("Redo"),setTimeout(f?()=>r("eraser"):()=>r(u),1e3))}function _(){u="pen",f=!1,r("pen"),c.style.cursor=`url(${de}) 0 60,auto`,v=x.firstElementChild.value,m=10,W(),j.classList.add("selected-icon-style"),k.firstElementChild.value=m}function S(){c.width=window.innerWidth,c.height=window.innerHeight,s.fillStyle=E,s.fillRect(0,0,c.width,c.height),fe.appendChild(c)}function Ee(){if(n.length===0)return;let e=c.offsetWidth,t=c.offsetHeight,o=n[0][0].h,d=n[0][0].w,l=e/d,i=t/o;for(let a=0;a<n.length;a++)for(let g=0;g<n[a].length;g++)n[a][g].w=e,n[a][g].h=t,n[a][g].x*=l,n[a][g].y*=i}window.addEventListener("resize",()=>{S(),console.log("Hello"),Ee(),A()});S();_();function A(){for(let e=0;e<=p;e++)if(!!n[e])for(let t=1;t<n[e].length;t++)n[e][t].shape==="pen"?(s.beginPath(),s.moveTo(n[e][t-1].x,n[e][t-1].y),s.lineWidth=n[e][t-1].size,s.lineCap="round",n[e][t-1].erase?s.strokeStyle=E:s.strokeStyle=n[e][t-1].color,s.lineTo(n[e][t].x,n[e][t].y),s.stroke()):(s.moveTo(n[e][t-1].x,n[e][t-1].y),s.beginPath(),ee(n[e]))}me.addEventListener("click",()=>{S(),n=[],r("Canvas Cleared"),setTimeout(f?()=>r("eraser"):()=>r(u),1e3)});function C(e,t,o,d,l,i,a,g,re){const ae={x:e,y:t,size:o,color:d,erase:l,h:i,w:a,shape:g};n.length!==p&&(n=n.splice(0,p+1)),re.push(ae)}function H(e){const t=c.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top,h:t.height,w:t.width}}function Y(e){const t=c.getBoundingClientRect();return{x:e.changedTouches[0].clientX-t.left,y:e.changedTouches[0].clientY-t.top,h:t.height,w:t.width}}function L(e,t,o,d,l,i){switch(e){case"rectangle-stroke":{s.strokeStyle=i,s.strokeRect(t,o,d,l);break}case"rectangle-fill":{s.fillStyle=i,s.fillRect(t,o,d,l);break}case"circle-stroke":{s.lineCap="round",s.arc(t,o,Math.max(l,d),0,2*Math.PI,!0),s.strokeStyle=i,s.stroke();break}case"circle-fill":{s.lineCap="round",s.fillStyle=i,s.arc(t,o,Math.max(l,d),0,2*Math.PI,!0),s.fill();break}case"line":{s.lineCap="round",s.strokeStyle=i,s.lineTo(t,o),s.stroke();break}default:console.log("Something Went Wrong! The Chosen Shape Is Not In Option")}s.closePath()}function ee(e){if(e.length<2)return;let t={x:e[0].x,y:e[0].y},o={x:e[e.length-1].x,y:e[e.length-1].y},d=e[0].color,l=e[0].shape,i=o.x-t.x,a=o.y-t.y;if(s.lineWidth=e[0].size,l==="line"){s.moveTo(t.x,t.y),L(l,o.x,o.y,i,a,d);return}if(l.includes("circle")){i=Math.abs(i),a=Math.abs(a);let g=Math.sqrt(a*a+i*i);s.moveTo(t.x+g,t.y),L(l,t.x,t.y,g,0,d);return}a>0&&i>0?L(l,t.x,t.y,i,a,d):a>0?L(l,o.x,t.y,Math.abs(i),a,d):i>0?L(l,t.x,o.y,i,Math.abs(a),d):L(l,o.x,o.y,Math.abs(i),Math.abs(a),d)}function te(e,t){Z=t;const o=t?H(e):Y(e);s.moveTo(o.x,o.y),s.beginPath(),s.lineWidth=m,s.lineCap="round",s.strokeStyle=v,f&&(s.strokeStyle=E),y=[],u!=="pen"&&(T=[],C(o.x,o.y,m,v,f,o.h,o.w,u,y),C(o.x,o.y,m,v,f,o.h,o.w,u,T)),t?c.addEventListener("mousemove",q):c.addEventListener("touchmove",q)}function q(e){const t=Z?H(e):Y(e);if(u==="pen"){s.lineTo(t.x,t.y),s.stroke(),C(t.x,t.y,m,v,f,t.h,t.w,u,y);return}else C(t.x,t.y,m,v,f,t.h,t.w,u,T),S(),A(),s.beginPath(),s.moveTo(t.x,t.y),ee(T)}function oe(e,t){if(u!=="pen"){const o=t?H(e):Y(e);C(o.x,o.y,m,v,f,o.h,o.w,u,y),n.push(y),p=n.length-1,S(),A()}else if(y.length!==0){if(y.length===1){const o={...y[0]};o.x+=1e-4,y.push(o)}n.push(y),p=n.length-1}t?c.removeEventListener("mousemove",q):c.removeEventListener("touchmove",q)}c.addEventListener("mousedown",e=>te(e,!0));c.addEventListener("mouseup",e=>oe(e,!0));c.addEventListener("touchstart",e=>te(e,!1));c.addEventListener("touchend",e=>oe(e,!1));ve.addEventListener("click",()=>{localStorage.setItem("saveCanvas",JSON.stringify(n)),r("Canvas Saved"),setTimeout(f?()=>r("eraser"):()=>r(u),1e3)});ye.addEventListener("click",()=>{localStorage.getItem("saveCanvas")?(n=JSON.parse(localStorage.saveCanvas),p=n.length-1,r("Canvas Loaded"),A(),setTimeout(f?()=>r("eraser"):()=>r(u),1e3)):(r("Canvas Not Found"),setTimeout(f?()=>r("eraser"):()=>r(u),1e3))});pe.addEventListener("click",()=>{localStorage.removeItem("saveCanvas"),r("Cleared Local Storage"),setTimeout(f?()=>r("eraser"):()=>r(u),1e3)});P.addEventListener("click",()=>{P.firstElementChild.href=c.toDataURL("image/jpeg",1),P.firstElementChild.download="paint-example.jpeg",r("Image File Saved"),setTimeout(f?()=>r("eraser"):()=>r(u),1e3)});const ke=document.querySelector(".bucket-set"),O=document.querySelector(".bucket-color-wrapper"),Ce=document.querySelector(".pen-tool"),R=document.querySelector(".pen-tools-wrapper"),J=document.querySelector(".drop-menu"),D=document.querySelector(".drop-menu-items-container"),b=document.querySelector(".switch-theme"),we=document.querySelector("body"),U=document.querySelector(".tools-container"),B=document.querySelector(".hide-unhide");let h=!1;function be(){h=localStorage.getItem("isDarkMode"),h===null?h=!1:h==="true"?h=!0:h=!1,h==!0&&(se(),h=!0,localStorage.setItem("isDarkMode",h))}be();ke.addEventListener("click",()=>{O.classList.toggle("invisible"),O.classList.toggle("scale-0"),O.classList.toggle("-translate-x-[100%]")});Ce.addEventListener("click",()=>{R.classList.toggle("invisible"),R.classList.toggle("scale-0"),R.classList.toggle("-translate-x-[70%]")});J.addEventListener("click",()=>{J.firstElementChild.classList.toggle("-rotate-90"),D.classList.toggle("translate-x-[45%]"),D.classList.toggle("-translate-y-[70%]"),D.classList.toggle("scale-0")});b.addEventListener("click",se);function se(){b.firstElementChild.classList.contains("fa-moon")?(b.firstElementChild.classList.replace("fa-moon","fa-sun"),h=!1):(h=!0,b.firstElementChild.classList.replace("fa-sun","fa-moon")),localStorage.setItem("isDarkMode",h),we.classList.toggle("darkMode")}B.addEventListener("click",()=>{U.classList.toggle("left-[1.5rem]"),U.classList.toggle("left-[-6rem]"),B.firstElementChild.classList.toggle("fa-angles-left"),B.firstElementChild.classList.toggle("fa-angles-right")});document.querySelector("canvas");const xe=document.querySelector(".sticky-container"),Te=document.querySelector(".add-notes"),qe=document.querySelector(".save-storage"),Ie=document.querySelector(".load-storage"),Ne=document.querySelector(".delete-storage");let I=0,N=0,V=0,X,w=null,Me=11;function ne(e,t,o){w=o,w.style.zIndex=Me++,t?(I=e.clientX-o.offsetLeft,N=e.clientY-o.offsetTop,X=!0):(I=e.changedTouches[0].clientX-o.offsetLeft,N=e.changedTouches[0].clientY-o.offsetTop),t?window.addEventListener("mousemove",M):window.addEventListener("touchmove",M)}function M(e){let t,o;X?(o=e.clientY-N,t=e.clientX-I):(o=e.changedTouches[0].clientY-N,t=e.changedTouches[0].clientX-I),w.style.top=o+"px",w.style.left=t+"px"}function le(e,t){t&&(X=!1),t?window.removeEventListener("mousemove",M):window.removeEventListener("touchmove",M),w=null}function Pe(e){e.addEventListener("mousedown",t=>ne(t,!0,e)),e.addEventListener("mouseup",t=>le(t,!0)),e.addEventListener("drag",()=>!1)}function ze(e){e.addEventListener("touchstart",t=>ne(t,!1,e)),e.addEventListener("touchend",t=>le(t,!1)),e.addEventListener("drag",()=>!1)}function Oe(e){e.addEventListener("click",()=>{e.parentElement.parentElement.parentElement.parentElement.remove()})}function Re(e){e.addEventListener("click",()=>{let t=e.parentElement.parentElement.parentElement.lastElementChild;t.style.height=="8rem"?(t.style.height="0rem",t.style.padding="0rem"):(t.style.height="8rem",t.style.padding="0.25rem 0rem")})}Te.addEventListener("click",ie);function ie(e){V++;let t=document.createElement("div");t.classList.add("sticky-wrapper"),t.setAttribute("data-no",`${V-1}`),e.heading!==void 0?(t.style.top=e.top+"px",t.style.left=e.left+"px",t.innerHTML=`
    <div class="sticky">
        <div class="sticky-top ">
            <input type="text" value="${e.heading}" class="sticky-heading" placeholder="Note...">
            <div class="sticky-btns">
                <button class="minimize-btn " title="minimize">
                    <i class="fa-solid fa-minus "></i>
                </button>
                <button class="remove-btn " title="remove">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
        <div class="sticky-content" style="height: 8rem; padding:0.25rem 0rem;">
            <textarea name="content" class="" placeholder="type here...">${e.content}</textarea>
        </div>
    </div>`):t.innerHTML=`
    <div class="sticky">
        <div class="sticky-top ">
            <input type="text" value="" class="sticky-heading" placeholder="Note...">
            <div class="sticky-btns">
                <button class="minimize-btn " title="minimize">
                    <i class="fa-solid fa-minus "></i>
                </button>
                <button class="remove-btn " title="remove">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
        <div class="sticky-content" style="height: 8rem; padding:0.25rem 0rem;">
            <textarea name="content" class=""  placeholder="type here..."></textarea>
        </div>
    </div>`,xe.appendChild(t),Pe(t),ze(t),Oe(t.querySelector(".remove-btn")),Re(t.querySelector(".minimize-btn"))}function De(){let e=document.querySelectorAll(".sticky-wrapper"),t=[];e.forEach(o=>{let d={heading:o.querySelector(".sticky-heading").value,content:o.querySelector("textarea").value,top:o.offsetTop,left:o.offsetLeft};t.push(d)}),localStorage.setItem("saveStickyNotes",JSON.stringify(t))}function Be(){localStorage.getItem("saveStickyNotes")&&JSON.parse(localStorage.saveStickyNotes).forEach(t=>{ie(t)})}qe.addEventListener("click",De);Ie.addEventListener("click",Be);Ne.addEventListener("click",()=>{localStorage.removeItem("saveStickyNotes")});
