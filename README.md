# SCEditor Paste Handler Plugin

## Initialize

To enable the paste handler plugin add `pastehandler` to the plugins option. e.g.

```
<script>
sceditor.create(textarea, {
    plugins: 'pastehandler',
    style: 'minified/themes/content/default.min.css'
});
</script>
```

That’s it! Now you can handle paste events.

## Options

To specify pastehandler options add a `pastehandler` property to the options object with the desired options, e.g.:

```
<script>
sceditor.create(textarea, {
    plugins: 'pastehandler',
    style: 'minified/themes/content/default.min.css',
    pastehandler: {
        callback: function (data) {
            ...
        },
    }
});
</script>
```

Plugin calls the `callback` function when pasted into a WYSIWYG editor. The callback function should return the converted HTML. e.g.

```
<script>
sceditor.create(textarea, {
    plugins: 'pastehandler',
    style: 'minified/themes/content/default.min.css',
    pastehandler: {
        callback: function (data) {
            // remove bold tags
            return data.replace(/</?b>/g, '');
        },
    }
});
</script>
```
