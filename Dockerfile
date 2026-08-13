FROM node:24-alpine AS builder

WORKDIR /app

RUN apk add --no-cache build-base python3 \
  && npm install -g pnpm@10

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY tsconfig*.json ./
COPY src ./src

RUN pnpm exec esbuild src/server/index.ts --bundle --platform=node --outfile=dist/server/index.js --format=esm --packages=external

# ---------------------------------------------------------------------------

FROM node:24-alpine AS runner

WORKDIR /app

RUN apk add --no-cache build-base python3 \
  && npm install -g pnpm@10

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

COPY --from=builder /app/dist ./dist

RUN mkdir -p /data
COPY model ./model

EXPOSE 3000

ENV PORT=3000
ENV DB_FILE=/data/survey.db

CMD ["node", "dist/server/index.js"]
