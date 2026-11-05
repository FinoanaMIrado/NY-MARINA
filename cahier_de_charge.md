# CAHIER DES CHARGES FONCTIONNEL
## Projet : NY MARINA
### Plateforme de vérification des informations destinée aux journalistes locaux

## 1. Présentation du projet

**Ny Marina** est une application web destinée aux journalistes locaux, permettant de vérifier la fiabilité des informations, des actualités et des rumeurs circulant sur Internet et les réseaux sociaux.

La plateforme met à disposition un système de vérification basé sur l'analyse des liens URL et des images (captures d'écran). Elle utilise des mécanismes de recherche et de collecte d'informations sur Internet, associés à l'intelligence artificielle Gemini, afin d'évaluer la crédibilité des informations soumises.

L'application dispose de deux espaces distincts :
- **Espace public :** une landing page présentant le projet, son fonctionnement et ses objectifs.
- **Espace journaliste :** un espace privé nécessitant une authentification, permettant d'effectuer des vérifications et de consulter l'historique des analyses réalisées.

## 2. Objectifs du projet

Les objectifs principaux de Ny Marina sont :

- Aider les journalistes locaux à vérifier les informations avant leur publication ou leur diffusion.
- Faciliter la détection des fausses informations et des rumeurs circulant sur les réseaux sociaux.
- Fournir une estimation de la fiabilité des informations à partir de recherches sur Internet.
- Centraliser et conserver l'historique des vérifications effectuées par chaque journaliste.
- Permettre aux journalistes de consulter rapidement les résultats de leurs précédentes analyses.

## 3. Espace public : Landing page

La landing page est accessible librement à tous les visiteurs, sans authentification.

Elle doit permettre de :

- Présenter Ny Marina et sa mission dans la lutte contre la désinformation.
- Expliquer le fonctionnement du processus de vérification.
- Présenter les différentes méthodes de vérification disponibles.
- Expliquer l'intérêt de la plateforme pour les journalistes locaux.
- Permettre aux journalistes d'accéder à la page de connexion.

**Important :** aucune fonctionnalité de vérification directe ne sera disponible sur la landing page. Les utilisateurs devront se connecter pour accéder à l'outil.

## 4. Authentification des journalistes

L'accès aux fonctionnalités de vérification est réservé aux journalistes disposant d'un compte.

Le système doit permettre :

- La connexion à l'aide d'une adresse e-mail et d'un mot de passe.
- La vérification des identifiants avant l'accès à l'espace personnel.
- La déconnexion de l'application.
- La protection des pages internes contre les accès non authentifiés.

Après une connexion réussie, le journaliste est automatiquement redirigé vers son tableau de bord, avec la section **VÉRIFIER** comme page par défaut.

## 5. Espace journaliste : Tableau de bord

Après authentification, chaque journaliste accède à son espace personnel.

L'espace est organisé autour d'une barre latérale contenant deux sections principales :

### 5.1. VÉRIFIER

Cette section constitue la page par défaut après la connexion.

Elle permet au journaliste de soumettre une information afin d'en évaluer la fiabilité.

Deux méthodes de vérification sont disponibles :

**A. Vérification par lien URL**

Le journaliste peut saisir un lien provenant d'un site web ou d'un réseau social.

Le système doit :
1. Récupérer le contenu accessible à partir du lien.
2. Extraire les informations textuelles pertinentes.
3. Identifier les affirmations principales.
4. Effectuer des recherches complémentaires sur Internet à l'aide de techniques de scraping.
5. Collecter les éléments permettant de confirmer ou de contredire l'information.
6. Transmettre les données collectées à l'API Gemini pour analyse.

**B. Vérification par image**

Le journaliste peut importer une capture d'écran contenant une information ou une rumeur à vérifier.

Le système doit :
1. Recevoir l'image importée.
2. Extraire le texte et les informations pertinentes de l'image.
3. Identifier les affirmations à vérifier.
4. Effectuer des recherches complémentaires sur Internet.
5. Collecter les éléments de confirmation ou de contradiction.
6. Transmettre les données à Gemini pour analyse.

### 5.2. MES VÉRIFICATIONS

Cette section permet au journaliste de retrouver et de consulter toutes les vérifications qu'il a précédemment effectuées.

Chaque vérification enregistrée constitue un dossier individuel contenant les informations suivantes :

- **Titre ou affirmation :** résumé de l'information vérifiée.
- **Type de source :** lien URL ou image.
- **Date de vérification :** date et heure de l'analyse.
- **Statut :** résultat de l'évaluation.
- **Pourcentage de fiabilité :** score obtenu lors de l'analyse.

Chaque dossier possède obligatoirement l'un des trois statuts suivants :

| Statut | Signification |
|---|---|
| VRAI | Les éléments collectés soutiennent fortement l'information. |
| FAUX | Les éléments collectés contredisent fortement l'information. |
| DOUTEUX | Les éléments disponibles sont insuffisants, contradictoires ou ne permettent pas de conclure. |

Chaque dossier doit également afficher son pourcentage de fiabilité, compris entre 0 % et 100 %.

Le journaliste doit pouvoir sélectionner un dossier afin de consulter les détails de la vérification, notamment :
- L'information originale soumise.
- Le lien ou l'image source.
- La date de vérification.
- Le pourcentage obtenu.
- Le statut attribué.
- L'explication de l'analyse.
- Les sources Internet utilisées pour justifier le résultat.

Les vérifications doivent être associées au compte du journaliste qui les a effectuées. Un journaliste ne doit consulter que ses propres dossiers.

## 6. Analyse et détermination du résultat

À l'issue de chaque vérification, le système doit produire :

- Un pourcentage de fiabilité compris entre 0 % et 100 %, arrondi à l'entier le plus proche.
- Un statut parmi les trois catégories : VRAI, FAUX ou DOUTEUX.
- Une explication détaillée du résultat.
- Les éléments de preuve collectés.
- Les références des sources consultées.

Le résultat doit être accompagné d'une jauge animée représentant le pourcentage obtenu.

Le statut et le pourcentage doivent être cohérents : le pourcentage représente le niveau de confiance accordé à l'affirmation, et non simplement la quantité de résultats trouvés sur Internet.

## 7. Gestion et conservation des vérifications

Le système doit enregistrer automatiquement chaque vérification réalisée par un journaliste.

Les données à conserver comprennent :

- L'identifiant du journaliste.
- Le contenu soumis à la vérification.
- Le type de contenu soumis.
- La date et l'heure de la vérification.
- Le pourcentage de fiabilité obtenu.
- Le statut final.
- L'explication générée.
- Les sources utilisées pour l'analyse.

Ces données doivent être disponibles dans la section « MES VÉRIFICATIONS » du journaliste concerné.

## 8. Technologies et approche technique

Le fonctionnement de Ny Marina repose sur les mécanismes suivants :

- **API Gemini (version gratuite) :** analyse des informations, compréhension du contenu et évaluation de la fiabilité.
- **Web Scraping :** collecte des informations complémentaires sur Internet.
- **Traitement d'images et extraction de texte (OCR) :** récupération des informations contenues dans les captures d'écran.
- **Recherche et comparaison de sources :** identification des éléments confirmant ou contredisant une affirmation.
- **Base de données :** conservation des comptes journalistes et de leurs dossiers de vérification.

## 9. Parcours utilisateur global

### Parcours public

1. Le visiteur accède à la landing page.
2. Il découvre la mission et le fonctionnement de Ny Marina.
3. Il peut accéder à la page de connexion s'il est journaliste.

### Parcours journaliste

1. Le journaliste accède à la page de connexion.
2. Il saisit ses identifiants.
3. Le système vérifie ses informations d'authentification.
4. Il est redirigé vers la section « VÉRIFIER ».
5. Il soumet une information sous forme de lien URL ou d'image.
6. Le système collecte et analyse les informations disponibles sur Internet.
7. Gemini participe à l'évaluation de la fiabilité.
8. Le système affiche le résultat avec son statut, son pourcentage et sa justification.
9. La vérification est automatiquement enregistrée.
10. Le journaliste peut retrouver ce dossier dans « MES VÉRIFICATIONS ».

## 10. Résultat attendu

À la fin du projet, Ny Marina devra être une plateforme web fonctionnelle destinée aux journalistes locaux, leur permettant de vérifier les rumeurs et les informations circulant sur les réseaux sociaux.

Chaque journaliste disposera d'un espace personnel sécurisé pour effectuer des vérifications et conserver l'historique de ses analyses.

La plateforme devra faciliter la consultation des résultats grâce à trois statuts distincts (VRAI, FAUX et DOUTEUX), accompagnés d'un pourcentage de fiabilité, d'une justification et des sources utilisées.