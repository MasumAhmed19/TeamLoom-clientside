<!-- # **TeamLoom**  

## **Overview**  
This project is an employee management system designed to monitor employee workload, manage salary records, and contracts. It provides a platform for employees to update their workflow, and for HR executives to monitor and manage employee data.

**Important Links** 
- [Live Link](https://teamloom-a1022.web.app)  
- [Client Repo](https://github.com/MasumAhmed19/TeamLoom-clientside)  
- [Server Repo](https://github.com/MasumAhmed19/TeamLoom-serverside)  


## **Key Features**  
- **Responsive Design:** The website is fully responsive, ensuring a seamless experience across mobile, tablet, and desktop devices.

- **Authentication:** Email and password-based authentication with role-based access control (Employee, HR, Admin).

- **Dashboard** Private dashboards for Employees and HR with features like work-sheet, payment history, employee list, and progress tracking.

- **Admin Controls** Admin can manage employee roles, adjust salaries, and approve payments.

- **Data Fetching:** Implemented using Tanstack Query for GET requests.

- **Environment Variables:** Firebase config keys and MongoDB credentials are hidden using environment variables.


## **Admin Credentials**  
- **Email:** masum.ahmed1328@gmail.com
- **Password:** 123456

## **Technologies Used**
- **Frontend:** React  
- **JavaScript:** ES6+  
- **Styling:** Tailwind CSS, DaisyUI, Flowbite, Headless UI
- **Authentication:** Firebase  
- **Backend & Database:** MongoDB & Express.js  
- **Security:** JSON Web Token  
- **Routing:** React Router DOM  


 -->

# TeamLoom

## Overview
TeamLoom is an employee management system designed to monitor employee workload, manage salary records, and contracts. It provides a platform for employees to update their workflow and allows HR executives to monitor and manage employee data. This project is **Assignment 12** from **Programming Hero**.

## Table of Contents
- [Important Links](#important-links)
- [Key Features](#key-features)
- [Admin Credentials](#admin-credentials)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
<!-- - [Screenshots](#screenshots) -->


## Important Links
- **Live Site:** [TeamLoom](https://teamloom-a1022.web.app/)
- **Client Repository:** [GitHub](https://github.com/MasumAhmed19/TeamLoom-clientside)
- **Server Repository:** [GitHub](https://github.com/MasumAhmed19/TeamLoom-serverside)

## Key Features
- **Responsive Design:** Works seamlessly on mobile, tablet, and desktop devices.
- **Authentication:** Email and password-based authentication with role-based access control (Employee, HR, Admin).
- **Dashboard:** Private dashboards for Employees and HR with features like work-sheet, payment history, employee list, and progress tracking.
- **Admin Controls:** Manage employee roles, adjust salaries, and approve payments.
- **Data Fetching:** Implemented using **Tanstack Query** for efficient data fetching.
- **Security:** Firebase config keys and MongoDB credentials are hidden using environment variables.

## Admin Credentials
> **⚠️ Note:** Change admin credentials before deployment from backend or database.

- **Email:** `masum.ahmed1328@gmail.com`
- **Password:** `123456`

## Technologies Used
### Frontend
- **React (18.3.1)**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **DaisyUI**
- **Flowbite**
- **Headless UI**
- **React Router DOM**
- **React Icons**

### Backend & Database
- **MongoDB**
- **Express.js**

### Authentication & Security
- **Firebase Authentication**
- **JSON Web Token (JWT)**

### Additional Libraries
- **Tanstack Query** (for efficient GET requests)
- **Axios**
- **Stripe Payment Gateway**

## Installation
Follow these steps to run TeamLoom on your local machine:

1. **Clone the repository**
   ```sh
   git clone https://github.com/MasumAhmed19/TeamLoom-clientside
   cd teamloom
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory
   

4. **Run the project**
   ```sh
   npm run dev
   ```

## Environment Variables
The project requires the following environment variables in `.env.local`:

```sh
VITE_apiKey=your-api-key
VITE_authDomain=your-auth-domain
VITE_projectId=your-project-id
VITE_storageBucket=your-storage-bucket
VITE_messagingSenderId=your-messaging-sender-id
VITE_appId=your-app-id
VITE_IMAGEBB_KEY=your-imagebb-key
VITE_STRIPE_PUBLIC_KEY=your-stripe-public-key
VITE_API_URL=http://localhost:9000  # Update in production
```

<!-- ## Screenshots
Add screenshots of the project here. Example:

![TeamLoom Dashboard](screenshot1.png)

![Employee Management Page](screenshot2.png) -->

---

### 🚀 Developed by [Masum Ahmed]