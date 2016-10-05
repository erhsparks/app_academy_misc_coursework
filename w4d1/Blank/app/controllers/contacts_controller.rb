class ContactsController < ApplicationController
  def index
    user = User.find(params[:user_id])
    all_contacts = user.contacts + user.shared_contacts

    render json: all_contacts.uniq
  end

  # def create
  #   @contact = Contact.new(input_params)
  #
  #   if @contact.save
  #     render json: @contact
  #   else
  #     render(
  #       json: @contact.errors.full_messages, status: :unprocessable_entity
  #     )
  #   end
  # end
  # 
  # def update
  #   @contact = Contact.find(params[:id])
  #
  #   if @contact.update(input_params)
  #     render json: @contact
  #   else
  #     render(
  #       json: @contact.errors.full_messages, status: :unprocessable_entity
  #     )
  #   end
  # end
  #
  # def show
  #   @contact = Contact.find(params[:id])
  #   render json: @contact
  # end
  #
  # def destroy
  #   @contact = Contact.find(params[:id])
  #   @contact.destroy
  #
  #   render json: @contact
  # end

  private
  def input_params
    params.require(:contact).permit(:name, :email, :user_id)
  end
end
