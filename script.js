(function(){
var PL={"nav": "Kontakt", "h1": "Cześć, jestem Yeetova. Piszę w Luau do gier na Roblox.", "intro": "Skryptuję od jakichś dwóch lat. Lubię robić rzeczy porządnie, więc najpierw myślę, potem buduję, trzymam kod w ładzie i nie zostawiam zleceń w połowie.", "abt": "O mnie", "p1": "Wszystko zaczęło się od miłości do Robloxa i klocków LEGO. Zawsze kręciło mnie budowanie różnych rzeczy, więc jakieś dwa lata temu skryptowanie w Robloxie weszło mi w krew i jakoś tak już zostało. Teraz dobrze czuję się w bardziej zaawansowanych rzeczach: moduły, typowany Luau, trzymanie tego, co ważne, po stronie serwera i wyłapywanie tego, co może pójść nie tak, zanim znajdą to gracze.", "p2": "Wolę poświęcić trochę więcej czasu i zrobić to dobrze, niż odwalić coś, co rozsypie się przy pierwszej nowej funkcji.", "wk": "W czym mogę pomóc", "d1t": "Systemy w grze", "d1d": "Walka, umiejętności, ekwipunek, sklepy, questy i tym podobne.", "d2t": "Struktura", "d2d": "Podział kodu na czytelne moduły, żeby łatwo było go rozwijać.", "d3t": "Dane graczy", "d3d": "Zapisywanie i wczytywanie bez gubienia czyjegokolwiek postępu.", "d4t": "Serwer i klient", "d4d": "Dopilnowanie, żeby gracze nie mogli oszukać serwera.", "d5t": "Wydajność", "d5d": "Szukanie tego, co laguje, i naprawianie, łącznie z wyciekami pamięci.", "d6t": "Interfejs", "d6d": "Podłączanie UI do gry i dbanie, żeby działał płynnie.", "how": "Jak pracuję", "howp": "Mówisz, czego potrzebujesz, a ja odpowiadam, jak bym to zrobił i mniej więcej ile to zajmie. Buduję to małymi krokami, żeby dało się testować na bieżąco, a na końcu kod jest na tyle czysty, że każdy inny może go przejąć.", "ct": "Kontakt", "ctp": "Masz projekt? Opisz mi go w kilku zdaniach, a odezwę się.", "oth": "Poza Luau", "p3": "Poza Luau znam podstawy C++, interesuję się cyberbezpieczeństwem i tworzeniem gier w Godot.", "p4": "Kocham też Arduino i elektronikę. Lubię serwisować komputery i telefony i robię to również dla innych.", "f_name": "Imię", "f_email": "Twój e-mail", "f_topic": "Czego dotyczy", "o1": "Skryptowanie w Luau / Roblox", "o4": "Coś innego", "f_msg": "Wiadomość", "f_send": "Wyślij zapytanie", "f_ok": "Dzięki, wiadomość została wysłana. Wkrótce się odezwę.", "f_err": "Coś poszło nie tak. Napisz do mnie bezpośrednio na adres na dole strony."};
var els=document.querySelectorAll('[data-k]');
els.forEach(function(e){e.dataset.en=e.textContent});
function set(l){
els.forEach(function(e){e.textContent=l==='pl'?PL[e.dataset.k]:e.dataset.en});
document.documentElement.lang=l;
document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l===l)});
try{localStorage.setItem('lang',l)}catch(x){}}
document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){set(b.dataset.l)})});
try{if(localStorage.getItem('lang')==='pl')set('pl')}catch(x){}
var ENDPOINT='https://formspree.io/f/mdeeyddw'; /* <- */
var fm=document.getElementById('f'),btn=fm.querySelector('.send'),ok=document.getElementById('ok'),er=document.getElementById('err');
fm.addEventListener('submit',function(ev){ev.preventDefault();ok.hidden=true;er.hidden=true;btn.disabled=true;
fetch(ENDPOINT,{method:'POST',body:new FormData(fm),headers:{'Accept':'application/json'}})
.then(function(r){if(r.ok){fm.reset();ok.hidden=false}else{er.hidden=false}})
.catch(function(){er.hidden=false})
.then(function(){btn.disabled=false})});
var e=document.querySelectorAll('.sc');
if(!('IntersectionObserver' in window)){e.forEach(function(x){x.classList.add('in')});return}
var o=new IntersectionObserver(function(l){l.forEach(function(i){if(i.isIntersecting){i.target.classList.add('in');o.unobserve(i.target)}})},{threshold:.1});
e.forEach(function(x){o.observe(x)})})();
