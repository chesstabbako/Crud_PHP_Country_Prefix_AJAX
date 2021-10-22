$(document).ready(function () {
  $(".btn_cancel_edit").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    $("#idU").val("");
    $("#prefixU").val("");
    $("#nameU").val("");
    $("#numberU").val("");
    $(".editNew").hide();
  });
}); //ready finishes
