$(".btn").click(() => {
    $("p").css("color", "red");
});
$(".denemeBtn").click(() => {
    $("p").toggleClass("deneme");
});
$(".EkleBtn").click(() => {
    $("p").addClass("bordery");
});
$(".CikarBtn").click(() => {
    $("p").removeClass("bordery");
});
$(".AttrBtn").click(() => {
    $("img").attr("width", "200px");
});
$("#changeit").html("İşte <b><i><mark> Buraları</mark> </i></b> Değişti");
$("#changeit").text("İşte <b><i><mark> Buraları</mark> </i></b> Değişti"); //eğer element içi texti almak istersek sadece alert or console log($("h2")) kullanırız
// var butonDegeri = $("#changeit").val(); //tüm p etiketlerinin değerlerini getir
// alert(butonDegeri);
$("#Hide-it").click(() => {
    $("#changeit").hide("fast");
});



$("#Animate-Btn").click(() => {
    $("#changeit").fadeIn("slow");
});