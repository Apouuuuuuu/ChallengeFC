/*
Code Golf - Niveau 3
Réduire à maximum 4 lignes
---------------------------
Fonction qui analyse les scores de jeux vidéo et trouve les meilleurs joueurs par catégorie

Code actuel : 31 lignes
Objectif : 7 lignes maximum

Résultat attendu :
=== Top joueurs par catégorie ===
Action:
  1. Alice (950 pts)
  2. Bob (920 pts)
  3. Charlie (800 pts)

Puzzle:
  1. Diana (880 pts)
  2. Frank (750 pts)

RPG:
  1. Eve (990 pts)

Meilleur joueur global: Eve (990 pts)
*/

function analyserScores(joueurs) {
  // Regrouper par catégorie
  const categories = {};
  for (let i = 0; i < joueurs.length; i++) {
    const joueur = joueurs[i];
    const nom = joueur.nom;
    const categorie = joueur.categorie;
    const score = joueur.score;

    if (!categories[categorie]) {
      categories[categorie] = [];
    }

    categories[categorie].push({ nom: nom, score: score });
  }

  console.log("=== Top joueurs par catégorie ===");
  let meilleurGlobal = { nom: "", score: 0 };

  // Afficher les tops par catégorie
  for (const categorie in categories) {
    const listeJoueurs = categories[categorie];

    // Trier par score décroissant
    listeJoueurs.sort((a, b) => b.score - a.score);

    console.log(`${categorie}:`);
    for (let i = 0; i < listeJoueurs.length; i++) {
      const joueur = listeJoueurs[i];
      console.log(`  ${i + 1}. ${joueur.nom} (${joueur.score} pts)`);

      // Chercher le meilleur global
      if (joueur.score > meilleurGlobal.score) {
        meilleurGlobal = joueur;
      }
    }

    console.log();
  }

  console.log(
    `Meilleur joueur global: ${meilleurGlobal.nom} (${meilleurGlobal.score} pts)`
  );
}

// Tests
const joueurs = [
  { nom: "Alice", categorie: "Action", score: 950 },
  { nom: "Bob", categorie: "Action", score: 920 },
  { nom: "Charlie", categorie: "Action", score: 800 },
  { nom: "Diana", categorie: "Puzzle", score: 880 },
  { nom: "Eve", categorie: "RPG", score: 990 },
  { nom: "Frank", categorie: "Puzzle", score: 750 },
];

analyserScores(joueurs);
