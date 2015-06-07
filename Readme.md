
# on-full-screen

Cross-browser wrapper for the `onfullscreen` event.

## How to use

```js
import ofs from 'on-full-screen';
import isFs from 'is-full-screen';
const dispose = ofs(() => {
  if (isFs()) {
    console.log('we are fullscreened');
  }
});
setTimeout(dispose, 1000)
```

## License

MIT
