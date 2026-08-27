// assets/script.js
(function(){
  const whatsapp = "918126525454";

  const vehicles = [
    {name:"Suzuki Access 125",brand:"Suzuki",type:"Scooter",price:55000,year:"2021",km:"28,000 km",owner:"1st Owner"},
    {name:"TVS Jupiter 125",brand:"TVS",type:"Scooter",price:65000,year:"2022",km:"22,000 km",owner:"1st Owner"},
    {name:"Hero Splendor Plus",brand:"Hero",type:"Bike",price:45000,year:"2020",km:"31,000 km",owner:"1st Owner"},
    {name:"Honda CBR",brand:"Honda",type:"Bike",price:110000,year:"2018",km:"24,000 km",owner:"2nd Owner"},
    {name:"Bajaj Pulsar 150",brand:"Bajaj",type:"Bike",price:35000,year:"2015",km:"35,000 km",owner:"1st Owner"},
    {name:"Honda Activa",brand:"Honda",type:"Scooter",price:55000,year:"2021",km:"25,000 km",owner:"1st Owner"},
    {name:"Yamaha FZ",brand:"Yamaha",type:"Bike",price:75000,year:"2020",km:"20,000 km",owner:"1st Owner"},
    {name:"Royal Enfield Classic 350",brand:"Royal Enfield",type:"Bike",price:125000,year:"2019",km:"29,000 km",owner:"1st Owner"}
  ];

  const brands = [
    "Hero","Honda","TVS","Bajaj","Yamaha","Suzuki",
    "Royal Enfield","KTM","Husqvarna","Jawa","Yezdi",
    "Harley-Davidson","Triumph","BMW Motorrad","Kawasaki",
    "Aprilia","Vespa","Piaggio","Ather Energy","Ola Electric",
    "Revolt Motors","Ultraviolette","Oben Electric","Matter",
    "Okinawa","Ampere","Komaki","PURE EV","Joy e-bike",
    "Lectrix EV","Tork Motors","River"
  ];

  // Elements
  const brandSelect = document.getElementById('brand');
  const brandGrid = document.getElementById('brandGrid');
  const vehicleSelect = document.getElementById('vehicleSelect');
  const inventoryGrid = document.getElementById('inventoryGrid');
  const searchEl = document.getElementById('search');
  const typeEl = document.getElementById('type');
  const sortEl = document.getElementById('sort');

  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalMeta = document.getElementById('modalMeta');
  const modalSpecs = document.getElementById('modalSpecs');
  const modalNote = document.getElementById('modalNote');
  const modalWhatsApp = document.getElementById('modalWhatsApp');
  const modalClose = document.getElementById('modalClose');

  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');

  // Populate brands and vehicle select
  brands.forEach(b=>{
    const option = document.createElement('option');
    option.value = b; option.textContent = b; brandSelect.appendChild(option);

    const pill = document.createElement('span'); pill.className = 'brand'; pill.textContent = b; brandGrid.appendChild(pill);
  });
  vehicles.forEach(v=>{
    const opt = document.createElement('option'); opt.value = v.name; opt.textContent = v.name; vehicleSelect.appendChild(opt);
  });

  function money(n){ return '₹'+n.toLocaleString('en-IN'); }

  function escapeForOnclick(s){ return s.replace(/'/g, "\\'"); }

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

    if(!inventoryGrid) return;
    inventoryGrid.innerHTML = list.map((v,idx)=>{
      return `
        <div class="vehicle" role="listitem">
          <div class="vehicle-top"><div class="vehicle-icon">${v.type==='Scooter'? '🛵':'🏍️'}</div><div class="badge">${v.owner}</div></div>
          <div class="vehicle-body">
            <h3>${v.name}</h3>
            <div class="price">${money(v.price)}</div>
            <div class="specs"><div class="spec">${v.year} Model</div><div class="spec">${v.km}</div><div class="spec">${v.owner}</div><div class="spec">${v.brand}</div></div>
            <div class="vehicle-buttons">
              <button class="details" data-index="${idx}">View Details</button>
              <button class="whatsapp" data-name="${escapeForOnclick(v.name)}">WhatsApp</button>
            </div>
          </div>
        </div>`;
    }).join('');

    // attach listeners
    inventoryGrid.querySelectorAll('.details').forEach(btn=>btn.addEventListener('click', e=>{
      const index = Number(btn.getAttribute('data-index'));
      showDetails(list[index]);
    }));
    inventoryGrid.querySelectorAll('.whatsapp').forEach(btn=>btn.addEventListener('click', e=>{
      const name = btn.getAttribute('data-name'); quickWhatsApp(name);
    }));

    if(!list.length){ inventoryGrid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#777;padding:40px">No vehicle found.</p>'; }
  }

  // Modal
  function showDetails(v){
    if(!v) return;
    modalTitle.textContent = v.name;
    modalMeta.textContent = money(v.price);
    modalSpecs.innerHTML = '';
    const specs = [v.year+' Model', v.km, v.owner, v.brand];
    specs.forEach(s=>{ const sp = document.createElement('div'); sp.className='spec'; sp.textContent = s; modalSpecs.appendChild(sp); });
    modalNote.textContent = 'This is a demo listing — confirm availability, condition and final price with BK Motors.';
    modalWhatsApp.href = 'https://wa.me/'+whatsapp+'?text='+encodeURIComponent('Hello BK Motors, I want to enquire about '+v.name+'.');

    openModal();
  }

  function openModal(){
    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
    // focus management
    const focusable = modal.querySelectorAll('a,button,[tabindex]:not([tabindex="-1"])');
    if(focusable.length) focusable[0].focus();
    document.addEventListener('keydown', handleKeydown);
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden','true');
    document.removeEventListener('keydown', handleKeydown);
    document.body.style.overflow = '';
    // return focus to search
    if(searchEl) searchEl.focus();
  }
  function handleKeydown(e){ if(e.key==='Escape') closeModal(); }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e=>{ if(e.target===modal) closeModal(); });

  function quickWhatsApp(name){
    const url = 'https://wa.me/'+whatsapp+'?text='+encodeURIComponent('Hello BK Motors, I am interested in '+name+'. Please share details and availability.');
    window.open(url,'_blank');
  }

  // Enquiry form
  const enquiryForm = document.getElementById('enquiryForm');
  if(enquiryForm){
    enquiryForm.addEventListener('submit', function(e){
      e.preventDefault();
      const cname = (document.getElementById('customerName').value||'').trim();
      const cphone = (document.getElementById('customerPhone').value||'').trim();
      const vehicle = (document.getElementById('vehicleSelect').value||'').trim();
      const userMsg = (document.getElementById('customerMessage').value||'').trim();

      // simple validation
      if(!cname || !cphone){ alert('Please enter your name and mobile number.'); return; }
      if(!/^[0-9+\-\s]{7,20}$/.test(cphone)){ if(!confirm('Mobile number looks unusual. Continue?')) return; }

      const text = `Hello BK Motors, I am ${cname} (${cphone}). ${vehicle?('I am interested in '+vehicle+'. '):'I am interested in your vehicles. '} ${userMsg?('\n\nDetails: '+userMsg):''}`;
      const url = 'https://wa.me/'+whatsapp+'?text='+encodeURIComponent(text);
      window.open(url,'_blank');
    });
  }

  // Nav toggle for mobile
  if(navToggle && primaryNav){
    navToggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      primaryNav.classList.toggle('show');
    });
  }

  // Wire up filters
  if(searchEl) searchEl.addEventListener('input', render);
  if(typeEl) typeEl.addEventListener('change', render);
  if(brandSelect) brandSelect.addEventListener('change', render);
  if(sortEl) sortEl.addEventListener('change', render);

  // initial render
  document.addEventListener('DOMContentLoaded', function(){ render(); });

})();
