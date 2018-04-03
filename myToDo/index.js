"use strict";
window.onload=function(){
	var vm =new Vue({
		el:".myToDo",
		data:{
			items:[
			{item:"所有任务"},
			{item:"未完成任务"},
			{item:"完成的任务"}
			],
			tasklist:"任务列表",
			notask:"还没有添加任何任务哦！",
			tasks:[
			{task:"读一本书"},
			{task:"write a small program"},
			{task:"be a better man"},
			{task:"catch you breath"}
			],
			newtask:"",
			// isChecked:""
		},
		methods:{
			submit(ev){

				// console.log(this.newtask);
				if(this.newtask!=""){
				this.tasks.push({
					task:this.newtask
				});
			}
				this.newtask ="";

			},
			checkout(flag){
				console.log(this);
			}
		}

	})
}