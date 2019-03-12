$(window).on("load", function()
{
    $("#main_photo").html("<img src='img/gallery/mid/0.jpg'>");
    
    for(let i=0; i<7; i++)
    {
        $("#thumbnails").append("<div class='center-img-container'><img src='img/gallery/min/"+i+".jpg'></div>");
    }

});
function setPhoto(photo_id)
{
    
}
function scrollThumbnails(isRight)
{

}