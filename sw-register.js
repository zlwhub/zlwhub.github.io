navigator.serviceWorker&&navigator.serviceWorker.register("/sw.js?v=20240418022640").then((function(){navigator.serviceWorker.addEventListener("message",(function(e){if("sw.update"===e.data){let e=document.querySelector("meta[name=theme-color]"),s=document.createElement("div");e&&(e.content="#000"),s.innerHTML='<div><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Colsrch/CDN/hexo-offline-popup.css"><div class="c-message animated animated-lento slideInRight"><i class=" c-message--icon c-message--success"></i><div class="el-notification__group"><h2 class="c-message__title">操作通知</h2><div class="el-notification__content">已更新最新版本（刷新生效）</div><div class="c-message--close" onclick="location.reload()">×</div></div></div></div>',document.body.appendChild(s),setTimeout((function(){document.getElementById("app-refresh").className+=" app-refresh-show"}),16)}}))}));