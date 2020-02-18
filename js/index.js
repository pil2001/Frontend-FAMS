$(document).ready( function(){
    // Collapse Button
    $('.btn-expand-collapse').click(function(e) {
        $('.navbar-primary').toggleClass('collapsed');
        if($('.icon-none').css('display')=="none"){
            $('.icon-none').css({display: 'block'});
        }else{
            $('.icon-none').css({display: 'none'});
        }
        if($('.role').css('display')=="none"){
            $('.role').css({display: 'block'});
        }else{
            $('.role').css({display: 'none'});
        }
    });

    //Send Request
    $('a#candManager').click(function(){
        $.get({
            url: 'candidateList.html',
            success: function(response){
                $('.main-content').html(response);
            }
        });
        
        // prevent the link's default
        return false;
    });

});
