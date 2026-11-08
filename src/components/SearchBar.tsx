import {Plus, Search} from "lucide-react";
import type {CategoryFilter} from "../types/product.ts";

type SearchBarProps = {
    searchText: string,
    onSearchTextChange: (value: string) => void;
    selectedCategory: CategoryFilter;
    onCategoryChange: (value: CategoryFilter) => void;
    inStockOnly: boolean;
    onInStockOnlyChange: (value: boolean) => void;
    onAddClick: () => void;
};

const SearchBar = ({searchText, onSearchTextChange, selectedCategory, onCategoryChange ,
                       inStockOnly , onInStockOnlyChange , onAddClick}: SearchBarProps) => {
    return (
        <div className="mb-4 flex flex-col gap-2.5 md:flex-row">

            <label className="relative flex-1">
                <span className="sr-only">Search product</span>
                <Search size={16} aria-hidden="true"
                        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-slate-500"
                ></Search>
                <input type="search"
                       value={searchText}
                       onChange={(e) => onSearchTextChange(e.target.value)}
                       placeholder="Search products..."
                       className="h-10 w-full rounded-[10px] border border-slate-200 bg-white pr-3 pl-9 text-sm
                       placeholder:text-slate-500 focus:outline-2 focus:outline-slate-700"
                />
            </label>

            <select value={selectedCategory}
                    onChange={(e) => onCategoryChange(e.target.value as CategoryFilter)}
                    aria-label="Filter by category"
                    className="h-10 cursor-pointer rounded-[10px] border border-slate-200 bg-white px-3 text-sm focus:outline-2 focus:outline-slate-700"

            >
                <option value="All">All categories</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
            </select>

            <label className="flex h-10 cursor-pointer items-center gap-2 rounded-[10px] border border-slate-200 bg-white px-3 text-sm">
                <input type="checkbox"
                       checked={inStockOnly}
                       onChange={(e)=> onInStockOnlyChange(e.target.checked)}
                       className="size-4 accent-emerald-700"

                />
                In stock only
            </label>

            <button type="button"
                    onClick={onAddClick}
                    className="inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-[10px] bg-emerald-700 px-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
                <Plus size={16} aria-hidden="true"/>
                Add product
            </button>
        </div>
    );
};

export default SearchBar;