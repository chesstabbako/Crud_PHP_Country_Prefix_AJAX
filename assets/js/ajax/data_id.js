$(document).ready(function(){
    $(document).on('click', '.edit_id',function (e) {
      e.stopPropagation();
      e.preventDefault();
      $(".editNew").show(500);

    var id= $(this).data('id');
   console.log(id);
    $.ajax({
        method: "POST",
        url: "index.php?c=phone&a=dataById",
        data:{
           id 
        }
      }).done(function (response) { 
        let phone= JSON.parse(response);
        $('#idU').val(phone[0]['id']);
        $('#prefixU').val(phone[0]['prefix']);
        $('#numberU').val(phone[0]['number']);
        $('#nameU').val(phone[0]['name']);

      }); //ajax create finishes..

    });
 
});//ready finishes