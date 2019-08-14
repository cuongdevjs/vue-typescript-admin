export default {
  each(items: any, eachFn: any) {
    if (!items) return;

    for (var index = 0; index < items.length; index++)
      eachFn(items[index], index);
  },

  find(items: any, eachFn: any) {
    if (!items) return null;

    for (var index = 0; index < items.length; index++)
      if (eachFn(items[index], index)) return items[index];

    return null;
  },

  //đừng dùng hàm này nữa, dùng hàm indexOf nhé;
  index(items: any, item: any, compareFn: any) {
    if (!items) return -1;

    for (var index = 0; index < items.length; index++)
      if (compareFn(items[index], item)) return index;

    return -1;
  },

  indexOf(items: any, compareFn: any) {
    if (!items) return -1;

    for (var index = 0; index < items.length; index++)
      if (compareFn(items[index], index)) return index;

    return -1;
  },

  findAll(items: any, eachFn: any) {
    if (!items) return null;

    var arr = [];

    for (var index = 0; index < items.length; index++)
      if (eachFn(items[index], index)) arr.push(items[index]);

    return arr;
  },

  collect(items: any, eachFn: any) {
    if (!items) return null;

    var arr = [];

    for (var index = 0; index < items.length; index++)
      arr.push(eachFn(items[index], index));

    return arr;
  },

  sum(items: any, eachFn: any) {
    if (!items) return 0;

    var sum = 0;

    for (var index = 0; index < items.length; index++)
      sum += eachFn(items[index], index);

    return sum;
  },

  group(items: any, groupByFn: any, groupLabel: any) {
    !groupLabel && (groupLabel = groupByFn);

    let groupKeys: any = [];
    let groups: any = [];

    this.each(items, (item: any) => {
      let groupKey = groupByFn(item);
      let index = groupKeys.indexOf(groupKey);
      if (index == -1) {
        groupKeys.push(groupKey);
        groups.push({ groupKey: groupLabel(item), items: [item] });
      } else {
        groups[index].items.push(item);
      }
    });

    return groups;
  }
};
