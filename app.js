const sounds = {

    // Sound
    81: 'rockKick.mp3', //kick
    87: 'rockSnare.mp3',
    69: 'rockHat.mp3',
    82: 'rockClap.mp3',

    97: 'danceKick.mp3', //KICK2
    83: 'danceSnare.mp3',
    68: 'danceHat.mp3',
    70: 'danceClap.mp3',

    90: 'electroKick.mp3',
    88: 'electroSnare.mp3',
    67: 'electroClap.mp3',
    86: 'electroHat.mp3'
};


$(window).on("load resize", function(e) {
    var widthP = $("#padgrid").width();
    var width_diff = (widthP - 60) / 4;
    $('.pad').css({
        width: width_diff + "px",
        height: width_diff + "px",
    });
    console.log(width_diff);

    $('#1').click(function(evt) {
        var obj = document.createElement("audio");
        obj.src = sounds[81];
              $('.foo').audioSystem(obj);
    });
    $('#2').click(function(evt) {
        var obj = document.createElement("audio");
        obj.src = sounds[87];
          $('.foo').audioSystem(obj);
    });
    $('#3').click(function(evt) {
        var obj = document.createElement("audio");
        obj.src = sounds[69];
            $('.foo').audioSystem(obj);
    });

    $('#4').click(function(evt) {
        var obj = document.createElement("audio");
        obj.src = sounds[82];
          $('.foo').audioSystem(obj);
    });

    $('#5').click(function(evt) {
        var obj = document.createElement("audio");
        obj.src = sounds[97];
          $('.foo').audioSystem(obj);
    });

    $('#6').click(function(evt) {
        var obj = document.createElement("audio");
        obj.src = sounds[83];
          $('.foo').audioSystem(obj);
    });

    $('#7').click(function(evt) {
        var obj = document.createElement("audio");
        obj.src = sounds[68];
          $('.foo').audioSystem(obj);
    });

    $('#8').click(function(evt) {
        var obj = document.createElement("audio");
        obj.src = sounds[70];
          $('.foo').audioSystem(obj);
    });

    $('#9').click(function(evt) {
        var obj = document.createElement("audio");
        obj.src = sounds[90];
          $('.foo').audioSystem(obj);
    });

    $('#10').click(function(evt) {
        var obj = document.createElement("audio");
        obj.src = sounds[88];
          $('.foo').audioSystem(obj);
    });

    $('#11').click(function(evt) {
        var obj = document.createElement("audio");
        obj.src = sounds[67];
          $('.foo').audioSystem(obj);
    });

    $('#12').click(function(evt) {
        var obj = document.createElement("audio");
        obj.src = sounds[86];
          $('.foo').audioSystem(obj);
    });


    $(document)
        .keypress(function(e) {
            if (e.keyCode == 81) {
                $("#1").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[81];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#1").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 87) {
                $("#2").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[87];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#2").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 69) {
                $("#3").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[69];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#3").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 82) {
                $("#4").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[82];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#4").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 65) {
                $("#5").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[97];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#5").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 83) {
                $("#6").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[83];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#6").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 68) {
                $("#7").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[68];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#7").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 70) {
                $("#8").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[70];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#8").removeClass("active ");
                }, 100);
            }

            console.log(e.keyCode);

            if (e.keyCode == 90) {
                $("#9").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[90];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#9").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 88) {
                $("#10").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[88];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#10").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 67) {
                $("#11").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[67];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#11").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 86) {
                $("#12").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[86];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#12").removeClass("active ");
                }, 100);
            }

        });

        $.fn.audioSystem = function(obj) {
          obj.volume = 0.8;
          obj.autoPlay = false;
          obj.preLoad = true;
          obj.play();
        };


});
