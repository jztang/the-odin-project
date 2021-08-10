import { firstLoad } from "./storageManager";
import { displayTasks, displayUserProjects } from "./display";

firstLoad();
displayTasks("Due date");
displayUserProjects();