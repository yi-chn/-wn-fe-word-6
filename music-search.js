var xmlhttp = new XMLHttpRequest();
var url = "https://v1.itooi.cn/kugou/search?keyword=xxxx&type=song&pageSize=100&page=0";
var type = "GET";
xmlhttp.open(type,url,true);
xmlhttp.send();

xmlhttp.onreadystatechange = function(){
    if(xmlhttp.status == 200&&xmlhttp.readyState == 4){
        var result = JSON.parse(xmlhttp.response);
        console.log(result)
    }
}