
$(document).ready(function(){

    $(document).on('click', '.delete_id', function(e){
        e.stopPropagation();
        e.preventDefault();
               
            var id= $(this).data('id');
            var button_id= $(this);
    
            console.log(id);
        
        $.ajax({

              method:"POST",
              url:"index.php?c=phone&a=delete",
              data:{
                
                id: id,

              }

        }).done(function(response){

            button_id.parent('td').parent('tr').remove();
            console.log(response);
    
        });//ajax delete DONE finishes

    });//delete_id click finishes
     
});//ready finishes
