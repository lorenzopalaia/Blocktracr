function formatPrice(num) {
  if (num >= 1.0e9) {
    return (num / 1.0e9).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (num >= 1.0e6) {
    return (num / 1.0e6).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1.0e3) {
    return (num / 1.0e3).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num;
}

function firstSentence(desc) {
  const sentences = desc.match(/(.*?(?:\.|\?|!))(?: |$)/g);
  const sentence = sentences[0].replace(/<a /g, `<a class="text-primary" `);
  return sentence;
}

export { formatPrice, firstSentence };