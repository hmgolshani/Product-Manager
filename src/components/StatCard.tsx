type StatCardProps = {
    label: string;
    value: string | number;
};

const StatCard = ({value ,label}:StatCardProps) => {
    return (
        <div className="rounded-xl border border-slate-200 bg-white px-4 py-3.5">
            <b className=" block text-2xl font-bold tabular-nums">{value}</b>
            <span className="text-xs text-slate-600">{label}</span>
        </div>
    );
};

export default StatCard;