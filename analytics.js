(function(){
  "use strict";
  var GA_ID = "G-4M8078CPTJ";
  var CONSENT_KEY = "sardinien-blog-analytics-consent";

  function loadGA(){
    if(window.__gaLoaded) return;
    window.__gaLoaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
  }

  function getConsent(){
    try { return localStorage.getItem(CONSENT_KEY); } catch(e){ return null; }
  }
  function setConsent(value){
    try { localStorage.setItem(CONSENT_KEY, value); } catch(e){}
  }

  function showBanner(){
    var banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.innerHTML =
      '<p>Diese Seite verwendet Google Analytics, um anonymisierte Besucherstatistiken zu erfassen. Du kannst dem zustimmen oder ablehnen.</p>' +
      '<div class="cookie-banner-actions">' +
      '<button type="button" class="cookie-decline">Ablehnen</button>' +
      '<button type="button" class="cookie-accept">Akzeptieren</button>' +
      '</div>';
    document.body.appendChild(banner);

    banner.querySelector(".cookie-accept").addEventListener("click", function(){
      setConsent("granted");
      banner.remove();
      loadGA();
    });
    banner.querySelector(".cookie-decline").addEventListener("click", function(){
      setConsent("denied");
      banner.remove();
    });
  }

  var consent = getConsent();
  if(consent === "granted"){
    loadGA();
  } else if(consent !== "denied"){
    if(document.readyState === "loading"){
      document.addEventListener("DOMContentLoaded", showBanner);
    } else {
      showBanner();
    }
  }
})();
