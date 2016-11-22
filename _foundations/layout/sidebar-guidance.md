<details open data-label="sidebar-guidance-accordion" aria-expanded="false">
  <summary>Guidance <span class="visuallyhidden">for sidebar</span></summary>
  <div class="accordion-panel">
    <p>By default the sidebar sits to the right of the main content. When the sidebar contains content controls (eg filters), instead of navigation, it can sit on the left side. Use the class <code>.sidebar-has-controls</code> on the parent <code>main</code> element:</p>

    <pre>
    <code><main class="sidebar-has-controls">
      <aside class="sidebar">
      ...
      </aside>
      <article role="main" id="content" class="content-main">
      ...
      </article>
    </main></code>
    </pre>

    <h4>Header & footer</h4>

    <p>The site header and footer are targeted by their ARIA roles, not a <code>class</code> or <code>id</code>. Use <code>banner</code> and <code>contentinfo</code> roles, respectively.</p>
  </div>
</details>

<details open data-label="sidebar-accessibility-accordion" aria-expanded="false">
  <summary>Accessibility <span class="visuallyhidden">guidance for sidebar</span></summary>
  <div class="accordion-panel">
    <p>Low-vision users should be able to increase the size of the text by up to 200 per cent without breaking the layout.</p>
  </div>
</details>
