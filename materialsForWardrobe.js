

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


// Function that accepts parameters
    // This function allows you to pass in parameters when you call it
    const woodForWardrobes = () => {
        let materials = [
            {
                "material": "birch plywood",
                "price": 15,
                "quantity": 50,
            },
            {
                "material": "hex screws",
                "price": 25,
                "quantity": 200,
            }
        ];
        return materials;
    }
    const materials1 = woodForWardrobes();
    console.log(materials1[1].material, materials1[1].price, materials1[1].quantity)
    module.exports = materialsForWardrobe;