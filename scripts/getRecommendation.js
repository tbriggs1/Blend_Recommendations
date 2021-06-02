$(function () {   

    // document.getElementById('osapi_name').innerHTML= jamApp.currentUser.attributes.FirstName;

    $.ajax({
        url: 'http://bc5df54076e2.ngrok.io/recommendations/recommended/1/getRecommendedBy',
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
        if (item.STUD_ID == 'sfadmin'){
            $('.accordion-body').append(
                '<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">' +
                '<div class="card" style="width: 18rem;">' +
                    '<div class="card-body">' + 
                        '<h5 class="card-title">' + item.CPNT_TITLE + '!</h5>' +
                        '<h6 class="card-subtitle mb-2 text-muted"> Recommended By: ' + item.RECOMMENDED_BY + '</h6>' +
                        '<p class="card-text"> Comments: '+ item.COMMENTS + '</p>' +
                        '<a href="' +  item.DEEPLINK_URI  + '"' + 'class="btn btn-primary">Launch</a>' +
                '</div>' +
                '</div>'
            );
        }
    });
    }
