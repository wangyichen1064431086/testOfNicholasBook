var xhr=new XMLHttpRequest();
xhr.onreadystatechange==function(){
    if (xhr.readyState==4) {
        if ((xhr.status>=200&&xhr.status<300)||xhr.status==304) {
            alert(xhr.responseText);
        }
        else{
            alert("Request was unsuccessful: "+xhr.status);
        }
    }
}

function addURLParam(url,name,value) {
    url+=(url.indexOf("?")==-1?"?":"&");
    url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
    return url;
}

var url="example.php";

url=addURLParam(url,"name","Nicholas");
url=addURLParam(url,"book","Professional JavaScript");

xhr.open("get",url,false);



xhr.setRequestHeader("MyHeader","MyValue");
xhr.send(null);
