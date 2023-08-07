## Description

In this project, you will be asked to create a search input text where users can type in and get results straight away, without ENTER keypress or submit button required. Results will list Github users like the mock below, and must be responsive.

Once on the site, a user can :

- Search github user profil
- List all result
- Select all cards
- Select single card
- See the number of cards selected
- Duplicate selected cards
- Delete selected cards

Requirements :

- Query against Github Api: GET [https://api.github.com/search/users?q={USER}](https://docs.github.com/fr/rest/search/search?apiVersion=2022-11-28#search-users).

- Manage edge cases

  - No results
  - Github api rate limit
  - User type in quickly and going back and forth on his search

- Edit mode button

  - When edit mode is on:

    - display checkboxes on cards
    - display the select all checkbox
    - display duplicate and delete action

  - When edit mode is off:
    - hide checkboxes
    - hide duplicate and delete actions

Constraints:

- Duplicate and Delete actions are only front-end and will be reset when the search change.
- Use React with Typescript is also a prerequisite.
- Try to not add any dependency library on a freshly created.

# Getting Started

## Installation:

```bash
npm run install
# or
yarn install
# or
pnpm install
```

## Running the app

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

You can start editing the page by modifying `src/App.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Vite.js, take a look at the following resources:

- [Vite.js Documentation](https://vitejs.dev/guide/) - learn about Vite.js.
