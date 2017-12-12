class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.boolean :complete, default: false
      t.string :title, null: false

      t.timestamps
    end
  end
end
