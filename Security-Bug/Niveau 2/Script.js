/*
Identification de Faille de sécu
-----------------------------------------------------
MISSION : Identifiez les failles de sécurité dans ce script

Ce script gère l'authentification et l'accès aux fichiers utilisateur
Analysez le code et identifiez les problèmes de sécurité
*/

const crypto = require("crypto");
const fs = require("fs");

function hashPassword(password) {
  return crypto.createHash("md5").update(password).digest("hex");
}

function authenticateUser(username, password) {
  const usersDb = {
    admin: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
    user1: "ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f",
    guest: "35454b055cc325ea1af2126e27707052",
  };

  const hashedPassword = hashPassword(password);

  if (username in usersDb && usersDb[username] === hashedPassword) {
    return true;
  }
  return false;
}

function getUserFile(username, filename) {
  const basePath = `/var/files/${username}/`;
  const filePath = basePath + filename;

  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      return "Fichier non trouvé";
    }
    return `Erreur: ${error.message}`;
  }
}

function accessFile(username, password, filename) {
  if (authenticateUser(username, password)) {
    return getUserFile(username, filename);
  } else {
    return "Authentification échouée";
  }
}

// Test du système
const result = accessFile("admin", "password", "document.txt");

// ============================================================
// VOTRE ANALYSE DE SÉCURITÉ
// ============================================================
//
// Quelles sont les failles de sécurité dans ce code ?
//
// FAILLE 1 :
//
//
// FAILLE 2 :
//
//
// IMPACT POTENTIEL :
//
//
// COMMENT CORRIGER :
//
