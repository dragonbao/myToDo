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
			newtask:"",
			previoustask:"",
			notes:" **双击每条任务或者使用后面的edit按钮都能够重新编辑你的任务哦** "
		},
		methods:{
			submit(){
				if(this.newtask!=""){
				this.tasks.push({
					task:this.newtask,ischecked:false,isedit:false
				})
			}
				this.newtask ="";
			},
			checkout(flag){
				// console.log(this);
			},
			delect(item){
				var index = this.tasks.indexOf(item);
				this.tasks.splice(index,1)
			},
			edititem(item){
				// con  sole.log(item);
				this.previoustask = item.task;
				item.isedit = !item.isedit;
			},
			update(item,ev){
				// console.log(item)
				item.task = ev.target.value;
				item.isedit = !item.isedit;
			},
			updateto(item,ev){
				// console.log(item)
				item.task = ev.target.value;
				item.isedit = item.isedit;
			},
			backtask(item){
				// alert(1)
				// console.log(this.previoustask)
				item.task = this.previoustask;
				item.isedit = false;

			}
		},
		directives:{
			"focus":{
				update(el,binding){
					if(binding.value){
						el.focus();
					}
				}
			}
		}

	})
}