function changes_heigth(sourcesHeigth, receiverHeigth){

    if(window.innerWidth<768){

        document.getElementsByTagName('body')[0].classList.remove('hide-all');

        return;
    }

    var h_mainblock = document.getElementsByClassName(sourcesHeigth)[0].offsetHeight;

    document.getElementsByClassName(receiverHeigth)[0].style.height = ""+h_mainblock+"px";

    document.getElementsByTagName('body')[0].classList.remove('hide-all');

}

window.onload = function (){

    var h_menu = document.getElementsByClassName('menu')[0].offsetHeight;

    changes_heigth('mainblock', 'menu');

        window.onresize = function(){

            if(window.innerWidth<768)
            {
                document.getElementsByClassName('menu')[0].style.height = ""+h_menu+"px";
            }
            else
            {
                changes_heigth('mainblock', 'menu');
            }

        }

};
