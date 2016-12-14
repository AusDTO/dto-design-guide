{% assign ID = "text-input" %}

{% capture content %}
Trigger the iPhone numpad using `pattern="[0-9]*"` attribute in the input element. Don't add a `type` attribute.
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
