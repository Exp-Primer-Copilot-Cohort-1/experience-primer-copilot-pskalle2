// Create web server
// Launch server
// Create a route that takes the path /comments
// This route should return a JSON object with the following data:
// {
//     "comments": [
//         {
//             "username": "Todd",
//             "comment": "lol that is so funny"
//         },
//         {
//             "username": "Skyler",
//             "comment": "I like to go birdwatching with my dog"
//         },
//         {
//             "username": "Sk8erBoi",
//             "comment": "Plz delete your account, Todd"
//         },
//         {
//             "username": "onlysayswoof",
//             "comment": "woof woof woof"
//         }
//     ]
// }
// Make sure to set the Content-Type header to application/json
// Launch the server and test the route with Postman

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({
        "comments": [
            {
                "username": "Todd",
                "comment": "lol that is so funny"
            },
            {
                "username": "Skyler",
                "comment": "I like to go birdwatching with my dog"
            },
            {
                "username": "Sk8erBoi",
                "comment": "Plz delete your account, Todd"
            },
            {
                "username": "onlysayswoof",
                "comment": "woof woof woof"
            }
        ]
    });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

