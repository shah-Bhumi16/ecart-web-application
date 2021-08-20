package com.ecart.service;

import java.util.List;

import com.ecart.model.Cart;

public interface CartService {
	public Cart getproduct(int id);
	
	
	//get single records
	public Cart get(int id);


	public int save(Cart cart);
	
	public void merge(Cart cart); 

	public List<Cart> listresult();
	
	public void deleteCartItem(int id);
	
	//public void updateCartItem(int id);
	
	public void updateOrderStatus(int userId);
}
