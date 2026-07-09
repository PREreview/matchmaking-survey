FROM node:24-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY tsconfig*.json vite.config.ts ./
COPY src ./src

RUN pnpm build:client
RUN pnpm build:server

# ---------------------------------------------------------------------------

FROM node:24-alpine AS runner

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

COPY --from=builder /app/dist ./dist

RUN mkdir -p /data

EXPOSE 3000

ENV PORT=3000
ENV DB_FILE=/data/survey.db

CMD ["node", "dist/server/index.js"]
