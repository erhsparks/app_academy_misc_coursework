class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  def model_class
    self.class.name.split("Controller").first.singularize.constantize
  end

  def index
    @data = model_class.all

    render json: @data
  end

  def create
    @datum = model_class.new(input_params)

    if @datum.save
      render json: @datum
    else
      render(
        json: @datum.errors.full_messages, status: :unprocessable_entity
      )
    end
  end

  def update
    @datum = model_class.find(params[:id])

    if @datum.update(input_params)
      render json: @datum
    else
      render(
        json: @datum.errors.full_messages, status: :unprocessable_entity
      )
    end
  end

  def show
    @datum = model_class.find(params[:id])
    render json: @datum
  end

  def destroy
    @datum = model_class.find(params[:id])
    @datum.destroy

    render json: @datum
  end
end
