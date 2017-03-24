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



    	FastClick.attach(document.body);


    $('#1').fastClick(function(evt) {
        var obj = document.createElement("audio");
        obj.src = sounds[81];
              $('.foo').audioSystem(obj);
    });
    $('#2').fastClick(function(evt) {
        var obj = document.createElement("audio");
        obj.src = sounds[87];
          $('.foo').audioSystem(obj);
    });
    $('#3').fastClick(function(evt) {
        var obj = document.createElement("audio");
        obj.src = sounds[69];
            $('.foo').audioSystem(obj);
    });

    $('#4').fastClick(function(evt) {
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
            console.log( e.keyCode);
            if (e.keyCode == 81 || e.keyCode == 113|| e.keyCode == 117 || e.keyCode == 85) {
                $("#1").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[81];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#1").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 87|| e.keyCode == 119 || e.keyCode == 105 || e.keyCode == 73 ) {
                $("#2").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[87];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#2").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 69 || e.keyCode == 101 || e.keyCode == 111|| e.keyCode == 79 ) {
                $("#3").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[69];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#3").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 82 || e.keyCode == 114 || e.keyCode == 80 || e.keyCode == 112  ) {
                $("#4").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[82];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#4").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 65 || e.keyCode == 97 || e.keyCode == 72 || e.keyCode == 104)  {
                $("#5").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[97];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#5").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 83 || e.keyCode == 115|| e.keyCode == 74 || e.keyCode == 106) {
                $("#6").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[83];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#6").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 68 || e.keyCode == 100|| e.keyCode == 75 || e.keyCode == 107)  {
                $("#7").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[68];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#7").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 70 || e.keyCode == 102 || e.keyCode == 76 || e.keyCode == 108 ) {
                $("#8").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[70];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#8").removeClass("active ");
                }, 100);
            }


            if (e.keyCode == 90|| e.keyCode == 122 || e.keyCode == 66 || e.keyCode == 98 ) {
                $("#9").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[90];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#9").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 88 || e.keyCode == 120 || e.keyCode == 78 || e.keyCode == 110) {
                $("#10").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[88];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#10").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 67 || e.keyCode == 99 || e.keyCode == 77 || e.keyCode == 109) {
                $("#11").toggleClass("active ");
                var obj = document.createElement("audio");
                obj.src = sounds[67];

                $('.foo').audioSystem(obj);

                setTimeout(function() {
                    $("#11").removeClass("active ");
                }, 100);
            }

            if (e.keyCode == 86 || e.keyCode == 118 || e.keyCode == 44  ) {
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
