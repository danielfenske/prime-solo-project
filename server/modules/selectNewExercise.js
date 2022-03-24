const selectNewExercise = (targetExercises, equipmentAvailable, exerciseId) => {

    let eligibleExercies = filterEquipment(targetExercises, equipmentAvailable)
  
    let randomIndex = Math.floor(Math.random() * eligibleExercies.length);
  
    let randomExercise = eligibleExercies[randomIndex];
  
    return randomExercise;
  }
  
  // HELPER FUNCTION FOR ONLY SELECTING AN EXERCISE THAT INCLUDES EQUIPMENT
  // AVAILABLE TO USER
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