## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository with azure AD token validation.

## Installation

```bash
$ yarn
$ cp .env.example .env
```

Don't forget to update .env file with your azure AD credentials.

## Running the migrations

```bash
$ yarn migration:run
```

## Running the app

```bash
# development
$ docker-compose up -d
$ yarn start

# watch mode
$ yarn start:dev
```
