"use strict";var $buo_show=function(){var op=window._buorgres;var bb=$bu_getBrowser();var burl=op.burl||("http"+(/MSIE/i.test(navigator.userAgent)?"":"s")+"://browser-update.org/");if(!op.url)op.url=burl+((op.l&&(op.l+"/"))||"")+"update-browser.html"+(op.test?"?force_outdated=true":"")+"#"+op.jsv+":"+op.pageurl;op.url_permanent_hide=op.url_permanent_hide||(burl+"block-ignore-browser-update-warning.html");function busprintf(){var args=arguments;var data=args[0];for(var k=1;k<args.length;++k)data=data.replace(/%s/,args[k]);return data;}var t={},ta;t.en={'msg':'Your web browser ({brow_name}) is out of date.','msgmore':'Update your browser for more security, speed and the best experience on this site.','bupdate':'Update browser','bignore':'Ignore','remind':'You will be reminded in {days} days.','bnever':'Never show again'};t.ar={'msg':'ÙØªØµÙØ­ Ø§ÙØ¥ÙØªØ±ÙØª Ø§ÙØ®Ø§Øµ Ø¨Ù ({brow_name}) ØºÙØ± ÙÙØ­Ø¯ÙØ«.','msgmore':'ÙÙ Ø¨ØªØ­Ø¯ÙØ« Ø§ÙÙØªØµÙØ­ Ø§ÙØ®Ø§Øµ Ø¨Ù ÙÙØ²ÙØ¯ ÙÙ Ø§ÙØ£ÙØ§Ù ÙØ§ÙØ³Ø±Ø¹Ø© ÙÙØ£ÙØ¶Ù ØªØ¬Ø±Ø¨Ø© Ø¹ÙÙ ÙØ°Ø§ Ø§ÙÙÙÙØ¹.','bupdate':'ØªØ­Ø¯ÙØ« Ø§ÙÙØªØµÙØ­','bignore':'ØªØ¬Ø§ÙÙ','remind':'Ø³ÙØªÙ ØªØ°ÙÙØ±Ù ÙÙ ØºØ¶ÙÙ {days} Ø£ÙØ§Ù.','bnever':'ÙØ§ ØªØ¸ÙØ± ÙØ±Ø© Ø£Ø®Ø±Ù'};t.bg={'msg':'ÐÐ°ÑÐ¸ÑÑ ÑÐµÐ± Ð±ÑÐ°ÑÐ·ÑÑ ({brow_name}) Ðµ Ð¾ÑÑÐ°ÑÑÐ».','msgmore':'ÐÐºÑÑÐ°Ð»Ð¸Ð·Ð¸ÑÐ°Ð¹ÑÐµ Ð±ÑÐ°ÑÐ·ÑÑÐ° ÑÐ¸ Ð·Ð° Ð¿Ð¾Ð²ÐµÑÐµ ÑÐ¸Ð³ÑÑÐ½Ð¾ÑÑ, Ð±ÑÑÐ·Ð¸Ð½Ð° Ð¸ Ð½Ð°Ð¹-Ð´Ð¾Ð±ÑÐ¾ÑÐ¾ Ð¸Ð·Ð¶Ð¸Ð²ÑÐ²Ð°Ð½Ðµ Ð½Ð° ÑÐ¾Ð·Ð¸ ÑÐ°Ð¹Ñ.','bupdate':'ÐÐºÑÑÐ°Ð»Ð¸Ð·Ð¸ÑÐ°Ð½Ðµ Ð½Ð° Ð±ÑÐ°ÑÐ·ÑÑÐ°','bignore':'Ð¸Ð³Ð½Ð¾ÑÐ¸ÑÐ°Ð¹','remind':'Ð©Ðµ Ð²Ð¸ Ð±ÑÐ´Ðµ Ð½Ð°Ð¿Ð¾Ð¼Ð½ÐµÐ½Ð¾ ÑÐ»ÐµÐ´ {days} Ð´Ð½Ð¸.','bnever':'ÐÐ¸ÐºÐ¾Ð³Ð° Ð¿Ð¾Ð²ÐµÑÐµ Ð´Ð° Ð½Ðµ ÑÐµ Ð¿Ð¾ÐºÐ°Ð·Ð²Ð°'};t.ca={'msg':'El teu navegador ({brow_name}) estÃ  desactualitzat.','msgmore':'Actualitzeu el vostre navegador per obtenir mÃ©s seguretat, velocitat i una millor experiÃ¨ncia en aquest lloc.','bupdate':'Actualitza el navegador','bignore':'Ignorar','remind':'T\'ho recordarem d\'aquÃ­ a {days} dies.','bnever':'No ho tornis a mostrar'};t.cs={'msg':'VÃ¡Å¡ prohlÃ­Å¾eÄ ({brow_name}) je zastaralÃ½.','msgmore':'Aktualizujte prohlÃ­Å¾eÄ pro lepÅ¡Ã­ zabezpeÄenÃ­, rychlost a nejlepÅ¡Ã­ zÃ¡Å¾itek z tohoto webu.','bupdate':'Aktualizovat prohlÃ­Å¾eÄ','bignore':'Ignorovat','remind':'Znovu budete upozornÄni za {days} dnÅ¯.','bnever':'JiÅ¾ nezobrazovat'};t.cy={'msg':'Mae eich porwr gwe ({brow_name}) angen ei ddiweddaru.','msgmore':'Diweddarwch eich porwr i gael mwy o ddiogelwch, cyflymder a\'r profiad gorau ar y safle hwn.','bupdate':'Diweddaru porwr','bignore':'Anwybyddu','remind':'Byddwn yn eich atgoffa mewn {days} diwrnod.','bnever':'Peidiwch Ã¢ dangos eto'};t.da={'msg':'Din web browser ({brow_name}) er forÃ¦ldet','msgmore':'Opdater din browser for mere sikkerhed, hastighed og den bedste oplevelse pÃ¥ denne side.','bupdate':'Opdater browser','bignore':'Ignorer','remind':'Du vil blive pÃ¥mindet om {days} dage.','bnever':'Vis aldrig igen'};t.de={'msg':'Ihr Webbrowser ({brow_name}) ist veraltet.','msgmore':'Aktualisieren Sie Ihren Browser fÃ¼r mehr Sicherheit, Geschwindigkeit und den besten Komfort auf dieser Seite.','bupdate':'Browser aktualisieren','bignore':'Ignorieren','remind':'Sie werden in {days} Tagen wieder erinnert.','bnever':'Nie wieder anzeigen'};t.el={'msg':'Î¤Î¿ ÏÏÏÎ³ÏÎ±Î¼Î¼Î± ÏÎµÏÎ¹Î®Î³Î·ÏÎ®Ï ÏÎ±Ï ({brow_name}) ÎµÎ¯Î½Î±Î¹ Î±ÏÎ±ÏÏÎ±Î¹ÏÎ¼Î­Î½Î¿.','msgmore':'ÎÎ½Î·Î¼ÎµÏÏÏÏÎµ ÏÎ¿ ÏÏÏÎ³ÏÎ±Î¼Î¼Î± ÏÎµÏÎ¹Î®Î³Î·ÏÎ®Ï ÏÎ±Ï Î³Î¹Î± ÏÎµÏÎ¹ÏÏÏÏÎµÏÎ· Î±ÏÏÎ¬Î»ÎµÎ¹Î±, ÏÎ±ÏÏÏÎ·ÏÎ± ÎºÎ±Î¹ ÏÎ·Î½ ÎºÎ±Î»ÏÏÎµÏÎ· ÎµÎ¼ÏÎµÎ¹ÏÎ¯Î± Ï\' Î±ÏÏÏÎ½ ÏÎ¿Î½ Î¹ÏÏÏÏÎ¿ÏÎ¿.','bupdate':'ÎÎ½Î·Î¼ÎµÏÏÏÏÎµ ÏÎ¿ ÏÏÏÎ³ÏÎ±Î¼Î¼Î± ÏÎµÏÎ¹Î®Î³Î·ÏÎ·Ï','bignore':'ÎÎ³Î½Î¿Î®ÏÏÎµ','remind':'ÎÎ± ÏÎ±Ï ÏÎ¿ ÏÏÎµÎ½Î¸ÏÎ¼Î¯ÏÎ¿ÏÎ¼Îµ ÏÎµ {days} Î·Î¼Î­ÏÎµÏ.','bnever':'ÎÎ± Î¼Î·Î½ ÎµÎ¼ÏÎ±Î½Î¹ÏÏÎµÎ¯ Î¾Î±Î½Î¬'};t.es={'msg':'Su navegador web ({brow_name}) estÃ¡ desactualizado.','msgmore':'Actualice su navegador para obtener mÃ¡s seguridad, velocidad y para disfrutar de la mejor experiencia en este sitio.','bupdate':'Actualizar navegador','bignore':'Ignorar','remind':'Se le recordarÃ¡ en {days} dÃ­as.','bnever':'No mostrar de nuevo'};t.et={'msg':'Teie veebilehitseja ({brow_name}) on vananenud.','msgmore':'Veebilehitseja uuendamisega kaasneb nii parem turvalisus, kiirus kui ka kasutusmugavus.','bupdate':'Uuenda veebilehitsejat','bignore':'Eira','remind':'Uus meeldetuletus {days} pÃ¤eva pÃ¤rast.','bnever':'Ãra kunagi enam nÃ¤ita'};t.fa={'msg':'ÙØ±ÙØ±Ú¯Ø± Ø´ÙØ§ ({brow_name}) ÙØ¯ÛÙÛ Ø§Ø³Øª.','msgmore':'Ø¨Ø±Ø§Û Ø§ÛÙÙÛØ Ø³Ø±Ø¹Øª Ù ØªØ¬Ø±Ø¨Ù Ø¨ÙØªØ± ÙØ±ÙØ±Ú¯Ø± Ø®ÙØ¯ Ø±Ø§ Ø¨ÙâØ±ÙØ² Ú©ÙÛØ¯.','bupdate':'Ø¨ÙâØ±ÙØ²Ø±Ø³Ø§ÙÛ ÙØ±ÙØ±Ú¯Ø±','bignore':'ÙØ§Ø¯ÛØ¯Ù Ú¯Ø±ÙØªÙ','remind':'Ø¨Ù Ø´ÙØ§ ØªØ§ {days} Ø±ÙØ² Ø¯ÛÚ¯Ø± Ø¯ÙØ¨Ø§Ø±Ù ÛØ§Ø¯âØ¢ÙØ±Û Ø®ÙØ§ÙØ¯ Ø´Ø¯.','bnever':'ÙØ±Ú¯Ø² ÙÙØ§ÛØ´ ÙØ¯Ù'};t.fi={'msg':'Selaimesi ({brow_name}) on vanhentunut.','msgmore':'PÃ¤ivitÃ¤ selaimesi saadaksesi tietoturvapÃ¤ivityksiÃ¤, nopeutta sekÃ¤ parhaan kÃ¤yttÃ¶kokemuksen sivustolla.','bupdate':'PÃ¤ivitÃ¤ selain','bignore':'Ohita','remind':'Saat uuden muistutuksen {days} pÃ¤ivÃ¤n pÃ¤Ã¤stÃ¤.','bnever':'ÃlÃ¤ nÃ¤ytÃ¤ uudestaan'};t.fr={'msg':'Votre navigateur Web ({brow_name}) n\'est pas Ã  jour.','msgmore':'Mettez Ã  jour votre navigateur pour plus de sÃ©curitÃ© et de rapiditÃ© et une meilleure expÃ©rience sur ce site.','bupdate':'Mettre Ã  jour le navigateur','bignore':'Ignorer','remind':'Vous serez rappelÃ© dans {days} jours.','bnever':'Ne plus afficher'};t.gl={'msg':'TÃ¡ an lÃ­onlÃ©itheoir agat ({brow_name}) as dÃ¡ta.','msgmore':'Actualiza o teu navegador para obter mÃ¡is seguridade, rapidez e mellor experiencia neste sitio.','bupdate':'Actualizar navegador web','bignore':'Ignorar','remind':'Lembraralle en {days} dÃ­as.','bnever':'Non volver mostrar mÃ¡is'};t.he={'msg':'××¤××¤× ({brow_name}) ×©×× ××× × ××¢××××.','msgmore':'×¢×××/× ××ª ×××¤××¤× ×©×× ××©××¤××¨ ×××××× ××××××¨××ª ×××× ×××× ××ª ××××××× ××××× ××××ª×¨ ×××ª×¨ ××.','bupdate':'×¢××× ××¤××¤×','bignore':'××ª×¢××','remind':'×ª×§××/× ×ª××××¨×ª ××¢××  {days} ××××.','bnever':'×× ×ª×¦×× ×©××'};t.hi={'msg':'à¤à¤ªà¤à¤¾ à¤µà¥à¤¬ à¤¬à¥à¤°à¤¾à¤à¤à¤¼à¤° ({brow_name}) à¤ªà¥à¤°à¤¾à¤¨à¤¾ à¤¹à¥à¥¤','msgmore':'à¤à¤¸ à¤¸à¤¾à¤à¤ à¤ªà¤° à¤à¤§à¤¿à¤ à¤¸à¥à¤°à¤à¥à¤·à¤¾, à¤à¤¤à¤¿ à¤à¤° à¤¸à¤°à¥à¤µà¥à¤¤à¥à¤¤à¤® à¤à¤¨à¥à¤­à¤µ à¤à¤°à¤¨à¥ à¤à¥ à¤²à¤¿à¤ à¤à¤ªà¤¨à¥ à¤¬à¥à¤°à¤¾à¤à¥à¤° à¤à¥ à¤à¤ªà¤¡à¥à¤ à¤à¤°à¥à¤ à¥¤','bupdate':'à¤¬à¥à¤°à¤¾à¤à¤à¤¼à¤° à¤à¤ªà¤¡à¥à¤ à¤à¤°à¥à¤','bignore':'à¤¨à¤à¤°à¤à¤à¤¦à¤¾à¤ à¤à¤°à¥à¤','remind':'à¤à¤ªà¤à¥ {days} à¤¦à¤¿à¤¨à¥à¤ à¤®à¥à¤ à¤¯à¤¾à¤¦ à¤¦à¤¿à¤²à¤¾à¤¯à¤¾ à¤à¤¾à¤à¤à¤¾à¥¤','bnever':'à¤«à¤¿à¤° à¤à¤­à¥ à¤®à¤¤ à¤¦à¤¿à¤à¤¾à¤¨à¤¾'};t.hu={'msg':'Az Ãn webbÃ¶ngÃ©szÅje ({brow_name}) elavult.','msgmore':'FrissÃ­tse bÃ¶ngÃ©szÅjÃ©t a nagyobb biztonsÃ¡g, sebessÃ©g Ã©s Ã©lmÃ©ny Ã©rdekÃ©ben!','bupdate':'BÃ¶ngÃ©szÅ frissÃ­tÃ©se','bignore':'MellÅzÃ©s','remind':'Ãjra emlÃ©keztetÃ¼nk {days} napon belÃ¼l.','bnever':'Ne mutassa tÃ¶bbet'};t.id={'msg':'Peramban web ({brow_name}) Anda sudah usang.','msgmore':'Perbarui peramban Anda untuk pengalaman terbaik, lebih aman, dan cepat di situs ini.','bupdate':'Perbarui peramban','bignore':'Abaikan','remind':'Anda akan diingatkan kembali dalam {days} hari.','bnever':'Jangan pernah tampilkan lagi'};t.it={'msg':'Il tuo browser ({brow_name}) non Ã¨ aggiornato.','msgmore':'Aggiorna il browser per una maggiore sicurezza, velocitÃ  e la migliore esperienza su questo sito.','bupdate':'Aggiorna browser','bignore':'Ignora','remind':'Riceverai un promemoria tra {days} giorni.','bnever':'Non mostrare di nuovo'};t.ja={'msg':'ãä½¿ãã®ãã©ã¦ã¶ï¼{brow_name}ï¼ã¯ææ°çã§ã¯ããã¾ããã','msgmore':'ã»ã­ã¥ãªãã£ãã¹ãã¼ããããã¦ãã®ãµã¤ãã§ã®æè¯ã®ä½é¨ã®ããã«ãä½¿ãã®ãã©ã¦ã¶ãæ´æ°ãã¦ãã ããã','bupdate':'ãã©ã¦ã¶ãæ´æ°ãã','bignore':'ç¡è¦ãã','remind':'{days} æ¥å¾ã«ããä¸åº¦ãç¥ãããã¾ãã','bnever':'æ¬¡åããè¡¨ç¤ºããªã'};t.ko={'msg':'ê·íì ì¹ ë¸ë¼ì°ì ({brow_name})ë ì¤ëëììµëë¤.','msgmore':'ì´ ì¬ì´í¸ìì ë³´ì, ìëì ìµìì ê²½íì ì»ì¼ë ¤ë©´ ë¸ë¼ì°ì ë¥¼ ìë°ì´í¸íì­ìì¤.','bupdate':'ë¸ë¼ì°ì  ìë°ì´í¸íê¸°','bignore':'ë¬´ìíê¸°','remind':'{days}ì¼ íì ìë ¤ ëë¦½ëë¤.','bnever':'ë¤ì íìíì§ ìê¸°'};t.lt={'msg':'JÅ«sÅ³ narÅ¡yklÄ ({brow_name}) yra pasenusi.','msgmore':'Atsinaujinkite savo narÅ¡yklÄ norÄdami gauti daugiau saugumo, greiÄio ir paÄiÅ³ geriausiÅ³ patirÄiÅ³ Å¡ioje svetainÄje.','bupdate':'Atnaujinti narÅ¡yklÄ','bignore':'Nepaisyti','remind':'Jums bus priminta po {days} dienÅ³.','bnever':'Daugiau niekada nerodyti'};t.lv={'msg':'JÅ«su pÄrlÅ«kprogramma ({brow_name}) ir novecojusi.','msgmore':'Atjaunojiet savu pÄrlÅ«kprogrammu lielÄkai droÅ¡Ä«bai, Ätrumam un labÄkai pieredzei ar Å¡o vietni.','bupdate':'AtjauninÄt pÄrlÅ«kprogrammu','bignore':'IgnorÄt','remind':'Jums tiks parÄdÄ«ts atgÄdinÄjums pÄc {days} dienÄm.','bnever':'Vairs nerÄdÄ«t'};t.ms={'msg':'Pelayar web anda ({brow_name}) sudah lapuk.','msgmore':'Kemas kini pelayar anda untuk lebih keselamatan, kelajuan dan pengalaman terbaik di laman web ini.','bupdate':'Kemas kini pelayar','bignore':'Abaikan','remind':'Anda akan diingatkan dalam {days} hari.','bnever':'Jangan tunjukkan lagi'};t.nl={'msg':'Uw webbrowser ({brow_name}) is verouderd.','msgmore':'Update uw browser voor meer veiligheid, snelheid en om deze site optimaal te kunnen gebruiken.','bupdate':'Browser updaten','bignore':'Negeren','remind':'We zullen u er in {days} dagen aan herinneren.','bnever':'Nooit meer tonen'};t.no={'msg':'Nettleseren din ({brow_name}) er utdatert.','msgmore':'Oppdater nettleseren din for Ã¸kt sikkerhet, hastighet og den beste opplevelsen pÃ¥ dette nettstedet.','bupdate':'Oppdater nettleser','bignore':'Ignorer','remind':'Du vil fÃ¥ en pÃ¥minnelse om {days} dager.','bnever':'Aldri vis igjen'};t.pl={'msg':'Twoja przeglÄdarka ({brow_name}) jest nieaktualna.','msgmore':'Zaktualizuj przeglÄdarkÄ, by korzystaÄ z tej strony bezpieczniej, szybciej i po prostu sprawniej.','bupdate':'Aktualizuj przeglÄdarkÄ','bignore':'Ignoruj','remind':'Przypomnimy o tym za {days} dni.','bnever':'Nie pokazuj wiÄcej'};t.pt={'msg':'Seu navegador da web ({brow_name}) estÃ¡ desatualizado.','msgmore':'Atualize seu navegador para ter mais seguranÃ§a e velocidade, alÃ©m da melhor experiÃªncia neste site.','bupdate':'Atualizar navegador','bignore':'Ignorar','remind':'VocÃª serÃ¡ relembrado em {days} dias.','bnever':'NÃ£o mostrar novamente'};t.ro={'msg':'Browserul tÄu ({brow_name}) nu este actualizat.','msgmore':'ActualizeazÄ browserul pentru o mai mare siguranÈÄ, vitezÄ Èi cea mai bunÄ experienÈÄ pe acest site.','bupdate':'ActualizeazÄ browser','bignore':'IgnorÄ','remind':'Èi se va reaminti peste {days} zile.','bnever':'Nu mai arÄta'};t.ru={'msg':'ÐÐ°Ñ Ð±ÑÐ°ÑÐ·ÐµÑ ({brow_name}) ÑÑÑÐ°ÑÐµÐ».','msgmore':'ÐÐ±Ð½Ð¾Ð²Ð¸ÑÐµ Ð²Ð°Ñ Ð±ÑÐ°ÑÐ·ÐµÑ Ð´Ð»Ñ Ð¿Ð¾Ð²ÑÑÐµÐ½Ð¸Ñ ÑÑÐ¾Ð²Ð½Ñ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑÐ¸, ÑÐºÐ¾ÑÐ¾ÑÑÐ¸ Ð¸ ÐºÐ¾Ð¼ÑÐ¾ÑÑÐ° Ð¸ÑÐ¿Ð¾Ð»ÑÐ·Ð¾Ð²Ð°Ð½Ð¸Ñ ÑÑÐ¾Ð³Ð¾ ÑÐ°Ð¹ÑÐ°.','bupdate':'ÐÐ±Ð½Ð¾Ð²Ð¸ÑÑ Ð±ÑÐ°ÑÐ·ÐµÑ','bignore':'ÐÐ³Ð½Ð¾ÑÐ¸ÑÐ¾Ð²Ð°ÑÑ','remind':'ÐÑ Ð¿Ð¾Ð»ÑÑÐ¸ÑÐµ Ð½Ð°Ð¿Ð¾Ð¼Ð¸Ð½Ð°Ð½Ð¸Ðµ ÑÐµÑÐµÐ· {days} Ð´Ð½ÐµÐ¹.','bnever':'ÐÐ¾Ð»ÑÑÐµ Ð½Ðµ Ð¿Ð¾ÐºÐ°Ð·ÑÐ²Ð°ÑÑ '};t.sk={'msg':'VÃ¡Å¡ internetovÃ½ prehliadaÄ ({brow_name}) je zastaranÃ½.','msgmore':'Pre vÃ¤ÄÅ¡iu bezpeÄnosÅ¥, rÃ½chlosÅ¥ a lepÅ¡iu skÃºsenosÅ¥ s touto strÃ¡nkou si aktualizujte svoj prehliadaÄ.','bupdate':'AktualizovaÅ¥ prehliadaÄ','bignore':'IgnorovaÅ¥','remind':'Bude vÃ¡m to pripomenutÃ© o {days} dnÃ­.','bnever':'UÅ¾ nikdy viac neukazovaÅ¥'};t.sl={'msg':'VaÅ¡ spletni brskalnik ({brow_name}) je zastarel.','msgmore':'Posodobite svoj brskalnik za dodatno varnost, hitrost in najboljÅ¡o izkuÅ¡njo na tem spletnem mestu.','bupdate':'Posodobi brskalnik','bignore':'Prezri','remind':'Opomnik boste prejeli Äez toliko dni: {days}.','bnever':'Ne prikaÅ¾i veÄ'};t.sq={'msg':'Shfletuesi juaj ({brow_name}) Ã«shtÃ« i vjetruar.','msgmore':'PÃ«rditÃ«soni shfletuesin tuaj pÃ«r mÃ« tepÃ«r siguri, shpejtÃ«si dhe pÃ«r mÃ« tÃ« mirin e funksionimeve nÃ« kÃ«tÃ« sajt.','bupdate':'PÃ«rditÃ«so shfletuesin','bignore':'ShpÃ«rfille','remind':'Do tâju rikujtohet pas {days} ditÃ«sh.','bnever':'Mos e shfaq kurrÃ« mÃ«'};t.sr={'msg':'VaÅ¡ pretraÅ¾ivaÄ ({brow_name}) je zastareo.','msgmore':'Ima poznate sigurnosne probleme i najverovatnije neÄe prikazati sve funkcionalnisti ovog i drugih sajtova.','bupdate':'Nadogradi pretraÅ¾ivaÄ','bignore':'Ignorisi','remind':'ZaboravicÌete za {days} dana.','bnever':'Ne prikazuj opet'};t.sv={'msg':'Din webblÃ¤sare ({brow_name}) Ã¤r fÃ¶rÃ¥ldrad. ','msgmore':'Uppdatera din webblÃ¤sare fÃ¶r mer sÃ¤kerhet, hastighet och den bÃ¤sta upplevelsen pÃ¥ den hÃ¤r sajten. ','bupdate':'Uppdatera webblÃ¤saren','bignore':'Ignorera','remind':'Du fÃ¥r en pÃ¥minnelse om {days} dagar.','bnever':'Visa aldrig igen'};t.th={'msg':'à¹à¸§à¹à¸à¹à¸à¸£à¸²à¸§à¹à¹à¸à¸­à¸£à¹à¸à¸­à¸à¸à¸¸à¸ ({brow_name}) à¸¥à¹à¸²à¸ªà¸¡à¸±à¸¢à¹à¸¥à¹à¸§','msgmore':'à¸­à¸±à¸à¹à¸à¸à¹à¸à¸£à¸²à¸§à¹à¹à¸à¸­à¸£à¹à¹à¸à¸·à¹à¸­à¹à¸à¸´à¹à¸¡à¸à¸§à¸²à¸¡à¸à¸¥à¸­à¸à¸ à¸±à¸¢, à¸à¸§à¸²à¸¡à¹à¸£à¹à¸§ à¹à¸¥à¸°à¸à¸£à¸°à¸ªà¸à¸à¸²à¸£à¸à¹à¸à¸µà¹à¸à¸µà¸à¸µà¹à¸ªà¸¸à¸à¸à¸à¹à¸§à¹à¸à¹à¸à¸à¹à¸à¸µà¹','bupdate':'à¸­à¸±à¸à¹à¸à¸à¹à¸à¸£à¸²à¸§à¹à¹à¸à¸­à¸£à¹','bignore':'à¸à¹à¸²à¸¡','remind':'à¸à¸¸à¸à¸à¸°à¹à¸à¹à¸£à¸±à¸à¸à¸²à¸£à¹à¸à¹à¸à¹à¸à¸·à¸­à¸à¹à¸ {days} à¸§à¸±à¸','bnever':'à¹à¸¡à¹à¸à¹à¸­à¸à¹à¸ªà¸à¸à¸­à¸µà¸'};t.tr={'msg':'Web tarayÄ±cÄ±nÄ±z ({brow_name}) gÃ¼ncel deÄil.','msgmore':'Daha fazla gÃ¼venlik ve hÄ±z ile bu sitede en iyi deneyim iÃ§in tarayÄ±cÄ±nÄ±zÄ± gÃ¼ncelleyin.','bupdate':'TarayÄ±cÄ±yÄ± gÃ¼ncelle','bignore':'Yok say','remind':'{days} gÃ¼n sonra bir hatÄ±rlatma alacaksÄ±nÄ±z.','bnever':'Bir daha gÃ¶sterme'};t.uk={'msg':'ÐÐ°Ñ Ð±ÑÐ°ÑÐ·ÐµÑ ({brow_name}) Ð·Ð°ÑÑÐ°ÑÑÐ»Ð¸Ð¹.','msgmore':'ÐÐ½Ð¾Ð²ÑÑÑ ÑÐ²ÑÐ¹ Ð±ÑÐ°ÑÐ·ÐµÑ Ð´Ð»Ñ Ð±ÑÐ»ÑÑÐ¾Ñ Ð±ÐµÐ·Ð¿ÐµÐºÐ¸, ÑÐ²Ð¸Ð´ÐºÐ¾ÑÑÑ ÑÐ° Ð¿Ð¾Ð²Ð½Ð¾ÑÑÐ½Ð½Ð¾Ñ ÑÐ¾Ð±Ð¾ÑÐ¸ ÑÑÐ¾Ð³Ð¾ ÑÐ°Ð¹ÑÑ.','bupdate':'ÐÐ½Ð¾Ð²Ð¸ÑÐ¸ Ð±ÑÐ°ÑÐ·ÐµÑ','bignore':'ÐÑÐ¾Ð¿ÑÑÑÐ¸ÑÐ¸','remind':'ÐÐ¸ Ð¾ÑÑÐ¸Ð¼Ð°ÑÑÐµ Ð½Ð°Ð³Ð°Ð´ÑÐ²Ð°Ð½Ð½Ñ ÑÐµÑÐµÐ· {days} Ð´Ð½ÑÐ².','bnever':'ÐÑÐ»ÑÑÐµ Ð½Ðµ Ð¿Ð¾ÐºÐ°Ð·ÑÐ²Ð°ÑÐ¸'};t.uz={'msg':'Sizning ({brow_name}) veb-brauzeringiz eskirgan','msgmore':'Xavfsizlik, tezkorlik va ushbu sayt imkoniyatlaridan to`liq foydalanish uchun brauzeringizni yangilang.','bupdate':'Brauzeringizni yangilang','bignore':'Eâtibor bermaslik','remind':'Sizga {days} kundan so`ng eslatammiz.','bnever':'Hech qachon qayta ko\'rsatmang'};t.vi={'msg':'TrÃ¬nh duyá»t web cá»§a báº¡n ({brow_name}) ÄÃ£ lá»i thá»i.','msgmore':'Cáº­p nháº­t trÃ¬nh duyá»t cá»§a báº¡n Äá» cÃ³ thÃªm báº£o máº­t, tá»c Äá» vÃ  tráº£i nghiá»m tá»t nháº¥t trÃªn trang web nÃ y.','bupdate':'Cáº­p nháº­t trÃ¬nh duyá»t','bignore':'Bá» qua','remind':'Báº¡n sáº½ ÄÆ°á»£c nháº¯c nhá» sau {days} ngÃ y.','bnever':'KhÃ´ng bao giá» hiá»n thá» láº¡i'};t.zh={'msg':'æ¨çç½é¡µæµè§å¨ï¼{brow_name}ï¼å·²è¿æã','msgmore':'æ´æ°æ¨çæµè§å¨ï¼ä»¥ä¾¿å¨è¯¥ç½ç«ä¸è·å¾æ´å®å¨ãæ´å¿«éåæå¥½çä½éªã','bupdate':'æ´æ°æµè§å¨','bignore':'å¿½ç¥','remind':'ä¼å¨{days}å¤©åæéæ¨ã','bnever':'ä¸åæ¾ç¤º'};t["zh-tw"]=t["zh-hans-cn"]={'msg':'æ¨çç¶²è·¯çè¦½å¨ï¼{brow_name}ï¼å·²éèã','msgmore':'æ´æ°æ¨ççè¦½å¨ä»¥ç²å¾æ´ä½³çå®å¨æ§ãéåº¦ä»¥åå¨æ­¤ç¶²ç«çæä½³é«é©ã','bupdate':'æ´æ°çè¦½å¨','bignore':'å¿½ç¥','remind':'æ¨å°å¨ {days} å¤©å¾æ¶å°æéã','bnever':'ä¸è¦åé¡¯ç¤º'};var custom_text=op["text_for_"+bb.n+"_in_"+op.ll]||op["text_for_"+bb.n]||op["text_"+op.llfull]||op["text_in_"+op.ll]||op["text_"+op.ll]||op.text;t=ta=t[op.llfull]||t[op.ll]||t.en;if(custom_text)if(typeof custom_text==='string')t=ta=custom_text;else for(var i in custom_text)ta[i]=custom_text[i];if(ta.msg)t='<b class="buorg-mainmsg">'+t.msg+'</b> <span class="buorg-moremsg">'+t.msgmore+'</span> <span class="buorg-buttons"><a{up_but}>'+t.bupdate+'</a> <a{ignore_but}>'+t.bignore+'</a></span>';var tar="";if(op.newwindow)tar=' target="_blank" rel="noopener"';var div=op.div=document.createElement("div");div.id=div.className="buorg";var style='<style>.buorg-icon {width: 22px; height: 16px; vertical-align: middle; position: relative; top: -0.05em; display: inline-block; background: no-repeat 0px center url(https://browser-update.org/static/img/small/'+bb.n+'.png);}</style>';var style2='<style>.buorg {position:absolute;position:fixed;z-index:111111; width:100%; top:0px; left:0px; border-bottom:1px solid #A29330; text-align:center;  color:#000; background-color: #fff8ea; font: 18px Calibri,Helvetica,sans-serif; box-shadow: 0 0 5px rgba(0,0,0,0.2);animation: buorgfly 1s ease-out 0s;}'+'.buorg-pad { padding: 9px;  line-height: 1.7em; }'+'.buorg-buttons { display: block; text-align: center; }'+'#buorgig,#buorgul,#buorgpermanent { color: #fff; text-decoration: none; cursor:pointer; box-shadow: 0 0 2px rgba(0,0,0,0.4); padding: 1px 10px; border-radius: 4px; font-weight: normal; background: #5ab400;    white-space: nowrap;    margin: 0 2px; display: inline-block;}'+'#buorgig { background-color: #edbc68;}'+'@media only screen and (max-width: 700px){.buorg div { padding:5px 12px 5px 9px; line-height: 1.3em;}}'+'@keyframes buorgfly {from {opacity:0;transform:translateY(-50px)} to {opacity:1;transform:translateY(0px)}}'+'.buorg-fadeout {transition: visibility 0s 8.5s, opacity 8s ease-out .5s;}</style>';if(ta.msg&&(op.ll=="ar"||op.ll=="he"||op.ll=="fa"))style2+='<style>.buorg {direction:RTL; unicode-bidi:embed;}</style>';if(!ta.msg&&t.indexOf&&t.indexOf("%s")!==-1){t=busprintf(t,bb.t,' id="buorgul" href="'+op.url+'"'+tar);style+='<style>.buorg {position:absolute;position:fixed;z-index:111111; width:100%; top:0px; left:0px; border-bottom:1px solid #A29330; text-align:left; cursor:pointer; color:#000; font: 13px Arial,sans-serif;color:#000;}'+'.buorg div { padding:5px 36px 5px 40px; }'+'.buorg>div>a,.buorg>div>a:visited{color:#E25600; text-decoration: underline;}'+'#buorgclose{position:absolute;right:6px;top:0px;height:20px;width:12px;font:18px bold;padding:0;}'+'#buorga{display:block;}'+'@media only screen and (max-width: 700px){.buorg div { padding:5px 15px 5px 9px; }}</style>';div.innerHTML='<div>'+t+'<div id="buorgclose"><a id="buorga">&times;</a></div></div>'+style;op.addmargin=true;}else{if(op.style==="bottom")style2+='<style>.buorg {bottom:0; top:auto; border-top:1px solid #A29330; } @keyframes buorgfly {from {opacity:0;transform:translateY(50px)} to {opacity:1;transform:translateY(0px)}}</style>';else if(op.style==="corner")style2+='<style> .buorg { text-align: left; width:300px; top:50px; right:50px; left:auto; border:1px solid #A29330; } .buorg-buttons, .buorg-mainmsg, .buorg-moremsg { display: block; } .buorg-buttons a {margin: 4px 2px;} .buorg-icon {display: none;}</style>';else op.addmargin=true;t=t.replace("{brow_name}",bb.t).replace("{up_but}",' id="buorgul" href="'+op.url+'"'+tar).replace("{ignore_but}",' id="buorgig" role="button" tabindex="0"');div.innerHTML='<div class="buorg-pad" role="status" aria-live="polite"><span class="buorg-icon"> </span>'+t+'</div>'+style+style2;}op.text=t;if(op.container){op.container.appendChild(div);op.addmargin=false;}else document.body.insertBefore(div,document.body.firstChild);var updatebutton=document.getElementById("buorgul");if(updatebutton)updatebutton.onclick=function(e){div.onclick=null;op.onclick(op);if(op.noclose)return;op.setCookie(op.reminderClosed);if(!op.noclose){div.style.display="none";if(op.addmargin&&op.shift_page_down!==false)hm.style.marginTop=op.bodymt;}};if(!custom_text){div.style.cursor="pointer";div.onclick=function(){if(op.newwindow)window.open(op.url,"_blank");else window.location.href=op.url;op.setCookie(op.reminderClosed);op.onclick(op);};}if(op.addmargin&&op.shift_page_down!==false){var hm=document.getElementsByTagName("html")[0]||document.body;op.bodymt=hm.style.marginTop;hm.style.marginTop=(div.clientHeight)+"px";}var ignorebutton=document.getElementById("buorga")||document.getElementById("buorgig");if(ignorebutton){ignorebutton.onclick=function(e){div.onclick=null;op.onclose(op);if(op.addmargin&&op.shift_page_down!==false)hm.style.marginTop=op.bodymt;op.setCookie(op.reminderClosed);if(!op.no_permanent_hide&&ta.bnever&&ta.remind){op.div.innerHTML='<div class="buorg-pad"><span class="buorg-moremsg">'+(op.reminderClosed>24?ta.remind.replace("{days}",Math.round(op.reminderClosed/24)):"")+'</span> <span class="buorg-buttons"><a id="buorgpermanent" role="button" tabindex="0" href="'+op.url_permanent_hide+'"'+tar+'>'+ta.bnever+'</a></span></div>'+style+style2;div.className="buorg buorg-fadeout";document.getElementById("buorgpermanent").onclick=function(e){op.setCookie(24*365);op.div.style.display="none";};op.div.style.opacity=0;op.div.style.visibility="hidden";return false;}op.div.style.display="none";return false;};if(op.noclose||op.reminderClosed==0)ignorebutton.parentNode.removeChild(ignorebutton);}op.onshow(op);if(op.test&&!op.dont_show_debuginfo){var e=document.createElement("script");e.src=op.domain+"/update.test.js";document.body.appendChild(e);}};$buo_show();