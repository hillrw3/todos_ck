class TodosController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @todos = Todo.order(:created_at)
  end

  def create
    todo = Todo.create(todo_params)
    render json: todo.as_json
  end

  def update
    todo = Todo.find(params[:id])
    todo.update(todo_params)

    render json: todo.as_json
  end

  def destroy
    todo = Todo.find(params[:id]).destroy
    render json: todo.as_json
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :complete)
  end
end