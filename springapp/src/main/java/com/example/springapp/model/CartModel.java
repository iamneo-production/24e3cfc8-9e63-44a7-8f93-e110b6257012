package com.examly.springapp.model;
import javax.persistence.*;

@Entity
@Table(name = "cart")
public class CartModel {
    // Entity fields, annotations, constructors, getters, and setters
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long cartItemID;
        
	    @Column(name = "productName")
	    private String productName;
	    
	    @Column(name = "userId")
	    private String userId;
	    
	    @Column(name = "price")
	    private String price;
	    
	    @Column(name = "quantity")
	    private String quantity;
	    
	    @Column(name = "imageUrl")
	    private String imageUrl;

		public Long getCartItemID() {
			return cartItemID;
		}

		public void setCartItemID(Long cartItemID) {
			this.cartItemID = cartItemID;
		}

		public String getProductName() {
			return productName;
		}

		public void setProductName(String productName) {
			this.productName = productName;
		}

		public String getUserId() {
			return userId;
		}

		public void setUserId(String userId) {
			this.userId = userId;
		}

		public String getPrice() {
			return price;
		}

		public void setPrice(String price) {
			this.price = price;
		}

		public String getQuantity() {
			return quantity;
		}

		public void setQuantity(String quantity) {
			this.quantity = quantity;
		}

		public String getImageUrl() {
			return imageUrl;
		}

		public void setImageUrl(String imageUrl) {
			this.imageUrl = imageUrl;
		}

		public CartModel(Long cartItemID, String productName, String userId, String price, String quantity,
				String imageUrl) {
			super();
			this.cartItemID = cartItemID;
			this.productName = productName;
			this.userId = userId;
			this.price = price;
			this.quantity = quantity;
			this.imageUrl = imageUrl;
		}

		public CartModel() {
			super();
		}
}
