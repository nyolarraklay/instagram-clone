export default function MiniProfile() {
  return (
    <div>
      <div className="flex items-center justify-between mt-14 ml-10">
        <img
          className="rounded-full border p-[2px] h-12"
          src="https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-1/302219098_10159706965767798_5074832581185012703_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=93lnXJ-DetcQ7kNvgFRfIhc&_nc_ht=scontent.fosl1-1.fna&oh=00_AYBHQsyDgU3Yx5MFr7f0fs62r0V1OsAuL4kVT5-FKvCJbw&oe=66CE2AD5"
          alt="Profile pic"
        />
        <div className="flex-1 mx-4">
          <h2 className="font-bold">NyolOsorio</h2>
          <h3 className="text-xs text-gray-400">Welcome to Instagram</h3>
        </div>
        <button className="text-blue-400 text-sm font-bold">Sign Out</button>
      </div>
    </div>
  );
}
