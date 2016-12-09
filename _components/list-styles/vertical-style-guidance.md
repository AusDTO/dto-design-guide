{% assign ID = "vertical-style" %}

{% capture content %}
- There are 2 columns by default. Use `.vertical-list--thirds` for 3 or `.vertical-list--fourths` for 4 columns.
- [Browsers that don't support Flexbox layout](http://caniuse.com/#feat=flexbox) will see lists in horizontal style with any images below each item.
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
