# =========================
# 1️⃣ Etapa: Build do Frontend (React/TypeScript)
# =========================
FROM node:20 AS frontend-builder

WORKDIR /app/frontend

# Instala dependências
COPY frontend/package*.json ./
RUN npm install

# Copia o restante do código e gera o build
COPY frontend/ ./
RUN npm run build

# =========================
# 2️⃣ Etapa: Backend (Flask)
# =========================
FROM python:3.11-slim

WORKDIR /app

# Instala dependências do sistema
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copia backend e dependências
COPY backend/ ./backend/
COPY backend/requirements.txt ./requirements.txt

# Instala pacotes Python
RUN pip install --no-cache-dir -r requirements.txt

# Copia o build do frontend (feito na etapa 1)
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

# Define variáveis de ambiente
ENV PORT=8080
ENV PYTHONUNBUFFERED=1

EXPOSE 8080

# Usa gunicorn para produção
CMD exec gunicorn --chdir backend --bind :$PORT app:app
