package com.ecart.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ecart.dao.CartDao;
import com.ecart.model.Cart;


@Service
public class CartServiceImple implements CartService {

	@Autowired
	CartDao cartDaoImpl;
	
	@Override
	public Cart getproduct(int id) {
		return null;
	}

	
	@Override
	@Transactional
	public int save(Cart cart) {
		return cartDaoImpl.save(cart);
	}

	@Override
	@Transactional
	public List<Cart> listresult() {
		return cartDaoImpl.listresult();
	}
	
	@Override
	@Transactional
	public void merge(Cart cart) {
		cartDaoImpl.merge(cart);
	}

	@Override
	@Transactional
	public Cart get(int id) {
		//System.out.println("cart service get...");
		return cartDaoImpl.get(id);
	}
	
	@Override
	@Transactional
	public void deleteCartItem(int id) {
		cartDaoImpl.deleteCartItem(id);
	}
	
	@Override
	@Transactional
	public void updateOrderStatus(int userId) {
		cartDaoImpl.updateOrderStatus(userId);
		
	}	
}
