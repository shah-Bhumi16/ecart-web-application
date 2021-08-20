package com.ecart.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ecart.dao.ProductDao;
import com.ecart.dao.VieworderdetailsDao;

import com.ecart.model.Vieworderdetails;

@Service
public class VieworderdetailsServiceImpl implements VieworderdetailsService{


	@Autowired
	private VieworderdetailsDao vieworderdetailsDaoImpl;
	
	@Override
	@Transactional
	public List<Vieworderdetails> getorder(int id) {
		// TODO Auto-generated method stub
		return vieworderdetailsDaoImpl.getorder(id);
	}

//	@Override
//	@Transactional
//	public List<Vieworderdetails> listresult() {
//		return vieworderdetailsDaoImpl.listresult();
//	}

	@Override
	@Transactional
	public int save(Vieworderdetails vieworderdetails) {
		System.out.println(vieworderdetailsDaoImpl.save(vieworderdetails));
		return vieworderdetailsDaoImpl.save(vieworderdetails);
	}

	@Override
	public int update(Vieworderdetails vieworderdetails) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Vieworderdetails> listresult() {
		// TODO Auto-generated method stub
		return null;
	}

	
}
