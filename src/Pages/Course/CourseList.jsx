import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import {getAllCourses} from "../../Redux/Slices/courseSlice";

import HomeLayout from "../../Layout/HomeLayout";
import CourseCard from "../../Components/CourseCard";

function CourseList(){
    const dispatch=useDispatch();

    const {courseData}=useSelector((state)=>state.course);

    async function loadCourse(){
        await dispatch(getAllCourses());
    }

    useEffect(()=>{
      loadCourse();
    },[])

    return (
       <HomeLayout>
         <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white">
            <h1 className="mb-5 text-3xl font-semibold text-center">
                Explore the courses made by   
                <span className="font-bold text-yellow-500">
                   Industry experts
                </span>
            </h1>
                <div className="flex flex-wrap mb-10 gap-14">
                   {courseData?.map((el)=>{
                    return <CourseCard key={el._id} data={el}/>
                   })}
                </div>
         </div>
       </HomeLayout>
    )
}

export default CourseList;