
$(function(){

  var gnbTag="";
  var gnbData=[
                ["list1","","ABOUT"],
                ["list2","","OFFLINE"],
                ["list3","","PRODUCT"],
                ["list4","","EVENT"],
               ];

   for(var x=0; x<gnbData.length; x++){
   gnbTag+="<li class="+gnbData[x][0]+"><a href="+gnbData[x][1]+">"+gnbData[x][2]+"</a></li>";
   }
   $("#gnb").html(gnbTag);


});
