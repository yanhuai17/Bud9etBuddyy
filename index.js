const express = require('express');
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to BudgetBuddy! Our personal finance management app helps you track your expenses, set savings goals, and make informed budgeting decisions.');
});

// Define route for the expense tracking page
app.get('/expenses', (req, res) => {
  res.send('Track your expenses with our intuitive dashboards and customizable alerts, and get insights into your spending habits.');
});

// Define route for the savings goals page
app.get('/savings-goals', (req, res) => {
  res.send('Set savings goals and track your progress with our easy-to-use savings goal tracker.');
});

// Define route for the financial reporting page
app.get('/financial-reporting', (req, res) => {
  res.send('Get a complete overview of your finances with our financial reporting tools, including income statements, balance sheets, and cash flow statements.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});