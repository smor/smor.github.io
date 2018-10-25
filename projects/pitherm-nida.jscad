// Temisth
// Copyright 2015 - Echangisth
// Created by Stéphane Mor <stephanemor@gmail.com>

// Boucle principale du programme
function main(params)
{
  var objets = [];
  objets.push(nida(params.dia_tuyau, params.cotes, params.longueur, params.ep_ext, params.dia_cellule, params.ep_parois));
  return(objets);
}

// Paramètres modifiables par l'utilisateur
function getParameterDefinitions() {
  return [
    // Caractéristiques du tuyau
    { name: 'dia_tuyau', caption: 'Diamètre du tuyau (mm):', type: 'float', default: 100 },
    // { name: 'ep_tuyau', caption: 'Épaisseur du tuyau (mm):', type: 'float', default: 2 },
    // Caractéristiques de l'échangeur
    { name: 'longueur', caption: 'Longueur (mm):', type: 'float', default: 50 },
    { name: 'ep_ext', caption: 'Épaisseur extérieure (mm):', type: 'float', default: 5 },
    { name: 'dia_cellule', caption: 'Diamètre extérieur des cellules (mm):', type:'float', default: 30 },
    { name: 'ep_parois', caption: 'Épaisseur des parois des cellules (mm):', type:'float', default: 1 },
  ];
}

// Produit un échangeur en nid d'abeilles
function nida(dia_tuyau, cotes, longueur, paroi_ext, dia_cellule, ep_parois){
  var dia_int = dia_tuyau - 2*paroi_ext;
  var cylindre_int = cylinder({d: dia_int, h: longueur, center: true});

  var ech = difference(
      cylinder({d: dia_tuyau, h: longueur, center: true, fn: 100}),
      cylindre_int
      );

  var cellules = new Array();
  var cellule = cylinder({h: longueur, d: dia_cellule - ep_parois, fn: 6, center: true});

  // Rayon du cercle inscrit de l'hexagone = hauteur depuis le centre jusqu'au côté
  var apotheme = sqrt(3)/2*dia_cellule / 2; // Wikipedia

  var nbV = parseInt((dia_tuyau - (paroi_ext*2)) / (2*apotheme)) + 3;
  var nbH = parseInt(dia_int / (3/2*dia_cellule)) + 2;
  OpenJsCad.log("dia_int: " + dia_int + " 2*apotheme: " + 2*apotheme + " nbV: " + nbV + " nbH: " + nbH);

  var vecDiag = CSG.Vector2D.fromAngleDegrees(30).times(2*apotheme);
  var vecDroit = new CSG.Vector2D([3/2*dia_cellule, 0, 0]);
  var vecHaut = new CSG.Vector2D([0,2*apotheme,0]);

  // Au-dessus
  var colonne = cellule;
  // Au-dessus
  for(var i=0; i < nbV / 2; i++){
    colonne = colonne.union(cellule.translate(vecHaut.times(i)));
  }
  // Au-dessous
  for(var i=0; i < nbV / 2; i++){
    colonne = colonne.union(cellule.translate(vecHaut.times(-i)));
  }

  //OpenJsCad.log(colonne);

  var grille = colonne;

  // A droite
  for(var i=0; i < nbH / 2; i++){
    grille = union(
      translate(vecDroit.times(i), colonne),
      translate(vecDroit.times(i).plus(vecDiag), colonne),
      grille);
  }
  // A gauche
  for(var i=0; i < nbH / 2; i++){
    grille = union(
      translate(vecDroit.times(-i), colonne),
      translate(vecDroit.times(-i).plus(vecDiag), colonne),
      grille);
  }
  
  return union(ech, difference(cylindre_int, grille)).setColor(0.7,0.8,0.9);
}
