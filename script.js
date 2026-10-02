const nav=document.getElementById('nav');
const menuBtn=document.getElementById('menuBtn');
const progress=document.getElementById('scrollProgress');
const glow=document.getElementById('mouseGlow');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight; progress.style.width=(h>0?(scrollY/h)*100:0)+'%';});
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';});
const stars=document.getElementById('stars');
for(let i=0;i<150;i++){const s=document.createElement('i');const z=(Math.random()*2.8+.5).toFixed(2);s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;width:${z}px;height:${z}px;opacity:${Math.random()*.65+.12};--t:${(1.5+Math.random()*4).toFixed(2)}s`;stars.appendChild(s)}
const dust=document.getElementById('dust');
for(let i=0;i<90;i++){const d=document.createElement('i');d.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;opacity:${Math.random()*.4+.05};--d:${(10+Math.random()*22).toFixed(2)}s;animation-delay:-${Math.random()*18}s`;dust.appendChild(d)}
const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('#nav a')];
const activeIO=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id))}}),{threshold:.42});
sections.forEach(s=>activeIO.observe(s));
const hero=document.getElementById('heroVisual');
hero?.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;hero.style.transform=`perspective(1100px) rotateX(${(-y*3).toFixed(2)}deg) rotateY(${(x*4).toFixed(2)}deg)`});
hero?.addEventListener('pointerleave',()=>hero.style.transform='');
