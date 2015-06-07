let evs = [
  'webkitfullscreenchange',
  'mozfullscreenchange',
  'fullscreenchange',
  'MSFullscreenChange'
];

export default function fullScreenChange(fn){
  evs.forEach(e => document.addEventListener(e, fn, false));
  return () => {
    evs.forEach(e2 => document.removeEventListener(e2, fn, false));
  };
}
