{% assign ID = "tables" %}

{% capture content %}
- Tables should be used for data, never design.
- Consider more accessible ways to format content before using a table, such as lists.
- Avoid tables with multiple header levels and spanned cells.
- Use `thead`, `tbody` and `tfoot` to improve how browsers display tables. They don't make tables more accessible.
- Title tables using the <a href="https://www.w3.org/wiki/HTML/Elements/caption" rel="external">`<caption>` element</a> inside the `<table>` element.
- Row and column headers should be set with the <a href="https://www.w3.org/TR/html401/struct/tables.html#adef-scope" rel="external">`scope` attribute</a>.
- <a href="https://www.w3.org/WAI/tutorials/tables/" rel="external">W3C has guidance on making tables</a>.
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
