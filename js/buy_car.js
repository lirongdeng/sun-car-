var d=0;
$("#box ul li").click(function(){
	$(this).prop('class','sty').siblings('li').prop('class','');
	d=$(this).index();
	$('#box>div').eq(d).show().siblings('div').hide();
})
$("#box ul span").click(function(){
	d++;
	if (d==6) {
		d=0;
	}
	$('#box ul li').eq(d).prop('class','sty').siblings('li').prop('class','');
	$('#box>div').eq(d).show().siblings('div').hide();
})



















