{% assign ID = "body copy" %}

{% capture content %}
- Write the most important information in the first paragraph.
- You can style the first paragraph as summary text by applying `class="abstract"` or `class="lede"`.
- Use sentence case for most content. For example &lsquo;Sign in&rsquo; button. But use [title case for titles](http://content-style-guide.apps.staging.digital.gov.au/az-indexes/t.html#titles) like Department of Communications and the Arts.
- Don&#39;t write in all <em>italics</em> or CAPITALS.
- Avoid using **bold**. Bolding a word can help scannability. **But blocks of bold text are hard to read**.
- Use the [kbd element to show users which keys to press](http://w3c.github.io/html/textlevel-semantics.html#the-kbd-element), for example <kbd>Ctrl</kbd>+<kbd>C</kbd>.
- To use an element that spans the maximum space, use the class `.content-full-width`.
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
