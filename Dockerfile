ARG NODE_VERSION="24"

FROM node:${NODE_VERSION}-alpine AS base


FROM base AS builder

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci

COPY . .

RUN npm run build

RUN cp -r public .next/standalone/
RUN cp -r .next/static .next/standalone/.next/


FROM base AS release
WORKDIR /app

RUN addgroup -S webapp
RUN adduser -S next -G webapp

USER next

COPY --chown=next:webapp --from=builder /build/.next/standalone ./

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

ENV HOSTNAME=0.0.0.0
ENV PORT=3000

EXPOSE 3000

CMD [ "node", "server.js" ]
