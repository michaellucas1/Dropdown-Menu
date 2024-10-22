import "./styles/index.css";
import "./styles/css-reset.css";
import "./styles/modern-normalize.css";
import DropdownStyles from './components/DropdownStyles';
import Dropdown from './components/Dropdown';
console.log("Hello World");

const dropDown = new Dropdown();
new DropdownStyles();
dropDown.addContent({
    link:'www.google.com',
    text:'first',
});
dropDown.addContent({
    link:'www.google.com',
    text:'second',
});
dropDown.addContent({
    link:'www.google.com',
    text:'third',
});
