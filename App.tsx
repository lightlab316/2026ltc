
import React, { useState } from 'react';
import TableContainer from './components/TableContainer';
import { TripData } from './types';

const LTC_DATA: TripData = {
  title: "2026 大學部 LTC",
  subTitle: "訪韓手冊",
  period: "2026/2/6 ~ 2/9",
  flights: [
    { type: "去程", date: "2/6", time: "02:35-05:45", route: "桃園 → 清洲", terminal: "桃機第一航廈", flightNo: "易斯達航空 ZE782", meeting: "2/5 22:00 桃機集合" },
    { type: "回程", date: "2/9", time: "23:45-01:15(+1)", route: "清洲 → 桃園", terminal: "清洲第一航廈", flightNo: "易斯達航空 ZE781", meeting: "19:30 出發前往機場" }
  ],
  staff: [
    { role: "正/副領隊", person: "胡琬霖、主眞實", task: "行政統籌" },
    { role: "財務", person: "黃千芳", task: "零用錢、信封袋、計算機、保險" },
    { role: "車庫", person: "豆豆", task: "點名、帶分享" },
    { role: "醫療組", person: "許珮甄", task: "外傷消毒、腸胃藥、感冒藥、暈車藥" },
    { role: "發射器", person: "主眞實", task: "廣播發射器" },
    { role: "大執負責人", person: "謝漢興", task: "準備垃圾袋、提醒值日生" }
  ],
  duties: [
    { day: "2/6", meal: "午餐", names: ["陳子敬", "陳泓霖", "林竑堯"] },
    { day: "2/7", meal: "午餐", names: ["賴敬和", "李易昀", "謝漢興"] },
    { day: "2/8", meal: "午餐", names: ["張凱傑", "林柏儒", "趙宥駿"] }
  ],
  itinerary: [
    {
      day: 1, date: "2/6", weekday: "五", accommodation: "大屯山飯店",
      items: [
        { time: "07:30", activity: "上巴士", location: "機場", note: "" },
        { time: "09:00", activity: "抵達月明洞", location: "月明洞", note: "需載SS先到主生命" },
        { time: "10:00", activity: "律師特講 OR 宋代表", location: "月明洞", note: "" },
        { time: "12:00", activity: "真美便當", location: "316餐廳", note: "" },
        { time: "13:30", activity: "台韓LTC交流", location: "校園見證", note: "" },
        { time: "18:00", activity: "晚餐：好口味", location: "餐廳", note: "" },
        { time: "20:00", activity: "回大屯山連線", location: "飯店", note: "" }
      ]
    },
    {
      day: 2, date: "2/7", weekday: "六", accommodation: "大屯山飯店",
      items: [
        { time: "07:00", activity: "早餐", location: "大屯山飯店", note: "" },
        { time: "09:00", activity: "LTC開幕式", location: "月明洞", note: "CAM中央話語" },
        { time: "12:30", activity: "真美便當", location: "316餐廳", note: "" },
        { time: "14:00", activity: "韓國二代通過式", location: "316本堂", note: "" },
        { time: "18:00", activity: "晚餐：李本家", location: "餐廳", note: "買隔天早餐" },
        { time: "21:00", activity: "回大屯山飯店", location: "飯店", note: "" }
      ]
    },
    {
      day: 3, date: "2/8", weekday: "日", accommodation: "大屯山飯店",
      items: [
        { time: "08:30", activity: "出發", location: "飯店", note: "" },
        { time: "09:20", activity: "主日禮拜", location: "本堂", note: "禮拜後龍錫牧師招呼" },
        { time: "12:30", activity: "真美便當", location: "316餐廳", note: "" },
        { time: "14:00", activity: "二代中央分享", location: "月明洞", note: "" },
        { time: "18:00", activity: "晚餐：火烤小章魚", location: "餐廳", note: "" },
        { time: "20:30", activity: "回大屯山飯店", location: "飯店", note: "" }
      ]
    },
    {
      day: 4, date: "2/9", weekday: "一", accommodation: "機上",
      items: [
        { time: "08:15", activity: "退房", location: "飯店", note: "" },
        { time: "09:30", activity: "漢南大導覽", location: "漢南大", note: "交流" },
        { time: "11:00", activity: "忠南大導覽", location: "忠南大", note: "交流" },
        { time: "12:30", activity: "燒烤", location: "窮童叔叔", note: "" },
        { time: "14:00", activity: "韓南大學校園導覽", location: "韓南大", note: "" },
        { time: "17:30", activity: "晚餐自理", location: "學校附近", note: "" },
        { time: "19:30", activity: "前往機場", location: "機場", note: "" }
      ]
    }
  ],
  rooms: [
    { roomNumber: "天國101", roomType: "兩人房(兩小床)", occupants: ["張博閔", "謝漢興"] },
    { roomNumber: "天國102", roomType: "兩人房(兩小床)", occupants: ["陳泓霖", "林竑堯"] },
    { roomNumber: "天國104", roomType: "地鋪房", occupants: ["陳子敬", "李易昀", "趙宥駿"] },
    { roomNumber: "天國105", roomType: "地鋪房", occupants: ["賴敬和", "林柏儒", "張凱傑"] },
    { roomNumber: "黃金城-1", roomType: "兩人房(兩小床)", occupants: ["胡琬霖", "林安榆"] },
    { roomNumber: "黃金城-2", roomType: "兩人房(兩小床)", occupants: ["鄭惠理", "黃千芳"] },
    { roomNumber: "黃金城-3", roomType: "兩人房(兩小床)", occupants: ["李沂瑾", "王儀安"] }
  ],
  essentials: [
    "FM 隨身聽 (非手機網路FM，請務必測試)",
    "護照",
    "網卡或國際漫遊",
    "個人藥品 (防蚊、胃、止痛、暈車)",
    "變壓插頭 (兩孔 220V)",
    "羽絨暖套/手套/圍巾",
    "主日禮拜正裝"
  ],
  notes: [
    { category: "住宿篇", content: ["飯店全面禁菸(罰5萬韓幣)", "牙刷等拋棄式用品需自備", "房卡丟失賠2萬韓幣", "B1提供洗衣機(06:00-18:00)"] },
    { category: "月明洞篇", content: ["禁止個人/團體照片拍攝及攝影", "草坪區需脫鞋進入", "清算館咖啡廳週三公休", "禁止在石頭造景間攀爬"] },
    { category: "機場篇", content: ["160Wh以下鋰電池需隨身攜帶", "打火機限攜帶一個", "液狀物品超過100ml需托運"] }
  ]
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "航班資訊", href: "#flights", icon: "fa-plane" },
    { label: "分工職責", href: "#staff", icon: "fa-users" },
    { label: "詳細行程", href: "#itinerary", icon: "fa-calendar-days" },
    { label: "房間分配", href: "#rooms", icon: "fa-bed" },
    { label: "注意事項", href: "#notes", icon: "fa-circle-exclamation" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#1E40AF] pb-20 selection:bg-pink-200 scroll-smooth">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-[100] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <i className="fa-solid fa-map"></i>
            </div>
            <span className="font-black text-slate-800 tracking-tight">2026 LTC 手冊</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-1.5"
              >
                <i className={`fa-solid ${item.icon} text-xs`}></i>
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => window.print()}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              <i className="fa-solid fa-print"></i>
              列印
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center text-slate-800 text-xl"
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden bg-white border-b border-slate-200 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left px-4 py-3 rounded-lg text-slate-700 font-bold hover:bg-indigo-50 flex items-center gap-3 transition-colors"
              >
                <i className={`fa-solid ${item.icon} text-indigo-500 w-5`}></i>
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => { setIsMenuOpen(false); window.print(); }}
              className="w-full text-left px-4 py-3 rounded-lg text-indigo-600 font-black hover:bg-indigo-50 flex items-center gap-3"
            >
              <i className="fa-solid fa-print w-5"></i>
              列印手冊
            </button>
          </div>
        </div>
      </nav>

      {/* Cover Header */}
      <header className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 flex justify-around items-center pointer-events-none">
           <i className="fa-solid fa-cloud text-9xl text-white"></i>
           <i className="fa-solid fa-sun text-9xl text-yellow-300"></i>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter drop-shadow-lg">
            {LTC_DATA.title}
          </h1>
          <div className="inline-block bg-white text-[#1E40AF] px-6 py-2 rounded-full font-bold text-2xl mb-6 shadow-xl">
            {LTC_DATA.subTitle}
          </div>
          <div className="block bg-[#991B1B] text-white mx-auto max-w-xs px-8 py-2 font-bold rounded shadow-lg transform -rotate-1">
            訪韓期間：{LTC_DATA.period}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 space-y-16">
        {/* Flight Information */}
        <section id="flights" className="scroll-mt-24">
          <h2 className="text-3xl font-black text-white flex items-center gap-3 mb-8">
            <i className="fa-solid fa-plane-departure text-pink-400"></i>
            航班與集合資訊
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {LTC_DATA.flights.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-xl border-b-8 border-pink-400">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded font-bold">{f.type}</span>
                  <span className="text-slate-400 font-mono text-sm">{f.flightNo}</span>
                </div>
                <div className="text-3xl font-black text-slate-800 mb-2">{f.route}</div>
                <div className="flex items-center gap-2 text-indigo-600 font-bold mb-4">
                  <i className="fa-regular fa-clock"></i>
                  {f.date} {f.time}
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-dashed border-slate-300">
                  <div className="text-sm text-slate-500 mb-1 font-bold">重要提醒</div>
                  <div className="font-bold text-pink-600 mb-1">{f.meeting}</div>
                  <div className="text-xs text-slate-600">{f.terminal}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Staff & Duties */}
        <section id="staff" className="scroll-mt-24 space-y-8">
          <h2 className="text-3xl font-black text-white flex items-center gap-3">
            <i className="fa-solid fa-users-gear text-yellow-400"></i>
            行政分工與值日
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TableContainer title="行政分工" icon="fa-solid fa-user-tie">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 text-xs text-slate-500 font-bold">
                    <th className="px-4 py-3">職稱</th>
                    <th className="px-4 py-3">人員</th>
                    <th className="px-4 py-3">負責事項</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {LTC_DATA.staff.map((s, i) => (
                    <tr key={i} className="text-sm">
                      <td className="px-4 py-3 font-bold text-indigo-600 whitespace-nowrap">{s.role}</td>
                      <td className="px-4 py-3 font-medium whitespace-nowrap">{s.person}</td>
                      <td className="px-4 py-3 text-slate-600 text-xs">{s.task}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableContainer>

            <TableContainer title="午餐值日生" icon="fa-solid fa-utensils">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 text-xs text-slate-500 font-bold">
                    <th className="px-4 py-3">日期</th>
                    <th className="px-4 py-3">餐次</th>
                    <th className="px-4 py-3">人員名單</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {LTC_DATA.duties.map((d, i) => (
                    <tr key={i} className="text-sm">
                      <td className="px-4 py-3 font-bold">{d.day}</td>
                      <td className="px-4 py-3 text-pink-600 font-bold">{d.meal}</td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1.5">
                          {d.names.map((n, j) => (
                            <span key={j} className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-[11px] font-bold border border-indigo-100">
                              {n}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableContainer>
          </div>
        </section>

        {/* Itinerary */}
        <section id="itinerary" className="scroll-mt-24 space-y-6">
          <h2 className="text-3xl font-black text-white flex items-center gap-3">
            <i className="fa-solid fa-map-location-dot text-amber-400"></i>
            詳細行程表
          </h2>
          {LTC_DATA.itinerary.map((day) => (
            <TableContainer key={day.day} title={`Day ${day.day} - ${day.date} (${day.weekday})`} icon="fa-solid fa-calendar-day">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 text-xs text-slate-500 font-bold">
                    <th className="px-4 py-3 w-20">時間</th>
                    <th className="px-4 py-3">活動內容</th>
                    <th className="px-4 py-3 hidden sm:table-cell">地點</th>
                    <th className="px-4 py-3">備註</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {day.items.map((item, idx) => (
                    <tr key={idx} className="hover:bg-indigo-50/50">
                      <td className="px-4 py-4 font-mono font-bold text-indigo-600 text-sm">{item.time}</td>
                      <td className="px-4 py-4">
                        <div className="font-bold text-slate-800 text-sm md:text-base">{item.activity}</div>
                        <div className="sm:hidden text-[10px] text-slate-500 mt-1">
                          <i className="fa-solid fa-location-dot mr-1"></i>
                          {item.location}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600 hidden sm:table-cell">
                        <span className="flex items-center gap-1">
                          <i className="fa-solid fa-location-dot text-slate-300"></i>
                          {item.location}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-[11px] text-slate-400 italic leading-tight">{item.note}</td>
                    </tr>
                  ))}
                  <tr className="bg-indigo-50/30">
                    <td colSpan={4} className="px-4 py-3 text-xs md:text-sm font-bold text-indigo-700 flex items-center gap-2">
                      <i className="fa-solid fa-hotel"></i>
                      住宿：{day.accommodation}
                    </td>
                  </tr>
                </tbody>
              </table>
            </TableContainer>
          ))}
        </section>

        {/* Room Assignment */}
        <section id="rooms" className="scroll-mt-24">
          <h2 className="text-3xl font-black text-white flex items-center gap-3 mb-8">
            <i className="fa-solid fa-bed text-sky-400"></i>
            飯店房間分配
          </h2>
          <TableContainer title="大屯山飯店 (30人)" icon="fa-solid fa-building-user">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6">
                {LTC_DATA.rooms.map((r, i) => (
                  <div key={i} className="border border-slate-200 rounded-xl p-4 bg-slate-50 hover:border-indigo-300 transition-colors shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-black text-indigo-700 text-lg">{r.roomNumber}</span>
                      <span className="text-[10px] font-bold bg-white text-slate-500 px-2 py-0.5 rounded-full border border-slate-200 uppercase tracking-tighter">
                        {r.roomType}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {r.occupants.map((n, j) => (
                        <span key={j} className="text-sm font-bold text-slate-700 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 flex items-center gap-1.5">
                          <i className="fa-solid fa-circle-user text-slate-300 text-[10px]"></i>
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
             </div>
          </TableContainer>
        </section>

        {/* Notes & Essentials */}
        <section id="notes" className="scroll-mt-24 grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-t-8 border-yellow-400">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-slate-800">
              <i className="fa-solid fa-suitcase-rolling text-yellow-500"></i>
              必帶攜帶物品
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {LTC_DATA.essentials.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-yellow-50 rounded-xl text-slate-800 font-bold border border-yellow-100 shadow-sm">
                   <div className="w-6 h-6 rounded bg-yellow-400 flex items-center justify-center text-white shrink-0">
                     <i className="fa-solid fa-check text-xs"></i>
                   </div>
                   {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {LTC_DATA.notes.map((group, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-l-8 border-pink-500">
                <h3 className="text-xl font-black mb-6 text-pink-600 flex items-center gap-3">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  注意事項：{group.category}
                </h3>
                <ul className="space-y-4">
                  {group.content.map((text, j) => (
                    <li key={j} className="text-slate-600 font-medium flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-300 mt-2 shrink-0"></div>
                      <span className="leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-10 text-center border-t border-white/10 text-white/50 text-xs">
        © 2026 CAM Campus LTC - 訪韓手冊數位版
      </footer>

      <style>{`
        html { scroll-behavior: smooth; }
        @media print {
          nav { display: none !important; }
          body { background: white !important; }
          header { padding-top: 20px !important; border-bottom: 2px solid #eee; }
          header h1, header .bg-white { color: black !important; }
          .bg-white { box-shadow: none !important; border: 1px solid #ddd !important; }
          .bg-[#1E40AF] { background: white !important; }
          .text-white { color: black !important; }
          main { space-y: 8px !important; }
          section { scroll-margin-top: 0 !important; }
        }
      `}</style>
    </div>
  );
};

export default App;
