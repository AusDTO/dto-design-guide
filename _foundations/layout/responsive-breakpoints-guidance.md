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


  </div>
</details>
