/*
* obj  要拖拽的对象
* attrObj    x  是否在X方向拖拽
*            y  是否在X方向拖拽
*            aniamte  在拖拽完成后是否动画
*            sideObj  指的是拖拽的父元素范围
* */
function drag(obj,attrObj){
    var attrObj=attrObj||{};
    this.obj=obj;
    this.x=attrObj.x==undefined?true:attrObj.x;
    this.y=attrObj.y==undefined?true:attrObj.y;
    this.animate=attrObj.animate==undefined?true:attrObj.animate;
    this.sideObj=attrObj.sideObj==undefined?null:attrObj.sideObj;
    if(this.sideObj){
        if(this.sideObj.nodeType==9){
            this.sideObjW = document.documentElement.clientWidth;
            this.sideObjH = document.documentElement.clientHeight;
        }else {
            this.sideObjW = this.sideObj.offsetWidth;
            this.sideObjH = this.sideObj.offsetHeight;
        }
       this.objW=this.obj.offsetWidth;
       this.objH=this.obj.offsetHeight;
    }
    this.cx=0;
    this.cy=0;
    this.ox=0;
    this.oy=0;
    this.startx=0;
    this.starty=0;
    this.endy=0;
    this.endx=0;
    this.lenx=0;
    this.leny=0;
    this.scale=0.8;
    this.drags();
}
drag.prototype={
    drags:function(){
        this.down();
    },
    down:function(){
        var that=this;
        this.obj.onmousedown=function(e){
             var ev=that.event(e);
            that.ox=ev.clientX-that.obj.offsetLeft;
            that.oy=ev.clientY-that.obj.offsetTop;
            that.startx=that.ox;
            that.starty=that.oy;
            that.move();
            that.up();
            //ev.preventDefault();
        }
    },
    event:function (e){
        return e||window.event;
    },
    move:function (){
        var that=this;
        document.onmousemove=function(e) {
            var ev = that.event(e);
            that.cx = ev.clientX;
            that.cy = ev.clientY;
            that.endx=that.cx;
            that.endy=that.cy;
            var lefts=that.cx - that.ox;
            var tops=that.cy - that.oy;
            if(that.sideObj){
                if(lefts<0){
                    lefts=0;
                }
                if(lefts>that.sideObjW-that.objW){
                    lefts=that.sideObjW-that.objW
                }
                if(tops<0){
                    tops=0;
                }
                if(tops>that.sideObjH-that.objH){
                    tops=that.sideObjH-that.objH
                }
            }
            if(that.x) {
                that.obj.style.left =lefts  + "px";
            }
            if(that.y) {
                that.obj.style.top = tops + "px";
             }
            that.lenx=that.endx-that.startx;
            that.leny=that.endy-that.starty;
            that.startx=that.endx;
            that.starty=that.endy;
            ev.preventDefault();
            }
    },
    getOffset:function (e,type){
        if(type=="x") {
            return e.offsetX || e.layerX || 0;
        }else if(type=="y"){
            return e.offsetY || e.layerY || 0;

        }
    },
    up:function (){
        var that=this;
       document.onmouseup=function(){
           var temp=Math.abs(that.lenx)>Math.abs(that.leny)?true:false;
           if(that.animate){
               var t=setInterval(function(){
                   if(temp){
                       if(Math.abs(that.lenx)<1){
                           clearInterval(t)
                       }
                   }else{
                       if(Math.abs(that.leny)<1){
                           clearInterval(t)

                       }
                   }
                   that.lenx*=that.scale;
                   that.leny*=that.scale;
                   var lefts=that.obj.offsetLeft + that.lenx;
                   var tops=that.obj.offsetTop + that.leny;
                   if(that.sideObj){
                       if(lefts<0){
                           lefts=0;
                       }
                       if(lefts>that.sideObjW-that.objW){
                           lefts=that.sideObjW-that.objW
                       }
                       if(tops<0){
                           tops=0;
                       }
                       if(tops>that.sideObjH-that.objH){
                           tops=that.sideObjH-that.objH
                       }
                   }


                   if(that.x) {
                       that.obj.style.left = lefts + "px";
                   }
                   if(that.y) {
                       that.obj.style.top = tops + "px";
                   }

               },50)
           }

           document.onmousemove=null;
           document.onmouseup=null;
       }
    }

}