// List of sales amounts for each day
let sales = [455, 505, 340, 780, 690, 880, 900, 685, 835, 754];

// List of customers for each day
let customers = [25, 30, 20, 35, 36, 32, 44, 45, 34, 15];

// List of days of the week
let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Filter the sales to get only the first week's sales (first 7 days)
let firstWeekSales = sales.filter((element, index) => index < 7);
console.log("First Week Sales: " + firstWeekSales);

// Filter the customers to get only the first week's customers (first 7 days)
let firstWeekCustomers = customers.filter((element, index) => index < 7);
console.log(`First Week Customers: ${firstWeekCustomers}`);

// Calculate the total sales for the first week
let firstWeekSalesSum = firstWeekSales.reduce((prev, curr) => prev + curr, 0);
console.log(`First Week Sales Sum: ${firstWeekSalesSum}`);

// Calculate the total number of customers for the first week
let firstWeekCustomersSum = firstWeekCustomers.reduce((prev, curr) => prev + curr);
console.log(`First Week Customers Sum: ${firstWeekCustomersSum}`);

// Calculate the average sales per day for the first week
let firstWeekAverage = firstWeekSalesSum / 7;

// Calculate the average sales per customer for the first week
let firstWeekCustomerAvg = firstWeekSalesSum / firstWeekCustomersSum;

console.log(`First Week Average: ${firstWeekAverage}`);
console.log(`First Week Customer Average: ${firstWeekCustomerAvg}`);

// Calculate the average sales per customer for each day of the first week
let firstWeekDailyAverage = firstWeekSales.map((dailySales, index) => dailySales / firstWeekCustomers[index]);

// Label each daily average with the corresponding day of the week and format to 2 decimal places
let labeled = firstWeekDailyAverage.map((label, index) => daysOfTheWeek[index] + " " + label.toFixed(2));

// Combine all labeled daily averages into a single string
let labeledString = labeled.reduce((prev, curr) => prev + ", " + curr);
console.log(labeledString);
