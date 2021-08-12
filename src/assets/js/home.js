import {request} from "../../utils/main";

  function hot_course(){
   return request({
       url:"/virlab/json/hot_course.jsp",
       //course_type.jsp
       params:{
           no_conv:1
       }
   })
}


  function course_type(){
    return request({
        url:"/virlab/json/course_type.jsp",
        params:{
            no_conv:1
        }
    })
}

export default {hot_course, course_type}