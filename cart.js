function show_detail_product_cart(){
    document.getElementById("hidden_detail_product_cart").style.display="block";
    document.getElementById("product_header_detail_list").style.display="block";

    document.getElementById("show_detail_product_cart").style.display="none";
    
}

function hidden_detail_product_cart(){
    document.getElementById("hidden_detail_product_cart").style.display="none";
    document.getElementById("product_header_detail_list").style.display="none";

    document.getElementById("show_detail_product_cart").style.display="block";
    
}

function choosegetgoods_tab_1(){
    var tab =document.getElementById("delivery-address-detail");
    tab.style.display = "block";   


    document.getElementById("delivery-product-body-notes").style.display="block";

    document.getElementById("delivery-address-detail-tab-2").style.display = "none";

    document.getElementById("choose-tab-2-cb").checked = false;

}

function choosegetgoods_tab_2(){
    var tab =document.getElementById("delivery-address-detail");
    tab.style.display = "none";   
    var notes = document.getElementById("delivery-address-notes");
    notes.style.display = "none";    
    document.getElementById("delivery-address-detail-tab-2").style.display = "block";

    document.getElementById("delivery-product-body-notes").style.display="none";

    document.getElementById("choose-tab-2-cb").checked = true;
}
