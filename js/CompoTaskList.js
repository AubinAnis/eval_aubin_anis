class CompoTaskList {
    /**
     * @class
     * @summary Permet d'afficher la liste des tâches dans une div
     * Les paramètres obligatoire, à transmettre sous la forme
     * d'un objet, sont :
     * - taskList : les taskList à afficher
     * - element : objet HTMLElement du DOM dans lequel
     *   le code HTML doit être affiché
     * @param {*} param - Objet de paramétrage
     * @example
     * let tkList = new taskList('test', null);
     * let compoTkList = new CompoTaskList({
     *    task: tkList,
     *    element: document.getElementById('task')
     * }) 
     * compoTkList.render();
     */
    constructor(param) {
        this.param = param;
    }

    getTaskList() {
        return this.param.taskList;
    }

    getElement() {
        return this.param.element;
    }

    render() {
        let children = [];
        if (this.param.taskList) {
            console.log(this.param.taskList);
            for (let i = 0; i < this.param.taskList.getTasks().length; i++) {
                let item = document.createElement('div');
                this.param.element.appendChild(item);
                new CompoTask({
                    task: this.param.taskList.getTasks()[i],
                    element: item}).render();
            }
        }
    }
}