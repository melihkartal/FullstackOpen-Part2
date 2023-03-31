const Course = (props) => {

    return(
        props.courses.map((course)=>{
            return(<p key= {course.id}>{course.name} {course.exercises}</p>)
        })
        )
    }
    export default Course;
    