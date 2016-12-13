### Dependencies

- `Ruby ^2.3.1`
- `Node.js >=v6.0.0`

Install dependencies:

{% highlight shell %}
npm install
{% endhighlight %}

We use Bourbon `4.2.7`. We include its `.scss` files directly rather than calling it via its node (or gem) package.

Bourbon and Neat are in `/assets/sass/vendor`.

### Using npm

Run a build:

{% highlight shell %}
npm run-script build
{% endhighlight %}

Run a build with live reloading:

{% highlight shell %}
npm start
{% endhighlight %}

### Key libraries

- `gulp ^3.9.1`
- `gulp-sass ^2.3.1`
- `kss ^3.0.0-beta.14`
- `sass-lint ^1.7.0`

The build also uses:
- `sass-lint` for linting
- `cssnano` for CSS compression
- `autoprefixer` for adding CSS vendor prefixes
- `AusDTO/gulp-html` for HTML validation.

The CI (continuous integration) script is available as a shell script at `bin/cibuild.sh`.
