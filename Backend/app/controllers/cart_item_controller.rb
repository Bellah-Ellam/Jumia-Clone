class CartItemController < ApplicationController
    # POST /cart/items
    post '/cart/items' do
      authorize
  
      @product = Product.find(params[:product_id])
      @cart = current_user.cart || current_user.build_cart
  
      # Check if the product is already in the cart
      if @cart.products.include?(@product)
        cart_item = @cart.cart_items.find_by(product_id: @product.id)
        cart_item.increment!(:quantity)
        flash[:success] = "Product quantity increased in the cart"
      else
        # Create a new cart item
        cart_item = @cart.cart_items.new(product_id: @product.id)
        flash[:success] = "Product added to cart successfully"
      end
  
      if cart_item.save
        redirect '/cart'
      else
        flash[:error] = "Failed to add product to cart"
        redirect back
      end
    end
  
    # PUT /cart/items/:id
    put '/cart/items/:id' do
      authorize
  
      @cart_item = CartItem.find(params[:id])
  
      if @cart_item.update(quantity: params[:quantity])
        flash[:success] = "Cart item quantity updated successfully"
        redirect '/cart'
      else
        flash[:error] = "Failed to update cart item quantity"
        redirect back
      end
    end
  
    # DELETE /cart/items/:id
    delete '/cart/items/:id' do
      authorize
  
      @cart_item = CartItem.find(params[:id])
  
      if @cart_item.destroy
        flash[:success] = "Cart item removed successfully"
      else
        flash[:error] = "Failed to remove cart item"
      end
  
      redirect '/cart'
    end
  end
  