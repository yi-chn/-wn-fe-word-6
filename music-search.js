var xhr = null;
if (window.XMLHttpRequest)
{
    // 兼容 IE7+，Firefox,chrome,opera,safari
    xhr = new XMLHttpRequest();
}else{// 兼容 IE6，IE5
    xhr = new ActiveXObject("Microsoft.XMLHTTP")
}
//创建AJAX核心对象

xhr.open("GET","https://v1.itooi.cn/kugou/search?keyword=xxxx&type=song&pageSize=100&page=0",true);
xhr.send();
//向服务器发送请求

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("result").innerHTML = xhr.responseText;
    }
}
//服务器相应处理（异步）
 
