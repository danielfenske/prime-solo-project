const phaseData = [
    {
        phase: 'endurance',
        sets: '2',
        reps: '15-20',
        definition: `Endurance adapts muscle tone and helps develop coordination and consciousness.`,
        rest: `30 seconds`
    },
    {
        phase: 'hypertrophy',
        sets: '3',
        reps: '10-12',
        definition: `Hypertrophy focuses on increasing muscle size.`,
        rest: `30 seconds-1.5 minutes`
    },
    {
        phase: 'strength',
        sets: '4',
        reps: '6-8',
        definition: `Strength develops force production, which means working with heavier loads.`,
        rest: `2-5 minutes`
    },
    {
        phase: 'power',
        sets: '4',
        reps: '3-5',
        definition: `Power develops quick, powerful movements, and is usually done in preparation for max-rep testing.`,
        rest: `30-90 seconds`
    },
    {
        phase: 'maintenance',
        sets: '3',
        reps: '6-8',
        definition: `The maintenance phase is used to preserve the strength, power, and muscle mass previously achieved.`,
        rest: `45 seconds`
    }
];

module.exports = phaseData;