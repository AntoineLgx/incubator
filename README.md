# incubator
School project: application to list startups in incubators (angularJs)

## Consignes

### Context:
    Application de gestion des candidatures pour un incubateur de startup. (in-cub)
    L'incubateur reçoit des candidatures de startup. L'objectif est de réaliser un
    proof of concept Pour la gestion de ces candidatures.
    Une startup doit fournir son nom (requis, 20 max), 
    son secteur d'activité (requis 10 max), 
    nom du représentant légal (requis, max 15), 
    le nombre de co-fondateurs (requis, nombre obligatoire),et une description détaillée du projet(requis, textarea max 250). La startup doit également nous indiquer une
    adresse non obligatoire (champ texte de 25 max).
    L’'incubateur gère également des consultants qui seront affectés aux startup
    pour les assister pendant la période d'incubation. Un consultant doit fournir un
    nom, un prénom, et une description(tous obligatoires).
    Pendant la création d'une startup,On doit sélectionner un consultant dans la
    liste des consultants.

### Travail à faire :
DONE
    1. Créer des données de tests (consultants et startups) pour in-cup en
    utilisant le module in-memory-data.

DONE
    2. Réaliser l'affichage des informations de la startup en utilisant un tableau
    html.
    Une colonne du tableau nous indique si la startup nous a fourni une
    adresse ou pas.
    Les colonnes du tableau sont:
    nom startup, représentant, nombre de co-fondateurs,
    description, Adresse ? (affiche oui ou non) , nom consultant , actions
    (affiche les boutons modifier et supprimer).

DONE
    3. La colonne nombre de co-fondateurs affiche:
    unique si un représentant
    couple : si deux représentants
    groupes : si plus de deux représentants
    Vous devrez implémenter un pipe personnalisé pour cela.

DONE
    4. Un bouton placé au dessus du tableau permet d'ajouter une startup en
    affichant un formulaire au dessus du tableau. Le formulaire doit valider les
    champs suivant les contraintes évoquées. les erreurs doivent s'afficher
    avec une couleur jaune et en gras. Tant que le formulaire n'est pas valide,
    la soumission est impossible.

A FINIR 
    5. Implémenter les actions de modification et de suppression de la
    startup.

DONE
    6. in-cub doit disposer d'une page d'accueil disposant d'une navigation
    (trois liens : home, consultants, startup).

A FINIR
    7. le lien consultant affiche le tableau des consultants, Implémenter
    également les fonctionnalités de modification et de suppression pour les
    consultants.

DONE
    8. La page d'accueil d'in-cub affiche un message de bienvenu et à base de
    card (material ou boostrap ou ant) 3 consultants, et 3 startups sur deux
    sections différentes. avec un lien pour rediriger sur la page des différents
    listing.

DONE
    9. in-cup doit afficher une page 404, si une url non gérée est sollicitée.
    Cette page dispose d'un bouton pour revenir à la page d'accueil.

DONE
    10. Concevez une API pour cette application et faire communiquer
    l’application angular avec cette API. L’ API est conçu dans un langage de
    votre choix en utilisant une base de données mongoDB.

DONE
    11. Ajouter des fonctionnalités de gestion des utilisateurs à in-cub.
    (Création de compte utilisateur, connexion, déconnexion, ). Ces
    utilisateurs auront le droit de se connecter à l’application et de gérer les
    startup et les consultants.

    12. [Bonus] Ajouter la possibilité de se connecter avec son compte
    facebook.

### Contraintes de conception:

OK    1. L'utilisation des services est obligatoire

OK    2. L’utilisation du service http est obligatoire

OK    3. Le découpage des templates des card est obligatoire.

OK    4. L’utilisation d’un dépôt git pour gérer l’application est obligatoire


## Execution de l'application

### Pour l'API 

Se déplacer dans le dossier API et faire un `npm i `
Exécuter ensuite l'API : `node server.js` ou bien `nodemon server.js`

### Pour l'application front
Se déplacer dans le dossier in-cub, executer `npm i`
S'assurer d'avoir les package ng-cli en global pour executer le serveur avec `ng serve`
