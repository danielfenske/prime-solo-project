// selectNewExercise takes in all exercises provided from exerciseDB API and compares them 
// to the equipment available to user. After all irrelevant equipment is filtered out,
// the function selects one at random to replace the previous exercise
const selectNewExercise = (targetExercises, equipmentAvailable, exerciseId) => {

    let eligibleExercises = filterEquipment(targetExercises, equipmentAvailable)
  
    let randomIndex = Math.floor(Math.random() * eligibleExercises.length);
  
    let randomExercise = eligibleExercises[randomIndex];
  
    return randomExercise;
  }
  
  // HELPER FUNCTION FOR ONLY SELECTING AN EXERCISE THAT INCLUDES
  // EQUIPMENT AVAILABLE TO USER
  const filterEquipment = (targetExercises, equipmentAvailable) => {
  
    let equipmentMatches = [];
  
    for (let i = 0; i < targetExercises.length; i++) {
      for (let j = 0; j < equipmentAvailable.length; j++) {
        if (targetExercises[i].equipment === equipmentAvailable[j]) {
          equipmentMatches.push(targetExercises[i]);
        }
      }
    }
  
    return equipmentMatches;
  }

  module.exports = selectNewExercise;