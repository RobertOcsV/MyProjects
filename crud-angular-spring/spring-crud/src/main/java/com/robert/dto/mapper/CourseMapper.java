package com.robert.dto.mapper;

import org.springframework.stereotype.Component;

import com.robert.dto.CourseDTO;
import com.robert.enums.Category;
import com.robert.enums.Status;
import com.robert.model.Course;

@Component
public class CourseMapper {
    public CourseDTO toDTO(Course course) {
        if(course == null) {
            return null;
        }
        return new CourseDTO(course.getId(), course.getName(), "Front-end");
    }

    public Course toEntity(CourseDTO courseDTO) {

        if(courseDTO == null) {
            return null;
        }

        Course course = new Course();
        if(courseDTO.id() !=  null){
            course.setId(courseDTO.id());
        }
        course.setName(courseDTO.name());
        course.setCategory(Category.FRONTEND);
        course.setStatus(Status.ATIVO);
        return course;
    }

}
