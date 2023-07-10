const readlineSync = require("readline-sync");

function completeTask(tasks) {
  if (tasks.length === 0) {
    console.log("No hay tareas para completar.");
    return;
  }

  const taskIndex = readlineSync.keyInSelect(
    tasks.map((task) => {
      const status = task.completed ? "[completed]" : "[incompleted]";
      return `${status} ${task.description}`;
    }),
    "Seleccione la tarea a completar:"
  );

  if (taskIndex === -1) {
    console.log("Cancelado.");
    return;
  }

  // Si la tarea estaba completada, cambiar su estado a incompleta; si estaba incompleta, cambiar su estado a completa
  tasks[taskIndex].completed = !tasks[taskIndex].completed;

  // Mostrar mensaje de acuerdo al nuevo estado de la tarea
  if (tasks[taskIndex].completed) {
    console.log("Tarea completada correctamente.");
  } else {
    console.log("Tarea marcada como incompleta.");
  }
}

module.exports = {
  completeTask,
};
