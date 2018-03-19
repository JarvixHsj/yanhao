(function($1,$2) {
	//选择省市区
	var start_time_picker = new mui.DtPicker({"type":"date","beginYear":2010,"endYear":2100});
	/*city_picker.setData(init_city_picker);*/
	$1("#city-time")[0].addEventListener('tap', function() {
		var _self = this;
		/*setTimeout(function(){*/
		start_time_picker.show(function(items){
			/*$1("#useData_id").val(items.text);*/
			var obj = $2(_self).find("div").first();
			obj[0].innerText= (items.text);
		});
		/*},200);*/
		
	},false);
	
	//选择省市区
	var city_picker = new mui.PopPicker({layer:3});
	city_picker.setData(init_city_picker);
	$1("#city-text")[0].addEventListener('tap', function() {
		var _self = this;
		/*setTimeout(function(){*/
		city_picker.show(function(items){
			var obj = $2(_self).find("div").first();
			obj.html((items[0] || {}).text + " " + (items[1] || {}).text + " " + (items[2] || {}).text)
		});
		/*},200);*/
		
	},false);
	
	
	//选择性别
	var sex_picker = new mui.PopPicker({layer:1});
	sex_picker.setData([{value:1,text:'男'},{value:2,text:'女'}]);
	$1("#sex_picker")[0].addEventListener('tap', function() {
		var _self = this;
		/*setTimeout(function(){*/
		sex_picker.show(function(items){
			/*_self.innerText = (items[0] || {}).text + " " + (items[1] || {}).text + " " + (items[2] || {}).text;*/
			var obj = $2(_self).find("div").first();
			obj.html((items[0] || {}).text)
		});
		/*},200);*/
		
	},false);
	
	
	/*选择角色*/
	var time = 200;
	$2(".sp-inco-2>.inco").on("tap",function(){
		$2(".share-art").removeClass("active");
		$2(".bk-cover").removeClass("active");
 		$2(".share-art").animate({
 			bottom: '0'
 		},time,function(){
 			$2("body").addClass("uncorl");
 		});
 	});
 	$2(".share-art").on("tap",function(){
 		var h = $2(this).height();
 		$2(this).animate({
 			bottom: (-h)
 		},time,function(){
 			$2(this).addClass("active");
 			$2(".bk-cover").addClass("active");
 			$2("body").removeClass("uncorl");
 		});
 	});
 	$2(".main>.main-role>.role-comment>.rc-comment>.re-commnt-center>div").on("tap",function(){
 		if($2(this).hasClass("btn-active")){
 			$2(this).removeClass("btn-active")
 			$2(this).addClass("un-btn-active")
 		}else{
 			$2(this).removeClass("un-btn-active")
 			$2(this).addClass("btn-active")
 		}
 	});
 	
 	var role_obj= null;
 	$2("#select-role").on("tap",function(){
 		role_obj = this
		$2("section").first().addClass("active");
		$2("section").last().removeClass("active");
	});
 	
 	$2("#role-sibmit").on("tap",function(){
 		var arr2 = "";
 		$2(".role-t").each(function(item){
 			if($2(this).hasClass("btn-active")){
 				arr2+=$2(this).html()+"、"
 			}
 		});
 		$2("section").first().removeClass("active");
		$2("section").last().addClass("active");
		console.log()
		$2(role_obj).find("div").first().html(arr2);
 	});
})(mui,Zepto);