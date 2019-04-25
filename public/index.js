// prepare to bleach ur eyes and kys 'cause this cancer

$(function () {
    "use strict";
    var semesters = {
      1: [11,12,13,14,15,16,17,18],
      2: [21,22,23,24,25,26,27,28],
      3: [31,32,33,34,35,36,37,38],
      4: [41,42,43,44,45,46,47,48],
      5: [51,52,53,54,55,56,57,58],
    };

    function gradeConvert(marks) {
      var gradePoint = 0;
      if (marks >= 90) {
        gradePoint = 10;
      } else if (marks < 90 && marks >= 80) {
        gradePoint = 9;
      } else if (marks < 80 && marks >= 70) {
        gradePoint = 8;
      } else if (marks < 70 && marks >= 60) {
        gradePoint = 7;
      } else if (marks < 60 && marks >= 50) {
        gradePoint = 6;
      } else if (marks < 50 && marks >= 45) {
        gradePoint = 5;
      } else if (marks < 45 && marks >= 40) {
        gradePoint = 4;
      }
      return parseInt(gradePoint);
    };

    for (var semester in semesters) {
      $("#sem").append(`<h4> Semester `+ semester + ` </h4>`);
      for (var i=0; i < 8; i++) {
          var subj = semesters[semester][i]
          var string = "15IM"+subj;
          $("#sem").append(`
            <div class="input-group mb-3 input-group-sm">
              <div class="input-group-prepend">
                <span class="input-group-text">`+string+`</span>
                <input type="text" size="6" id="`+ string +`" name="`+ string +`">
              </div>
              <div class="input-group-prepend">
                <span class="input-group-text">Grade Point</span>
                <input type="text" size="1" name="g`+string+`" id="g`+ string +`" value="4"> </br>
              </div>

            </div>
            `)
        }
        $("#sem").append(`
          <div class="input-group mb-3 input-group-sm">
            <button type="button" class="btn btn-primary" name=heck`+semester+` id="sem`+semester+`"> Calculate </button></p>
            <div class="input-group-postpend">
              <span class="input-group-text" id=heck`+semester+`></span>
            </div>
          </div>
        `);
      };



    $("#sem").on('click', '#sem1',  function() {
            var credit_sum = []
            var sum = [];

            // for (var i=1; i<6; i++) {
              for (var j=0; j<8; j++) {
                  // 5 * 8 lmao, whoever is seeing this, bleach your eyes
                  var subj = semesters[1][j];
                  var string = "15IM"+subj;
                  var gString = "g"+string;
                  var gStringValue = parseInt($('input[name="'+gString+'"]').val())

                  console.log(subj);
                  // if you haven't bleached your eyes yet, you will now...
                  if (sum.length < 8) {
                    sum.push(gStringValue);
                  }
                  // k
                  var gradePoint = gradeConvert(parseInt($('#'+string).val()));
                  var credit = gradePoint * gStringValue;
                  credit_sum.push(credit)
                }
              // }
              var hey = credit_sum.reduce((a,b)=>a+b,0);
              var m_single = sum.reduce((a,b)=>a+b,0);
              var lost = '#'+$(this).attr('name')
              $(lost).html(`SGPA: `+parseFloat(hey/m_single).toFixed(2)+` :: Grade: `+m_single+`</br>`);
          } );
    $("#sem").on('click', '#sem2', function() {
            var credit_sum = []
            var sum = [];

            // for (var i=1; i<6; i++) {
              for (var j=0; j<8; j++) {
                  // 5 * 8 lmao, whoever is seeing this, bleach your eyes
                  var subj = semesters[2][j];
                  var string = "15IM"+subj;
                  var gString = "g"+string;
                  var gStringValue = parseInt($('input[name="'+gString+'"]').val())

                  console.log(subj);
                  // if you haven't bleached your eyes yet, you will now...
                  if (sum.length < 8) {
                    sum.push(gStringValue);
                  }
                  // k
                  var gradePoint = gradeConvert(parseInt($('#'+string).val()));
                  var credit = gradePoint * gStringValue;
                  credit_sum.push(credit)
                }
              // }
              var hey = credit_sum.reduce((a,b)=>a+b,0);
              var m_single = sum.reduce((a,b)=>a+b,0);
              var lost = '#'+$(this).attr('name')
              $(lost).html(`SGPA: `+parseFloat(hey/m_single).toFixed(2)+` :: Grade: `+m_single+`</br>`);
          } );
    $("#sem").on('click', '#sem3',  function() {
            var credit_sum = []
            var sum = [];

            // for (var i=1; i<6; i++) {
              for (var j=0; j<8; j++) {
                  // 5 * 8 lmao, whoever is seeing this, bleach your eyes
                  var subj = semesters[3][j];
                  var string = "15IM"+subj;
                  var gString = "g"+string;
                  var gStringValue = parseInt($('input[name="'+gString+'"]').val())

                  console.log(subj);
                  // if you haven't bleached your eyes yet, you will now...
                  if (sum.length < 8) {
                    sum.push(gStringValue);
                  }
                  // k
                  var gradePoint = gradeConvert(parseInt($('#'+string).val()));
                  var credit = gradePoint * gStringValue;
                  credit_sum.push(credit)
                }
              // }
              var hey = credit_sum.reduce((a,b)=>a+b,0);
              var m_single = sum.reduce((a,b)=>a+b,0);
              var lost = '#'+$(this).attr('name')
              $(lost).html(`SGPA: `+parseFloat(hey/m_single).toFixed(2)+` :: Grade: `+m_single+`</br>`);
          } );
    $("#sem").on('click', '#sem4',  function() {
            var credit_sum = []
            var sum = [];

            // for (var i=1; i<6; i++) {
              for (var j=0; j<8; j++) {
                  // 5 * 8 lmao, whoever is seeing this, bleach your eyes
                  var subj = semesters[4][j];
                  var string = "15IM"+subj;
                  var gString = "g"+string;
                  var gStringValue = parseInt($('input[name="'+gString+'"]').val())

                  console.log(subj);
                  // if you haven't bleached your eyes yet, you will now...
                  if (sum.length < 8) {
                    sum.push(gStringValue);
                  }
                  // k
                  var gradePoint = gradeConvert(parseInt($('#'+string).val()));
                  var credit = gradePoint * gStringValue;
                  credit_sum.push(credit)
                }
              // }
              var hey = credit_sum.reduce((a,b)=>a+b,0);
              var m_single = sum.reduce((a,b)=>a+b,0);
              var lost = '#'+$(this).attr('name')
              $(lost).html(`SGPA: `+parseFloat(hey/m_single).toFixed(2)+` :: Grade: `+m_single+`</br>`);
          } );
    $("#sem").on('click', '#sem5',   function() {
            var credit_sum = []
            var sum = [];

            // for (var i=1; i<6; i++) {
              for (var j=0; j<8; j++) {
                  // 5 * 8 lmao, whoever is seeing this, bleach your eyes
                  var subj = semesters[5][j];
                  var string = "15IM"+subj;
                  var gString = "g"+string;
                  var gStringValue = parseInt($('input[name="'+gString+'"]').val())

                  console.log(subj);
                  // if you haven't bleached your eyes yet, you will now...
                  if (sum.length < 8) {
                    sum.push(gStringValue);
                  }
                  // k
                  var gradePoint = gradeConvert(parseInt($('#'+string).val()));
                  var credit = gradePoint * gStringValue;
                  credit_sum.push(credit)
                }
              // }
              var hey = credit_sum.reduce((a,b)=>a+b,0);
              var m_single = sum.reduce((a,b)=>a+b,0);
              var lost = '#'+$(this).attr('name')
              $(lost).html(`SGPA: `+parseFloat(hey/m_single).toFixed(2)+` :: Grade: `+m_single+`</br>`);
          } );


  $("#cID").on('click', '#fin',   function() {
    var gradeSum = []
    var paidSum = []
    for (var i=1; i<6;i++) {
      var another = "#heck"+i;
      var variable = $(another).text().split(':');
      // var variable = parseFloat($(yet).text());
      console.log(variable);
      gradeSum.push(parseFloat(variable[4]));
      paidSum.push(parseFloat(variable[1])*parseFloat(variable[4]));
      // console.log(gradeSum, paidSum);
      $("#gpa").html(`
        <div>`+ paidSum.reduce((a,b)=>a+b,0) / gradeSum.reduce((a,b)=>a+b,0) +`</div>
        `);
      }
  });
});
