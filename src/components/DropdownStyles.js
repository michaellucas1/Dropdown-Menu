export default class DropdownStyles {
    constructor(){
        this.style = document.createElement('style');
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
        this.style.sheet.insertRule(dropBtn,0);
        const dropBtnHoverFocus = `
            .dropbtn:hover,
            .dropbtn:focus {
                background-color: #2980B9;
            }`
        this.style.sheet.insertRule(dropBtnHoverFocus,1);
        const dropDown = `
            .dropdown {
                position: relative;
                display: inline-block;
            }`;
        this.style.sheet.insertRule(dropDown,2);
        const dropDownContent = `
            .dropdown-content {
                display: none;
                position: absolute;
                background-color: #f1f1f1;
                min-width: 160px;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                z-index: 1;
            }`;
        this.style.sheet.insertRule(dropDownContent,3);
        const dropDownContentA = `
            .dropdown-content a {
                color: black;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
            }`;
        this.style.sheet.insertRule(dropDownContentA,4);
        const dropDownContentAHover = `
            .dropdown-content a:hover {
                background-color: #ddd;
            }`;
        this.style.sheet.insertRule(dropDownContentAHover,5);
        const show = `
            .show {
                display: block;
            }`;
        this.style.sheet.insertRule(show,6);
        console.log(this.style.sheet);
    }
}