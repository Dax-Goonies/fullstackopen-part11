# Full Stack Open — Part 11: CI/CD

This repository contains the CI/CD exercises for Part 11 of Full Stack Open, built around the [fs-pokedex](https://github.com/fullstack-hy2020/fs-pokedex) example application.

## What's here

The `fs-pokedex/` application, deployed to Render, with a GitHub Actions pipeline (`.github/workflows/`) that runs on every push and pull request to `main`:

- Install dependencies
- Lint (ESLint)
- Unit tests
- Build
- End-to-end tests (Playwright)
- Deploy to Render (on a successful push to `main`, unless the commit message contains `#skip`)
- Discord notifications on success and failure
- Automatic version tagging on successful deploys
- A separate, periodic health check workflow pinging the deployed app

Live app: https://fullstackopen-part11-zv2c.onrender.com

## Own CI/CD pipeline exercise

The exercise asking for a CI/CD pipeline built around one of my own applications was done in a separate repository, using the bloglist app from Parts 4-5, since it's a different application entirely:

https://github.com/Dax-Goonies/fullstackopen-part11-exo21

## Part 11 Repository

Link to the repository for Full Stack Open Part 11 CI/CD:

https://github.com/Dax-Goonies/fullstackopen-part11
