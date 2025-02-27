# Chatbot README

Welcome to the documentation for our advanced Chatbot V4.0! This chatbot is designed to provide fast, accurate, and context-aware responses while offering a seamless user experience. Below, you'll find an overview of the features, setup instructions, and other relevant details.

---

## Features

1. **Fast and Accurate Answers**  
   The chatbot is optimized to deliver quick and precise responses to user queries, ensuring a smooth interaction.

2. **Integrated Personalized Training Model and LLaMA Model**  
   - The chatbot leverages a **personalized training model** which is trained with a json dataset to handle domain-specific queries effectively.  
   - For out-of-context or complex questions, the **LLaMA model** ensures the chatbot can still provide meaningful and relevant answers.

3. **MongoDB Integration for Admin Features**  
   - MongoDB is used to store and manage data, enabling advanced admin features such as user management, analytics, and customization of chatbot behavior.

4. **Context-Aware Responses**  
   The chatbot is designed to avoid unnecessary or out-of-context answers, ensuring that every response is relevant to the user's query.

5. **Hosted on Ngrok**  
   The chatbot is hosted on **Ngrok**, providing a secure and accessible tunnel for testing and deployment.

6. **Smooth Interface Design**  
   The chatbot features a clean and intuitive interface, making it easy for users to interact with and get the information they need.

7. **Accurate and Formatted Responses**  
   The chatbot not only provides accurate data but also formats the answers in a user-friendly manner, enhancing readability and usability.

---

## Setup Instructions

### Prerequisites
- Python 3.8 or higher
- MongoDB installed and running
- Ngrok account (for hosting)
- Required Python libraries (install via `pip install -r requirements.txt`)
- get api key for llama and ngrok

### Installation
1. Clone the repository:
   ```bash
   https://github.com/Rickyy-Sam07/chatbotV4.0.git
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up MongoDB:
   - Ensure MongoDB is running locally or provide the connection string for a remote instance.
   - in mongo db create a db as chatbot , inside it create two collection admin and prompts
4. Configure Ngrok:
   - Sign up for an Ngrok account and obtain your authtoken.
   - Run Ngrok to expose your local server:
   - Update the chatbot configuration with the Ngrok URL.

5. Run the chatbot:
   - you have to run ``` python step1.py ``` for once as it will train the  model and save it in your local after that run 
   ```bash
   python step2.py
   ```
   so that you can host the chatbot in ngrok
   after hosting replace the hosting url given by ngrok with sript.js ngrok link

7. Access the chatbot via the Ngrok URL or the local interface.

---

## Usage

### For Users
- Simply type your query into the chatbot interface, and it will provide a fast, accurate, and formatted response.
- The chatbot is designed to handle both specific and general questions, ensuring a smooth experience.

### For Admins
- Use the MongoDB-integrated admin panel to manage users, view analytics, and customize chatbot behavior.
- Access the admin features by logging in with your credentials.

---

## Customization

- **Personalized Training Model**: Update the training data in the `data/` directory to fine-tune the chatbot for your specific use case.
- **LLaMA Model**: Modify the configuration to adjust how the chatbot handles out-of-context questions.
- **Interface Design**: Customize the chatbot's interface by editing the frontend files in the `templates/` and `static/` directories.

---

## Troubleshooting

- **Chatbot not responding**: Ensure the server is running and Ngrok is properly configured.
- **MongoDB connection issues**: Verify your MongoDB credentials and ensure the database is accessible.
- **Inaccurate responses**: Update the training data or adjust the LLaMA model configuration.

---

## Contributing

We welcome contributions! If you'd like to improve the chatbot, please fork the repository and submit a pull request. For major changes, open an issue first to discuss the proposed changes.

---

## This is a demo of our chatbot:




https://github.com/user-attachments/assets/9970676a-3766-4edf-8f95-c5562465cc56



Thank you for using our chatbot! If you have any questions or feedback, feel free to reach out. Happy chatting! 🚀

