{% assign ID = "spacing" %}

{% capture content %}
#### Spacing variables

Grid unit proportions, gutters and spacing are defined in `_grid-settings.scss`:

{% highlight scss %}
$max-width: em(1200) !global;
$gutter: em(32);
{% endhighlight %}

These breakpoints are set to `max-width`:

- `$mobile-only`
- `$tablet-only`

Gutter spacing is set using `$gutter`.

#### Page layout elements

- `header[role="banner"]`
- `footer[role="contentinfo"]`
- `main.content-main`
- `aside`

#### Wrapper class

You can use `<div class="wrapper">` to wrap the contents of a block in the grid in the full viewport width.

For example, the page header, footer and breadcrumbs.

#### Create elements

Before you build your own element, find out how to <a href="https://github.com/AusDTO/gov-au-ui-kit/blob/develop/CONTRIBUTING.md" rel="external">contribute to UI-Kit</a> so you can help other teams meet user needs.

There are no non-semantic grid classes to set block elements. Instead use the <a href="http://thoughtbot.github.io/neat-docs/latest/#span-columns" rel="external">Neat `span-columns` function</a>.

Set column properties for the `$mobile`, `$tablet` and `$desktop` breakpoints. Make sure you consider font size at the different breakpoints.

Set the `viewport` to the `device-width` in your `<head>`:

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1.0">
{% endhighlight %}

#### Omega reset

You may need to reset [Neat's omega properties](http://thoughtbot.github.io/neat-docs/latest/#omega) to apply grid columns to responsive layouts:

{% highlight scss %}
.grid-item {
   @include span-columns(2 of 4);
   @include omega(2n);

   @include media($desktop) {
     @include omega-reset(2n);
     @include span-columns(4 of 12);
     @include omega(3n);
   }
 }
{% endhighlight %}


#### Debugging
Turn on the visual grid to help debugging:

{% highlight scss %}
$visual-grid: true;
{% endhighlight %}

See the example [Bourbon Neat working grid layout](http://neat.bourbon.io/examples/).
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
