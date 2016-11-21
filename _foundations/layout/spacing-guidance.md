<details open data-label="spacing-guidance-accordion" aria-expanded="false">
  <summary>Guidance <span class="visuallyhidden">for spacing</span></summary>
  <div class="accordion-panel">
    <p>Avoid mixing this layout with other grid layouts.</p>
    <h4>Grid classes?</h4>
    <p>There are no non-semantic grid classes with which to set block elements. This is intentional. If you need to add to or customise the grid system see below.</p>
    <p>The grid unit proportions, gutters and spacing are defined in <code>_grid-settings.scss</code>.</p>
    <pre><code>$max-width: em(1200) !global;
    $gutter: em(32);</code></pre>
    <p>We define the grid placement for the following page layout elements:</p>
    <ul>
    <li><code>header[role=&#39;banner&#39;]</code> and <code>footer[role=&#39;contentinfo&#39;]</code></li>
    <li><code>main.content-main</code></li>
    <li><code>aside</code>.</li>
    </ul>
    <p>If you need an element not defined here you are probably not the only one &mdash; please <a href="https://github.com/AusDTO/gov-au-ui-kit/issues" rel="external">log a GitHub issue</a> so we can provide it for everyone.</p>
    <p>To create your own element you will need to use the <a href="http://thoughtbot.github.io/neat-docs/latest/#span-columns" rel="external">Neat <code>span-columns</code> function</a>.</p>
    <p>For each new element you will need to set column properties for the breakpoints, from smallest to largest:</p>
    <ol>
    <li><code>$mobile</code></li>
    <li><code>$tablet</code></li>
    <li><code>$desktop</code></li>
    </ol>
    <p>For iOS users ensure you set the <code>viewport</code> to the <code>device-width</code> in your <code>&lt;head&gt;</code> to ensure your site is responsive:</p>
    <pre><code><meta name="viewport" content="width=device-width, initial-scale=1.0"></code></pre>
    <h4>Wrapper class</h4>
    <p>There is a wrapper class (<code>&lt;div class=&quot;wrapper&quot;&gt;</code>) for wrapping the contents of a block within the grid, while allowing its outer container to run the full viewport width.</p>
    <p>This is currently used for the page <code>header</code> and <code>footer</code>, and also for the <a href="section-navigation.html#kssref-navigation-2-breadcrumbs">breadcrumbs</a>.
    layout.</p>
    layout</a>.</p>
  </div>
</details>
