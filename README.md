markdown
# Campus Care

A web application designed to streamline the process of scheduling counseling appointments. Users can book sessions with counselors, receive email confirmations, join video calls, and chat with their counselors—all in one platform.

## Features
- **Appointment Scheduling**: Select a counselor, choose a date and time, and book a session.
- **Appointment Management**: View upcoming, ongoing, and ended appointments, sorted by start time.
- **Email Notifications**: Receive professional email confirmations for scheduled appointments via Gmail SMTP.
- **Video Calls**: Join counseling sessions via video calls powered by Stream.io.
- **Chat Functionality**: Communicate with counselors through a built-in chat modal.
- **User Authentication**: Secure login with Clerk.

## Tech Stack
- **Frontend**: React.js, TypeScript, Clerk (authentication), Stream.io Video React SDK (video calls), Axios, Tailwind CSS.
- **Backend**: Node.js, Express.js, TypeScript, Gmail SMTP (email notifications), Firebase Firestore (database).
- **Hosting**: Replit (development and deployment).

## Prerequisites
To run this project locally, you’ll need:
- Node.js (v16 or higher) and npm (or yarn).
- Accounts and API keys for:
  - Clerk (authentication).
  - Stream.io (video calls).
  - Gmail (for SMTP email notifications).
  - Firebase (database for counselor data).

## Installation and Setup

### Step 1: Unzip the Project File
1. Download the project ZIP file.
2. Unzip the file to a directory of your choice. You’ll see two folders:
   - `client/`: The React.js + TypeScript frontend.
   - `server/`: The Node.js + Express.js backend (written in TypeScript).

### Step 2: Install Dependencies

#### Backend (Server)
1. Navigate to the `server` directory:
   ```bash
   cd server
Install the necessary dependencies:
bash
npm install
Frontend (Client)
Navigate to the client directory:
bash
cd ../client
Install the necessary dependencies:
bash
npm install
Step 3: Configure Environment Variables
Both the client and server require environment variables to function properly. You’ll need to set up API keys and credentials for Clerk, Stream.io, and Gmail SMTP.
Backend Environment Variables (server/.env)
In the server directory, create a .env file:
bash
touch .env
Add the following environment variables to server/.env:
env
STREAM_API_KEY=your-stream-api-key
STREAM_API_SECRET=your-stream-api-secret
GMAIL_USER=your-gmail-address
GMAIL_PASS=your-gmail-app-password
How to Obtain These Values:
Stream.io Credentials (STREAM_API_KEY and STREAM_API_SECRET):
Sign up for a Stream.io account at getstream.io.
Create a new app in the Stream dashboard.
Copy the API Key and API Secret from the dashboard and paste them into your .env file.
Gmail SMTP Credentials (GMAIL_USER and GMAIL_PASS):
Set Up Gmail Account:
Use an existing Gmail account or create a new one.
Set GMAIL_USER to your Gmail address (e.g., your-email@gmail.com).
Enable 2-Step Verification:
Go to your Google Account settings: myaccount.google.com.
Navigate to "Security" > "2-Step Verification".
Follow the prompts to enable 2-Step Verification for your account.
Generate an App Password:
After enabling 2-Step Verification, go to "Security" > "App Passwords" (you may need to search for "App Passwords" in the Google Account settings).
Click "Generate".
Select "Mail" as the app and "Other" as the device, then name it (e.g., "Campus Care").
Click "Generate" to get a 16-character App Password (e.g., abcd efgh ijkl mnop).
Copy the App Password (without spaces) and set it as GMAIL_PASS in your .env file.
Verify Gmail SMTP:
Ensure your Gmail account allows "Less Secure Apps" (if 2-Step Verification is off, which is not recommended) or uses the App Password correctly.
Frontend Environment Variables (client/.env)
In the client directory, create a .env file:
bash
touch .env
Add the following environment variables to client/.env:
env
VITE_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
VITE_STREAM_API_KEY=your-stream-api-key
STREAM_SECRET_KEY=your-stream-secret-key
VITE_BACKEND_URL=http://localhost:3000
How to Obtain These Values:
Clerk (VITE_CLERK_PUBLISHABLE_KEY):
Sign up for a Clerk account at clerk.dev.
Create a new application in the Clerk dashboard.
Copy the "Publishable Key" from the dashboard and paste it into your .env file.
Stream.io (VITE_STREAM_API_KEY and STREAM_SECRET_KEY):
Use the same API Key and API Secret you obtained for the backend.
Set VITE_STREAM_API_KEY to the same value as STREAM_API_KEY in the backend .env.
Set STREAM_SECRET_KEY to the same value as STREAM_API_SECRET in the backend .env.
Backend URL (VITE_BACKEND_URL):
If running locally, set this to http://localhost:3000 (the default port for the backend).
If deploying the backend elsewhere, update this to the deployed backend URL.
Step 4: Build and Run the Backend
The backend is written in TypeScript, so you need to build it before running it.
Navigate to the server directory (if not already there):
bash
cd server
Build the TypeScript code:
bash
npm run build
This will compile the TypeScript files into JavaScript in a dist folder (assuming a typical tsconfig.json setup).
Start the backend server:
bash
npm start
The server should now be running on http://localhost:3000 (or the port specified in your server/.env file).
Step 5: Run the Frontend
Open a new terminal window and navigate to the client directory:
bash
cd client
Start the React development server:
bash
npm start
The frontend should now be running on http://localhost:5173 (or another port if specified by Vite).
Step 6: Access the Application
Open your browser and go to http://localhost:5173 (or the port where the frontend is running).
Log in using Clerk authentication.
Browse available counselors, schedule an appointment, and receive an email confirmation via Gmail SMTP.
Usage
Log In: Use Clerk to authenticate as a student or counselor.
Schedule an Appointment:
Select a counselor from the list.
Choose a date and time slot.
Confirm the appointment to receive an email notification.
Join a Session: At the scheduled time, join the video call using the Stream.io integration.
Chat with Counselor: Use the chat modal to communicate with your counselor.
Project Structure
client/: React.js + TypeScript frontend application.
server/: Node.js + Express.js backend (written in TypeScript).
server/emailTemplates.ts: Templates for professional email notifications.
Contributing
We welcome contributions! To contribute:
Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.
Please ensure your code follows our style guidelines (e.g., use Prettier for formatting).
License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For questions or feedback, please open an issue on this repository.
Future Plans
Add calendar integration for automatic event creation.
Implement appointment rescheduling and cancellation features.
Enhance the chat modal with real-time messaging.

---

### Explanation of Additions
1. **Unzip Instructions**:
   - Added a step to unzip the project file and explained the two folders (`client` and `server`).

2. **Dependency Installation**:
   - Provided clear steps to install dependencies in both the `client` and `server` folders using `npm install`.

3. **Environment Variables**:
   - Detailed instructions for setting up `.env` files in both `client` and `server`.
   - Included step-by-step guidance for obtaining each environment variable:
     - **Clerk**: Explained how to get the `VITE_CLERK_PUBLISHABLE_KEY`.
     - **Stream.io**: Explained how to get `STREAM_API_KEY` and `STREAM_API_SECRET` for both frontend and backend.
     - **Gmail SMTP**: Provided a detailed process for setting up `GMAIL_USER` and `GMAIL_PASS`, including enabling 2-Step Verification and generating an App Password.
     - **Backend URL**: Clarified how to set `VITE_BACKEND_URL`.

4. **Running the Backend**:
   - Added a step to build the TypeScript code (`npm run build`) before running the server (`npm start`).
   - Assumed a typical `package.json` setup with a `build` script (e.g., `"build": "tsc"`) and a `start` script (e.g., `"start": "node dist/index.js"`).

5. **Running the Frontend**:
   - Instructed the user to run the React development server with `npm start`.
   - Noted that Vite (commonly used with React + TypeScript projects) typically runs on port `5173`.

6. **Usage**:
   - Provided a brief overview of how to use the application, from logging in to scheduling and joining a session.

---

### Next Steps
Please review the `README.md` above and let me know if you’d like to make any changes:
- Confirm the project name (I used "Campus Care").
- Add a live demo link, screenshots, or GIFs if available.
- Specify your GitHub username or email for the "Contact" section.
- Confirm the license (I used MIT as a default).
- Add any additional features, future plans, or known issues.
