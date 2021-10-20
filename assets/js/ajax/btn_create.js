$(document).ready(function () {
    //$("#msg-success").hide();
    $(".btn_create").click(function (e) {
      e.stopPropagation();
      e.preventDefault();

      var array= [
        {
          prefix: '+1',
          name: 'Canada'
        },
        {
          prefix: '+1340',
          name: 'United States Virgin Islands (USA)'
        },
        {
          prefix: '+1670',
          name: 'Northern Mariana Islands (USA)'
        },
        {
          prefix: '+1340',
          name: 'Guam (USA)'
        },
        {
          prefix: '+1684 ',
          name: 'American Samoa (USA)'
        },
        {
          prefix: '+1787',
          name: 'Puerto Rico (USA)'
        },
        {
          prefix: '+1939',
          name: 'Puerto Rico (USA)'
        },
        {
          prefix: '+1242',
          name: 'Bahamas'
        },
        {
          prefix: '+1246',
          name: 'Barbados'
        },
        {
          prefix: '+1264',
          name: 'Anguilla'
        },
        {
          prefix: '+1268',
          name: 'Antigua and Barbuda'
        },
        {
          prefix: '+1284',
          name: 'British Virgin Islands'
        },
        {
          prefix: '+1345',
          name: 'Cayman Islands'
        },
        {
          prefix: '+1441',
          name: 'Bermuda'
        },
        {
          prefix: '+1473',
          name: 'Grenada'
        },
        {
          prefix: '+1649',
          name: 'Turks and Caicos Islands'
        },
        {
          prefix: '+1658',
          name: 'Jamaica'
        },
        {
          prefix: '+1876',
          name: 'Jamaica'
        },
        {
          prefix: '+1664',
          name: 'Montserrat'
        },
        {
          prefix: '+1721',
          name: 'Sint Maarten'
        },
        {
          prefix: '+1758',
          name: 'Saint Lucia'
        },
        {
          prefix: '+1767',
          name: 'Dominica'
        },
        {
          prefix: '+1784',
          name: 'Saint Vincent and the Grenadines'
        },
        {
          prefix: '+1809',
          name: 'Dominican Republic'
        },
        {
          prefix: '+1829',
          name: 'Dominican Republic'
        },
        {
          prefix: '+1849',
          name: 'Dominican Republic'
        },
        {
          prefix: '+1868',
          name: 'Trinidad and Tobago'
        },
        {
          prefix: '+1869',
          name: 'Saint Kitts and Nevis'
        },
        {
          prefix: '+20',
          name: 'Egypt'
        },
        {
          prefix: '+210',
          name: 'unassigned'
        },
        {
          prefix: '+211',
          name: 'South Sudan'
        },
        {
          prefix: '+212',
          name: 'Morocco (including Western Sahara)'
        },
        {
          prefix: '+213',
          name: 'Algeria'
        },
        {
          prefix: '+214',
          name: 'unassigned'
        },
        {
          prefix: '+215',
          name: 'unassigned'
        },
        {
          prefix: '+216',
          name: 'Tunisia'
        },
        {
          prefix: '+217',
          name: 'unassigned'
        },
        {
          prefix: '+218',
          name: 'Libya'
        },
        {
          prefix: '+219',
          name: 'unassigned'
        },
        {
          prefix: '+220',
          name: 'Gambia'
        },
        {
          prefix: '+221',
          name: 'Senegal'
        },
        {
          prefix: '+222',
          name: 'Mauritania'
        },
        {
          prefix: '+223',
          name: 'Mali'
        },
        {
          prefix: '+224',
          name: 'Guinea'
        },
        {
          prefix: '+225',
          name: 'Ivory Coast'
        },
        {
          prefix: '+226',
          name: 'Burkina Faso'
        },
        {
          prefix: '+227',
          name: 'Niger'
        },
        {
          prefix: '+228',
          name: 'Togo'
        },
        {
          prefix: '+229',
          name: 'Benin'
        },
        {
          prefix: '+230',
          name: 'Mauritius'
        },
        {
          prefix: '+231',
          name: 'Liberia'
        },
        {
          prefix: '+232',
          name: 'Sierra Leone'
        },
        {
          prefix: '+233',
          name: 'Ghana'
        },
        {
          prefix: '+234',
          name: 'Nigeria'
        },
        {
          prefix: '+235',
          name: 'Chad'
        },
        {
          prefix: '+236',
          name: 'Central African Republic'
        },
        {
          prefix: '+237',
          name: 'Cameroon'
        },
        {
          prefix: '+238',
          name: 'Cape Verde'
        },
        {
          prefix: '+239',
          name: 'São Tome and Principe'
        },
        {
          prefix: '+240',
          name: 'Equatorial Guinea'
        },
        {
          prefix: '+241',
          name: 'Gabon'
        },
        {
          prefix: '+242',
          name: 'Republic of the Congo'
        },
        {
          prefix: '+243',
          name: 'Democratic Republic of the Congo'
        },
        {
          prefix: '+244',
          name: 'Angola'
        },
        {
          prefix: '+245',
          name: 'Guinea-Bissau'
        },
        {
          prefix: '+246',
          name: 'British Indian Ocean Territory'
        },
        {
          prefix: '+247',
          name: 'Ascension Island'
        },
        {
          prefix: '+248',
          name: 'Seychelles'
        },
        {
          prefix: '+249',
          name: 'Sudan'
        },
        {
          prefix: '+250',
          name: 'Rwanda'
        },
        {
          prefix: '+251',
          name: 'Ethiopia'
        },
        {
          prefix: '+252',
          name: 'Somalia'
        },
        {
          prefix: '+253',
          name: 'Djibouti'
        },
        {
          prefix: '+254',
          name: 'Kenya'
        },
        {
          prefix: '+255',
          name: 'Tanzania'
        },
        {
          prefix: '+256',
          name: 'Uganda'
        },
        {
          prefix: '+257',
          name: 'Burundi'
        },
        {
          prefix: '+258',
          name: 'Mozambique'
        },
        {
          prefix: '+259',
          name: 'unassigned'
        },
        {
          prefix: '+260',
          name: 'Zambia'
        },
        {
          prefix: '+261',
          name: 'Madagascar'
        },
        {
          prefix: '+262',
          name: 'Reunion'
        },
        {
          prefix: '+262269',
          name: 'Mayotte'
        },
        {
          prefix: '+262639',
          name: 'Mayotte'
        },
        {
          prefix: '+263',
          name: 'Zimbabwe'
        },
        {
          prefix: '+264',
          name: 'Namibia'
        },
        {
          prefix: '+265',
          name: 'Malawi'
        },
        {
          prefix: '+266',
          name: 'Lesotho'
        },
        {
          prefix: '+267',
          name: 'Botswana'
        },
        {
          prefix: '+268',
          name: 'Eswatini'
        },
        {
          prefix: '+269',
          name: 'Comoros'
        },
        {
          prefix: '+27',
          name: 'South Africa'
        },
        {
          prefix: '+290',
          name: 'Saint Helena'
        },
        {
          prefix: '+2908',
          name: 'Tristan da Cunha'
        },
        {
          prefix: '+291',
          name: 'Eritrea'
        },
        {
          prefix: '+292',
          name: 'unassigned'
        },
        {
          prefix: '+293',
          name: 'unassigned'
        },
        {
          prefix: '+294',
          name: 'unassigned'
        },
        {
          prefix: '+295',
          name: 'unassigned'
        },
        {
          prefix: '+296',
          name: 'unassigned'
        },
        {
          prefix: '+297',
          name: 'Aruba'
        },
        {
          prefix: '+298',
          name: 'Faroe Islands'
        },
        {
          prefix: '+299',
          name: 'Greenland'
        },
        {
          prefix: '',
          name: ''
        },
        {
          prefix: '',
          name: ''
        }
      ];

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
            url: "index.php?c=phone&a=create",
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