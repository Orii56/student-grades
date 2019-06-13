var NumPractica = 10;
var NumExamen = 2;
var AlAprobados = 0;
var AlReprobados = 0;
var AlMedia = 0;
var AlSuma = 0;
var x;
var y;
var z;
var t;

var Alumnos = [
    {
        Nombre: "Oriana Esparragoza",
        Foto: "img/foto1.jpg",
        Practicas: [9, 8, 7, 5, 4, 9, 8, 7, 5, 6],
        Examen: [8, 6],
        TotalP: 0,
        TotalE: 0,
        Calif: 0
    }
    ,

    {
        Nombre: "Wilber Velasquez",
        Foto: "img/foto2.jpg",
        Practicas: [6, 5, 2, 5, 4, 3, 5, 3, 5, 6],
        Examen: [8, 3],
        TotalP: 0,
        TotalE: 0,
        Calif: 0
    },

    {
        Nombre: "Andreina Liberatore",
        Foto: "img/foto1.jpg",
        Practicas: [9, 8, 7, 5, 4, 9, 8, 7, 5, 6],
        Examen: [8, 6],
        TotalP: 0,
        TotalE: 0,
        Calif: 0
    },

    {
        Nombre: "Leonardo Valdez",
        Foto: "img/foto2.jpg",
        Practicas: [9, 8, 7, 5, 4, 9, 8, 7, 5, 6],
        Examen: [8, 6],
        TotalP: 0,
        TotalE: 0,
        Calif: 0
    },

    {
        Nombre: "Hazel Levesque",
        Foto: "img/foto1.jpg",
        Practicas: [7, 6, 5, 5, 7, 5, 4, 8, 7, 6],
        Examen: [6, 8],
        TotalP: 0,
        TotalE: 0,
        Calif: 0
    },

    {
        Nombre: "Nicolas D'Angelo",
        Foto: "img/foto2.jpg",
        Practicas: [3, 3, 4, 5, 5, 4, 5, 4, 10, 10],
        Examen: [5, 4],
        TotalP: 0,
        TotalE: 0,
        Calif: 0
    },
    {
        Nombre: "Oriana Esparragoza",
        Foto: "img/foto1.jpg",
        Practicas: [9, 8, 7, 5, 4, 9, 8, 7, 5, 6],
        Examen: [8, 6],
        TotalP: 0,
        TotalE: 0,
        Calif: 0
    }
    ,

    {
        Nombre: "Wilber Velasquez",
        Foto: "img/foto2.jpg",
        Practicas: [6, 5, 2, 5, 4, 3, 5, 3, 5, 6],
        Examen: [8, 3],
        TotalP: 0,
        TotalE: 0,
        Calif: 0
    },

    {
        Nombre: "Andreina Liberatore",
        Foto: "img/foto1.jpg",
        Practicas: [9, 8, 7, 5, 4, 9, 8, 7, 5, 6],
        Examen: [8, 6],
        TotalP: 0,
        TotalE: 0,
        Calif: 0
    },

    {
        Nombre: "Leonardo Valdez",
        Foto: "img/foto2.jpg",
        Practicas: [9, 8, 7, 5, 4, 9, 8, 7, 5, 6],
        Examen: [8, 6],
        TotalP: 0,
        TotalE: 0,
        Calif: 0
    },

    {
        Nombre: "Hazel Levesque",
        Foto: "img/foto1.jpg",
        Practicas: [7, 6, 5, 5, 7, 5, 4, 8, 7, 6],
        Examen: [6, 8],
        TotalP: 0,
        TotalE: 0,
        Calif: 0
    },

    {
        Nombre: "Nicolas D'Angelo",
        Foto: "img/foto2.jpg",
        Practicas: [3, 3, 4, 5, 5, 4, 5, 4, 10, 10],
        Examen: [5, 4],
        TotalP: 0,
        TotalE: 0,
        Calif: 0
    }
]

var Size = Alumnos.length;

for (x = 0; x < Size; x++) {
    for (y = 0; y < Alumnos[x].Practicas.length; y++) {
        Alumnos[x].TotalP += Alumnos[x].Practicas[y];
        
    }
    for (z = 0; z < Alumnos[x].Examen.length; z++) {
        Alumnos[x].TotalE += Alumnos[x].Examen[z];
        
    }
    
    Alumnos[x].TotalP = (Alumnos[x].TotalP / NumPractica);
  
    Alumnos[x].TotalE = (Alumnos[x].TotalE / NumExamen);

    Alumnos[x].Calif = 0.3*Alumnos[x].TotalE + 0.7*Alumnos[x].TotalP;

    AlSuma = Alumnos[x].Calif + AlSuma;
    
    if (Alumnos[x].Calif >= 5) { 
        AlAprobados++;
    }
    else if(Alumnos[x].Calif < 5) {
         AlReprobados++;
     }
}

AlMedia = AlSuma / Size;
Almedia = AlMedia;



// Document Writes go from here onwards lol, such mess wow.

document.write('<div class="bigbox"><div class="Alumnbox">' );      

for (t=0 ; t<Size ; t++) {
    document.write('<div class="Albox">'+
'<div class="Alpic"><img class="fotos" src="' + Alumnos[t].Foto + '" alt=""></div>' /*Aqui cierra Alpic*/ +
'<div class="Alnombre"><p class="nomtxt">' + Alumnos[t].Nombre + '</div>' /*Aqui cierra Alnombre*/ +
'<div class="Alcal">'+
'<div class="Titulos">'+
'<div class="tit1"><p class="txt">PRACTICAS</p></div>'+
'<div class="tit1"><p class="txt">EXAMENES</p></div>' +
'<div class="tit1"><p class="txt">CALIFICACION</p></div></div>' /*Aqui cierra Titulos*/ +
'<div class="Numeros">' + 
'<div class="num1"><p class="numtxt">' + Alumnos[t].TotalP.toFixed(2) + '</p></div>'+
'<div class="num1"><p class="numtxt">' + Alumnos[t].TotalE.toFixed(2) + '</p></div>' +
'<div class="num1"><p class="numtxt">' + Alumnos[t].Calif.toFixed(2) + '</p></div></div>'/*Aqui cierra Numeros*/+
'</div>' /*Aqui cierra Alcal*/
+'</div>'/*Aqui cierra Albox*/);
}


document.write('</div>' /*Aqui cierra Alumnbox*/ + '<div class="resumen">' + 
'<div class="Curso"><p class="CursoTitle">1 - DAW</p></div>'+
'<div class="Aprobados"><p class="tittxt">Alumnos Aprobados</p><div class="AlAprobados"><p class="Resnum">'+ AlAprobados +'</p></div></div>' +
'<div class="Reprobados"><p class="tittxt">Alumnos Reprobados</p><div class="AlReprobados"><p class="Resnum">'+ AlReprobados +'</p></div></div>' +
'<div class="Media"><p class="tittxt">Media Alumnos</p><div class="AlMedia"><p class="Resnum">'+ AlMedia.toFixed(2) +'</p></div></div></div>' /*Cierra aqui Resumen*/ +
'</div>' /*Cierra el Bigbox*/);

