const readlineSync = require("readline-sync");

function addTask(tasks) {
  const description = readlineSync.question("Descripción de la tarea: ");

  tasks.push({
    indicator: tasks.length + 1,
    description,
    completed: false,
  });

  console.log("Tarea añadida correctamente.");
}

module.exports = {
  addTask,
};
