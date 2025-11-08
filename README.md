- Exercice : Animation de logos dans un Canvas
- Description

Ce projet est un exercice simple qui permet de s'entraîner à manipuler l’élément <canvas> en HTML5 avec JavaScript.
Le programme affiche les logos HTML5 et PHP dans la zone de dessin, puis permet de :

déplacer horizontalement le logo PHP en cliquant sur le bouton "Move",

faire tourner légèrement le logo HTML5 simultanément,

restaurer la position originale avec le bouton "Restore".


- Structure du projet
1. index.html

Contient :

l’élément <canvas> pour le dessin,

deux boutons de contrôle : Move et Restore,

liens vers les fichiers CSS et JavaScript,

les images HTML5 et PHP (initialement cachées).

2. styles.css

Contient les styles pour :

l’apparence du Canvas,

les boutons de contrôle,

masquer les images originales (elles sont dessinées via Canvas).

3. scripts.js

Responsable de :

dessiner les logos dans le Canvas,

animer le logo PHP horizontalement,

faire tourner le logo HTML5,

restaurer la scène originale.

- Comment exécuter

Placez tous les fichiers suivants dans le même dossier :

index.html
styles.css
scripts.js
HTML5.jpg
PHP.png


Ouvrez index.html dans un navigateur moderne (Chrome, Firefox...).

Testez les boutons :

- Move pour animer les logos

- Restore pour revenir à la position initiale

- Concepts utilisés

Canvas 2D (getContext('2d'))

Méthodes : drawImage(), clearRect(), rotate(), translate(), save(), restore()

setInterval() et clearInterval() pour l’animation

 Informations du projet

Groupe : 8

Section : L3 ISIL 

Équipe :

Étudiant 1 : Khaldi Yasser

Étudiant 2 : kheirEddin
