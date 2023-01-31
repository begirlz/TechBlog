const { Comment } = require('../models');

const commentData = [
    {
        body: "As your program grows in size, you will be forced to consolidate common code fragments, or code maintenance will quickly become unmanageable. The only sane way to do that is to generalize your code so that it’s re-usable, and that is exactly what MVC accomplishes. But if your program is so small that you hardly have any common code fragments, then of course you shouldn’t use MVC.",
        user_id: "5",
        post_id: "1"
    },
    {
        body: " Many developers believe that JavaScript is inefficient and finicky, so they have made many improvements to the language over the years. Enterprising programmers have created JavaScript libraries - more concise languages constructed from the building blocks of JavaScript that are less complex and can be targeted for specific applications.",
        user_id: "4",
        post_id: "2"
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;