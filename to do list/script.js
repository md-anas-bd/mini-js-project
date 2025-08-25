const taskInput = document.getElementById('taskInput');
    const todoList = document.getElementById('todoList');
    const addbtn =  document.getElementById('addTaskBtn');

    addbtn.addEventListener("click",function () {
       const textTodo = taskInput.value.trim();
       if (textTodo==="") {
        alert("please write some Task");
        return;
        
       } 
       createNewtask(textTodo);
       taskInput.value =""; 
    })
    function createNewtask(text) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = text;
//Complete Button function 
        const completeBtn = document.createElement("button");
        completeBtn.textContent= "Complete";
        completeBtn.className= "complete";
        completeBtn.onclick = function () {
            li.classList.toggle("done");
            if (li.classList.contains("done")) {
               showNotification(`✅ Task "${text}" is complete`);
            } else{
                unmarked;
            }
            
        }

        const editBtn =document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className= "edit";
        editBtn.onclick= function () {
             const newtext = prompt("Edit your Task:", text);
             if (newtext !==null&& newtext.trim() !=="") {
                span.textContent = newtext.trim();
                showNotification(`The new Edited task is "${span.textContent} "`)
             } 
            
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent= "Delete";
        deleteBtn.className= "delete";
        deleteBtn.onclick= function () {
            li.remove();
            showNotification(`This "${text} is Deleted "`);
            
        }
        li.appendChild(span);
        todoList.appendChild(li);
        li.appendChild(completeBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);


    }
    function showNotification(message) {
        const container = document.getElementById('notificationContainer');
        const notif = document.createElement('div');
        notif.className = 'notification';
        notif.textContent = message;
        container.appendChild(notif);
        setTimeout(() => notif.remove(), 3500);
      }
    