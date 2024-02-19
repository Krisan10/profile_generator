const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  console.log(`A pleasure to meet you ${answer}.`);

  rl.question("What's an activity you like doing? ", (activityAnswer) => {
    console.log(`I'd love to try ${activityAnswer}.`);

    rl.question("What do you listen to while doing that?", (answer) => {
      console.log(`You listen to ${answer}? Okay.`);

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        console.log(`I also love ${answer}.`);
  
        rl.question("What do you like to eat for that meal?", (answer) => {
          console.log(`${answer} is super yummy.`);
      
          rl.question("Which sport is your absolute favourite?", (answer) => {
            console.log(`We should play ${answer} together some time.`);
     
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              console.log(`Oh, I shouldn't mess with you! ${answer} sounds cool!`);

              rl.close();
            });
          });
        });
      });
    });
  });
});

