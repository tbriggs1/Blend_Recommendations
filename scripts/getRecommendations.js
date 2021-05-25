$(function () {
    $.ajax({
        url: 'http://127.0.0.1:8000/recommendations/recommended/1/getRecommendedBy/',
        type: 'GET',
        jsonp: 'callback',
        dataType: 'jsonp',
        crossDomain: true,
        success: function (data) {
            console.log('all data: ', data);
            albumAccordion(data);
        },
        error: function (x, y, z) {
            console.log('x', x);
            console.log('y', y);
            console.log('z', z);
        }
    });
    });
    
    let albumAccordion = function (data) {
        data.data.forEach(function (item, index) {
        console.log(item, index);
        $('#discogAccordion').append(
            '<div class="card">'+
                '<div class="card-header" id="heading'+ index +'">'+
                    '<h5 class="mb-0">'+
                        '<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse'+ index +'"'+
                                ' aria-expanded="false" aria-controls="collapse'+ index +'">'+
                            item.title+
                        '</button>'+
                    '</h5>'+
                '</div>'+
    
                '<div id="collapse'+ index +'" class="collapse" aria-labelledby="heading'+ index +'" data-parent="#discogAccordion">'+
                    '<div class="card-body">'+
                        'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf'+
                    '</div>'+
                '</div>'+
            '</div>'
        );
    });
    };