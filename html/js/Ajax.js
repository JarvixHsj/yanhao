/**
 * 封装了原生ajax连接，cookie读取
 * 潇 1398818512@qq.com
 * 2018.3.13
 * */
var $$ = {
    /*obj参数：
        * 建立post或get的Ajax链接
		* url:链接 string
		* data:传参值 string
		* method 链接方式('get'||'post') string
		* success 回调函数 function
    **/
    myAjax: function (obj){
        xhr = new XMLHttpRequest();

        //建立连接
        if(obj.method=='get'){
            xhr.open(obj.method,obj.url+'?'+obj.data,true);
            xhr.send();
        }else if(obj.method=='post'){
            xhr.open(obj.method,obj.url,true);
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhr.send(obj.data);
        }
        //监视请求的状态
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
    //					if(obj.dataType=='xml'){
    //						obj.callback(xhr.responseXML);
    //					}else if(obj.dataType=='text'){
    //						eval("var res = "+xhr.responseText);
    //						obj.callback(res);
    //					}
                var res=JSON.parse(xhr.responseText);
                obj.success(res)
            }

        }
    },
    /*
    * 获取cookie
    * key:cookie名
    * return:返回cookie值
    * */
    getCooke:function(key){
        var allcookies = document.cookie;
        var cookie_pos = allcookies.indexOf(key);   //索引的长度

        // 如果找到了索引，就代表cookie存在，
        // 反之，就说明不存在。
        if (cookie_pos != -1)
        {
            // 把cookie_pos放在值的开始，只要给值加1即可。
            cookie_pos += key.length + 1;      //这里容易出问题，所以请大家参考的时候自己好好研究一下
            var cookie_end = allcookies.indexOf(";", cookie_pos);

            if (cookie_end == -1)
            {
                cookie_end = allcookies.length;
            }

            var value = unescape(allcookies.substring(cookie_pos, cookie_end));         //这里就可以得到你想要的cookie的值了。。。
        }
        return value;
    }

}
