


$(document).ready(function () {

/*    $('#myBtn').click(function () {

        var customer = 'cust=' +
            JSON.stringify({
                FirstName: $('#firstName').val();
                LastName: $(#lastName).val();
            });
        $.ajax({
            url: '../elements.html',
            data: customer,
            dataType: 'json',
            success: function (data, status, xhr) {
                $('#outputDiv').html('Insert status:  ' + data.d.status)
            },
            error: function (xhr, status, error) {
                alert('Error occurred: ' + status);
            }
                        
        })

        });

    });
*/

    $(document).ajaxComplete(function (event, xhr, settings) {
        if (settings.url === 'ajax/test.html') {
            $('.log').text(`Triggered ajaxComplete handler. The result is : ${xhr.responseText}`);
        }
        if (settings.url === 'ajax/test.html') {
            $('#msg').append('<p>Request Complete</p>');
        }
        
    });

    $('.trigger').click(function () {
        $('.result').load('ajax/test.html');
    });





});





    