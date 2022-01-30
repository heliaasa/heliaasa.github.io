let mobileMenuHidden = true;
let closedMenu = '<div class="line1"></div><div class="line2"></div>';
let openedMenu = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';

$('#mobileMenuButton').on('click',function(e){
    if (!mobileMenuHidden){
        $('#mobileMenu').hide();
        $('#mobileBasketIcon').show();
        $('#mobileMenuButton').html(closedMenu);
        $('body').css('overflow','visible');
        $('.nav-items-small').css('background-color', 'rgba(0,0,0,0.8)');
        mobileMenuHidden = !mobileMenuHidden;
    } else {
        $('#mobileMenu').show();
        $('#mobileBasketIcon').hide();
        $('#mobileMenuButton').html(openedMenu);
        $('body').css('overflow','hidden');
        $('.nav-items-small').css('background-color', 'rgba(0,0,0,1)');
        mobileMenuHidden = !mobileMenuHidden;
    }
});
