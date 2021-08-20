package com.ecart.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ecart.model.Cart;
import com.ecart.model.Vieworderdetails;

@Repository
public class VieworderdetailsDaoImpl implements VieworderdetailsDao{

	
	@Autowired
	private SessionFactory sessionFactory;
	
	
//	@Override
//	public List<Vieworderdetails> getorder(int id) {
////		List<Vieworderdetails> vieworderdetails = new Vieworderdetails();
//		//try {
//			Session session = sessionFactory.getCurrentSession();
//			Query query = session.createQuery("from Vieworderdetails where registration_id=:registration_id");
//			query.setParameter("registration_id", id);
//			
//			List<Vieworderdetails> vieworderdetails = query.list();
//			System.out.println(vieworderdetails);
//			System.out.println(vieworderdetails.isEmpty());
//			
//			return vieworderdetails;
////			if (!vieworderdetails.isEmpty()) {
////				
////				return vieworderdetails;
////			}
////			else {
////				return null;
////			}
////		}catch(Exception e) {
////			e.printStackTrace();
////		}
//		//return vieworderdetails;
//	
//	}
	

//	@Override
//	public List<Vieworderdetails> listresult() {
//		Session session = sessionFactory.getCurrentSession();
////		List<Vieworderdetails> listresult = session.createQuery("from Vieworderdetails where registration_id=:registration_id").list();
////		query.setParameter("registration_id", id);
//		System.out.println(listresult);
//		return listresult;
//	}

	@Override
	public int save(Vieworderdetails vieworderdetails) {
		sessionFactory.getCurrentSession().save(vieworderdetails);
		return vieworderdetails.getId();
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

	@Override
	public List<Vieworderdetails> getorder(int id) {
		Session session = sessionFactory.getCurrentSession();
		Query query = session.createQuery("from Vieworderdetails where registration_id=:registration_id");
		query.setParameter("registration_id", id);
		
		List<Vieworderdetails> vieworderdetails = query.list();
		System.out.println(vieworderdetails);
		System.out.println(vieworderdetails.isEmpty());
		
		return vieworderdetails;
		
	}

	

}
