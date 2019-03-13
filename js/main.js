let list = new TaskList();
let tasks = new CompoTaskList({
    element: document.getElementById('tasks'),
    taskList: list
});

let tâche1 = new Task('Première_tâche', '13/03');
let tâche2 = new Task('Deuxième_tâche', '14/03');
let tâche3 = new Task('Troisième_tâche', '15/03');

list.add(tâche1);
list.add(tâche2);
list.add(tâche3);

tasks.render();