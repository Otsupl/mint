var current = "1";
    function hideCurrent()
    {
        $('#m' + current).fadeOut();
        $('#m' + current).css("display","none");
    }
    $('#td1').click(function() {
        hideCurrent();
        current="1";
        $('#m' + current).fadeIn();
        $('#m' + current).css("display","block");
    });
    $('#td2').click(function() {
        hideCurrent();
        current="2";
        $('#m' + current).fadeIn();
        $('#m' + current).css("display","block");
    });
    $('#td3').click(function() {
        hideCurrent();
        current="3";
        $('#m' + current).fadeIn();
        $('#m' + current).css("display","block");
    });
    $('#td4').click(function() {
        hideCurrent();
        current="4";
        $('#m' + current).fadeIn();
        $('#m' + current).css("display","block");
    });
    $('#td5').click(function() {
        hideCurrent();
        current="5";
        $('#m' + current).fadeIn();
        $('#m' + current).css("display","block");
    });