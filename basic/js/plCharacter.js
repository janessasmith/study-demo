/**
 * Created by helloxwz on 2015/9/14.
 */
$(document).ready(function(){
//    整体滑屏效果
    slideScreen();
    $('.plCharacter_nav ul li').click(function(){
        var sch=$(window).height()||$(document).height();
        sch-=60;
        if(!$('.page').is(":animated")){
            var pageIndex;
            for(var i=0;i<$('.page').length;i++){
                if($('.page').eq(i).hasClass('active_page')){
                    pageIndex=i;
                }
            }
            var index=$('.plCharacter_nav ul li').index(this);
            $('.page').eq(index).addClass('active_page').siblings().removeClass('active_page');
            if(index==pageIndex) return;
            if(index>pageIndex){
                $('.page').eq(pageIndex).stop(true,true).animate({'top':-sch+'px'},500);
                $('.page').eq(index).stop(true,true).animate({'top':0+'px'},500);

            }else{
                $('.page').eq(pageIndex).stop(true,true).animate({'top':sch+'px'},500);
                $('.page').eq(index).stop(true,true).animate({'top':0+'px'},500);
            }
            setTimeout(function(){
                for(var k=0;k<$('.page').length;k++){
                    if(k!=pageIndex&&k<index){
                        $('.page').eq(k).stop(false,true).css({'top':-sch+'px'});
                    }
                    if(k>index){
                        $('.page').eq(k).stop(false,true).css({'top':sch+'px'});
                    }
                }
            },500);
        }

    });
//    滚动滑屏
    $(document).mousewheel(function(event, delta, deltaX, deltaY){
        event = event || window.event;
        var sch=$(window).height()||$(document).height();
        sch-=60;
       if(!$('.page').is(':animated')){
           var pageIndex;
           for(var i=0;i<$('.page').length;i++){
               if($('.page').eq(i).hasClass('active_page')){
                   pageIndex=i;
               }
           }
           if(delta>0){
               if(pageIndex-1<0)return;

               $('.page').eq(pageIndex-1).addClass('active_page').siblings().removeClass('active_page');
               $('.page').eq(pageIndex).stop(true,true).animate({'top':sch+'px'},500);
               $('.page').eq(pageIndex-1).stop(true,true).animate({'top':0+'px'},500);

           }else{

               if(pageIndex+1>$('.page').length-1) return;
               $('.page').eq(pageIndex+1).addClass('active_page').siblings().removeClass('active_page');
               $('.page').eq(pageIndex).stop(true,true).animate({'top':-sch+'px'},500);
               $('.page').eq(pageIndex+1).stop(true,true).animate({'top':0+'px'},500);
           }

       }
    });
//    历史人物

    setModule($('.plCharacter'));
    history();
    setHistoryImg();
//   history_click
    $('.history_left').click(function(){
        var historyImgWidth=$('.history_img_container>div').eq(0).width()+40;
        clickPlay_right($('.history_img_container'),historyImgWidth);
    });
    $('.history_right').click(function(){
        var historyImgWidth=$('.history_img_container>div').eq(0).width()+40;
        clickPlay_left($('.history_img_container'),historyImgWidth);
    });
//    stories_txt字数限制
    stories_txt();
    setModule($('#stories'));
    setModule($('.stories_img_box'));
    setIMG($('.stories_img_box img'));
    clone($('.history_img >.history_img_container'));
    setStoriestxt();
//
    clone2($('.stories_img>.stories_img_container'));
    imgParent($('.stories_img>.stories_img_container'));

//  stories点击
    $('.stories_btn_left').click(function(){
        rightBtnAddClass($('.stories_txt>div'),'stories_txt_select');
        var imgWidth=$('.stories_img_container div').width();
        clickPlay_right($('.stories_img_container'),imgWidth);

    });
    $('.stories_btn_right').click(function(){
        var imgWidth=$('.stories_img_container div').width();
        clickPlay_left($('.stories_img_container'),imgWidth)
      leftBtnAddClass($('.stories_txt>div'),'stories_txt_select')
    });
//    人物
    ddrwHumbnail_box();
    clone($('.thumbnail_container'));
    $('.thumbnail_right').click(function(){
        var imgwidth;
       if($('.thumbnail').eq(0).hasClass('thumbnail_select')){
           imgwidth=$('.thumbnail').eq(1).width()+5;
       }else{
           imgwidth=$('.thumbnail').eq(0).width()+5;
       }
        clickPlay_left($('.thumbnail_container'),imgwidth)
        //console.log(imgwidth)
    });
    $('.thumbnail_left').click(function(){
        var imgwidth;
        if($('.thumbnail').eq(0).hasClass('thumbnail_select')){
            imgwidth=$('.thumbnail').eq(1).width()+5;
        }else{
            imgwidth=$('.thumbnail').eq(0).width()+5;
        }
        //console.log(imgwidth)
        clickPlay_right($('.thumbnail_container'),imgwidth)
    });
    $('.thumbnail').mouseenter(function(){
        if(!$('.ddrw_img_container').is(':animated')) {
            var index = $('.thumbnail').index(this);
            if (index >= $('.thumbnail').length / 2) index -= $('.thumbnail').length / 2;
            $(this).addClass('thumbnail_select').siblings().removeClass('thumbnail_select');
            $(this).parent().siblings().children().eq(index).addClass('thumbnail_select').siblings().removeClass('thumbnail_select');
            var index2 = $('.thumbnail').index(this);
            var imgIndex;
            for (var i = 0; i < $('.ddrw_img_container>.ddrw_img_box').length; i++) {
                if ($('.ddrw_img_container>.ddrw_img_box').eq(i).hasClass('select_img')) {
                    imgIndex = i;
                    break;
                }
            }
            $('.ddrw_img_container>.ddrw_img_box').eq(index).siblings().removeClass('select_img')
            setTimeout(function(){
                $('.ddrw_img_container>.ddrw_img_box').eq(index).addClass('select_img').siblings().removeClass('select_img');
            },300)

            var imgWith = $('.ddrw_img_container>.ddrw_img_box').eq(0).width() + 40;
            var nowPosition = $('.ddrw_img_container').position().left;
            //console.log(index2);
            //console.log(index);
            $('.ddrw_img_container').stop(true, true).animate({'left': (imgIndex - index) * imgWith + nowPosition + 'px'}, 300)

        }

    });
    setDdrwImg();
    setDdrwPosition();
    ddrw_txt();
    ddrwthPosition();
    setModule($('.ddrw'));
    setModule($('.stories_img'));
    setModule($('.stories_container'));
//    好人榜
    setgoodList();
    setModule($('.goodList_bg'));
    setModule($('.goodList'));
    clone($('.goodList_img_box'));
    setIMG($('.goodList_bg>img'))
    $('.goodList_left').click(function(){
       var imgWidth=$('.goodList_img_box>div').eq(0).width()+40;
        clickPlay_right($('.goodList_img_box'),imgWidth);

    });
    $('.goodList_right').click(function(){
       var imgWidth=$('.goodList_img_box>div').eq(0).width()+40;
        clickPlay_left($('.goodList_img_box'),imgWidth);
    });
    goodListMargin();
//    平凉人的一天
    setModule($('.plDay_bg'));
    setIMG($('.plDay_bg >img'));
    setModule($('.plDay'));
    plDay_txt();
    plDayMargin();
    clone($('.plDay_container'));
    $('.pdDay_btn_perv').click(function(){
        var imgwidth= $('.plDay_container>div').eq(0).width();
        clickPlay_right($('.plDay_container'),imgwidth);
    });
    $('.pdDay_btn_next').click(function(){
        var imgwidth= $('.plDay_container>div').eq(0).width();
        clickPlay_left($('.plDay_container'),imgwidth);
    });
});
window.onresize=function(){
    setPagePosition();
    setModule($('.plCharacter'));
    history();
    setModule($('#stories'));
    setModule($('.stories_img_box'));
    setIMG($('.stories_img_box img'));
    setStoriestxt();
    imgParent($('.stories_img>.stories_img_container'));
    setModule($('.ddrw'));
    ddrwthPosition();
    setModule($('.goodList_bg'));
    setIMG($('.goodList_bg>img'));
    setModule($('.goodList'));
    goodListMargin();
    setModule($('.plDay_bg'));
    setModule($('.plDay'));
    setIMG($('.plDay_bg  img'));
    plDayMargin();
}
//设置history—背景与布局
function history(){
    var screen_width=$(window).width()||$(document).width();
    var screen_height=$(window).height()||$(document).height();
    screen_height-=60;
    $('#history').css('width',screen_width+'px');
    $('#history').css('height',screen_height+'px');
    var img_width=1920;
    var img_height=660;
    $('.history_icon').css({'margin-top':88*(screen_height/img_height)+'px','margin-bottom':30*(screen_height/img_height)+'px'});
    $('.history_img_box').css({'margin-top':40*(screen_height/img_height)+'px'});
    if(screen_width/screen_height>img_width/img_height){
        var new_height=screen_width*(img_height/img_width);
        $('.history_bg>img').css({'width':screen_width+"px"});
        $('#history_bg>img').css('height',new_height+'px');
        $('#history_bg').css({'top':(screen_height-new_height)/2+'px','left':0+"px"});
    }else{
        if((img_width/img_height))
        var new_width=screen_height*(img_width/img_height);
        $('#history_bg>img').css('width',new_width+"px");
        $('#history_bg>img').css('height',screen_height+'px');

        $('#history_bg').css({'left':(screen_width-new_width)/2+'px','top':0+'px'});
    }
}
//设置history切换图片
function setHistoryImg(){
   var historyImgWidth=$('.history_img_container>div').eq(0).width()+40;
   var historyImgCount=$('.history_img_container>div').length;
    $('.history_img_container').css({'width':historyImgCount*historyImgWidth+'px'});
}
//限制stories文本字数
function stories_txt(){
    for(var i=0;i<$('.stories_txt_cont>p').length;i++){
        var news_txt =$('.stories_txt_cont>p').eq(i).text();
        if(news_txt.length>=120){
            var  txt=news_txt.substr(0,120)+'...';
            $('.stories_txt_cont>p').eq(i).text(txt);
        }
    }

}
//    设置div高度等于屏幕高度
function setModule(div){
    var screen_width=$(window).width()||$(document).width();
    var screen_height=$(window).height()||$(document).height();
    screen_height-=60;
    div.css({'width':screen_width+'px','height':screen_height+'px'});
}
//设置图片自适应
function setIMG(img){
    var imgWidth=img.width();
    var imgHeight=img.height();
    var screen_width=$(window).width()||$(document).width();
    var screen_height=$(window).height()||$(document).height();
    if(screen_width/screen_height>imgWidth/imgHeight){
        var imgNewHeight=screen_width*(imgHeight/imgWidth);
        img.css({'width':screen_width+'px','height':imgNewHeight+'px','top':(screen_height-imgNewHeight)/2+'px',
        'left':0+'px'});
    }else{
        var imgNewWidth=screen_height*(imgWidth/imgHeight);
        img.css({'width':imgNewWidth+'px','height':screen_height+'px','top':0+'px',
            'left':(screen_width-imgNewWidth)/2+'px'});
        //console.log(2)
    }
}
//设置margin-top
function setStoriestxt(){
    var screen_height=$(window).height();
    var width=660;
    $('.stories_title').css({'margin-top':40*screen_height/width+'px'});
    $('.stories_txt').css({'margin-top':165*screen_height/width+'px'});
    var now_margin=280;
    $('.stories_link_btn').css({'margin-top':now_margin*screen_height/width+'px'});
}
//克隆div-img宽度不变
function clone(div){
    var divclone=div.clone();
    div.after(divclone);
    var divWidth=div.width();
    for(var i=0;i<div.parent().children().length;i++){
        div.parent().children().eq(i).css({'left':divWidth*i+'px'});
    }
}
//克隆div-img变化
function clone2(div){
    var divclone=div.clone();
    div.after(divclone);
}
//克隆之后设置img父级的长度及位置
function imgParent(div){

    var imgWidth=div.children().eq(0).width();
    var imgCount=div.children().length/2;
    div.css({'width':imgWidth*imgCount+'px'});
    for(var i=0;i<div.length;i++){
        div.eq(i).css({'left':div.width()*i+'px'});
    }
}
function clickPlay_left(div,imgwidth){
    if(!div.is(':animated')){
        for(var i=0;i<div.length;i++){
            if(div.eq(i).position().left<=-div.eq(i).width()){
               var pervLeft= div.eq(i).siblings().position().left;
                //console.log(pervLeft)
                div.eq(i).css({'left':pervLeft+div.eq(i).width()+'px'});
            }
            var historyContainer=div.eq(i).position().left;
            var news_position=historyContainer-imgwidth;
            div.eq(i).stop(true,true).animate({'left':news_position+'px'},300);
        }
    }
}
function clickPlay_right(div,imgwidth){
    if(!div.is(':animated')){
        for(var i=0;i<div.length;i++){
            if(div.eq(i).position().left>=div.parent().width()){
                var pervLeft= div.eq(i).siblings().position().left;

                div.eq(i).css({'left':-div.eq(i).width()+pervLeft+'px'})
            }
            var historyContainer=div.eq(i).position().left;
            var news_position=historyContainer+imgwidth;
            div.eq(i).stop(true,true).animate({'left':news_position+'px'},300);
        }

    }

}
function leftBtnAddClass(div,className){
    setTimeout(function(){
        var index;
        for(var i=0;i<div.length;i++){
            if(div.eq(i).hasClass(className))
                index=i
        }
        //console.log(index);
        if(index==div.length-1){
            div.eq(0).addClass(className).siblings().removeClass(className)
        }
        div.eq(index).next().addClass(className).siblings().removeClass(className);
    },200)

}
function rightBtnAddClass(div,classname){
    setTimeout(function(){
        var index;
        for(var i=0;i<div.length;i++){
            if(div.eq(i).hasClass(classname))
                index=i
        }
        //console.log(index);
        if(index==0){
            div.eq(div.length-1).addClass(classname).siblings().removeClass(classname)
        }
        div.eq(index).prev().addClass(classname).siblings().removeClass(classname);
    },200)

}
//当代人物缩略图
function ddrwHumbnail_box(){
    var thumbnailCount=$('.thumbnail').length;
    var thumbnailWidth=$('.thumbnail').eq(0).width()+5;
    var thumbnailBoxWidth=(thumbnailCount-1)*thumbnailWidth+125;
    $('.thumbnail_container').css({'width':thumbnailBoxWidth+'px'})
}
//设置人物imgcontainer宽度;
function setDdrwImg(){

    var imgCount=$('.ddrw_img_container .ddrw_img_box').length;
    var imgWdith=$('.ddrw_img_container .ddrw_img_box').eq(0).width()+40;
    $('.ddrw_img_container').css({'width':imgCount*imgWdith+'px'});
}
function setDdrwPosition(){
    var containerWidth=$('.ddrw_img_container').width();
    var cw=$('.ddrw_center').width();
    for(var i=0;i<$('.ddrw_img_container').length;i++){
        if(($('.ddrw_img_container>div').length/2)%2==0){
            var imgWidth=$('.ddrw_img_container>div').eq(0).width()+80;
            $('.ddrw_img_container').eq(i).css({'left':(cw-(containerWidth+imgWidth))/2+containerWidth*i});
        }else{
            $('.ddrw_img_container').eq(i).css({'left':(cw-containerWidth)/2+containerWidth*i});
        }

    }
}
//人物字数限制
function ddrw_txt(){
    for(var i=0;i<$('.introduction').length;i++){
        var news_txt =$('.introduction').eq(i).text();
        if(news_txt.length>=140){
            var  txt=news_txt.substr(0,140)+'...';
            $('.introduction').eq(i).text(txt);
        }
    }
}
//人物定位
function ddrwthPosition(){
    var ch=$(window).height()||$(document).height();
    var cw=$(window).width()||$(document).width();
    $('.ddrw').css({'height':ch-60+'px'});

    if(ch>800){
        $('.ddrw_img').css('margin-top',((ch-60)/660)*60+'px');
        $('.ddrw_thumbnail').css('margin-top',(ch-60)/660*50+'px');
        //console.log(1)
        if(ch>1000){
            //console.log()
            $('.ddrw_img').css('margin-top',(ch-60)/660*100+'px');
            $('.ddrw_thumbnail').css('margin-top',(ch-60)/660*80+'px');
        }
    }else{
        $('.ddrw_img').css('margin-top',(ch-60)/660*10+'px');
    }
}
//好人榜图片box设置
function setgoodList(){
    var boxCount=$('.goodList_img_box>div').length;
    var imgWidth=$('.goodList_img_box>div').eq(0).width()+40;
    $('.goodList_img_box').css({'width':boxCount*imgWidth+'px'});
}
function goodListMargin(){
    var ch=$(window).height()||$(document).height();
    var height=660;

    if(ch>800){
        $('.goodList_cont').css({'margin-top':70*((ch-60)/660)+'px'});
        $('.goodList_title').css({'margin-top':53*((ch-60)/660)+'px'});
        if(ch>1000){
            $('.goodList_cont').css({'margin-top':100*((ch-60)/660)+'px'});
            $('.goodList_title').css({'margin-top':73*((ch-60)/660)+'px'});
        }
    }else {
        $('.goodList_cont').css({'margin-top': 52 * ((ch - 60) / 660) + 'px'});
        $('.goodList_title').css({'margin-top': 33 * ((ch - 60) / 660) + 'px'});
    }
}
//平凉人的一天字数限制
function plDay_txt(){
    for(var i=0;i<$('.plDay_cont_text').length;i++){
        var news_txt =$('.plDay_cont_text').eq(i).text();
        if(news_txt.length>=200){
            var  txt=news_txt.substr(0,200)+'...';
            $('.plDay_cont_text').eq(i).text(txt);
        }
    }
}
//自适应margin
function plDayMargin(){
    var ch=$(window).height()||$(document).height()-60;
    var height=660;
    var bl=ch/height;
    if(ch-60>660){
        $('.pdDay_btn').css({'margin-top':-34+(ch-60)*(34/660)+'px'})
        if(ch-60>900){
            $('.pdDay_btn').css({'margin-top':-34+(ch-60)*(34/660)+40+'px'})
        }
    }else{
        $('.pdDay_btn').css({'margin-top':-34+'px'});
    }
    if(ch-60>800){
        $('.plDay_title').css({'margin-top':40*bl+'px','margin-bottom':20*bl+'px'});
        if(ch-60>1000){

            $('.plDay_title').css({'margin-top':80*bl+'px','margin-bottom':40*bl+'px'});
        }
    }else{
        $('.plDay_title').css({'margin-top':20*bl+'px','margin-bottom':20*bl+'px'});
    }
}
//设置plDay_container宽度；
function plDay_container(){
    var imgcout=$('.plDay_container>div').length;
    var imgwidth=$('.plDay_container>div').eq(0).width();
    $('.plDay_container').css({'width':imgcout*imgwidth+'px'});
}
//整体滑屏效果
function slideScreen(){
    var sch=$(window).height()||$(document).height();
    sch-=60;
    $('.page').css({'top':sch+'px'});
    $('.active_page').css({'top':0+'px'});
}
//屏幕变化时调整位置。
function setPagePosition(){
    var cw=$(window).height()||$(document).height();
     cw-=60;
    for(var i=0;i<$('.page').length;i++){
        if($('.page').eq(i).position().top>0){
            $('.page').eq(i).css({'top':cw+'px'});
        }
        if($('.page').eq(i).position().top<0){
            $('.page').eq(i).css({'top':-cw+'px'});
        }
    }
}