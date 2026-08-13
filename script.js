const tripData = {
  name: "Mongol Trip 26'",
  dates: {
    start: "2026-08-14",
    end: "2026-08-18",
    display: "2026.08.14 - 2026.08.18",
  },
  tickets: [
    {
      label: "가는 날",
      date: "2026.08.14 (금)",
      route: "ICN T1 → UBN",
      time: "01:50 출발 → 04:30 도착 (3시간 40분)",
      status: "확정",
      note: "대한항공 KE5839 | MIAT 몽골항공 OM310 운항 | 일반석 S 클래스 | 보잉 787-800(대형) | 기내식",
    },
    {
      label: "오는 날",
      date: "2026.08.18 (화)",
      route: "UBN → ICN T2",
      time: "13:00 출발 → 17:10 도착 (3시간 10분)",
      status: "확정",
      note: "대한항공 KE2042 | 일반석 Y 클래스 | 에어버스 A330-300(대형) | 기내식",
    },
  ],
  days: [
    {
      id: "day1",
      day: "D1",
      date: "08.14 금",
      title: "칭기즈 칸 공항 도착 / 청헤르 온천",
      summary: "04:30 UBN 도착 후 환전, 기사 & 가이드 미팅, 마트와 중식을 거쳐 청헤르 온천에서 휴식.",
      stops: [
        {
          name: "칭기즈 칸 국제공항",
          detail: "04:30 도착, 공항 환전",
          mapQuery: "Chinggis Khaan International Airport Mongolia",
        },
        {
          name: "울란바토르 마트 경유",
          detail: "12:00 마트 경유 및 중식",
          mapQuery: "Ulaanbaatar supermarket Mongolia",
        },
        {
          name: "항가이리조트 (Nomin Khangai Resort)",
          detail: "14:00 도착, 온천 후 휴식",
          mapQuery: "Nomin Khangai Resort",
        },
      ],
      schedule: [
        {
          time: "01:50",
          title: "인천국제공항 T1 출발",
          text: "대한항공 KE5839, MIAT 몽골항공 OM310 운항.",
        },
        {
          time: "04:30",
          title: "칭기즈 칸 공항 도착",
          text: "UBN 도착 후 공항에서 환전 진행.",
        },
        {
          time: "06:00",
          title: "기사 & 가이드 미팅 후 출발",
          text: "출국장 앞에서 미팅.",
        },
        {
          time: "12:00",
          title: "마트 경유, 중식",
          text: "중식: 현지식당.",
        },
        {
          time: "14:00",
          title: "항가이리조트 도착",
          text: "온천 후 휴식.",
        },
        {
          time: "19:00",
          title: "석식",
          text: "석식: 숙소 제공. 조식은 간식으로 진행.",
        },
      ],
    },
    {
      id: "day2",
      day: "D2",
      date: "08.15 토",
      title: "청헤르 온천 → 엘승타사르하이",
      summary: "숙소 조식 후 엘승타사르하이로 이동해 사막 트래킹, 모래썰매, 낙타체험.",
      stops: [
        {
          name: "항가이리조트 (Nomin Khangai Resort)",
          detail: "08:00 조식 후 출발 준비",
          mapQuery: "Nomin Khangai Resort",
        },
        {
          name: "비칙하드 (Bichigt Khad Tourist Camp)",
          detail: "16:00 도착, 사막 액티비티",
          mapQuery: "9R88+63W Bichigt Khad, Ulaanshiveet, Bulgan, Mongolia",
        },
      ],
      schedule: [
        {
          time: "08:00",
          title: "조식",
          text: "조식: 숙소 제공.",
        },
        {
          time: "10:00",
          title: "청헤르에서 엘승타사르하이로 이동",
          text: "장거리 이동 일정.",
        },
        {
          time: "12:30",
          title: "중식",
          text: "중식: 현지식당.",
        },
        {
          time: "16:00",
          title: "비칙하드 도착",
          text: "사막트래킹, 모래썰매, 낙타체험.",
        },
        {
          time: "19:00",
          title: "석식 후 휴식",
          text: "석식: 숙소 제공.",
        },
      ],
    },
    {
      id: "day3",
      day: "D3",
      date: "08.16 일",
      title: "엘승타사르하이 → 울란바토르 → 테를지",
      summary: "울란바토르 쇼핑 경유 후 테를지 국립공원에서 사원, 바위 트래킹, 승마 체험.",
      stops: [
        {
          name: "비칙하드 (Bichigt Khad Tourist Camp)",
          detail: "09:00 테를지 방향 출발",
          mapQuery: "9R88+63W Bichigt Khad, Ulaanshiveet, Bulgan, Mongolia",
        },
        {
          name: "울란바토르 캐시미어 팩토리",
          detail: "13:00 쇼핑 경유",
          mapQuery: "Gobi Cashmere Factory Store Ulaanbaatar",
        },
        {
          name: "울란바토르 국영백화점",
          detail: "13:00 쇼핑 경유",
          mapQuery: "State Department Store Ulaanbaatar Mongolia",
        },
        {
          name: "테를지 국립공원",
          detail: "15:00 도착",
          mapQuery: "Gorkhi Terelj National Park Mongolia",
        },
        {
          name: "아리아발 사원",
          detail: "사원 방문",
          mapQuery: "Aryabal Meditation Temple Mongolia",
        },
        {
          name: "거북이 바위",
          detail: "트래킹 및 승마체험",
          mapQuery: "Turtle Rock Mongolia",
        },
        {
          name: "테를지로얄 (Lodge Resort)",
          detail: "18:00 체크인",
          mapQuery: "Lodge Resort Terelj Ulaanbaatar Mongolia",
        },
      ],
      schedule: [
        {
          time: "08:00",
          title: "조식",
          text: "조식: 숙소 제공.",
        },
        {
          time: "09:00",
          title: "비칙하드에서 테를지로 이동",
          text: "울란바토르를 경유하는 이동 일정.",
        },
        {
          time: "12:00",
          title: "중식",
          text: "중식: 한식당.",
        },
        {
          time: "13:00",
          title: "울란바토르 쇼핑 경유",
          text: "캐시미어 팩토리, 국영백화점.",
        },
        {
          time: "15:00",
          title: "테를지 도착",
          text: "아리아발 사원, 거북이 바위 트래킹, 승마체험.",
        },
        {
          time: "18:00",
          title: "테를지로얄 체크인",
          text: "숙소 체크인 후 휴식.",
        },
        {
          time: "20:00",
          title: "석식",
          text: "허르헉. 석식: 숙소 제공.",
        },
      ],
    },
    {
      id: "day4",
      day: "D4",
      date: "08.17 월",
      title: "테를지 → 칭기즈 칸 마동상 → 울란바토르 숙소",
      summary: "테를지에서 액티비티와 트래킹을 즐긴 뒤 칭기즈 칸 마동상을 방문하고 울란바토르 숙소(본존호텔)로 이동.",
      stops: [
        {
          name: "테를지 국립공원",
          detail: "09:00 액티비티 및 트래킹",
          mapQuery: "Gorkhi Terelj National Park Mongolia",
        },
        {
          name: "칭기즈 칸 마동상",
          detail: "13:00 방문",
          mapQuery: "Chinggis Khaan Statue Complex Mongolia",
        },
        {
          name: "본존호텔 (Soyolj Mall)",
          detail: "15:00 숙소 체크인",
          mapQuery: "Bojon Hotel Ulaanbaatar Soyolj Mall",
        },
      ],
      schedule: [
        {
          time: "08:00",
          title: "조식",
          text: "조식: 숙소 제공.",
        },
        {
          time: "09:00",
          title: "테를지 액티비티 및 트래킹",
          text: "테를지 국립공원에서 오전 액티비티와 트래킹.",
        },
        {
          time: "12:00",
          title: "중식",
          text: "중식: 현지식당.",
        },
        {
          time: "13:00",
          title: "칭기즈 칸 마동상",
          text: "칭기즈 칸 기마상 단지 방문.",
        },
        {
          time: "15:00",
          title: "울란바토르 숙소 이동",
          text: "본존호텔(Soyolj Mall) 체크인.",
        },
        {
          time: "TO-DO",
          title: "저녁 일정 (미정)",
          text: "아직 정하지 않음 — 자유 일정 또는 저녁 식사 장소를 정해야 함.",
        },
      ],
    },
    {
      id: "day5",
      day: "D5",
      date: "08.18 화",
      title: "숙소 정리 → 공항 이동 → 귀국",
      summary: "본존호텔에서 체크아웃 후 칭기즈 칸 국제공항(약 52.5km, 차량 약 1시간~1시간 20분)으로 이동해 귀국 항공편(13:00 출발) 탑승.",
      stops: [
        {
          name: "본존호텔 (Soyolj Mall)",
          detail: "08:30 체크아웃",
          mapQuery: "Bojon Hotel Ulaanbaatar Soyolj Mall",
        },
        {
          name: "칭기즈 칸 국제공항",
          detail: "10:15 도착, 귀국 항공편",
          mapQuery: "Chinggis Khaan International Airport Mongolia",
        },
      ],
      schedule: [
        {
          time: "07:30",
          title: "기상 및 조식",
          text: "숙소에서 조식 후 짐 정리.",
        },
        {
          time: "08:30",
          title: "숙소 체크아웃",
          text: "본존호텔(Soyolj Mall) 체크아웃.",
        },
        {
          time: "09:00",
          title: "공항으로 출발",
          text: "본존호텔 → 칭기즈 칸 국제공항, 약 52.5km · 평시 1시간~1시간 20분 소요(구글맵 실시간 기준 1시간 8분). 출근 시간대 정체를 감안해 여유 있게 출발.",
        },
        {
          time: "10:15",
          title: "공항 도착",
          text: "출발 약 2시간 45분 전 도착, 수속 및 탑승 준비.",
        },
        {
          time: "13:00",
          title: "귀국 항공편 출발",
          text: "대한항공 KE2042, UBN → ICN T2.",
        },
      ],
    },
  ],
  stays: [
    {
      date: "2026.08.14",
      name: "항가이리조트",
      status: "확정",
      address: "Nomin Khangai Resort, Tsenkher, Arkhangai, Mongolia",
      mapQuery: "Nomin Khangai Resort",
      note: "온천 리조트",
    },
    {
      date: "2026.08.15",
      name: "비칙하드",
      status: "확정",
      address: "9R88+63W Bichigt Khad, 1st Bag, Ulaanshiveet, Bulgan, Mongolia",
      mapQuery: "9R88+63W Bichigt Khad, Ulaanshiveet, Bulgan, Mongolia",
      note: "사막 캠프",
    },
    {
      date: "2026.08.16 - 08.17",
      name: "테를지로얄",
      status: "확정",
      address: "Lodge Resort, Terelj, Ulaanbaatar, Mongolia",
      mapQuery: "Lodge Resort Terelj Ulaanbaatar Mongolia",
      note: "테를지 로얄 리조트",
    },
    {
      date: "2026.08.17 - 08.18",
      name: "본존호텔",
      status: "확정",
      address: "Narnii road 5-1, Soyolj Mall 11F, Ulaanbaatar 14230, Mongolia",
      mapQuery: "Bojon Hotel Ulaanbaatar Soyolj Mall",
      note: "울란바토르 시내 호텔",
    },
  ],
  packing: {
    "필수 서류": ["여권"],
    "돈 / 통신": ["트레블월렛 카드"],
    "전자기기": ["휴대폰 충전기", "보조배터리", "카메라 및 메모리카드", "이어폰", "삼각대"],
    "의류": [
      "바람막이",
      "운동화",
      "flip flop",
      "모자",
      "캠핑 모자",
      "선글라스",
      "팬티 5개",
      "양말 5개",
      "운동 반바지 2개",
      "긴바지 2개",
      "긴팔 1개",
      "반팔 티셔츠 4개",
      "민소매 2개",
      "ROKA 티셔츠 2개",
      "수영복",
    ],
    "건강 / 위생": [
      "상비약",
      "립밤",
      "물티슈 / 티슈",
      "칫솔",
      "치약",
      "클렌징 오일",
      "손 소독제",
      "모기 기피제",
      "샤워 필터",
      "마우스 피스",
      "데오드런트",
      "데일리 비타민",
      "수건 4개",
    ],
    "화장품": [
      "화장솜",
      "토너",
      "세럼 (비타C, 컨트롤)",
      "레티놀",
      "얼굴 크림",
      "폼 클렌징",
      "트리트먼트",
      "스프레이",
      "향수",
      "선크림",
      "선스틱",
    ],
    "기타": ["목베개", "물통"],
  },
};

const storageKey = "mongol2026-packing";
let activeDayIndex = 0;
let packingState = readPackingState();

function $(selector) {
  return document.querySelector(selector);
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}

function readPackingState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function savePackingState() {
  localStorage.setItem(storageKey, JSON.stringify(packingState));
}

function formatDateForDday(value) {
  return new Date(`${value}T00:00:00+09:00`);
}

function renderCountdown() {
  const today = new Date();
  const start = formatDateForDday(tripData.dates.start);
  const end = formatDateForDday(tripData.dates.end);
  const dayMs = 24 * 60 * 60 * 1000;
  const dday = Math.ceil((start - today) / dayMs);
  const untilEnd = Math.ceil((end - today) / dayMs);
  const countdown = $("#countdown");
  const detail = $("#countdownDetail");

  if (dday > 0) {
    countdown.textContent = `D-${dday}`;
    detail.textContent = "2026년 8월 14일 출발 기준";
    return;
  }

  if (untilEnd >= 0) {
    countdown.textContent = "여행 중";
    detail.textContent = "2026년 8월 18일 귀국 예정";
    return;
  }

  countdown.textContent = "다녀옴";
  detail.textContent = "여행 기록으로 보관 중";
}

const icons = {
  takeoff:
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 16h16"/><path d="M3.6 11.3l1.5-.4 2.4 1.3 3.9-1.1-4.2-4.4 1.6-.4 5.4 3.5 2.4-.6a1.3 1.3 0 01.7 2.5L5.7 14.6z"/></svg>',
  landing:
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 16h16"/><path d="M3.2 9.4l1.4.6 2 2 4 1.1-2-5.7 1.5.4 3.4 5.3 2.4.6a1.3 1.3 0 00.6-2.5L4.4 5.9z"/></svg>',
  plane:
    '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M18.4 9.2L12 7.6 8.2 2.3a.7.7 0 00-.6-.3H6.2c-.4 0-.7.4-.6.8L7.1 7.1 3.5 6.2 2.4 4.5a.6.6 0 00-.5-.3h-.7c-.4 0-.6.3-.5.7l1 4.9c0 .1 0 .3 0 .4l-1 4.9c-.1.4.1.7.5.7h.7c.2 0 .4-.1.5-.3l1.1-1.7 3.6-.9-1.5 4.3c-.1.4.2.8.6.8h1.4c.2 0 .5-.1.6-.3l3.8-5.3 6.4-1.6a.9.9 0 000-1.6z"/></svg>',
  bed:
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 15V6"/><path d="M2.5 11.5h15V15"/><path d="M17.5 11.5V9.2a1.7 1.7 0 00-1.7-1.7H9.5v4"/><circle cx="6" cy="9.4" r="1.6"/></svg>',
};

const packingIcons = {
  "필수 서류":
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 2.5h7l3.2 3.2V17a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5z"/><path d="M11.7 2.7v3.3H15"/><path d="M7.3 11h5.4M7.3 13.7h3.6"/></svg>',
  "돈 / 통신":
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2.2" y="5" width="15.6" height="10" rx="1.8"/><path d="M2.2 8.4h15.6"/><path d="M5.4 12.2h2.8"/></svg>',
  "전자기기":
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="1.8" width="8" height="16.4" rx="2"/><path d="M8.8 15.6h2.4"/></svg>',
  "의류":
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7.6 2.6L3 5.1l1.5 3.2 1.6-.7V17h7.8V7.6l1.6.7L17 5.1l-4.6-2.5a2.5 2.5 0 01-4.8 0z"/></svg>',
  "건강 / 위생":
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17.2S3.3 13 3.3 8.3a3.8 3.8 0 016.7-2.4 3.8 3.8 0 016.7 2.4c0 4.7-6.7 8.9-6.7 8.9z"/></svg>',
  "화장품":
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7.6 7.4h4.8a1.6 1.6 0 011.6 1.7l-.5 7.2a1.2 1.2 0 01-1.2 1.1H7.7a1.2 1.2 0 01-1.2-1.1L6 9.1a1.6 1.6 0 011.6-1.7z"/><path d="M8.4 7.4V4.2a1.6 1.6 0 013.2 0v3.2"/></svg>',
  "기타":
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="6.2" width="15" height="10.3" rx="2"/><path d="M7.2 6.2V4.6a1.6 1.6 0 011.6-1.6h2.4a1.6 1.6 0 011.6 1.6v1.6"/><path d="M2.5 10.6h15"/></svg>',
};

function splitArrow(value) {
  return String(value)
    .split("→")
    .map((part) => part.trim());
}

function renderTickets() {
  const grid = $("#ticketGrid");
  grid.innerHTML = "";

  tripData.tickets.forEach((ticket, index) => {
    const [origin = "", destination = ""] = splitArrow(ticket.route);
    const [departure = "", arrivalRaw = ""] = splitArrow(ticket.time);
    const durationMatch = arrivalRaw.match(/\(([^)]+)\)/);
    const duration = durationMatch ? durationMatch[1] : "";
    const arrival = arrivalRaw.replace(/\s*\([^)]*\)\s*/, "").trim();
    const isOutbound = index === 0;

    const card = createElement("article", "ticket-card");
    card.setAttribute("data-reveal", "");
    card.innerHTML = `
      <div class="ticket-head">
        <span class="ticket-label">
          ${isOutbound ? icons.takeoff : icons.landing}
          ${ticket.label}
          <span class="ticket-date">${ticket.date}</span>
        </span>
        <span class="status-chip">${ticket.status}</span>
      </div>
      <div class="ticket-body">
        <div class="ticket-port">
          <strong>${origin}</strong>
          <span>${departure}</span>
        </div>
        <div class="ticket-path">
          <span class="ticket-duration">${duration}</span>
          <span class="ticket-line"></span>
          ${icons.plane}
        </div>
        <div class="ticket-port is-end">
          <strong>${destination}</strong>
          <span>${arrival}</span>
        </div>
      </div>
      <p class="ticket-note">${ticket.note}</p>
    `;

    grid.append(card);
  });
}

function buildDirectionsUrl(stops) {
  const places = stops.filter((stop) => stop.mapQuery);

  if (places.length < 2) {
    const query = encodeURIComponent(places[0]?.mapQuery || "Mongolia");
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  }

  const origin = encodeURIComponent(places[0].mapQuery);
  const destination = encodeURIComponent(places[places.length - 1].mapQuery);
  const middle = places.slice(1, -1).map((stop) => stop.mapQuery).join("|");
  const waypoints = middle ? `&waypoints=${encodeURIComponent(middle)}` : "";

  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}${waypoints}&travelmode=driving`;
}

function buildMapEmbedUrl(stops) {
  const places = stops.filter((stop) => stop.mapQuery);
  const query = places.length > 1
    ? places.map((stop) => stop.mapQuery).join(" to ")
    : places[0]?.mapQuery || "Mongolia";

  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

function renderDayTabs() {
  const tabs = $("#dayTabs");
  tabs.innerHTML = "";

  tripData.days.forEach((day, index) => {
    const tab = document.createElement("button");
    tab.className = "day-tab";
    tab.type = "button";
    tab.role = "tab";
    tab.setAttribute("aria-selected", String(index === activeDayIndex));
    tab.innerHTML = `<strong>${day.day}</strong><span>${day.date}</span>`;
    tab.addEventListener("click", () => {
      activeDayIndex = index;
      renderDailyPlan();
    });
    tabs.append(tab);
  });
}

function renderDailyPlan() {
  const day = tripData.days[activeDayIndex];

  renderDayTabs();
  $("#activeDayDate").textContent = day.date;
  $("#activeDayTitle").textContent = day.title;
  $("#activeDaySummary").textContent = day.summary;
  $("#directionsLink").href = buildDirectionsUrl(day.stops);
  $("#routeMap").src = buildMapEmbedUrl(day.stops);

  const timeline = $("#dayTimeline");
  timeline.innerHTML = "";
  day.schedule.forEach((item) => {
    const row = document.createElement("li");
    if (item.time === "TO-DO") {
      row.className = "is-todo";
    }
    row.innerHTML = `
      <time>${item.time}</time>
      <div>
        <h4>${item.title}</h4>
        <p>${item.text}</p>
      </div>
    `;
    timeline.append(row);
  });

  const routeList = $("#routeList");
  routeList.innerHTML = "";
  day.stops.forEach((stop, index) => {
    const stopRow = createElement("div", "route-stop");
    stopRow.innerHTML = `
      <span class="route-number">${index + 1}</span>
      <div>
        <strong>${stop.name}</strong>
        <span>${stop.detail}</span>
      </div>
    `;
    routeList.append(stopRow);
  });
}

function renderStays() {
  const list = $("#stayList");
  list.innerHTML = "";

  tripData.stays.forEach((stay) => {
    const item = createElement("article", "stay-item");
    item.setAttribute("data-reveal", "");
    const date = createElement("div", "stay-date");
    date.innerHTML = `${icons.bed}<span>${stay.date}</span>`;
    const detail = createElement("div");
    const titleLine = createElement("div", "stay-topline");
    const title = createElement("h3", "", stay.name);
    const chip = createElement("span", "status-chip", stay.status);
    const address = createElement("p", "stay-address", stay.address);
    const note = createElement("p", "muted", stay.note);
    const link = createElement("a", "button subtle", "지도 열기");

    link.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stay.mapQuery)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    titleLine.append(title, chip);
    detail.append(titleLine, address, note);
    item.append(date, detail, link);
    list.append(item);
  });
}

function getPackingItems() {
  return Object.entries(tripData.packing).flatMap(([category, items]) =>
    items.map((item) => ({ category, item, id: `${category}:${item}` })),
  );
}

function renderPacking() {
  const grid = $("#packingGrid");
  grid.innerHTML = "";

  Object.entries(tripData.packing).forEach(([category, items]) => {
    const card = createElement("article", "packing-card");
    card.setAttribute("data-reveal", "");
    const title = createElement("h3", "");
    title.innerHTML = `<span class="packing-icon">${packingIcons[category] || packingIcons["기타"]}</span>${category}`;
    const list = document.createElement("ul");

    items.forEach((item) => {
      const id = `${category}:${item}`;
      const li = document.createElement("li");
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      const text = createElement("span", "", item);

      checkbox.type = "checkbox";
      checkbox.checked = Boolean(packingState[id]);
      checkbox.addEventListener("change", () => {
        packingState[id] = checkbox.checked;
        savePackingState();
        updatePackingProgress();
      });

      label.append(checkbox, text);
      li.append(label);
      list.append(li);
    });

    card.append(title, list);
    grid.append(card);
  });

  updatePackingProgress();
}

function updatePackingProgress() {
  const items = getPackingItems();
  const done = items.filter(({ id }) => packingState[id]).length;
  const total = items.length;
  const percentage = total ? Math.round((done / total) * 100) : 0;

  $("#packingProgressText").textContent = `${done} / ${total} 완료`;
  $("#packingProgressBar").style.width = `${percentage}%`;
}

function resetPacking() {
  packingState = {};
  savePackingState();
  renderPacking();
  observeReveals();
}

/* ---- presentation behaviour ---- */

let revealObserver = null;

function observeReveals() {
  const targets = document.querySelectorAll("[data-reveal]:not(.is-visible)");

  if (!("IntersectionObserver" in window)) {
    targets.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (!entry.isIntersecting) {
            return;
          }
          const delay = Math.min(index, 5) * 70;
          setTimeout(() => entry.target.classList.add("is-visible"), delay);
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
  }

  targets.forEach((node) => revealObserver.observe(node));
}

function watchScroll() {
  const topbar = $("#topbar");
  const setState = () => {
    topbar.classList.toggle("is-scrolled", window.scrollY > 40);
  };

  setState();
  window.addEventListener("scroll", setState, { passive: true });
}

function init() {
  renderCountdown();
  renderTickets();
  renderDailyPlan();
  renderStays();
  renderPacking();
  $("#resetPacking").addEventListener("click", resetPacking);
  watchScroll();
  observeReveals();
}

init();

