Use the <a href="https://www.google.com/fonts/specimen/Open+Sans" rel="external">Open Sans font</a> family.

<h3>Open Sans regular 400</h3>
<div class="guide-example--type">
  <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
  abcdefghijklmnopqrstuvwxyz<br />
  1234567890(!@#s%g.,?:;)</p>
</div>

<h3>Open Sans regular 400 italic</h3>
<div class="guide-example--type">
  <p><em>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
  abcdefghijklmnopqrstuvwxyz<br />
  1234567890(!@#s%g.,?:;)</em></p>
</div>

<h3>Open Sans bold 700</h3>
<div class="guide-example--type">
  <p><strong class="very-bold">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
  abcdefghijklmnopqrstuvwxyz<br />
  1234567890(!@#s%g.,?:;)</strong></p>
</div>

### Webfonts

Load webfonts through the <a href="https://github.com/typekit/webfontloader" rel="external">Google Web Font Loader</a> via `<script>`. Use this to add Open Sans in the HTML `head`.

### Breakpoints

- Mobile (extra small devices): 8 columns, 420px maximum.
- Tablet (small devices): 12 columns, 768px maximum.
- Desktop (medium devices): 16 columns, 1200px maximum.

Use `.gov-speak` styles for complex content, for example annual reports.

### Font size defaults

<table class="content-table">
  <caption>Global styles</caption>
  <tr>
    <th>Style</th>
    <th>Mobile (default)</th>
    <th>Tablet</th>
    <th>Desktop</th>
  </tr>
  <tr>
    <td>p, ol, ul, dt, dd, dl</td>
    <td>17px</td>
    <td>17px</td>
    <td>17px</td>
  </tr>
  <tr>
    <td>h1</td>
    <td>24px</td>
    <td>26px<br></td>
    <td>32px</td>
  </tr>
  <tr>
    <td>h2</td>
    <td>32px</td>
    <td>44px</td>
    <td>44px</td>
  </tr>
  <tr>
    <td>h3</td>
    <td>24px</td>
    <td>26px</td>
    <td>26px</td>
  </tr>
  <tr>
    <td>h4, h5, h6</td>
    <td>18px</td>
    <td>18px</td>
    <td>18px</td>
  </tr>
</table>

<table class="content-table">
  <caption><code>.gov-speak</code> style</caption>
  <tr>
    <th>Style</th>
    <th>Mobile (default)</th>
    <th>Tablet</th>
    <th>Desktop</th>
  </tr>
  <tr>
    <td>p, ol, ul, dt, dd, dl</td>
    <td>17px</td>
    <td>17px</td>
    <td>17px</td>
  </tr>
  <tr>
    <td>h1</td>
    <td>32px</td>
    <td>44px<br></td>
    <td>40px</td>
  </tr>
  <tr>
    <td>h2</td>
    <td>28px</td>
    <td>32px</td>
    <td>32px</td>
  </tr>
  <tr>
    <td>h3</td>
    <td>24px</td>
    <td>26px</td>
    <td>26px</td>
  </tr>
  <tr>
    <td>h4</td>
    <td>19px</td>
    <td>22px</td>
    <td>22px</td>
  </tr>
  <tr>
    <td>h5</td>
    <td>16px</td>
    <td>16px</td>
    <td>16px</td>
  </tr>
  <tr>
    <td>h6</td>
    <td>16px</td>
    <td>16px</td>
    <td>16px</td>
  </tr>
</table>

### Usability

- UI-Kit applies a maximum width of 38 rem (about 70 characters) to typographic elements in the main content container (`h1`-`h5`, `p`, `li` and `dl`). This gives a <a href="https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/#line-length-measure-and-reading" rel="external">readable line length</a>.
- To use an element that spans across the maximum available space, use the class `.content-full-width`.
- Set `line-height` (leading) to at least 1.5 (UI-Kit uses 1.6).
- Don’t apply a <code>font-size</code> to a container element (for example, a <code>footer</code>).
- Use the <a href="http://w3c.github.io/html/textlevel-semantics.html#the-kbd-element">kbd element</a> to show users which key to press.

### Accessibility

- Use just 1 sans-serif font (Open Sans).
- <a href="http://content-style-guide.apps.staging.digital.gov.au/writing-for-the-web/3-structure-your-page-for-readability.html" rel="external">Write short sentences</a>. Aim for less than 25 words.
- Use sentence case for most content. For example &lsquo;Sign in&rsquo; button.
- Use <a href="http://content-style-guide.apps.staging.digital.gov.au/az-indexes/t.html#titles" rel="external">title case for titles</a> like Department of Communications and the Arts.
- Don't write in all *italics* or CAPITALS.
- Avoid using **bold**. Bolding a word can help scannability. **But blocks of bold text are hard to read**.
