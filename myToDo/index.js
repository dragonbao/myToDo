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
			{task:"读一本书",ischecked:false},
			{task:"write a small program",ischecked:false},
			{task:"be a better man",ischecked:false},
			{task:"catch you breath",ischecked:false}
			],
			newtask:"",
			// isChecked:""
		},
		methods:{
			submit(ev){

				// console.log(this.newtask);
				if(this.newtask!=""){
				this.tasks.push({
					task:this.newtask,ischecked:false
				});
			}
				this.newtask ="";

			},
			checkout(flag){
				console.log(this);
			},
			delect(item){
				// alert(item)
				var index = this.tasks.indexOf(item);
				this.tasks.splice(index,1)

			}
		}

	})
}