package edu.kh.project.main.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class MainController {

	@GetMapping("/test1")
    public List<String> test1(){
        return Arrays.asList("서버 포트는 8080(80)", "리액트 포트는 3000");
    }
	
	@PostMapping("/test2")
	public String test2(@RequestBody Map<String, Object> map) {
		
		log.info("map {}", map);
		
		String message = null;
		
		int age = (int) map.get("age");
		
		if(age >= 20) {
			message = map.get("name") + "님은 성인 입니다.";
		} else {
			message = map.get("name") + "님은 미성년 입니다.";
		}
		
		return message;
	}
	
	
}
