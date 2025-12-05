# JavaScript Quiz 🧠

An interactive JavaScript quiz application built with React, TypeScript, and Material UI. Test your JavaScript knowledge with a variety of questions featuring syntax highlighting and immediate feedback.

![JavaScript Quiz](https://img.shields.io/badge/JavaScript-Quiz-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 🎯 Features

- **Interactive Quiz**: Answer JavaScript questions with multiple choice options
- **Syntax Highlighting**: Code snippets displayed with beautiful syntax highlighting
- **Instant Feedback**: See correct/incorrect answers immediately after selection
- **Score Tracking**: Track your correct, incorrect, and unanswered questions
- **Confetti Animation**: Celebrate correct answers with confetti effects
- **Persistent State**: Your progress is saved in local storage
- **Randomized Questions**: Questions are shuffled each time you start
- **Responsive Design**: Works on all device sizes

## 🛠️ Tech Stack

### Core

- **React 19** - UI library
- **TypeScript 5.9** - Type safety
- **Vite 7** - Build tool and dev server

### UI & Styling

- **Material UI (MUI) 7** - Component library
- **Emotion** - CSS-in-JS styling
- **Roboto Font** - Typography

### State Management

- **Zustand** - Lightweight state management with persistence middleware

### Code Display

- **React Syntax Highlighter** - Syntax highlighting for code snippets

### Animations

- **Canvas Confetti** - Confetti celebration effects

### Code Quality

- **ESLint 9** - Linting with flat config
- **@stylistic/eslint-plugin** - Standard JS style rules
- **Prettier** - Code formatting

## 📁 Project Structure

\`\`\`
javascript-quizz/
├── public/
│ └── data.json # Quiz questions database
├── src/
│ ├── assets/ # Static assets
│ ├── hooks/
│ │ └── useQuestionData.ts # Custom hook for question stats
│ ├── services/
│ │ └── questions.ts # API service for fetching questions
│ ├── store/
│ │ └── questions.ts # Zustand store for state management
│ ├── App.tsx # Main application component
│ ├── Game.tsx # Quiz game component
│ ├── Start.tsx # Start screen component
│ ├── Footer.tsx # Footer with stats and reset
│ ├── JavaScriptLogo.tsx # JS logo SVG component
│ ├── types.d.ts # TypeScript type definitions
│ └── main.tsx # Application entry point
├── .prettierrc # Prettier configuration
├── eslint.config.js # ESLint flat configuration
├── tsconfig.json # TypeScript configuration
└── vite.config.ts # Vite configuration
\`\`\`

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher (or pnpm/yarn)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/javascript-quizz.git
   cd javascript-quizz
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**

   Navigate to \`http://localhost:5173\`

## 📜 Available Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| \`npm run dev\`     | Start development server with hot reload |
| \`npm run build\`   | Type-check and build for production      |
| \`npm run preview\` | Preview production build locally         |
| \`npm run lint\`    | Run ESLint to check code quality         |

## 🏗️ Building for Production

\`\`\`bash

# Build the application

npm run build

# Preview the production build

npm run preview
\`\`\`

The build output will be in the \`dist/\` directory, ready to be deployed to any static hosting service.

## 🎮 How to Play

1. Click **"Start Quiz"** to begin
2. Read the JavaScript question and code snippet
3. Select the answer you think is correct
4. Green indicates correct, red indicates incorrect
5. Navigate between questions using the arrow buttons
6. Track your score at the bottom
7. Click **"Reset"** to start over

## 📊 Question Format

Questions are stored in \`public/data.json\` with the following structure:

\`\`\`json
{
"id": 1,
"question": "What is the output of 'typeof NaN' in JavaScript?",
"code": "console.log(typeof NaN);",
"answers": ["'number'", "'NaN'", "'undefined'", "'object'"],
"correctAnswer": 0
}
\`\`\`

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**NicoDevvv**

---

⭐ If you found this project helpful, please give it a star!
