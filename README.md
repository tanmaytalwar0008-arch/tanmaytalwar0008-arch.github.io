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
   
