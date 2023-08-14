# Ecommerce Website

An E-commerce website for products "virl Express" built with ReactJs.

# Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Usage](#usage)
- [designDecisions](#designDecisions)
- [Authors](#authors)

## Features

- Product Listings page displaying:
  - Product image
  - Discount
  - Price
  - Rating
- Cart Management
- Product details Page
- Loading & Alerts
- Checkout page
- Order Summary
- Checkout successfully page
- Responsive

## Technologies

- React.js: Front-end framework for building user interfaces.
- HTML5: Markup language for structuring web pages.
- Tailwind CSS: Utility-first CSS framework for styling the application.
- Framer Motion: Animation library for creating interactive and engaging UI transitions.
- Other Libraries and Tools: React Router, Axios, react-query, react-toastify etc.

## Usage

To Run the project locally,

Clone the project

```bash
  git clone https://github.com/akanlegumjohn/frontend-intern-assessment.git
```

Go to the project directory

```bash
  cd frontend-intern-assessment/e-commerce-web-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Design Decision

### Design Decision: Tailwind CSS for Styling

The choice to use Tailwind CSS as the styling framework for this project was a deliberate decision aimed at streamlining the design and development process.

- **Reasoning:** Tailwind CSS offers a utility-first approach that allows for rapid UI development by composing styles directly in the HTML markup. This decision was made to expedite the design process without compromising on flexibility and customization.

- **Benefits:**

  - **Rapid Prototyping:** Tailwind CSS accelerates the styling phase by eliminating the need to write custom CSS classes. This approach enables the creation of visually appealing components without spending excessive time on styling details.
  - **Responsive Design:** Tailwind CSS's responsive utilities simplify the implementation of responsive designs, ensuring consistent user experiences across various screen sizes.
  - **Consistency:** The predefined utility classes promote design consistency across components, leading to a coherent and polished user interface.
  - **Maintainability:** The utility-first approach aligns well with writing modular and maintainable code, which is essential for the long-term sustainability of the project.

- **Implementation:** Tailwind CSS classes were used directly within the JSX to style components. Customization was achieved by utilizing the built-in configuration to extend or override default styles, ensuring a cohesive visual identity throughout the project.

### Design Decision: Framer Motion for Animations

Incorporating the Framer Motion library into the project's development was driven by the goal of adding fluid and engaging animations to the user interface.

- **Reasoning:** Framer Motion provides a simple yet powerful way to introduce motion and interactivity, enhancing user engagement and visual appeal. This decision was made to elevate the user experience by adding dynamic animations to key components.

- **Benefits:**

  - **Enhanced User Engagement:** Animations, such as page transitions, hover effects, and element interactions, captivate users' attention and make the browsing experience more enjoyable.
  - **Visual Hierarchy:** Animations can guide users' focus to specific elements or actions, aiding in conveying information and guiding user navigation.
  - **Professional Aesthetics:** Framer Motion allows for the creation of polished and modern interfaces by incorporating motion design principles into the project.

- **Implementation:** Framer Motion's components and hooks were integrated directly into the project's components. Animation variants and properties were defined to achieve consistent and visually pleasing motion effects.

### Design Decision: React Query for Data Fetching and State Management

The selection of the @tanstack/react-query library was pivotal for efficient data fetching and state management within the project.

- **Reasoning:** React Query simplifies data fetching, caching, and synchronization, ensuring that data remains up-to-date and readily accessible across various components. This decision was driven by the need to optimize performance and reduce unnecessary network requests.

- **Benefits:**

  - **Efficient Data Management:** React Query's caching mechanisms minimize redundant network requests, leading to improved performance and reduced loading times.
  - **Real-time Updates:** Automatic data synchronization allows for seamless real-time updates as the underlying data changes, providing users with the latest information without manual intervention.
  - **Data Prefetching:** React Query's prefetching capabilities improve user experience by proactively fetching data before it is needed, minimizing perceived load times.
  - **Global State:** React Query's ability to manage shared data across components eliminates the need for complex state management solutions, promoting code simplicity.

- **Implementation:** React Query hooks were utilized to fetch and manage data from the product API endpoints.

### Design Decision: React Router DOM for Page Navigation

The adoption of React Router DOM as the navigation solution for the project was driven by the necessity to create a smooth and intuitive multi-page application experience.

- **Reasoning:** React Router DOM facilitates the creation of multiple pages within a React application, allowing for seamless navigation and route handling. This decision was made to ensure a user-friendly browsing journey and clear page organization.

- **Benefits:**

  - **Clear Navigation:** React Router DOM enables the creation of distinct URLs for different sections of the application, enabling users to easily bookmark, share, and revisit specific pages.
  - **Multi-Page Experience:** The library facilitates the development of multi-page applications with separate routes, enabling the creation of a structured and intuitive user flow.
  - **Deep Linking:** Each page having its own URL enables deep linking, allowing users to access specific content directly, enhancing accessibility and user convenience.

- **Implementation:** React Router DOM components, such as `<BrowserRouter>` and `<Route>`, were employed to define and manage routes within the application. Nested routes were used to structure different sections of the e-commerce website as well as the various pages.

### Use of `react-toastify` for Enhanced User Feedback

One of the key design decisions in this project was the integration of the `react-toastify` library to provide effective user feedback through notifications. By implementing this library, the project takes advantage of a visually appealing and unobtrusive way to communicate various events and updates such as the addition and the removing of products from cart to users.

- **Reasoning:** The decision to incorporate `react-toastify` was primarily driven by the aim to enhance user experience and interaction. Notifications play a crucial role in informing users about successful actions, errors, or important updates, contributing to a seamless and informative browsing experience.

- **Benefits:**

  - **Visual Clarity:** Notifications provided by `react-toastify` are positioned at the top-right corner of the screen, ensuring they don't disrupt the user's current workflow while still conveying important information.
  - **User-Friendly:** The non-intrusive nature of toast notifications allows users to stay informed without being overwhelmed by frequent pop-ups or alerts.
  - **Real-time Feedback:** The library's ability to dynamically generate notifications in response to user actions, such as adding items to the cart , offers real-time feedback that fosters user confidence and engagement.
  - **Consistency:** By using `react-toastify`, the project maintains a consistent and professional notification system across various pages and interactions.

- **Implementation:** The integration of `react-toastify` was seamlessly achieved by importing the library's components and methods. Customizable options were utilized to style notifications according to the project's overall design aesthetic, ensuring a cohesive look and feel.

### Design Decision: Context API for State Management

The strategic choice to implement React's Context API, utilizing `createContext` and `useContext`, was driven by the project's need for an efficient and straightforward state management solution.

- **Reasoning:** React's Context API offers a lightweight and built-in method for sharing state across components, reducing the complexity associated with prop drilling and providing a centralized state container. This decision was based on the desire to manage the application's state in a clean, organized, and easily accessible manner.

- **Benefits:**

  - **Global State Sharing:** The Context API enables the sharing of state and data between components without the need for manual passing of props through intermediate components.
  - **Simplified Prop Flow:** By using context, the project avoids the pitfalls of deep prop drilling, improving code readability and reducing the risk of errors.
  - **Encapsulation:** Components that require access to shared state can consume the context directly, promoting encapsulation and a clear separation of concerns.
  - **Scalability:** As the project evolves, the Context API provides a scalable solution for managing more complex states without the need for introducing external libraries.

- **Implementation:** The `createContext` function was used to create a context object such as the CartContest that encapsulates the application's state. Custom providers were designed to wrap components and provide the context values, and the `useContext` hook was employed to access the state within consuming components.

## Authors

- [@akanlegumjohn(https://www.github.com/akanlegumjohn)
