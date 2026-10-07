(function(){
  'use strict';
  var S=window.SITE, lang=localStorage.getItem('segamat-lang')||S.defaultLanguage;
  var $=function(s,c){return (c||document).querySelector(s)}, $$=function(s,c){return Array.from((c||document).querySelectorAll(s))};
  var get=function(obj,path){return path.split('.').reduce(function(v,k){return v&&v[k]},obj)};
  var t=function(path){return get(S.i18n[lang],path)||path};
  var esc=function(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]})};
  var time=function(v){var p=v.split(':'),h=+p[0],m=p[1],amp=h>=12?'pm':'am',hh=h%12||12;return hh+':'+m+amp};
  var wa=function(contact,key){var msg=t('contact.'+(key||'waGeneral'));return 'https://wa.me/'+contact.wa+'?text='+encodeURIComponent(msg)};

  function renderStatic(){
    document.documentElement.lang=S.languages.find(function(x){return x.code===lang}).htmlLang;
    document.body.className=lang==='zh'?'zh':'';
    $$('[data-i18n]').forEach(function(el){var val=t(el.dataset.i18n);el.textContent=val});
    $$('[data-i18n-aria]').forEach(function(el){el.setAttribute('aria-label',t(el.dataset.i18nAria))});
    $$('[data-bind]').forEach(function(el){var val=get(S,el.dataset.bind);if(el.tagName==='IMG'){el.src=val}else el.textContent=val});
    $$('[data-bind-href]').forEach(function(el){el.href=get(S,el.dataset.bindHref)});
    document.title=t('meta.title');$('meta[name="description"]').content=t('meta.description');
    $$('[data-src]').forEach(function(el){el.src=el.dataset.src});
    $$('[data-hero-portrait]').forEach(function(el){el.src=S.assets.heroPortrait});
    $$('[data-hero-landscape]').forEach(function(el){el.srcset=S.assets.heroLandscape});
    renderLanguages(); renderFeatures(); renderPrograms(); renderSchedule(); renderInstructors(); renderVenue(); renderFaq(); renderTerms(); renderContacts(); renderFooterContacts(); renderFab();
  }
  function renderLanguages(){var box=$('[data-lang-switcher]');box.innerHTML=S.languages.map(function(x){return '<button class="'+(x.code===lang?'active':'')+'" data-language="'+x.code+'">'+x.short+'</button>'}).join('');$$('[data-language]').forEach(function(b){b.onclick=function(){lang=b.dataset.language;localStorage.setItem('segamat-lang',lang);renderStatic()}})}
  function renderFeatures(){var copy=t('about.features');$('[data-features]').innerHTML=copy.map(function(x,i){return '<article class="feature fade-in"><span class="feature-number">0'+(i+1)+'</span><h3>'+esc(x.title)+'</h3><p>'+esc(x.text)+'</p></article>'}).join('')}
  function renderPrograms(){var copy=t('programs.items');$('[data-programs]').innerHTML=S.programs.map(function(p){var x=copy[p.id];return '<article class="programme-card fade-in"><img src="'+p.img+'" alt="'+esc(x.title)+'" loading="lazy"><div class="programme-body"><div class="programme-meta"><span class="programme-tag">'+esc(x.tag)+'</span><span class="programme-tag">'+esc(p.id)+'</span></div><h3>'+esc(x.title)+'</h3><p>'+esc(x.text)+'</p><div class="programme-when">'+esc(x.when)+'</div><a class="text-link" href="#contact" data-program-wa="'+p.id+'">'+esc(t('programs.cta'))+'</a></div></article>'}).join('');$$('[data-program-wa]').forEach(function(a){a.onclick=function(){a.href=wa(S.contacts[0],'waGeneral')}})}
  function renderSchedule(){var copy=t('schedule');$('[data-schedule]').innerHTML=S.schedule.map(function(day){return '<div class="day-col"><div class="day-name">'+esc(copy.days[day.dayKey])+'</div>'+day.slots.map(function(slot){return '<div class="slot '+slot.typeKey+'"><span class="slot-time">'+time(slot.start)+' – '+time(slot.end)+'</span><span class="slot-type">'+esc(copy.classTypes[slot.typeKey])+'</span></div>'}).join('')+'</div>'}).join('');$('[data-notes]').innerHTML=copy.notes.map(function(n){return '<li>'+esc(n)+'</li>'}).join('');$('[data-contact-mini]').innerHTML=S.contacts.map(function(c){return '<div class="mini-contact"><strong>'+esc(c.name)+'</strong><a href="'+wa(c,'waGeneral')+'" target="_blank" rel="noopener">'+esc(c.phone)+'</a></div>'}).join('')}
  function renderInstructors(){var c=t('instructors');$('[data-instructors]').innerHTML=S.contacts.map(function(x){return '<article class="instructor-card fade-in"><img src="'+x.photo+'" alt="'+esc(x.name)+'" loading="lazy"><div class="instructor-body"><span class="instructor-role">'+esc(c.roles[x.roleKey])+'</span><h3>'+esc(x.name)+'</h3><p>'+esc(c.bios[x.bioKey])+'</p><div class="contact-links"><a class="small-btn" href="tel:'+x.tel+'">'+esc(c.call)+' · '+esc(x.phone)+'</a><a class="small-btn wa" target="_blank" rel="noopener" href="'+wa(x,x.id==='master-fung'?'waMaster':'waInstructor')+'">'+esc(c.whatsapp)+'</a></div></div></article>'}).join('')}
  function renderVenue(){var v=S.venue;var addr=v.addressLines.length?v.addressLines.join(', '):v.floor+' · '+v.building;$('[data-venue-address]').textContent=addr;$('[data-socials]').innerHTML=v.social.map(function(s){return '<a href="'+s.url+'" target="_blank" rel="noopener">'+esc(t('venue.socialNames.'+s.id))+'</a>'}).join('')}
  function renderFaq(){var c=t('faq');$('[data-faq]').innerHTML=c.items.map(function(x){return '<details class="faq-item"><summary>'+esc(x.q)+'</summary><div class="faq-answer">'+esc(x.a)+'</div></details>'}).join('')}
  function renderTerms(){var c=t('terms');$('[data-terms]').innerHTML=c.items.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')}
  function contactButtons(c){return '<div class="contact-option-info"><strong>'+esc(c.name)+'</strong><span>'+esc(c.phone)+'</span></div><div class="contact-links"><a class="small-btn" href="tel:'+c.tel+'">'+esc(t('contact.callLabel'))+'</a><a class="small-btn wa" href="'+wa(c,c.id==='master-fung'?'waMaster':'waInstructor')+'" target="_blank" rel="noopener">'+esc(t('contact.waLabel'))+'</a></div>'}
  function renderContacts(){$('[data-contact-options]').innerHTML=S.contacts.map(function(c){return '<div class="contact-option">'+contactButtons(c)+'</div>'}).join('')}
  function renderFooterContacts(){$('[data-footer-contacts]').innerHTML=S.contacts.map(function(c){return '<a href="'+wa(c,'waGeneral')+'" target="_blank" rel="noopener">'+esc(c.name)+' · '+esc(c.phone)+'</a>'}).join('')}
  function renderFab(){$('[data-wa-fab-options]').innerHTML=S.contacts.map(function(c){return '<div class="wa-panel-option"><strong>'+esc(c.name)+'</strong><a href="'+wa(c,c.id==='master-fung'?'waMaster':'waInstructor')+'" target="_blank" rel="noopener">WhatsApp ↗</a></div>'}).join('')}
  function setup(){
    var header=$('.site-header');window.addEventListener('scroll',function(){header.classList.toggle('scrolled',scrollY>30)},{passive:true});
    var menu=$('.menu-toggle'),mobile=$('.mobile-menu');menu.onclick=function(){var open=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',open);mobile.setAttribute('aria-hidden',!open)};$$('.mobile-menu a').forEach(function(a){a.onclick=function(){mobile.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
    var fab=$('.fab-button'),panel=$('.wa-panel'),close=$('.wa-panel-head button');fab.onclick=function(){var open=panel.classList.toggle('open');fab.setAttribute('aria-expanded',open);panel.setAttribute('aria-hidden',!open)};close.onclick=function(){panel.classList.remove('open');fab.setAttribute('aria-expanded','false')};
    if('IntersectionObserver' in window){var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('fade-in');io.unobserve(e.target)}})},{threshold:.08});$$('.feature,.programme-card,.instructor-card').forEach(function(e){e.classList.remove('fade-in');io.observe(e)})}
  }
  renderStatic();setup();
})();
