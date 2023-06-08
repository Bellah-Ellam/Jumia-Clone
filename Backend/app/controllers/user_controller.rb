class UserController < ApplicationController

    get '/users' do
        user = User.all
        user.to_json
    end

    post '/users/add_user' do
        username = params[:username]
        email = params[:email]
        password = params[:password]
            if (username.present? && email.present? && password.present?)
                check_username = User.exists?(username: username)
                check_email = User.exists?(email: email)
                if 
                    check_username == true
                    message = {:error =>'User already exists!'}
                    message.to_json()
                elsif 
                    check_email == true
                    message = {:error =>'User already exists!'}
                    message.to_json()
                else 
                    user = User.create(username: username, email: email, password: password)

                if 
                    user
                    message = {:success =>'User created successfully'}
                    message.to_json()

                else
                    message = {:error =>'Too bad!!'}
                    message.to_json()
                end
            end
        else 
            message = {:error =>'All fields are required!'}
            message.to_json()
        end
    end

    get '/current_user' do 
        user = User.find_by(id: session[:user_id])
        if 
            user
            {:user => user}.to_json
        else
            message = {:error => 'No one is logged in'}
            message.to_json()
        end
    end

    patch '/current_user/:id' do
    end

    delete '/current_user/:id' do
    end
end