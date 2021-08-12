import { firstLoad } from "./storageManager";
import { displayTasks, displayUserProjects } from "./display";

firstLoad();
displayTasks("Inbox", "Due date");
displayUserProjects();