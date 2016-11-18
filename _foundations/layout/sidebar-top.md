Primary content is always contained in 12 columns. This allows for seamless introduction of a sidebar/side navigation.

![Diagram of the layout with optional aside nav](/assets/img_grid_layout_nav.png)

By default the sidebar sits to the right of the main content. When the sidebar contains content controls (eg filters), instead of navigation, it can sit on the left side. Use the class `.sidebar-has-controls` on the parent `main` element:

```
<main class="sidebar-has-controls">
  <aside class="sidebar">
  ...
  </aside>
  <article role="main" id="content" class="content-main">
  ...
  </article>
</main>
```

### Header & footer

The site header and footer are targeted by their ARIA roles, not a `class` or `id`. Use `banner` and `contentinfo` roles, respectively.

### Accessibility

Low-vision users should be able to increase the size of the text by up to 200 per cent without breaking the layout.
