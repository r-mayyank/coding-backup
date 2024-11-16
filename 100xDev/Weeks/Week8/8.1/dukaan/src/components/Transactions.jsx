export const Transactions = () => {
return (
    <div className="flex flex-col gap-4">
        <div className="font-medium text-xl">
        Transaction | This Month
        </div>
        <div className="flex gap-4 text-sm">
        <span className="rounded-xl bg-[#e5e5e5] py-1.5 px-4 text-gray-600">Payouts (22)</span>
        <span className="rounded-xl bg-blue-900 text-white py-1.5 px-4">Refunds (16)</span>
        </div>
    </div>
)
}