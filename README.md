<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BK Motors Dehradun | Used 2 Wheeler Showroom</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    scroll-behavior:smooth;
}

body{
    font-family:Arial,Helvetica,sans-serif;
    background:#07090d;
    color:#fff;
}

:root{
    --gold:#d6a84f;
    --gold2:#f3cf78;
    --dark:#07090d;
    --card:#11151c;
    --muted:#9ba3af;
}

header{
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:1000;
    background:rgba(7,9,13,.88);
    backdrop-filter:blur(18px);
    border-bottom:1px solid rgba(255,255,255,.08);
}

.nav{
    max-width:1250px;
    margin:auto;
    height:78px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 22px;
}

.logo{
    font-size:26px;
    font-weight:900;
    letter-spacing:1px;
}

.logo span{
    color:var(--gold2);
}

.navlinks{
    display:flex;
    gap:28px;
}

.navlinks a{
    color:#fff;
    text-decoration:none;
    font-size:14px;
    font-weight:600;
}

.navlinks a:hover{
    color:var(--gold2);
}

.hero{
    min-height:100vh;
    display:flex;
    align-items:center;
    position:relative;
    overflow:hidden;
    background:
    linear-gradient(90deg,rgba(7,9,13,.96) 15%,rgba(7,9,13,.72) 50%,rgba(7,9,13,.45)),
    url("images/showroom.jpg") center/cover;
}

.hero-content{
    max-width:1250px;
    width:100%;
    margin:auto;
    padding:120px 25px 70px;
}

.badge{
    display:inline-block;
    border:1px solid rgba(243,207,120,.5);
    color:var(--gold2);
    padding:9px 16px;
    border-radius:30px;
    font-size:13px;
    font-weight:bold;
    margin-bottom:22px;
}

.hero h1{
    font-size:clamp(44px,7vw,82px);
    line-height:.95;
    max-width:850px;
    margin-bottom:25px;
}

.hero h1 span{
    color:var(--gold2);
}

.hero p{
    max-width:650px;
    color:#c5cad2;
    font-size:18px;
    line-height:1.7;
}

.buttons{
    margin-top:32px;
    display:flex;
    gap:15px;
    flex-wrap:wrap;
}

.btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding:15px 25px;
    border-radius:8px;
    text-decoration:none;
    font-weight:bold;
    transition:.25s;
}

.primary{
    background:var(--gold2);
    color:#090909;
}

.primary:hover{
    transform:translateY(-3px);
}

.secondary{
    border:1px solid rgba(255,255,255,.2);
    color:#fff;
    background:rgba(255,255,255,.04);
}

section{
    max-width:1250px;
    margin:auto;
    padding:95px 22px;
}

.section-title{
    margin-bottom:45px;
}

.section-title small{
    color:var(--gold2);
    text-transform:uppercase;
    letter-spacing:3px;
    font-weight:bold;
}

.section-title h2{
    font-size:42px;
    margin-top:10px;
}

.section-title p{
    color:var(--muted);
    margin-top:12px;
}

.offer{
    background:
    radial-gradient(circle at 85% 20%,rgba(214,168,79,.22),transparent 35%),
    linear-gradient(135deg,#15191f,#0b0e13);
    border:1px solid rgba(214,168,79,.3);
    border-radius:24px;
    padding:50px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:30px;
    overflow:hidden;
}

.offer h2{
    font-size:45px;
}

.offer h2 span{
    color:var(--gold2);
}

.offer p{
    color:#b7bec9;
    margin-top:12px;
    max-width:600px;
    line-height:1.6;
}

.offer-price{
    font-size:64px;
    font-weight:900;
    white-space:nowrap;
    color:var(--gold2);
}

.offer-price small{
    display:block;
    font-size:14px;
    text-align:right;
    color:#aaa;
}

.facilities{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:18px;
}

.facility{
    background:var(--card);
    padding:28px;
    border:1px solid rgba(255,255,255,.07);
    border-radius:18px;
    transition:.3s;
}

.facility:hover{
    transform:translateY(-5px);
    border-color:rgba(214,168,79,.5);
}

.icon{
    font-size:30px;
    margin-bottom:15px;
}

.facility h3{
    margin-bottom:8px;
}

.facility p{
    color:var(--muted);
    line-height:1.5;
    font-size:14px;
}

.vehicles{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:22px;
}

.vehicle{
    background:var(--card);
    border:1px solid rgba(255,255,255,.08);
    border-radius:20px;
    overflow:hidden;
    transition:.3s;
}

.vehicle:hover{
    transform:translateY(-7px);
    box-shadow:0 20px 60px rgba(0,0,0,.4);
}

.vehicle-img{
    height:230px;
    background:#15191f;
    overflow:hidden;
}

.vehicle-img img{
    width:100%;
    height:100%;
    object-fit:cover;
    transition:.4s;
}

.vehicle:hover img{
    transform:scale(1.05);
}

.vehicle-info{
    padding:22px;
}

.vehicle-info h3{
    font-size:20px;
}

.vehicle-info p{
    color:var(--muted);
    font-size:14px;
    margin:7px 0 15px;
}

.price{
    color:var(--gold2);
    font-size:24px;
    font-weight:900;
}

.demo{
    display:inline-block;
    margin-top:10px;
    font-size:11px;
    color:#aab0ba;
    border:1px solid #333;
    padding:4px 7px;
    border-radius:5px;
}

.brands{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
}

.brand{
    background:#11151c;
    border:1px solid rgba(255,255,255,.09);
    padding:14px 20px;
    border-radius:50px;
    color:#ddd;
    font-weight:bold;
}

.gallery{
    display:grid;
    grid-template-columns:2fr 1fr 1fr;
    grid-auto-rows:240px;
    gap:15px;
}

.gallery img{
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius:18px;
    transition:.3s;
}

.gallery img:hover{
    transform:scale(1.02);
}

.gallery img:first-child{
    grid-row:span 2;
}

.location{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:25px;
}

.location-card{
    background:var(--card);
    border-radius:22px;
    padding:35px;
    border:1px solid rgba(255,255,255,.08);
}

.location-card h3{
    font-size:27px;
    margin-bottom:15px;
}

.location-card p{
    color:#b2bac5;
    line-height:1.8;
}

.contact-box{
    margin-top:20px;
    display:flex;
    gap:12px;
    flex-wrap:wrap;
}

.contact{
    padding:13px 18px;
    background:#181d25;
    border-radius:8px;
    color:#fff;
    text-decoration:none;
}

.instagram{
    border:1px solid rgba(214,168,79,.4);
}

footer{
    border-top:1px solid rgba(255,255,255,.08);
    text-align:center;
    padding:35px 20px;
    color:#7f8792;
}

footer strong{
    color:#fff;
}

@media(max-width:850px){

    .navlinks{
        display:none;
    }

    .hero h1{
        font-size:52px;
    }

    .offer{
        padding:32px;
        flex-direction:column;
        align-items:flex-start;
    }

    .offer-price{
        font-size:52px;
    }

    .facilities,
    .vehicles,
    .location{
        grid-template-columns:1fr;
    }

    .gallery{
        grid-template-columns:1fr 1fr;
        grid-auto-rows:190px;
    }

    .gallery img:first-child{
        grid-row:span 1;
    }
}

@media(max-width:520px){

    section{
        padding:70px 16px;
    }

    .hero-content{
        padding-left:20px;
        padding-right:20px;
    }

    .hero h1{
        font-size:43px;
    }

    .hero p{
        font-size:16px;
    }

    .gallery{
        grid-template-columns:1fr;
    }

    .section-title h2{
        font-size:34px;
    }
}
</style>
</head>

<body>

<header>
<div class="nav">
    <div class="logo">BK <span>MOTORS</span></div>

    <nav class="navlinks">
        <a href="#home">Home</a>
        <a href="#vehicles">Vehicles</a>
        <a href="#facilities">Facilities</a>
        <a href="#gallery">Gallery</a>
        <a href="#location">Location</a>
    </nav>
</div>
</header>


<!-- HERO -->

<div class="hero" id="home">
<div class="hero-content">

    <div class="badge">DEHRADUN • UTTARAKHAND</div>

    <h1>
        Your Trusted<br>
        <span>2-Wheeler</span> Showroom
    </h1>

    <p>
        Quality inspected pre-owned scooters and motorcycles,
        exchange facility, buy-back facility, loan assistance,
        vehicle transfer and more.
    </p>

    <div class="buttons">
        <a class="btn primary" href="#vehicles">Explore Vehicles</a>
        <a class="btn secondary" href="#location">Visit Showroom</a>
    </div>

</div>
</div>


<!-- ₹16 OFFER -->

<section>

<div class="offer">

    <div>
        <small style="color:#d6a84f;font-weight:bold;">SPECIAL OFFER</small>

        <h2>
            Vehicles from<br>
            <span>₹16 per day*</span>
        </h2>

        <p>
            Flexible lease-based vehicle options available.
            Terms and conditions apply. Contact the showroom
            for eligibility, vehicle availability and complete details.
        </p>
    </div>

    <div class="offer-price">
        ₹16
        <small>PER DAY*</small>
    </div>

</div>

</section>


<!-- FACILITIES -->

<section id="facilities">

<div class="section-title">
    <small>Why BK Motors</small>
    <h2>Our Facilities</h2>
    <p>Everything you need for a smooth pre-owned two-wheeler experience.</p>
</div>

<div class="facilities">

    <div class="facility">
        <div class="icon">🛠️</div>
        <h3>First Two Services Free</h3>
        <p>Eligible vehicles receive the first two services free as per applicable terms.</p>
    </div>

    <div class="facility">
        <div class="icon">🔄</div>
        <h3>Exchange Facility</h3>
        <p>Bring your existing two-wheeler and explore exchange options.</p>
    </div>

    <div class="facility">
        <div class="icon">💰</div>
        <h3>Buy Back Facility</h3>
        <p>Ask our team about available buy-back options for eligible vehicles.</p>
    </div>

    <div class="facility">
        <div class="icon">🏦</div>
        <h3>Loan Facility</h3>
        <p>Loan assistance may be available subject to eligibility and lender terms.</p>
    </div>

    <div class="facility">
        <div class="icon">📄</div>
        <h3>Instant Transfer Assistance</h3>
        <p>Documentation and vehicle ownership transfer assistance.</p>
    </div>

    <div class="facility">
        <div class="icon">🔍</div>
        <h3>Comprehensive Check-Up</h3>
        <p>Vehicles can be inspected before delivery according to applicable checks.</p>
    </div>

</div>

</section>


<!-- VEHICLES -->

<section id="vehicles">

<div class="section-title">
    <small>Featured Inventory</small>
    <h2>Available 2-Wheelers</h2>
    <p>Sample listings — confirm current stock and price with BK Motors.</p>
</div>

<div class="vehicles">

    <div class="vehicle">
        <div class="vehicle-img">
            <img src="images/scooter.jpg" alt="Suzuki Access 125">
        </div>
        <div class="vehicle-info">
            <h3>Suzuki Access 125</h3>
            <p>Used • Petrol • Automatic</p>
            <div class="price">₹55,000</div>
            <span class="demo">SAMPLE LISTING</span>
        </div>
    </div>

    <div class="vehicle">
        <div class="vehicle-img">
            <img src="images/scooter2.jpg" alt="Jupiter 125">
        </div>
        <div class="vehicle-info">
            <h3>TVS Jupiter 125</h3>
            <p>Used • Petrol • Automatic</p>
            <div class="price">₹65,000</div>
            <span class="demo">SAMPLE LISTING</span>
        </div>
    </div>

    <div class="vehicle">
        <div class="vehicle-img">
            <img src="images/splendor.jpg" alt="Hero Splendor">
        </div>
        <div class="vehicle-info">
            <h3>Hero Splendor</h3>
            <p>Used • Petrol • Manual</p>
            <div class="price">₹45,000</div>
            <span class="demo">SAMPLE LISTING</span>
        </div>
    </div>

    <div class="vehicle">
        <div class="vehicle-img">
            <img src="images/cbr.jpg" alt="Honda CBR">
        </div>
        <div class="vehicle-info">
            <h3>Honda CBR</h3>
            <p>Used • Petrol • Manual</p>
            <div class="price">Contact Us</div>
            <span class="demo">SAMPLE LISTING</span>
        </div>
    </div>

    <div class="vehicle">
        <div class="vehicle-img">
            <img src="images/royal.jpg" alt="Royal Enfield">
        </div>
        <div class="vehicle-info">
            <h3>Royal Enfield Classic</h3>
            <p>Used • Petrol • Manual</p>
            <div class="price">Contact Us</div>
            <span class="demo">SAMPLE LISTING</span>
        </div>
    </div>

    <div class="vehicle">
        <div class="vehicle-img">
            <img src="images/ktm.jpg" alt="KTM">
        </div>
        <div class="vehicle-info">
            <h3>KTM Duke</h3>
            <p>Used • Petrol • Manual</p>
            <div class="price">Contact Us</div>
            <span class="demo">SAMPLE LISTING</span>
        </div>
    </div>

</div>

</section>


<!-- BRANDS -->

<section>

<div class="section-title">
    <small>Brands</small>
    <h2>Two-Wheeler Brands</h2>
    <p>Popular brands available in the pre-owned market.</p>
</div>

<div class="brands">

    <div class="brand">Hero</div>
    <div class="brand">Honda</div>
    <div class="brand">TVS</div>
    <div class="brand">Bajaj</div>
    <div class="brand">Suzuki</div>
    <div class="brand">Yamaha</div>
    <div class="brand">Royal Enfield</div>
    <div class="brand">KTM</div>
    <div class="brand">Jawa</div>
    <div class="brand">Yezdi</div>
    <div class="brand">Aprilia</div>
    <div class="brand">Vespa</div>
    <div class="brand">BMW Motorrad</div>
    <div class="brand">Triumph</div>
    <div class="brand">Harley-Davidson</div>
    <div class="brand">Ola Electric</div>
    <div class="brand">Ather</div>
    <div class="brand">Bajaj Chetak</div>

</div>

</section>


<!-- GALLERY -->

<section id="gallery">

<div class="section-title">
    <small>Inside BK Motors</small>
    <h2>Showroom Gallery</h2>
    <p>Real showroom and vehicle photographs.</p>
</div>

<div class="gallery">

    <img src="images/showroom.jpg" alt="BK Motors showroom">

    <img src="images/scooter.jpg" alt="Used scooter">

    <img src="images/royal.jpg" alt="Used motorcycle">

    <img src="images/ktm.jpg" alt="KTM motorcycle">

    <img src="images/scooter2.jpg" alt="Used two wheeler">

</div>

</section>


<!-- LOCATION -->

<section id="location">

<div class="section-title">
    <small>Find Us</small>
    <h2>Visit BK Motors</h2>
    <p>Come visit our showroom in Dehradun.</p>
</div>

<div class="location">

    <div class="location-card">

        <h3>📍 Showroom</h3>

        <p>
            <strong>BK Motors</strong><br>
            82 Chakrata Road,<br>
            Dehradun, Uttarakhand
        </p>

        <div class="contact-box">

            <a class="contact"
               href="https://www.google.com/maps/search/?api=1&query=82+Chakrata+Road+Dehradun"
               target="_blank">
               Open in Google Maps
            </a>

        </div>

    </div>


    <div class="location-card">

        <h3>📱 Connect With Us</h3>

        <p>
            Follow BK Motors on Instagram for new arrivals,
            showroom updates and two-wheeler posts.
        </p>

        <div class="contact-box">

            <a class="contact instagram"
               href="https://www.instagram.com/bkmotorsdehradoon/"
               target="_blank">
               Instagram ↗
            </a>

        </div>

    </div>

</div>

</section>


<footer>

    <strong>BK MOTORS</strong> — Your Trusted 2-Wheeler Showroom

    <br><br>

    © 2026 BK Motors Dehradun. All Rights Reserved.

</footer>


</body>
</html>
