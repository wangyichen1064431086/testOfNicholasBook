var EventUtil={
    addHandler:function(element,type,handler){
        if (element.addEventListener) {
            element.addEventListener(type,handler,false);
        }
        else if (element.attachEvent) {
            element.attachEvent(type,handler);
        }
        else{
            element["on"+event]=handler;
        }
    },
    removeHandler:function(element,type,handler){
        if (element.removeEventListener) {
            element.removeEventListener(type,handler,false);
        }
        else if (element.detachEvent) {
            element.detachEvent("on"+type,handler);
        }
        else{
            element["on"+type]=null;
        }
    },
    getEvent:function(event){
        return event? event:window.event;
    },
    getTarget:function(event){
        return event.target||event.srcElement;
    },
    preventDefault:function(event){
        if (event.preventDefault) {
            event.preventDefault();
        }
        else if(event.returnValue){
            event.returnValue =false;
        }
    },
    getRelatedTarget:function(event){
        if (event.relatedTarget) {
            return event.relatedTarget;
        }
        else if (event.toElement) {
            return event.toElement;
        }
        else if (event.fromElement) {
            return event.fromElement;
        }
        else{
            return null;
        }
    },
   getButton: function(event){
        if (document.implementation.hasFeature("MouseEvents","2.0")) {
            return event.button;
        }
        else{
            switch (event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    getWheelDelta:function(event){
        if (event.wheelDelta) {
            return(client.engine.opera&&client.engine.opera<9.5? -event.wheelDelta:event.wheelDelta);
        }
        else{
            return -event.detail*40;
        }
    },
    getCharCode: function(event){
        if (typeof event.charCode=="number") {
            return event.charCode;
        }
        else{
            return event.keyCode;
        }
    },
    getClipboardText:function(event){
        var clipboardData=(event.clipboardData||window.clipboardData);
        return clipboardData.getData("text");
    },
    setClipboardText: function(event,value){
        if (event.clipboardData) {
            return event.clipboardData.setData("text/plain",value);
        }
        else if (window.clipboardData) {
            return window.clipboardData.setData("text",value);
        }
    }
};
/*
var textbox=document.forms[0].elements["textbox1"];
EventUtil.addHandler(textbox,"keypress",function(event){
    event=EventUtil.getEvent(event);
    var target=EventUtil.getTarget(event);
    var charCode=EventUtil.getCharCode(event);
    
    if (!/\d/.test(String.fromCharCode(charCode))&&charCode>9&&!event.ctrlKey) {
        EventUtil.preventDefault(event);
    }
});

EventUtil.addHandler(textbox,"paste",function(event){
    event=EventUtil.getEvent(event);
    var text=EventUtil.getClipboardText(event);
    
    if (!/^\d*$/.test(text)) {
        EventUtil.preventDefault(event);
    }
});

(function(){
    function tabForward(event) {
        event=EventUtil.getEvent(event);
        var target=EventUtil.getTarget(event);
        
        if (target.value.length==target.maxLength) {
            var form=target.form;
            
            for(var i=0,len=form.elements.length;i<len;i++){
                if (form.elements[i]==target) {
                    if (form.elements[i+1]) {
                        form.elements[i+1].focus();
                    }
                    return;
                }
            }
        }
    }
    var textbox1=document.getElementById("txtTel1");
    var textbox2=document.getElementById("txtTel2");
    var textbox3=document.getElementById("txtTel3");
    
    EventUtil.addHandler(textbox1,"keyup",tabForward);
    EventUtil.addHandler(textbox2,"keyup",tabForward);
    EventUtil.addHandler(textbox3,"keyup",tabForward);
})();

var isRequiredSupported="required" in document.createElement("input");
console.log(isRequiredSupported);*/

EventUtil.addHandler(window,"load",function(){
    frames["richedit"].document.designMode="on";
});