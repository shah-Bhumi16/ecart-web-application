package com.ecart.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ecart.model.Cart;
import com.ecart.model.Product;

@Repository
public class ProductDaoImpl implements ProductDao {
	
	@Autowired
	private SessionFactory sessionFactory;

	@Override
	@Transactional
	public Product get(int id) {
		return sessionFactory.getCurrentSession().get(Product.class, id);
	}
	
	

	@Override
	public List<Product> listresult() {
		Session session = sessionFactory.getCurrentSession();
	    //List<Response> listresult = session.createQuery("from Product p where p.quantity > 0").list();
	    List<Product> listresult = session.createQuery("from Product").list();
	    System.out.println(listresult);
	    return listresult;
	}

	
	@Override
	public List<Product> listresult1() {
		Session session = sessionFactory.getCurrentSession();
	    //List<Response> listresult = session.createQuery("from Product p where p.quantity > 0").list();
	    List<Product> listresult = session.createQuery("from Product p where name=:name || category=:category || description=:description ").list();
	    System.out.println(listresult);
	    return listresult;
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
	public List<Product> search(String category) {
		// TODO Auto-generated method stub
		
		Session session = null;
		try {
			session = sessionFactory.getCurrentSession();
			Query query = session.createQuery("from Product where category=:category");
			query.setParameter("category", category);
			List<Product> list = query.list();
			System.out.println(list);
			
			int size = list.size();
			if(size > 0)
			{
				return list;
			}
			else
			{
				return null;
			}
			
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return null;
		

	}
}

























