// Make sure you add the jQuery Library and jQuery UI
$(function() {
    $("#accordion").accordion({
        // You can change this to auto or fill for more info view https://api.jqueryui.com/accordion/#option-heightStyle
        heightStyle: "content",
        // Set this to true if you want the active accordion to remain open
        collapsible: true,
        // SSetting active to false will collapse all panels. This requires the collapsible option to be true.
        active: false
    });
    //initialize accordion            
    $("#accordion").accordion();
    //set accordion header options
    $("#accordion").accordion("option", "icons", {
        // You can change this to differnt Font Awesome class  
        'header': 'icon-expand',
        // You can change this to differnt Font Awesome class
        'activeHeader': 'icon-collapse'
    });
});

// Make sure you add the jQuery Library and jQuery UI
$(function() {
    $("#accordion2").accordion({
        // You can change this to auto or fill for more info view https://api.jqueryui.com/accordion/#option-heightStyle
        heightStyle: "content",
        // Set this to true if you want the active accordion to remain open
        collapsible: true,
        // SSetting active to false will collapse all panels. This requires the collapsible option to be true.
        active: false
    });
    //initialize accordion            
    $("#accordion2").accordion();
    //set accordion header options
    $("#accordion2").accordion("option", "icons", {
        // You can change this to differnt Font Awesome class  
        'header': 'icon-expand',
        // You can change this to differnt Font Awesome class
        'activeHeader': 'icon-collapse'
    });
});