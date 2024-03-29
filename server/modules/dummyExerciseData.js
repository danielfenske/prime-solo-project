const dummyExerciseData = [   
    
    {
        bodyPart: 'waist',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
        id: '0001',
        name: '3/4 sit-ups',
        target: 'abs'
    }
    ,
    {
        bodyPart: 'waist',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0002.gif',
        id: '0002',
        name: '45° side bend',
        target: 'abs'
    },
    {
        bodyPart: 'waist',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0003.gif',
        id: '0003',
        name: 'air bike',
        target: 'abs'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1512.gif',
        id: '1512',
        name: 'all fours squad stretch',
        target: 'quads'
    },
    {
        bodyPart: 'waist',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0006.gif',
        id: '0006',
        name: 'alternate heel touchers',
        target: 'abs'
    },
    {
        bodyPart: 'back',
        equipment: 'cable',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0007.gif',
        id: '0007',
        name: 'alternate lateral pulldown',
        target: 'lats'
    },
    {
        bodyPart: 'lower legs',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1368.gif',
        id: '1368',
        name: 'ankle circles',
        target: 'calves'
    },
    {
        bodyPart: 'back',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3293.gif',
        id: '3293',
        name: 'archer pull up',
        target: 'lats'
    },
    {
        bodyPart: 'chest',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3294.gif',
        id: '3294',
        name: 'archer push up',
        target: 'pectorals'
    },
    {
        bodyPart: 'waist',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/2355.gif',
        id: '2355',
        name: 'arm slingers hanging bent knee legs',
        target: 'abs'
    },
    {
        bodyPart: 'waist',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/2333.gif',
        id: '2333',
        name: 'arm slingers hanging straight legs',
        target: 'abs'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3214.gif',
        id: '3214',
        name: 'arms apart circular toe touch (male)',
        target: 'glutes'
    },
    {
        bodyPart: 'waist',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3204.gif',
        id: '3204',
        name: 'arms overhead full sit-up (male)',
        target: 'abs'
    },
    {
        bodyPart: 'chest',
        equipment: 'leverage machine',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0009.gif',
        id: '0009',
        name: 'assisted chest dip (kneeling)',
        target: 'pectorals'
    },
    {
        bodyPart: 'waist',
        equipment: 'assisted',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0011.gif',
        id: '0011',
        name: 'assisted hanging knee raise',
        target: 'abs'
    },
    {
        bodyPart: 'waist',
        equipment: 'assisted',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0010.gif',
        id: '0010',
        name: 'assisted hanging knee raise with throw down',
        target: 'abs'
    },
    {
        bodyPart: 'lower legs',
        equipment: 'assisted',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1708.gif',
        id: '1708',
        name: 'assisted lying calves stretch',
        target: 'calves'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'assisted',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1709.gif',
        id: '1709',
        name: 'assisted lying glutes stretch',
        target: 'glutes'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'assisted',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1710.gif',
        id: '1710',
        name: 'assisted lying gluteus and piriformis stretch',
        target: 'glutes'
    },
    {
        bodyPart: 'waist',
        equipment: 'assisted',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0012.gif',
        id: '0012',
        name: 'assisted lying leg raise with lateral throw down',
        target: 'abs'
    },
    {
        bodyPart: 'waist',
        equipment: 'assisted',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0013.gif',
        id: '0013',
        name: 'assisted lying leg raise with throw down',
        target: 'abs'
    },
    {
        bodyPart: 'waist',
        equipment: 'medicine ball',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0014.gif',
        id: '0014',
        name: 'assisted motion russian twist',
        target: 'abs'
    },
    {
        bodyPart: 'back',
        equipment: 'leverage machine',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0015.gif',
        id: '0015',
        name: 'assisted parallel close grip pull-up',
        target: 'lats'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'assisted',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0016.gif',
        id: '0016',
        name: 'assisted prone hamstring',
        target: 'hamstrings'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'assisted',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1713.gif',
        id: '1713',
        name: 'assisted prone lying quads stretch',
        target: 'quads'
    },
    {
        bodyPart: 'waist',
        equipment: 'assisted',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1714.gif',
        id: '1714',
        name: 'assisted prone rectus femoris stretch',
        target: 'abs'
    },
    {
        bodyPart: 'back',
        equipment: 'leverage machine',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0017.gif',
        id: '0017',
        name: 'assisted pull-up',
        target: 'lats'
    },
    {
        bodyPart: 'chest',
        equipment: 'assisted',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1716.gif',
        id: '1716',
        name: 'assisted seated pectoralis major stretch with stability ball',
        target: 'pectorals'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'assisted',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1712.gif',
        id: '1712',
        name: 'assisted side lying adductor stretch',
        target: 'adductors'
    },
    {
        bodyPart: 'waist',
        equipment: 'assisted',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1758.gif',
        id: '1758',
        name: 'assisted sit-up',
        target: 'abs'
    },
    {
        bodyPart: 'back',
        equipment: 'leverage machine',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1431.gif',
        id: '1431',
        name: 'assisted standing chin-up',
        target: 'lats'
    },
    {
        bodyPart: 'back',
        equipment: 'leverage machine',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1432.gif',
        id: '1432',
        name: 'assisted standing pull-up',
        target: 'lats'
    },
    {
        bodyPart: 'upper arms',
        equipment: 'assisted',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0018.gif',
        id: '0018',
        name: 'assisted standing triceps extension (with towel)',
        target: 'triceps'
    },
    {
        bodyPart: 'upper arms',
        equipment: 'leverage machine',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0019.gif',
        id: '0019',
        name: 'assisted triceps dip (kneeling)',
        target: 'triceps'
    },
    {
        bodyPart: 'chest',
        equipment: 'leverage machine',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/2364.gif',
        id: '2364',
        name: 'assisted wide-grip chest dip (kneeling)',
        target: 'pectorals'
    },
    {
        bodyPart: 'cardio',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3220.gif',
        id: '3220',
        name: 'astride jumps (male)',
        target: 'cardiovascular system'
    },
    {
        bodyPart: 'cardio',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3672.gif',
        id: '3672',
        name: 'back and forth step',
        target: 'cardiovascular system'
    },
    {
        bodyPart: 'back',
        equipment: 'stability ball',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1314.gif',
        id: '1314',
        name: 'back extension on exercise ball',
        target: 'spine'
    },
    {
        bodyPart: 'back',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3297.gif',
        id: '3297',
        name: 'back lever',
        target: 'upper back'
    },
    {
        bodyPart: 'back',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1405.gif',
        id: '1405',
        name: 'back pec stretch',
        target: 'lats'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1473.gif',
        id: '1473',
        name: 'backward jump',
        target: 'quads'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'body weight',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0020.gif',
        id: '0020',
        name: 'balance board',
        target: 'quads'
    },
    {
        bodyPart: 'upper arms',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0968.gif',
        id: '0968',
        name: 'band alternating biceps curl',
        target: 'biceps'
    },
    {
        bodyPart: 'waist',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0969.gif',
        id: '0969',
        name: 'band alternating v-up',
        target: 'abs'
    },
    {
        bodyPart: 'back',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0970.gif',
        id: '0970',
        name: 'band assisted pull-up',
        target: 'lats'
    },
    {
        bodyPart: 'waist',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0971.gif',
        id: '0971',
        name: 'band assisted wheel rollerout',
        target: 'abs'
    },
    {
        bodyPart: 'chest',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1254.gif',
        id: '1254',
        name: 'band bench press',
        target: 'pectorals'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0980.gif',
        id: '0980',
        name: 'band bent-over hip extension',
        target: 'glutes'
    },
    {
        bodyPart: 'waist',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0972.gif',
        id: '0972',
        name: 'band bicycle crunch',
        target: 'abs'
    },
    {
        bodyPart: 'back',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0974.gif',
        id: '0974',
        name: 'band close-grip pulldown',
        target: 'lats'
    },
    {
        bodyPart: 'upper arms',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0975.gif',
        id: '0975',
        name: 'band close-grip push-up',
        target: 'triceps'
    },
    {
        bodyPart: 'upper arms',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0976.gif',
        id: '0976',
        name: 'band concentration curl',
        target: 'biceps'
    },
    {
        bodyPart: 'back',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3117.gif',
        id: '3117',
        name: 'band fixed back close grip pulldown',
        target: 'lats'
    },
    {
        bodyPart: 'back',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3116.gif',
        id: '3116',
        name: 'band fixed back underhand pulldown',
        target: 'lats'
    },
    {
        bodyPart: 'shoulders',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0977.gif',
        id: '0977',
        name: 'band front lateral raise',
        target: 'delts'
    },
    {
        bodyPart: 'shoulders',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0978.gif',
        id: '0978',
        name: 'band front raise',
        target: 'delts'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1408.gif',
        id: '1408',
        name: 'band hip lift',
        target: 'glutes'
    },
    {
        bodyPart: 'waist',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0979.gif',
        id: '0979',
        name: 'band horizontal pallof press',
        target: 'abs'
    },
    {
        bodyPart: 'waist',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0981.gif',
        id: '0981',
        name: 'band jack knife sit-up',
        target: 'abs'
    },
    {
        bodyPart: 'back',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0983.gif',
        id: '0983',
        name: 'band kneeling one arm pulldown',
        target: 'lats'
    },
    {
        bodyPart: 'waist',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0985.gif',
        id: '0985',
        name: 'band kneeling twisting crunch',
        target: 'abs'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0984.gif',
        id: '0984',
        name: 'band lying hip internal rotation',
        target: 'glutes'
    },
    {
        bodyPart: 'waist',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1002.gif',
        id: '1002',
        name: 'band lying straight leg raise',
        target: 'abs'
    },
    {
        bodyPart: 'upper arms',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0986.gif',
        id: '0986',
        name: 'band one arm overhead biceps curl',
        target: 'biceps'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0987.gif',
        id: '0987',
        name: 'band one arm single leg split squat',
        target: 'quads'
    },
    {
        bodyPart: 'back',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0988.gif',
        id: '0988',
        name: 'band one arm standing low row',
        target: 'upper back'
    },
    {
        bodyPart: 'chest',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0989.gif',
        id: '0989',
        name: 'band one arm twisting chest press',
        target: 'pectorals'
    },
    {
        bodyPart: 'back',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0990.gif',
        id: '0990',
        name: 'band one arm twisting seated row',
        target: 'upper back'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0991.gif',
        id: '0991',
        name: 'band pull through',
        target: 'glutes'
    },
    {
        bodyPart: 'waist',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0992.gif',
        id: '0992',
        name: 'band push sit-up',
        target: 'abs'
    },
    {
        bodyPart: 'shoulders',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0993.gif',
        id: '0993',
        name: 'band reverse fly',
        target: 'delts'
    },
    {
        bodyPart: 'lower arms',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0994.gif',
        id: '0994',
        name: 'band reverse wrist curl',
        target: 'forearms'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0996.gif',
        id: '0996',
        name: 'band seated hip internal rotation',
        target: 'glutes'
    },
    {
        bodyPart: 'waist',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1011.gif',
        id: '1011',
        name: 'band seated twist',
        target: 'abs'
    },
    {
        bodyPart: 'shoulders',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0997.gif',
        id: '0997',
        name: 'band shoulder press',
        target: 'delts'
    },
    {
        bodyPart: 'back',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1018.gif',
        id: '1018',
        name: 'band shrug',
        target: 'traps'
    },
    {
        bodyPart: 'upper arms',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0998.gif',
        id: '0998',
        name: 'band side triceps extension',
        target: 'triceps'
    },
    {
        bodyPart: 'lower legs',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0999.gif',
        id: '0999',
        name: 'band single leg calf raise',
        target: 'calves'
    },
    {
        bodyPart: 'lower legs',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1000.gif',
        id: '1000',
        name: 'band single leg reverse calf raise',
        target: 'calves'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1001.gif',
        id: '1001',
        name: 'band single leg split squat',
        target: 'quads'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1004.gif',
        id: '1004',
        name: 'band squat',
        target: 'glutes'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1003.gif',
        id: '1003',
        name: 'band squat row',
        target: 'glutes'
    },
    {
        bodyPart: 'waist',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1005.gif',
        id: '1005',
        name: 'band standing crunch',
        target: 'abs'
    },
    {
        bodyPart: 'shoulders',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1022.gif',
        id: '1022',
        name: 'band standing rear delt row',
        target: 'delts'
    },
    {
        bodyPart: 'waist',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1007.gif',
        id: '1007',
        name: 'band standing twisting crunch',
        target: 'abs'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1008.gif',
        id: '1008',
        name: 'band step-up',
        target: 'glutes'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1009.gif',
        id: '1009',
        name: 'band stiff leg deadlift',
        target: 'glutes'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1023.gif',
        id: '1023',
        name: 'band straight back stiff leg deadlift',
        target: 'glutes'
    },
    {
        bodyPart: 'back',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1010.gif',
        id: '1010',
        name: 'band straight leg deadlift',
        target: 'spine'
    },
    {
        bodyPart: 'shoulders',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1012.gif',
        id: '1012',
        name: 'band twisting overhead press',
        target: 'delts'
    },
    {
        bodyPart: 'lower legs',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1369.gif',
        id: '1369',
        name: 'band two legs calf raise - (band under both legs) v. 2',
        target: 'calves'
    },
    {
        bodyPart: 'back',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1013.gif',
        id: '1013',
        name: 'band underhand pulldown',
        target: 'lats'
    },
    {
        bodyPart: 'waist',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1014.gif',
        id: '1014',
        name: 'band v-up',
        target: 'abs'
    },
    {
        bodyPart: 'waist',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1015.gif',
        id: '1015',
        name: 'band vertical pallof press',
        target: 'abs'
    },
    {
        bodyPart: 'lower arms',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1016.gif',
        id: '1016',
        name: 'band wrist curl',
        target: 'forearms'
    },
    {
        bodyPart: 'shoulders',
        equipment: 'band',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1017.gif',
        id: '1017',
        name: 'band y-raise',
        target: 'delts'
    },
    {
        bodyPart: 'upper arms',
        equipment: 'barbell',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0023.gif',
        id: '0023',
        name: 'barbell alternate biceps curl',
        target: 'biceps'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'barbell',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0024.gif',
        id: '0024',
        name: 'barbell bench front squat',
        target: 'quads'
    },
    {
        bodyPart: 'chest',
        equipment: 'barbell',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0025.gif',
        id: '0025',
        name: 'barbell bench press',
        target: 'pectorals'
    },
    {
        bodyPart: 'upper legs',
        equipment: 'barbell',
        gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0026.gif',
        id: '0026',
        name: 'barbell bench squat',
        target: 'quads'
    }
];

module.exports = dummyExerciseData;