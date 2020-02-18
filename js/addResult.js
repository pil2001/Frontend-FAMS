
    $("#btn-result2 button").click(function(e){
        var selText = $(this).text();
        $("#lbl-result2").text(selText);
    });
    
    $("#btn-result1 button").click(function(e){
        var selText = $(this).text();
        $("#lbl-result1").text(selText);
    });
    
    $("#calendar1").click(function(e){
        $("#txt-calendar1").focus();
    });
    
    $(document).ready(function(){
        $("#txt-calendar1").datepicker();
    })
    
    $("#calendar2").click(function(e){
        $("#txt-calendar2").focus();
    });
    
    $(document).ready(function(){
        $("#txt-calendar2").datepicker();
    })

    $(document).ready(function(){
        // viewResult
        $('#closeResult').click(function(){
            $.get({
                url: 'view_result.html',
                success: function(response){
                    $('.main-content').html(response);
                }
            });
            
            // prevent the link's default
            return false;
        });
    });
