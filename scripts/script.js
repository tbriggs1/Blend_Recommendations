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
            $('.blend_recommendations img').css("margin-right", "25vw");
        } else {
            $('.popup').css("display", "none");
            $('.blend_recommendations img').css("margin-right", "0vw");
        }
    })
})();




    