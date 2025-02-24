# AI Chatbot Builder  

An AI-powered chatbot builder that allows users to create and configure LLM-based chatbot instances for their domain. The chatbot can be customized with product details and help desk Q&A settings, then embedded into third-party applications via an iFrame to assist in sales and customer support.  

## Features  

✅ **Customizable Chatbots** – Define chatbot questions, help desk Q&A, and product-related responses.  
✅ **Seamless Integration** – Embed chatbot instances in third-party applications using an iFrame.  
✅ **Real-time AI Assistance** – Supports real-time sales and customer interactions.  
✅ **Secure Authentication** – Uses **Clerk** for user authentication.  
✅ **Payment Integration** – Supports **Stripe** for monetization.  
✅ **File Uploads** – Utilizes **UploadCare** for managing media files.  
✅ **Scalable Database** – Built with **PostgreSQL (NeonDB)** for data storage.  

---  

## Getting Started  

### Prerequisites  
Ensure you have the following installed:  
- **Node.js** (v18 or later)  
- **PostgreSQL** (or NeonDB cloud instance)  
- **Git**  

---  

### Installation  

#### 1️⃣ Clone the repository  
```bash
git clone https://github.com/gg-ayush/Sales-AI-Invoker.git
cd your-repository
```

#### 2️⃣ Install dependencies  
```bash
npm install
```

#### 3️⃣ Set up environment variables  
Create a `.env` file in the root directory and add the required environment variables based on `.env.example`.  

#### Example `.env.example` (Do not share actual secrets!)  
```env
# Mailer (for chatbot escalation emails)
NODE_MAILER_EMAIL="your-email@example.com"
NODE_MAILER_GMAIL_APP_PASSWORD="your-app-password"

# Pusher (for real-time events)
NEXT_PUBLIC_PUSHER_APP_CLUSTOR="ap2"
NEXT_PUBLIC_PUSHER_APP_SECRET="your-secret"
NEXT_PUBLIC_PUSHER_APP_KEY="your-key"
NEXT_PUBLIC_PUSHER_APP_ID="your-app-id"

# OpenAI (for chatbot responses)
OPEN_AI_KEY="your-openai-api-key"

# UploadCare (for media uploads)
NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY="your-public-key"
UPLOAD_CARE_SECRET_KEY="your-secret-key"

# Clerk Authentication
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/auth/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/auth/sign-up"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-public-key"
CLERK_SECRET_KEY="your-clerk-secret-key"

# Stripe (for payments)
STRIPE_SECRET="your-stripe-secret-key"
NEXT_PUBLIC_STRIPE_PUBLISH_KEY="your-stripe-public-key"

# Database (PostgreSQL)
DATABASE_URL="your-database-url"
```
**Important:** Never expose `.env` file contents publicly!  

---  

### 4️⃣ Run the application  
Start the development server:  
```bash
npm run dev
```
Visit **`http://localhost:3000`** in your browser.  

---  

## Future Enhancements  

🚀 **KaibanJS Integration** – Adding multi-category AI agents for broader sales functionalities.  
🔄 **Advanced Chat Analytics** – Implementing dashboards to track chatbot performance.  
🔗 **More Payment Options** – Supporting additional payment gateways beyond Stripe.  

---  

## License  
This project is **MIT licensed**.  

---  

This README follows best practices and ensures security by keeping `.env` secrets private. Let me know if you need modifications! 🚀