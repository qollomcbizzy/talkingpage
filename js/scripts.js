
$(document).ready(function(){
$("button#hello").click(function(){
  $("ul#user").prepend("<li>hello!</li>");
  $("ul#webpage").prepend("<li>hello to you too</li>");
  $("ul#user").children('li').first().click(function(){
    $(this).remove();
  });
  $("ul#webpage").children('li').first().click(function(){
    $(this).remove();
  });
});
$("button#goodbye").click(function(){
  $("ul#user").prepend("<li>goodbye!</li>");
  $("ul#webpage").prepend("<li>goodbye sir /madam.see you!!</li>");
  $("ul#user").children('li').first().click(function(){
    $(this).remove();
  });
  $("ul#webpage").children('li').first().click(function(){
    $(this).remove();
  });
});
$("button#stop").click(function(){
  $("ul#user").prepend("<li>stop copying me!</li>");
  $("ul#webpage").prepend("<li>am not copying you please!! sir/madam</li>");
  $("ul#user").children('li').first().click(function(){
    $(this).remove();
  });
  $("ul#webpage").children('li').first().click(function(){
    $(this).remove();
  });
});
});
