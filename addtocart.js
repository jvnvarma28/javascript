function addtocart()
{
   
   // alert(  $('#mobileshoping_name').attr('ids'))
    var cart = "";
    var sideBar = window.localStorage.getItem("cart");
        if (typeof sideBar !== 'undefined' && sideBar !== null)
    {
        //alert(window.localStorage.getItem("cart"))
        cart = window.localStorage.getItem("cart");
    }
        cart = cart + "~" + $('#mobileshoping_name').attr('ids') + "`" + $('#mobileshoping_name').html() + '`' + $('#mobileshoping_price').html() + '`' + $('#mySlidesviewimgmySlides').attr('src');

    window.localStorage.setItem("cart", cart);
    checkcheckout();
    //alert(cart)
}