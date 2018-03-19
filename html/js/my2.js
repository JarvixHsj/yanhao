(function($1,$2){
		/*得到某年的某月有几天*/
		function getCurrentAllDays(year,monthnumber) {
			var curDate = new Date();
			if(year){
				curDate.setFullYear(parseInt(year));
			}
	       	var curMonth = curDate.getMonth();
			if(monthnumber){
				curMonth = parseInt(monthnumber);
				curDate.setMonth(curMonth+1);
				curDate.setDate(0);
				return curDate.getDate();		
			}else{
        		curDate.setMonth(curMonth+1);
        		curDate.setDate(0);
        		return curDate.getDate();			
			}
 		}
		
		function getCalender(year,month){
			/* m：代表几月 
			 * y：代表年份 
			 * d：代表这个月的总天数'
			 * fw: 代表1号是周几
			 * lw: 代表每个月的最后一天是周几
			 * 
			 * */
			var daten = new Date();
			if(year&&month&&month<13&&month>0){
				daten.setFullYear(year,(month-1))
			}
			
			var m = daten.getMonth();
			var y = daten.getFullYear()
			var d = getCurrentAllDays(y,m)
			daten.setDate(1);
			var fw = daten.getUTCDay();
			daten.setDate(d);
			var lw = daten.getUTCDay();
			$("#year-time").html(y);
			$("#month-time").html(m+1)
			console.log(y+"年"+(m+1)+"月  有"+d+"天,第一天是星期"+fw+" ,最后一天是星期"+lw )
			
			/*算出前一个月的有多少天*/
			var dal = [];
			var bd = getCurrentAllDays(y,m-1)
			var ad = getCurrentAllDays(y,m+1)
			
			var x = (m+1);
			
			for (var i=bd-(fw-1) ;i <=bd  ;i++) {
				var h = {"y":(x-1)>0?y:(y-1),"m":(x-1)>0?(x-1):12,"d":i};
				dal.push(h)
			}
			
			for(var i=1 ;i<=d ;i++){
				var h = {"y":y,"m":x,"d":i};
				dal.push(h)
			}
			for(var i = 1 ,len = dal.length ;i<=42-len;i++){
				var h = {"y":(x+1)>12?(y+1):y,"m":(x+1)>12?1:(x+1),"d":i};
				dal.push(h)
			}
			return dal;
		}
		
		function forCalender(year,month){
			var n = getCalender(year,month);
			var l = n.length;
			$("#calender-day-id").html("");
			





			for(var d = 0 ; d < 6 ;d++){
				var html = "<div class=\"group dis-flex\">";
				for(var i = (d*7) ;i <= l ;i++){
					if(i%6==0){
						html+="<div class=\"group-one\">"+
								"<div class=\"group-center group-align-self week-backgroundF3\">"+
									"<p class=\"week-font-size32\"  data-time=\""+n[i].y+n[i].m+n[i].d+"\">"+n[i].d+"</p>"+
									"<p class=\"week-font-size20\" style=\"margin-top:-0.08rem;\">广州</p>"+
								"</div>"+
							"</div>";
					}else if(i%9==0){
						html+="<div class=\"group-one\">"+
								"<div class=\"group-center group-align-self week-background4B\">"+
									"<p class=\"week-font-size32\"  data-time=\""+n[i].y+n[i].m+n[i].d+"\">"+n[i].d+"</p>"+
									"<p class=\"week-font-size20\" style=\"margin-top:-0.08rem;\">广州</p>"+
								"</div>"+
							"</div>";
					}else{
						html+="<div class=\"group-one\">"+
								"<div class=\"group-center dis-flex box-center\">"+
									"<span class=\"up-number week-font-size32\" data-time=\""+n[i].y+n[i].m+n[i].d+"\">"+n[i].d+"</span>"+
								"</div>"+
							"</div>";
					}
					if((i+1)!=d*7&&((i+1)%7==0)){
						break;
					}
				}
				html += "</div>";
				$("#calender-day-id").append(html);
			}
			var html2 = "<div class=\"group dis-flex my-border-top\">"+
							"<div class=\"group-rest\">"+"</div>"+
							"<div class=\"group-rest dis-flex box-al-center box-ju-end\">"+
								"<span class=\"rest-info week-background4B\">"+"</span>"+
								"<span class=\"rest-comment week-font-size32 my-margin-rigth\">预约</span>"+
								"<span class=\"rest-info week-backgroundF3\">"+"</span>"+
								"<span class=\"rest-comment  week-font-size32 my-margin-rigth\">休息</span>"+
							"</div>"+
						"</div>";
			$("#calender-day-id").append(html2);
		}
		forCalender();
		
		$("#prev-time").on("tap",function(e){
			var y = parseInt($("#year-time").text());
			var m = parseInt($("#month-time").text());
			if(0===(m-1)){
				forCalender(y-1,12)
			}else{
				forCalender(y,m-1)
			}
		});
		$("#next-time").on("tap",function(e){
			var y = parseInt($("#year-time").text());
			var m = parseInt($("#month-time").text());
			if(12<(m+1)){
				forCalender(y+1,1)
			}else{
				forCalender(y,m+1)
			}
		});
		
		$("#calender-day-id").on("swipeleft",function(){
			var y = parseInt($("#year-time").text());
			var m = parseInt($("#month-time").text());
			if(12<(m+1)){
				forCalender(y+1,1)
			}else{
				forCalender(y,m+1)
			}
		});
		$("#calender-day-id").on("swiperight",function(){
			var y = parseInt($("#year-time").text());
			var m = parseInt($("#month-time").text());
			if(0===(m-1)){
				forCalender(y-1,12)
			}else{
				forCalender(y,m-1)
			}
		});
		$("#local-time").on("tap",function(){
			forCalender();
		});
		
		$(".tab-menu").on("tap",function(){
			$(".tab-menu").removeClass("my-font-color-F35353")
			$(this).addClass("my-font-color-F35353")
			var i = $(this).index()+1;
			$(".tab-menu-list").each(function(){
				$(this).addClass("active");
			});
        	
        	var list = $("#tab-menu"+i+"").find(".or-list");
        	if(list.length==0){
				$("#tab-menu"+i+"").removeClass("active").addClass("center-text")
        	}else{
        		$("#tab-menu"+i+"").removeClass("active");
        	}
		});
		
		})(Zepto,touch)