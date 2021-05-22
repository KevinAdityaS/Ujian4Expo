package com.ReportExpo.Main.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ReportExpo.Main.Entity.Report;

public interface ReportRepository extends CrudRepository<Report, Long>{

	public Report findByIdReport(Long id);
	
	@Query(value = "select * from report where name LIKE %?1%",nativeQuery=true)
	List<Report> findByName(String name);
	
}
