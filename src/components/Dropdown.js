export default class Dropdown {
    constructor(){
        this.parentDiv = document.createElement('div');
        this.parentDiv.classList.add('dropdown');
        this.button = document.createElement('button');
        this.button.classList.add('dropbtn');
        this.button.textContent='Dropdown';
        this.childDiv = document.createElement('div');
        this.childDiv.classList.add('dropdown-content');
        this.childDiv.id = 'myDropdown';
        this.parentDiv.appendChild(this.button);
        this.parentDiv.appendChild(this.childDiv);
    }
    #buttonEventListener(action){
        function dropDownClick(event){
            let dropdowns = document.querySelectorAll('.dropdown-content');
                dropdowns.forEach((element)=>{
                    if(element.classList.contains('show')){
                        element.classList.remove('show');
                    }
                });
            const myDropDown = event.target.parentNode.lastElementChild;
            myDropDown.classList.toggle("show");
        }
        if(action === 'add'){
            this.button.addEventListener('click',dropDownClick);
        }
        if(action === 'remove'){
            this.button.removeEventListener('click',dropDownClick);
        }
    }
    appendDropdownTo(parent){
        this.#buttonEventListener('add');
        if(parent !==''){
            const dropdownLocation = document.querySelector(parent);
            if(dropdownLocation){
                dropdownLocation.appendChild(this.parentDiv);
            }
        }
    }
    removeDropdownFrom(parent){
        this.#buttonEventListener('remove');
        if(parent !==''){
            const dropdownLocation = document.querySelector(parent);
            if(dropdownLocation){
                dropdownLocation.removeChild(this.parentDiv);
            }
        }
    }
    addContent(...content){
        function createLink(link,text){
            let newContent = document.createElement('a');
            newContent.setAttribute('href',link);
            newContent.textContent = text;
            return newContent;
        }
        content.forEach((element)=>{
            let {link} = element;
            let {text} = element;
            if(link && text){
                this.childDiv.appendChild(createLink(link,text));
            }
            else if(!link && text){
                this.childDiv.appendChild(createLink('',text));
            }
        });
        
    }
    setButtonText(...text){
        this.button.textContent='';
        text.forEach((element)=>{
            this.button.textContent+=element;
        });
    }
    removeFirstContent(){
        if(this.divChild.firstChild){
            this.divChild.removeChild(this.divChild.firstChild);
        }
    }
    removeLastContent(){
        if(this.divChild.lastElementChild){
            this.divChild.removeChild(this.divChild.lastElementChild);
        }
    }
}