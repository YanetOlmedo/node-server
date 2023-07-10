const readlineSync = require("readline-sync");

function addTask(tasks) {
  return new Promise((resolve, reject) => {
    const description = readlineSync.question("Descripción de la tarea: ");

    // Validación de la descripción de la tarea
    if (!description.trim()) {
      reject(new Error("La descripción de la tarea no puede estar vacía."));
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      description,
      completed: false,
    };

    tasks.push(newTask);

    console.log("Tarea añadida correctamente.");

    resolve(newTask);
  });
}

module.exports = {
  addTask,
};
