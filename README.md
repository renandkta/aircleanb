# AirCleanB - Airbnb Cleaning Service Website

This is the official repository for the AirCleanB website, a platform for an Airbnb cleaning service.

## 🚀 Project Stack

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** GitHub Pages

---

## 🏁 Getting Started Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/renandkta/aircleanb.git
    cd aircleanb
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open [http://localhost:5173](http://localhost:5173) in your browser.**

---

## 🔧 Available Scripts

-   `npm run dev` - Development server
-   `npm run build` - Production build
-   `npm run preview` - Preview build
-   `npm run lint` - Code linting

---

## ✨ Recent Changes

### Promotional Section Overhaul (Growth Hacking Focus)

To boost conversions for the "50% OFF" campaign, the following improvements were implemented:

#### 1. Enhanced Promotional Banner
- **New Headline & Copy:** Updated to "✨ Get 50% OFF Your First Turnover! ✨" with a clearer value proposition.
- **Visual Redesign:** Changed the background to a high-contrast dark navy blue to grab user attention.

#### 2. New "Special Offer" Modal
- A new modal was created to capture leads directly from the promotional offer.
- **Urgency & Scarcity:** Includes a countdown timer to encourage immediate action.
- **Clear Offer Details:** The modal now clearly explains the new pricing strategy: book a "Deep Clean Reset" to unlock 50% off the next turnover.
- **Social Proof:** A scrollable list of client testimonials was added to build trust and credibility.

#### 3. Conversion-Optimized Form
- The lead capture form inside the modal was updated with a clear CTA ("Book Deep Clean & Save").
- The form includes fields for Name, Email, Phone, Zip Code, and Property Type.

#### 4. Technical Enhancements
- **Component-Based Architecture:** The new features were built using modular React components (`PromotionalModal`, `LeadForm`).
- **Styling:** Tailwind CSS was used for a responsive and consistent design.
- **Custom Scrollbar:** The testimonials section now features a custom-styled scrollbar for a better user experience.