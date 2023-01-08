function get(url){
    const xhr = new XMLHttpRequest();
    xhr.open("get",url,true);
    xhr.send();
    return new Promise(function(ok,no){
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4  ){
               if(xhr.status == 200){
                   ok(JSON.parse(  xhr.responseText )) 
               }else{
                    no({"err":"no"})
               }              
            }
        }
    })

}
export default get;