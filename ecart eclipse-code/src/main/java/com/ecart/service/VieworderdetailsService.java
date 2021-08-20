package com.ecart.service;

import java.util.List;
import com.ecart.model.Vieworderdetails;


public interface VieworderdetailsService {
//	// get single product
//	public Cart getproduct(int id);
//	
//	//get single records
//	public Cart get1(int id);
	
	//get single records
	public List<Vieworderdetails> getorder(int id);
	
	//get all records   
	public List<Vieworderdetails> listresult();
	
	//save records
	public int save(Vieworderdetails vieworderdetails);
	
	public int update(Vieworderdetails vieworderdetails);
	
	//delete a record   
	void delete(int id);
}



