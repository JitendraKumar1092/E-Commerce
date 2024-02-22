const extractProductDetails = (inputString) => {
    const categories = ["shirt", "pant", "sundress", "shorts" , "sunglasses", "swimsuit"];
    const sizes = ["M", "S", "XL", "L" , "XXL" , "XXXL" ,"One"];
    const colors = ["blue", "red", "green", "black", "white" , "yellow" , "pink" , "purple" , "orange" , "brown" , "grey" , "silver" , "gold" , "multi" , "beige" , "navy" , "khaki" , "olive" , "burgundy" , "turquoise" , "teal" , "coral" , "lavender" , "mint" , "peach" , "taupe" , "tan" , "maroon" , "mustard" , "rust" , "cream" , "charcoal" , "rose" , "champagne" , "copper" , "bronze" , "ivory" , "magenta" , "indigo" , "periwinkle" , "lilac" , "fuchsia" , "plum" , "mauve" , "salmon" , "olive" , "khaki" , "beige" , "navy" , "burgundy" , "turquoise" , "teal" , "coral" , "lavender" , "mint" , "peach" , "taupe" , "tan" , "maroon" , "mustard" , "rust" , "cream" , "charcoal" , "rose" , "champagne" , "copper" , "bronze" , "ivory" , "magenta" , "indigo" , "periwinkle" , "lilac" , "fuchsia" , "plum" , "mauve" , "salmon" , "olive" , "khaki" , "beige" , "navy" , "burgundy" , "turquoise" , "teal" , "coral" , "lavender" , "mint" , "peach" , "taupe" , "tan" , "maroon" , "mustard" , "rust" , "cream" , "charcoal" , "rose" , "champagne" , "copper" , "bronze" , "ivory" , "magenta" , "indigo" , "periwinkle" , "lilac" , "fuchsia" , "plum" , "mauve" , "salmon" , "olive" ] ;

    let category = null;
    let size = null;
    let color = null;


    // Search for categories
    // i want to split it on white space

    for (const word of inputString.split(" ")) {
        if (categories.includes(word.toLowerCase())) {
            category = word.toLowerCase();
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
        if (colors.includes(word.toLowerCase())) {
            color = word.toLowerCase();
            break;
        }
    }

    return { category, size, color };
};

export default extractProductDetails;
