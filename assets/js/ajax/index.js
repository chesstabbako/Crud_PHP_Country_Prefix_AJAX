$(document).ready(function(){

    $("#registers").empty();
    $.ajax({
        method: "GET",
        url: "index.php?c=phone&a=data",
      }).done(function (response) {
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

        $("#registers").html(template);

      }); //ajax create finishes..
 
});//ready finishes