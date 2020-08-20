class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :content
      t.string :thechs
      t.string :img
      t.string :repo
      t.string :live_version
      t.timestamps
    end
  end
end
