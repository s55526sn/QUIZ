let que = document.getElementById("que");
let res = document.getElementById("res");
let logo = document.getElementById("logo");
let maru = document.getElementById("maru");
let batsu = document.getElementById("batsu");
let count = 10;
let score = 0;
setInterval(()=>{
	if (count>0){
		count=count-1;
		res.textContent = "スコア:"+score+"|時間:"+count+"秒";
	}else{
		res.style.color = "red";
		res.textContent = "スコア:"+score+"|終了";
	}
},1000);
let num = 0;
let max = 5;
let name = new Array(max);
name = ["M4","P9","P90","M4 GS","M762","C7E","AR33","G36C","F2","AUG A2"];
let seikai = new Array(max);
sekai = [true,false,true,true,true,false,true,false,false,true];
maru.addEventListener("click",()=>{
	console.log("maru");
	num++;
	if (num < max){
		if (seikai[num]){
			console.log("正解");
		}else{
			console.log("不正解");
		}
		que.textContent = "問題"+(num + 1)+" "+name[num];
		logo.src = "img/logo"+num+".jpg";
	}
});
batsu.addEventListener("click",()=>{
	console.log("maru");
	num++;
	if (num < max){
		if (seikai[num]){
			console.log("不正解");
		}else{
			console.log("正解");
		}
		que.textContent = "問題"+(num + 1)+" "+name[num];
		logo.src = "img/logo"+num+".png";
	}
});