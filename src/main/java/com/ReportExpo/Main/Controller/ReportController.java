package com.ReportExpo.Main.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ReportExpo.Main.Entity.Report;
import com.ReportExpo.Main.Repository.ReportRepository;

@RestController
@RequestMapping("/report")
public class ReportController {

	@Autowired
	ReportRepository reportRepository;
	
	@GetMapping("/")
	public List<Report> getAll(){
		
		return (List<Report>) reportRepository.findAll();
		
	}
	
	@PostMapping("/addReport")
	public String addReport(@RequestBody Report report) {
		
		reportRepository.save(report);
		return "Insert Successfully!";
		
	}
	
}
