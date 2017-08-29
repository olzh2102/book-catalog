$('#openBtn').click(function(){
	$('#myModal').modal({show:true})
});$('#myTab a').click(function (e) {
	 e.preventDefault();
	 $(this).tab('show');
});

$(function () {
$('#myTab a:last').tab('show');
})$(".btn[data-target='#myModal']").click(function() {
       var columnHeadings = $("thead th").map(function() {
                 return $(this).text();
              }).get();
       columnHeadings.pop();
       var columnValues = $(this).parent().siblings().map(function() {
                 return $(this).text();
       }).get();
  var modalBody = $('<div id="modalContent"></div>');
  var modalForm = $('<form role="form" name="modalForm" action="putYourPHPActionHere.php" method="post"></form>');
  $.each(columnHeadings, function(i, columnHeader) {
       var formGroup = $('<div class="form-group"></div>');
       formGroup.append('<label for="'+columnHeader+'">'+columnHeader+'</label>');
       formGroup.append('<input class="form-control" name="'+columnHeader+i+'" id="'+columnHeader+i+'" value="'+columnValues[i]+'" />');
       modalForm.append(formGroup);
  });
  modalBody.append(modalForm);
  $('.modal-body').html(modalBody);
});
$('.modal-footer .btn-primary').click(function() {
   $('form[name="modalForm"]').submit();
});

$( document ).ready( function( )
{
    $( '.delete-row-default' ).bootstrap_confirm_delete(
        {
            callback: function( event )
            {
                var link = event.data.originalObject;

                link.closest( 'tr' ).remove();
            }
        }
    );

    $( '.delete-user-row-with-data-type' ).bootstrap_confirm_delete(
        {
            callback: function( event )
            {
                var link = event.data.originalObject;

                link.closest( 'tr' ).remove();
            }
        }
    );

    $( '.delete-user-row-with-ajax-button' ).bootstrap_confirm_delete(
        {
            callback: function( event )
            {
                //$.ajax(
                //{
                //    url: '/server.php',
                //    type: 'DELETE',
                //    success: function( result )
                //    {
                        var button = event.data.originalObject;

                        button.closest( 'tr' ).remove();
                //    }
                //} );
            }
        }
    );
} );

$(document).ready(function () {
    var counter = 0;

    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><input type="text" class="form-control" name="name' + counter + '"/></td>';
        cols += '<td><input type="text" class="form-control" name="mail' + counter + '"/></td>';
        cols += '<td><input type="text" class="form-control" name="phone' + counter + '"/></td>';

        cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
    });



    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();
        counter -= 1
    });


});



function calculateRow(row) {
    var price = +row.find('input[name^="price"]').val();

}

function calculateGrandTotal() {
    var grandTotal = 0;
    $("table.order-list").find('input[name^="price"]').each(function () {
        grandTotal += +$(this).val();
    });
    $("#grandtotal").text(grandTotal.toFixed(2));
}
