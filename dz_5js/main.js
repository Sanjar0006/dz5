const input = document.getElementById('input');
const createButton = document.getElementById('create_button');
const todolist = document.getElementById('todo_list');

const createTodo = () => {
    if (!input.value.trim()) {
        return alert('напиши что нибудь');
    }

    const div = document.createElement('div');
    const text = document.createElement('h3');
    div.setAttribute('class', 'block_text');
    text.innerHTML = input.value;
    div.appendChild(text);

    const editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit_button');
    editBtn.textContent = 'edit';
    editBtn.onclick = () => {
        const edited = prompt("Введите измененный текст").trim();
        if (edited === "") {
            return alert("напиши что нибудь");
        } else {
            text.innerText = edited;
        }
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete_button');
    deleteBtn.textContent = 'delete';
    deleteBtn.onclick = () => {
        todolist.removeChild(div);
    };

    const buttons_div = document.createElement('div');
    buttons_div.setAttribute('class', 'buttons_div');
    buttons_div.appendChild(editBtn);
    buttons_div.appendChild(deleteBtn);
    div.appendChild(buttons_div);

    todolist.appendChild(div);
    input.value = "";
};

createButton.addEventListener('click', createTodo);