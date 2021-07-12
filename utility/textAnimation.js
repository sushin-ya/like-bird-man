export function textAnimation(tl, content, page) {
  const set = [
    ...new Set(
      content.split('').filter(function (value) {
        return value !== ' ' && value !== '.' && value !== ',' && value !== "'";
      })
    ),
  ].sort();
  let index = 0;
  for (let s of set) {
    const tmp = String(s).toLowerCase();
    tl.fromTo(
      `.${page}-${tmp}`,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 - (index / set.length) * 0.5 }
    );
    index++;
  }
}
