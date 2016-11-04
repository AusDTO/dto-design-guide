Use the <a href="https://www.google.com/fonts/specimen/Open+Sans" rel="external">Open Sans family</a> in regular 400, regular 400 italic or bold 700.

<div class="guide-example--type"><h3>Open Sans regular 400</h3>
  <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
  abcdefghijklmnopqrstuvwxyz<br />
  1234567890(!@#s%g.,?:;)</p>
</div>
<div class="guide-example--type"><h3>Open Sans regular 400 italic</h3>
  <p><em>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
  abcdefghijklmnopqrstuvwxyz<br />
  1234567890(!@#s%g.,?:;)</em></p>
</div>
<div class="guide-example--type"><h3>Open Sans bold 700</h3>
  <p><strong class="very-bold">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
  abcdefghijklmnopqrstuvwxyz<br />
  1234567890(!@#s%g.,?:;)</strong></p>
</div>

### Guidance

#### Font stacks

```
$base-serif: 'Book Antiqua', Georgia, 'Bitstream Vera Serif', serif;
$base-sans-serif: 'Open Sans', Verdana, 'Bitstream Vera Sans', sans-serif;
$base-monospace: 'Lucida Sans Typewriter', 'Lucida Console', Monaco, 'Bitstream Vera Sans Mono', monospace;
```

The font stacks should achieve roughly 95% coverage across a range of browsers and operating systems.

Load webfonts through the <a href="https://github.com/typekit/webfontloader" rel="external">Google Web Font Loader</a> via `<script>` to add Open Sans via the HTML `head`. This supports modern browsers and older versions of Internet Explorer.

#### Spacing

The framework sets spacing variables in ems relative to the base font's leading. This ensures horizontal and vertical rhythm through pages.

<p class="callout">Spacing will change in relation to the font size of the elements that use them. So don’t apply a <code>font-size</code> to a container element (eg a <code>footer</code>).</p>

The base font's leading (`line-height`) is set using the variable `$base-leading` (`$base-leading: 1.6`).

`$base-leading` is used to calculate 5 spacing values in ems:

- `$base-spacing: $base-leading * 1em`
- `$large-spacing: $base-spacing * 2`
- `$medium-spacing: $base-spacing * 0.75`
- `$small-spacing: $base-spacing / 2`
- `$tiny-spacing: $base-spacing / 4`.

We may change:

- `$base-spacing` to a figure that is easier to multiply and divide
- to using rems instead of ems, for consistency in calculations (in preference to relational proportionality in sizing).

### Accessibility

- Use just 1 sans-serif font (Open Sans).
- Make line length less than 75 characters. Use grid boxes to limit length.
- Set `line-height` (leading) to at least 1.5 ([UI KIT uses 1.6](#guide-typography-3-spacing)).
- <a href="http://content-style-guide.apps.staging.digital.gov.au/writing-for-the-web/3-structure-your-page-for-readability.html" rel="external">Write short sentences</a>. Aim for less than 25 words.
- Use sentence case for most content. For example &lsquo;Sign up&rsquo; or &lsquo;Log out&rsquo; buttons.
- Use <a href="http://content-style-guide.apps.staging.digital.gov.au/az-indexes/t.html#titles" rel="external">title case for titles</a> like Department of Communications and the Arts.
- Don't write in all *italics* or CAPITALS.
- Avoid using **bold**. Bolding a word can help scannability. **But blocks of bold text are hard to read**.
