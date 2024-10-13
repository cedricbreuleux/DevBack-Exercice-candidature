# Installation et Lancement

1. cd api-plateform-3.3.7

2. docker-compose build --no-cache

3. docker compose up --wait

4. Ajouter un utilisateur admin : docker-compose exec php php bin/console AdminCreating email@example.com password

5. Si la base de donnée n'a pas été initalisé avec les entités docker-compose exec php php bin/console doctrine:migrations:migrate

6. Acceder premierement au pannel d'administration afin d'ajouter des données

## Routes Disponibles

- Liste des livres par defaut : https://localhost/

- Liste des livres : https://localhost/book

- Détail d'un livre : https://localhost/book/id

- Liste des auteurs : https://localhost/author

- Détail d'un auteur : https://localhost/author/id

- Panneau d'administration (accessible via un compte admin) : https://localhost/admin

-  Swagger (accessible via un compte admin) : https://localhost/docs