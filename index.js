// code your solution here
function saturdayFun(activity) {
    if (activity) {
      return "This Saturday, I want to " + activity + "!";
    } else {
      return "This Saturday, I want to roller-skate!";
    }
  }
  
  console.log(saturdayFun());
  console.log(saturdayFun('hike'));
  
  const mondayWork = function (activity) {
    if (activity) {
      return "This Monday, I will " + activity + ".";
    } else {
      return "This Monday, I will go to the office.";
    }
  };
  
  console.log(mondayWork());
  console.log(mondayWork("work from home"));
  
  function wrapAdjective(flair) {
    return function (adjective) {
      return "You are " + flair + adjective + flair + "!";
    };
  }
  
  const highlight = wrapAdjective("*");
  console.log(highlight("awesome"));
  
  const emphasize = wrapAdjective("||");
  console.log(emphasize("great"));
  