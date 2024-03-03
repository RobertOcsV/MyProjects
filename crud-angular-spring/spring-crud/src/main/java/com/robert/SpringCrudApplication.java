package com.robert;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

import com.robert.enums.Category;
import com.robert.model.Course;
import com.robert.model.Lesson;
import com.robert.repository.CourseRepository;

@SpringBootApplication
@EnableAutoConfiguration
public class SpringCrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringCrudApplication.class, args);
	}

	@Bean
	@Profile("dev")
	CommandLineRunner initDataBase(CourseRepository courseRepository) {

		return args -> {
			courseRepository.deleteAll();
			for (int i = 0; i < 20; i++) {
				Course c = new Course();
				c.setName("Angular com Spring" + i);
				c.setCategory(Category.BACKEND);

				Lesson l = new Lesson();
				l.setName("Introdução");
				l.setYoutubeUrl("mLq2x5iJ5A");
				l.setCourse(c);
				c.getLessons().add(l);

				Lesson l1 = new Lesson();
				l1.setName("Introdução");
				l1.setYoutubeUrl("mLq2x5iJ5A");
				l1.setCourse(c);
				c.getLessons().add(l1);

				courseRepository.save(c);
			}

		};
	}
}
