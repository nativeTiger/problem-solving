/**
 * Display this pattern
 *     #
      ##
     ###
    ####
   #####
  ######  
 * 
 */

const stairCase = (size) => {
  let stairPattern = "";
  for (let i = 1; i <= size; i++) {
    stairPattern += "#";
    console.log(stairPattern.padStart(size));
  }
};

export default stairCase;
