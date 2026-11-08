import Header from "./components/Header";
import FilterableProductTable from "./components/FilterableProductTable";

function App() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Header />
            <main className="mx-auto max-w-5xl px-4 py-6 sm:px-7">
                <h1 className="text-2xl font-bold">Products</h1>
                <p className="mt-1 text-sm text-slate-600">
                    Add, edit and remove products. Filter and search to find them fast.
                </p>
                <FilterableProductTable />
            </main>
        </div>
    );
}

export default App;
