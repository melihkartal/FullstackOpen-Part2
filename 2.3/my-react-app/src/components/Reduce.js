const Reduce = (props) => {
    let total = props.courses.reduce((acc,curr) => {
        curr = curr.exercises;
        acc = acc + curr;
        return acc;
    },0)

    return(<p><b>total of {total} exercises</b></p>)
    }
    export default Reduce;
    