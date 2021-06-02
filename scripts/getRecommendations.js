$(function () {
    $.ajax({
        url: 'https://983ad611448a.ngrok.io/recommendations/recommended/1/getRecommendedBy',
        type: 'GET',
        json: 'callback',
        contentType: 'application/json',
        crossDomain: true,
        success: function (data) {
            console.log('all data: ', data);
            console.log(data.d)
            console.log(data.d.results)
            albumAccordion(data.d.results);
        },
        error: function (x, y, z) {
            console.log('x', x);
            console.log('y', y);
            console.log('z', z);
        }
    });
    });
    
    let albumAccordion = function (data) {
        data.forEach(function (item, index) {
        console.log(item, index);
        $('#discogAccordion').append(
            '<div class="card w-75">' +
            '<div class="card-body">' +
              '<h4 class="card-title">Trending Content</h4>' +
              '<h6 class="card-title">Recommended By</h6>' +
              '<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>' +
              '<a href="#" class="btn btn-primary">Button</a>' +
            '</div>' +
          '</div>'
        );
    });
    }
