
$(window).scroll(function () {
    var windowScrollPosition = $(window).scrollTop();
    var stikyDiv = $('#stikyDiv').position();
    if (windowScrollPosition >= stikyDiv.top) {
        $('#stikyDiv').css({
            'position' : 'fixed',
            'top' : '0px'
        });
    } else {
        $('#stikyDiv').css({
            'position' : 'relative',
            'top' : '0px'
        })
    }
    // $('#hr').text(windowScrollPosition);
    // $('#hr1').text(stikyDiv.top);
});




// var scrollDivPosition = $('#scrollDiv').position();
// alert(scrollDivPosition.left)



// var firstScrollPosition = 0;
// $('#scrollDiv').scroll(function () {
//     // $('#h2').css('display','block').fadeOut(2000);
//     var scrollPosition = $('#scrollDiv').scrollTop();
//     // $('#h2').text(scrollPosition);
//     if (scrollPosition > firstScrollPosition) {
//         $('#h2').text('you are scrolling down');
//     }else {
//         $('#h2').text('you are scrolling up');
//     }
//     firstScrollPosition = scrollPosition;
// });




$('#firstName').keyup(function () {
    var firstName = $('#firstName').val();
    $('#res1').text(firstName);
});

$('#lastName').keyup(function () {
    var lastName = $('#lastName').val();
    $('#res2').text(lastName);
});

$('#lastName').blur(function () {
    var firstName = $('#firstName').val()
    var lastName = $('#lastName').val();
    var fullName = firstName+' '+lastName;
    $('#res3').text(fullName);
})




$('#btn').click(function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var fullName = firstName+' '+lastName;
    $('#fullName').val(fullName);
});