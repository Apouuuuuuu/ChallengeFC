"""
Challenge SQL Injection - 3 Failles à Exploiter
-----------------------------------------------
MISSION : Trouvez les 3 injections SQL pour supprimer la table 'user'

Analysez le code et trouvez comment injecter 'DROP TABLE user' dans chaque fonction.
Entrez vos 3 réponses dans le commentaire en fin de script
"""

def login_user(username, password):
    """
    Fonction de connexion utilisateur
    """
    query = f"SELECT * FROM user WHERE username='{username}' AND password='{password}'"
    print(f"Requête 1: {query}")

def search_user_by_id(user_id):
    """
    Recherche d'un utilisateur par son ID
    """
    query = f"SELECT * FROM user WHERE id = {user_id}"
    print(f"Requête 2: {query}")

def find_users_by_role(role):
    """
    Recherche des utilisateurs par rôle
    """
    query = f"SELECT name FROM user WHERE role = '{role}' ORDER BY name"
    print(f"Requête 3: {query}")

# ============================================================
# INSEREZ VOS INJECTIONS CI-DESSOUS
# ============================================================
# 
# Pour chaque fonction, trouvez l'injection qui permettra
# d'exécuter "DROP TABLE user"

# FAILLE 1 - Injection dans login_user():
# REPONSE : login_user("...

# FAILLE 2 - Injection dans search_user_by_id():
# REPONSE : search_user_by_id("...

# FAILLE 3 - Injection dans find_users_by_role():
# REPONSE : find_users_by_role("...

