package com.ecart.service;

import java.util.List;

import com.ecart.model.Product;


public interface ProductService {

	public Product get(int id);
	
	//public Product get(String name);

	//get all records   
	public List<Product> listresult();
	
	public List<Product> listresult1();

	//update the record   
	void update(int id, Product product);

	//delete a record   
	void delete(int id);

	public int save(Product product);

	public List<Product> search(String category);

	
}
