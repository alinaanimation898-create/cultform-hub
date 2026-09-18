import React, { useState } from 'react';
import { 
  ArrowRight, 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  X, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Sliders,
  Send
} from 'lucide-react';

export default function App() {
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'flow' | 'roi'>('flow');
  const [operationalBudget, setOperationalBudget] = useState(15000);
  const [pilotSubmitted, setPilotSubmitted] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);

  // ROI Calculations
  const hoursSavedPerMonth = Math.round((operationalBudget / 30) * 1.8);
  const capitalFreedUp = Math.round(operationalBudget * 0.32);

  return (
    <div className="h-screen w-full bg-slate-100 p-3 md:p-5 font-gilroy select-none overflow-hidden relative text-slate-900">
      
      {/* Outer Glow Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-slate-200/40 to-slate-300/60 pointer-events-none z-0" />

      {/* Inner Master Shell (Liquid-Glass Frame) */}
      <div className="w-full h-full rounded-3xl flex flex-col overflow-hidden relative border border-white/80 shadow-2xl bg-gradient-to-br from-[#b0d4f1] via-[#edf3fb] to-[#ffffff]">
        
        {/* ==========================================================================
            Background Ambient Layer
            ========================================================================== */}
        {/* Video Element */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover anim-fade opacity-85 mix-blend-multiply pointer-events-none z-0"
          src="turning_her_had_and_wink_202608291512.mp4"
          onError={(e) => {
            // Graceful fallback if mp4 is not yet located in root
            (e.target as HTMLElement).style.display = 'none';
          }}
        />

        {/* Ambient Glacial Caustic Orbs */}
        <div className="absolute -top-24 -left-20 w-[550px] h-[550px] rounded-full bg-sky-300/35 blur-[100px] pointer-events-none caustic-orb-1 z-0" />
        <div className="absolute top-1/3 -right-24 w-[600px] h-[600px] rounded-full bg-sky-400/25 blur-[120px] pointer-events-none caustic-orb-2 z-0" />
        <div className="absolute -bottom-28 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-200/40 blur-[90px] pointer-events-none z-0" />

        {/* Liquid Refraction Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/60 pointer-events-none z-[1]" />

        {/* ==========================================================================
            Top Navbar
            ========================================================================== */}
        <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 pt-6 md:pt-8">
          
          {/* Brand Block (.anim-stagger, delay 0.1s) */}
          <div 
            className="anim-stagger flex items-center gap-3.5 cursor-pointer group"
            style={{ animationDelay: '0.1s' }}
          >
            {/* Crystal Delta Glyph */}
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-tr from-sky-900 via-sky-700 to-sky-500 p-[1.5px] shadow-md shadow-sky-900/15 group-hover:shadow-sky-500/30 transition-shadow">
              <div className="w-full h-full bg-white/95 rounded-[10px] flex items-center justify-center relative overflow-hidden backdrop-blur-md">
                <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-sky-900 stroke-[7] transition-transform duration-500 group-hover:rotate-45">
                  <polygon points="50,14 86,78 14,78" className="stroke-sky-950" />
                  <polygon points="50,34 72,74 28,74" className="stroke-sky-600 fill-sky-100/50" />
                  <circle cx="50" cy="56" r="6" className="fill-sky-500 stroke-none" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-benzin text-slate-950 tracking-wider text-base md:text-lg font-black leading-none">
                  ALTAI
                </span>
                <span className="px-1.5 py-0.5 rounded-full bg-sky-100/90 border border-sky-400/60 text-[10px] font-black text-sky-700 shadow-sm shadow-sky-300/40 tracking-wider">
                  AI
                </span>
                <span className="text-slate-600 font-semibold tracking-[0.25em] text-xs leading-none">
                  OPTIMA
                </span>
              </div>
              <span className="text-[9px] font-bold text-slate-500 tracking-wider uppercase mt-1">
                Продукт Altai Production
              </span>
            </div>
          </div>

          {/* Center Tagline Pill (.anim-stagger, delay 0.15s, hidden lg:flex) */}
          <div 
            className="anim-stagger hidden lg:flex items-center"
            style={{ animationDelay: '0.15s' }}
          >
            <div className="liquid-glass px-5 py-2 rounded-full border border-white/90 text-xs font-bold text-slate-800 flex items-center gap-2.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wider uppercase font-semibold text-[11px] text-slate-700">
                АВТОНОМНАЯ ОПТИМИЗАЦИЯ БИЗНЕСА <span className="text-sky-400 mx-1">//</span> ОТКЛИК 0.8 СЕК
              </span>
            </div>
          </div>

          {/* Action Buttons (.anim-stagger, delay 0.2s) */}
          <div 
            className="anim-stagger flex items-center gap-3"
            style={{ animationDelay: '0.2s' }}
          >
            {/* Live Simulator Button */}
            <button 
              onClick={() => setIsSimulatorOpen(true)}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-slate-900 hover:text-sky-950 btn-optic-border group cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-sky-600 group-hover:rotate-12 transition-transform" />
                Живой симулятор
              </span>
            </button>

            {/* Launch 24h Pilot Button */}
            <button 
              onClick={() => setIsPilotModalOpen(true)}
              className="px-6 py-2.5 bg-gradient-to-r from-sky-700 via-sky-800 to-sky-950 text-white text-xs font-bold shadow-lg shadow-sky-900/20 hover:shadow-sky-600/30 btn-optic-cut cursor-pointer transition-all flex items-center gap-2"
            >
              <span>Запустить пилот за 24ч</span>
              <Sparkles className="w-3.5 h-3.5 text-sky-300" />
            </button>
          </div>

        </nav>

        {/* ==========================================================================
            Main Content Stage
            ========================================================================== */}
        <div className="relative z-20 flex-1 flex flex-col justify-between px-6 md:px-12 pb-8 md:pb-10 pt-4">
          
          {/* Upper / Hero Section */}
          <div className="flex-1 flex items-center relative my-auto">
            
            {/* Left Micro-Metric Column (.anim-stagger, delay 0.35s, hidden lg:flex) */}
            <div 
              className="anim-stagger hidden lg:flex flex-col gap-4 absolute left-0 top-[18%]"
              style={{ animationDelay: '0.35s' }}
            >
              <div className="liquid-glass p-4 rounded-2xl border border-white/80 max-w-[250px] shadow-sm">
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-sky-800 mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  // ГАРМОНИЧНАЯ АВТОНОМИЯ
                </div>
                <p className="text-slate-700 text-xs leading-relaxed font-medium">
                  AI спроектирован для устранения операционного трения и перевода команд в режим чистого созидания.
                </p>

                {/* Decorative Laser Stream Connector */}
                <div className="mt-3 pt-3 border-t border-sky-100 flex items-center justify-between text-[10px] font-bold text-slate-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 pulse-emerald" />
                    <span>Eva Core 4.0</span>
                  </div>
                  <span className="text-sky-600 font-mono text-[9px] bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200">
                    ONLINE
                  </span>
                </div>
              </div>
            </div>

            {/* Center Statement (.anim-stagger, delay 0.5s) */}
            <div 
              className="anim-stagger w-full text-center max-w-5xl mx-auto"
              style={{ animationDelay: '0.5s' }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 border border-sky-200/80 text-[11px] font-bold text-sky-950 uppercase tracking-widest mb-4 shadow-sm backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-spin" style={{ animationDuration: '6s' }} />
                <span>ИНТЕЛЛЕКТУАЛЬНЫЙ АВТОНОМНЫЙ КОНТУР</span>
              </div>

              {/* H1 Heading in Benzin Bold */}
              <h1 className="font-benzin text-slate-950 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.14] tracking-tight uppercase drop-shadow-sm">
                <span className="block text-slate-950">ВАШИ КОМАНДЫ ДОСТОЙНЫ СВОБОДЫ,</span>
                <span className="block text-slate-900 mt-1">НАШ AI ЗАКРЫВАЕТ СЛОЖНЫЕ ПРОЦЕССЫ</span>
                <span className="block mt-1.5 bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-900 bg-clip-text text-transparent">
                  БЕЗУПРЕЧНО 24/7/365
                </span>
              </h1>
            </div>

          </div>

          {/* ==========================================================================
              Bottom Control Bar (3 Columns)
              ========================================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-6 pt-4 border-t border-white/60">
            
            {/* Column 1: Value Proposition Summary (.anim-stagger, delay 0.7s) */}
            <div 
              className="anim-stagger flex items-center justify-center md:justify-start"
              style={{ animationDelay: '0.7s' }}
            >
              <div className="liquid-glass px-4 py-3 rounded-xl border border-white/80 max-w-[310px] text-center md:text-left">
                <p className="text-xs md:text-[13px] text-slate-700 font-medium leading-relaxed">
                  <strong className="text-slate-950 font-bold">Ноль трения.</strong> Устраняем выгорание лидов, хаос в таблицах и рутинную усталость с реакцией системы за 0.8 секунды.
                </p>
              </div>
            </div>

            {/* Column 2: Primary Action & Stat (.anim-stagger, delay 0.85s) */}
            <div 
              className="anim-stagger flex flex-col items-center gap-3"
              style={{ animationDelay: '0.85s' }}
            >
              {/* Value Metric Badge */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-emerald"></span>
                <span className="font-benzin text-sm md:text-base text-slate-950 font-black tracking-wider">
                  +30% ЭФФЕКТИВНОСТИ КАПИТАЛА
                </span>
              </div>

              {/* Main CTA Button */}
              <button 
                onClick={() => setIsSimulatorOpen(true)}
                className="w-full max-w-[270px] py-3.5 px-6 bg-gradient-to-r from-sky-700 via-sky-600 to-sky-900 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-sky-900/25 hover:shadow-sky-400/50 btn-optic-cut group cursor-pointer"
              >
                <span>Тест-драйв системы</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

            {/* Column 3: Ecosystem & Channel Chips (.anim-stagger, delay 1.0s) */}
            <div 
              className="anim-stagger flex flex-col items-center md:items-end gap-2"
              style={{ animationDelay: '1.0s' }}
            >
              {/* Chips Row */}
              <div className="flex items-center justify-center md:justify-end gap-2 flex-wrap">
                
                {/* WhatsApp Chip */}
                <button 
                  onClick={() => setSelectedChannel('WhatsApp Enterprise API')}
                  className="btn-optic-sm bg-white/90 hover:bg-white border border-sky-200/80 px-3 py-1.5 text-[11px] font-bold text-slate-800 flex items-center gap-1.5 shadow-sm transition-all cursor-pointer hover:border-emerald-400"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-emerald" />
                  <span>WhatsApp</span>
                </button>

                {/* Telegram API Chip */}
                <button 
                  onClick={() => setSelectedChannel('Telegram Bot & Client API')}
                  className="btn-optic-sm bg-white/90 hover:bg-white border border-sky-200/80 px-3 py-1.5 text-[11px] font-bold text-slate-800 flex items-center gap-1.5 shadow-sm transition-all cursor-pointer hover:border-sky-400"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-emerald" />
                  <span>Telegram API</span>
                </button>

                {/* CRM Integration Chip */}
                <button 
                  onClick={() => setSelectedChannel('1С, Bitrix24, amoCRM Integration')}
                  className="btn-optic-sm bg-white/90 hover:bg-white border border-sky-200/80 px-3 py-1.5 text-[11px] font-bold text-slate-800 flex items-center gap-1.5 shadow-sm transition-all cursor-pointer hover:border-sky-400"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-emerald" />
                  <span>CRM Интеграция</span>
                </button>

              </div>

              {/* Status Verification Caption */}
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600 tracking-wider uppercase">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Онлайн & Синхронизировано</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ==========================================================================
          Interactive Modal: Live Simulator & ROI Engine
          ========================================================================== */}
      {isSimulatorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md anim-fade">
          <div className="liquid-glass-card border border-white/90 rounded-3xl w-full max-w-2xl p-6 md:p-8 shadow-2xl relative">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsSimulatorOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-benzin text-lg font-black text-slate-950">
                  СИМУЛЯТОР АВТОНОМНОГО КОНТУРА ALTAI OPTIMA
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  Проверьте скорость реакции и экономику высвобождения ресурсов
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 p-1 bg-slate-100/90 rounded-xl mb-6">
              <button 
                onClick={() => setActiveTab('flow')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'flow' ? 'bg-white text-sky-950 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Цикл обработки лида (0.8с)
              </button>
              <button 
                onClick={() => setActiveTab('roi')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'roi' ? 'bg-white text-sky-950 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Калькулятор эффективности (+30%)
              </button>
            </div>

            {/* Tab 1: Live Lead Flow */}
            {activeTab === 'flow' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pb-2 border-b border-slate-100">
                    <span>Событие в реальном времени</span>
                    <span className="text-emerald-600 font-mono font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      0.8с время цикла
                    </span>
                  </div>

                  {/* Step 1 */}
                  <div className="flex items-start gap-3 text-xs">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-[10px]">
                      1
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">Входящий запрос в WhatsApp / Telegram:</span>
                      <p className="text-slate-600 mt-0.5">«Добрый день, требуется поставка 250 модулей к пятнице, есть ли объем и расчет КП?»</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-3 text-xs">
                    <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 font-bold text-[10px]">
                      2
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">Мгновенный скоринг Eva Core 4.0:</span>
                      <p className="text-slate-600 mt-0.5">Проверка остатков на складе 1С, актуализация персональной скидки клиента, генерация PDF-спецификации.</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-3 text-xs">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 font-bold text-[10px]">
                      3
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">Синхронизация в CRM & Отклик клиенту:</span>
                      <p className="text-slate-600 mt-0.5">Сделка переведена на этап «Счет выставлен». Клиент получил ответ через 0.8 сек без ожидания менеджера.</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-600 font-medium">Готовы протестировать на вашей базе?</span>
                  <button 
                    onClick={() => {
                      setIsSimulatorOpen(false);
                      setIsPilotModalOpen(true);
                    }}
                    className="btn-optic-cut px-5 py-2.5 bg-sky-900 text-white font-bold text-xs cursor-pointer hover:bg-sky-800 transition-colors"
                  >
                    Запустить 24-часовой тест
                  </button>
                </div>
              </div>
            )}

            {/* Tab 2: ROI Calculator */}
            {activeTab === 'roi' && (
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center text-xs font-bold mb-2">
                    <span className="text-slate-800">Текущий ежемесячный фонд операционного отдела:</span>
                    <span className="font-mono text-sky-700 text-sm font-black">
                      ${operationalBudget.toLocaleString('ru-RU')}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="3000" 
                    max="80000" 
                    step="1000"
                    value={operationalBudget}
                    onChange={(e) => setOperationalBudget(Number(e.target.value))}
                    className="w-full accent-sky-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                    <span>$3 000</span>
                    <span>$40 000</span>
                    <span>$80 000</span>
                  </div>
                </div>

                {/* Metrics Results */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-white/90 border border-sky-100 shadow-sm">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Высвобождаемый капитал в месяц
                    </span>
                    <span className="font-benzin text-xl md:text-2xl font-black text-emerald-600 mt-1 block">
                      +${capitalFreedUp.toLocaleString('ru-RU')}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium mt-0.5 block">
                      за счет оптимизации рутинных операций
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/90 border border-sky-100 shadow-sm">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Сэкономленное время команды
                    </span>
                    <span className="font-benzin text-xl md:text-2xl font-black text-sky-900 mt-1 block">
                      ~{hoursSavedPerMonth} ч / мес
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium mt-0.5 block">
                      перенаправлено на развитие и сделки
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-end pt-2">
                  <button 
                    onClick={() => {
                      setIsSimulatorOpen(false);
                      setIsPilotModalOpen(true);
                    }}
                    className="btn-optic-cut px-6 py-2.5 bg-gradient-to-r from-sky-700 to-sky-950 text-white font-bold text-xs cursor-pointer hover:shadow-lg transition-all"
                  >
                    Зафиксировать показатели в пилоте
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ==========================================================================
          Interactive Modal: 24h Pilot Application
          ========================================================================== */}
      {isPilotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md anim-fade">
          <div className="liquid-glass-card border border-white/90 rounded-3xl w-full max-w-lg p-6 md:p-8 shadow-2xl relative">
            
            {/* Close Button */}
            <button 
              onClick={() => {
                setIsPilotModalOpen(false);
                setPilotSubmitted(false);
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {!pilotSubmitted ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[10px] font-bold uppercase tracking-wider">
                    Экспресс-интеграция
                  </span>
                </div>
                <h3 className="font-benzin text-xl font-black text-slate-950 uppercase">
                  ЗАПУСТИТЬ ПИЛОТ ALTAI OPTIMA ЗА 24 ЧАСА
                </h3>
                <p className="text-xs text-slate-600 font-medium mt-1 mb-6 leading-relaxed">
                  Подключим тестовый контур к вашим каналам продаж без вмешательства в текущую IT-инфраструктуру.
                </p>

                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setPilotSubmitted(true);
                  }}
                  className="space-y-3.5"
                >
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Ваше имя и компания
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Александр / ООО «ТехноТрейд»"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white/90 text-xs font-semibold focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Телефон или Telegram для связи
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="+7 (999) 000-00-00 или @username"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white/90 text-xs font-semibold focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Приоритетный контур автоматизации
                    </label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white/90 text-xs font-semibold focus:outline-none focus:border-sky-500">
                      <option>Квалификация лидов и моментальные КП (WhatsApp & Telegram)</option>
                      <option>Автоматизация рутинных сделок в CRM (Bitrix24 / 1C / amoCRM)</option>
                      <option>Круглосуточный клиентский саппорт 24/7/365</option>
                      <option>Комплексная сквозная оптимизация бизнеса</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-sky-700 via-sky-600 to-sky-900 text-white font-bold text-xs uppercase tracking-wider btn-optic-cut shadow-lg shadow-sky-900/20 hover:shadow-sky-500/40 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Получить доступы к пилоту</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-500 text-center font-medium mt-2">
                    Бесплатный период 14 дней • Без обязательств • Договор конфиденциальности NDA
                  </p>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-3 anim-fade">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-benzin text-lg font-black text-slate-950 uppercase">
                  ЗАЯВКА НА ПИЛОТ ПРИНЯТА!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Инженер архитектуры Altai Optima свяжется с вами в течение 15 минут для развертывания персонального контура.
                </p>
                <button 
                  onClick={() => setIsPilotModalOpen(false)}
                  className="mt-4 px-6 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Вернуться на страницу
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Channel Toast Notification */}
      {selectedChannel && (
        <div className="fixed bottom-6 right-6 z-50 anim-fade">
          <div className="liquid-glass px-4 py-3 rounded-2xl border border-sky-300 shadow-xl flex items-center gap-3 max-w-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-emerald" />
            <div>
              <div className="text-xs font-bold text-slate-900">{selectedChannel}</div>
              <div className="text-[10px] text-slate-600 font-medium">Шлюз активен • Ping 18ms • Сквозное шифрование</div>
            </div>
            <button 
              onClick={() => setSelectedChannel(null)}
              className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
