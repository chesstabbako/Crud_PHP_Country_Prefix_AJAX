$(document).ready(function () {
  $(document).on('change', '#search',(function(e) {
    e.stopPropagation();
    e.preventDefault();

    var number = $(this).parent("form").find("[name='search']").val();

    console.log(number);

    $.ajax({
      method: "POST",
      url: "index.php?c=phone&a=search",
      data: { 
        number: number
      }
    }).done(function (response) {
      $("#registers").empty();

        console.log("response: " + response);
        let template= "";

        if(response.length > 0){
          let phones= JSON.parse(response);
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
      }else{

        $("#registers").html(`<tr><td>No phone</td></tr>`);
      }
      });//ajax create finishes..

  }));

});

