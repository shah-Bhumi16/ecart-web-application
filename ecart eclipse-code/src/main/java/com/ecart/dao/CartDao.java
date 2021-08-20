package com.ecart.dao;

import java.util.List;

import com.ecart.model.Cart;
import com.ecart.model.CartItem;


public interface CartDao {
	// get single product
	public Cart getproduct(int id);

	// get single records
	public Cart get(int id);

	public int save(Cart cart);
	
	public void merge(Cart cart);

	public List<Cart> listresult();
	
	//public void updateCartItem(int id);
	
	public void deleteCartItem(int id);
	
	public void updateOrderStatus(int userId);
}
