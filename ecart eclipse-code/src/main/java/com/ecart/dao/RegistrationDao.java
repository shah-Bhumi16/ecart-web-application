package com.ecart.dao;

import java.util.List;

import com.ecart.model.Registration;


public interface RegistrationDao {
	//save records
		

		//get single records
		public Registration get(int id);

		//get all records   
		public List<Registration> listresult();

		//update the record   
		//void update(Registration registration);

		//delete a record   
		void delete(int id);

		public Registration login(String email, String password);
		
		public Registration login(String email);

		public int save(Registration registration);

		public int update(Registration registration);
		
		public int checkUser(String email);
		
		public int checkOtp(int id, int otp);
		
}
