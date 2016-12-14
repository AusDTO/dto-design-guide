{% assign ID = "site-navigation" %}

{% capture content %}
- The menu will collapse by default on small screens.
- Older browsers (IE8 and lower) and those without JavaScript will get an expanded menu.
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
