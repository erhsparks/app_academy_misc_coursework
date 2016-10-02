require_relative '02_searchable'
require 'active_support/inflector'

# Phase IIIa
class AssocOptions
  attr_accessor(
    :primary_key,
    :foreign_key,
    :class_name
  )

  def model_class
    @class_name.constantize
  end

  def table_name
    model_class.table_name
  end
end

class BelongsToOptions < AssocOptions
  def initialize(name, options = {})
    @primary_key = (options[:primary_key] ? options[:primary_key] : :id)
    @foreign_key = (options[:foreign_key] ? options[:foreign_key] : "#{name}_id".to_sym)
    @class_name = (options[:class_name] ? options[:class_name] : name.to_s.camelcase)
  end
end

class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    @primary_key = (options[:primary_key] ? options[:primary_key] : :id)
    @foreign_key = (options[:foreign_key] ? options[:foreign_key] : "#{self_class_name.to_s.underscore}_id".to_sym)
    @class_name = (options[:class_name] ? options[:class_name] : name.to_s.singularize.camelcase)
  end
end

module Associatable
  # Phase IIIb
  def belongs_to(name, options = {})
    options = BelongsToOptions.new(name, options)

    define_method(name) do
      fkey_id = self.send(options.foreign_key)

      options.model_class.find(fkey_id)
    end
  end

  def has_many(name, options = {})
    self_class_name = self

    options = HasManyOptions.new(name, self_class_name, options)

    p options

    define_method(name) do
      pkey_id = self.send(options.primary_key)

      has_many_of = DBConnection.execute(<<-SQL, pkey_id)
      SELECT
        *
      FROM
        #{options.table_name}
      WHERE
        #{options.foreign_key} = ?
      SQL
      return [] if has_many_of.empty?

      has_many_of.map { |one_of_many| options.model_class.new(one_of_many) }
    end
  end

  def assoc_options
    # Wait to implement this in Phase IVa. Modify `belongs_to`, too.
  end
end

class SQLObject
  extend Associatable
end
