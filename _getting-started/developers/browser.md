UI-Kit needs to support all of our users, regardless of their device, web browser or other user agent.

Equal access to information about laws and government programs is a legal requirement under the <a href="https://www.legislation.gov.au/Latest/C2016C00763" rel="external">Disability Discrimination Act (1992)</a>.

Definitions of our support levels are in the
<a href="https://github.com/AusDTO/gov-au-ui-kit/blob/develop/BROWSER-SUPPORT.md" rel="external">UI-Kit Browser Support document</a>.

### Mobile browser support

<table class="content-table"><thead>
<tr>
<th>Browser</th>
<th>Platforms</th>
<th>Minimum version</th>
<th>Advanced support status</th>
</tr>
</thead><tbody>
<tr>
<td>Chrome</td>
<td>Android, iOS</td>
<td>21</td>
<td>Tested (Android only)</td>
</tr>
<tr>
<td>Firefox</td>
<td>Android, iOS</td>
<td>28</td>
<td>Untested</td>
</tr>
<tr>
<td>Safari</td>
<td>iOS</td>
<td>3.2</td>
<td>Untested</td>
</tr>
<tr>
<td>Android browser</td>
<td>Android</td>
<td>2.1</td>
<td>Untested</td>
</tr>
<tr>
<td>IE</td>
<td>Windows Mobile</td>
<td>10</td>
<td>Untested</td>
</tr>
</tbody></table>

Minimum version based on <a href="http://caniuse.com/#feat=flexbox" rel="external">support for CSS Flexible Box layout modules</a>.

### Desktop browser support

<table class="content-table"><thead>
<tr>
<th>Browser</th>
<th>Platforms</th>
<th>Advanced support status</th>
</tr>
</thead><tbody>
<tr>
<td>Chrome</td>
<td>Windows, OS X</td>
<td>Tested</td>
</tr>
<tr>
<td>Firefox</td>
<td>Windows, OS X</td>
<td>Tested</td>
</tr>
<tr>
<td>Safari</td>
<td>OS X</td>
<td>Tested</td>
</tr>
<tr>
<td>Opera</td>
<td>Windows, OS X</td>
<td>Untested</td>
</tr>
<tr>
<td>Yandex</td>
<td>Windows, OS X</td>
<td>Untested</td>
</tr>
<tr>
<td>Edge</td>
<td>Windows</td>
<td>Tested</td>
</tr>
<tr>
<td>IE 10 &amp; newer</td>
<td>Windows</td>
<td>Tested</td>
</tr>
<tr>
<td>IE 9 &amp; older</td>
<td>Windows</td>
<td>Tested — functional support only</td>
</tr>
</tbody></table>

All browsers listed are latest stable release, except Internet Explorer.

### Working to support all browsers

We don’t list unsupported devices and browsers.

We are aiming for a solid HTML mobile-first foundation that provides functional support for the browsers and devices of all of our users.

### Conditional handling of Internet Explorer 6 & 8

We have written a <a href="https://github.com/AusDTO/gov-au-ui-kit/blob/develop/assets/sass/utils/_mixins.scss#L2" rel="external">SASS mixin for conditional handling of Internet Explorer specific overrides</a>. Use this when extending the UI-Kit.
