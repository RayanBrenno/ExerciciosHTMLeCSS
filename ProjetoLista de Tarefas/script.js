let data = [];

function makeList(){
    
    document.querySelector('.list').innerHTML = "";

    data.forEach(task => {

        let li = document.createElement('li');

        li.innerHTML = `
            <input type="checkbox" id="task-${task.id}"></li><label for="task-${task.id}">${task.title}</label>
            <button type="button">x</button>
        `;

        li.querySelector('input').addEventListener("change", e =>{

            if (e.target.checked){
                li.classList.add('complete');
            } else{
                li.classList.remove('complete');
            }

        })

        li.querySelector('button').addEventListener('click', e =>{

            let button = e.target;
            let li = button.parentNode;
            let input = li.querySelector('input');
            let id= input.id;
            let idArray= id.split('-');
            let listId = idArray[1];
            let title = li.querySelector('label').innerText;

            if (confirm(`"Deseja realmente excluir a tarefa ${title}?`)){

                data=data.filter(task =>{
                    return task.id !== parseInt(listId);
                })
    
                makeList();
            }

        })

        document.querySelector('.list').append(li);
        
    });
}

document.querySelector('#new-task').addEventListener('keyup', e =>{

    if (e.key === 'Enter') {

        data.push({
            id: data.length+1,
            title: e.target.value

        });
        
        e.target.value="";
        makeList()

    }

});