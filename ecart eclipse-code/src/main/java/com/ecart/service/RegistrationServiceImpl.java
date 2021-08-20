package com.ecart.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ecart.dao.RegistrationDao;
import com.ecart.model.Registration;

@Service
public class RegistrationServiceImpl implements RegistrationService{

	@Autowired
	private RegistrationDao registrationDao;
	
	@Override
	@Transactional
	public int save(Registration registration) {
		System.out.println(registrationDao.save(registration));
		return registrationDao.save(registration);
	}

	@Override
	@Transactional
	public Registration get(int id) {
		return registrationDao.get(id);
	}

	@Override
	@Transactional
	public List<Registration> listresult() {
		System.out.println("service");
		System.out.println(this.registrationDao.listresult());
		return this.registrationDao.listresult();
		
	}
	
	@Override
	@Transactional
	public int update(Registration registration) {
		return registrationDao.update(registration);
	}


//	@Override
//	public void update(int id, Registration registration) {
//		// TODO Auto-generated method stub
//		
//	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	@Transactional
	public Registration login(String email, String password) {
		return registrationDao.login(email, password);
	}
	
	@Override
	@Transactional
	public Registration login(String email) {
		return registrationDao.login(email);
	}
	
	@Override
	@Transactional
	public int checkUser(String email) {
		return registrationDao.checkUser(email);
	}
	
	@Override
	@Transactional
	public int checkOtp(int id, int otp) {
		return registrationDao.checkOtp(id, otp);
	}
	
}
