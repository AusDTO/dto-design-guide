Use the <a href="https://www.google.com/fonts/specimen/Open+Sans" rel="external">Open Sans font</a> family.

<div class="guide-example--type"><h3>New South Wales</h3>
<p>Surry Hills Newtown Waterloo Marrickville Bondi Redfern</p>
<h3>23,130,000 Australians</h3>
<p><strong class="very-bold">Woden Valley Belconnen Weston Creek Tuggeranong Gungahlin</strong></p>
<h3><em>Accessible to all</em></h3>
<p><em>Wanneroo Armadale Balcatta Booragoon</em></p>
</div>

### Webfonts

Load webfonts through the <a href="https://github.com/typekit/webfontloader" rel="external">Google Web Font Loader</a> via `<script>`. Use this to add Open Sans in the HTML `head`.

### Breakpoints

- Mobile (extra small devices): 8 columns, 420px maximum.
- Tablet (small devices): 12 columns, 768px maximum.
- Desktop (medium devices): 16 columns, 1200px maximum.

### Global font sizes

<table class="content-table">
  <tr>
    <th>Style</th>
    <th>Mobile (default)</th>
    <th>Tablet</th>
    <th>Desktop</th>
  </tr>
  <tr>
    <td>h1 (bolded)</td>
    <td><h1>24px</h1></td>
    <td><h1>26px</h1></td>
    <td><h1>32px</h1></td>
  </tr>
  <tr>
    <td>h2</td>
    <td><h2>32px</h2></td>
    <td><h2>44px</h2></td>
    <td><h2>44px</h2></td>
  </tr>
  <tr>
    <td>h3 (bolded)</td>
    <td><h3>24px</h3></td>
    <td><h3>26px</h3></td>
    <td><h3>26px</h3></td>
  </tr>
  <tr>
    <td>h4, h5, h6 (all bolded)</td>
    <td><h4>18px</h4></td>
    <td><h4>18px</h4></td>
    <td><h4>18px</h4></td>
  </tr>
  <tr>
    <td>p, ol, ul, dt, dd, dl</td>
    <td>17px</td>
    <td>17px</td>
    <td>17px</td>
  </tr>
</table>

### `.gov-speak` font sizes

Use `.gov-speak` styles for complex content, for example annual reports.

<table class="content-table">
  <tr>
    <th>Style</th>
    <th>Mobile (default)</th>
    <th>Tablet</th>
    <th>Desktop</th>
  </tr>
  <tr>
    <td>h1</td>
    <td><h1>32px</h1></td>
    <td><h1>44px</h1></td>
    <td><h1>40px</h1></td>
  </tr>
  <tr>
    <td>h2</td>
    <td><h2>28px</h2></td>
    <td><h2>32px</h2></td>
    <td><h2>32px</h2></td>
  </tr>
  <tr>
    <td>h3</td>
    <td><h3>24px</h3></td>
    <td><h3>26px</h3></td>
    <td><h3>26px</h3></td>
  </tr>
  <tr>
    <td>h4</td>
    <td><h4>19px</h4></td>
    <td><h4>22px</h4></td>
    <td><h4>22px</h4></td>
  </tr>
  <tr>
    <td>h5</td>
    <td><h5>16px</h5></td>
    <td><h5>16px</h5></td>
    <td><h5>16px</h5></td>
  </tr>
  <tr>
    <td>h6</td>
    <td><h6>16px</h6></td>
    <td><h6>16px</h6></td>
    <td><h6>16px</h6></td>
  </tr>
  <tr>
    <td>p, ol, ul, dt, dd, dl</td>
    <td>17px</td>
    <td>17px</td>
    <td>17px</td>
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
