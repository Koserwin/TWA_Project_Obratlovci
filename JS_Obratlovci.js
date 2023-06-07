

//#region -- Změna režimu

function Rezim() {
    var links = document.getElementsByTagName('link');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (link.getAttribute('href') == 'CSS_Obratlovci_L.css') {
        link.setAttribute('href', 'CSS_Obratlovci_D.css');
      } else {
        link.setAttribute('href', 'CSS_Obratlovci_L.css');
      }
    }
  }

// #endregion


// #region -- Skrytý výběr Charakteristika

  let O_evol = 0;
  let O_char = 0;

  function O_Charakteristika()
  {
    
    const hiddenContent1 = document.querySelector(".O_hide_1");
    const sipka_O_Ch = document.querySelector(".Znak_O_Ch");
    const hiddenContent2 = document.querySelector(".O_hide_2");
    const sipka_O_E = document.querySelector(".Znak_O_E");
    
    if (O_char == 0) {
          hiddenContent1.style.display = "block";
          O_char++;
          sipka_O_Ch.innerHTML = "^   ";
          //alert("block");
  
        } else {
          hiddenContent1.style.display = "none";
          O_char--;
          sipka_O_Ch.innerHTML = ">  ";
          //alert("none");

        }
        
    sipka_O_E.innerHTML = ">  ";
    hiddenContent2.style.display = "none";        
    O_evol = 0;
  }
  
// #endregion


// #region -- Skrytí výběr Evoluce

 

  function O_Evoluce()
  {
    
    const hiddenContent2 = document.querySelector(".O_hide_2");
    const sipka_O_E = document.querySelector(".Znak_O_E");
    const hiddenContent1 = document.querySelector(".O_hide_1");
    const sipka_O_Ch = document.querySelector(".Znak_O_Ch");
    
    if (O_evol == 0) {
          hiddenContent2.style.display = "block";
          O_evol++;
          sipka_O_E.innerHTML = "^   ";
          //alert("block");
  
        } else {
          hiddenContent2.style.display = "none";
          O_evol--;
          sipka_O_E.innerHTML = ">  ";
          //alert("none");

        }
        
    sipka_O_Ch.innerHTML = ">  ";
    hiddenContent1.style.display = "none";
    O_char = 0;
  }
  
// #endregion


// #region -- Nastavení 

function Nastaveni()
{
  const Okno = document.querySelector(".Okno_nastaveni");
  Okno.style.display = "block";
}

function mleave()
{
  const Okno = document.querySelector(".Okno_nastaveni");
  Okno.style.display = "none";
}

let Panel_onload = 0;


let panel = 0;

function ON_Panel()
{
  const dva = document.querySelector(".two");
  const tri = document.querySelector(".three");

  let color = "deepskyblue";
  const pole = document.querySelector(".RECT_Panel");
  const koule = document.querySelector(".CIRCLE_Panel");



  if (panel == 1 )
  {
    dva.style.display = "block";
    panel = 0;
    Panel_onload = 0;
    koule.setAttribute("cx", 12);
    tri.style.gridColumn = "2/3";
    
    

  }
  else
  {
    dva.style.display = "none";
    panel = 1;
    Panel_onload = 1;

    tri.style.gridColumn = "1/3";
    
    koule.setAttribute("cx", 32);


  }

  localStorage.setItem("panel_ls", Panel_onload);



}
let Motiv_onload = 1;

let zmena = 0;

function ON_Motiv()
{
 
  let color = "deepskyblue";
  const pole = document.querySelector(".RECT_Motiv");
  const koule = document.querySelector(".CIRCLE_Motiv");
  const pole_M = document.querySelector(".RECT_Motiv_M");
  const koule_M = document.querySelector(".CIRCLE_Motiv_M");
  const Ikona = document.getElementById("Ikona_N");
  const Ikona_M = document.getElementById("IMG_N_M");
  

if (zmena == 0)
{
  zmena = 1;
  Motiv_onload = 1;
  koule.setAttribute("cx", 32);
  
  koule_M.setAttribute("cx", 32);
  Ikona.setAttribute("xlink:href","Obrázky/bile_kolo.png");
  Ikona_M.setAttribute("xlink:href","Obrázky/Cary_bile.png");

  
  


}
else
{
  zmena = 0;
  Motiv_onload = 0;
  
  
  koule.setAttribute("cx", 12);
  
  koule_M.setAttribute("cx", 12);
  Ikona.setAttribute("xlink:href","Obrázky/cerne_kolo.png");
  Ikona_M.setAttribute("xlink:href","Obrázky/cerne_cary.png");

  
  
  

}

localStorage.setItem("motiv_ls", Motiv_onload);

Rezim();

}


// #endregion


// #region -- Mobil

let Druhy_M_p = 0;
function Druhy_M()
{
  const sest = document.querySelector(".six");
  const sipka_O_M = document.getElementById("Druhy_M");

  if (Druhy_M_p == 0)
  {
  sest.style.display = "block";
  Druhy_M_p = 1;
  sipka_O_M.innerHTML = "^";
  }
  else{
  sest.style.display = "none";
  Druhy_M_p = 0;
  sipka_O_M.innerHTML = ">";
  

  }


}


let Cha_M = 0;
function O_Ch_M()
{
  const CH_M = document.querySelector(".Charakteristika_M");
  const N_CH_M = document.getElementById("N_Char_M");

  if(Cha_M == 0)
  {
  CH_M.style.display = "block";
  Cha_M = 1;
  N_CH_M.innerHTML = "^  Charakteristika";
  }
else
{
CH_M.style.display = "none" 
Cha_M = 0;
N_CH_M.innerHTML = ">  Charakteristika";


}

}

let So_M = 0;
function O_SO_M()
{
  const SyO_M = document.querySelector(".SO_M");
  const N_SO_M = document.getElementById("N_Syo_M");

  if(So_M == 0)
  {
  SyO_M.style.display = "block";
  So_M = 1;
  N_SO_M.innerHTML = "^  Systém obratlovců";
  }
else
{
SyO_M.style.display = "none" 
So_M = 0;
N_SO_M.innerHTML = ">  Systém obratlovců";


}

}


let E_M = 0;
function O_E_M()
{
  const Ev_M = document.querySelector(".EV_M");
  const N_E_M = document.getElementById("N_Ev_M");

  if(E_M == 0)
  {
  Ev_M.style.display = "block";
  E_M = 1;
  N_E_M.innerHTML = "^  Evoluce";
  }
else
{
Ev_M.style.display = "none" 
E_M = 0;
N_E_M.innerHTML = ">  Evoluce";


}

}

let T_M = 0;
function O_T_M()
{
  const TA_M = document.querySelector(".TA_M");
  const N_Ta_M = document.getElementById("N_Ta_M");

  if(T_M == 0)
  {
  TA_M.style.display = "block";
  T_M = 1;
  N_Ta_M.innerHTML = "^  Taxonomie";
  }
else
{
TA_M.style.display = "none" 
T_M = 0;
N_Ta_M.innerHTML = ">  Taxonomie";


}

}

function ON_N_M()
{

  const Okno_M = document.querySelector(".Okno_nastaveni_M");
  const CTV = document.querySelector(".RECT_Motiv");
  Okno_M.style.display = "block";
  CTV.style.display = "block";
}


function mleave_M()
{
  const Okno_M = document.querySelector(".Okno_nastaveni_M");
  Okno_M.style.display = "none";



}


let zmena_M = 0;

function ON_Motiv_M()
{
 
  let color = "deepskyblue";
  const pole_M = document.querySelector(".RECT_Motiv_M");
  const koule_M = document.querySelector(".CIRCLE_Motiv_M");

  

if (zmena == 0)
{
  zmena_M = 1;
  pole_M.style.stroke = color;
  koule_M.style.fill = color;
  koule_M.setAttribute("cx", 32);
}
else
{
  zmena = 0;
  pole_M.style.stroke = "black";
  koule_M.style.fill = "black";
  koule_M.setAttribute("cx", 12);
}

ON_Motiv();
Rezim();

}

// #endregion


// #region -- Savci

let S_1 = 0;
function S_1_M()
{
  const S_t = document.querySelector(".Sa_1");
  const S_i = document.getElementById("Sa_1");

  if(S_1 == 0)
  {
    S_t.style.display = "block";
  S_1 = 1;
  S_i.innerHTML = "^  Společné znaky savců";
  }
else
{
  S_t.style.display = "none" 
S_1 = 0;
S_i.innerHTML = ">  Společné znaky savců";


}

}


let S_2 = 0;
function S_2_M()
{
  const S_t = document.querySelector(".Sa_2");
  const S_i = document.getElementById("Sa_2");

  if(S_2 == 0)
  {
    S_t.style.display = "block";
  S_2 = 1;
  S_i.innerHTML = "^  Fylogeneze a evoluce savců";
  }
else
{
  S_t.style.display = "none" 
S_2 = 0;
S_i.innerHTML = ">  Fylogeneze a evoluce savců";


}

}

let S_3 = 0;
function S_3_M()
{
  const S_t = document.querySelector(".Sa_3");
  const S_i = document.getElementById("Sa_3");

  if(S_3 == 0)
  {
    S_t.style.display = "block";
  S_3 = 1;
  S_i.innerHTML = "^  Rozmnožování";
  }
else
{
  S_t.style.display = "none" 
S_3 = 0;
S_i.innerHTML = ">  Rozmnožování";


}

}

let S_4 = 0;
function S_4_M()
{
  const S_t = document.querySelector(".Sa_4");
  const S_i = document.getElementById("Sa_4");

  if(S_4 == 0)
  {
    S_t.style.display = "block";
  S_4 = 1;
  S_i.innerHTML = "^  Potrava";
  }
else
{
  S_t.style.display = "none" 
S_4 = 0;
S_i.innerHTML = ">  Potrava";


}

}

let S_5 = 0;
function S_5_M()
{
  const S_t = document.querySelector(".Sa_5");
  const S_i = document.getElementById("Sa_5");

  if(S_5 == 0)
  {
    S_t.style.display = "block";
  S_5 = 1;
  S_i.innerHTML = "^  Anatomie a vzhled";
  }
else
{
  S_t.style.display = "none" 
S_5 = 0;
S_i.innerHTML = ">  Anatomie a vzhled";


}

}


let S_6 = 0;
function S_6_M()
{
  const S_t = document.querySelector(".Sa_6");
  const S_i = document.getElementById("Sa_6");

  if(S_6 == 0)
  {
    S_t.style.display = "block";
  S_6 = 1;
  S_i.innerHTML = "^  Rychlost pohybu některých druhů";
  }
else
{
  S_t.style.display = "none" 
S_6 = 0;
S_i.innerHTML = ">  Rychlost pohybu některých druhů";


}

}

// #endregion


// #region -- Plazi

let Pl_1 = 0;
function Pl_1_M()
{
  const S_t = document.querySelector(".Pl_1");
  const S_i = document.getElementById("Pl_1");

  if(Pl_1 == 0)
  {
    S_t.style.display = "block";
    Pl_1 = 1;
  S_i.innerHTML = "^  Fylogeneze";
  }
else
{
  S_t.style.display = "none" 
  Pl_1 = 0;
S_i.innerHTML = ">  Fylogeneze";


}

}


let Pl_2 = 0;
function Pl_2_M()
{
  const S_t = document.querySelector(".Pl_2");
  const S_i = document.getElementById("Pl_2");

  if(Pl_2 == 0)
  {
    S_t.style.display = "block";
    Pl_2 = 1;
  S_i.innerHTML = "^  Evoluce plazů";
  }
else
{
  S_t.style.display = "none" 
  Pl_2 = 0;
S_i.innerHTML = ">  Evoluce plazů";


}

}

let Pl_3 = 0;
function Pl_3_M()
{
  const S_t = document.querySelector(".Pl_3");
  const S_i = document.getElementById("Pl_3");

  if(Pl_3 == 0)
  {
    S_t.style.display = "block";
    Pl_3 = 1;
  S_i.innerHTML = "^  Tělní soustava";
  }
else
{
  S_t.style.display = "none" 
  Pl_3 = 0;
S_i.innerHTML = ">  Tělní soustava";


}

}

let Pl_4 = 0;
function Pl_4_M()
{
  const S_t = document.querySelector(".Pl_4");
  const S_i = document.getElementById("Pl_4");

  if(Pl_4 == 0)
  {
    S_t.style.display = "block";
    Pl_4 = 1;
  S_i.innerHTML = "^  Rozmnožování";
  }
else
{
  S_t.style.display = "none" 
  Pl_4 = 0;
S_i.innerHTML = ">  Rozmnožování";


}

}

let Pl_5 = 0;
function Pl_5_M()
{
  const S_t = document.querySelector(".Pl_5");
  const S_i = document.getElementById("Pl_5");

  if(Pl_5 == 0)
  {
    S_t.style.display = "block";
    Pl_5 = 1;
  S_i.innerHTML = "^  Ohrožení";
  }
else
{
  S_t.style.display = "none" 
  Pl_5 = 0;
S_i.innerHTML = ">  Ohrožení";


}

}

// #endregion


// #region -- Ryby

let Ry_1 = 0;
function R_1_M()
{
  const S_t = document.querySelector(".Ry_1");
  const S_i = document.getElementById("Ry_1");

  if(Ry_1 == 0)
  {
    S_t.style.display = "block";
    Ry_1 = 1;
  S_i.innerHTML = "^  Anatomie a fyziologie ryb";
  }
else
{
  S_t.style.display = "none" 
  Ry_1 = 0;
S_i.innerHTML = ">  Anatomie a fyziologie ryb";


}

}


let Ry_2 = 0;
function R_2_M()
{
  const S_t = document.querySelector(".Ry_2");
  const S_i = document.getElementById("Ry_2");

  if(Ry_2 == 0)
  {
    S_t.style.display = "block";
    Ry_2 = 1;
  S_i.innerHTML = "^  Etologie ryb";
  }
else
{
  S_t.style.display = "none" 
  Ry_2 = 0;
S_i.innerHTML = ">  Etologie ryb";


}

}

let Ry_3 = 0;
function R_3_M()
{
  const S_t = document.querySelector(".Ry_3");
  const S_i = document.getElementById("Ry_3");

  if(Ry_3 == 0)
  {
    S_t.style.display = "block";
    Ry_3 = 1;
  S_i.innerHTML = "^  Biotopy";
  }
else
{
  S_t.style.display = "none" 
  Ry_3 = 0;
S_i.innerHTML = ">  Biotopy";


}

}

let Ry_4 = 0;
function R_4_M()
{
  const S_t = document.querySelector(".Ry_4");
  const S_i = document.getElementById("Ry_4");

  if(Ry_4 == 0)
  {
    S_t.style.display = "block";
    Ry_4 = 1;
  S_i.innerHTML = "^  Nemoci ryb";
  }
else
{
  S_t.style.display = "none" 
  Ry_4 = 0;
S_i.innerHTML = ">  Nemoci ryb";


}

}

let Ry_5 = 0;
function R_5_M()
{
  const S_t = document.querySelector(".Ry_5");
  const S_i = document.getElementById("Ry_5");

  if(Ry_5 == 0)
  {
    S_t.style.display = "block";
    Ry_5 = 1;
  S_i.innerHTML = "^  Ohrožení";
  }
else
{
  S_t.style.display = "none" 
  Ry_5 = 0;
S_i.innerHTML = ">  Ohrožení";


}

}

// #endregion


// #region -- Obojživelníci

let Ob_1 = 0;
function O_1_M()
{
  const S_t = document.querySelector(".Ob_1");
  const S_i = document.getElementById("Ob_1");

  if(Ob_1 == 0)
  {
    S_t.style.display = "block";
    Ob_1 = 1;
  S_i.innerHTML = "^  Charakteristika třídy";
  }
else
{
  S_t.style.display = "none" 
  Ob_1 = 0;
S_i.innerHTML = ">  Charakteristika třídy";


}

}


let Ob_2 = 0;
function O_2_M()
{
  const S_t = document.querySelector(".Ob_2");
  const S_i = document.getElementById("Ob_2");

  if(Ob_2 == 0)
  {
    S_t.style.display = "block";
    Ob_2 = 1;
  S_i.innerHTML = "^  Původ obojživelníků";
  }
else
{
  S_t.style.display = "none" 
  Ob_2 = 0;
S_i.innerHTML = ">  Původ obojživelníků";


}

}

let Ob_3 = 0;
function O_3_M()
{
  const S_t = document.querySelector(".Ob_3");
  const S_i = document.getElementById("Ob_3");

  if(Ob_3 == 0)
  {
    S_t.style.display = "block";
    Ob_3 = 1;
  S_i.innerHTML = "^  Rozměry obojživelníků";
  }
else
{
  S_t.style.display = "none" 
  Ob_3 = 0;
S_i.innerHTML = ">  Rozměry obojživelníků";


}

}

let Ob_4 = 0;
function O_4_M()
{
  const S_t = document.querySelector(".Ob_4");
  const S_i = document.getElementById("Ob_4");

  if(Ob_4 == 0)
  {
    S_t.style.display = "block";
    Ob_4 = 1;
  S_i.innerHTML = "^  Obojživelníci žijící v Česku";
  }
else
{
  S_t.style.display = "none" 
  Ob_4 = 0;
S_i.innerHTML = ">  Obojživelníci žijící v Česku";


}

}





// #endregion


// #region -- Obojživelníci

let Pt_1 = 0;
function Pt_1_M()
{
  const S_t = document.querySelector(".Pt_1");
  const S_i = document.getElementById("Pt_1");

  if(Pt_1 == 0)
  {
    S_t.style.display = "block";
    Pt_1 = 1;
  S_i.innerHTML = "^  Evoluce";
  }
else
{
  S_t.style.display = "none" 
  Pt_1 = 0;
S_i.innerHTML = ">  Evoluce";


}

}


let Pt_2 = 0;
function Pt_2_M()
{
  const S_t = document.querySelector(".Pt_2");
  const S_i = document.getElementById("Pt_2");

  if(Pt_2 == 0)
  {
    S_t.style.display = "block";
    Pt_2 = 1;
  S_i.innerHTML = "^  Anatomie";
  }
else
{
  S_t.style.display = "none" 
  Pt_2 = 0;
S_i.innerHTML = ">  Anatomie";


}

}

let Pt_3 = 0;
function Pt_3_M()
{
  const S_t = document.querySelector(".Pt_3");
  const S_i = document.getElementById("Pt_3");

  if(Pt_3 == 0)
  {
    S_t.style.display = "block";
    Pt_3 = 1;
  S_i.innerHTML = "^  Biologie a chování";
  }
else
{
  S_t.style.display = "none" 
  Pt_3 = 0;
S_i.innerHTML = ">  Biologie a chování";


}

}

let Pt_4 = 0;
function Pt_4_M()
{
  const S_t = document.querySelector(".Pt_4");
  const S_i = document.getElementById("Pt_4");

  if(Pt_4 == 0)
  {
    S_t.style.display = "block";
    Pt_4 = 1;
  S_i.innerHTML = "^  Rozmnožování";
  }
else
{
  S_t.style.display = "none" 
  Pt_4 = 0;
S_i.innerHTML = ">  Rozmnožování";


}

}

let Pt_5 = 0;
function Pt_5_M()
{
  const S_t = document.querySelector(".Pt_5");
  const S_i = document.getElementById("Pt_5");

  if(Pt_5 == 0)
  {
    S_t.style.display = "block";
    Pt_5 = 1;
  S_i.innerHTML = "^  Vztah člověka k ptákům";
  }
else
{
  S_t.style.display = "none" 
  Pt_5 = 0;
S_i.innerHTML = ">  Vztah člověka k ptákům";


}

}



// #endregion


// #region -- Obojživelníci

let Kr_1 = 0;
function Kr_1_M()
{
  const S_t = document.querySelector(".Kr_1");
  const S_i = document.getElementById("Kr_1");

  if(Kr_1 == 0)
  {
    S_t.style.display = "block";
    Kr_1 = 1;
  S_i.innerHTML = "^  Popis, anatomie";
  }
else
{
  S_t.style.display = "none" 
  Kr_1 = 0;
S_i.innerHTML = ">  Popis, anatomie";


}

}


let Kr_2 = 0;
function Kr_2_M()
{
  const S_t = document.querySelector(".Kr_2");
  const S_i = document.getElementById("Kr_2");

  if(Kr_2 == 0)
  {
    S_t.style.display = "block";
    Kr_2 = 1;
  S_i.innerHTML = "^  Způsob života";
  }
else
{
  S_t.style.display = "none" 
  Kr_2 = 0;
S_i.innerHTML = ">  Způsob života";


}

}






// #endregion


// #region -- Obojživelníci

let Pa_1 = 0;
function Pa_1_M()
{
  const S_t = document.querySelector(".Pa_1");
  const S_i = document.getElementById("Pa_1");

  if(Pa_1 == 0)
  {
    S_t.style.display = "block";
    Pa_1 = 1;
  S_i.innerHTML = "^  Soustavy";
  }
else
{
  S_t.style.display = "none" 
  Pa_1 = 0;
S_i.innerHTML = ">  Soustavy";


}

}


let Pa_2 = 0;
function Pa_2_M()
{
  const S_t = document.querySelector(".Pa_2");
  const S_i = document.getElementById("Pa_2");

  if(Pa_2 == 0)
  {
    S_t.style.display = "block";
    Pa_2 = 1;
  S_i.innerHTML = "^  Smysly";
  }
else
{
  S_t.style.display = "none" 
  Pa_2 = 0;
S_i.innerHTML = ">  Smysly";


}

}


let Pa_3 = 0;
function Pa_3_M()
{
  const S_t = document.querySelector(".Pa_3");
  const S_i = document.getElementById("Pa_3");

  if(Pa_3 == 0)
  {
    S_t.style.display = "block";
    Pa_3 = 1;
  S_i.innerHTML = "^  Nejznámější paryby";
  }
else
{
  S_t.style.display = "none" 
  Pa_3 = 0;
S_i.innerHTML = ">  Nejznámější paryby";


}

}



// #endregion


// #region -- onload
let k =0;

window.onload = function() {



  const dva = document.querySelector(".two");
  const tri = document.querySelector(".three");

  let color = "deepskyblue";
  const pole = document.querySelector(".RECT_Panel");
  const koule = document.querySelector(".CIRCLE_Panel");

  const pole_MO = document.querySelector(".RECT_Motiv");
  const koule_MO = document.querySelector(".CIRCLE_Motiv");
  const pole_M = document.querySelector(".RECT_Motiv_M");
  const koule_M = document.querySelector(".CIRCLE_Motiv_M");
  const Ikona = document.getElementById("Ikona_N");
  const Ikona_M = document.getElementById("IMG_N_M");




if(!localStorage.getItem("panel_ls"))
{
  localStorage.setItem("panel_ls", 0);
}

if(!localStorage.getItem("motiv_ls"))
{
  localStorage.setItem("motiv_ls", 0);
}

const Panel_z = localStorage.getItem("panel_ls");
const Motiv_z = localStorage.getItem("motiv_ls");

// alert(Panel_z);
// alert(Motiv_z);

// if(k==0)
// {
// Panel_z = 0;
// Motiv_z = 0;
// k=1;
// }

if (Panel_z == 1)
{
  dva.style.display = "none";
  panel = 1;
  tri.style.gridColumn = "1/3";
  
  koule.setAttribute("cx", 32);


}


if (Motiv_z == 1)
{


  
  koule_MO.setAttribute("cx", 32);
  zmena = 1;
  koule_M.setAttribute("cx", 32);
  Ikona.setAttribute("xlink:href","Obrázky/bile_kolo.png");
  Ikona_M.setAttribute("xlink:href","Obrázky/Cary_bile.png");
  Rezim();
}


}
 // #endregion

