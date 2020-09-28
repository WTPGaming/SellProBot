var ql = {};
var instance = 1
function checkScreen(){
	function gebxp(p) {return document.evaluate(p, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;};
	if(gebxp('/html/body/div/my-app/sp-main/div/div[2]/sp-courses/div/div[1]/div/div[1]/h2')){
		//COURSES
		console.log("COURSES");
		if(gebxp('/html/body/div/my-app/sp-main/div/div[2]/sp-courses/div/div[1]/div/div[1]/h2').innerHTML == "Courses"){
			if(gebxp('/html/body/div/my-app/sp-main/div/div[2]/sp-courses/div/div[4]/div/div[1]/sp-courses-list/div/div/div/div['+instance+']')){
				gebxp('/html/body/div/my-app/sp-main/div/div[2]/sp-courses/div/div[4]/div/div[1]/sp-courses-list/div/div/div/div['+instance+']').click();
			}
		}
	}else if(gebxp('/html/body/div/my-app/sp-main/div/div[2]/sp-course-detail/div/div[1]/div/div[1]/h2')){
		//COURSE
		console.log("COURSE");
		if(gebxp('/html/body/div/my-app/sp-main/div/div[2]/sp-course-detail/div/div[1]/div/div[1]/h2').innerHTML == "Course"){
			if(gebxp('/html/body/div/my-app/sp-main/div/div[2]/sp-course-detail/div/div[1]/div/div[2]/button') && gebxp('/html/body/div/my-app/sp-main/div/div[2]/sp-course-detail/div/div[1]/div/div[2]/button').style.opacity == "1"){
				if(gebxp('/html/body/div/my-app/sp-main/div/div[2]/sp-course-detail/div/div[1]/div/div[2]/button').innerHTML == " QUIZ "){
					gebxp('/html/body/div/my-app/sp-main/div/div[2]/sp-course-detail/div/div[1]/div/div[2]/button').click();
				}else if (gebxp('/html/body/div/my-app/sp-main/div/div[2]/sp-course-detail/div/div[1]/div/div[2]/button').innerHTML == " CERTIFICATE "){
					gebxp('/html/body/div/my-app/sp-main/div/div[1]/sp-menu/div/a[2]/span').click();
				}
			}else{
				for(i=gebxp('/html/body/div/my-app/sp-main/div/div[2]/sp-course-detail/div/div[3]/div').children.length-1;i>-1;i--){
					gebxp('/html/body/div/my-app/sp-main/div/div[2]/sp-course-detail/div/div[3]/div').children[i].children[0].click();
				}
			}
		}
	}else if(gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/sp-topic-quiz/div/div[2]/div/h3')||gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div/div/div[2]/div/h3')){
		//KC
		console.log("KC");
		var a = ""
		if(gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/sp-topic-quiz/div/div[2]/div/h3')){
			Object.keys(ql).forEach((c) =>{
			ql[c].forEach((q) => {
				if (gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/sp-topic-quiz/div/div[2]/div/h3').innerHTML.includes(q["question"]))
					if(a==""&&JSON.stringify(q["correctAnswer"])!=""){
						a = JSON.stringify(q["correctAnswer"])
					}
			})});
			if(gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/sp-topic-quiz/div/div[2]/div/h5').innerHTML == " Select all that apply: "){
				for(i=2;i<gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/sp-topic-quiz/div/div[2]/div').children.length;i++){
					if(a.includes(gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/sp-topic-quiz/div/div[2]/div').children[i].children[0].children[1].innerHTML)){
						gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/sp-topic-quiz/div/div[2]/div').children[i].click();
					}
				}
			}else if(gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/sp-topic-quiz/div/div[2]/div/h5').innerHTML == " Select the correct answer: "){
				for(i=0;i<gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/sp-topic-quiz/div/div[2]/div/div').children.length;i++){
					if (a.includes(gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/sp-topic-quiz/div/div[2]/div/div').children[i].children[1].innerHTML)){
						gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/sp-topic-quiz/div/div[2]/div/div').children[i].children[1].click();
					};
				};
			}
			if(gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/sp-topic-quiz/div/div[1]/div[3]/div[2]/button').innerHTML == " SUBMIT " || gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/sp-topic-quiz/div/div[1]/div[3]/div[2]/button').innerHTML == " NEXT "){
				gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/sp-topic-quiz/div/div[1]/div[3]/div[2]/button').click();
				gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/sp-topic-quiz/div/div[1]/div[3]/div[2]/button').click();
			}
		}else if(gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div/div/div[2]/div/h3')){
			Object.keys(ql).forEach((c) =>{
			ql[c].forEach((q) => {
				if (gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div/div/div[2]/div/h3').innerHTML.includes(q["question"]))
					console.log(gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div/div/div[2]/div/h3').innerHTML);
					if(a==""&&JSON.stringify(q["correctAnswer"])!=""){
						a = JSON.stringify(q["correctAnswer"])
					}
			})});
			if(gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div/div/div[2]/div/h5').innerHTML == "Select all that apply:"){
				for(i=2;i<gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div/div/div[2]/div').children.length;i++){
					if(a.includes(gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div/div/div[2]/div').children[i].children[0].children[1].innerHTML)){
						gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div/div/div[2]/div').children[i].click();
					}
				}
				Console.log("1")
			}else if(gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div/div/div[2]/div/h5').innerHTML == "Select the correct answer:"){
				for(i=0;i<gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div/div/div[2]/div/div').children.length;i++){
					if (a.includes(gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div/div/div[2]/div/div').children[i].children[1].innerHTML)){
						gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div/div/div[2]/div/div').children[i].children[1].click();
					};
				};
				console.log(a)
			}
			if(gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div/div/div[1]/div[3]/div[2]/button').innerHTML == " SUBMIT " || gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div/div/div[1]/div[3]/div[2]/button').innerHTML == " NEXT "){
				gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div/div/div[1]/div[3]/div[2]/button').click();
				gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div/div/div[1]/div[3]/div[2]/button').click();
			}
		}
	}else if(gebxp('/html/body/div/my-app/sp-course-quiz/div/div[2]/h2')){
		//QUESTION
		console.log("QUESTION");
		var a = ""
		Object.keys(ql).forEach((c) =>{
			ql[c].forEach((q) => {
				if (gebxp('/html/body/div/my-app/sp-course-quiz/div/div[2]/h2').innerHTML.includes(q["question"]))
					if(a==""&&JSON.stringify(q["correctAnswer"])!=""){
						a = JSON.stringify(q["correctAnswer"])
					}
		})});
		if(gebxp('/html/body/div/my-app/sp-course-quiz/div/div[2]/h5').innerHTML == " Select all that apply: "){
			for(i=2;i<gebxp('/html/body/div/my-app/sp-course-quiz/div/div[2]').children.length;i++){
				if (a.includes(gebxp('/html/body/div/my-app/sp-course-quiz/div/div[2]').children[i].children[0].children[1].innerHTML)){
					gebxp('/html/body/div/my-app/sp-course-quiz/div/div[2]').children[i].click();
				};
			};
		}else if(gebxp('/html/body/div/my-app/sp-course-quiz/div/div[2]/h5').innerHTML == " Select the correct answer: "){
			for(i=0;i<gebxp('/html/body/div/my-app/sp-course-quiz/div/div[2]/div').children.length;i++){
				if (a.includes(gebxp('/html/body/div/my-app/sp-course-quiz/div/div[2]/div').children[i].children[1].innerHTML)){
					gebxp('/html/body/div/my-app/sp-course-quiz/div/div[2]/div').children[i].children[1].click();
				};
			};
		}
		if(gebxp('/html/body/div/my-app/sp-course-quiz/div/div[1]/div/div[3]/button').innerHTML == " NEXT " || gebxp('/html/body/div/my-app/sp-course-quiz/div/div[1]/div/div[3]/button').innerHTML == " FINISH "){
			gebxp('/html/body/div/my-app/sp-course-quiz/div/div[1]/div/div[3]/button').click();
		}
		console.log(a);
	}else if(gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div[2]/div[1]/div/div[2]/button')){
		//HTML
		console.log("HTML");
		if(gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div[2]/div[1]/div/div[2]/button').innerHTML == " NEXT " || gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div[2]/div[1]/div/div[2]/button').innerHTML == " QUIZ "){
			gebxp('/html/body/div/my-app/sp-main/div/div[2]/ng-component/div/div[2]/div[1]/div/div[2]/button').click();
		}
	}else if(gebxp('/html/body/div/my-app/sp-course-quiz/div/div[1]/div/div[3]/button')){
		//CERTIFICATE
		console.log("CERTIFICATE");
		if(gebxp('/html/body/div/my-app/sp-course-quiz/div/div[1]/div/div[3]/button').innerHTML == " CERTIFICATE "){
			console.log("CERTIFICATE YES");
			gebxp('/html/body/div/my-app/sp-course-quiz/div/div[1]/div/div[1]/button').click();
		}else if(gebxp('/html/body/div/my-app/sp-course-quiz/div/div[1]/div/div[3]/button').innerHTML == " TRY AGAIN "){
			console.log("CERTIFICATE TRY AGAIN");
			gebxp('/html/body/div/my-app/sp-course-quiz/div/div[1]/div/div[3]/button').click();
		}
	}
};
var t=setInterval(checkScreen,500);