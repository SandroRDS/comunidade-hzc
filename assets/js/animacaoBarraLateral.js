var menu = document.querySelector("#menu_lateral");
var botaoMenu = document.querySelector("#menu");
var menuAtivo = false;

function aparecerEsconderBarra()
{
    if(menuAtivo)
    {
        menuAtivo = false;
        menu.style.transform = "translate(-100%)";
    }
    else
    {
        menuAtivo = true;
        menu.style.transform = "translate(0%)";
    }
}

botaoMenu.onclick = aparecerEsconderBarra;
