export default class WindowListener {
    constructor(){
        this.#windowEventListener();
    }
    #windowEventListener(){
        window.addEventListener('click',windowClick);
        function windowClick(event){
            if(!event.target.matches('.dropdown button')){
                let dropdowns = document.querySelectorAll('.dropdown-content');
                dropdowns.forEach((element)=>{
                    if(element.classList.contains('show')){
                        element.classList.remove('show');
                    }
                });
            }
        }
    }
    
}