"""
Reverse Engineering
------------------------------
MISSION : Analysez ce script et expliquez ce qu'il fait

Ce code applique plusieurs transformations complexes. Déterminez sa logique finale.
"""

def transformation_alpha(data):
    result = []
    for i, char in enumerate(data):
        if char.isalpha():
            shift = (i % 3) + 1
            if char.isupper():
                new_char = chr((ord(char) - ord('A') + shift) % 26 + ord('A'))
            else:
                new_char = chr((ord(char) - ord('a') + shift) % 26 + ord('a'))
            result.append(new_char)
        else:
            result.append(char)
    return ''.join(result)

def transformation_beta(text):
    words = text.split()
    modified = []
    for word in words:
        if len(word) >= 4:
            middle = word[1:-1]
            scrambled = middle[::-1]
            new_word = word[0] + scrambled + word[-1]
            modified.append(new_word)
        else:
            modified.append(word)
    return ' '.join(modified)

def transformation_gamma(text):
    vowels = "aeiouAEIOU"
    consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
    result = ""
    
    for char in text:
        if char in vowels:
            idx = vowels.index(char)
            result += consonants[idx % len(consonants)]
        elif char in consonants:
            idx = consonants.index(char)
            result += vowels[idx % len(vowels)]
        else:
            result += char
    return result

def processeur_master(input_string):
    step1 = transformation_alpha(input_string)
    step2 = transformation_beta(step1)
    final_result = transformation_gamma(step2)
    return final_result

# Test
original = "SECRET MESSAGE"
result = processeur_master(original)

# ============================================================
# VOTRE ANALYSE
# ============================================================
#
# QUE FAIT CE SCRIPT EN GÉNÉRAL ?
# 
# 
# RÉSULTAT FINAL ATTENDU POUR "SECRET MESSAGE" :
