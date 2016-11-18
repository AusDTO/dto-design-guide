This framework uses <a href="http://bourbon.io/" rel="external">Bourbon</a> and <a href="http://neat.bourbon.io/" rel="external">Neat</a> to create a consistent 16 column responsive grid layout with good defaults.

Bourbon is a <a href="http://sass-lang.com/" rel="external">SASS</a> mixin library (it provides little styling). Neat is a flexible grid framework.

Avoid mixing this layout with other grid layouts.

<p class="callout"><strong>Grid classes?</strong> There are no non-semantic grid classes with which to set block elements. This is intentional. If you need to add to or customise the grid system see below.</p>

Primary content is always contained in 12 columns. This allows for seamless introduction of a sidebar/side navigation.

The grid unit proportions, gutters and spacing are defined in `_grid-settings.scss`.

If you need an element not defined here you are probably not the only one &mdash; please <a href="https://github.com/AusDTO/gov-au-ui-kit/issues" rel="external">log a GitHub issue</a> so we can provide it for everyone.

### Layout

Maximum page width is set to 1200px. Gutters between the columns are a minimum of 32px.

```
$max-width: em(1200) !global;
$gutter: em(32);
```

We define the grid placement for the following page layout elements:

- `header[role='banner']` and `footer[role='contentinfo']`
- `main.content-main`
- `aside`.

To create your own element you will need to use the <a href="http://thoughtbot.github.io/neat-docs/latest/#span-columns" rel="external">Neat <code>span-columns</code> function</a>.

For each new element you will need to set column properties for the breakpoints, from smallest to largest:

1. `$mobile`
2. `$tablet`
3. `$desktop`

The following diagram shows how the main content area takes up 12 of 16 columns at `$desktop` and above:

![Diagram of the layout across 16 columns](/assets/img_grid_layout.png)

For iOS users ensure you set the `viewport` to the `device-width` in your `<head>` to ensure your site is responsive:

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Wrapper class

There is a wrapper class (`<div class="wrapper">`) for wrapping the contents of a block within the grid, while allowing its outer container to run the full viewport width.

This is currently used for the page `header` and `footer`, and also for the [breadcrumbs](section-navigation.html#kssref-navigation-2-breadcrumbs).
