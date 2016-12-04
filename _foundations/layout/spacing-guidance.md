<details open data-label="spacing-guidance-accordion" aria-expanded="false">
  <summary>Guidance <span class="visuallyhidden">for spacing</span></summary>
  <div class="accordion-panel">
  <h4>Spacing variables</h4>

  <p>Grid unit proportions, gutters and spacing are defined in <code>_grid-settings.scss</code>:</p>
  <pre><code>$max-width: em(1200) !global;
  $gutter: em(32);</code></pre>

  These breakpoints are set to <code>max-width</code>:
  <ul>
  <li><code>$mobile-only</code></li>
  <li><code>$tablet-only</code></li>
  </ul>

  <p>Gutter spacing is set using <code>$gutter</code>.</p>

  <h4>Page layout elements</h4>

  <ul>
  <li><code>header[role=&#39;banner&#39;]</code></li>
  <li><code>footer[role=&#39;contentinfo&#39;]</code></li>
  <li><code>main.content-main</code></li>
  <li><code>aside</code>.</li>
  </ul>

  <h4>Wrapper class</h4>

  <p>You can use
  <code>&lt;div class=&quot;wrapper&quot;&gt;</code> to wrap the contents of a block in the grid in the full viewport width.</p>

  <p>For example, the page header, footer and breadcrumbs.</p>

  <h4>Create elements</h4>

  <p>Before you build your own element, <a href="https://github.com/AusDTO/gov-au-ui-kit/issues" rel="external">log a GitHub issue</a> so we can provide it for everyone.</p>

  <p>There are no non-semantic grid classes to set block elements. Instead use the <a href="http://thoughtbot.github.io/neat-docs/latest/#span-columns" rel="external">Neat <code>span-columns</code> function</a>.</p>

  <p>Set column properties for the <code>$mobile</code>, <code>$tablet</code> and <code>$desktop</code> breakpoints. Make sure you consider font size at the different breakpoints.</p>

  <p>Set the <code>viewport</code> to the <code>device-width</code> in your <code>&lt;head&gt;</code>:</p>

  <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>

  <h4>Omega reset</h4>

  <p>You may need to reset <a href="http://thoughtbot.github.io/neat-docs/latest/#omega">Neat's omega properties</a> to apply grid columns to responsive layouts:</p>
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

<details open data-label="sidebar-accessibility-accordion" aria-expanded="false">
  <summary>Accessibility <span class="visuallyhidden">guidance for sidebar</span></summary>
  <div class="accordion-panel">
    <p>Low-vision users should be able to increase the size of the text by up to 200 per cent without breaking the layout.</p>
  </div>
</details>
