import type {Category} from "../types/product.ts";


type CategoryBadgeProps = {
    category: Category;
};


const CategoryBadge = ({category}:CategoryBadgeProps) => {
    return (
        <span className={`inline-block rounded-full px-2.5 py-0.5 text-sm font-medium
         ${category === "Fruits" ? "bg-amber-100 text-amber-800" 
            : "bg-emerald-100 text-emerald-800"}`}>
            {category}
        </span>
    );
};

export default CategoryBadge;