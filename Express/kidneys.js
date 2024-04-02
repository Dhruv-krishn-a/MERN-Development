// Require the Express.js library and assign it to the variable express
const express = require(`express`);

// Create an instance of the Express application
const app = express();

// Define an array of users, each containing information about their kidneys
var users = [{
    name: "Dhruv",
    kidney: [{
        healthy: false
    }]
}];

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route handler for GET requests to the root URL ("/")
app.get("/", function(req, res) { // Handles GET requests to the root URL
    // Retrieve the array of kidneys for the user "Dhruv"
    const Dhruvkidneys = users[0].kidney;

    // Calculate the total number of kidneys for the user "Dhruv"
    const noOfkidney = Dhruvkidneys.length;

    // Initialize a variable to count the number of healthy kidneys
    let noOfhealthykidney = 0;

    // Iterate through each kidney to count healthy ones
    for (let i = 0; i < Dhruvkidneys.length; i++) {
        // Check if the current kidney is healthy
        if (Dhruvkidneys[i].healthy) {
            // Increment the count of healthy kidneys
            noOfhealthykidney++;
        }
    }

    // Calculate the number of unhealthy kidneys
    const noOfunhealthykidney = noOfkidney - noOfhealthykidney;

    // Send a JSON response containing information about the kidneys
    res.json({
        noOfkidney, // Send the total count of kidneys
        noOfhealthykidney, // Send the count of healthy kidneys
        noOfunhealthykidney, // Send the count of unhealthy kidneys
    });
});

// Define a route handler for POST requests to the root URL ("/")
app.post("/", (req, res) => { // Handles POST requests to the root URL
    // Retrieve the value of the 'isHealthy' property from the request body
    const isHealthy = req.body.isHealthy;

    // Push a new object representing a kidney into the kidney array of the first user in the 'users' array
    users[0].kidney.push({
        healthy: isHealthy // Set the 'healthy' property of the new kidney object to the value of 'isHealthy'
    });

    // Send a JSON response confirming the completion of the operation
    res.json({
        msg: "Done!" // Send a confirmation message
    });
});

app.put("/" , (req, res) =>{
    //make all the kidney to be healthy .
for(let i =0;i<users[0].kidney.length;i++){
    users[0].kidney[i].healthy = true;
}
// no res.json , dont need to send data , but do tell that request has ended
res.json({})
})

app.delete("/", (req , res) => {
    const newKidney = [];
    for(let i =0 ; i< users[0].kidney.length ; i++){
        if(users[0].kidney[i].healthy){
            newKidney.push({
                healthy: true
            })
        }
    }
    users[0].kidney = newKidney;
    res.json({
        msg: " done "
    })
})

// Start the server and make it listen on port 3000
app.listen(3000); // Start the server and listen on port 3000