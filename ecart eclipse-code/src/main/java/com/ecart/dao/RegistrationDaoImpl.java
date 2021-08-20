package com.ecart.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ecart.model.Registration;

@Repository
public class RegistrationDaoImpl implements RegistrationDao {

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public int save(Registration registration) {
		sessionFactory.getCurrentSession().save(registration);
		return registration.getId();
	}

	@Override
	public Registration get(int id) {
		return sessionFactory.getCurrentSession().get(Registration.class, id);
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Registration> listresult() {
		Session session = sessionFactory.getCurrentSession();
		List<Registration> listresult = session.createQuery("from Registration").list();
		System.out.println(listresult);
		return listresult;
	}

	@Override
	public int update(Registration registration) {
		sessionFactory.getCurrentSession().update(registration);
		return registration.getId();
		
	}

	

	@Override
	public void delete(int id) {
	}

	@Override
	public Registration login(String email, String password) {
		Session session = null;
		Registration registration = null;
		try {
			session = sessionFactory.getCurrentSession();
			Query<Registration> query = session.createQuery("from Registration where email=:email and password=:password");
			query.setParameter("email", email);
			query.setParameter("password", password);
			List<Registration> list = query.getResultList();
			if(!list.isEmpty()) {
				registration = list.get(0);
			}

		} catch (Exception exception) {
			exception.printStackTrace();
		}
		return registration;
	}
	
	@Override
	public Registration login(String email) {
		Session session = null;
		Registration registration = null;
		try {
			session = sessionFactory.getCurrentSession();
			Query<Registration> query = session.createQuery("from Registration where email=:email");
			query.setParameter("email", email);
			
			List<Registration> list = query.getResultList();
			if(!list.isEmpty()) {
				registration = list.get(0);
			}

		} catch (Exception exception) {
			exception.printStackTrace();
		}
		return registration;
	}
	
	@Override
	public int checkUser(String email) {
		Session session = null;
		Registration registration = null;
		
		try {
			session = sessionFactory.getCurrentSession();
			Query<Registration> query = session.createQuery("from Registration where email=:email");
			query.setParameter("email", email);
			
			List<Registration> list = query.list();
			int size=list.size();
			if(size==1) {
				
				return  list.get(0).getId();
				//return registration.getId();
			}

		} catch (Exception exception) {
			exception.printStackTrace();
		}
		return 0;
	}
	
	@Override
	public int checkOtp(int id, int otp) {
		Session session = null;
		try {
			session = sessionFactory.getCurrentSession();
			Query<Registration> query = session.createQuery("from Registration where id=:id and otp=:otp");
			query.setParameter("id", id);
			query.setParameter("otp", otp);
			System.out.println("reset1");
			List<Registration> list = query.list();
			System.out.println(list);
			int size=list.size();
			System.out.println("reset2");
			if(size==1) {
				System.out.println("reset3");
				return  list.get(0).getId();
			}
			else{
				return -1;
				}

		}
		catch (Exception exception) {
			exception.printStackTrace();
		}
		return 0;
		}
	

}
