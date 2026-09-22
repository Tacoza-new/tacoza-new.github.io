# Original images

Full-resolution originals of everything in `public/images`, kept from
before the compression pass (commit `83ab885`, which took the set from
15.1 MB to 2.9 MB).

Keep them here when you need to re-crop, re-export at a different size,
or recompress at a different quality — compressing an already-compressed
JPEG loses more each time, so always start again from these.

**This folder is deliberately outside `public/`.** Anything under
`public/` is served to visitors and would be included in a static
export, which would undo the compression work and eat into GitHub
Pages' 100 GB/month bandwidth.

## Recompressing

`sharp` is already a dependency. The pass that produced the current set
resized anything wider than 1920px and re-encoded:

- JPEG: `quality: 82, mozjpeg: true`
- PNG: `compressionLevel: 9, palette: true, quality: 82, effort: 8`
