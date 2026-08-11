function complete(){
var habitcircle=document.getElementsByClassName("habit");
for(var i=0;i<habitcircle.length;i++)
{
    habitcircle[i].onclick=function()
    {
        var task = this.parentElement;
            task.style.display = "none";
    }
}
}
complete();