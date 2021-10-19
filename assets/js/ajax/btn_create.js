$(document).ready(function () {
    //$("#msg-success").hide();
    $(".btn_create").click(function (e) {
      e.stopPropagation();
      e.preventDefault();

    let prefix = $(this).parent('form').find("input[name='prefix']").val();
    let number = $(this).parent('form').find("input[name='number']").val();
    let name = $(this).parent('form').find("input[name='name']").val();

     $('#id').val();
        $('#prefix').val();
        $('#number').val();
        $('#name').val();

        if($('#id').val() === "" || $('#prefix').val() === "" || $('#number').val()=== "" || $('#name').val() === ""){
          alert('Please, complete all the fields')
        }else{
          $.ajax({
            method: "POST",
            url: "index.php?c=cart&a=create",
            data: {
              prefix: prefix,
              name: name, 
              number: number
            },
          }).done(function (response) {
    
            $("#registers").empty();
            var phones= JSON.parse(response);
    
            $.each(phones[0], function(key, phone){
    
             let phones= JSON.parse(response);
            let template= "";
            $.each(phones[0], function(key, phone){
    
                  template+= `<tr>
                  <td class="info">${phone['id']}</td>
                  <td class="info">${phone['prefix']}</td>
                  <td class="info">${phone['number']}</td>
                  <td class="info">${phone['name']}</td>
    
                  <td class="actions">
                      <a href="#" title="Delete item" data-id='${phone['id']}' class='delete_id delete'>Delete
                      </a>
                      <a href="#" title="Edit item" data-id='${phone['id']}' class='edit_id edit'>Edit
                      </a>
                  </td>
                </tr>`;
    
            });
            
            $('#id').val("");
            $('#prefix').val("");
            $('#number').val("");
            $('#name').val("");
            $("#registers").html(template);
           });
    
          }); //ajax create finishes..

        }
    }); //create finishes
  }); //ready finishes