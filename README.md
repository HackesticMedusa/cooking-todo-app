# ChefSync 🍳

ChefSync is a premium, client-side single-page AI cooking assistant and interactive to-do list planner. It guides users through creating customized meal plans for the day based on their schedule complexity, dietary habits, allergens, and budget guidelines, generating step-by-step cooking checklists and synchronized grocery item lists.

![App Dashboard Interface Mockup](https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80)

## ✨ Features

- **Dynamic Day Profile wizard**: Tailors meal preparation times and recipe steps according to your day (*Busy Workday*, *Active Gym Day*, *Lazy Rest Day*, or *Hosting Friends*).
- **Dietary & Allergen Filtering**: Custom selections for Vegetarian, Vegan, Gluten-Free, Keto, or everything, with live warning markers on allergen ingredients.
- **Interactive Cooking Checklist**: Splitted into *Prep Work*, *Active Cooking*, and *Clean-up* tabs. Interactive checking automatically calculates and visualizes your overall cooking completion.
- **Integrated Kitchen Timer**: Simple presets and manual countdown controls inside the workspace to keep you in sync.
- **Smart Grocery List**: Generates categorized items for checkout, allows custom entries, and lets you toggle smart substitutes (e.g. swap milk for almond milk) with auto-updating prices.
- **Budget Feasibility Calculator**: Real-time tracking of estimated cart cost versus target budget, factoring in store tier options (Discount, Standard, Premium) and recommending cost-saving tips.
- **Optional Gemini AI Engine**: Swap from local offline recipes to live generative AI meal plans by inserting your Gemini API Key in the settings modal (stored securely in browser `localStorage`).

## 🛠️ Technology Stack

- **Markup**: Semantic HTML5 structures.
- **Styling**: Vanilla CSS3 featuring custom HSL properties, Glassmorphism backdrop filters, linear gradients, and keyframe transitions.
- **Logic**: Vanilla ES6+ Javascript handling state management, timer states, local matrix lookups, and browser REST queries.
- **Assets**: Google Fonts (*Outfit* and *Inter*) and [Lucide Icons](https://lucide.dev/).

## 🚀 Getting Started

Since ChefSync is client-side, you can run it without any local builds:

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Double-click `index.html` or serve it locally:
   ```bash
   npx http-server
   ```
3. Open `http://localhost:8080` in your browser.

## ☁️ Deployment (Vercel / Netlify / GitHub Pages)

ChefSync is static and has no backend server. To deploy on Vercel:
1. Connect your GitHub repository to [Vercel](https://vercel.com).
2. Set the framework preset to **Other** (as it is a static site).
3. Click **Deploy**. Vercel will host it for free.
