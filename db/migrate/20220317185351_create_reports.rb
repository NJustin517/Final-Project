class CreateReports < ActiveRecord::Migration[6.1]
  def change
    create_table :reports do |t|
      t.belongs_to :post, null: false, foreign_key: true
      t.integer :num_of_reports

      t.timestamps
    end
  end
end
