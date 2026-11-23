# Angular User Management UI

English | [ภาษาไทย](README.th.md)

An Angular 17 learning project for browsing, creating, editing, and deleting users. Follow the routes and components to see how an Angular interface sends CRUD requests through a shared HTTP service.

## Quick start

Use Node.js 20 with npm, then run from the repository root:

```bash
npm ci
npm start
```

Open [localhost:4200](http://localhost:4200). The interface needs a separate backend at `http://localhost:5000` implementing `/user` and `/user/:id`; it is not included in this repository. See [`user.service.ts`](src/app/services/user.service.ts) for the API contract and [`app.routes.ts`](src/app/app.routes.ts) for navigation. The backend must allow requests from the frontend origin during local development.

Run `npm run build` to compile the app, or `npm test` for the Angular test runner. If you are learning Angular, start by tracing the list page from the route to the service.

<!-- Maintainers: Update the English README first, then mirror the change in README.th.md. -->
