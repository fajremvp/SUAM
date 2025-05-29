# SUAM - Sistema Universal de Autenticação de Mídia

Este é o MVP inicial da SUAM, uma plataforma para verificação de vídeos, imagens e áudios gerados por IA.

## Como rodar localmente

### Backend
```bash
cd suam/backend
uvicorn main:app --reload
```

### Frontend
```bash
cd suam/frontend
npm install
npm run dev
```