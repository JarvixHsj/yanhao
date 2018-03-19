 $('.content').dropload({
    scrollArea : window,
    loadDownFn : function(me){
    if(len < 7){
    		// 锁定
            me.lock();
            // 无数据
            me.noData();
    	}
	me.resetload();
    error: function(xhr, type){
        alert('Ajax error!');
        // 即使加载出错，也得重置
        me.resetload();
    }
});