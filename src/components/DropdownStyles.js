export default class DropdownStyles {
    constructor(){
        this.style = document.createElement('style');
        this.styleArray =[];
        this.counter = 0;
        document.head.appendChild(this.style);
        const dropBtn = `
            .dropbtn {
                background-color: #3498DB;
                color: white;
                padding: 16px;
                font-size: 16px;
                border: none:
                cursor: pointer  
            }`;
        this.styleArray.push(dropBtn);
        const dropBtnHoverFocus = `
            .dropbtn:hover,
            .dropbtn:focus {
                background-color: #2980B9;
            }`
        this.styleArray.push(dropBtnHoverFocus);
        const dropDown = `
            .dropdown {
                position: relative;
                display: inline-block;
            }`;
        this.styleArray.push(dropDown);
        const dropDownContent = `
            .dropdown-content {
                display: none;
                position: absolute;
                background-color: #f1f1f1;
                min-width: 160px;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                z-index: 1;
            }`;
        this.styleArray.push(dropDownContent);
        const dropDownContentA = `
            .dropdown-content a {
                color: black;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
            }`;
        this.styleArray.push(dropDownContentA);
        const dropDownContentAHover = `
            .dropdown-content a:hover {
                background-color: #ddd;
            }`;
        this.styleArray.push(dropDownContentAHover);
        const show = `
            .show {
                display: block;
            }`;
        this.styleArray.push(show);
        this.styleArray.forEach((rule)=>{
            this.style.sheet.insertRule(rule,this.counter)
            this.counter +=1;
        });
    }
    showRule(location){
        if(location <= this.styleArray.length && location >= 0){
            console.log(this.styleArray[location]);
            return;
        }
        let rules='';
        this.styleArray.forEach((rule)=>{
            rules += rule;
        });
        console.log(rules);
    }
}