/*
Identification de Faille de sécu
-----------------------------------------------------
MISSION : Identifiez les failles de sécurité dans ce script

Ce script gère un système de token JWT pour l'API et l'upload de fichiers.
Analysez le code et identifiez les problèmes de sécurité.
*/

const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

class UserSession {
  constructor(userId, role, permissions) {
    this.userId = userId;
    this.role = role;
    this.permissions = permissions;
    this.createdAt = new Date();
  }

  toJSON() {
    return {
      userId: this.userId,
      role: this.role,
      permissions: this.permissions,
      createdAt: this.createdAt.toISOString(),
    };
  }
}

function generateToken(userId, role) {
  const payload = {
    user_id: userId,
    role: role,
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  };

  const secretKey = "mysecretkey123";
  const token = jwt.sign(payload, secretKey, { algorithm: "HS256" });
  return token;
}

function verifyToken(token) {
  try {
    const secretKey = "mysecretkey123";
    const payload = jwt.verify(token, secretKey, {
      algorithms: ["HS256", "none"],
    });
    return payload;
  } catch (error) {
    return null;
  }
}

function saveUserSession(sessionData) {
  const sessionFile = `/tmp/session_${sessionData.userId}.json`;
  fs.writeFileSync(sessionFile, JSON.stringify(sessionData.toJSON()));
}

function loadUserSession(userId) {
  const sessionFile = `/tmp/session_${userId}.json`;
  try {
    const data = fs.readFileSync(sessionFile, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
}

function processFileUpload(filename, fileData) {
  const allowedExtensions = [".txt", ".pdf", ".jpg", ".png"];

  if (allowedExtensions.some((ext) => filename.endsWith(ext))) {
    const uploadPath = `/uploads/${filename}`;

    const decodedData = Buffer.from(fileData, "base64");

    fs.writeFileSync(uploadPath, decodedData);

    return `Fichier ${filename} uploadé avec succès`;
  } else {
    return "Extension de fichier non autorisée";
  }
}

function adminFunction(token, action, data) {
  /**
   * Fonction d'administration
   */
  const payload = verifyToken(token);

  if (payload && payload.role === "admin") {
    if (action === "save_session") {
      const sessionData = JSON.parse(Buffer.from(data, "base64").toString());
      const sessionObj = new UserSession(
        sessionData.userId,
        sessionData.role,
        sessionData.permissions
      );
      saveUserSession(sessionObj);
      return "Session sauvegardée";
    } else if (action === "upload_file") {
      const [filename, fileData] = data.split(":", 2);
      return processFileUpload(filename, fileData);
    }
  }

  return "Accès refusé";
}

// Test du système
const token = generateToken("user123", "admin");
const result = adminFunction(
  token,
  "upload_file",
  "document.txt:SGVsbG8gV29ybGQ="
);

// ============================================================
// VOTRE ANALYSE DE SÉCURITÉ
// ============================================================
//
// Identifiez les 3 failles de sécurité principales dans ce code :
//
// FAILLE 1 :
//
//
// FAILLE 2 :
//
//
// FAILLE 3 :
//
//
// IMPACT POTENTIEL :
//
//
// COMMENT CORRIGER :
//
