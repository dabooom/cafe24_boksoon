//
// $(function(){
//
//   var gnbTag="";
//   var gnbData=[
//                 ["list1","","ABOUT"],
//                 ["list2","","OFFLINE"],
//                 ["list3","","PRODUCT"],
//                 ["list4","","EVENT"],
//                ];
//
//    for(var x=0; x<gnbData.length; x++){
//    gnbTag+="<li class="+gnbData[x][0]+"><a href="+gnbData[x][1]+">"+gnbData[x][2]+"</a></li>";
//    }
//    $("#gnb").html(gnbTag);
//
// });

$(function(){

    var gnbTag ="";
    var gnbJson ={
                 gnblistClass:["list1","list2","list3","list4"],
                 gnblistLink:["#","#","#","#"],
                 gnblistText:["ABOUT","OFFLINE","PRODUCT","EVENT"],
                }; ////gnbData
    ///////////////////////실행문///////////////////////
    for(var i in gnbJson.gnblistClass){
      gnbTag += "<li class='"+gnbJson.gnblistClass[i]+"' >";
      gnbTag += "<a href='"+gnbJson.gnblistLink[i]+"' >";
      gnbTag += gnbJson.gnblistText[i]+"</a></li>"
    }
    $("#gnb").html(gnbTag);

    });
