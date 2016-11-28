<details open data-label="responsive-breakpoints-guidance-accordion" aria-expanded="false">
  <summary>Guidance <span class="visuallyhidden">for responsive breakpoints</span></summary>
  <div class="accordion-panel">
    <h4>Customising elements</h4>
    <p>If you give an element a modified grid setting consider the implications for all breakpoints. The Digital Service Standard recommends you <a href="https://www.dto.gov.au/standard/6-consistent-and-responsive/" rel="external">build using mobile first design principles</a>.</p>
    <p>Please also consider the <a href="/foundations/typography/index.html#typeface">font size</a> at different breakpoints.</p>
    <pre>
    <code>
    $mobile: new-breakpoint(min-width 420px 8);
    $tablet: new-breakpoint(min-width 768px 12);
    $desktop: new-breakpoint(min-width $max-width 16);</code>
    </pre>
    <h4>Omega reset</h4>
    <p>When applying grid-columns to responsive layouts you may find yourself needing to reset the <a href="http://thoughtbot.github.io/neat-docs/latest/#omega">omega properties applied by Neat</a>:</p>
    <pre>
    <code>
    .grid-item {
       @include span-columns(2 of 4);
       @include omega(2n);

       @include media($desktop) {
         @include omega-reset(2n);
         @include span-columns(4 of 12);
         @include omega(3n);
       }
    }</code>
    </pre>
    <h4>Debugging</h4>
    <p>Turn on the visual grid to help debugging:</p>
    <pre>
    <code>$visual-grid: true;</code>
    </pre>
    <p>See the example <a href="http://neat.bourbon.io/examples/" rel="external">Bourbon Neat working grid layout</a>.</p>
  </div>
</details>
