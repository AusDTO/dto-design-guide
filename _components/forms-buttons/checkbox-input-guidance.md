{% assign ID = "checkbox-input" %}

{% capture content %}
- Position labels to the right of checkboxes.
- Use ARIA tags to make sure screen readers can read the `<legend>` correctly.
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
