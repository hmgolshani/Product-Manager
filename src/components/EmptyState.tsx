import {SearchX} from "lucide-react";
type EmptyStateProps = {
    message : string;
}

const EmptyState = ({message}:EmptyStateProps) => {
    return (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-12 text-center">
            <SearchX className="mx-auto text-slate-500" size={32} aria-hidden="true" />
            <p className="mt-3 font-semibold ">No product found</p>
            <p className="mt-1 text-sm text-slate-600">{message}</p>
        </div>
    );
};

export default EmptyState;