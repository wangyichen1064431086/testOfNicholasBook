var selectbox=document.forms[0].elements["location"];

var text=selectbox.options[0].text;
var value=selectbox.options[0].value;

console.log(text+" "+value);
selectbox.options[1].selected=true;
var selectedOption=selectbox.options[selectbox.selectedIndex];

//alert(selectbox.selectedIndex+selectedOption.value+selectedOption.text);

var newOption=document.createElement("option");
newOption.appendChild(document.createTextNode("Option text"));
newOption.setAttribute("value","Option value");

selectbox.appendChild(newOption);

var newOption2=new Option("Option text2","Option value2");
selectbox.appendChild(newOption2);

var newOption3=new Option("Option text3","Option value3");
selectbox.add(newOption3,0);

selectbox.removeChild(selectbox.options[0]);
selectbox.remove(1);

selectbox.options[0]=null;

function clearSelectbox(selectbox) {
    for(var i=0,len=selectbox.options.length;i<len;i++){
        selectbox.remove(0);
    }
}
//clearSelectbox(selectbox);

var selectbox2=document.forms[0].elements["location2"];
selectbox2.appendChild(selectbox.options[0]);

var optionToMove=selectbox.options[1];
selectbox.insertBefore(optionToMove,selectbox.options[optionToMove.index-1]);