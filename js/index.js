$(document).ready(function () {
    //报名管理
    var flag=true;
    $('.bmgl-icon').click(function () {
        $('.nav-parent').hide();
        $('.bmgj-iconshow').show();
        $('.bmgj-iconshow').children('.children').show();
        $('.bmgj-iconshow > a').css('background-image','url(images/minus.png)');
        $('.bmgj-iconshow > a').click(function () {
            if(flag){
                $('.bmgj-iconshow > a').css('background-image','url(images/plus.png)');
                flag=false;
            }else{
                $('.bmgj-iconshow > a').css('background-image','url(images/minus.png)');
                flag=true;
            }
        })
    })
    //学员管理
    $('.xygl-icon').click(function () {
        $('.nav-parent').hide();
        $('.xygl-iconshow').show();
        $('.xygl-iconshow').children('.children').show();
        $('.xygl-iconshow > a').css({'background-image':'url(images/minus.png)','background-color':'#1CAF9A','color':'#fff'});
        $('.xygl-iconshow > a').click(function () {
            if(flag){
                $('.xygl-iconshow > a').css('background-image','url(images/plus.png)');
                flag=false;
            }else{
                $('.xygl-iconshow > a').css('background-image','url(images/minus.png)');
                flag=true;
            }
        })
    })
    //培训
    $('.px-icon').click(function () {
        $('.nav-parent').hide();
        $('.px-iconshow').show();
        $('.px-iconshow').children('.children').show();
        $('.px-iconshow > a').css({'background-image':'url(images/minus.png)','background-color':'#1CAF9A','color':'#fff'});
        $('.px-iconshow > a').click(function () {
            if(flag){
                $(this).css('background-image','url(images/plus.png)');
                flag=false;
            }else{
                $(this).css('background-image','url(images/minus.png)');
                flag=true;
            }
        })
    })
    //考试
    $('.ks-icon').click(function () {
        $('.nav-parent').hide();
        $('.ks-iconshow').show();
        $('.ks-iconshow').children('.children').show();
        $('.ks-iconshow > a').css({'background-image':'url(images/minus.png)','background-color':'#1CAF9A','color':'#fff'});
        $('.ks-iconshow > a').click(function () {
            if(flag){
                $(this).css('background-image','url(images/plus.png)');
                flag=false;
            }else{
                $(this).css('background-image','url(images/minus.png)');
                flag=true;
            }
        })
    })
    //财务管理
    $('.cwgl-icon').click(function () {
        $('.nav-parent').hide();
        $('.cwgl-iconshow').show();
        $('.cwgl-iconshow').children('.children').show();
        $('.cwgl-iconshow > a').css({'background-image':'url(images/minus.png)','background-color':'#1CAF9A','color':'#fff'});
        $('.cwgl-iconshow > a').click(function () {
            if(flag){
                $(this).css('background-image','url(images/plus.png)');
                flag=false;
            }else{
                $(this).css('background-image','url(images/minus.png)');
                flag=true;
            }
        })
    })
    //基础信息
    $('.jcxx-icon').click(function () {
        $('.nav-parent').hide();
        $('.jcxx-iconshow').show();
        $('.jcxx-iconshow').children('.children').show();
        $('.jcxx-iconshow > a').css({'background-image':'url(images/minus.png)','background-color':'#1CAF9A','color':'#fff'});
        $('.jcxx-iconshow > a').click(function () {
            if(flag){
                $(this).css('background-image','url(images/plus.png)');
                flag=false;
            }else{
                $(this).css('background-image','url(images/minus.png)');
                flag=true;
            }
        })
    })
    //个人中心
    $('.grzx-icon').click(function () {
        $('.nav-parent').hide();
        $('.grzx-iconshow').show();
        $('.grzx-iconshow').children('.children').show();
        $('.grzx-iconshow > a').css({'background-image':'url(images/minus.png)','background-color':'#1CAF9A','color':'#fff'});
        $('.grzx-iconshow > a').click(function () {
            if(flag){
                $(this).css('background-image','url(images/plus.png)');
                flag=false;
            }else{
                $(this).css('background-image','url(images/minus.png)');
                flag=true;
            }
        })
    })
    //系统管理
    $('.xtgl-icon').click(function () {
        $('.nav-parent').hide();
        $('.xtgl-iconshow').show();
        $('.xtgl-iconshow').children('.children').show();
        $('.xtgl-iconshow > a').css({'background-image':'url(images/minus.png)','background-color':'#1CAF9A','color':'#fff'});
        $('.xtgl-iconshow > a').click(function () {
            if(flag){
                $(this).css('background-image','url(images/plus.png)');
                flag=false;
            }else{
                $(this).css('background-image','url(images/minus.png)');
                flag=true;
            }
        })
    })
    //复选框
    /*var ci=document.getElementById('check-icon');
    var cx=document.getElementsByClassName('check-xz');
    ci.onclick= function () {
        if(ci.checked==true){
            for(var i=0;i<cx.length;i++){
                cx[i].checked=true;
            }
        }else{
            for(var i=0;i<cx.length;i++){
                cx[i].checked=false;
            }
        }
    }*/
    var ci=$('#check-icon');
    var ci1=$('#check-icon1');
    var ci2=$('#check-icon2');
    var ci3=$('#check-icon3');
    var ci4=$('#check-icon4');
    var ci5=$('#check-icon5');
    var ci6=$('#check-icon6');
    var ci7=$('#check-icon7');
    var ci8=$('#check-icon8');
    var ci9=$('#check-icon9');
    var ci10=$('#check-icon10');
    var ci11=$('#check-icon11');
    var ci12=$('#check-icon12');
    var cx=$('.check-xz');
    var cx1=$('.check-xz1');
    var cx2=$('.check-xz2');
    var cx3=$('.check-xz3');
    var cx4=$('.check-xz4');
    var cx5=$('.check-xz5');
    var cx6=$('.check-xz6');
    var cx7=$('.check-xz7');
    var cx8=$('.check-xz8');
    var cx9=$('.check-xz9');
    var cx10=$('.check-xz10');
    var cx11=$('.check-xz11');
    var cx12=$('.check-xz12');
    ci.click(function () {
        if(this.checked){
            cx.attr('checked',true);
        }else{
            cx.attr('checked',false);
        }
    })
    ci1.click(function () {
        if(this.checked){
            cx1.attr('checked',true);
        }else{
            cx1.attr('checked',false);
        }
    })
    ci2.click(function () {
        if(this.checked){
            cx2.attr('checked',true);
        }else{
            cx2.attr('checked',false);
        }
    })
    ci3.click(function () {
        if(this.checked){
            cx3.attr('checked',true);
        }else{
            cx3.attr('checked',false);
        }
    })
    ci4.click(function () {
        if(this.checked){
            cx4.attr('checked',true);
        }else{
            cx4.attr('checked',false);
        }
    })
    ci5.click(function () {
        if(this.checked){
            cx5.attr('checked',true);
        }else{
            cx5.attr('checked',false);
        }
    })
    ci6.click(function () {
        if(this.checked){
            cx6.attr('checked',true);
        }else{
            cx6.attr('checked',false);
        }
    })
    ci7.click(function () {
        if(this.checked){
            cx7.attr('checked',true);
        }else{
            cx7.attr('checked',false);
        }
    })
    ci8.click(function () {
        if(this.checked){
            cx8.attr('checked',true);
        }else{
            cx8.attr('checked',false);
        }
    })
    ci9.click(function () {
        if(this.checked){
            cx9.attr('checked',true);
        }else{
            cx9.attr('checked',false);
        }
    })
    ci10.click(function () {
        if(this.checked){
            cx10.attr('checked',true);
        }else{
            cx10.attr('checked',false);
        }
    })
    ci11.click(function () {
        if(this.checked){
            cx11.attr('checked',true);
        }else{
            cx11.attr('checked',false);
        }
    })
    ci12.click(function () {
        if(this.checked){
            cx12.attr('checked',true);
        }else{
            cx12.attr('checked',false);
        }
    })

    //日历
    $('.form_date').datetimepicker({
        language: 'zh-CN',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
    //读取身份证
    var cw=$(window).width();
    var ch=$(window).height();
    var iw=$('.sfz-hide').width();
    var ih=$('.sfz-hide').height();
    var il=(cw-iw)/2;
    var it=(ch-ih)/2;
    $('.sfz-show').click(function () {
        $('.hide-box').hide();
        $('.sfz-hide').show().css({position:'fixed',top:it+'px',left:il+'px',zIndex:100});
        var sfzhide=$('.sfz-hide')[0];
        new drag(sfzhide,{animate:false,sideObj:document});
    })
    $('.sfz-close').click(function () {
        $('.sfz-hide').hide();
    })

    //打印
    //*********************************************
    var iw2=$('.yyddy-hide').width();
    var ih2=$('.yyddy-hide').height();
    var il2=(cw-iw2)/2;
    var it2=(ch-ih2)/2;
    $('.yyddy-show').click(function () {
        $('.hide-box').hide();
        $('.yyddy-hide').show().css({position:'fixed',top:it2+'px',left:il2+'px',zIndex:100});
        var yyddyhide=$('.yyddy-hide')[0];
        new drag(yyddyhide,{animate:false,sideObj:document});
    })
    $('.yyddy-close').click(function () {
        $('.yyddy-hide').hide();
    })
    //教练替班
    //*********************************************
    var iw3=$('.jltb-hide').width();
    var ih3=$('.jltb-hide').height();
    var il3=(cw-iw3)/2;
    var it3=(ch-ih3)/2;
    $('.jltb-show').click(function () {
        $('.hide-box').hide();
        $('.jltb-hide').show().css({position:'fixed',top:it3+'px',left:il3+'px',zIndex:100});
        var jltbhide=$('.jltb-hide')[0];
        new drag(jltbhide,{animate:false,sideObj:document});
    })
    $('.jltb-close').click(function () {
        $('.jltb-hide').hide();
    })
})