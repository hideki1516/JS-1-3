let tasks = ['掃除', '買い物', '散歩'];
const line = '=======================';
const message = '現在持っているタスク一覧'

const showList = () => {
    console.log(line);
    console.log(message);
    console.log(line);

    for(let task of tasks){
        console.log(`${tasks.indexOf(task)} : ${task}`);
    }
}

showList();

let taskAdd = prompt('タスクを追加してください');

if(taskAdd === ''){
    prompt('タスクを追加してください');
} else {
    showList(tasks.push(taskAdd));
};