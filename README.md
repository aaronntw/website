# Aaron Ng

Personal homepage for [aaronntw.com](https://aaronntw.com).

The site gives a concise overview of my work across data architecture, network security and infrastructure. It includes my professional background, selected projects, homelab notes and contact information.

The design is intentionally restrained and information-first. Dark mode is the default, and visitors can switch themes from the navigation bar.

## Deploy on a VPS

Clone the repository and start the site:

```sh
git clone https://github.com/aaronntw/website.git
cd website
docker compose up -d --build
```

The site is then available on port `8080`. Point your existing reverse proxy or Cloudflare Tunnel to:

```text
http://localhost:8080
```

To deploy a later update:

```sh
git pull
docker compose up -d --build
```

To stop the site:

```sh
docker compose down
```
