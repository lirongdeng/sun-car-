//轮播图部分
var c=0;
function run(){
	c++
	t=1;
//	三元表达式
	c = (c==4)?0:c;
	$("#flash .box .fla img").eq(c).fadeIn().siblings('img').fadeOut();
	$("#flash .box .fla ul li").eq(c).css({'borderColor':'#008BFF','background':'white'}).siblings('li').css({'border': '3px solid black','background':'none'})
}
	
//定时器
 var timer = setInterval(run,1500);
//定时器结束

//鼠标移入li切换对应图片
$("#flash .box .fla ul li").mouseenter(function(){
//	清理定时器
	clearInterval(timer);
//	把当前移入的li的序号存到变量c之中
	c = $(this).index();
	$("#flash .box .fla img").eq(c).stop().fadeIn(500).siblings('img').stop().fadeOut(500);
	$("#flash .box .fla ul li").eq(c).css({'borderColor':'#008BFF','background':'white'}).siblings('li').css({'border':'3px solid black','background':'none'});
})
//鼠标移入li切换对应图片结束

//鼠标移出事件,恢复定时器
$("#flash .box .fla ul li").mouseleave(function(){
	timer = setInterval(run,1500);
});
//鼠标移出事件结束

//轮播图部分结束

//热卖好车开始
var d=0;
$("#jiameng .top p").mouseenter(function(){
	$(this).prop('class','sty').siblings('p').prop('class','');
	d=$(this).index();
	$('#jiameng .right>div').eq(d).show().siblings('div').hide();
})
//热卖好车结束


//阳光视频开始
var num=0;

var st;
function action(){
	num++;
	if (num==3) {
		num=0;
	}
	$("#vid .left>div").eq(num).stop(true,true).fadeIn(500).siblings('div').stop(true,true).fadeOut(500);
	$('#vid .left ul li').eq(num).css({'background':'#0000FF'}).siblings('li').css({'background':'#cccccc'});
	console.log(num);
}
var timer2 = setInterval(action,2500);
var st;
$("#vid .left .next").click(function(){
	clearTimeout(st);
	clearInterval(timer2);
	st = setTimeout(function(){
		var timer2 = setInterval(action,2500)
	},2000)
	num++;
	if (num==3) {
		num=0;
	}
	$("#vid .left>div").eq(num).stop().fadeIn(500).siblings('div').stop().fadeOut(500);
	$('#vid .left ul li').eq(num).css({'background':'#0000FF'}).siblings('li').css({'background':'#cccccc'});
})
$("#vid .left .prev").click(function(){
	clearInterval(timer2);
	clearTimeout(st);
	st = setTimeout(function(){
		var timer2 = setInterval(action,2500)
	},2000)
	num--;
	if (num<0) {
		num=2;
	}
	$("#vid .left>div").eq(num).stop(true,true).fadeIn(500).siblings('div').stop(true,true).fadeOut(500);
	$('#vid .left ul li').eq(num).css({'background':'#0000FF'}).siblings('li').css({'background':'#cccccc'});
	console.log(t);
})
$("#vid .left ul li").click(function(){
	clearInterval(timer2);
	clearTimeout(st);
	st = setTimeout(function(){
		var timer2 = setInterval(action,2500)
	},2000)
	num=$(this).index();
	$("#vid .left>div").eq(num).stop(true,true).fadeIn(500).siblings('div').stop(true,true).fadeOut(500);
	$('#vid .left ul li').eq(num).css({'background':'#0000FF'}).siblings('li').css({'background':'#cccccc'});
})

//阳光视频结束



















