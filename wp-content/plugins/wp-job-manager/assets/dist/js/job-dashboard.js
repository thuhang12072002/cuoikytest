!function(){"use strict";var t={n:function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},d:function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},e=window.wp.domReady,n=t.n(e);const{i18nConfirmDelete:o,overlayEndpoint:r,statsEnabled:a}=job_manager_job_dashboard;function c(t){t.querySelectorAll(".job-dashboard-action-delete").forEach((t=>t.addEventListener("click",i)))}function i(t){window.confirm(o)||t.preventDefault()}async function s(t){var e;const n=document.getElementById("jmDashboardOverlay");if(!n)return!0;t.preventDefault?.(),n.showModal();const o=t.target?.dataset.jobId,a=t.target?.closest("tr")?.id?.replace("post-",""),i=null!==(e=null!=o?o:a)&&void 0!==e?e:t;if(!i)return;location.hash=i;const s=n.querySelector(".jm-dialog-modal-content");s.innerHTML='<a class="jm-ui-spinner"></a>';try{const t=await fetch(`${r}&job_id=${i}`);if(!t.ok)throw new Error(t.statusText);const{data:e}=await t.json();s.innerHTML=e}catch(t){s.innerHTML=`<div class="jm-notice color-error has-text-align-center" role="status">${t.message}</div>`}const l=()=>{history.replaceState(null,"",window.location.pathname+window.location.search),n.removeEventListener("close",l)};n.addEventListener("close",l),c(s)}n()((()=>{c(document),a&&function(){document.querySelectorAll(".jm-dashboard-job .job-title, tr.job_listing td.column-stats").forEach((t=>t.addEventListener("click",s)));const t=window.location.hash?.substring(1);t>0&&s(+t)}()}))}();