//forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
//.forEach() :forEach permet de faire une boucle simplement dans un tableau sans passer par une boucle de type "for" ou "while".
let personnage = [
  { prenom: "vanessa", age: 40, taille: 168 },
  { prenom: "marc", age: 38, taille: 180 },
  { prenom: "sophie", age: 35, taille: 150 },
  { prenom: "ines", age: 50, taille: 190 },
];

personnage.forEach((element) => {
  console.log(element.prenom); //pour récupérer le prenom
});

//.map() :map permet de prendre un tableau et de le convertir en un autre tableau. Il est bien entendu possible de réaliser des changements au niveau des valeurs.

let personnage2 = [
  { prenom: "ahmed", age: 40, taille: 168, prix: 100 },
  { prenom: "luc", age: 38, taille: 180, prix: 200 },
  { prenom: "lydia", age: 35, taille: 150, prix: 400 },
  { prenom: "nanou", age: 50, taille: 190, prix: 500 },
];

let reduction = personnage2.map((element) => {
  return element.prix - 0.5 * element.prix; //0.5 =50%
});
console.log(reduction); // pour avoir une réduction de 50% sur le prix
//4) [50, 100, 200, 250]

//.filter() :filter permet de filtrer un tableau selon une certaine condition. Si la condition vaut vraie, alors l'élément actuellement inspecté dans le tableau se retrouvera dans le tableau final filtré, sinon non.

let personnage3 = [
  { prenom: "toto", age: 20, taille: 168, prix: 100 },
  { prenom: "lulu", age: 50, taille: 180, prix: 200 },
  { prenom: "susu", age: 100, taille: 150, prix: 400 },
  { prenom: "nana", age: 80, taille: 190, prix: 500 },
];

let age = personnage3.filter((element) => {
  return element.age > 70;
});
console.log(age); // retourn que les personnage au dessus de 70 ans
/*(2) [{…}, {…}]
0: {prenom: 'susu', age: 100, taille: 150, prix: 400}
1: {prenom: 'nana', age: 80, taille: 190, prix: 500}
length: 2
  */

//.find() :find permet de trouver un élément dans un tableau.

let personnage4 = [
  { prenom: "mimi", age: 20, taille: 168, prix: 100 },
  { prenom: "anna", age: 50, taille: 180, prix: 200 },
  { prenom: "olaf", age: 100, taille: 150, prix: 400 },
  { prenom: "harry", age: 80, taille: 190, prix: 500 },
];

let prenomAnna = personnage4.find((element) => {
  return element.prenom === "anna"; //trouve moile prenom anna dans le tableau
});
console.log(prenomAnna);
//{prenom: 'anna', age: 50, taille: 180, prix: 200}

//.some() :some renvoie true si un élément respectant une certaine condition a été trouvé dans un tableau, false sinon.
let personnage5 = [
  { prenom: "fafa", age: 20, taille: 168, prix: 100 },
  { prenom: "caca", age: 50, taille: 180, prix: 200 },
  { prenom: "baba", age: 100, taille: 150, prix: 400 },
  { prenom: "lala", age: 80, taille: 190, prix: 500 },
];

let cher = personnage5.some((element) => {
  // return element.prix > 300//true car il va chercher les éléments au dessus de 300
  return element.prix > 1000; //false car il va chercher les éléments au dessus de 1000
});
console.log(cher);

//.every() :every est semblable à some, seulement que cette méthode renvoie true si tous les éléments dans un tableau respectent une certaine condition, false sinon.
let personnage6 = [
  { prenom: "narnia", age: 20, taille: 168, prix: 100 },
  { prenom: "uliss", age: 50, taille: 180, prix: 200 },
  { prenom: "bambie", age: 100, taille: 150, prix: 400 },
  { prenom: "git", age: 80, taille: 190, prix: 500 },
];

let ageOld = personnage6.every((element) => {
  return element.age > 10; //true car tous les personnages on plus de 10 ans
});
console.log(ageOld);

//.reduce() :reduce permet de faire des opérations sur un tableau et de renvoyer une combinaison de ces opérations. Elle prend aussi en paramètre une valeur de départ.
let prixTotal = personnage6.reduce((accumulateur, element) => {
  // mettre deux paramétre
  return accumulateur + element.prix;
}, 0); //cest comme si qu'on avait un let prixTotal = 0 donc valeur de départ
console.log(prixTotal); //total 1200

//.includes() : includes ne prend pas une fonction mais un simple argument. Elle retourne vrai si l'argument est présent dans le tableau, false si cette valeur n'est pas présente.
let note = [10, 20, 15, 16];
let estPresent = note.includes(16);
console.log(estPresent); //renvoi true car il y a bien 16 dans le tableau
