const { Post } = require('../models');

const postData = [
    {
        title: "What is MVC",
        body: "MVC stands for Model-View-Controller. It's a design pattern that breaks an application into three parts: the data (Model), the presentation of that data to the user (View), and the actions taken on any user interaction (Controller).",
        user_id: "3"
    },
    {
        title: "What is JavaScript?",
        body: "JavaScript is what is known as a client-side script. Most Web applications, such as a search engine, work because of an interaction between the user's device (e.g. computer, phone or tablet) and a remote server. The software on the remote server sends information to the client (i.e. the user's machine) and the software on the client side reads the information and renders a Web page on screen.",
        user_id: "2"
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;