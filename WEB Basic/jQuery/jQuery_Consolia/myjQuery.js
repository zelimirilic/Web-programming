


$(document).ready(function () {

    var tbody = $('#customers');
    $('#addRow').on('click', function() {
        tbody.append('<tr><td>James</td><td>Bond</td></tr>')
    });

    tbody.on('click', 'td', function() {
        alert($(this).text());
    });

    this.title = 'some title';
    $(this).attr('title', 'Some title2');

    $('div.BlueDiv, div.RedDiv').attr({
        title: 'Some title3',
        style: 'background-color:blue; font-size:30px; color:black',
        type: 'text'
    });

    $('tr').hover(
        function() {
        $(this).css('background-color', '#efefef');
    },
        function() { 
        $(this).css('background-color', 'aqua');
        });

        $('#form1').hover(function() {
            $(this).toggleClass('LightHighlight');
        });

    // Modifying the DOM
    $('#myContent').append('<span style="background-color:rosybrown; font-size:20px">Appended 1 child</span>');
    $('#myContent').prepend('<span style="background-color:aqua; font-size:20px">Prepended 1 child</span>');

    // Wrap
    $('.Foo').wrap('<div class="BlueDiv ParentWraper" />');

    //Remove
    //$('.ParentWraper').remove();

    jEvents();

    // Handle select
    /*    $('#myContent').mouseenter(function() {
            toggle($(this));
            $(this).css('cursor', 'pointer');
        })
        .mouseleave(function() {
            
            toggle($(this));
        })
        .mouseup(function(x) {
            $(this).text('X: ' + x.pageX + ' Y: ' + x.pageY);
        })
    */

    $('#myContent').on('mouseenter mouseleave mouseup', function (element) {
        $(this).toggleClass('Highlight');
        $(this).css('cursor', 'pointer');
        if (element.type === 'mouseup') {
            $(this).text('X: ' + element.pageX + ' Y: ' + element.pageY);
        }
    });


});



function FocusBlur(el) {
    $(el).toggleClass('Highlight');
};

function jEvents() {
    $('#SubmitButton').click(function () {
        var firstNameVal = $('#FirstNameTextBox').val();
        var lastNameVal = $('#LastNameTextBox').val();

        $('#subOutput').text(firstNameVal + ' ' + lastNameVal);
    });
};

function toggle(table) {
    table.toggleClass('Highlight');
};


/* Handle events - old way
        var button = document.getElementById('SubmitButton');
        if(document.addEventListener) {
            button.addEventListener('click', function() {
                alert('Clicked Button');
            }, false);
        }*/
