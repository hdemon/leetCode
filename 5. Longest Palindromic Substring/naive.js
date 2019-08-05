const lps = text => {
  const l = text.length;
  const ps = [];
  for (let i = 0; i <= l; i++) {
    for (let j = 0; j <= l; j++) {
      //   console.log(text.slice(i, j));
      const snipet = text.slice(i, j);
      if (snipet.length && isP(snipet)) {
        ps.push(snipet);
      }
    }
  }
  console.log(ps);
  //   ps = ["aaa", "a"];
  return ps.reduce((a, b) => (a.length > b.length ? a : b));
};

const isP = text => {
  return (
    text ===
    Array.from(text)
      .reverse()
      .join("")
  );
};

// console.log(lps("abbba"));
