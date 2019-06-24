export const selectProducts = (products, { text, sortBy }) => {
    return products.filter(product => {
        const textMatch = product.ProductName.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    })
    // .sort((a, b) => {
    //     if (sortBy === 'name') {
    //         return a.title < b.title ? -1 : 1
    //     } else if (sortBy === 'price') {
    //         return a.price > b.price ? 1 : -1
    //     }
    // });
}


