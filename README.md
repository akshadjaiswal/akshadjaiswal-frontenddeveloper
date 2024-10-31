# Food Menu Webpage

## [Project Live Link](https://foodmenuapp-akshadjaiswal.netlify.app)

## Overview
This project is a single-page food menu landing page built as a technical assessment for an interview. It mimics the design, colors, and theme of [Swiggy](https://www.swiggy.com/) while incorporating data from [TheMealDB API](https://www.themealdb.com/api.php) for dynamic food items. The webpage is designed with a clean, user-friendly interface, focusing on visually cohesive elements for a smooth browsing experience.

## Features
The webpage includes the following sections:

- **Header with Logo and Search Bar**:
  - The header contains a logo and a search bar designed to align with the Swiggy theme.
  - *Note*: The search bar is a design-only element and is not currently functional.

- **Filters Section**:
  - A filter panel to allow users to filter through various food categories.
  - Filter options are designed to provide a smooth browsing experience for users as they explore the food items.

- **Food Items Section**:
  - Displays food items fetched from TheMealDB API.
  - Each item displays the food name, thumbnail image, and basic details.
  
- **Footer**:
  - A simple footer to balance the design and structure of the webpage.

## Technology Stack
- **Frontend Framework**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management and Logic**: React Hooks
- **APIs**:
  - TheMealDB API for fetching food items and details.
- **Other Libraries**: Utilized additional libraries for UI components and handling requests to the API.

## Project Structure
The project is structured into distinct sections for clarity and modularity:

- `src/components`:
  - Contains reusable components like `Header`, `FoodItems`, `Filters`, and `Footer`.
  

## Installation and Setup
To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd food-menu-webpage
   ```
2. Install Dependencies:
    ```bash
    npm install
    ```
3. Run the Project
    ```bash
    npm start
    ```
4. **API configuration**
TheMealDB API is used directly within the components. Ensure you have internet access as the data is fetched in real-time from the API.

## Key Learnings

### 1. **Tailwind CSS for Rapid Styling**
   - Tailwind CSS allowed for quick, responsive, and highly customizable styling directly in the markup.
   - Mastered using utility classes to achieve Swiggy-inspired design with minimal custom CSS, maintaining a cohesive look across components.
   - Learned how to leverage Tailwind’s configuration for theme consistency and responsive design.

### 2. **API Integration and Data Handling**
   - Integrated TheMealDB API to fetch real-time food item data.
   - Used React’s state and effect hooks to handle asynchronous data fetching and display it dynamically on the page.
   - Gained experience in API-based application development, managing data flow from the server to the client seamlessly.

### 3. **Component-Based Architecture**
   - Built modular and reusable components like `Header`, `Filters`, `FoodItems`, and `Footer`.
   - Improved understanding of component composition, which helped achieve a clean structure and easy-to-maintain codebase.

## Challenges

### 1. **Design Consistency with Swiggy**
   - Ensuring a consistent look and feel with Swiggy’s theme required attention to detail in terms of colors, spacing, and typography.
   - Balancing Swiggy’s design inspiration with Tailwind’s utility classes while keeping the UI lightweight was challenging.

### 2. **Non-Functional Search Bar**
   - While the search bar design was achieved, functionality was deferred for future implementation.
   - This highlighted the need to plan out additional time for functional features beyond design.

### 3. **Managing API Limitations**
   - Adapting the design to fit the available data from TheMealDB API was challenging due to limited customization options.
   - Adjusted data rendering and styling choices based on the available API responses to maintain an appealing design.

## Conclusion
These key learnings and challenges illustrate the project’s focus on responsive design, component reusability, and API integration, as well as the attention to design detail and handling of real-time data.
