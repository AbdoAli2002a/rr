var message="عبدالرحمن علي -موقع تعليمي"     
var message=message+"       " 
i="0"			         
var temptitle=""               
var speed="150"                 

function titler(){
if (!document.all&&!document.getElementById)
return
document.title=temptitle+message.charAt(i)  
temptitle=temptitle+message.charAt(i)      
i++					    
if(i==message.length)			    
{
i="0"					   
temptitle=""				    
}
setTimeout("titler()",speed) 		   
}

window.onload=titler

function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  
