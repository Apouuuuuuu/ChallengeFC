"""
Identification de Faille de sécu
-----------------------------------------------------
MISSION : Identifiez la faille de sécurité dans ce script
"""

import os
from dotenv import load_dotenv

def connect_to_database():
    """
    Connexion à la base de données
    """
    # Chargement des variables d'environnement
    load_dotenv()
    
    db_host = os.getenv('DB_HOST')
    db_name = os.getenv('DB_NAME')
    db_user = os.getenv('DB_USER')
    db_password = os.getenv('DB_PASSWORD')
    
    # Simulation de connexion
    return True

def check_user_login(username, password):
    """
    Vérifie les identifiants utilisateur
    """
    if connect_to_database():
        # Simulation de vérification
        if username == "admin" and password == "admin123":
            return "Connexion réussie"
        else:
            return "Identifiants incorrects"

# Test du système
connect_to_database()
result = check_user_login("admin", "admin123")

# ============================================================
# VOTRE ANALYSE DE SÉCURITÉ
# ============================================================
#
# Quelle est la faille de sécurité évidente dans ce code ?
# 
# FAILLE IDENTIFIÉE :
# 
# 
# POURQUOI C'EST DANGEREUX :
# 
# 
# COMMENT CORRIGER :
#