This framework has a mobile-first default layout of 4 columns, and adds 3 breakpoints for grid layout on larger screens:

- Default: 4 columns
- Mobile: 8 columns, 420px minimum
- Tablet: 12 columns, 768px minimum
- Desktop: 16 columns, 1200px minimum

If you give an element a modified grid setting consider the implications for all breakpoints. The Digital Service Standard recommends you <a href="https://www.dto.gov.au/standard/6-consistent-and-responsive/" rel="external">build using mobile first design principles</a>.

Please also consider the [font size](section-typography.html#kssref-typography-2-headings-body-copy-1-breakpoints) at different breakpoints.

```
$mobile: new-breakpoint(min-width 420px 8);
$tablet: new-breakpoint(min-width 768px 12);
$desktop: new-breakpoint(min-width $max-width 16);
```

### Guidance

#### Omega Reset

When applying grid-columns to responsive layouts you may find yourself needing to reset the [omega properties applied by Neat](http://thoughtbot.github.io/neat-docs/latest/#omega):

```
.grid-item {
  @include span-columns(2 of 4);
  @include omega(2n);

  @include media($desktop) {
    @include omega-reset(2n);
    @include span-columns(4 of 12);
    @include omega(3n);
  }
}
```

#### Debugging

Turn on the visual grid to help debugging:

```
$visual-grid: true;
```

See the example <a href="http://neat.bourbon.io/examples/" rel="external">Bourbon Neat working grid layout</a>.
