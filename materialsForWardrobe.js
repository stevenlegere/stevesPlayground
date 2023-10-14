

const materialsForWardrobe = () => {
    let materials = [
        {
            "material": "plywood",
            "price": 10,
            "quantity": 5,
        },
        {
            "material": "screws",
            "price": 15,
            "quantity": 200,
        },
        {
            "material": "oil",
            "price": 25,
            "quantity": 1,
        },
    ]
    return materials;
}
const resultOfMaterials = materialsForWardrobe();
console.log(resultOfMaterials[0].material, resultOfMaterials[0].price, resultOfMaterials[0].quantity);

module.exports = materialsForWardrobe;