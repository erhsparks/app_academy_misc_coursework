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
    @class_name = (options[:class_name] ? options[:class_name] : name.camelcase)
  end
end

class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    @primary_key = (options[:primary_key] ? options[:primary_key] : :id)
    @foreign_key = (options[:foreign_key] ? options[:foreign_key] : "#{self_class_name.underscore}_id".to_sym)
    @class_name = (options[:class_name] ? options[:class_name] : name.singularize.camelcase)
  end
end

module Associatable
  # Phase IIIb
  def belongs_to(name, options = {})
    # ...
  end

  def has_many(name, options = {})
    # ...
  end

  def assoc_options
    # Wait to implement this in Phase IVa. Modify `belongs_to`, too.
  end
end

class SQLObject
  # Mixin Associatable here...
end
