# Matheus Ferce — Landing Page Premium

Site de alta conversão para o Personal Trainer **Matheus Ferce**, construído com React + Tailwind CSS + Framer Motion.

## 🚀 Como rodar

```bash
cd matheus-ferce
npm install
npm run dev
```

Acesse `http://localhost:5173`

## 📦 Build para produção

```bash
npm run build
```

Os arquivos otimizados ficam em `/dist`.

---

## ⚙️ Configurações rápidas

Abra **`src/config.js`** e edite:

| Variável | O que fazer |
|---|---|
| `HOTMART_URL` | Cole o link real do seu produto na Hotmart |
| `WHATSAPP_NUMBER` | Coloque seu número (55 + DDD + número) |
| `INSTAGRAM_URL` | Seu perfil do Instagram |
| `YOUTUBE_URL` | Seu canal do YouTube |
| `GALLERY_IMAGES` | Adicione/remova fotos do carrossel |
| `TESTIMONIALS` | Edite os depoimentos dos alunos |

---

## 🖼️ Adicionando imagens próprias

1. Coloque seus arquivos em **`src/assets/images/`**
2. No `src/config.js`, atualize o `src` de cada item em `GALLERY_IMAGES`:

```js
import minhaFoto from './assets/images/minha-foto.jpg';

export const GALLERY_IMAGES = [
  { id: 1, src: minhaFoto, alt: 'Descrição', label: 'Rótulo' },
  // ...
];
```

---

## 🗂️ Estrutura de Pastas

```
matheus-ferce/
├── public/
├── src/
│   ├── assets/
│   │   └── images/          ← Coloque suas fotos aqui
│   ├── components/
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticlesBackground.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── GallerySection.jsx
│   │   ├── ResultsSection.jsx
│   │   ├── BenefitsSection.jsx
│   │   ├── CTASection.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── config.js            ← Edite aqui!
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🎨 Paleta de Cores

| Token | Cor | Uso |
|---|---|---|
| `#050505` | Preto profundo | Background principal |
| `#00AEEF` | Azul neon | Destaque, CTAs, ícones |
| `#33C3FF` | Azul claro | Gradientes |
| `#0077CC` | Azul médio | Botões hover |

---

## 📦 Tecnologias

- **React 18** — UI
- **Tailwind CSS 3** — Estilização
- **Framer Motion 11** — Animações
- **Swiper 11** — Carrossel de galeria
- **Lucide React** — Ícones
- **Vite 5** — Build tool
