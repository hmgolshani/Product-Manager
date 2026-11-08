import {Package} from "lucide-react";

const Header = () => {
    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-7">
                <div className="flex items-center gap-2.5 text-lg font-bold">
          <span className="grid size-8 place-items-center rounded-lg bg-slate-700 text-white">
            <Package size={18} aria-hidden="true"/>
          </span>
                    Product Manager
                </div>
                <span
                    className="hidden rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 sm:inline">
          React · useState · useEffect
        </span>
            </div>
        </header>
    );
};

export default Header;
