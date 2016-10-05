class GroupsController < ApplicationController
  private
    def input_params
      params.require(:group).permit(:name, :user_id)
    end
end
