let totalSelectedCount = 0;
let totalTask = 0;
$(document).ready(function(){
    $.get("https://jsonplaceholder.typicode.com/todos", function(todoList) {
        console.log(todoList);
        totalTask = todoList.length;
        for(const item of todoList){
           if(item.completed === true){
               totalSelectedCount++;
              const markup = `<tr><td><input type ='checkbox' checked disabled=true></td><td>${item.title}</td></tr>`;
              $("table tbody").append(markup);
           } else{
              const markup = `<tr><td><input type='checkbox' id = "${item.id}"onclick="selectItem(${item.id})"></td><td>${item.title}</td></tr>`;
              $("table tbody").append(markup);
            }
        } 
        document.getElementById(status);
        $("#status").text(`You have completed ${totalSelectedCount} out of ${totalTask} tasks.`);
        console.log(status);
    });   
});

let selectedCount = 0;
function selectItem(itemId){
    let checkBox = document.getElementById(itemId);
    if(checkBox.checked){
        selectedCount++;
        totalSelectedCount++;
        let promise = new Promise(function(resolve,reject){
            if(selectedCount === 5){
                resolve('Congrats!!! You have completed five tasks.');
            }
        });
        promise.then(function(sucessmessage){
            alert(sucessmessage);
        });
    } else {
        selectedCount--;
        totalSelectedCount--;
    }
    $("#status").text(`You have completed ${totalSelectedCount} out of ${totalTask} tasks`);
}


    
    





    

