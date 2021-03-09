const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = []
//Q2
rl.question('What is your Name? ', (answer) => {
  // TODO: Log the answer in a database
  answers.push(answer)
  //Q2
  console.log(`ok, thanks: ${answer}`);
  // question 2
  rl.question('Whats an activiy you like doing? ', (answer) => {
    answers.push(answer); // logging answer
    console.log(`Its cool that you like ${answer}`)
    //Q3
    rl.question('What do you listen to while doing that? ', (answer) => {
      answers.push(answer); //logging
      //Q4
      rl.question('What meal is your favourite? (ie. Dinner,lunch, brunch etc.) ', (answer) => {

        answers.push(answer);
        //Q5
        rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
          // TODO: Log the answer in a database
          answers.push(answer);
          //Q6
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            // TODO: Log the answer in a database
            answers.push(answer);
            //Q7
            rl.question("What is your superpower? In a few words tell us what you're amazing at: ", (answer) => {
              // TODO: Log the answer in a database
              answers.push(answer);
              console.log(answers)
              console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);

              rl.close();
            })

          })

        })

      })

    })


  });
  // close at the end of the last callback question
});
