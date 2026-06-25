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

### Ajouter une image

1. Glisser l'image dans le dossier `public/` à la racine du projet
2. Dans le fichier `actualites.js`, mettre `image: '/nom-du-fichier.jpg'`
- Formats acceptés : `.jpg`, `.jpeg`, `.webp`, `.png`
- Taille recommandée : largeur 1200px minimum, moins de 500 Ko

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
├── public/                  # Images et fichiers statiques
├── src/
│   ├── data/
│   │   └── actualites.js    ← SEUL fichier à modifier pour les actualités
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
