$(document).ready(function(){
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var today= new Date();
    var mm = monthNames[today.getMonth()];
    var dd = today.getDate();
    var yyyy = today.getFullYear();
    var defaultDate = dd + '-' + mm + '-' + yyyy;
    // $('#applicationDate').val(new Date().toLocaleDateString("en-us",{
    //     year:"2-digit", month: "short", day : "2-digit"
    // }));
    $('#applicationDate').val(defaultDate);
    $('#applicationDate').datepicker({
        dateFormat: 'dd-M-yy',
        maxDate : new Date
    });
    $('#graduationYear').datepicker({
        dateFormat : 'MM-yy',
        maxDate : new Date
    });
    $('#application').click(function(){
        $('#applicationDate').focus();
    })
    $('#graduation').click(function(){
        $('#graduationYear').focus();
    })
    
    $('#cv').change(function(){
        $('#file-name').text(this.files[0].name);
    })
    var validator = $('#submitCandidate').validate({
        rules: {
            channel :{
                required: true
            },
            name :{
                required: true
            },
            dateOfBirth: {
                required: true
            },
            phone: {
                required: true
            },
            email:{
                required: true
            }
        },
        errorPlacement: function(){
            return false;
        }
    })
    //checksubmit
    $('#submit').click(function(){
        alert('Insert Here');
        if($('#submitCandidate').valid()){
            alert("Ok form");
        }
    })
})
function checkUni(checkbox){
    var checkboxes = document.getElementsByName('universityCheck')
    checkboxes.forEach((item) => {
        if( item !== checkbox ) item.checked = false
    })
    var name = $(checkbox).val();
    $('#university').text(name);
    $('#menuUni').dropdown('toggle');

}
function checkNewUni(checkbox){
    var checkboxes = document.getElementsByName('universityCheck')
    checkboxes.forEach((item) => {
        if( item !== checkbox ) item.checked = false
    })
    $('#newUniversity').keyup(function(e){
        if(e.keyCode== 13){
            $('#university').text($('#newUniversity').val());
            $('#menuUni').dropdown('toggle');
        }
    })
    $('#addUni').attr("hidden",false);
}
function checkFacu(checkbox){
    var checkboxes = document.getElementsByName('facuCheck')
    checkboxes.forEach((item)=>{
        if(item !=checkbox) item.checked = false
    })
    var name = $(checkbox).val();
    $('#facutly').text(name);
    $('#menuFacu').dropdown('toggle');
}
function checkNewFacu(checkbox){
    var checkboxes = document.getElementsByName('facuCheck')
    checkboxes.forEach((item)=>{
        if(item !=checkbox) item.checked = false
    })
    $('#newFacutly').keyup(function(e){
        if(e.keyCode==13){
            $('#facutly').text($('#newFacutly').val());
            $('#menuFacu').dropdown('toggle');
        }
    })
    $('#addFacu').attr("hidden",false);
}
