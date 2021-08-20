package com.ecart.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name="Registration",uniqueConstraints={@UniqueConstraint(columnNames={"email"})})
public class Registration //extends Response 
{

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY) // using getter setter method fatching data and primary key is
														// autoincrement
	private Integer id;
	private String name;
	private String address;
	@Column(unique=true)
	private String email;
	private String password;
	private Integer otp;

	public Integer getId() {	//getter method get your value
		return id;
	}

	public void setId(Integer id) {		//setter method set or update your value
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getOtp() {
		return otp;
	}

	public void setOtp(Integer otp) {
		this.otp = otp;
	}

	@Override
	public String toString() {
		return "Registration [id=" + id + ", name=" + name + ", address=" + address + ", email=" + email + ", password="
				+ password + ", otp=" + otp + "]";
	}

	

	
}