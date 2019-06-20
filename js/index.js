document.addEventListener("DOMContentLoaded", () => {
        document.querySelector('#button_save').addEventListener("click", (event) => {
            event.preventDefault();
            const saveNotes = document.querySelector('#notes_title');
            const saveMessage = document.querySelector('#subject');
            const myul = document.querySelector("#notes_list");
            const my = document.createTextNode(myul);
            const li = document.createElement("li");
            const key = saveNotes.value;
            const value = saveMessage.value;
            console.log(`${key}, ${value}`);
            if (key === '' || value === '') {
                alert('Please Add Titel and Message');
            }
            else {
                localStorage.setItem(key, value, JSON.stringify([]));
                //location.reload();
            }
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
                myul.innerText += `${key}: ${value}`;
                li.appendChild(my);
                //window.location.replace("../../index.html");
            }
            
            saveMessage.addEventListener('click', (event) =>{
                event.preventDefault();
                console.log(saveMessage.value);
            });
            
        //document.querySelector("#notes_list").appendChild(li);

        
    });
});