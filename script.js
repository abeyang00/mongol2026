const tripData = {
  name: "Abe and Sung Mongol Trip 26'",
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
          name: "청헤르 온천",
          detail: "14:00 도착, 온천 후 휴식",
          mapQuery: "Tsenkher Hot Spring Mongolia",
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
          title: "청헤르 도착",
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
          name: "청헤르 온천",
          detail: "08:00 조식 후 출발 준비",
          mapQuery: "Tsenkher Hot Spring Mongolia",
        },
        {
          name: "엘승타사르하이",
          detail: "16:00 도착, 사막 액티비티",
          mapQuery: "Elsen Tasarkhai Sand Dunes Mongolia",
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
          title: "엘승타사르하이 도착",
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
          name: "엘승타사르하이",
          detail: "09:00 테를지 방향 출발",
          mapQuery: "Elsen Tasarkhai Sand Dunes Mongolia",
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
      ],
      schedule: [
        {
          time: "08:00",
          title: "조식",
          text: "조식: 숙소 제공.",
        },
        {
          time: "09:00",
          title: "엘승타사르하이에서 테를지로 이동",
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
      title: "세부 계획 입력 대기",
      summary: "마지막 풀데이 일정과 숙소 복귀 동선을 정리합니다.",
      stops: [
        {
          name: "Mongolia",
          detail: "자료 대기",
          mapQuery: "Mongolia",
        },
      ],
      schedule: [
        {
          time: "종일",
          title: "일정 자료 반영 예정",
          text: "방문지별 예상 체류 시간과 이동 수단을 추가합니다.",
        },
      ],
    },
    {
      id: "day5",
      day: "D5",
      date: "08.18 화",
      title: "귀국",
      summary: "귀국 항공편 시간 기준으로 체크아웃, 공항 이동, 식사 일정을 맞춥니다.",
      stops: [
        {
          name: "울란바토르 숙소",
          detail: "숙소 자료 첨부 후 주소 확정",
          mapQuery: "Ulaanbaatar Mongolia",
        },
        {
          name: "칭기즈 칸 국제공항",
          detail: "귀국 항공편",
          mapQuery: "Chinggis Khaan International Airport Mongolia",
        },
      ],
      schedule: [
        {
          time: "체크아웃",
          title: "숙소 정리",
          text: "숙소 체크아웃 시간과 짐 보관 가능 여부를 반영합니다.",
        },
        {
          time: "항공권 시간",
          title: "공항 이동 및 귀국",
          text: "귀국 항공편 시간에 맞춰 출발 시간을 계산합니다.",
        },
      ],
    },
  ],
  stays: [
    {
      date: "2026.08.14 - 08.18",
      name: "숙소 자료 첨부 대기",
      status: "미확정",
      address: "주소를 넣으면 Google Maps 링크가 연결됩니다.",
      mapQuery: "Ulaanbaatar Mongolia",
      note: "예약번호, 체크인/체크아웃, 조식, 공항 이동 정보를 정리할 예정입니다.",
    },
  ],
  packing: {
    "필수 서류": ["여권", "항공권 e-ticket", "숙소 예약 확인서", "여행자보험", "비상 연락처"],
    "돈 / 통신": ["해외 사용 카드", "현금 및 환전 계획", "eSIM 또는 로밍", "오프라인 지도", "번역 앱"],
    "전자기기": ["휴대폰 충전기", "보조배터리", "멀티 어댑터", "카메라 및 메모리카드", "이어폰"],
    "의류": ["바람막이", "긴팔 상의", "편한 바지", "걷기 좋은 신발", "모자와 선글라스"],
    "건강 / 위생": ["상비약", "선크림", "립밤", "물티슈", "개인 세면도구"],
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

function renderTickets() {
  const grid = $("#ticketGrid");
  grid.innerHTML = "";

  tripData.tickets.forEach((ticket) => {
    const card = createElement("article", "ticket-card");
    const top = createElement("div", "ticket-topline");
    const title = createElement("h3", "", ticket.label);
    const status = createElement("span", "status-chip", ticket.status);
    top.append(title, status);

    const route = createElement("p", "ticket-route", ticket.route);
    const details = createElement("ul", "detail-list");
    details.innerHTML = `
      <li><strong>날짜</strong> ${ticket.date}</li>
      <li><strong>시간</strong> ${ticket.time}</li>
      <li>${ticket.note}</li>
    `;

    card.append(top, route, details);
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
    const date = createElement("div", "stay-date", stay.date);
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
    const title = createElement("h3", "", category);
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
}

function init() {
  renderCountdown();
  renderTickets();
  renderDailyPlan();
  renderStays();
  renderPacking();
  $("#resetPacking").addEventListener("click", resetPacking);
}

init();
