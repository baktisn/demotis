﻿    $(document).ready(function () {
        $("#NewPswd1").hide();
        $("#NewPswd2").hide();
        $("#NewPswd1lb").hide();
        $("#NewPswd2lb").hide();
});


    $('.login').on('submit', function (e) {

        Login1(e);
    });



    var Login1 = function (e) {

        $('#Email').prop("disabled", false);
        $('#Password').prop("disabled", false);
        var data = $("#login").serialize();

        $.ajax({
            type: "Post",
            datatype: "json",
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            data: data,
            xhrFields: {
                withCredentials: true
            },
            url:'@Url.Action("HelloAjax","Account")',

              

            success: function (result, textstatus, xhr) {
                if (result.flag == 1) {
                    //  alert(result.redirectURL + ' 1');

                        window.location.replace("../Manage/Index");
                        
                }
                else if (result.flag == 2) {
                    //alert(xhr.status + ' 2');
                    $('#error').text(result.error);
                    $('#Email').prop("disabled", true);
                    $('#Password').prop("disabled", true);
                    $("#NewPswd1lb").show('slow');
                    $("#NewPswd2lb").show('slow');
                    $("#NewPswd1").show('slow');
                    $("#NewPswd2").show('slow');

                }
                else
                {
                ///     alert(result.status + ' 3');
                    //window.location.replace("/Account/Login");
                    $('#error').text(result.error);
                    }
                  
                    

            }

        });
        
        ////e.preventDefault();
        //var $this = $(this),
        //    $state = $this.find('button > .state');
        //$this.addClass('loading');
        //$state.html('Authenticating');


        //setTimeout(function () {
        //    $this.addClass('ok');
        //    $state.html('Welcome back!');

        //    setTimeout(function () {
        //        $state.html('Log in');
        //        $this.removeClass('ok loading');
        //        working = false;

        //    }, 800);
        //}, 1000);

    };
            
       



