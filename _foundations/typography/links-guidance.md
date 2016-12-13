{% assign ID = "links" %}

{% capture content %}
- Link to only what the user needs. Too many links can make content hard to read.
- Use keywords that the user will understand and describe the destination.
- Aim to add links in paragraphs, rather than lists at the end.
- Use 'see more' links at the end of <a href="/components/list-styles/index.html">list styles</a> to take the user to a index page of all items.
- Use placeholder styling (greyed out links) to show actions that a user can't currently take. Explain why the action isn't available and when it will be.
- Placeholder styling only works in <code>&lt;span&gt;</code> tags, not <code>&lt;a&gt;</code>.
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
