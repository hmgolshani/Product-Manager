import {Pencil, Trash2} from "lucide-react";

type RowActionsProps = {
    productName: string;
    onEdit: () => void;
    onDelete: () => void;
}

const RowActions = ({productName , onEdit , onDelete} :RowActionsProps) => {
    return (
        <div className="flex justify-end gap-2">
            <button type="button"
                    className="grid size-10 cursor-pointer place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors
                    hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700
                    md:size-9"
                    aria-label={"Edit"+ productName}
                    onClick={() => {onEdit()}}>

                <Pencil size={16} aria-hidden="true"/>
            </button>

            <button type="button"
                    className="grid size-10 cursor-pointer place-items-center rounded-lg border border-slate-200 bg-white text-red-600 transition-colors
                    hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600
                     md:size-9"
                    aria-label={"Delete"+ productName}
                    onClick={() => {onDelete()}}>

                <Trash2 size={16} aria-hidden="true"/>
            </button>
        </div>
    );
};

export default RowActions;