function complete(){
var habitcircle=document.getElementsByClassName("habit");
var completed=document.getElementsByClassName("completed-list")[0];
for(var i=0;i<habitcircle.length;i++)
{
    habitcircle[i].onclick=function()
    {
        var task = this.parentElement;
           completed.appendChild(task);
            // task.style.display = "none";
    }
}
}
complete();
