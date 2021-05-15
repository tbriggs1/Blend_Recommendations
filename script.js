const logo = document.querySelector('.blend_recommendations');

(function test(){
    const image = document.createElement('img');

    image.src = 'https://github.com/tbriggs1/Blend_Recommendations/blob/master/blend.png?raw=true';

    logo.appendChild(image);
}) ();

(function openPopup(){
    $('.blend_recommendations').click(() => {
        if ($('.popup').css("display") == 'none') {
            $('.popup').css("display", "flex");
            $('.blend_recommendations img').css("margin-left", "16vw");
        } else {
            $('.popup').css("display", "none");
        }
    })
})();



// Search Functionality
    // TODO - Make window.location JAM into a variable based on page location 
    // Need to check whether the above is possible via OSAPI, if not window.location parse
var input = "";

$("#formSubmit").submit((event) => {
    input = document.getElementById("search-bar").value;
    window.location = `https://jam12.sapjam.com/home/hkfvT1ygsHLz13M5N7553v?%24searchText=${input}`;
    $("#formSubmit")[0].reset();
});


$("#searchIcon").click(() => {
    input = document.getElementById("search-bar").value;
    window.location = `https://jam12.sapjam.com/home/hkfvT1ygsHLz13M5N7553v?%24searchText=${input}`;
});

$("#searchButton").click(() => {
    input = document.getElementById("search-bar").value;
    window.location = `https://jam12.sapjam.com/home/hkfvT1ygsHLz13M5N7553v?%24searchText=${input}`
});
    
(function getUserID() {
        document.getElementById('search-bar').placeholder="Hi " +  jamApp.currentUser.attributes.FirstName + ", search the catalog?";
})();
    
var prefs = new gadgets.Prefs();
gadgets.window.adjustHeight();
    