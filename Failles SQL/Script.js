/*
Challenge SQL Injection - 3 Failles à Exploiter
-----------------------------------------------
MISSION : Trouvez les 3 injections SQL pour supprimer la table 'user'

Analysez le code et trouvez comment injecter 'DROP TABLE user' dans chaque fonction.
Entrez vos 3 réponses dans le commentaire en fin de script
*/

function loginUser(username, password) {
  // Login user avec username et password
  const query = `SELECT * FROM user WHERE username='${username}' AND password='${password}'`;
  console.log(`Requête 1: ${query}`);
}

function searchUserById(userId) {
  // Chercher un user par ID
  const query = `SELECT * FROM user WHERE id = ${userId}`;
  console.log(`Requête 2: ${query}`);
}

function findUsersByRole(role) {
  // Chercher un user par role
  const query = `SELECT name FROM user WHERE role = '${role}' ORDER BY name`;
  console.log(`Requête 3: ${query}`);
}

/*
============================================================
INSEREZ VOS INJECTIONS CI-DESSOUS
============================================================

Pour chaque fonction, trouvez l'injection qui permettra
d'exécuter "DROP TABLE user"

FAILLE 1 - Injection dans loginUser():
REPONSE : loginUser("...

FAILLE 2 - Injection dans searchUserById():
REPONSE : searchUserById("...

FAILLE 3 - Injection dans findUsersByRole():
REPONSE : findUsersByRole("...
*/
