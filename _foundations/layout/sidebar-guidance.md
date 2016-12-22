{% assign ID = "sidebar" %}

{% capture content %}
The sidebar sits to the right of the main content by default.
To move the sidebar to the left use the class `.sidebar-has-controls` on the parent `main` element:

{% highlight html %}
<main class="sidebar-has-controls">
  <aside class="sidebar">
    ...
  </aside>
  <article role="main" id="content" class="content-main">
    ...
  </article>
</main>
{% endhighlight %}
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
