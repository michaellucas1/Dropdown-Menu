export default class Dropdown{
    constructor(){
        this.parentDiv = document.createElement('div');
        this.parentDiv.classList.add('dropdown');
        this.button = document.createElement('button');
        this.button.classList.add('dropbtn');
        this.button.textContent='Dropdown';
        this.childDiv = document.createElement('div');
        this.#buttonEventListener();
        this.childDiv.classList.add('dropdown-content');
        this.childDiv.id = 'myDropdown';
        this.parentDiv.appendChild(this.button);
        this.parentDiv.appendChild(this.childDiv);
        this.docFrag = new DocumentFragment();
        this.docFrag.appendChild(this.parentDiv);
        this.body = document.querySelector('body');
        this.body.appendChild(this.docFrag);
    }
    #buttonEventListener(){
        this.button.addEventListener('click',dropDownClick);
        function dropDownClick(event){
            console.log(event.target.parentNode.lastElementChild);
            const myDropDown = event.target.parentNode.lastElementChild;
            myDropDown.classList.toggle("show");
        }
    }
    addContent(...content){
        content.forEach((element)=>{
            let {link} = element;
            let {text} = element;
            let newContent = document.createElement('a');
            newContent.setAttribute('href',link);
            newContent.textContent = text;
            this.docFrag.appendChild(newContent);
        });
        this.childDiv.appendChild(this.docFrag);
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