🛍️ React Fake Store App

This project is a simple e-commerce demo built with React. It allows users to view products, select quantities, and add items to a shopping cart using the Fake Store API.

⸻

📦 Features
• Browse a list of products fetched from Fake Store API
• View product details including image, price, description, and rating
• Increment or decrement product quantity before adding to cart
• Add products to a user’s cart
• Display cart contents (limited by Fake Store API capabilities)

⸻

⚠ Limitations
• Fake Store API is a demo API for learning purposes.
• Some limitations of the API may affect functionality:
• Cart operations (POST, PUT) do not fully mimic a real e-commerce backend.
• Adding a product may create a new cart instead of updating an existing one.
• Data on the server is not persistent; it may reset at any time.
• Because of these limitations, some actions in the app may not behave exactly like a real store.

⸻

💻 Tech Stack
• React for UI
• React Query for API data fetching and mutations
• Redux for state management (authentication token, user info)
• Zod for API response validation
• Fake Store API (https://fakestoreapi.com￼) for demo backend

🚀 Getting Started

1. Clone the repository
   git clone <your-repo-url>

2. Install dependencies:
   npm install

3. Start the development server:
   npm run start

  📌 Notes
	•	The app is designed for learning and demonstration purposes.
	•	API behavior may be inconsistent due to the nature of Fake Store API.
	•	Do not rely on it for production usage.
