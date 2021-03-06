# Projet de spé - FRONT : VueJS

Ce répertoire à été réalisé dans le cadre d'une formation aux techniques spécifiques à la mise en place d'une application Frontend connectée à une API RestFull en NodeJS. Ce projet utilise le CLI de VueJS, vous devez vous assurer qu'il soit bien installer sur votre machine locale ou-bien l'installer avec la commande suivante :

```bach
# VIA NPM
npm install -g @vue/cli
````

## Utilisation de ce répertoire
### Installation des modules

Le projet développé dans ce répertoire utilise différents modules que vous devez au préalable installer en tapant la commande suivante à la racine du répertoire :

```bash
npm i
```

> Cette commande téléchargera le dossier `node_modules` contenant les modules nécessaires.


### Définition des variable d'environnement

Une des notions importantes à aborder dans la gestion d'une application serveur est la protection des information qui y transite. Certaine de ces informations, comme le port serveur par exemple, ne doivent par être directement inscrites dans les fichiers, il faut les protéger en les écrivant dans une fichier `.env` qui sera charger dans l'application VueJS. Le fichier `.env` ne doit jamais être "#commit#" sur un répertoire distant, vous devez donc le créer dans votre répertoire en suivant le modèle défini sans le fichier `.env.dist` :

```bash
# SERVEUR
VUE_APP_API_URL=
```

# Alice Mouchard - Projet de spécialisation M2DEV