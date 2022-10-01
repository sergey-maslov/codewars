function isValidWalk(walk) {
    if (walk.length === 10) {
      for (let i = 0; i < walk.length; i++) {
        if (walk[i] === 'n') {
          walk[i] = [0, 1];
        } else if (walk[i] === 's') {
          walk[i] = [0, -1];
        } else if (walk[i] === 'e') {
          walk[i] = [1, 0];
        } else if (walk[i] === 'w') {
          walk[i] = [-1, 0];
        };
      }
      let sumX = 0;
      let sumY = 0;
      for (let i = 0; i < walk.length; i++) {
        sumX += walk[i][0];
        sumY += walk[i][1];
      }
      console.log(sumX);
      console.log(sumY);
      console.log(sumX === 0 && sumY === 0);
      sumX === 0 && sumY === 0 ? "should return true" : "should return false";
    } else {
      return 'should return false';
    }
  }
  
  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));