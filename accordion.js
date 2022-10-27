{/* <script src="./libs/jquery.js"></script>
<!-- accordion -->
<script> */}
    if($('.msg-user').length){
        $( ".notithing" ).remove();
    }
    if($('.msg-cont2').length){
        $( ".notithing" ).remove();
    }
    if($('.msg-user').length){
        $( ".notithing-own" ).remove();
    }
    if($('.msg-cont2').length){
        $( ".notithing-own" ).remove();
    }
    $('textarea').keyup(function() {
    $( ".notithing" ).remove();
 }); // удаление текста

    if($( ".notithing-own" ).length){
    $('.message-box').remove();
 } // удаление textarea


$(function(){
    $('.form').on('click', function(){
            $('.accordion').prop('disabled' , true)
    });
    });

// $(function(){
//     $('.block').on('click', function(){
//             $('.accordion').prop('disabled' , true)
//     });
//     });

    window.addEventListener("load", function(){
});

    $(".accordion").click(function() {
        $(".accordion").toggleClass("transparent");
        $(".panel").slideToggle("fast");
    });





// </script>
