
//CountDown------------------------------------------------------------------------------------------

  // Set the date we're counting down to
  var countDownDate = new Date("December 18, 2022 16:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    if(days<10){
        days= "0"+ days;
    }
    if(hours<10){
        hours= "0"+ hours;
    }
    if(minutes<10){
        minutes= "0"+ minutes;
    }
  // Display the result in the element with id="demo"
//   document.getElementById("day").innerHTML = days +'<img title="dot1" src="/pic/dotBlue.png" id="dot1">';
//   document.getElementById("hour").innerHTML = '<img title="dot2" src="/pic/dotBlue.png" id="dot2">'+hours ;
//   document.getElementById("min").innerHTML = minutes ;
     document.getElementById("day").innerHTML = '00';
     document.getElementById("hour").innerHTML ='00' ;
     document.getElementById("min").innerHTML = '00' ;
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//--------------------------------------------------------------------------------------------------
//RADIOS
var r1=document.getElementById('r1');
var r2=document.getElementById('r2');
var r3=document.getElementById('r3');
var r4=document.getElementById('r4');
var r5=document.getElementById('r5');
//calendrier
var cal1=document.getElementById("calendrier1");
var cal2=document.getElementById("calendrier2");
var cal3=document.getElementById("calendrier3");
var cal4=document.getElementById("calendrier4");
var cal5=document.getElementById("calendrier5");
//vole
var home=document.getElementById("home");
var vole2=document.getElementById("vole2");
var vole3=document.getElementById("vole3");
var vole4=document.getElementById("vole4");
var rank=document.getElementById("classement");
var matchs=document.getElementById("matchs");

//Main Navigation-----------------------------------------------------------------------------------------
function MainNavigation0(){
    r1.checked='true';
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    slide();
}
function MainNavigation1(){
    r2.checked='true';
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    slide();
}
function MainNavigation2(){
    r3.checked='true';
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    slide();
}
function MainNavigation3(){
    r4.checked='true';
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    slide();
}
function MainNavigation4(){
    r5.checked='true';
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    slide();
}
//SLIDER----------------------------------------------------------------------------------------------
function slide(){  
    if(r1.checked){
        cal1.style.display="block";
        cal2.style.display="none";
        cal3.style.display="none";
        cal4.style.display="none";
        cal5.style.display="none";
        vole2.style.display="none";
        vole3.style.display="none";
        vole4.style.display="none";
        home.style.display="block";
        rank.style.display="none";
        matchs.style.display="none";
    }
    if(r2.checked){
        cal1.style.display="none";
        cal2.style.display="block";
        cal3.style.display="none";
        cal4.style.display="none";
        cal5.style.display="none";
        vole2.style.display="block";
        vole4.style.display="none";
        home.style.display="none";
        rank.style.display="none";
        matchs.style.display="none";
    }
    if(r3.checked){
        cal1.style.display="none";
        cal2.style.display="none";
        cal3.style.display="block";
        cal4.style.display="none";
        cal5.style.display="none";
        vole2.style.display="none";
        vole3.style.display="none";
        vole4.style.display="none";
        home.style.display="none";
        rank.style.display="none";
        matchs.style.display="block";
    }
    if(r4.checked){
        cal1.style.display="none";
        cal2.style.display="none";
        cal3.style.display="none";
        cal4.style.display="block";
        cal5.style.display="none";
        vole2.style.display="none";
        vole3.style.display="none";
        vole4.style.display="none";
        home.style.display="none";
        rank.style.display="block";
        matchs.style.display="none";
    }
    if(r5.checked){
        cal1.style.display="none";
        cal2.style.display="none";
        cal3.style.display="none";
        cal4.style.display="none";
        cal5.style.display="block";
        vole2.style.display="none";
        vole3.style.display="none";
        vole4.style.display="block";
        home.style.display="none";
        rank.style.display="none";
        matchs.style.display="none";
    }
}

//ADD Groups to Vole 2 ----------------------------------------------------
    var Groups=document.getElementsByClassName("groupe");
    var NavGroup=document.getElementsByClassName("NavGroup");

    for(let index=0; index<Groups.length;index++){
        NavGroup[index].addEventListener('click',function(){
            if(Groups[index].style.display=="block"){
                Groups[index].style.display="none";
                NavGroup[index].style.color="#5d001d";
            }
            else{
                Groups[index].style.display="block";
                NavGroup[index].style.color="#00cfb7";
            }
            
            });
        }

//change squade -----------------------------------------------------------

var equipe = document.getElementsByClassName('equipe');
var Drapo = document.getElementById('DRAPO2');
var vole3 = document.getElementById('vole3');
var TitleVole3 =document.getElementById("Title");
var equipeName =document.getElementById("equipeName");


    for(let i=0 ; i<equipe.length ; i++)
    {
        equipe[i].addEventListener('click', ()=>{
            var MiniTeam = document.getElementsByClassName('MiniTeam');
            var checkAttack = document.getElementsByClassName("checkAttack");
            var checkDef = document.getElementsByClassName("checkDef");
            var checkGar = document.getElementsByClassName("checkGar");
            var checkMid = document.getElementsByClassName("checkMid");
            
            //QATAR--------------------------------------
            if(i==0){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="#5d001d";
                Drapo.setAttribute('src','team2/QAT.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Qatar";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/QAT.png');
                }
                
                
            }
            //EQYADOR--------------------------------------
            if(i==1){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="#3416c9";
                Drapo.setAttribute('src','team2/ECU.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Equador";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/ECU.png');}
            }
            //senegal--------------------------------------
            if(i==2){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="green";
                Drapo.setAttribute('src','team2/SEN.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Senegal";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/SEN.png');}
            }
            //holanda--------------------------------------
            if(i==3){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="blue";
                Drapo.setAttribute('src','team2/NED.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Netherland";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/NED.png');}
            }
            //england--------------------------------------
            if(i==4){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="#d91313";
                Drapo.setAttribute('src','team2/ENG.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="England";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/ENG.png');}
            }
            //iran--------------------------------------
            if(i==5){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="green";
                Drapo.setAttribute('src','team2/IRN.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Iran";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/IRN.png');}
            }
            //usa--------------------------------------
            if(i==6){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="blue";
                Drapo.setAttribute('src','team2/USA.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="USA";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/USA.png');}
            }
            //wales--------------------------------------
            if(i==7){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="green";
                Drapo.setAttribute('src','team2/WAL.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Wales";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/WAL.png');}
            }
            //poland--------------------------------------
            if(i==8){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="#d91313";
                Drapo.setAttribute('src','team2/POL.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Pologne";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/POL.png');}
            }
            //saoudix--------------------------------------
            if(i==9){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="green";
                Drapo.setAttribute('src','team2/KSA.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Saoudie";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/KSA.png');}
            }
            //mexic--------------------------------------
            if(i==10){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="green";
                Drapo.setAttribute('src','team2/MEX.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Mexic";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/MEX.png');}
            }
            //meeeessi--------------------------------------
            if(i==11){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="lightskyblue";
                Drapo.setAttribute('src','team2/ARGENTINA.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Argentina";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/ARGENTINA.png');}
            }
            //france--------------------------------------
            if(i==12){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="blue";
                Drapo.setAttribute('src','team2/FRA.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="France";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/FRA.png');}
            }
            //austra--------------------------------------
            if(i==13){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="darkblue";
                Drapo.setAttribute('src','team2/AUS.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Australie";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/AUS.png');}
            }
            //denmark--------------------------------------
            if(i==14){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="#d91313";
                Drapo.setAttribute('src','team2/DEN.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Denmark";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/DEN.png');}
            }
            //tuins--------------------------------------
            if(i==15){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="#d91313";
                Drapo.setAttribute('src','team2/TUN.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Tunisie";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/TUN.png');}
            }
            //espan--------------------------------------
            if(i==16){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="#cdd403";
                Drapo.setAttribute('src','team2/ESP.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Espagne";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/ESP.png');}
            }
            //japan--------------------------------------
            if(i==17){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="#d91313";
                Drapo.setAttribute('src','team2/JPN.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="japon";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/JPN.png');}
            }
            //german--------------------------------------
            if(i==18){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="#cdd403";
                Drapo.setAttribute('src','team2/GER.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Gemanie";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/GER.png');}
            }
            //costarica--------------------------------------
            if(i==19){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="blue";
                Drapo.setAttribute('src','team2/CRC.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Costa Rica";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/CRC.png');}
            }
            //belgic--------------------------------------
            if(i==20){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="#cdd403";
                Drapo.setAttribute('src','team2/BEL.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Belgique";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/BEL.png');}
            }
            //crowatia--------------------------------------
            if(i==21){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="blue";
                Drapo.setAttribute('src','team2/CRO.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Croatie";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Dominik"+'</h2><h1>'+"LIVAKOVIC"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"ivo"+'</h2><h1>'+"GRBIC"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Ivica"+'</h2><h1>'+"IVUSIC"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Josip"+'</h2><h1>'+"STANISIC"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Borna"+'</h2><h1>'+"BARISIC"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Martin"+'</h2><h1>'+"ERLIC"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Dejan"+'</h2><h1>'+"LOVREN"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Borna"+'</h2><h1>'+"SOSA"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Josko"+'</h2><h1>'+"GVARDIOL"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Domogoj"+'</h2><h1>'+"VIDA"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Josip"+'</h2><h1>'+"JURANOVIC"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Lovro"+'</h2><h1>'+"MAJER"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Mareo"+'</h2><h1>'+"KOVACIC"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Luka"+'</h2><h1>'+"MODRIC"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Marcelo"+'</h2><h1>'+"BROZOVIC"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Nikola"+'</h2><h1>'+"VLASIC"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Mario"+'</h2><h1>'+"PASALIC"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Luka"+'</h2><h1>'+"SUCIC"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Kristijan"+'</h2><h1>'+"JAKIC"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Luka"+'</h2><h1>'+"SUCIC"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Ivan"+'</h2><h1>'+"PERISIC"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Andej"+'</h2><h1>'+"KRAMARIC"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Marko"+'</h2><h1>'+"LIVAJA"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Bruno"+'</h2><h1>'+"PERKOVIC"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Ante"+'</h2><h1>'+"BUDIMIR"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Mislav"+'</h2><h1>'+"ORSIC"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Zlatko"+'</h2><h1>'+"Dalic"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/CRO.png');}
            }
            //marroc--------------------------------------
            if(i==22){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="#d91313";
                Drapo.setAttribute('src','team2/MAR.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Maroc";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Bono.png" class="MainPlay"><h2>'+"Yassine"+'</h2><h1>'+"BOUNOU"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/bounou.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Mounir.png" class="MainPlay"><h2>'+"Munir"+'</h2><h1>'+"El Kajoui"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/munir.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Tagnawti.png" class="MainPlay"><h2>'+"Ahmed"+'</h2><h1>'+"TAGNAOUITI"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/tagnaouti.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Hakimi.png" class="MainPlay"><h2>'+"Achraf"+'</h2><h1>'+"HAKIMI"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/HakimiCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Mazraoui.png" class="MainPlay"><h2>'+"Nousir"+'</h2><h1>'+"MAZRAOUI"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/mazrawi.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/nayef.png" class="MainPlay"><h2>'+"Nayef"+'</h2><h1>'+"AGUERD"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/aguerd.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/saiss.png" class="MainPlay"><h2>'+"Romain"+'</h2><h1>'+"SAISS"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/saiss.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/yamiq.png" class="MainPlay"><h2>'+"Jawad"+'</h2><h1>'+"El Yamiq"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/yamiq.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/dari.png" class="MainPlay"><h2>'+"Achraf"+'</h2><h1>'+"DARI"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/dari.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/banoun.png" class="MainPlay"><h2>'+"Badr"+'</h2><h1>'+"BENOUN"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/atiatLah.png" class="MainPlay"><h2>'+"Yahya"+'</h2><h1>'+"ATTIATLAH"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/amrabat.png" class="MainPlay"><h2>'+"Soufiane"+'</h2><h1>'+"AMRABAT"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/amrabat.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/ziach.png" class="MainPlay"><h2>'+"Hakime"+'</h2><h1>'+"ZAYACH"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/ziyech.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/ounahi.png" class="MainPlay"><h2>'+"Azzedin"+'</h2><h1>'+"OUNAHI"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/ounahi.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/draoui.png" class="MainPlay"><h2>'+"Anass"+'</h2><h1>'+"ZAROURY"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/chair.png" class="MainPlay"><h2>'+"Ilias"+'</h2><h1>'+"CHAIR"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/chair.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/aboukhlal.png" class="MainPlay"><h2>'+"Zakaria"+'</h2><h1>'+"ABOUKHLAL"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/aboukhlal.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/amallah.png" class="MainPlay"><h2>'+"Selim"+'</h2><h1>'+"AMALLAH"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/amallah.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/boufal.png" class="MainPlay"><h2>'+"Soufiane"+'</h2><h1>'+"BOUFAL"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/boufal.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/bilal.png" class="MainPlay"><h2>'+"Bilal"+'</h2><h1>'+"KHANO"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/hamdlah.png" class="MainPlay"><h2>'+"Abderzzak"+'</h2><h1>'+"HAMDLAH"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/sabiri.png" class="MainPlay"><h2>'+"Abdelhamid"+'</h2><h1>'+"SABIRI"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/sabiri.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/zalzouli.png" class="MainPlay"><h2>'+"Abde"+'</h2><h1>'+"EZZALZOULI"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/ezzalzouli.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/nasiri.png" class="MainPlay"><h2>'+"Youssef"+'</h2><h1>'+"EN NESERY"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/nesyri.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/chedira.png" class="MainPlay"><h2>'+"Walid"+'</h2><h1>'+"CHEDDIRA"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/jabran.png" class="MainPlay"><h2>'+"yahya"+'</h2><h1>'+"JABRANE"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/jabrane.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"Hoalid"+'</h2><h1>'+"REGRAGUI"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/regragui.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/MAR.png');}
            }
            //canada--------------------------------------
            if(i==23){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="red";
                Drapo.setAttribute('src','team2/CAN.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="canada";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/CAN.png');}
            }
            //brezil--------------------------------------
            if(i==24){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="green";
                Drapo.setAttribute('src','team2/BRA.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Brezil";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/BRA.png');}
            }
            //suiss--------------------------------------
            if(i==25){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="#d91313";
                Drapo.setAttribute('src','team2/SUI.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Suisse";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/SUI.png');}
            }
            //camero--------------------------------------
            if(i==26){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="green";
                Drapo.setAttribute('src','team2/CMR.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Camerone";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/CMR.png');}
            }
            //serbi--------------------------------------
            if(i==27){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="darkblue";
                Drapo.setAttribute('src','team2/SRB.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Serbie";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/SRB.png');}
            }
            //portgal--------------------------------------
            if(i==28){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="#d91313";
                Drapo.setAttribute('src','team2/POR.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Portugal";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/POR.png');}
            }
            //corea--------------------------------------
            if(i==29){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="darkblue";
                Drapo.setAttribute('src','team2/KOR.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Coreac";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/KOR.png');}
            }
            //oroguay--------------------------------------
            if(i==30){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="blue";
                Drapo.setAttribute('src','team2/URU.png');
                
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Uruguay";
                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/URU.png');}
            }
            //gana--------------------------------------
            if(i==31){
                vole3.style.display="block";
                TitleVole3.style.backgroundColor="green";
                Drapo.setAttribute('src','team2/GHA.png');
                if(checkAttack.length>6 || tester!=0){
                    for(let i=0;i<checkAttack.length;i++){
                    if(i<6)
                    checkAttack[i].style.display="block";
                    else
                    checkAttack[i].style.display="none";}
                }
                if(checkDef.length>8 || tester!=0){
                    for(let i=0;i<checkDef.length;i++){
                    if(i<8)
                    checkDef[i].style.display="block";
                    else
                    checkDef[i].style.display="none";}
                }
                if(checkMid.length>9 || tester!=0){
                    for(let i=0;i<checkMid.length;i++){
                    if(i<9)
                    checkMid[i].style.display="block";
                    else
                    checkMid[i].style.display="none";}
                }
                if(checkGar.length>3 || tester!=0){
                    for(let i=0;i<checkGar.length;i++){
                    if(i<3)
                    checkGar[i].style.display="block";
                    else
                    checkGar[i].style.display="none";}
                }
                equipeName.innerText="Ghana"; 

                //change gardien
                checkGar[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkGar[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change defender
                checkDef[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkDef[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change mid
                checkMid[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>'; 
                checkMid[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[6].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[7].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkMid[8].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change Attack
                checkAttack[0].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                checkAttack[5].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                //change coach
                var coach = document.getElementById("coach");
                coach.innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src="team2/GHA.png" class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+"-----"+'</h2><h1>'+"-----"+'</h1><p>coach</p></div></div><div class="flip-card-back"><img title="playerCard" src="playersCards/NewCard.png" class="PlayersCard"></div></div>';
                for(let i=0;i<MiniTeam.length;i++){
                    MiniTeam[i].setAttribute('src','team2/GHA.png');
                }
            }

        });
    }

//Slide Table ----------------------------------------------------------------------
var ModifTable = document.getElementById("ModifTable");
var ModifTable2 = document.getElementById("ModifTable2");
var ModifTable3 = document.getElementById("ModifTable3");
var clickShow = document.getElementById("clickToShow");
var clickShow2 = document.getElementById("clickToShow2");
var clickShow3 = document.getElementById("clickToShow3");
var miniFlesh = document.getElementById("miniFlesh");
var miniFlesh2 = document.getElementById("miniFlesh2");
var miniFlesh3 = document.getElementById("miniFlesh3");

function clickToShow(){
        ModifTable2.style.display="none";
        clickShow2.style.backgroundColor="#8b1539";
        miniFlesh2.src="pic/fleshLRED.png";
        ModifTable3.style.display="none";
        clickShow3.style.backgroundColor="#8b1539";
        miniFlesh3.src="pic/fleshLORG.png";

    if(ModifTable.style.display=="block"){
        ModifTable.style.display="none";
        clickShow.style.backgroundColor="#8b1539";
        miniFlesh.src="pic/fleshL.png";
    }
    else{
        ModifTable.style.display="block";  
        clickShow.style.backgroundColor="#5d001d";
        miniFlesh.src="pic/fleshR.png";
    }
}

function clickToShow2(){
        ModifTable.style.display="none";
        clickShow.style.backgroundColor="#8b1539";
        miniFlesh.src="pic/fleshL.png";
        ModifTable3.style.display="none";
        clickShow3.style.backgroundColor="#8b1539";
        miniFlesh3.src="pic/fleshLORG.png";

    if(ModifTable2.style.display=="block"){
        ModifTable2.style.display="none";
        clickShow2.style.backgroundColor="#8b1539";
        miniFlesh2.src="pic/fleshLRED.png";
    }
    else{
        ModifTable2.style.display="block";  
        clickShow2.style.backgroundColor="#5d001d";
        miniFlesh2.src="pic/fleshRRED.png";
    }
}

function clickToShow3(){
        ModifTable.style.display="none";
        clickShow.style.backgroundColor="#8b1539";
        miniFlesh.src="pic/fleshL.png";
        ModifTable2.style.display="none";
        clickShow2.style.backgroundColor="#8b1539";
        miniFlesh2.src="pic/fleshLRED.png";

    if(ModifTable3.style.display=="block"){
        ModifTable3.style.display="none";
        clickShow3.style.backgroundColor="#8b1539";
        miniFlesh3.src="pic/fleshLORG.png";
    }
    else{
        ModifTable3.style.display="block";  
        clickShow3.style.backgroundColor="#5d001d";
        miniFlesh3.src="pic/fleshRORG.png";
    }
}


var ind1=1;
var ind2=1;
var ind3=1;
var ind4=1;
function CreatNewPlayer(){
    //selecte-----------------------------------
    var gardien = document.getElementById("gard");
    var Defence = document.getElementById("def");
    var milieu = document.getElementById("milieu");
    var attack = document.getElementById("attack");
    var Place = document.getElementById("jou");
    //names-------------------------------------
    var Name = document.getElementById("TheName").value;
    var NickName = document.getElementById("nickName").value;
    var MiniTeam = document.getElementsByClassName('MiniTeam');
    //stats-------------------------------------
    var PAS = document.getElementById("PAS").value;
    var SHO = document.getElementById("SHO").value;
    var PAC = document.getElementById("PAC").value;
    var DRI = document.getElementById("DRI").value;
    var DEF = document.getElementById("DEF").value;
    var PHY = document.getElementById("PHY").value;

    //players field----------------------------------------
    var GardienField = document.getElementById("GardienField");
    var MidField = document.getElementById("MidField");
    var AttackField = document.getElementById("AttackField");
    var DefenseField = document.getElementById("DefenseField");
    var ModifyGar = document.getElementById("ModifyGar");
    var ModifyDef = document.getElementById("ModifyDef");
    var ModifyMid = document.getElementById("ModifyMid");
    var ModifyAtt = document.getElementById("ModifyAtt");
  
    if(Name && NickName && !isNaN(PAS) && !isNaN(SHO) && !isNaN(PAC) && !isNaN(DRI) && !isNaN(DEF) && !isNaN(PHY) && parseInt(PAS)<100 && parseInt(SHO)<100 && parseInt(PAC)<100 && parseInt(DEF)<100 && parseInt(DRI)<100 && parseInt(PHY)<100  ){
    var SAM= parseInt((parseInt(PAS) +  parseInt(SHO) +  parseInt(PAC) +  parseInt(DEF) + parseInt(DRI) +  parseInt(PHY))/6);
        if(gardien.selected){
            
            GardienField.innerHTML+='<div class="flip-card checkGar" onclick="CHECK1()"><div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src='+MiniTeam[0].src+' class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+NickName+'</h2><h1>'+Name+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="" src="playersCards/NewCard.png" class="PlayersCard"><p class="S0">'+SAM+'</p><p class="S1">'+PAS+'</p><p class="S2">'+SHO+'</p><p class="S3">'+PAC+'</p><p class="S4">'+DRI+'</p><p class="S5">'+DEF+'</p><p class="S6">'+PHY+'</p></div></div></div>';
            ModifyGar.innerHTML+='<option value="gard" class="options1" >Gardien'+ind1+': '+Name+'</option>';
            ind1++;

        }
        else if(Defence.selected){
            DefenseField.innerHTML+='<div class="flip-card checkDef" onclick="CHECK2()"><div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src='+MiniTeam[0].src+' class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+NickName+'</h2><h1>'+Name+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="" src="playersCards/NewCard.png" class="PlayersCard"><p class="S0">'+SAM+'</p><p class="S1">'+PAS+'</p><p class="S2">'+SHO+'</p><p class="S3">'+PAC+'</p><p class="S4">'+DRI+'</p><p class="S5">'+DEF+'</p><p class="S6">'+PHY+'</p></div></div></div>';
            ModifyDef.innerHTML+='<option value="gard" class="options2" >Defender'+ind2+': '+Name+'</option>';
            ind2++;
        }
        else if(milieu.selected){
            MidField.innerHTML+='<div class="flip-card checkMid" onclick="CHECK3()"><div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src='+MiniTeam[0].src+' class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+NickName+'</h2><h1>'+Name+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="" src="playersCards/NewCard.png" class="PlayersCard"><p class="S0">'+SAM+'</p><p class="S1">'+PAS+'</p><p class="S2">'+SHO+'</p><p class="S3">'+PAC+'</p><p class="S4">'+DRI+'</p><p class="S5">'+DEF+'</p><p class="S6">'+PHY+'</p></div></div></div>';
            ModifyMid.innerHTML+='<option value="gard" class="options3" >Milieu'+ind3+': '+Name+'</option>';
            ind3++;
        }
        else if(attack.selected){
            AttackField.innerHTML+='<div class="flip-card checkAttack" onclick="CHECK4()"><div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src='+MiniTeam[0].src+' class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+NickName+'</h2><h1>'+Name+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="" src="playersCards/NewCard.png" class="PlayersCard"><p class="S0">'+SAM+'</p><p class="S1">'+PAS+'</p><p class="S2">'+SHO+'</p><p class="S3">'+PAC+'</p><p class="S4">'+DRI+'</p><p class="S5">'+DEF+'</p><p class="S6">'+PHY+'</p></div></div></div>';
            ModifyAtt.innerHTML+='<option value="gard" class="options4" >Attaque'+ind4+': '+Name+'</option>';
            ind4++;
        }
        }
        else{
        alert("check your input : only numbers are accepted as stat and it must be <100  Or Name/NickName Invalide");
        }
}

var tester=0;


function CHECK1(){
    
    var Elements = document.querySelectorAll(".checkGar");
    for (var index = 0; index <Elements.length; index++){
       Elements[index].addEventListener("dblclick",
       function(){
          this.style.display="none";
          tester++;      
       });
    }
 }  
 
 
function CHECK2(){
    
    
    var Elements = document.querySelectorAll(".checkDef");
       for (var index = 0; index <Elements.length; index++){
          Elements[index].addEventListener("dblclick",
          function(){
             this.style.display="none";
             tester++; 
          }); 
       }
    }  

function CHECK3(){
    
    
    var Elements = document.querySelectorAll(".checkMid");
       for (var index = 0; index <Elements.length; index++){
          Elements[index].addEventListener("dblclick",
          function(){
             this.style.display="none";
             tester++; 
          });       
       }
    }  

function CHECK4(){
    
    
    var Elements = document.querySelectorAll(".checkAttack");
       for (var index = 0; index <Elements.length; index++){
          Elements[index].addEventListener("dblclick",
          function(){
             this.style.display="none";
             tester++; 
          });
       }
    }  



function deleteTosel(){
    var garSelect = document.getElementById("garSelect");
    var defSelect = document.getElementById("defSelect");
    var midSelect = document.getElementById("midSelect");
    var attSelect = document.getElementById("attSelect");

    var ModifyGar = document.getElementById("ModifyGar");
    var ModifyDef = document.getElementById("ModifyDef");
    var ModifyMid = document.getElementById("ModifyMid");
    var ModifyAtt = document.getElementById("ModifyAtt");
    if(garSelect.selected)
    {
         ModifyGar.style.display="block";
         ModifyDef.style.display="none";
         ModifyMid.style.display="none";
         ModifyAtt.style.display="none";
    }
    else if(defSelect.selected)
    {
         ModifyGar.style.display="none";
         ModifyDef.style.display="block";
         ModifyMid.style.display="none";
         ModifyAtt.style.display="none";
    }
    else if(midSelect.selected)
    {
         ModifyGar.style.display="none";
         ModifyDef.style.display="none";
         ModifyMid.style.display="block";
         ModifyAtt.style.display="none";
    }
    else if(attSelect.selected)
    {
         ModifyGar.style.display="none";
         ModifyDef.style.display="none";
         ModifyMid.style.display="none";
         ModifyAtt.style.display="block";
    }
}

function Modify(){   
    //selecte-----------------------------------
    var garSelect2 = document.getElementById("garSelect");
    var defSelect2 = document.getElementById("defSelect");
    var midSelect2 = document.getElementById("midSelect");
    var attSelect2 = document.getElementById("attSelect");
    //names-------------------------------------
    var Name2 = document.getElementById("TheName2").value;
    var NickName2 = document.getElementById("nickName2").value;
    var MiniTeam = document.getElementsByClassName('MiniTeam');
    //stats-------------------------------------
    var PAS2 = document.getElementById("PAS2").value;
    var SHO2 = document.getElementById("SHO2").value;
    var PAC2 = document.getElementById("PAC2").value;
    var DRI2 = document.getElementById("DRI2").value;
    var DEF2 = document.getElementById("DEF2").value;
    var PHY2 = document.getElementById("PHY2").value;
    //players field----------------------------------------
    var checkGar2 = document.getElementsByClassName("checkGar");
    var checkDef2 = document.getElementsByClassName("checkDef");
    var checkMid2 = document.getElementsByClassName("checkMid");
    var checkAtt2 = document.getElementsByClassName("checkAttack");
    //options----------------------------------------------
    var options1 = document.getElementsByClassName("options1");
    var options2 = document.getElementsByClassName("options2");
    var options3 = document.getElementsByClassName("options3");
    var options4 = document.getElementsByClassName("options4");
    
    if(Name2 && NickName2 && !isNaN(PAS2) && !isNaN(SHO2) && !isNaN(PAC2) && !isNaN(DRI2) && !isNaN(DEF2) && !isNaN(PHY2) && parseInt(PAS2)<100 && parseInt(SHO2)<100 && parseInt(PAC2)<100 && parseInt(DEF2)<100 && parseInt(DRI2)<100 && parseInt(PHY2)<100  ){
    var SAM2= parseInt((parseInt(PAS2) +  parseInt(SHO2) +  parseInt(PAC2) +  parseInt(DEF2) + parseInt(DRI2) +  parseInt(PHY2))/6);
        if(garSelect2.selected){
            var index1 = (document.getElementById('ModifyGar').selectedIndex)+1;
            if(checkGar2[2+index1].style.display=="none"){
                alert("this player has been deleted");
                options1[index1-1].style.display="none";
                options1[index1-1].selected=false;
            }
            else
            checkGar2[2+index1].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src='+MiniTeam[0].src+' class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+NickName2+'</h2><h1>'+Name2+'</h1><p>Gardien</p></div></div><div class="flip-card-back"><img title="" src="playersCards/NewCard.png" class="PlayersCard"><p class="S0">'+SAM2+'</p><p class="S1">'+PAS2+'</p><p class="S2">'+SHO2+'</p><p class="S3">'+PAC2+'</p><p class="S4">'+DRI2+'</p><p class="S5">'+DEF2+'</p><p class="S6">'+PHY2+'</p></div></div>';       
        }
        else if(defSelect2.selected){
            var index2 = (document.getElementById('ModifyDef').selectedIndex)+1;
            if(checkDef2[7+index2].style.display=="none"){
                alert("this player has been deleted");
                options2[index2-1].style.display="none";
                options2[index2-1].selected=false;
            }
            else
            checkDef2[7+index2].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src='+MiniTeam[0].src+' class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+NickName2+'</h2><h1>'+Name2+'</h1><p>Defender</p></div></div><div class="flip-card-back"><img title="" src="playersCards/NewCard.png" class="PlayersCard"><p class="S0">'+SAM2+'</p><p class="S1">'+PAS2+'</p><p class="S2">'+SHO2+'</p><p class="S3">'+PAC2+'</p><p class="S4">'+DRI2+'</p><p class="S5">'+DEF2+'</p><p class="S6">'+PHY2+'</p></div></div>';
              
        }
        else if(midSelect2.selected){
            var index3 = (document.getElementById('ModifyMid').selectedIndex)+1;
            if(checkMid2[8+index3].style.display=="none"){
                alert("this player has been deleted");
                options3[index3-1].style.display="none";
                options3[index3-1].selected=false;
            }
            else
            checkMid2[8+index3].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src='+MiniTeam[0].src+' class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+NickName2+'</h2><h1>'+Name2+'</h1><p>Milieu.Tr</p></div></div><div class="flip-card-back"><img title="" src="playersCards/NewCard.png" class="PlayersCard"><p class="S0">'+SAM2+'</p><p class="S1">'+PAS2+'</p><p class="S2">'+SHO2+'</p><p class="S3">'+PAC2+'</p><p class="S4">'+DRI2+'</p><p class="S5">'+DEF2+'</p><p class="S6">'+PHY2+'</p></div></div>';
                    
        }
        else if(attSelect2.selected){
            var index4 = (document.getElementById('ModifyAtt').selectedIndex)+1;
            if(checkAtt2[5+index4].style.display=="none"){
                alert("this player has been deleted");
                options4[index4-1].style.display="none";
                options4[index4-1].selected=false;
            }
            else
            checkAtt2[5+index4].innerHTML='<div class="flip-card-inner"><div class="flip-card-front"><div class="player"><img title="team" src='+MiniTeam[0].src+' class="MiniTeam"><img title="armani" src="players/Guest.png" class="MainPlay"><h2>'+NickName2+'</h2><h1>'+Name2+'</h1><p>Attaque</p></div></div><div class="flip-card-back"><img title="" src="playersCards/NewCard.png" class="PlayersCard"><p class="S0">'+SAM2+'</p><p class="S1">'+PAS2+'</p><p class="S2">'+SHO2+'</p><p class="S3">'+PAC2+'</p><p class="S4">'+DRI2+'</p><p class="S5">'+DEF2+'</p><p class="S6">'+PHY2+'</p></div></div>';
                  
        }
        }
        else{
        alert("check your input : only numbers are accepted as stat    and it must be <100  Or Name/NickName Invalide");
        }
}

//go to Top button----------------------------------------------------------------------
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("logo").style.width="40px";
    document.getElementById("logo").style.visibility="hidden";
    document.getElementById("logo2").style.width= "50px";
    document.getElementById("logo3").style.visibility="visible";
    
  } else {
     document.getElementById("logo").style.width="161px";
     document.getElementById("logo").style.visibility="visible";
     document.getElementById("logo2").style.width= "120px";
     document.getElementById("logo2").style.width= "120px";
     document.getElementById("logo3").style.visibility="hidden";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

