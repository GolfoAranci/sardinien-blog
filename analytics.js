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

  var TEXTS = {
    de: {msg: "Diese Seite verwendet Google Analytics, um anonymisierte Besucherstatistiken zu erfassen. Du kannst dem zustimmen oder ablehnen.", no: "Ablehnen", yes: "Akzeptieren"},
    en: {msg: "This site uses Google Analytics to collect anonymised visitor statistics. You can accept or decline.", no: "Decline", yes: "Accept"},
    it: {msg: "Questo sito utilizza Google Analytics per raccogliere statistiche anonime sui visitatori. Puoi accettare o rifiutare.", no: "Rifiuta", yes: "Accetta"}
  };

  function showBanner(){
    var lang = (document.documentElement.getAttribute("lang") || "de").slice(0, 2).toLowerCase();
    var t = TEXTS[lang] || TEXTS.de;
    var banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.innerHTML =
      "<p>" + t.msg + "</p>" +
      '<div class="cookie-banner-actions">' +
      '<button type="button" class="cookie-decline">' + t.no + '</button>' +
      '<button type="button" class="cookie-accept">' + t.yes + '</button>' +
      '</div>';
    document.body.appendChild(banner);
    document.documentElement.classList.add("has-cookie-banner");

    banner.querySelector(".cookie-accept").addEventListener("click", function(){
      setConsent("granted");
      banner.remove();
      document.documentElement.classList.remove("has-cookie-banner");
      loadGA();
    });
    banner.querySelector(".cookie-decline").addEventListener("click", function(){
      setConsent("denied");
      banner.remove();
      document.documentElement.classList.remove("has-cookie-banner");
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
