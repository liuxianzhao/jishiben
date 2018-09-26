new Vue({
	el:'#app',
	data:{
		biaoti:"新建笔记",
		aa1:"",
		shuzi:"0",
		shijian:"",
		nei:[
			{
				time:"2018年8月19日 星期3 8:36:49",
				name:"天王盖地虎，小鸡炖蘑菇。",
				biao:"段友出征",
				shu:12,
				xiugai:""
			},
			{
				time:"2018年8月18日 星期2 19:51:55",
				name:"宝塔镇河妖，蘑菇放辣椒。",
				biao:"寸草不生",
				shu:12,
				xiugai:""
			}
		]
	},
	methods:{
		fun:function(){
			this.nei.push({
				name:this.aa1,
				biao:this.biaoti,
				shu:this.aa1.split("").length,
				time:new Date().getFullYear()+"年"+new Date().getMonth()+"月"+new Date().getDate()+"日  星期"+new Date().getDay()+"  "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
			});
			this.aa1="";
			this.biaoti="新建笔记";
			this.shijian=new Date().getFullYear()+"年"+new Date().getMonth()+"月"+new Date().getDate()+"日  星期"+new Date().getDay()+"  "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();;
			this.shuzi=0;
		},
		fun1:function(a){
			this.nei.splice(a,1);
		},
		fun2:function(b){
			 this.nei[b].shu=this.nei[b].name.split("").length
			 this.nei[b].xiugai="上次修改日期："+new Date().getFullYear()+"年"+new Date().getMonth()+"月"+new Date().getDate()+"日  星期"+new Date().getDay()+"  "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
	   	},
	   	fun3:function(){
	   		this.shuzi=this.aa1.split("").length+1;
	   	}
	},
})
var shi=document.querySelector(".shi");
shi.innerHTML=new Date().getFullYear()+"年"+new Date().getMonth()+"月"+new Date().getDate()+"日  星期"+new Date().getDay()+"  "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
setInterval(function(){
	shi.innerHTML=new Date().getFullYear()+"年"+new Date().getMonth()+"月"+new Date().getDate()+"日  星期"+new Date().getDay()+"  "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
},100)