const extractProductDetails = (inputString) => {
    const brands = [
        "ABC Denim",
        "Tommy Hilfiger",
        "Roadster",
        "Ralph Lauren",
        "Manyavar",
        "Quiksilver",
        "Scala",
        "Prada",
        "Guess",
        "Arrow",
        "Fruit of the Loom"
    ]; 
    const categories = ["Shirt", "Pants", "Tshirt","Jacket", "Jeans","Tanktop" , "Watch","Kurta", "Shorts" , "Sunglasses", "Swimsuit" ,"Hat"];
    const sizes = ["M", "S", "XL", "L" , "XXL" , "XXXL" ,"One"];
    const colors = ["Blue", "Red", "Green", "Black", "White" , "Yellow" , "Pink" , "Purple" , "Orange" , "Brown" , "Grey" , "Silver" , "Gold" , "multi" ,  "Khaki" ,  "Olive" ];

    let brand = null;
    let category = null;
    let size = null;
    let color = null;

    // Search for brands
    for (const brandName of brands) {
        if (inputString.toLowerCase().includes(brandName.toLowerCase())) {
            brand = brandName;
            break;
        }
    }

    // Search for categories
    for (const word of inputString.split(" ")) {
        if (categories.includes(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())) {
            category = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            break;
        }
    }

    // Search for sizes
    for (const word of inputString.split(" ")) {
        if (sizes.includes(word.toUpperCase())) {
            size = word.toUpperCase();
            break;
        }
    }

    // Search for colors
    for (const word of inputString.split(" ")) {
        if (colors.includes(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())) {
            color = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            break;
        }
    }

    return {brand, category, size, color}
};

export default extractProductDetails;
