let tasks = JSON.parse(localStorage.getItem("tasks"));
if (tasks === null) tasks = [];

let userProjects = JSON.parse(localStorage.getItem("userProjects"));
if (userProjects === null) userProjects = [];
