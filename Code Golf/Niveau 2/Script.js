/*
Code Golf - Niveau 2
Réduire à maximum 5 lignes
---------------------------
Fonction qui classe les étudiants selon leur note, affiche leur mention et calcule la moyenne de classe

Code actuel : 32 lignes
Objectif : 8 lignes maximum

Résultat attendu :
Alice : Excellent : 18/20
Bob : Très bien : 14/20
Charlie : Assez bien : 10/20
Diana : Insuffisant : 6/20
Eve : Excellent : 16/20
Frank : Passable : 9/20
Apou : Parfait : 20/20
Moyenne de la classe : 13.29/20
*/

function noterEtudiants(etudiants) {
  let totalNotes = 0;
  let nombreEtudiants = 0;

  for (let i = 0; i < etudiants.length; i++) {
    const etudiant = etudiants[i];
    const nom = etudiant.nom;
    const note = etudiant.note;

    // Additionner pour la moyenne
    totalNotes += note;
    nombreEtudiants += 1;

    let mention;
    if (note === 20) {
      mention = "Parfait";
    } else if (note >= 16) {
      mention = "Excellent";
    } else if (note >= 14) {
      mention = "Très bien";
    } else if (note >= 12) {
      mention = "Bien";
    } else if (note >= 10) {
      mention = "Assez bien";
    } else if (note >= 8) {
      mention = "Passable";
    } else {
      mention = "Insuffisant";
    }

    console.log(`${nom} : ${mention} : ${note}/20`);
  }

  // Calculer et afficher la moyenne
  if (nombreEtudiants > 0) {
    const moyenne = totalNotes / nombreEtudiants;
    console.log(`Moyenne de la classe : ${Math.round(moyenne * 100) / 100}/20`);
  }
}

// Tests
const etudiants = [
  { nom: "Alice", note: 18 },
  { nom: "Bob", note: 14 },
  { nom: "Charlie", note: 10 },
  { nom: "Diana", note: 6 },
  { nom: "Eve", note: 16 },
  { nom: "Frank", note: 9 },
  { nom: "Apou", note: 20 },
];

noterEtudiants(etudiants);
