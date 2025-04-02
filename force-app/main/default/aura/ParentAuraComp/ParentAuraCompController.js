({
    handleClick: function(component, event, helper) {
        component.find("childlwc").showmessage("Hello from Parent Aura Component");
    },
    sendMessage :function(component, event, helper) {
        alert("send message to child");
    }



})