# Test technique Color Telecom

## Comment installer NestJS , Prisma et React

### NestJS

Pour installer NestJS il faudra faire les commandes suivantes:

```
cd back
npm install
```

### Prisma

Pour utiliser Prisma pour le projet NestJS il faut faire les commandes suivantes dans le dossier back:

```
npm install prisma --save-dev
npx prisma
npx prisma init
```
Un fichier .env va se créer et il faudra mettre l'url de sa base de données.

### React

Pour installer NestJS il faudra faire les commandes suivantes:

```
cd front
npm install
```

## Comment utiliser le projet

Il faudra utiliser deux terminals differents:
- Un terminal pour le front
- Un terminal pour le back

### Front

Lancer la commande suivante dans le dossier front:

```
npm start
```

### Back

Lancer la commande suivante dans le dossier back:

```
npm run start:dev
```

## Résultat

Quand vous arriverez sur la page web, vous pourrez ajouter un créneau et voir une liste de tous vos créneaux.

Vous pour effacer vos créneaux si vous le souhaitez.

Attention: Il faudra rafraichir la page pour actuliser la liste.

Si vous voulez tester sur Postman vous pourrez aussi modifier les informations des créneaux.