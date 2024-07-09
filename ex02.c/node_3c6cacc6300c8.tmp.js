/*
    Crie uma aplicação de lista de tarefas que permita ao usuário:
    Adicionar novas tarefas.
    Marcar tarefas como concluídas.
    Remover tarefas da lista.
    Exibir todas as tarefas na tela.
*/

let todoList = {
    task: []
};

function addTask(description) {
    const id = todoList.task.length + 1;
    const date = new Date().toISOString().split('T')[0]; //00-00-0000 corta o T00
    todoList.task.push({ id, description, date, completed: false })
}

function completeTask(id) {
    const task = todoList.task.find(task => task.id === id);
    if (task) {
        task.completed = true;
    } else {
        console.log('Task Not Found with id: '+id);
    }
}

function removeTask(id) {
    const taskId = todoList.task.findIndex(task => task.id === id);
    if (taskId !== -1){
        todoList.task.splice(taskId, 1);
        console.log(`Task ID ${id} removed`);
    }else
        console.log('Task Not Found with id: '+id);
}

function showToDoList() {
    todoList.task.forEach(task => {
        let tasks = `${task.description}, ${task.date}, complete: ${task.completed}`;
        console.log(tasks);
    });
}

addTask('mercado');
addTask('lavar roupa');
addTask('fazer comida');
completeTask(3);
removeTask(3)
showToDoList();
