// buildDailyWorkout is the parent function that ultimately returns 
// the daily workout for a given user. Several helper functions are
// called within it to filter through the exercises and narrow them 
// down to one single workout
const buildDailyWorkout = async (dayOfWeek, workoutTemplates, exerciseHistory, equipmentAvailable, allExercises) => {

    // calls 'selectTemplate' function and assigns return value to variable
    // 'targetValuesList' is an array of all the exercise values given pulled 
    // from the selected template
    let selectedTemplate = selectTemplate(dayOfWeek, workoutTemplates);
    let targetValuesList = grabTargetValues(selectedTemplate);
    // console.log('selectedTemplate', selectedTemplate);
    // console.log('targetValuesList', targetValuesList);
  
    // removes all exercises that user has already completed 
    // during the week
    let newExercises = filterHistory(allExercises, exerciseHistory);
    // console.log('newExercises', newExercises);
  
    // returns all exercises that include equipment available to user
    let equipmentMatches = filterEquipment(newExercises, equipmentAvailable);
    // console.log('equipmentMatches', equipmentMatches);
  
    // returns an object containing an array of all eligible exercises
    // where the exercise's target value matched the targetValuesList value
    let templateMatches = filterExercises(equipmentMatches, targetValuesList);
    // console.log('templateMatches', templateMatches);
  
    let dailyWorkout = selectExercises(templateMatches);
    // console.log('dailyWorkout', dailyWorkout);
  
    return dailyWorkout;
  }
  
  
  // #region ==== HELPER FUNCTIONS ====
  const selectTemplate = (dayOfWeek, workoutTemplates) => {
    let selectedTemplate = 0;
    switch (dayOfWeek) {
      case 1:
        selectedTemplate = workoutTemplates[0];
        break;
      case 2:
        selectedTemplate = workoutTemplates[1];
        break;
      case 3:
        selectedTemplate = workoutTemplates[2]
        break;
      case 4:
        selectedTemplate = workoutTemplates[3];
        break;
      default:
        console.log('Unable to assign workout');
    }
  
    return selectedTemplate;
  }
  
  
  const grabTargetValues = (selectedTemplate) => {
    let targetValuesList = Object.values(selectedTemplate);
  
    targetValuesList.shift();
    targetValuesList.shift();
  
    return targetValuesList;
  }
  
  
  const filterHistory = (allExercises, exerciseHistory) => {
    let newExercises = [];
  
    for (let i = 0; i < allExercises.length; i++) {
      for (let j = 0; j < exerciseHistory.length; j++) {
        if (allExercises[i].id !== exerciseHistory[j]) {
          newExercises.push(allExercises[i]);
        }
      }
    }
  
    return newExercises;
  }
  
  
  const filterEquipment = (newExercises, equipmentAvailable) => {
  
    let equipmentMatches = [];
  
    for (let i = 0; i < newExercises.length; i++) {
      for (let j = 0; j < equipmentAvailable.length; j++) {
        if (newExercises[i].equipment === equipmentAvailable[j]) {
          equipmentMatches.push(newExercises[i]);
        }
      }
    }
  
    return equipmentMatches;
  }
  
  
  const filterExercises = (equipmentMatches, targetValuesList) => {
  
    let templateMatches = {
      e_ones: equipmentMatches.filter(exercise => exercise.target === targetValuesList[0]),
      e_twos: equipmentMatches.filter(exercise => exercise.target === targetValuesList[1]),
      e_threes: equipmentMatches.filter(exercise => exercise.target === targetValuesList[2]),
      e_fours: equipmentMatches.filter(exercise => exercise.target === targetValuesList[3]),
      e_fives: equipmentMatches.filter(exercise => exercise.target === targetValuesList[4]),
      e_sixes: equipmentMatches.filter(exercise => exercise.target === targetValuesList[5]),
      e_sevens: equipmentMatches.filter(exercise => exercise.target === targetValuesList[6]),
      e_eights: equipmentMatches.filter(exercise => exercise.target === targetValuesList[7]),
      e_nines: equipmentMatches.filter(exercise => exercise.target === targetValuesList[8]),
      e_tens: equipmentMatches.filter(exercise => exercise.target === targetValuesList[9]),
      e_elevens: equipmentMatches.filter(exercise => exercise.target === targetValuesList[10])
    }
  
    return templateMatches;
  }
  
  // 'selectExercises' randomly selects on exercise from 
  // the given array and returns it as an object to be added
  // to the user's daily workout
  let selectExercises = (templateMatches) => {
    let dailyWorkout = [];
  
    for (templateMatchesProperty in templateMatches) {
  
      // this loop is evaluating each property within 'templateMatches',
      // which is an array
      let exerciseArray = templateMatches[templateMatchesProperty];
  
      // get random index value
      const randomIndex = Math.floor(Math.random() * exerciseArray.length);
  
      // get random exercise
      const exercise = exerciseArray[randomIndex];
  
      dailyWorkout.push(exercise);
    }
  
    return dailyWorkout;
  }
  // #endregion ====

  module.exports = buildDailyWorkout;