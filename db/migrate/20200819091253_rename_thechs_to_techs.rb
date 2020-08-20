class RenameThechsToTechs < ActiveRecord::Migration[5.2]
  def change
    rename_column :projects, :thechs, :techs
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
