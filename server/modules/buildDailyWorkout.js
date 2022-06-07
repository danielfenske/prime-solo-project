// buildDailyWorkout is the parent function that ultimately returns 
// a daily workout for a given user. Several helper functions are
// called within it to filter through the exercises and narrow them 
// down to one single workout
const buildDailyWorkout = async (dayOfWeek, phase, workoutTemplates, exerciseHistory, equipmentAvailable, allExercises) => {

    // calls 'selectTemplate' function and assigns return value to variable
    // 'targetValuesList' is an array of all the exercise values given pulled 
    // from the selected template
    let selectedTemplate = selectTemplate(dayOfWeek, workoutTemplates);
    let targetValuesList = grabTargetValues(selectedTemplate);
    // console.log('selectedTemplate', selectedTemplate);
    // console.log('targetValuesList', targetValuesList);
  

    // removes all exercises that user has already completed 
    // during the week (referenced by exercise id provided by the exerciseDB API)
    // (exercises provided to user previously are filtered out)
    let newExercises = filterHistory(allExercises, exerciseHistory);
    // console.log('newExercises', newExercises);
  

    // returns all exercises that include equipment available to user
    // (exercises without user's equipment are filtered out)
    let equipmentMatches = filterEquipment(newExercises, equipmentAvailable);
    // console.log('equipmentMatches', equipmentMatches);
  

    // returns an object containing an array of all eligible exercises
    // where the exercise's target value matched the targetValuesList value
    // (exercises that don't match the target muscle are filtered out)
    let templateMatches = filterExercises(equipmentMatches, targetValuesList);
    // console.log('templateMatches', templateMatches);
  

    // returns an array of 11 exercise objects that match all criteria 
    // above and are relevant to the user
    // (one exercise is randomly selected out of all eligible exercises)
    let dailyWorkout = selectExercises(templateMatches);
    // console.log('dailyWorkout', dailyWorkout);

    
    // sets and reps are added to each exercise, and the numbers
    // are dependant on which phase the user said they were on
    let finalDailyWorkout = addSetsAndReps(dailyWorkout, phase);


    // the array of exercise objects are returned after exercises are chosen and sets/reps are added, 
    return finalDailyWorkout;
  }
  
  
  // #region ==== HELPER FUNCTIONS ====
  // selectTemplate chooses one template out of all templates available to user,
  // which is determined by the number of days the user said they lifted
    // (example: if user lifts twice a week and they are on day two, 
    // their 'workout template will be the second template, or case '2')
  const selectTemplate = (dayOfWeek, workoutTemplates) => {
    let selectedTemplate = 0;

    if (typeof dayOfWeek === 'string') {
      selectedTemplate = workoutTemplates[0];
  
    } else if (typeof dayOfWeek === 'number') {
  
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
    }
    
    // returns selected template, which will reflect the target 
    // muscle group exercises user will be eligible for
    return selectedTemplate;
  }
  
  // grabTargetValues flattens the selectedTemplate
  // array of objects into an array of string values 
    // example: ['chest', 'back', 'biceps', etc.]
  const grabTargetValues = (selectedTemplate) => {
    let targetValuesList = Object.values(selectedTemplate);
    
    // the first two values (cells within the row) are not needed,
    // therefore they are removed from the array
    targetValuesList.shift();
    targetValuesList.shift();
  
    return targetValuesList;
  }
  
  
  // filterHistory loops through the entire array of exercises 
  // provided by the exerciseDB API and compares them to each index,
  // or exercise id, within the exerciseHistory array
    // If the two exercise ids that are compared don't match, they 
    // get added to the array 'newExercises' to be moved to the next 
    // round of filtering
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
  
  
  // filterEquipment compares all equipment available to the user with
  // the exercises returned from the filterHistory function. 
    // If there is a match between the user's equipment list and 
    // newExercises array, that exercise object is added to the equipmentMatches
    // array and moved on to the next round of filtering
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
  
  
  // filterExercises filters through all exercises within the equipmentMatches
  // array and only keeps the ones that match the targetValuesList array
    // Since there will always be eleven exercises provided each time a workout is given, 
    // each e_# represents the targetValue, or target muscle, subscribed for a given workout
      // example: if exercise one is 'chest', e_ones will only include exercise objects that
      // include the targetMuscle value of 'chest'
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
    }
  
    return templateMatches;
  }
  
  // 'selectExercises' randomly selects on exercise for each 
  // array of exercises existing in the templateMatches object
    // example: if e_ones includes 23 exercises for 'chest', 
    // one of those exercises is randomly selected using 
    // the Math.random method
  let selectExercises = (templateMatches) => {
    let dailyWorkout = [];
    
    // loops through each property within the templateMatches object
      // each property includes an array of exercises that match the target muscle 
      // for the provided template (example: 'chest')
    for (templateMatchesProperty in templateMatches) {
  
      // exerciseArray represents one property of the templateMatches object
        // example: e_ones
      let exerciseArray = templateMatches[templateMatchesProperty];
  
      // get random index value that is in the range of the array length
      const randomIndex = Math.floor(Math.random() * exerciseArray.length);
  
      // gets random exercise 
      const exercise = exerciseArray[randomIndex];
      
      // pushes that random exercise to the dailyWorkout array
      dailyWorkout.push(exercise);
    }
  
    return dailyWorkout;
  }


  // after eleven unique exercises are chosen for a given workout,
  // sets and reps needed to be added to each exercise object to reflect
  // the phase the user is on in their workout journey (example: if phase is endurance, sets/reps is 2/15-20)
    // note: the first exercise in any workout will be a warmup, which won't require sets and reps. To accommodate for this,
    // 'warmup' and '2 minutes' is added instead of sets/reps within the switch statement
  function addSetsAndReps(dailyWorkout, phase) {

    let finalDailyWorkout = [];    
  
    for (let exercise of dailyWorkout) {      
      if (exercise.target === 'cardiovascular system') {
        finalDailyWorkout.push({...exercise, sets: 'warmup', reps: '2 minutes'});
      } else {
        switch (phase) {
          case 'endurance':
              finalDailyWorkout.push({...exercise, sets: '2', reps: '15-20'});
              break;
          case 'hypertrophy':
              finalDailyWorkout.push({...exercise, sets: '3', reps: '10-12'});
              break;
          case 'strength':   
              finalDailyWorkout.push({...exercise, sets: '4', reps: '6-8'});
              break;
          case 'power':
              finalDailyWorkout.push({...exercise, sets: '4', reps: '3-5'});
              break;
          case 'maintenance':
              finalDailyWorkout.push({...exercise, sets: '3', reps: '6-8'});
              break;
          default:
              console.log('Something is wrong');
        }
      }
    }
    
    return finalDailyWorkout;
  }
  // #endregion ====

  module.exports = buildDailyWorkout;