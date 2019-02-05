let items = [
    {color: 'red', type: 'tv', age: 18},
    {color: 'silver', type: 'phone', age: 20}

]

let  excludes = [
    {k: 'color', v: 'silver'},
    {k: 'type', v: 'tv'},
]
f
function excludeItems(items, excludes) {
    let items_new = []
    excludes.forEach(pair => {
        items_new = items.filter(item => item[pair.k] === pair.v);
    });
    return items_new;
}

// now shoould I output excluded items??

function excludeExcludedItems(items, exludes) {
    let excluded_items = []
    excluded_items = items.filter(function(item) {
        return excludes.some(function(pair){
            return  item[pair.k] === pair.v;
        })
    })
    return excluded_items;

}




// now should I output remainung elements in the item?


function excludeRemianingItems(items, exludes) {
    let remaining_items = []
    remaining_items = items.filter(function(item) {
        return excludes.every(function(pair){
            return  item[pair.k] !== pair.v;
        })
    })
    return remaining_items;

}
console.log(excludeItems(items,excludes));

console.log(excludeExcludedItems(items,excludes));
console.log(excludeRemianingItems(items,excludes));