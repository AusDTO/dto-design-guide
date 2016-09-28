module Jekyll
  class RenderUIKitVersion < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @package_data = JSON.parse(File.read('_assets/vendor/dto-ui-kit/package.json'))
    end

    def render(context)
      "#{@package_data['version']}"
    end
  end
end

Liquid::Template.register_tag('uikit_version', Jekyll::RenderUIKitVersion)
