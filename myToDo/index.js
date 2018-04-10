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
			{task:"读一本书",ischecked:false,isedit:false},
			{task:"write a small program",ischecked:false,isedit:false},
			{task:"be a better man",ischecked:false,isedit:false},
			{task:"catch you breath",ischecked:false,isedit:false}
			],
			newtask:""
			
			// isChecked:""
		},
		methods:{
			submit(ev){

				// console.log(this.newtask);
				if(this.newtask!=""){
				this.tasks.push({
					task:this.newtask,ischecked:false,isedit:false
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
			},
			edititem(item){
				console.log(item);
				item.isedit = true;
				// var index = this.tasks.indexOf(item);
				// var btns =document.getElemensByClassName("btns")[index];
				// btn.style.border = "2px #33c";

			}
		}

	})
}