$(document).ready(function(){
    
    $('#birthday').datepicker({
        format: 'dd-MM-yy',
        maxDate : new Date
    })
    $('#showCalendar').click(function(){
        $('#birthday').focus();
    });

    // CALL VIEW
    $('.viewResult').click(function(){
        $.get({
            url: 'view_result.html',
            success: function(response){
                $('.main-content').html(response);
            }
        });
        
        // prevent the link's default
        return false;
    });
    $('#addCandidate').click(function(){
        $.get({
            url: 'candidate.html',
            success: function(res){
                $('.main-content').html(res);
            }
        })
    })
});