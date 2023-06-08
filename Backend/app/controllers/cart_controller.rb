class CartController < ApplicationController
    # GET /cart
    get '/cart' do
      authorize
  
      @cart = current_user.cart
      if @cart.nil?
        flash[:error] = "Cart not found"
        redirect '/'
      else
        @cart_items = @cart.cart_items.includes(:product)
        erb :cart_show
      end
    end
  
    # POST /cart/add
    post '/cart/add' do
      authorize
  
      @product = Product.find(params[:product_id])
      @cart = current_user.cart || current_user.build_cart
  
      if @cart.products.include?(@product)
        flash[:notice] = "Product is already in your cart"
      else
        @cart.products << @product
        flash[:success] = "Product added to cart successfully"
      end
  
      redirect back
    end
  
    # DELETE /cart/remove/:product_id
    delete '/cart/remove/:product_id' do
      authorize
  
      @product = Product.find(params[:product_id])
      @cart = current_user.cart
  
      if @cart && @cart.products.include?(@product)
        @cart.products.delete(@product)
        flash[:success] = "Product removed from cart successfully"
      else
        flash[:error] = "Product not found in your cart"
      end
  
      redirect '/cart'
    end
  end
  