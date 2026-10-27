export default function TrackingInfo({ courierName, area, address, eta }) {
  return (
    <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-amber-900/10">
      <h3 className="font-serif text-base font-bold text-[#3b140d]">
        Delivery Information
      </h3>
      <dl className="mt-2 grid grid-cols-1 gap-2 text-sm sm:grid-cols-3">
        <div>
          <dt className="text-xs text-[#5c4638]">Courier</dt>
          <dd className="font-medium text-[#3b140d]">{courierName}</dd>
        </div>
        <div>
          <dt className="text-xs text-[#5c4638]">Destination</dt>
          <dd className="font-medium text-[#3b140d]">
            {address}, {area}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-[#5c4638]">Estimated Arrival</dt>
          <dd className="font-medium text-[#3b140d]">{eta}</dd>
        </div>
      </dl>
    </div>
  );
}