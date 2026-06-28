# ACI Aviation — Site web

Site officiel d'**Aviation Consulting International Ltd** — développé en React + Vite.

---

## Publier une actualité

> Seul ce fichier est à modifier pour ajouter, éditer ou supprimer un article.

**Fichier :** `src/data/actualites.js`

### Ajouter un article

Ouvrir le fichier et copier ce bloc à la fin du tableau (avant le `]` final) :

```js
{
  slug: 'titre-de-larticle-en-tirets',
  titre: "Titre complet de l'article",
  date: '2025-06-25',
  categorie: 'Séminaire',      // Séminaire | Formation | Mission | Atelier | Événement
  resume: "Résumé court affiché sur la carte (2-3 phrases).",
  image: '/nom-de-limage.jpg', // image à placer dans le dossier public/
  contenu: [
    "Premier paragraphe du corps de l'article.",
    "Deuxième paragraphe.",
    "Autant de paragraphes que nécessaire.",
  ],
},
```

**Règles importantes :**
- Le `slug` doit être unique, sans espaces ni accents, uniquement des lettres minuscules et des tirets (ex: `seminaire-dakar-juin-2025`)
- Utiliser des **guillemets doubles** `"..."` pour toutes les chaînes — ne pas utiliser de guillemets simples `'...'` car les apostrophes françaises (`l'aviation`) cassent le code
- La `date` est au format `AAAA-MM-JJ`
- L'`image` doit être déposée dans le dossier `public/` avant de publier

### Ajouter une image de couverture

1. Glisser l'image dans le dossier `public/` à la racine du projet
2. Dans le fichier `actualites.js`, mettre `image: '/nom-du-fichier.jpg'`
- Formats acceptés : `.jpg`, `.jpeg`, `.webp`, `.png`
- Taille recommandée : largeur 1200px minimum, moins de 500 Ko

---

## Ajouter des photos à la galerie d'un événement

Chaque article peut afficher une galerie de photos accessibles via un bouton **"Voir les X photos"** sur la page de l'article.

### Étape 1 — Déposer les photos

Placer toutes les photos dans le dossier `public/galerie/` :

```
public/
└── galerie/
    ├── mon-evenement-1.jpg
    ├── mon-evenement-2.jpg
    └── mon-evenement-3.jpg
```

- Nommer les fichiers de façon claire : `colloque-2011-01.jpg`, `sommet-2013-05.jpg`, etc.
- Formats acceptés : `.jpg`, `.jpeg`, `.webp`, `.png`
- Taille recommandée : largeur 1200px minimum, moins de 400 Ko par photo

### Étape 2 — Déclarer les photos dans actualites.js

Dans `src/data/actualites.js`, trouver l'article concerné et remplir le tableau `galerie` :

```js
{
  slug: 'colloque-regional-2011',
  titre: "1er Colloque Régional...",
  date: '2011-11-06',
  categorie: 'Colloque',
  image: '/galerie/colloque-2011-01.jpg',   // photo de couverture (carte + hero)
  galerie: [
    '/galerie/colloque-2011-01.jpg',
    '/galerie/colloque-2011-02.jpg',
    '/galerie/colloque-2011-03.jpg',
    // ajouter autant de photos que nécessaire
  ],
  contenu: [ ... ],
},
```

> **Si `galerie` est vide (`[]`) ou absent**, le bouton "Voir les photos" n'apparaît pas — c'est normal.

### Étape 3 — Publier

```bash
git add public/galerie/
git add src/data/actualites.js
git commit -m "feat(galerie): ajout photos [nom evenement]"
git push
```

---

### Modifier un article existant

Trouver l'objet correspondant dans `src/data/actualites.js` et modifier les champs souhaités directement.

### Supprimer un article

Supprimer l'objet entier `{ ... },` correspondant dans le tableau.

---

## Mettre en ligne les modifications

Une fois les modifications faites et sauvegardées :

```bash
git add src/data/actualites.js
git add public/          # si vous avez ajouté une image
git commit -m "actu: ajout article [titre]"
git push
```

Le site se met à jour automatiquement sur Cloudflare Pages en 1-2 minutes après le push.

---

## Structure du projet

```
aci-web/
├── public/
│   ├── galerie/             # Photos des événements (galerie lightbox)
│   └── ...                  # Images de couverture et logos
├── src/
│   ├── data/
│   │   └── actualites.js    ← SEUL fichier à modifier pour les actualités et galeries
│   ├── pages/               # Pages du site
│   ├── components/          # Composants réutilisables
│   └── App.jsx              # Routes de l'application
└── README.md
```

## Pages du site

| URL | Page |
|-----|------|
| `/` | Accueil |
| `/expertise` | Expertise & Services |
| `/clients-partenaires` | Clients et Partenaires |
| `/actualites` | Liste des actualités |
| `/actualites/:slug` | Détail d'un article |
| `/contact` | Contact |

---

## Développement local

Prérequis : [Node.js](https://nodejs.org) version 18+

```bash
npm install      # installer les dépendances (une seule fois)
npm run dev      # lancer le serveur local → http://localhost:5173
npm run build    # générer la version de production
```

---

## Déploiement

Le site est hébergé sur **Cloudflare Pages** connecté à ce dépôt GitHub.  
Tout push sur la branche `master` déclenche automatiquement un redéploiement.

- Dépôt GitHub : https://github.com/idy-00/aciaviation
- Build command : `npm run build`
- Output directory : `dist`
- Root directory : `aci-web`
