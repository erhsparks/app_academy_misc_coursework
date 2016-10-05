class NotesController < ApplicationController

  private
    def input_params
      params.require(:note).permit(:body, :author_id)
    end
end
