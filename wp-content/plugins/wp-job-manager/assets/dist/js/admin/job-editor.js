!function(){"use strict";var t={n:function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(e,{a:e}),e},d:function(o,e){for(var r in e)t.o(e,r)&&!t.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:e[r]})},o:function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}},o=window.wp.data,e=window.wp.editor,r=window.wp.domReady;t.n(r)()((()=>{const t=(0,o.select)(e.store),r=document.querySelector("#promote-dialog");if(!r)return;let n=!1;(t=>{let{subscribeListener:r=(()=>{}),onSetDirty:n=(()=>{}),onSaveStart:s=(()=>{}),onSave:a=(()=>{})}=t;const i=(0,o.select)(e.store);let m=!1,u=!1;(0,o.subscribe)((()=>{r();const t=i.isEditedPostDirty(),o=i.isSavingPost()&&!i.isAutosavingPost();!u&&t?(u=!0,n()):u=t,m&&!o?(m=o,a()):!m&&o?(m=o,s()):m=o}))})({onSaveStart:()=>{n="publish"===t.getEditedPostAttribute("status")&&"publish"!==t.getCurrentPostAttribute("status")},onSave:()=>{const o=t.getCurrentPostAttribute("meta");var e,s;n&&"1"!==o?._promoted&&(r.showModal(),e=r,s=window.wpjm.promoteUrl,e.innerHTML=`\n\t<form class="dialog" method="dialog">\n\t\t<button class="dialog-close" type="submit">X</button>\n\t</form>\n\t<promote-job-template>\n\t\t<div slot="buttons" class="promote-buttons-group">\n\t\t\t<a id="wpjm-promote-button" class="promote-button button button-primary" target="_blank" rel="noopener noreferrer" href="${s}">${job_manager_admin_params.job_listing_promote_strings.promote_job}</a>\n\t\t\t<a class="promote-button button button-secondary" target="_blank" rel="noopener noreferrer" href="https://wpjobmanager.com/jobtarget?utm_source=plugin_wpjm&utm_medium=promote-dialog&utm_campaign=promoted-jobs">${job_manager_admin_params.job_listing_promote_strings.learn_more}</a>\n\t\t\t<a class="promote-dismiss wpjm-notice-dismiss" href="#">${job_manager_admin_params.job_listing_promote_strings.dismiss}</a>\n\t\t</div>\n\t<promote-job-template>`,e.querySelector("#wpjm-promote-button").addEventListener("click",(function(){e.close()})))}})}))}();