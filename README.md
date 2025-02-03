---

# **Quiz Game with Node.js - Project Description**

## **Objective**
The goal of this project is to build a **Quiz Game** using Node.js. Students will create a server-side application that serves quiz questions from a file and allows users to answer them via a frontend interface. The project will test their understanding of Node.js modules like `http`, `fs`, and `path`, as well as their ability to create a simple web server and serve static files.

---

## **Project Requirements**
Students will implement the following:

### **1. Frontend**
- Create an **HTML file** to display the quiz interface.
- Use **CSS** to style the quiz interface.
- Write **JavaScript** to:
  - Fetch quiz questions from the server.
  - Display questions and options.
  - Allow users to select answers and track their score.

### **2. Backend**
- Create a **Node.js server** using the `http` module.
- Serve the frontend files (HTML, CSS, JS) using the `fs` and `path` modules.
- Serve quiz questions from a **JSON file** using the `fs` module.
- Handle requests to the `/questions` endpoint to return quiz questions.

### **3. Quiz Questions**
- We have already provided set of questions in json format, pls use that only.
---

## **Project Structure**
Students should organize their project as follows:

```
quiz-game/
├── public/
│   ├── index.html          # Frontend for the quiz game
│   ├── style.css           # Styles for the frontend
│   └── script.js           # Logic for fetching and displaying questions
├── questions.json          # Quiz questions and answers
├── server.js               # Node.js server logic
├── evaluate.js             # Test cases for evaluation
|-- .gitignore             # To ignore the node_modules folder
├── package.json            # Project dependencies and scripts
└── .github/workflows/      # GitHub Actions workflow
      └── evaluate.yml
```

---

## **Handling `node_modules`**
When using Node.js, the `node_modules` folder is created to store all the dependencies installed via `npm install`. Here’s how students should handle it:

### **1. Ignore `node_modules` in Version Control**
- Students should add `node_modules` to their `.gitignore` file to avoid uploading it to GitHub.
- Example `.gitignore`:
  ```
  node_modules/
  ```

### **2. Install Dependencies**
- Students should create a `package.json` file to define project dependencies and scripts.
- They can install dependencies locally using:
  ```bash
  npm install
  ```

### **3. GitHub Actions Setup**
- In the GitHub Actions workflow, students should include a step to install dependencies:
  ```yaml
  - name: Install dependencies
    run: npm install
  ```

---

## **Steps to Implement the Project**

### **1. Set Up the Project**
- Students must clone or fork the repository
- Initialize a Node.js project using `npm init`.

### **2. Implement the Frontend**
- Create an HTML file to display the quiz interface.
- Use CSS to style the interface.
- Write JavaScript to fetch questions from the server and handle user interactions.

### **3. Implement the Backend**
- Create a Node.js server using the `http` module.
- Serve the frontend files and quiz questions using the `fs` and `path` modules.
- Handle requests to the `/questions` endpoint to return quiz questions.

### **4. Write Test Cases**
- Write test cases to check if:
  - The server is running.
  - The `/questions` endpoint returns valid data.
  - The frontend correctly displays questions and tracks the score.

## **Evaluation Criteria**
The project will be evaluated based on the following:

1. **Functionality**:
   - Does the server start and serve the frontend?
   - Does the `/questions` endpoint return valid quiz questions?
   - Does the frontend correctly display questions and track the score?

2. **Code Quality**:
   - Is the code well-organized and easy to understand?
   - Are proper comments and documentation included?

3. **GitHub Actions**:
   - Does the workflow run successfully?
   - Do the test cases pass?

---

## **Submission Guidelines**
1. Students should push their code to a GitHub repository.
2. The repository should include:
   - All project files (`index.html`, `style.css`, `script.js`, `server.js`, `questions.json`, etc.).
   - A `.gitignore` file to exclude `node_modules`.
   - A GitHub Actions workflow file (`.github/workflows/evaluate.yml`).
3. Each group has to raise a pull request with this repo with name BatchNo._GroupNo. Also mentioning who are present during the contest from their group.

---

## **Tips for Students**
1. **Test Locally**:
   - Run the server locally using `npm start` and test the frontend in a browser.
2. **Debugging**:
   - Use `console.log()` to debug the server and frontend.
   - Check the browser’s developer tools for frontend errors.
3. **GitHub Actions**:
   - Monitor the workflow logs to identify and fix issues.

---