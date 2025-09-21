/*
Identification de Faille de sécu
-----------------------------------------------------
MISSION : Identifiez la faille de sécurité dans ce script
*/

require("dotenv").config();

function connectToDatabase() {
  const dbHost = process.env.DB_HOST;
  const dbName = process.env.DB_NAME;
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASSWORD;

  return true;
}

function checkUserLogin(username, password) {
  if (connectToDatabase()) {
    if (username === "admin" && password === "admin123") {
      return "Connexion réussie";
    } else {
      return "Identifiants incorrects";
    }
  }
}

// Test du système
connectToDatabase();
const result = checkUserLogin("admin", "admin123");

// ============================================================
// VOTRE ANALYSE DE SÉCURITÉ
// ============================================================
//
// Quelle est la faille de sécurité évidente dans ce code ?
//
// FAILLE IDENTIFIÉE :
//
//
// POURQUOI C'EST DANGEREUX :
//
//
// COMMENT CORRIGER :
//
