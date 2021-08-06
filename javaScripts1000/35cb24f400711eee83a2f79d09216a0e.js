// Configurazione Default:
var siteIdValue = 1779545;
var cookiePolicyIdValue = 81919939;
var localConsentDomain = null;
var Lang = "it";
var LogoAlt = "Mondadori Media";
var LogoURL =
  "https://dafne.sirio.stbm.it/utility-fe/prod/general/images/mondadori_media.png";
var logoWidth = 352;
var logoHeight = 74;

// Configurazione Mondadori Scienza
if (
  location.hostname.match("focus.it") ||
  location.hostname.match("nostrofiglio.it") ||
  location.hostname.match("focusjunior.it")
) {
  siteIdValue = 1779547;
  cookiePolicyIdValue = 28396980;
  LogoAlt = "Mondadori Scienza";
  LogoURL =
    "https://dafne.sirio.stbm.it/utility-fe/prod/general/images/mondadori_scienza.png";
}

var BannerContent = `
  <div id="ameConsentUI">
    <div class="amecp_cookieText">
    <p>Questo sito utilizza cookie, di prima e di terza parte, per mostrarti pubblicitÃ  in linea con le tue preferenze e per misurare le prestazioni di annunci e contenuti pubblicati, come esplicato nella <span class="iubenda-cs-cookie-policy-lnk cp-undeline">cookie policy</span>.</p> <p>In particolare, noi e alcuni <span class="iubenda-vendors-list-link cp-undeline">partner selezionati</span> potremmo utilizzare dati di geolocalizzazione precisi e fare una scansione attiva delle caratteristiche del dispositivo ai fini dellâidentificazione con lo scopo di archiviare e/o accedere ad alcune informazioni su un dispositivo e conseguentemente trattare i tuoi dati personali (es. dati di navigazione, indirizzi IP, etc.) per le seguenti finalitÃ :</p> <p>annunci e contenuti personalizzati, valutazione dellâannuncio e del contenuto, osservazioni del pubblico, sviluppare e perfezionare i prodotti.</p> <p>Puoi liberamente prestare, rifiutare e/o revocare il tuo consenso all'uso dei cookie senza incorrere in alcuna limitazione nella fruizione dei servizi.</p> <p>Qualora il trattamento dei dati personali si basi sul legittimo interesse, hai il diritto di opporti a tale trattamento. Puoi esercitare i tuoi diritti in qualsiasi momento accedendo al <span class="iubenda-advertising-preferences-link cp-undeline">pannello di gestione delle preferenze</span>.</p> <p>Considera che le scelte da te qui effettuate saranno applicate globalmente (le tue impostazioni saranno disponibili ed applicate su altri siti web e app che aderiscono al Transparency and Consent Framework di IAB). </p> <p>
    Cliccando sul bottone "Accetto" acconsenti all'utilizzo dei cookie. Se vuoi personalizzare la gestione dei cookie clicca sul bottone "Personalizza".</p>
    </div>
    <div class="amecp_cookieButton">
      <span class="amecp_button-column">
        <button role="button" class="amecp_button-accetto iubenda-cs-close-btn">Accetto</button>
        <button role="button" class="amecp_button-customize iubenda-advertising-preferences-link">Personalizza</button>
        <img src="${LogoURL}" alt="${LogoAlt}" width="${logoWidth}" height="${logoHeight}"  class="logocpmondadori"/>
        </span>
    </div>
  </div>
`;

// Configurazione altervista.org (IT)
if (
  location.hostname.match("it.altervista.org") ||
  location.hostname.match("it.help.altervista.org")
) {
  localConsentDomain =
    window.location.host == "it.help.altervista.org"
      ? window.location.host
      : "it.altervista.org";
}
// Configurazione altervista.org (EN)
else if (
  location.hostname.match("en.altervista.org") ||
  location.hostname.match("en.help.altervista.org")
) {
  cookiePolicyIdValue = 87184196;
  localConsentDomain =
    window.location.host == "en.help.altervista.org"
      ? window.location.host
      : "en.altervista.org";
  Lang = "en";
  BannerContent = `
      <div id="ameConsentUI">
        <div class="amecp_cookieText amecp_cookieTextEN">
        <p>This website uses cookies, both first party and third party cookies, to show you personalized ads in line with your preferences and to measure content and advertisement performances, as specified in the <span class="iubenda-cs-cookie-policy-lnk cp-undeline">cookie policy</span>.</p> <p>In particular, we and <span class="iubenda-vendors-list-link cp-undeline">selected partners</span>, may use precise geolocation data and actively scan device characteristics for identification to store and/or access information on a device and therefore process personal data (e.g. browsing data, IP addresses etc.) for the following purposes:</p> <p>personalized ads and content, ad and content measurement, and audience insights; develop and improve products.</p> <p>You can freely give, deny, or withdraw your consent without incurring major limitations.</p> <p>Where, instead, the processing of your data is based on legitimate interest, you have the right to object to such processing.</p> <p>Learn more and exercise your rights at any time by accessing the <span class="iubenda-advertising-preferences-link cp-undeline">advertising preferences panel</span>.</p> <p>Consider that your choices made here will be applied globally (your settings will be available and applied on other websites and apps that adhere to the IAB Transparency and Consent Framework).</p> <p>You can consent to the use of cookies by clicking on "Accept". If you want to personalize your cookie preferences click on "Personalize".</p>
        </div>
        <div class="amecp_cookieButton">
          <span class="amecp_button-column">
            <button role="button" class="amecp_button-accetto iubenda-cs-close-btn">I Accept</button>
            <button role="button" class="amecp_button-customize iubenda-advertising-preferences-link">Customize</button>
            <img src="${LogoURL}" alt="${LogoAlt}" width="${logoWidth}" height="${logoHeight}" class="logocpmondadori"/>
          </span>
        </div>
      </div>
    `;
} else if (
  location.hostname.match("www.giallozafferano.com") ||
  location.hostname.match("internimagazine.com")
) {
  //personalizzazione per gz eng
  cookiePolicyIdValue = 87184196;
  Lang = "en";
  BannerContent = `
      <div id="ameConsentUI">
        <div class="amecp_cookieText amecp_cookieTextEN">
        <p>This website uses cookies, both first party and third party cookies, to show you personalized ads in line with your preferences and to measure content and advertisement performances, as specified in the <span class="iubenda-cs-cookie-policy-lnk cp-undeline">cookie policy</span>.</p> <p>In particular, we and <span class="iubenda-vendors-list-link cp-undeline">selected partners</span>, may use precise geolocation data and actively scan device characteristics for identification to store and/or access information on a device and therefore process personal data (e.g. browsing data, IP addresses etc.) for the following purposes:</p> <p>personalized ads and content, ad and content measurement, and audience insights; develop and improve products.</p> <p>You can freely give, deny, or withdraw your consent without incurring major limitations.</p> <p>Where, instead, the processing of your data is based on legitimate interest, you have the right to object to such processing.</p> <p>Learn more and exercise your rights at any time by accessing the <span class="iubenda-advertising-preferences-link cp-undeline">advertising preferences panel</span>.</p> <p>Consider that your choices made here will be applied globally (your settings will be available and applied on other websites and apps that adhere to the IAB Transparency and Consent Framework).</p> <p>You can consent to the use of cookies by clicking on "Accept". If you want to personalize your cookie preferences click on "Personalize".</p>
        </div>
        <div class="amecp_cookieButton">
          <span class="amecp_button-column">
            <button role="button" class="amecp_button-accetto iubenda-cs-close-btn">I Accept</button>
            <button role="button" class="amecp_button-customize iubenda-advertising-preferences-link">Customize</button>
            <img src="${LogoURL}" alt="${LogoAlt}" width="${logoWidth}" height="${logoHeight}" class="logocpmondadori"/>
          </span>
        </div>
      </div>
    `;
}

var ame_cpdata = {
  cpId: cookiePolicyIdValue,
  sId: siteIdValue,
  lcDom: localConsentDomain,
  cpUrl:
    "https://www.iubenda.com/privacy-policy/" +
    cookiePolicyIdValue +
    "/cookie-policy",
  lang: Lang,
  bnrCnt: BannerContent,
};

var cssNetworkCommon = document.createElement("link");

cssNetworkCommon.rel = "stylesheet";
cssNetworkCommon.href =
  "https://dafne.sirio.stbm.it/utility-fe/prod/general/network.common.css";
cssNetworkCommon.type = "text/css";
cssNetworkCommon.media = "screen";
document.body.appendChild(cssNetworkCommon);

var _iub = _iub || [];
_iub.csConfiguration = {
  cookiePolicyId: ame_cpdata.cpId,
  siteId: ame_cpdata.sId,
  cookiePolicyUrl: ame_cpdata.cpUrl,
  localConsentDomain: ame_cpdata.lcDom,
  lang: ame_cpdata.lang,
  consentOnScroll: false,
  consentOnScrollHorizontal: false,
  consentOnContinuedBrowsing: false,
  enableTcf: true,
  tcfVersion: 2,
  invalidateConsentBefore: "2020-09-17",
  googleAdditionalConsentMode: true,
  isTCFConsentGlobal: false,
  banner: {
    prependOnBody: false,
    applyStyles: false,
    content: ame_cpdata.bnrCnt,
    closeButtonDisplay: false,
  },
  callback: {
    onConsentGiven: function () {
      __tcfapi("ping", 2, function (pingData) {
        __tcfapi("addEventListener", 2, function (tcData, success) {
          if (typeof window.consentGivenInSession === "undefined") {
            window.consentGivenInSession = 1;
            console.log("[AmeTCF] cmp: ", tcData, success);
            if (success && tcData.eventStatus != "cmpuishown") {
              console.log("[AmeTCF] tcf loaded");

              window.tcfIsReady = 1;

              if (typeof utag !== "undefined") {
                utag.view();
              }

              var tcf2Ready = new Event("tcf2Ready");
              window.dispatchEvent(tcf2Ready);

              if (typeof GTMConsent === "function") {
                GTMConsent();
              }
            }
          }
        });
      });
    },
    onConsentFirstGiven: function () {
      console.log("onConsentFirstGivenCB");
      if (typeof postFirstConsentGivenCB === "function") {
        postFirstConsentGivenCB();
      }
      try {
        window.Krux ||
          ((Krux = function () {
            Krux.q.push(arguments);
          }).q = []);
        Krux(
          "consent:set",
          {
            dc: true,
            al: true,
            tg: true,
            cd: true,
            sh: true,
            re: true,
          },
          function (errors, body) {
            if (errors) {
              console.error(errors);
            } else {
              console.log("Successfully set consent flags.");
            }
          }
        );
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};

(function (w, d) {
  var s = d.createElement("script"),
    tag = d.head;
  s.src = "https://cdn.iubenda.com/cs/tcf/stub-v2.js";
  tag.appendChild(s);
  s.onload = addIubendaCs(window, document);
})(window, document);

function addIubendaCs(w, d) {
  var s = d.createElement("script"),
    tag = d.head;
  s.async = true;
  s.src = "https://cdn.iubenda.com/cs/iubenda_cs.js";
  tag.appendChild(s);
}

var AME2MMConsent = 0;

function postFirstConsentGivenCB() {
  var postFirstConsentGivenEvent = new Event("postFirstConsentGivenEvent");
  window.dispatchEvent(postFirstConsentGivenEvent);
  if (typeof initGptCMP === "function") {
    initGptCMP(AME2MMConsent);
  }
}

window.addEventListener(
  "MMAdvCall",
  function (e) {
    // console.debug('consenso dato, posso erogare');
    if (typeof initGptCMP === "function") {
      initGptCMP(AME2MMConsent);
    }
  },
  false
);

var AMENetworkCommon = new Event("AMENetworkCommon");
window.dispatchEvent(AMENetworkCommon);
