{% assign ID = "buttons" %}

{% capture content %}
- Use 1 button per page to build a strong call to action. Multiple buttons will force the user to make a choice. If the user needs to make a choice use another kind of element, for example a radio button.
- Use button text to describe what the button does. Keep it short.
- The button alignment in forms should put the primary action button at the left edge, in the user's line of sight.
- Don't apply styles to disabled buttons.
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
