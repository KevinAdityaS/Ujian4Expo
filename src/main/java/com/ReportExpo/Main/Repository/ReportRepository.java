package com.ReportExpo.Main.Repository;

import org.springframework.data.repository.CrudRepository;

import com.ReportExpo.Main.Entity.Report;

public interface ReportRepository extends CrudRepository<Report, Long>{

	public Report findByIdReport(Long id);
	public Report findByName(String name);
	
}
