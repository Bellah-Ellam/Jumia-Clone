class CartController < ApplicationController
    get '/cart' do 
        cart = Cart.all
        cart.to_json
    end

    get '/cart/:id' do
        cart = Cart.find(params[:id])
        cart.to_json
    end

end
