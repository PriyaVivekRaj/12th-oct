var label=createlabels("label","for","First","FirstName:");
var br1=createlinebreak("br");
var input=createinput("input","type","text","id","First");
var br2=createlinebreak("br");

var label2=createlabels("label","for","middle","MiddleName:");
var br3=createlinebreak("br");
var middleinput=createinput("input","type","text","id","middle");
var br4=createlinebreak("br");

var label3=createlabels("label","for","last","LastName:");
var br5=createlinebreak("br");
var lastinput=createinput("input","type","text","id","last");
var br6 = createlinebreak("br");

var label4=createlabels("label","for","last","Phone:");
var br7=createlinebreak("br");
var phoneinput=createinput("input","type","text","id","phone");
var br8=createlinebreak("br");
document.body.append(label, br1, input, br2, label2, br3, middleinput, br4,
    label3, br5, lastinput, br6, label4,br7,phoneinput,br8);


function createlabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}
//it is returning an HTML element
//<label for="email">Mail</label>

function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function createlinebreak(tagname){
var ele=document.createElement(tagname);
return ele;
}

