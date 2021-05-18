let url = 'https://sapsalesdemoblenda859ab94a.hana.ondemand.com/b00588/config.xsodata/LXP_RECOMMENDATIONS?$format=json';

let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.append('Authorization', 'Basic U0ZTQUxFUzAwNTg4MTpTZjQ1NzhTYWxlMDQ5NTE');

fetch(url, {method:'GET',
        headers: headers,
        //credentials: 'user:passwd'
       })
.then(response => response.json())
.then(json => console.log(json));
//.done();

function parseJSON(response) {
return response.json()
}
