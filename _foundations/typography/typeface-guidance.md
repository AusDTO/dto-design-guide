{% assign ID = "typeface" %}

{% capture content %}
- Use just 1 sans-serif font (Open Sans). Open Sans is a sans-serif font selected for accessibility and readability.
- Include Open Sans by calling <a href="https://github.com/typekit/webfontloader" rel="external">Web Font Loader</a> in the HTML `head`.
- Refer to the `$base-sans-serif` variable to access the sans-serif font-stack.
- Use monospace fonts only for numeric data in tables or for code snippets.
- Set `line-height` (leading) to at least 1.5 (UI-Kit uses 1.6). Use 'unitless' line-heights. These act as a multiplier of the font-size.
- UI-Kit applies a maximum width of 38 rem (about 70 characters) to typographic elements in the main content container (`h1`–`h5`, `p`, `li` and `dl`). This gives a <a href="https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/#line-length-measure-and-reading" rel="external">readable line length</a>.
- Don’t apply a `font-size` to a container element (for example, a `footer`); apply them to the content elements directly.
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
