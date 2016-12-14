{% assign ID = "local-navigation" %}

{% capture content %}
- Local navigation appears in the left sidebar.
- The section title link is always at top, followed by 2 levels of navigation (sub-section and page).
- Use `class="is-active"` to show where the user is.
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
