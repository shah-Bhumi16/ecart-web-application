package com.ecart.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ecart.model.Cart;
import com.ecart.model.CartItem;

@Repository
public class CartDaoImpl implements CartDao {

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public Cart getproduct(int id) {
		return null;
	}

	@Override
	@Transactional
	public int save(Cart cart) {
		sessionFactory.getCurrentSession().saveOrUpdate(cart);
		return cart.getId();
	}
	
	@Override
	@Transactional
	public void merge(Cart cart) {
		sessionFactory.getCurrentSession().merge(cart);
	}

	@Override
	public List<Cart> listresult() {
		Session session = sessionFactory.getCurrentSession();
		List<Cart> listresult = session.createQuery("from Cart").list();
		System.out.println(listresult);
		return listresult;
	}

	@Override
	public Cart get(int id) {
		Cart cart = new Cart();
		try {
			
			Session session = sessionFactory.getCurrentSession();
			Query<Cart> query = session
			.createQuery("from Cart ct inner join ct.registration rg where rg.id=:id and ct.status=:status");
			query.setParameter("id", id);
			query.setParameter("status", 1);
			List list = query.getResultList();
			System.out.println(list);
			System.out.println(list.isEmpty());
			if (!list.isEmpty()) {
				Object[] ob = (Object[]) list.get(0);
				cart = (Cart) ob[0];
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return cart;
	}
	

	public void deleteCartItem(int id) {
		
		try {
			Session session = sessionFactory.getCurrentSession();
			Query<CartItem> query = session.createQuery("delete from CartItem ct where ct.id=:id");
			query.setParameter("id", id);
			query.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
	
	@Override
	public void updateOrderStatus(int userId) {
		try {
			Session session = sessionFactory.getCurrentSession();
			Query<CartItem> query = session.createQuery("Update Cart ct set ct.status=:status where ct.registration.id=:id");
			query.setParameter("status", 2);
			query.setParameter("id", userId);
			query.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}
