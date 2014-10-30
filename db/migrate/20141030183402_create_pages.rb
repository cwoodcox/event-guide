class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :title
      t.string :display_type
      t.integer :display_order
      t.text :content
      t.references :event

      t.timestamps
    end
  end
end
