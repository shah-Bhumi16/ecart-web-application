package com.ecart.controller;

import java.util.Iterator;
import java.util.List;
import java.util.Properties;
import java.util.Random;
import java.util.Base64;
import java.security.spec.KeySpec;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.ecart.model.Cart;
import com.ecart.model.CartItem;
import com.ecart.model.Product;
import com.ecart.model.Registration;
import com.ecart.model.Vieworderdetails;
import com.ecart.service.CartService;
import com.ecart.service.ProductService;
import com.ecart.service.RegistrationService;
import com.ecart.service.VieworderdetailsService;


@CrossOrigin("*")
@RestController
@EnableWebMvc
public class EcartController {

	@Autowired
	private RegistrationService registrationService;

	@Autowired
	private ProductService productService;

	@Autowired
	private CartService cartService;
	
	@Autowired
	private  VieworderdetailsService vieworderdetailsService;

	
	@RequestMapping(value = "/api/registration/login", method = RequestMethod.POST)
	public ResponseEntity login(@RequestBody Registration login) {
//		
//		if(null == login.getEmail() || "" == login.getEmail() ) {
//			return new ResponseEntity(HttpStatus.BAD_REQUEST);
//		}
		String originalString = login.getPassword();
		System.out.println("original string encrypted to : " +originalString);
		String encryptedString = encrypt(originalString);
		login.setPassword(encryptedString);
		
		HttpHeaders httpHeader = null;
		Registration registration = registrationService.login(login.getEmail());
		if (null != registration) {
			
			registration = registrationService.login(login.getEmail(), login.getPassword());
			if (null != registration) {
				return new ResponseEntity(registration, HttpStatus.OK);
				} 
			else {
				return new ResponseEntity(HttpStatus.NOT_FOUND);
			}	
		} 
		else {
			return new ResponseEntity(HttpStatus.BAD_REQUEST);
		}	
	}

	@RequestMapping(value = "/api/productList", method = RequestMethod.POST)
	public ResponseEntity getProductList() {
		List<Product> response = (List<Product>) productService.listresult();
		return new ResponseEntity(response, HttpStatus.OK);
	}

	@RequestMapping(value = "/api/product/{id}", method = RequestMethod.GET)
	public ResponseEntity<Product> get1(@PathVariable("id") int id) {
		Product product = (Product) productService.get(id);
		return ResponseEntity.ok().body(product);
	}
	
	
//	@RequestMapping(value = "/api/productsearch/{name}", method = RequestMethod.GET)
//	public ResponseEntity<Product> get(@PathVariable("name") String name) {
//		Product product = (Product) productService.get(name);
//		return ResponseEntity.ok().body(product);
//	}

	@RequestMapping(value = "/api/product/searchproduct", method = RequestMethod.POST)
	public ResponseEntity<List<Product>> search(@RequestBody Product product){
		List<Product> list = productService.search(product.getCategory());
		return ResponseEntity.ok().body(list);
		
	}

	@RequestMapping(value = "/api/productList/search", method = RequestMethod.POST)
	public ResponseEntity getProductList1() {
		List<Product> response = (List<Product>) productService.listresult();
		return new ResponseEntity(response, HttpStatus.OK);
	}
	
	// get all the registration
	@RequestMapping(value = "/api/registration", method = RequestMethod.GET)
	public ResponseEntity<List<Registration>> list() {
		List<Registration> list = registrationService.listresult();
		System.out.println("controller list" + list);
		try {
			System.out.println(ResponseEntity.ok().body(list));
			return ResponseEntity.ok().body(list);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	// save the registration
	@RequestMapping(value = "/api/registration", method = RequestMethod.POST)
	public ResponseEntity<?> save(@RequestBody Registration registration) {
		
		String originalString = registration.getPassword();
		System.out.println("original string encrypted to : " +originalString);
		String encryptedString = encrypt(originalString);
		System.out.println(" Encrypted string: " + encryptedString);
		registration.setPassword(encryptedString);
//		
		Integer id = registrationService.save(registration);
		return ResponseEntity.ok().body("user created with id: " + id);
	}

	// get a single record
	@RequestMapping(value = "/api/registration/{id}", method = RequestMethod.GET)
	public ResponseEntity<Registration> get(@PathVariable("id") int id) {
		Registration registration = registrationService.get(id);
		return ResponseEntity.ok().body(registration);
	}

	private static final String key = "aesEncryptionKey";
	private static final String initVector = "encryptionIntVec";
	
	public static String encrypt(String value) {
	    try {
	        IvParameterSpec iv = new IvParameterSpec(initVector.getBytes("UTF-8"));
	        SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes("UTF-8"), "AES");
	 
	        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
	        cipher.init(Cipher.ENCRYPT_MODE, skeySpec, iv);
	 
	        byte[] encrypted = cipher.doFinal(value.getBytes());
	        return Base64.getEncoder().encodeToString(encrypted);
	    } catch (Exception ex) {
	        ex.printStackTrace();
	    }
	    return null;
	}
	
	
	@RequestMapping(value = "/api/addToCart", method = RequestMethod.POST)
	public ResponseEntity<?> addToCart(@RequestBody Cart cart) {
		int id = 0;
		try {
			if (cart.getId() == null) {
				Cart currentCart = (Cart) cartService.get(cart.getRegistration().getId());
				if (currentCart != null) {
					cart.setId(currentCart.getId());
				}
				for (CartItem cartItem : cart.getCartItem()) {
					cartItem.setCart(cart);
				}
				id = cartService.save(cart);
			} else {
				cartService.merge(cart);
				id = cart.getId();
			}

			
			return ResponseEntity.ok().body("Cart created or updated with id: " + id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	
	@RequestMapping(value = "/api/getToCart", method = RequestMethod.POST)
	public ResponseEntity getCartList() {
		List<Cart> response = (List<Cart>) cartService.listresult();
		return new ResponseEntity(response, HttpStatus.OK);
	}

	
	@RequestMapping(value = "/api/cartnew/{registration_id}", method = RequestMethod.GET)
	public ResponseEntity<Cart> getcart(@PathVariable("registration_id") int id) {
		//System.out.println("cart new...");
		int qty;
		
		Cart cart = (Cart) cartService.get(id); // .out.println(cart);
		if(null != cart) {
			List<CartItem> cartItemList = cart.getCartItem();
			
			Iterator<CartItem> iterator = cartItemList.iterator();
			while(iterator.hasNext()) {
				CartItem cartItem = iterator.next();
				qty=cartItem.getQuantity();
				if(cartItem.getProduct().getQuantity() <= 0) { //actual product qty kare che cehck
					cartService.deleteCartItem(cartItem.getId());
					iterator.remove();
				}
			}
		}
		
		return ResponseEntity.ok().body(cart);
	}

	
	@RequestMapping(value = "/api/deleteCartItem/{cartItemId}", method = RequestMethod.DELETE)
	public ResponseEntity deleteCartItem(@PathVariable("cartItemId") int id) {
		cartService.deleteCartItem(id);
		return ResponseEntity.ok().body("Deleted cart Id : " + id);
	}

	//forget password API
	@RequestMapping(value = "/api/registration/send-otp", method = RequestMethod.POST)
	public ResponseEntity<Integer> forgotpassword(@RequestBody Registration registration) {
		//String originalString = registration.getEmail();
		
		int status;
		int fstatus;
		HttpHeaders httpHeader = null;
		HttpHeaders httpHeaders = null;
		
		fstatus = registrationService.checkUser(registration.getEmail());
		System.out.println(fstatus);
		if(fstatus > 0) {
			registration = registrationService.get(fstatus);
			System.out.println("fstatus2");
			Random random = new Random();
			Integer otp = random.nextInt(10000);
			System.out.println("OTP " + otp);
			System.out.println(registration.getName());
			registration.setOtp(otp);
			Integer id = registrationService.update(registration);
			String to= registration.getEmail();
			String from = "19mca174@nirmauni.ac.in";
			String password = "Mahavir@16";
			String sub = "Reset password...";
			String msg = "This is your OTP...! " +otp;
		
			send(from, password, to, sub, msg);
			
			return new ResponseEntity<Integer>(fstatus, httpHeader, HttpStatus.OK);
			
		}
		else
		{
			return new ResponseEntity<Integer>(fstatus, httpHeader, HttpStatus.NOT_FOUND);
		}
		
		}

	//Reset password API
	
	@RequestMapping(value = "/api/registration/resetpassword", method = RequestMethod.POST)
	public ResponseEntity<Integer> resetpassword(@RequestBody Registration registration) {
		
		int fstatus;
		HttpHeaders httpHeader = null;
		
		fstatus = registrationService.checkOtp(registration.getId(), registration.getOtp());
//		System.out.println(registration.getPassword());
//		System.out.println(registration.getId());
//		System.out.println(registration.getOtp());
		if(fstatus == registration.getId()) {
			System.out.println(registration.getPassword());
			String originalString = registration.getPassword();
			System.out.println("original string encrypted to : " +originalString);
			String encryptedString = encrypt(originalString);
			System.out.println(" Encrypted string: " + encryptedString);
			registration = registrationService.get(fstatus);
			registration.setPassword(encryptedString);
			registration.setOtp(null);			
			Integer id = registrationService.update(registration);
			String to= registration.getEmail();
			String from = "19mca174@nirmauni.ac.in";
			String password = "Mahavir@16";
			String sub = "Password chenged sucessfully";
			String msg = "Your password has been changed sucessfully!";
			send(from, password, to, sub, msg);
			return new ResponseEntity<Integer>(fstatus, httpHeader, HttpStatus.OK);
			
		}
		else
		{
			return new ResponseEntity<Integer>(fstatus, httpHeader, HttpStatus.NOT_FOUND);
		}
		
	}
	
	@RequestMapping(value = "/api/sendemail", method = RequestMethod.POST)
	public ResponseEntity<?> email(@RequestBody Cart cart) {

		String from = "19mca174@nirmauni.ac.in";
		String password = "Mahavir@16";
		String to = cart.getRegistration().getEmail();

		List<CartItem> cartItemList = cart.getCartItem();
		for (CartItem cartItem : cartItemList) {
			Product product = cartItem.getProduct();
			product.setQuantity(product.getQuantity() - cartItem.getQuantity());
			cartItem.setProduct(product);
		}
		cart.setCartItem(cartItemList);
		cart.setStatus(2);
		cartService.save(cart);

		String sub = "Shopping E-cart application";
		String msg = "Your order has been sucessfully placed...!";
		
		try {
			send(from, password, to, sub, msg);

		} catch (Exception mex) {
			mex.printStackTrace();
		}
		return ResponseEntity.ok().body("message send sucessfully..");

	}

	public static void send(String from, String password, String to, String sub, String msg) {
		// Get properties object
		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");
		// get Session
		Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(from, password);
			}
		});
		// compose message
		try {
			MimeMessage message = new MimeMessage(session);
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
			message.setSubject(sub);
			message.setText(msg);
			// send message
			Transport.send(message);
			System.out.println("message sent successfully");
		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}

	}
	
	@RequestMapping(value = "/api/vieworderdetails", method = RequestMethod.POST)
	public ResponseEntity<?> save(@RequestBody Vieworderdetails vieworderdetails) {
		
		Integer id = vieworderdetailsService.save(vieworderdetails);
		return ResponseEntity.ok().body("order created with id: " + id);
	}

	@RequestMapping(value = "/api/vieworderdetails/{registration_id}", method = RequestMethod.GET)
	public ResponseEntity<List <Vieworderdetails>> getvieworderdetails(@PathVariable("registration_id") int id) {
		List <Vieworderdetails> vieworderdetails =vieworderdetailsService.getorder(id) ;
		return ResponseEntity.ok().body(vieworderdetails);
	}
	
}
