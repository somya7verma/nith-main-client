# STAGE 1: Build Stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all code and build
COPY . .
# Generate Prisma client
RUN npx prisma generate
# Ensure Next.js knows to build for standalone
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# STAGE 2: Run Stage (This is the part you shared)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# 1. Copy the standalone build from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# 2. Expose the port
EXPOSE 3000
ENV PORT 3000

# 3. Start the minimal server
CMD ["node", "server.js"]