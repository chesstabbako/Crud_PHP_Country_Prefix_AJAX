$(document).ready(function () {

  $(".btn_edit").click(function(e) {
   
    e.stopPropagation();
    e.preventDefault();
    var id= $(this).parent('form').find("[name='idU']").val();
    var name= $(this).parent('form').find("[name='nameU']").val();
    var number= $(this).parent('form').find("[name='numberU']").val();
    var prefix= $(this).parent('form').find("[name='prefixU']").val();

    if($('#idU').val() === "" || $('#prefixU').val() === "" || $('#numberU').val()=== "" || $('#nameU').val() === ""){
      alert('Please, complete all the fields')
    }else{

      $.ajax({
        method: "POST",
        url: "index.php?c=cart&a=update",
        data: {
          id :id, 
          name: name, 
          prefix: prefix, 
          number: number
        }
      }).done(function (response) {
        $("#registers").empty();
  
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
          $('#idU').val("");
          $('#prefixU').val("");
          $('#numberU').val("");
          $('#nameU').val("");
          $("#registers").html(template);
        });//ajax create finishes..

    }
  });

}); //ready finishes
