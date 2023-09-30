# Nuxt 3 ipx webp error

Install the dependencies by running

```sh
$ npm ci
```

Generate the images by running

```sh
npm run generate
```

Check folder `.output/public/_ipx` for converted images.

### Problem
The image has a `jpg` extions in the filename but is converted to a `webp` image.

### Solution
The image should have a `webp` extions in the filename