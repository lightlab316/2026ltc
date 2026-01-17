import React, { useState } from 'react';
import TableContainer from './components/TableContainer.tsx';

const LTC_DATA = {
  title: "2026 大學部 LTC",
  subTitle: "訪韓電子手冊",
  period: "2026/2/6 ~ 2/9",
  flights: [
    { type: "去程", date: "2/6", time: "02:35-05:45", route: "桃園(TPE) → 清洲(CJJ)", terminal: "桃機第一航廈", flightNo: "易斯達航空 ZE782", meeting: "2/5 22:00 桃機集合" },
    { type: "回程", date: "2/9", time: "23:45-01:15(+1)", route: "清洲(CJJ) → 桃園(TPE)", terminal: "清洲第一航廈", flightNo: "易斯達航空 ZE781", meeting: "19:30 出發前往機場" }
  ],
  staff: [
    { role: "正/副領隊", person: "胡琬霖、主眞實", task: "行政統籌、對外窗口" },
    { role: "財務", person: "黃千芳", task: "零用錢、信封袋、計算機、保險" },
    { role: "車庫/點名", person: "豆豆", task: "點名、交通聯絡、帶分享" },
    { role: "醫療組", person: "許珮甄", task: "外傷消毒、腸胃藥、感冒藥、暈車藥" },
    { role: "發射器", person: "主眞實", task: "廣播發射器管理" },
    { role: "大執負責人", person: "謝漢興", task: "準備垃圾袋、提醒值日生清理" }
  ],
  itinerary: [
    {
      day: 1, date: "2/6", weekday: "五", items: [
        { time: "02:35", activity: "飛機起飛", location: "桃園機場", note: "ZE782" },
        { time: "05:45", activity: "抵達清洲機場", location: "清洲", note: "通關與領行李" },
        { time: "07:30", activity: "搭乘巴士", location: "機場出口", note: "" },
        { time: "09:00", activity: "抵達月明洞", location: "月明洞", note: "需載SS先到主生命" },
        { time: "10:00", activity: "特講", location: "自然聖殿", note: "" },
        { time: "12:00", activity: "午餐", location: "316餐廳", note: "值日生協助" },
        { time: "13:30", activity: "台韓交流", location: "校園見證", note: "" },
        { time: "18:00", activity: "晚餐", location: "當地餐廳", note: "" },
        { time: "20:00", activity: "回飯店休息", location: "大屯山飯店", note: "" }
      ]
    },
    {
      day: 2, date: "2/7", weekday: "六", items: [
        { time: "07:00", activity: "早餐", location: "飯店餐廳", note: "" },
        { time: "09:00", activity: "LTC開幕式", location: "月明洞", note: "" },
        { time: "12:30", activity: "午餐", location: "316餐廳", note: "" },
        { time: "14:00", activity: "專題講座", location: "各教室", note: "" },
        { time: "18:00", activity: "晚餐", location: "餐廳", note: "" },
        { time: "20:00", activity: "分享會", location: "飯店房間", note: "" }
      ]
    },
    {
      day: 3, date: "2/8", weekday: "日", items: [
        { time: "08:30", activity: "出發", location: "飯店", note: "" },
        { time: "09:20", activity: "主日禮拜", location: "月明洞本堂", note: "穿著正裝" },
        { time: "12:00", activity: "午餐", location: "316餐廳", note: "" },
        { time: "14:00", activity: "月明洞導覽", location: "自然聖殿", note: "" },
        { time: "18:00", activity: "歡送晚餐", location: "當地燒烤", note: "" }
      ]
    },
    {
      day: 4, date: "2/9", weekday: "一", items: [
        { time: "08:15", activity: "退房與集合", location: "飯店大廳", note: "" },
        { time: "10:00", activity: "市區參訪", location: "清州市區", note: "" },
        { time: "12:30", activity: "午餐", location: "市區餐廳", note: "" },
        { time: "15:00", activity: "採買行程", location: "超市/商圈", note: "" },
        { time: "19:30", activity: "抵達機場", location: "清洲機場", note: "準備回程" },
        { time: "23:45", activity: "起飛回台", location: "清洲機場", note: "ZE781" }
      ]
    }
  ],
  rooms: [
    { roomNumber: "天國101", roomType: "兩人房", occupants: ["張博閔", "謝漢興"] },
    { roomNumber: "天國102", roomType: "兩人房", occupants: ["陳泓霖", "林竑堯"] },
    { roomNumber: "天國104", roomType: "地鋪房", occupants: ["陳子敬", "李易昀", "趙宥駿"] },
    { roomNumber: "天國105", roomType: "地鋪房", occupants: ["賴敬和", "林柏儒", "張凱傑"] },
    { roomNumber: "黃金城-1", roomType: "兩人房", occupants: ["胡琬霖", "林安榆"] },
    { roomNumber: "黃金城-2", roomType: "兩人房", occupants: ["鄭惠理", "黃千芳"] },
    { roomNumber: "黃金城-3", roomType: "兩人房", occupants: ["李沂瑾", "王儀安"] }
  ],
  notes: [
    { category: "住宿須知", content: ["全面禁菸，違者重罰", "飯店不提供牙刷牙膏，請自備", "房卡丟失需補償 2 萬韓元", "晚上 11:00 後請保持安靜"] },
    { category: "聖地注意事項", content: ["月明洞禁止私自錄影特講內容", "草坪需脫鞋進入", "嚴禁爬上石頭造景", "垃圾需隨手帶走"] },
    { category: "天氣與穿著", content: ["預計氣溫 -5 到 5 度，請準備羽絨衣", "主日禮拜必須穿著正式西裝或套裝", "建議準備暖暖包與手套"] }
  ]
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#1E40AF] pb-20 font-sans text-slate-900">
      {/* 導覽列 */}
      <nav className="no-print fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-[100]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-indigo-700 text-xl">
            <i className="fa-solid fa-plane-up"></i>
            <span>2026 LTC</span>
          </div>
          <div className="hidden md:flex gap-8">
            {['flights', 'staff', 'itinerary', 'rooms', 'notes'].map((item) => (
              <button 
                key={item} 
                onClick={() => handleNavClick(`#${item}`)} 
                className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-wider"
              >
                {item === 'flights' ? '航班' : item === 'staff' ? '分工' : item === 'itinerary' ? '行程' : item === 'rooms' ? '房間' : '注意'}
              </button>
            ))}
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-800 text-2xl">
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
        {/* 手機版選單 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 shadow-xl">
            {['flights', 'staff', 'itinerary', 'rooms', 'notes'].map((item) => (
              <button 
                key={item} 
                onClick={() => handleNavClick(`#${item}`)} 
                className="block w-full text-left py-2 font-bold text-slate-700 border-b border-slate-100"
              >
                {item === 'flights' ? '航班資訊' : item === 'staff' ? '行政分工' : item === 'itinerary' ? '詳細行程' : item === 'rooms' ? '房間分配' : '注意事項'}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* 頁首 */}
      <header className="pt-32 pb-16 px-4 text-center text-white">
        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold mb-4 tracking-widest">
          CAMPUS MISSION
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-4 drop-shadow-lg">{LTC_DATA.title}</h1>
        <p className="text-xl md:text-2xl font-light opacity-90">{LTC_DATA.subTitle} <span className="mx-2">|</span> {LTC_DATA.period}</p>
      </header>

      {/* 內容區 */}
      <main className="max-w-4xl mx-auto px-4 space-y-12">
        
        {/* 航班資訊 */}
        <section id="flights">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <i className="fa-solid fa-plane"></i> 航班資訊
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {LTC_DATA.flights.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl">
                  <i className={`fa-solid ${f.type === '去程' ? 'fa-plane-departure' : 'fa-plane-arrival'}`}></i>
                </div>
                <div className="text-indigo-600 font-black mb-1 text-sm tracking-widest">{f.type} • {f.flightNo}</div>
                <div className="text-2xl font-black text-slate-800 mb-2">{f.route}</div>
                <div className="flex flex-col text-sm text-slate-500 gap-1">
                  <span><i className="fa-regular fa-calendar mr-2"></i>{f.date}</span>
                  <span><i className="fa-regular fa-clock mr-2"></i>{f.time}</span>
                  <span><i className="fa-solid fa-location-dot mr-2"></i>{f.terminal}</span>
                </div>
                <div className="mt-6 p-4 bg-rose-50 rounded-xl border border-rose-100 text-rose-600 font-bold text-sm flex items-center gap-2">
                  <i className="fa-solid fa-bullhorn animate-bounce"></i>
                  {f.meeting}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 行政分工 */}
        <section id="staff">
          <TableContainer title="行政分工" icon="fa-solid fa-user-tie">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-4">職位</th>
                  <th className="px-6 py-4">負責人</th>
                  <th className="px-6 py-4">任務說明</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {LTC_DATA.staff.map((s, i) => (
                  <tr key={i} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="px-6 py-4 font-bold text-indigo-700">{s.role}</td>
                    <td className="px-6 py-4 font-medium">{s.person}</td>
                    <td className="px-6 py-4 text-slate-500 text-sm">{s.task}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableContainer>
        </section>

        {/* 詳細行程 */}
        <section id="itinerary">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <i className="fa-solid fa-calendar-day"></i> 詳細行程表
          </h2>
          <div className="space-y-8">
            {LTC_DATA.itinerary.map(day => (
              <div key={day.day} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-indigo-700 text-white px-6 py-4 flex justify-between items-center">
                  <span className="text-xl font-black">DAY 0{day.day}</span>
                  <span className="font-bold opacity-80">{day.date} ({day.weekday})</span>
                </div>
                <div className="p-2">
                  <table className="w-full text-left">
                    <tbody className="divide-y divide-slate-50">
                      {day.items.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 group">
                          <td className="px-6 py-5 text-sm font-mono font-black text-indigo-500 w-28 align-top">
                            {item.time}
                          </td>
                          <td className="px-6 py-5">
                            <div className="text-base font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
                              {item.activity}
                            </div>
                            <div className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                              <i className="fa-solid fa-location-dot"></i> {item.location}
                            </div>
                          </td>
                          <td className="px-6 py-5 text-sm text-rose-500 font-medium text-right italic">
                            {item.note}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 房間分配 */}
        <section id="rooms">
          <TableContainer title="房間分配" icon="fa-solid fa-bed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
              {LTC_DATA.rooms.map((r, i) => (
                <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all hover:shadow-md">
                  <div className="flex justify-between items-start mb-3">
                    <div className="font-black text-indigo-700 text-lg">{r.roomNumber}</div>
                    <span className="text-[10px] bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded font-bold uppercase">{r.roomType}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {r.occupants.map((occ, idx) => (
                      <span key={idx} className="bg-white px-3 py-1.5 rounded-lg shadow-sm text-sm font-bold text-slate-700 border border-slate-100">
                        {occ}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TableContainer>
        </section>

        {/* 注意事項 */}
        <section id="notes">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <i className="fa-solid fa-circle-exclamation"></i> 注意事項
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {LTC_DATA.notes.map((n, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-white">
                <h3 className="font-black text-xl mb-4 text-indigo-200 border-b border-white/10 pb-2">{n.category}</h3>
                <ul className="space-y-3">
                  {n.content.map((text, idx) => (
                    <li key={idx} className="text-sm flex gap-2 opacity-90 leading-relaxed">
                      <span className="text-indigo-300">•</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-20 py-10 text-center text-white/40 text-xs border-t border-white/5">
        <p className="font-bold tracking-widest mb-1">© 2026 CAM Campus LTC Manual</p>
        <p>設計與製作：大學部 LTC 籌備小組</p>
      </footer>
    </div>
  );
};

export default App;