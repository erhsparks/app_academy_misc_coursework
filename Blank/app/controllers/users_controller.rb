class UsersController < ApplicationController
  def index
    usernames = User.all.map do |user|
      user.name
    end
      render json: usernames
  end

  def create
    user = User.new(user_params)

    if user.save
      render json: user
    else
      render(
        json: user.errors.full_messages, status: :unprocessable_entity
      )
    end
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    render json: user
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def destroy
    user = User.find(params[:id])
    user.destroy

    render json: user
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
