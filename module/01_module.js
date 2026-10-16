const kiranaStore = (function () {
  let itemCount = 0;
  const godown = [];

  return {
    add(name) {
      itemCount++;
      godown.push(name);
      return `Shah Rukh kirana stocked: ${name}`;
    },
    count() {
      return itemCount;
    },
    list() {
      return godown.slice();
    },
  };
})();

console.log(kiranaStore.add("Tea 10 packs"));
console.log(kiranaStore.add("ginger 10kgs"));
console.log("Count:", kiranaStore.count());
console.log("List:", kiranaStore.list());

console.log("Direct godwon ?:", typeof kiranaStore.godown);
console.log("Direct godwon ?:", typeof kiranaStore.itemCount)

(() => {})();
(function () {})();
