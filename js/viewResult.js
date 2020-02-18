$(document).ready(function(){
    // updateResult
    $('#updateResult').click(function(){
        $.get({
            url: 'add_result.html',
            success: function(response){
                $('.main-content').html(response);
            }
        });
        
        // prevent the link's default
        return false;
    });
});