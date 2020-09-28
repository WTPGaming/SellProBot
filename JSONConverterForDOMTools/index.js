const fs = require('fs')

var printError = function(error, explicit) {
    console.log(`[${explicit ? 'EXPLICIT' : 'INEXPLICIT'}] ${error.name}: ${error.message}`);
}

fs.readdir('./input', function(err, files) {
    for (var i=0; i<files.length; i++) {
		fs.readFile('./input/'+files[i], 'utf8' , (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			data = data.substring(1);
			try {
				var ParsedData = JSON.parse(data);
				ParsedDataKeys = Object.keys(ParsedData)
				if(ParsedDataKeys.includes("quizQuestions") && ParsedDataKeys.includes("quizQuestionAnswers")){
					var answerList = {};
					ParsedData["quizQuestionAnswers"].forEach((answer) => {
						questionId = "a"+answer["questionId"]
						if(answer["isCorrect"] == true){
							if(!Object.keys(answerList).includes(questionId)){
								answerList[questionId] = [];
							}
							answerList[questionId].push(answer["text"])
						}
					});
					
					var questionList = {};
					ParsedData["quizQuestions"].forEach((question) => {
						quizId = "a"+question["quizId"].toString();
						text = question["text"];
						id = question["id"];
						correctAnswer = answerList["a"+id]
						if(!Object.keys(questionList).includes(quizId)){
							questionList[quizId] = [];
						}
						questionList[quizId].push({"question":text,"id":id,"correctAnswer":correctAnswer});
					});
					//console.log(questionList);
					
					var webQuestion = "HP LaserJet Pro _____ MFPs feature ultra-fast single-pass, duplex scanning."
					var correct = false;
					Object.keys(questionList).forEach((course) => {
						questionList[course].forEach((question) => {
							if(webQuestion == question["question"] && correct == false){
								console.log("The Answer(s) is/are: "+JSON.stringify(question["correctAnswer"]))
								correct = true;
							}
						})
					})
					
					
					
					
					
					//Output JSON
					//fs.writeFileSync('./output/'+files[i-1], JSON.stringify(questionList));
				}else{
					console.log("File Is Not A SellPro JSON")
				}
			} catch (e) {
				if (e instanceof SyntaxError) {
					printError(e, true);
				} else {
					printError(e, false);
				}
			}
		})
    }
});