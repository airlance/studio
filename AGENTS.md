# AGENTS.md

This file describes the repository layout and project structure for AI agents working in this codebase.

## Repository Overview

This repository is a **local development stack** ("Studio") that orchestrates multiple services via Docker Compose. It does not contain application source code directly — instead, it clones external projects into the `projects/` directory and mounts them into the corresponding containers.

---

## Directory Structure

```
studio/                          # This repository (root)
├── docker-compose.yml           # Generated compose file (do not edit manually)
├── Makefile                     # Developer CLI entrypoint (wraps locanika commands)
├── config.yml                   # Stack config: enabled services, project sources
├── package.json                 # Node.js deps (locanika toolchain)
├── init-scripts/                # PostgreSQL init SQL (runs on first DB start)
│   └── 00-create-auth-schema.sql
├── templates/                   # Jinja2 (nunjucks) templates for docker-compose generation
│   ├── docker-compose.j2
│   ├── adminer/
│   ├── api/
│   ├── auth/
│   ├── db/
│   ├── mailpit/
│   └── studio/
└── projects/                    # Cloned application projects (git-ignored, populated by make projects-init)
    ├── api/                     # Go backend — see projects/api/AGENTS.md for full architecture
    └── studio/                  # Frontend dashboard — see projects/studio/AGENTS.md if present
```

---

## Projects

### `projects/api` — Go Backend API

> **For detailed architecture, layer responsibilities, conventions, and the "Adding a New Resource" checklist — read `projects/api/AGENTS.md` first. That file is the authoritative source for the API project.**

| Property | Value |
|---|---|
| **Language** | Go (Golang) |
| **Module** | `github.com/resoul/api` |
| **Git source** | `git@github.com:resoul/api.git` |
| **Mount inside container** | `/go/src/github.com/resoul/api` |
| **Container name** | `api` |
| **Local port** | `3032` → container `8080` |
| **Internal URL** | `http://api.studio.localhost` |
| **Start command** | `CompileDaemon` (hot-reload via `make build`) |
| **Entry binary** | `./studio serve` |

Edit files in `projects/api/`. The container picks up changes automatically via `CompileDaemon`.

---

### `projects/studio` — Frontend Dashboard

> **If `projects/studio/AGENTS.md` exists, read it for frontend conventions.**

| Property | Value |
|---|---|
| **Language** | TypeScript / React / Vue (Vite) |
| **Git source** | `git@github.com:resoul/studio.git` |
| **Mount inside container** | `/app` |
| **Container name** | `studio` |
| **Local port** | `3222` → container `3222` |
| **Internal URL** | `http://dashboard.studio.localhost` |

Edit files in `projects/studio/`. Changes reflect immediately via Vite HMR.

---

## Supporting Services

| Service | Container | Local port | URL |
|---|---|---|---|
| PostgreSQL 16 | `db` | `5432` | — |
| GoTrue (Auth) | `auth` | `9999` | `http://auth.studio.localhost` |
| Mailpit (SMTP/UI) | `mailpit` | `3016` (UI), `1025` (SMTP) | `http://mail.studio.localhost` |
| Adminer (DB UI) | `adminer` | `3033` | `http://adminer.studio.localhost` |

---

## Database

- **Driver**: PostgreSQL 16
- **Default user/password**: `postgres` / `root`
- **Schema `auth`**: owned by `gotrue` / `gotrue_password` — used by GoTrue auth service
- **Schema `app`**: owned by `app` / `app_password` — used by the Go API
- Init scripts in `init-scripts/` run automatically on first container start

---

## Common Commands

```bash
make services-up        # Start all containers
make services-down      # Stop all containers
make services-restart   # Down + Up
make services-deploy    # Full redeploy (down → init → build → up → hosts)
make projects-init      # Clone projects/api and projects/studio
make projects-pull      # Pull latest changes in both projects
make hosts              # Update /etc/hosts with .localhost entries
make dns                # Generate nginx proxy config
```

---

## Notes for AI Agents

- **Do not edit** `docker-compose.yml` directly — it is generated from `templates/` via `locanika`.
- Application source code lives exclusively inside `projects/api/` and `projects/studio/`.
- Before making any changes to the API, read `projects/api/AGENTS.md` for architectural rules, layer boundaries, and conventions.
- All services communicate over the internal Docker network named `studio`.
- The JWT secret used by GoTrue is a dummy development value — do not use in production.
