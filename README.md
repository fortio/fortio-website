# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Local Development

Install deps
```
npm ci
```

Start local dev server
```
npm start
```

### Deployment

Main branch uses `.github/workflows/deploy.yml` which then builds the website and pushes this into the [gh-pages](https://github.com/fortio/fortio-website/tree/gh-pages) branch. This branch is then used by Github to publish on https://fortio.github.io/fortio-website/


### General tips/info

As you can see in `blog` - you can either use a single page or a folder. A folder is recommended when you want to use images and therefore can reference that 'directly' via that folder.

Versioning is also possible: https://docusaurus.io/docs/versioning but this does add quite some 'overhead' in the logic and might not worth the troubles (at this point).

In general, all information about this setup/features can be found here: https://docusaurus.io/docs
