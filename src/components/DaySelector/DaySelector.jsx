// import redux dependencies 
function DaySelector({daysPerWeek}) {

    switch (daysPerWeek) {
        case 1:
            return (
                <>
                    <option value="1">1</option>
                </>
            )
        case 2:
            return (
                <>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </>
            )
        case 3:
            return (
                <>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </>
            )
        case 4:
            return (
                <>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </>
            )
        default:
            return (
                <option value="1">1</option>
            )
    }
}

export default DaySelector;