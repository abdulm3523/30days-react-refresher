function PremiumFilter({ isPremium, handelIsPremium }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={isPremium}
        className="w-6 h-6 rounded border-gray-400"
        onChange={(e) => handelIsPremium(e.target.checked)}
      />
      <span className="text-2xl font-semibold text-gray-900">
        Show Premium Only
      </span>
    </label>
  );
}

export default PremiumFilter;
