window.onload = function(){
	var divs = document.getElementById('box').children;

	//初始化蛇位置
	var i = 25;
	var arr = [i,i-1,i-2,i-3];
	for(var k = 0;k<arr.length;k++){
		divs[arr[k]].className = 'snake';
	}
	var timerD;
	var timerR;
	var timerL;
	var timerU;
	var direction = 0;

	//随机生成食物
	var foodNum = 0;
	getFoodNum(arr);
	divs[foodNum].style.backgroundColor = 'blue';

	//吃自己
	function eatYourself(){
		for(var n = 0;n<arr.length;n++){
			for(var m = n+1;m<arr.length;m++){
				if(arr[n] == arr[m]){
					alert('游戏结束');
					clearInterval(timerR);
					clearInterval(timerD);
					clearInterval(timerL);
					clearInterval(timerU);
					//初始化
					for(var j = 0;j<divs.length;j++){
						divs[j].className = '';
					}
					i = 25;
					arr = [i,i-1,i-2,i-3];
					for(var k = 0;k<arr.length;k++){
						divs[arr[k]].className = 'snake';
					}
				}
			}
		}
	}

	//增加长度
	function addLength(arr){
		if(arr[arr.length-1]-arr[arr.length-2] == 20){
			if(arr[arr.length-1]+20>400){
				for(var item of arr){
					if(arr[arr.length-1]+1 != item){
						arr.push(arr[arr.length-1]+1);
					}else if(arr[arr.length-1]-1 != item){
						arr.push(arr[arr.length-1]-1);
					}
				}
			}else{
				arr.push(arr[arr.length-1]+20);
			}
		}else if(arr[arr.length-1]-arr[arr.length-2] == -20){
			if(arr[arr.length-1]-20<0){
				for(var item of arr){
					if(arr[arr.length-1]+1 != item){
						arr.push(arr[arr.length-1]+1);
					}else if(arr[arr.length-1]-1 != item){
						arr.push(arr[arr.length-1]-1);
					}
				}
			}else{
				arr.push(arr[arr.length-1]-20);
			}
		}else if(arr[arr.length-1]-arr[arr.length-2] == 1){
			if(arr[arr.length-1]%20==19){
				for(var item of arr){
					if(arr[arr.length-1]+20 != item){
						arr.push(arr[arr.length-1]+20);
					}else if(arr[arr.length-1]-20 != item){
						arr.push(arr[arr.length-1]-20);
					}
				}
			}else{
				arr.push(arr[arr.length-1]+1);
			}
		}else if(arr[arr.length-1]-arr[arr.length-2] == -1){
			if(arr[arr.length-1]%20==0){
				for(var item of arr){
					if(arr[arr.length-1]+20 != item){
						arr.push(arr[arr.length-1]+20);
					}else if(arr[arr.length-1]-20 != item){
						arr.push(arr[arr.length-1]-20);
					}
				}
			}else{
				arr.push(arr[arr.length-1]-1);
			}
		}
	}

	//获取随机食物位置
	function getFoodNum(arr){
		foodNum = parseInt(Math.random()*400);
		for(var item of arr){
			if(foodNum == item){
				getFoodNum(arr);
			}
		}
	}

	//键盘点击事件
	document.onkeydown = function(e){
		e = e || window.event;
		console.log(e.keyCode);
		if(e.keyCode == 37){
			if(direction == 1){
				return;
			}
			setTimeout(function(){
				direction = 1;
			},199);
			//向左
			clearInterval(timerR);
			clearInterval(timerD);
			clearInterval(timerL);
			clearInterval(timerU);
			timerL = setInterval(function(){
				//清空样式
				for(var j = 0;j<divs.length;j++){
					divs[j].className = '';
				}
				//删除最后一个
				arr = arr.slice(0,-1);
				//添加最后一个向左走
				arr.unshift(arr[0] - 1);
				//增加长度
				if(arr[0] == foodNum){
					addLength(arr);
					divs[foodNum].style.backgroundColor = '';
					getFoodNum(arr);
					divs[foodNum].style.backgroundColor = 'blue';
				}
				for(var k = 0;k<arr.length;k++){
					divs[arr[k]].className = 'snake';
				}
				//撞墙
				if(arr[0]%20 == 19){
					divs[arr[0]].style.background = 'black';
					clearInterval(timerR);
					clearInterval(timerD);
					clearInterval(timerL);
					clearInterval(timerU);
					direction = 0;
					alert('游戏结束');
					//初始化
					for(var j = 0;j<divs.length;j++){
						divs[j].className = '';
					}
					i = 25;
					arr = [i,i-1,i-2,i-3];
					for(var k = 0;k<arr.length;k++){
						divs[arr[k]].className = 'snake';
					}
				}
				//吃自己
				eatYourself();
			},200);
		}
		if(e.keyCode == 39){
			if(direction == 1){
				return;
			}
			setTimeout(function(){
				direction = 1;
			},199);
			//向右
			clearInterval(timerR);
			clearInterval(timerD);
			clearInterval(timerL);
			clearInterval(timerU);
			timerR = setInterval(function(){
				//清空样式
				for(var j = 0;j<divs.length;j++){
					divs[j].className = '';
				}
				//删除最后一个
				arr = arr.slice(0,-1);
				//添加第一个向右走
				arr.unshift(arr[0]+1);
				//增加长度
				if(arr[0] == foodNum){
					addLength(arr);
					divs[foodNum].style.backgroundColor = '';
					getFoodNum(arr);
					divs[foodNum].style.backgroundColor = 'blue';
				}
				for(var k = 0;k<arr.length;k++){
					divs[arr[k]].className = 'snake';
				}
				//撞墙
				if(arr[0]%20 == 0){
					divs[arr[0]].style.background = 'black';
					clearInterval(timerR);
					clearInterval(timerD);
					clearInterval(timerL);
					clearInterval(timerU);
					direction = 0;
					alert('游戏结束');
					//初始化
					for(var j = 0;j<divs.length;j++){
						divs[j].className = '';
					}
					i = 25;
					arr = [i,i-1,i-2,i-3];
					for(var k = 0;k<arr.length;k++){
						divs[arr[k]].className = 'snake';
					}
				}
				//吃自己
				eatYourself();
			},200)
		}
		if(e.keyCode == 40){
			if(direction == 2){
				return;
			}
			setTimeout(function(){
				direction = 2;
			},199);
			//向下
			clearInterval(timerR);
			clearInterval(timerD);
			clearInterval(timerL);
			clearInterval(timerU);
			timerD = setInterval(function(){
				//清空样式
				for(var j = 0;j<divs.length;j++){
					divs[j].className = '';
				}
				//删除最后一个
				arr = arr.slice(0,-1);
				//添加第一个向下走
				arr.unshift(arr[0]+20);
				//增加长度
				if(arr[0] == foodNum){
					addLength(arr);
					divs[foodNum].style.backgroundColor = '';
					getFoodNum(arr);
					divs[foodNum].style.backgroundColor = 'blue';
				}
				//撞墙
				for(var k = 0;k<arr.length;k++){
					if(!divs[arr[k]]){
						arr[k] = arr[k]-20;
						clearInterval(timerR);
						clearInterval(timerD);
						clearInterval(timerL);
						clearInterval(timerU);
						direction = 0;
						alert('游戏结束');
						//初始化
						for(var j = 0;j<divs.length;j++){
							divs[j].className = '';
						}
						i = 25;
						arr = [i,i-1,i-2,i-3];
						for(var k = 0;k<arr.length;k++){
							divs[arr[k]].className = 'snake';
						}
					}
					divs[arr[k]].className = 'snake';
				}
				//吃自己
				eatYourself();
			},200)			
		}
		if(e.keyCode == 38){
			if(direction == 2){
				return;
			}
			setTimeout(function(){
				direction = 2;
			},199);
			//向上
			clearInterval(timerR);
			clearInterval(timerD);
			clearInterval(timerL);
			clearInterval(timerU);
			timerU = setInterval(function(){
				//清空样式
				for(var j = 0;j<divs.length;j++){
					divs[j].className = '';
				}
				//删除最后一个
				arr = arr.slice(0,-1);
				//添加第一个向上走
				arr.unshift(arr[0]-20);
				//增加长度
				if(arr[0] == foodNum){
					addLength(arr);
					divs[foodNum].style.backgroundColor = '';
					getFoodNum(arr);
					divs[foodNum].style.backgroundColor = 'blue';
				}
				//撞墙
				for(var k = 0;k<arr.length;k++){
					if(!divs[arr[k]]){
						arr[k] = arr[k]+20;
						clearInterval(timerR);
						clearInterval(timerD);
						clearInterval(timerL);
						clearInterval(timerU);
						direction = 0;
						alert('游戏结束');
						//初始化
						for(var j = 0;j<divs.length;j++){
							divs[j].className = '';
						}
						i = 25;
						arr = [i,i-1,i-2,i-3];
						for(var k = 0;k<arr.length;k++){
							divs[arr[k]].className = 'snake';
						}
					}
					divs[arr[k]].className = 'snake';
				}
				//吃自己
				eatYourself();
			},200)
		}
	}
	
}
