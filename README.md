README
🎬 MoodFlix — Watch What You Feel
AI-powered mood-based movie & series discovery platform built with React, Three.js, GROQ AI, and TMDB.

MoodFlix Preview Frontend Backend

✨ Features
Feature	Description
🎭 Mood Selector	12 moods with language, platform & format filters
🎬 Movie Recs	7–8 movies + series + hidden gems + wild cards via TMDB
🤖 AI Chatbot	GROQ-powered streaming chatbot with MoodFlix personality
🔐 Auth	Supabase email + Google OAuth with protected routes
🌌 3D Background	Three.js floating orbs & particles on login/register
📱 Responsive	Fully mobile-friendly dark glassmorphism UI
🛠 Tech Stack
Frontend
React 18 + Vite 5
Tailwind CSS — utility-first styling
Framer Motion — smooth animations
Three.js — 3D animated backgrounds
Supabase JS — auth client
GROQ SDK — AI chatbot (browser streaming)
Backend
Node.js + Express.js
Supabase Admin — server-side auth verification
GROQ SDK — server-side AI (SSR fallback)
APIs & Services
TMDB API — Free movie/series data & posters
GROQ API — Free LLM inference (Llama 3)
Supabase — Free auth + PostgreSQL
🚀 Quick Start
Prerequisites
Node.js 18+
A free Supabase account
A free TMDB API key
A free GROQ API key
1. Clone & install
git clone https://github.com/yourusername/moodflix.git
cd moodflix

# Install frontend deps
cd frontend && npm install

# Install backend deps
cd ../backend && npm install
2. Configure environment variables
Frontend — frontend/.env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_TMDB_API_KEY=your_tmdb_v3_api_key
VITE_GROQ_API_KEY=your_groq_api_key
VITE_BACKEND_URL=http://localhost:5000
Backend — backend/.env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your_supabase_service_role_key
GROQ_API_KEY=your_groq_api_key
PORT=5000
FRONTEND_URL=http://localhost:5173
⚠️ Never commit .env files — they are already in .gitignore.

3. Supabase Setup
Go to supabase.com → Create a new project
Go to Authentication → Providers → Enable Google OAuth
Add your Google OAuth Client ID & Secret
Add http://localhost:5173 to allowed redirect URLs
Copy your Project URL and anon key from Settings → API
Copy your service_role key for the backend
4. Run locally
# Terminal 1 — Backend
cd backend
npm run dev
# → http://localhost:5000

# Terminal 2 — Frontend
cd frontend
npm run dev
# → http://localhost:5173
📁 Project Structure
moodflix/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx          # Three.js bg + glassmorphism auth
│   │   │   ├── Register.jsx       # Registration with password strength
│   │   │   └── Home.jsx           # Main app — mood → recommendations
│   │   ├── components/
│   │   │   ├── ThreeBackground.jsx  # 3D orbs & particles
│   │   │   ├── MoodSelector.jsx     # 12 mood cards + preferences modal
│   │   │   ├── MovieCard.jsx        # Card with poster, rating, actions
│   │   │   ├── SeriesCard.jsx       # Re-exports MovieCard (type-aware)
│   │   │   ├── Chatbot.jsx          # Floating AI chat with streaming
│   │   │   └── Navbar.jsx           # Sticky nav with user avatar
│   │   ├── lib/
│   │   │   ├── supabase.js          # Supabase client
│   │   │   ├── tmdb.js              # TMDB helpers + mood mapping
│   │   │   └── gemini.js            # GROQ streaming chat
│   │   ├── App.jsx                  # Router + auth guards
│   │   ├── main.jsx                 # React entry
│   │   └── index.css                # Tailwind + custom design system
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── index.html
│   └── package.json
├── backend/
│   ├── routes/
│   │   ├── auth.js        # Token verification
│   │   ├── movies.js      # TMDB proxy routes
│   │   └── chat.js        # GROQ chat + SSE streaming
│   ├── server.js
│   └── package.json
└── README.md
🌐 Deployment
Frontend → Vercel
Push your code to GitHub
Import your repo at vercel.com
Set Root Directory to frontend
Add all VITE_* environment variables in Vercel dashboard
Deploy — Vercel auto-detects Vite
# Or deploy via CLI
cd frontend
npx vercel --prod
Backend → Render
Go to render.com → New Web Service
Connect your GitHub repo
Set Root Directory to backend
Set Build Command: npm install
Set Start Command: npm start
Add backend environment variables in Render dashboard
Update VITE_BACKEND_URL in Vercel to your Render service URL
🔑 Getting API Keys
Service	URL	Notes
TMDB API	https://www.themoviedb.org/settings/api	Free forever, register & request v3 key
GROQ API	https://console.groq.com	Free tier — very generous limits
Supabase	https://supabase.com	Free forever plan available
Google OAuth	https://console.cloud.google.com	Via Supabase Auth provider settings
🎨 Design System
Token	Value
Background	#050814 (deep space navy)
Purple	#7c5cfc
Pink	#fc5c9c
Cyan	#5cf0fc
Heading font	Syne (Google Fonts)
Body font	Inter (Google Fonts)
Card style	Glassmorphism — backdrop-filter: blur
🤖 AI Chatbot Capabilities
The MoodFlix AI (powered by Llama 3 via GROQ) can:

Suggest movies/series based on your current mood
Respond in English, Hindi, or Hinglish (auto-detects)
Give spoiler-free, curiosity-inducing summaries
Recommend hidden gems and underrated picks
Provide cast, director, and similar movie details
Handle follow-up questions and mood changes
📜 License
MIT © 2024 MoodFlix

Made with ❤️ by the MoodFlix team · Powered by TMDB, GROQ & Supabase
