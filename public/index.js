// prepare to bleach ur eyes and kys 'cause this cancer

$(function () {
    "use strict";
    var semesters = {
      1: [11,12,13,14,15,16,17],
      2: [21,22,23,24,25,26,27],
      3: [31,32,33,34,35,36,37],
      4: [41,42,43,44,45,46,47],
      5: [51,52,53,54,55,56,57],
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
      for (var i=0; i < 7; i++) {
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
            <button type="button" class="btn btn-primary" name=heck`+semester+` id="sem`+semester+`"> Calculate GPA</button></p>
            <div class="input-group-postpend">
              <span class="input-group-text" id=heck`+semester+`></span>
            </div>
          </div>
        `);
      };

    function sendRs () {
        var credit_sum = []
        var sum = [];
        for (var i=1; i<6; i++) {
          for (var j=0; j<7; j++) {
              // 5 * 7 lmao, whoever is seeing this, bleach your eyes
              var subj = semesters[i][j];
              var string = "15IM"+subj;
              var gString = "g"+string;
              var gStringValue = parseInt($('input[name="'+gString+'"]').val())

              // if you haven't bleached your eyes yet, you will now...
              if (sum.length < 7) {
                sum.push(gStringValue);
              }
              // k
              var gradePoint = gradeConvert(parseInt($('#'+string).val()));
              var credit = gradePoint * gStringValue;
              credit_sum.push(credit)
            }
          }
          var hey = credit_sum.reduce((a,b)=>a+b,0);
          var m_single = sum.reduce((a,b)=>a+b,0);

          // console.log(Object.keys(semesters));
          var lost = '#'+$(this).attr('name')
          // console.log(lost);
          $(lost).append(`credit earned: `+hey+`, total_grade:`+m_single+`. GPA: `+parseFloat(hey/m_single).toFixed(2)+`</br>`);
      }

    $("#sem").on('click', '#sem1', sendRs );
    $("#sem").on('click', '#sem2', sendRs );
    $("#sem").on('click', '#sem3', sendRs );
    $("#sem").on('click', '#sem4', sendRs );
    $("#sem").on('click', '#sem5', sendRs );

    $("#fin").append(`
      <div></div>
    `);
});
