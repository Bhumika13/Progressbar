$(function () {
            $("#progressbar").progressbar({
                value: 25
            }).data("value", "25");
            $("#progressbar1").progressbar({
                value: 50
            }).data("value", "50");
            $("#progressbar2").progressbar({
                value: 75
            }).data("value", "75");


            $("#plus").click(function () {
                
                var currValue = $(".active >.progressbardiv").data("value");
                currValue = parseInt(currValue) ? parseInt(currValue) : 0;
                if (currValue <= 100) {
                    $(".active >.progressbardiv").progressbar({
                        value: currValue + 25
                    }).data("value", currValue + 25);
                    $(".active >.progresslabeldiv").html((currValue + 25) + "%");
                    currValue += 25;
                }
                if (currValue > 100) {
                    $('.active >.progressbardiv').addClass("max");
                } if (currValue <= 100) {
                    $('.active >.progressbardiv').removeClass("max");
                }
            });

            $("#minus").click(function () {
                var currValue = $(".active >.progressbardiv").data("value");
                currValue = parseInt(currValue) ? parseInt(currValue) : 0;
                if (currValue > 0) {
                    $(".active >.progressbardiv").progressbar({
                        value: currValue - 25
                    }).data("value", currValue - 25);
                    $(".active >.progresslabeldiv").html((currValue - 25) + "%");
                    currValue -= 25;
                }
                if (currValue > 100) {
                    $('.active >.progressbardiv').addClass("max");
                } else {
                    $('.active >.progressbardiv').removeClass("max");
                }
            });

            $("#plus10").click(function () {
                var currValue = $(".active > .progressbardiv").data("value");
                currValue = parseInt(currValue) ? parseInt(currValue) : 0;
                if (currValue <= 100) {
                    $(".active >.progressbardiv").progressbar({
                        value: currValue + 10
                    }).data("value", currValue + 10);
                    $(".active >.progresslabeldiv").html((currValue + 10) + "%");
                    currValue += 10;
                }
                if (currValue > 100) {
                    $('.active >.progressbardiv').addClass("max");
                } else {
                    $('.active >.progressbardiv').removeClass("max");
                }
            });

            $("#minus10").click(function () {
                var currValue = $(".active >.progressbardiv").data("value");
                currValue = parseInt(currValue) ? parseInt(currValue) : 0;
                if (currValue > 0) {
                    $(".active >.progressbardiv").progressbar({
                        value: currValue - 10
                    }).data("value", currValue - 10);
                    $(".active >.progresslabeldiv").html((currValue - 10) + "%");
                    currValue -= 10;
                }
                if (currValue > 100) {

                    $('.active >.progressbardiv').addClass("max");
                } else {
                    $('.active >.progressbardiv').removeClass("max");

                }
            });
        });

        $('select').on('change', function () {
            var mycls = this.value;
            $('.progresssec:not(".' + mycls + '")').removeClass('active');
            $('.progresssec.' + mycls).addClass('active');

        })