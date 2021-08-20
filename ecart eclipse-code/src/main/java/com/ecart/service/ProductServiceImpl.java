package com.ecart.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ecart.dao.ProductDao;
import com.ecart.dao.RegistrationDao;
import com.ecart.model.Product;

@Service
public class ProductServiceImpl implements ProductService {
	
@Autowired
public ProductDao productdaoImpl;

	@Override
	@Transactional
	public Product get(int id) {
		return productdaoImpl.get(id);
	}
	

	@Override
	@Transactional
	public List<Product> listresult() {
		return productdaoImpl.listresult();
	}
	
	@Override
	@Transactional
	public List<Product> listresult1() {
		return productdaoImpl.listresult();
	}

	@Override
	public void update(int id, Product product) {

	}

	@Override
	public void delete(int id) {
	}

	@Override
	public int save(Product product) {
		return 0;
	}

	@Override
	@Transactional
	public List<Product> search(String category) {
		// TODO Auto-generated method stub
		return productdaoImpl.search(category);
	}

	
}
