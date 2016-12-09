{% assign ID = "lists" %}

{% capture content %}
- Use bullet point (unordered) lists to display text in no specific order.
- Use a numbered (ordered) list when you need to display text in some ranking, hierarchy or series of steps.
- Write each item with the same grammar.
- Don't make everything into a list. Use lists only for content that really is a list.
- Avoid second and third level nested lists.
- Use description lists only for description. For example, a glossary of definitions.

Follow the [DTO Content Style Guide advice on lists](http://content-style-guide.apps.staging.digital.gov.au/az-indexes/b.html#bullet-point-lists).
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
