{% assign ID = "typeface" %}

{% capture content %}
- Use just 1 sans serif font (Open Sans). Open Sans is a sans-serif font selected for accessibility and readability.
- Use monospace... [PASCAL TO FILL IN & CSS FOR FONT SPECIMEN PLEASE]
- Include Open Sans by calling [Web Font Loader](https://github.com/typekit/webfontloader) in the `head`.
- Set `line-height` (leading) to at least 1.5 (UI-Kit uses 1.6).
- UI-Kit applies a maximum width of 38 rem (about 70 characters) to typographic elements in the main content container (`h1`-`h5`, `p`, `li` and `dl`). This gives a [readable line length](https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/#line-length-measure-and-reading).
- Don’t apply a `font-size` to a container element (for example, a `footer`).
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
