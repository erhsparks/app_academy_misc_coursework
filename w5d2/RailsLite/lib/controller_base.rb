require 'active_support'
require 'active_support/core_ext'
require 'active_support/inflector'
require 'erb'
require_relative './session'

class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res)
    @req = req
    @res = res
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    @already_built_response
  end

  # Set the response status code and header
  def redirect_to(url)
    raise if already_built_response?

    @res.location = url
    @res.status = 302

    @already_built_response = true
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    raise if already_built_response?

    @res['Content-Type'] = content_type
    @res.write(content)

    @res.finish
    @already_built_response = true
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
    controller_name = self.class.to_s.underscore

    template_path = "views/#{controller_name}/#{template_name}.html.erb"
    template = File.read(template_path)

    content = ERB.new(template).result(binding)
    content_type = 'text/html'

    render_content(content, content_type)
  end

  # method exposing a `Session` object
  def session

  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)

  end
end
