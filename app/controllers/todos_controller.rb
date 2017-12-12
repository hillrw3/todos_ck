class TodosController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @todos = Todo.all
  end

  def new

  end

  def create
    Todo.create(todo_params)
    redirect_to action: :index
  end

  private

  def todo_params
    params.require(:todo).permit(:title)
  end
end