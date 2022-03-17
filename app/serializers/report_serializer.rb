class ReportSerializer < ActiveModel::Serializer
  attributes :id, :num_of_reports
  has_one :post
end
