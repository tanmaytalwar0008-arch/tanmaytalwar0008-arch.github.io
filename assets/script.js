// assets/script.js — enhancements: gallery, modal, filters, form
(function(){
  const whatsapp = '918126525454';
  const vehicles = [
    {name:'Suzuki Access 125',brand:'Suzuki',type:'Scooter',price:55000,year:'2021',km:'28,000 km',owner:'1st Owner'},
    {name:'TVS Jupiter 125',brand:'TVS',type:'Scooter',price:65000,year:'2022',km:'22,000 km',owner:'1st Owner'},
    {name:'Hero Splendor Plus',brand:'Hero',type:'Bike',price:45000,year:'2020',km:'31,000 km',owner:'1st Owner'},
    {name:'Honda CBR',brand:'Honda',type:'Bike',price:110000,year:'2018',km:'24,000 km',owner:'2nd Owner'},
    {name:'Bajaj Pulsar 150',brand:'Bajaj',type:'Bike',price:35000,year:'2015',km:'35,000 km',owner:'1st Owner'},
    {name:'Honda Activa',brand:'Honda',type:'Scooter',price:55000,year:'2021',km:'25,000 km',owner:'1st Owner'},
    {name:'Yamaha FZ',brand:'Yamaha',type:'Bike',price:75000,year:'2020',km:'20,000 km',owner:'1st Owner'},
    {name:'Royal Enfield Classic 350',brand:'Royal Enfield',type:'Bike',price:125000,year:'2019',km:'29,000 km',owner:'1st Owner'}
  ];

  const brands = [...new Set(vehicles.map(v=>v.brand))];

  const brandSelect = document.getElementById('brand');
  const vehicleSelect = document.getElementById('vehicleSelect');
  const inventoryGrid = document.getElementById('inventoryGrid');
  const searchEl = document.getElementById('search');
  const typeEl = document.getElementById('type');
  const sortEl = document.getElementById('sort');

  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');

  // populate selects
  brands.forEach(b=>{ const opt = document.createElement('option'); opt.value=b; opt.textContent=b; brandSelect.appendChild(opt); });
  vehicles.forEach(v=>{ const o = document.createElement('option'); o.value=v.name; o.textContent=v.name; vehicleSelect.appendChild(o); });

  function money(n){ return '₹'+n.toLocaleString('en-IN'); }

  function render(){
    const q = (searchEl && searchEl.value || '').toLowerCase();
    const type = (typeEl && typeEl.value) || '';
    const brand = (brandSelect && brandSelect.value) || '';
    const sort = (sortEl && sortEl.value) || '';

    let list = vehicles.filter(v=>
      (!q || (v.name+' '+v.brand).toLowerCase().includes(q)) &&
      (!type || v.type===type) &&
      (!brand || v.brand===brand)
    );
    if(sort==='low') list.sort((a,b)=>a.price-b.price);
    if(sort==='high') list.sort((a,b)=>b.price-a.price);

    inventoryGrid.innerHTML = list.map((v,idx)=>{
      return `
        <div class="vehicle" role="listitem">
          <div class="vehicle-top">${v.type==='Scooter'?'🛵':'🏍️'}</div>
          <div class="vehicle-body">
            <h3>${v.name}</h3>
            <div class="price">${money(v.price)}</div>
            <div class="specs"><div class="spec">${v.year} Model</div><div class="spec">${v.km}</div><div class="spec">${v.owner}</div><div class="spec">${v.brand}</div></div>
            <div class="vehicle-buttons">
              <button class="details" data-index="${idx}">Details</button>
              <button class="whatsapp" data-name="${v.name.replace(/'/g,"\\'")}">WhatsApp</button>
            </div>
          </div>
        </div>`;
    }).join('');

    // attach events
    inventoryGrid.querySelectorAll('.details').forEach(btn=>btn.addEventListener('click', e=>{
      const i = Number(btn.getAttribute('data-index')); showDetails(list[i]);
    }));
    inventoryGrid.querySelectorAll('.whatsapp').forEach(btn=>btn.addEventListener('click', e=>{
      const name = btn.getAttribute('data-name'); window.open('https://wa.me/'+whatsapp+'?text='+encodeURIComponent('Hello BK Motors, I am interested in '+name), '_blank');
    }));

    if(!list.length) inventoryGrid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#777;padding:40px">No vehicles found.</p>';
  }

  function showDetails(v){
    // simple modal using alert for now (kept lightweight). Can be upgraded to a focus-trap modal.
    if(!v) return; const text = `${v.name}\nPrice: ${money(v.price)}\n${v.year} • ${v.km} • ${v.owner}`;
    if(confirm(text+'\n\nOpen WhatsApp to enquire?')){
      window.open('https://wa.me/'+whatsapp+'?text='+encodeURIComponent('Hello BK Motors, I want to enquire about '+v.name), '_blank');
    }
  }

  // basic carousel autoplay
  (function carousel(){
    const carousel = document.getElementById('carousel'); if(!carousel) return;
    let i=0; const slides = carousel.querySelectorAll('.slide');
    function show(){ slides.forEach((s,idx)=> s.style.transform = `translateX(${(idx-i)*102}%)`); }
    show(); setInterval(()=>{ i = (i+1)%slides.length; show(); },4000);
  })();

  // mobile nav toggle
  if(navToggle && primaryNav){ navToggle.addEventListener('click', ()=>{ primaryNav.classList.toggle('show'); const expanded = navToggle.getAttribute('aria-expanded')==='true'; navToggle.setAttribute('aria-expanded', String(!expanded)); }); }

  // enquiry form
  const enquiryForm = document.getElementById('enquiryForm');
  if(enquiryForm){ document.getElementById('sendEnquiry').addEventListener('click', ()=>{
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const vehicle = document.getElementById('vehicleSelect').value;
    const msg = document.getElementById('customerMessage').value.trim();
    if(!name || !phone){ alert('Please enter name and phone'); return; }
    const text = `Hello BK Motors, I am ${name} (${phone}). ${vehicle?('Interested in '+vehicle+'. '):''} ${msg?('Details: '+msg):''}`;
    window.open('https://wa.me/'+whatsapp+'?text='+encodeURIComponent(text), '_blank');
  }); }

  // wire filters
  if(searchEl) searchEl.addEventListener('input', render);
  if(typeEl) typeEl.addEventListener('change', render);
  if(brandSelect) brandSelect.addEventListener('change', render);
  if(sortEl) sortEl.addEventListener('change', render);

  document.addEventListener('DOMContentLoaded', render);
})();
