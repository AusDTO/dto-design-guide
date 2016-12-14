{% assign ID = "headings" %}

{% capture content %}
- The page title should clearly state what the page is about. It should be the only `h1` on the page. Put the most important information at the start of the title.
- Use headings consistently to create a clear visual hierarchy. Don't skip heading levels. Users skim and navigate pages using the heading hierarchy.
- Use short relevant keywords at the start of headings. The user should be able to understand the content at a high level by just scanning the headings.
- Limit most content to `h1` to `h4` levels. The `h4`, `h5` and `h6` headings are styled the same.
- The `.gov-speak` class provides styles for long structured documents that need more than 4 heading levels, for example annual reports.

Read more <a href="http://content-style-guide.apps.staging.digital.gov.au/az-indexes/h.html#headings-and-subheadings" rel="external">guidance on headings and subheadings in the DTA Content Style Guide</a>.
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
