## Recommendation Website with AI Chatbot

This project is a recommendation website enhanced with an AI chatbot, designed for scalability, maintainability, and flexibility using Clean Architecture principles. 

### Features

* **AI Chatbot:** Provides personalized recommendations for users, enhancing their experience.
* **Clean Architecture:** Ensures a well-structured, modular application that's easy to maintain and scale as your project grows.
* **Image Management:** Leverages Cloudinary for efficient handling and storage of images.
* **Google OAuth:** Implements secure user authentication using Passport.js and Google OAuth.
* **Geminie Vision Integration:** Seamlessly integrates Geminie Vision to extract restaurant menu data and generate JSON files for easy ingestion.
* **Rasa Chatbot:** Utilizes Rasa, a powerful AI framework, to run the chatbot on a separate server for optimized performance.

### Technologies Used

* **Frontend:** Vuejs / Typescript
* **Backend:** Node.js, Express.js , TypeScript
* **Database:** MongoDB
* **Authentication:** Google OAuth with Passport.js
* **Image Management:** Cloudinary
* **AI Chatbot:** Rasa
* **Image Processing:** Geminie Vision

### Project Structure
```bash
    src/
      ├── Application/ (interfaces and core logic)
      ├── Domain/ (entities)
      ├── Infrastructure/ (usecases/ repository implementation & database or any external system implementation that depends on the interfaces)
      └── Main/ (factories and endpoints)
```

### Explanation of Clean Architecture Folders:

* **Application:** This folder contains interfaces and core logic for your application. It defines what the system should do without relying on specific technologies or implementations.
* **Domain:** This folder houses your domain entities, representing the core concepts and rules of your recommendation system.
* **Infrastructure:** This folder holds concrete implementations of use cases and repositories, along with any external system integrations like Cloudinary or Rasa. It depends on the interfaces defined in the Application layer.
* **Main:** This folder serves as the entry point, containing factories to create concrete instances and endpoints for your API.

### Getting Started

Before diving in, ensure you have the following prerequisites installed:

* Node.js
* MongoDB
* A Cloudinary account
* Google OAuth credentials
* A running Rasa server
