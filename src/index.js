import "./styles/index.css";
import "./styles/css-reset.css";
import "./styles/modern-normalize.css";
import DropdownStyles from './components/DropdownStyles';
import Dropdown from './components/Dropdown';
import WindowListener from './components/WindowListener';

const dropDown = new Dropdown();
const dropDownStyle = new DropdownStyles();
new WindowListener();
dropDown.addContent({
    link:'#home',
    text:'first',
});
dropDown.addContent({
    link:'#safe',
    text:'second',
});
dropDown.addContent({
    //link:'#contact',
    text:'third',
});
const dropDownTwo = new Dropdown();
dropDownTwo.addContent({
    link:'#hoome',
    text:'home',
})
dropDown.appendDropdownTo('body');
dropDownTwo.appendDropdownTo('body');
dropDown.removeDropdownFrom('body');
dropDownStyle.showRule(0);
