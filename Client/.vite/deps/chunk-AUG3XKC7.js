// node_modules/.pnpm/@internationalized+date@3.5.4/node_modules/@internationalized/date/dist/utils.mjs
function $2b4dce13dd5a17fa$export$842a2cf37af977e1(amount, numerator) {
  return amount - numerator * Math.floor(amount / numerator);
}

// node_modules/.pnpm/@internationalized+date@3.5.4/node_modules/@internationalized/date/dist/GregorianCalendar.mjs
var $3b62074eb05584b2$var$EPOCH = 1721426;
function $3b62074eb05584b2$export$f297eb839006d339(era, year, month, day) {
  year = $3b62074eb05584b2$export$c36e0ecb2d4fa69d(era, year);
  let y1 = year - 1;
  let monthOffset = -2;
  if (month <= 2)
    monthOffset = 0;
  else if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year))
    monthOffset = -1;
  return $3b62074eb05584b2$var$EPOCH - 1 + 365 * y1 + Math.floor(y1 / 4) - Math.floor(y1 / 100) + Math.floor(y1 / 400) + Math.floor((367 * month - 362) / 12 + monthOffset + day);
}
function $3b62074eb05584b2$export$553d7fa8e3805fc0(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function $3b62074eb05584b2$export$c36e0ecb2d4fa69d(era, year) {
  return era === "BC" ? 1 - year : year;
}
function $3b62074eb05584b2$export$4475b7e617eb123c(year) {
  let era = "AD";
  if (year <= 0) {
    era = "BC";
    year = 1 - year;
  }
  return [
    era,
    year
  ];
}
var $3b62074eb05584b2$var$daysInMonth = {
  standard: [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ],
  leapyear: [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ]
};
var $3b62074eb05584b2$export$80ee6245ec4f29ec = class {
  fromJulianDay(jd) {
    let jd0 = jd;
    let depoch = jd0 - $3b62074eb05584b2$var$EPOCH;
    let quadricent = Math.floor(depoch / 146097);
    let dqc = (0, $2b4dce13dd5a17fa$export$842a2cf37af977e1)(depoch, 146097);
    let cent = Math.floor(dqc / 36524);
    let dcent = (0, $2b4dce13dd5a17fa$export$842a2cf37af977e1)(dqc, 36524);
    let quad = Math.floor(dcent / 1461);
    let dquad = (0, $2b4dce13dd5a17fa$export$842a2cf37af977e1)(dcent, 1461);
    let yindex = Math.floor(dquad / 365);
    let extendedYear = quadricent * 400 + cent * 100 + quad * 4 + yindex + (cent !== 4 && yindex !== 4 ? 1 : 0);
    let [era, year] = $3b62074eb05584b2$export$4475b7e617eb123c(extendedYear);
    let yearDay = jd0 - $3b62074eb05584b2$export$f297eb839006d339(era, year, 1, 1);
    let leapAdj = 2;
    if (jd0 < $3b62074eb05584b2$export$f297eb839006d339(era, year, 3, 1))
      leapAdj = 0;
    else if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year))
      leapAdj = 1;
    let month = Math.floor(((yearDay + leapAdj) * 12 + 373) / 367);
    let day = jd0 - $3b62074eb05584b2$export$f297eb839006d339(era, year, month, 1) + 1;
    return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(era, year, month, day);
  }
  toJulianDay(date) {
    return $3b62074eb05584b2$export$f297eb839006d339(date.era, date.year, date.month, date.day);
  }
  getDaysInMonth(date) {
    return $3b62074eb05584b2$var$daysInMonth[$3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? "leapyear" : "standard"][date.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(date) {
    return 12;
  }
  getDaysInYear(date) {
    return $3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? 366 : 365;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearsInEra(date) {
    return 9999;
  }
  getEras() {
    return [
      "BC",
      "AD"
    ];
  }
  isInverseEra(date) {
    return date.era === "BC";
  }
  balanceDate(date) {
    if (date.year <= 0) {
      date.era = date.era === "BC" ? "AD" : "BC";
      date.year = 1 - date.year;
    }
  }
  constructor() {
    this.identifier = "gregory";
  }
};

// node_modules/.pnpm/@internationalized+date@3.5.4/node_modules/@internationalized/date/dist/weekStartData.mjs
var $2fe286d2fb449abb$export$7a5acbd77d414bd9 = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BY: 1,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  HR: 1,
  HU: 1,
  IE: 1,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JO: 6,
  KG: 1,
  KW: 6,
  KZ: 1,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MK: 1,
  MN: 1,
  MQ: 1,
  MV: 5,
  MY: 1,
  NL: 1,
  NO: 1,
  NZ: 1,
  OM: 6,
  PL: 1,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SD: 6,
  SE: 1,
  SI: 1,
  SK: 1,
  SM: 1,
  SY: 6,
  TJ: 1,
  TM: 1,
  TR: 1,
  UA: 1,
  UY: 1,
  UZ: 1,
  VA: 1,
  VN: 1,
  XK: 1
};

// node_modules/.pnpm/@internationalized+date@3.5.4/node_modules/@internationalized/date/dist/queries.mjs
function $14e0f24ef4ac5c92$export$ea39ec197993aef0(a, b) {
  b = (0, $11d87f3f76e88657$export$b4a036af3fc0b032)(b, a.calendar);
  return a.era === b.era && a.year === b.year && a.month === b.month && a.day === b.day;
}
function $14e0f24ef4ac5c92$export$a18c89cbd24170ff(a, b) {
  b = (0, $11d87f3f76e88657$export$b4a036af3fc0b032)(b, a.calendar);
  a = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(a);
  b = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(b);
  return a.era === b.era && a.year === b.year && a.month === b.month;
}
function $14e0f24ef4ac5c92$export$5841f9eb9773f25f(a, b) {
  b = (0, $11d87f3f76e88657$export$b4a036af3fc0b032)(b, a.calendar);
  a = $14e0f24ef4ac5c92$export$f91e89d3d0406102(a);
  b = $14e0f24ef4ac5c92$export$f91e89d3d0406102(b);
  return a.era === b.era && a.year === b.year;
}
function $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(a, b) {
  return a.calendar.identifier === b.calendar.identifier && a.era === b.era && a.year === b.year && a.month === b.month && a.day === b.day;
}
function $14e0f24ef4ac5c92$export$5a8da0c44a3afdf2(a, b) {
  a = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(a);
  b = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(b);
  return a.calendar.identifier === b.calendar.identifier && a.era === b.era && a.year === b.year && a.month === b.month;
}
function $14e0f24ef4ac5c92$export$ea840f5a6dda8147(a, b) {
  a = $14e0f24ef4ac5c92$export$f91e89d3d0406102(a);
  b = $14e0f24ef4ac5c92$export$f91e89d3d0406102(b);
  return a.calendar.identifier === b.calendar.identifier && a.era === b.era && a.year === b.year;
}
function $14e0f24ef4ac5c92$export$629b0a497aa65267(date, timeZone) {
  return $14e0f24ef4ac5c92$export$ea39ec197993aef0(date, $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3(timeZone));
}
function $14e0f24ef4ac5c92$export$2061056d06d7cdf7(date, locale) {
  let julian = date.calendar.toJulianDay(date);
  let dayOfWeek = Math.ceil(julian + 1 - $14e0f24ef4ac5c92$var$getWeekStart(locale)) % 7;
  if (dayOfWeek < 0)
    dayOfWeek += 7;
  return dayOfWeek;
}
function $14e0f24ef4ac5c92$export$461939dd4422153(timeZone) {
  return (0, $11d87f3f76e88657$export$1b96692a1ba042ac)(Date.now(), timeZone);
}
function $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3(timeZone) {
  return (0, $11d87f3f76e88657$export$93522d1a439f3617)($14e0f24ef4ac5c92$export$461939dd4422153(timeZone));
}
function $14e0f24ef4ac5c92$export$68781ddf31c0090f(a, b) {
  return a.calendar.toJulianDay(a) - b.calendar.toJulianDay(b);
}
function $14e0f24ef4ac5c92$export$c19a80a9721b80f6(a, b) {
  return $14e0f24ef4ac5c92$var$timeToMs(a) - $14e0f24ef4ac5c92$var$timeToMs(b);
}
function $14e0f24ef4ac5c92$var$timeToMs(a) {
  return a.hour * 36e5 + a.minute * 6e4 + a.second * 1e3 + a.millisecond;
}
function $14e0f24ef4ac5c92$export$126c91c941de7e(a, timeZone) {
  let ms = (0, $11d87f3f76e88657$export$5107c82f94518f5c)(a, timeZone);
  let tomorrow = a.add({
    days: 1
  });
  let tomorrowMs = (0, $11d87f3f76e88657$export$5107c82f94518f5c)(tomorrow, timeZone);
  return (tomorrowMs - ms) / 36e5;
}
var $14e0f24ef4ac5c92$var$localTimeZone = null;
function $14e0f24ef4ac5c92$export$aa8b41735afcabd2() {
  if ($14e0f24ef4ac5c92$var$localTimeZone == null)
    $14e0f24ef4ac5c92$var$localTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
  return $14e0f24ef4ac5c92$var$localTimeZone;
}
function $14e0f24ef4ac5c92$export$a5a3b454ada2268e(date) {
  return date.subtract({
    days: date.day - 1
  });
}
function $14e0f24ef4ac5c92$export$a2258d9c4118825c(date) {
  return date.add({
    days: date.calendar.getDaysInMonth(date) - date.day
  });
}
function $14e0f24ef4ac5c92$export$f91e89d3d0406102(date) {
  return $14e0f24ef4ac5c92$export$a5a3b454ada2268e(date.subtract({
    months: date.month - 1
  }));
}
function $14e0f24ef4ac5c92$export$8b7aa55c66d5569e(date) {
  return $14e0f24ef4ac5c92$export$a2258d9c4118825c(date.add({
    months: date.calendar.getMonthsInYear(date) - date.month
  }));
}
function $14e0f24ef4ac5c92$export$5412ac11713b72ad(date) {
  if (date.calendar.getMinimumMonthInYear)
    return date.calendar.getMinimumMonthInYear(date);
  return 1;
}
function $14e0f24ef4ac5c92$export$b2f4953d301981d5(date) {
  if (date.calendar.getMinimumDayInMonth)
    return date.calendar.getMinimumDayInMonth(date);
  return 1;
}
function $14e0f24ef4ac5c92$export$42c81a444fbfb5d4(date, locale) {
  let dayOfWeek = $14e0f24ef4ac5c92$export$2061056d06d7cdf7(date, locale);
  return date.subtract({
    days: dayOfWeek
  });
}
function $14e0f24ef4ac5c92$export$ef8b6d9133084f4e(date, locale) {
  return $14e0f24ef4ac5c92$export$42c81a444fbfb5d4(date, locale).add({
    days: 6
  });
}
var $14e0f24ef4ac5c92$var$cachedRegions = /* @__PURE__ */ new Map();
function $14e0f24ef4ac5c92$var$getRegion(locale) {
  if (Intl.Locale) {
    let region = $14e0f24ef4ac5c92$var$cachedRegions.get(locale);
    if (!region) {
      region = new Intl.Locale(locale).maximize().region;
      if (region)
        $14e0f24ef4ac5c92$var$cachedRegions.set(locale, region);
    }
    return region;
  }
  let part = locale.split("-")[1];
  return part === "u" ? void 0 : part;
}
function $14e0f24ef4ac5c92$var$getWeekStart(locale) {
  let region = $14e0f24ef4ac5c92$var$getRegion(locale);
  return region ? (0, $2fe286d2fb449abb$export$7a5acbd77d414bd9)[region] || 0 : 0;
}
function $14e0f24ef4ac5c92$export$ccc1b2479e7dd654(date, locale) {
  let days = date.calendar.getDaysInMonth(date);
  return Math.ceil(($14e0f24ef4ac5c92$export$2061056d06d7cdf7($14e0f24ef4ac5c92$export$a5a3b454ada2268e(date), locale) + days) / 7);
}
function $14e0f24ef4ac5c92$export$5c333a116e949cdd(a, b) {
  if (a && b)
    return a.compare(b) <= 0 ? a : b;
  return a || b;
}
function $14e0f24ef4ac5c92$export$a75f2bff57811055(a, b) {
  if (a && b)
    return a.compare(b) >= 0 ? a : b;
  return a || b;
}
var $14e0f24ef4ac5c92$var$WEEKEND_DATA = {
  AF: [
    4,
    5
  ],
  AE: [
    5,
    6
  ],
  BH: [
    5,
    6
  ],
  DZ: [
    5,
    6
  ],
  EG: [
    5,
    6
  ],
  IL: [
    5,
    6
  ],
  IQ: [
    5,
    6
  ],
  IR: [
    5,
    5
  ],
  JO: [
    5,
    6
  ],
  KW: [
    5,
    6
  ],
  LY: [
    5,
    6
  ],
  OM: [
    5,
    6
  ],
  QA: [
    5,
    6
  ],
  SA: [
    5,
    6
  ],
  SD: [
    5,
    6
  ],
  SY: [
    5,
    6
  ],
  YE: [
    5,
    6
  ]
};
function $14e0f24ef4ac5c92$export$618d60ea299da42(date, locale) {
  let julian = date.calendar.toJulianDay(date);
  let dayOfWeek = Math.ceil(julian + 1) % 7;
  if (dayOfWeek < 0)
    dayOfWeek += 7;
  let region = $14e0f24ef4ac5c92$var$getRegion(locale);
  let [start, end] = $14e0f24ef4ac5c92$var$WEEKEND_DATA[region] || [
    6,
    0
  ];
  return dayOfWeek === start || dayOfWeek === end;
}
function $14e0f24ef4ac5c92$export$ee9d87258e1d19ed(date, locale) {
  return !$14e0f24ef4ac5c92$export$618d60ea299da42(date, locale);
}

// node_modules/.pnpm/@internationalized+date@3.5.4/node_modules/@internationalized/date/dist/conversion.mjs
function $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) {
  date = $11d87f3f76e88657$export$b4a036af3fc0b032(date, new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)());
  let year = (0, $3b62074eb05584b2$export$c36e0ecb2d4fa69d)(date.era, date.year);
  return $11d87f3f76e88657$var$epochFromParts(year, date.month, date.day, date.hour, date.minute, date.second, date.millisecond);
}
function $11d87f3f76e88657$var$epochFromParts(year, month, day, hour, minute, second, millisecond) {
  let date = /* @__PURE__ */ new Date();
  date.setUTCHours(hour, minute, second, millisecond);
  date.setUTCFullYear(year, month - 1, day);
  return date.getTime();
}
function $11d87f3f76e88657$export$59c99f3515d3493f(ms, timeZone) {
  if (timeZone === "UTC")
    return 0;
  if (ms > 0 && timeZone === (0, $14e0f24ef4ac5c92$export$aa8b41735afcabd2)())
    return new Date(ms).getTimezoneOffset() * -6e4;
  let { year, month, day, hour, minute, second } = $11d87f3f76e88657$var$getTimeZoneParts(ms, timeZone);
  let utc = $11d87f3f76e88657$var$epochFromParts(year, month, day, hour, minute, second, 0);
  return utc - Math.floor(ms / 1e3) * 1e3;
}
var $11d87f3f76e88657$var$formattersByTimeZone = /* @__PURE__ */ new Map();
function $11d87f3f76e88657$var$getTimeZoneParts(ms, timeZone) {
  let formatter = $11d87f3f76e88657$var$formattersByTimeZone.get(timeZone);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour12: false,
      era: "short",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
    $11d87f3f76e88657$var$formattersByTimeZone.set(timeZone, formatter);
  }
  let parts = formatter.formatToParts(new Date(ms));
  let namedParts = {};
  for (let part of parts)
    if (part.type !== "literal")
      namedParts[part.type] = part.value;
  return {
    // Firefox returns B instead of BC... https://bugzilla.mozilla.org/show_bug.cgi?id=1752253
    year: namedParts.era === "BC" || namedParts.era === "B" ? -namedParts.year + 1 : +namedParts.year,
    month: +namedParts.month,
    day: +namedParts.day,
    hour: namedParts.hour === "24" ? 0 : +namedParts.hour,
    minute: +namedParts.minute,
    second: +namedParts.second
  };
}
var $11d87f3f76e88657$var$DAYMILLIS = 864e5;
function $11d87f3f76e88657$export$136f38efe7caf549(date, timeZone) {
  let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date);
  let earlier = ms - $11d87f3f76e88657$export$59c99f3515d3493f(ms - $11d87f3f76e88657$var$DAYMILLIS, timeZone);
  let later = ms - $11d87f3f76e88657$export$59c99f3515d3493f(ms + $11d87f3f76e88657$var$DAYMILLIS, timeZone);
  return $11d87f3f76e88657$var$getValidWallTimes(date, timeZone, earlier, later);
}
function $11d87f3f76e88657$var$getValidWallTimes(date, timeZone, earlier, later) {
  let found = earlier === later ? [
    earlier
  ] : [
    earlier,
    later
  ];
  return found.filter((absolute) => $11d87f3f76e88657$var$isValidWallTime(date, timeZone, absolute));
}
function $11d87f3f76e88657$var$isValidWallTime(date, timeZone, absolute) {
  let parts = $11d87f3f76e88657$var$getTimeZoneParts(absolute, timeZone);
  return date.year === parts.year && date.month === parts.month && date.day === parts.day && date.hour === parts.hour && date.minute === parts.minute && date.second === parts.second;
}
function $11d87f3f76e88657$export$5107c82f94518f5c(date, timeZone, disambiguation = "compatible") {
  let dateTime = $11d87f3f76e88657$export$b21e0b124e224484(date);
  if (timeZone === "UTC")
    return $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime);
  if (timeZone === (0, $14e0f24ef4ac5c92$export$aa8b41735afcabd2)() && disambiguation === "compatible") {
    dateTime = $11d87f3f76e88657$export$b4a036af3fc0b032(dateTime, new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)());
    let date2 = /* @__PURE__ */ new Date();
    let year = (0, $3b62074eb05584b2$export$c36e0ecb2d4fa69d)(dateTime.era, dateTime.year);
    date2.setFullYear(year, dateTime.month - 1, dateTime.day);
    date2.setHours(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
    return date2.getTime();
  }
  let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime);
  let offsetBefore = $11d87f3f76e88657$export$59c99f3515d3493f(ms - $11d87f3f76e88657$var$DAYMILLIS, timeZone);
  let offsetAfter = $11d87f3f76e88657$export$59c99f3515d3493f(ms + $11d87f3f76e88657$var$DAYMILLIS, timeZone);
  let valid = $11d87f3f76e88657$var$getValidWallTimes(dateTime, timeZone, ms - offsetBefore, ms - offsetAfter);
  if (valid.length === 1)
    return valid[0];
  if (valid.length > 1)
    switch (disambiguation) {
      case "compatible":
      case "earlier":
        return valid[0];
      case "later":
        return valid[valid.length - 1];
      case "reject":
        throw new RangeError("Multiple possible absolute times found");
    }
  switch (disambiguation) {
    case "earlier":
      return Math.min(ms - offsetBefore, ms - offsetAfter);
    case "compatible":
    case "later":
      return Math.max(ms - offsetBefore, ms - offsetAfter);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function $11d87f3f76e88657$export$e67a095c620b86fe(dateTime, timeZone, disambiguation = "compatible") {
  return new Date($11d87f3f76e88657$export$5107c82f94518f5c(dateTime, timeZone, disambiguation));
}
function $11d87f3f76e88657$export$1b96692a1ba042ac(ms, timeZone) {
  let offset = $11d87f3f76e88657$export$59c99f3515d3493f(ms, timeZone);
  let date = new Date(ms + offset);
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();
  let hour = date.getUTCHours();
  let minute = date.getUTCMinutes();
  let second = date.getUTCSeconds();
  let millisecond = date.getUTCMilliseconds();
  return new (0, $35ea8db9cb2ccb90$export$d3b7288e7994edea)(year, month, day, timeZone, offset, hour, minute, second, millisecond);
}
function $11d87f3f76e88657$export$e57ff100d91bd4b9(date, timeZone) {
  return $11d87f3f76e88657$export$1b96692a1ba042ac(date.getTime(), timeZone);
}
function $11d87f3f76e88657$export$93522d1a439f3617(dateTime) {
  return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(dateTime.calendar, dateTime.era, dateTime.year, dateTime.month, dateTime.day);
}
function $11d87f3f76e88657$export$b21e0b124e224484(date, time) {
  let hour = 0, minute = 0, second = 0, millisecond = 0;
  if ("timeZone" in date)
    ({ hour, minute, second, millisecond } = date);
  else if ("hour" in date && !time)
    return date;
  if (time)
    ({ hour, minute, second, millisecond } = time);
  return new (0, $35ea8db9cb2ccb90$export$ca871e8dbb80966f)(date.calendar, date.era, date.year, date.month, date.day, hour, minute, second, millisecond);
}
function $11d87f3f76e88657$export$d33f79e3ffc3dc83(dateTime) {
  return new (0, $35ea8db9cb2ccb90$export$680ea196effce5f)(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
}
function $11d87f3f76e88657$export$b4a036af3fc0b032(date, calendar) {
  if (date.calendar.identifier === calendar.identifier)
    return date;
  let calendarDate = calendar.fromJulianDay(date.calendar.toJulianDay(date));
  let copy = date.copy();
  copy.calendar = calendar;
  copy.era = calendarDate.era;
  copy.year = calendarDate.year;
  copy.month = calendarDate.month;
  copy.day = calendarDate.day;
  (0, $735220c2d4774dd3$export$c4e2ecac49351ef2)(copy);
  return copy;
}
function $11d87f3f76e88657$export$84c95a83c799e074(date, timeZone, disambiguation) {
  if (date instanceof (0, $35ea8db9cb2ccb90$export$d3b7288e7994edea)) {
    if (date.timeZone === timeZone)
      return date;
    return $11d87f3f76e88657$export$538b00033cc11c75(date, timeZone);
  }
  let ms = $11d87f3f76e88657$export$5107c82f94518f5c(date, timeZone, disambiguation);
  return $11d87f3f76e88657$export$1b96692a1ba042ac(ms, timeZone);
}
function $11d87f3f76e88657$export$83aac07b4c37b25(date) {
  let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) - date.offset;
  return new Date(ms);
}
function $11d87f3f76e88657$export$538b00033cc11c75(date, timeZone) {
  let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) - date.offset;
  return $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$1b96692a1ba042ac(ms, timeZone), date.calendar);
}
function $11d87f3f76e88657$export$d9b67bc93c097491(date) {
  return $11d87f3f76e88657$export$538b00033cc11c75(date, (0, $14e0f24ef4ac5c92$export$aa8b41735afcabd2)());
}

// node_modules/.pnpm/@internationalized+date@3.5.4/node_modules/@internationalized/date/dist/manipulation.mjs
var $735220c2d4774dd3$var$ONE_HOUR = 36e5;
function $735220c2d4774dd3$export$e16d8520af44a096(date, duration) {
  let mutableDate = date.copy();
  let days = "hour" in mutableDate ? $735220c2d4774dd3$var$addTimeFields(mutableDate, duration) : 0;
  $735220c2d4774dd3$var$addYears(mutableDate, duration.years || 0);
  if (mutableDate.calendar.balanceYearMonth)
    mutableDate.calendar.balanceYearMonth(mutableDate, date);
  mutableDate.month += duration.months || 0;
  $735220c2d4774dd3$var$balanceYearMonth(mutableDate);
  $735220c2d4774dd3$var$constrainMonthDay(mutableDate);
  mutableDate.day += (duration.weeks || 0) * 7;
  mutableDate.day += duration.days || 0;
  mutableDate.day += days;
  $735220c2d4774dd3$var$balanceDay(mutableDate);
  if (mutableDate.calendar.balanceDate)
    mutableDate.calendar.balanceDate(mutableDate);
  if (mutableDate.year < 1) {
    mutableDate.year = 1;
    mutableDate.month = 1;
    mutableDate.day = 1;
  }
  let maxYear = mutableDate.calendar.getYearsInEra(mutableDate);
  if (mutableDate.year > maxYear) {
    var _mutableDate_calendar_isInverseEra, _mutableDate_calendar;
    let isInverseEra = (_mutableDate_calendar_isInverseEra = (_mutableDate_calendar = mutableDate.calendar).isInverseEra) === null || _mutableDate_calendar_isInverseEra === void 0 ? void 0 : _mutableDate_calendar_isInverseEra.call(_mutableDate_calendar, mutableDate);
    mutableDate.year = maxYear;
    mutableDate.month = isInverseEra ? 1 : mutableDate.calendar.getMonthsInYear(mutableDate);
    mutableDate.day = isInverseEra ? 1 : mutableDate.calendar.getDaysInMonth(mutableDate);
  }
  if (mutableDate.month < 1) {
    mutableDate.month = 1;
    mutableDate.day = 1;
  }
  let maxMonth = mutableDate.calendar.getMonthsInYear(mutableDate);
  if (mutableDate.month > maxMonth) {
    mutableDate.month = maxMonth;
    mutableDate.day = mutableDate.calendar.getDaysInMonth(mutableDate);
  }
  mutableDate.day = Math.max(1, Math.min(mutableDate.calendar.getDaysInMonth(mutableDate), mutableDate.day));
  return mutableDate;
}
function $735220c2d4774dd3$var$addYears(date, years) {
  var _date_calendar_isInverseEra, _date_calendar;
  if ((_date_calendar_isInverseEra = (_date_calendar = date.calendar).isInverseEra) === null || _date_calendar_isInverseEra === void 0 ? void 0 : _date_calendar_isInverseEra.call(_date_calendar, date))
    years = -years;
  date.year += years;
}
function $735220c2d4774dd3$var$balanceYearMonth(date) {
  while (date.month < 1) {
    $735220c2d4774dd3$var$addYears(date, -1);
    date.month += date.calendar.getMonthsInYear(date);
  }
  let monthsInYear = 0;
  while (date.month > (monthsInYear = date.calendar.getMonthsInYear(date))) {
    date.month -= monthsInYear;
    $735220c2d4774dd3$var$addYears(date, 1);
  }
}
function $735220c2d4774dd3$var$balanceDay(date) {
  while (date.day < 1) {
    date.month--;
    $735220c2d4774dd3$var$balanceYearMonth(date);
    date.day += date.calendar.getDaysInMonth(date);
  }
  while (date.day > date.calendar.getDaysInMonth(date)) {
    date.day -= date.calendar.getDaysInMonth(date);
    date.month++;
    $735220c2d4774dd3$var$balanceYearMonth(date);
  }
}
function $735220c2d4774dd3$var$constrainMonthDay(date) {
  date.month = Math.max(1, Math.min(date.calendar.getMonthsInYear(date), date.month));
  date.day = Math.max(1, Math.min(date.calendar.getDaysInMonth(date), date.day));
}
function $735220c2d4774dd3$export$c4e2ecac49351ef2(date) {
  if (date.calendar.constrainDate)
    date.calendar.constrainDate(date);
  date.year = Math.max(1, Math.min(date.calendar.getYearsInEra(date), date.year));
  $735220c2d4774dd3$var$constrainMonthDay(date);
}
function $735220c2d4774dd3$export$3e2544e88a25bff8(duration) {
  let inverseDuration = {};
  for (let key in duration)
    if (typeof duration[key] === "number")
      inverseDuration[key] = -duration[key];
  return inverseDuration;
}
function $735220c2d4774dd3$export$4e2d2ead65e5f7e3(date, duration) {
  return $735220c2d4774dd3$export$e16d8520af44a096(date, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$adaa4cf7ef1b65be(date, fields) {
  let mutableDate = date.copy();
  if (fields.era != null)
    mutableDate.era = fields.era;
  if (fields.year != null)
    mutableDate.year = fields.year;
  if (fields.month != null)
    mutableDate.month = fields.month;
  if (fields.day != null)
    mutableDate.day = fields.day;
  $735220c2d4774dd3$export$c4e2ecac49351ef2(mutableDate);
  return mutableDate;
}
function $735220c2d4774dd3$export$e5d5e1c1822b6e56(value, fields) {
  let mutableValue = value.copy();
  if (fields.hour != null)
    mutableValue.hour = fields.hour;
  if (fields.minute != null)
    mutableValue.minute = fields.minute;
  if (fields.second != null)
    mutableValue.second = fields.second;
  if (fields.millisecond != null)
    mutableValue.millisecond = fields.millisecond;
  $735220c2d4774dd3$export$7555de1e070510cb(mutableValue);
  return mutableValue;
}
function $735220c2d4774dd3$var$balanceTime(time) {
  time.second += Math.floor(time.millisecond / 1e3);
  time.millisecond = $735220c2d4774dd3$var$nonNegativeMod(time.millisecond, 1e3);
  time.minute += Math.floor(time.second / 60);
  time.second = $735220c2d4774dd3$var$nonNegativeMod(time.second, 60);
  time.hour += Math.floor(time.minute / 60);
  time.minute = $735220c2d4774dd3$var$nonNegativeMod(time.minute, 60);
  let days = Math.floor(time.hour / 24);
  time.hour = $735220c2d4774dd3$var$nonNegativeMod(time.hour, 24);
  return days;
}
function $735220c2d4774dd3$export$7555de1e070510cb(time) {
  time.millisecond = Math.max(0, Math.min(time.millisecond, 1e3));
  time.second = Math.max(0, Math.min(time.second, 59));
  time.minute = Math.max(0, Math.min(time.minute, 59));
  time.hour = Math.max(0, Math.min(time.hour, 23));
}
function $735220c2d4774dd3$var$nonNegativeMod(a, b) {
  let result = a % b;
  if (result < 0)
    result += b;
  return result;
}
function $735220c2d4774dd3$var$addTimeFields(time, duration) {
  time.hour += duration.hours || 0;
  time.minute += duration.minutes || 0;
  time.second += duration.seconds || 0;
  time.millisecond += duration.milliseconds || 0;
  return $735220c2d4774dd3$var$balanceTime(time);
}
function $735220c2d4774dd3$export$7ed87b6bc2506470(time, duration) {
  let res = time.copy();
  $735220c2d4774dd3$var$addTimeFields(res, duration);
  return res;
}
function $735220c2d4774dd3$export$fe34d3a381cd7501(time, duration) {
  return $735220c2d4774dd3$export$7ed87b6bc2506470(time, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$d52ced6badfb9a4c(value, field, amount, options) {
  let mutable = value.copy();
  switch (field) {
    case "era": {
      let eras = value.calendar.getEras();
      let eraIndex = eras.indexOf(value.era);
      if (eraIndex < 0)
        throw new Error("Invalid era: " + value.era);
      eraIndex = $735220c2d4774dd3$var$cycleValue(eraIndex, amount, 0, eras.length - 1, options === null || options === void 0 ? void 0 : options.round);
      mutable.era = eras[eraIndex];
      $735220c2d4774dd3$export$c4e2ecac49351ef2(mutable);
      break;
    }
    case "year":
      var _mutable_calendar_isInverseEra, _mutable_calendar;
      if ((_mutable_calendar_isInverseEra = (_mutable_calendar = mutable.calendar).isInverseEra) === null || _mutable_calendar_isInverseEra === void 0 ? void 0 : _mutable_calendar_isInverseEra.call(_mutable_calendar, mutable))
        amount = -amount;
      mutable.year = $735220c2d4774dd3$var$cycleValue(value.year, amount, -Infinity, 9999, options === null || options === void 0 ? void 0 : options.round);
      if (mutable.year === -Infinity)
        mutable.year = 1;
      if (mutable.calendar.balanceYearMonth)
        mutable.calendar.balanceYearMonth(mutable, value);
      break;
    case "month":
      mutable.month = $735220c2d4774dd3$var$cycleValue(value.month, amount, 1, value.calendar.getMonthsInYear(value), options === null || options === void 0 ? void 0 : options.round);
      break;
    case "day":
      mutable.day = $735220c2d4774dd3$var$cycleValue(value.day, amount, 1, value.calendar.getDaysInMonth(value), options === null || options === void 0 ? void 0 : options.round);
      break;
    default:
      throw new Error("Unsupported field " + field);
  }
  if (value.calendar.balanceDate)
    value.calendar.balanceDate(mutable);
  $735220c2d4774dd3$export$c4e2ecac49351ef2(mutable);
  return mutable;
}
function $735220c2d4774dd3$export$dd02b3e0007dfe28(value, field, amount, options) {
  let mutable = value.copy();
  switch (field) {
    case "hour": {
      let hours = value.hour;
      let min = 0;
      let max = 23;
      if ((options === null || options === void 0 ? void 0 : options.hourCycle) === 12) {
        let isPM = hours >= 12;
        min = isPM ? 12 : 0;
        max = isPM ? 23 : 11;
      }
      mutable.hour = $735220c2d4774dd3$var$cycleValue(hours, amount, min, max, options === null || options === void 0 ? void 0 : options.round);
      break;
    }
    case "minute":
      mutable.minute = $735220c2d4774dd3$var$cycleValue(value.minute, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
      break;
    case "second":
      mutable.second = $735220c2d4774dd3$var$cycleValue(value.second, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
      break;
    case "millisecond":
      mutable.millisecond = $735220c2d4774dd3$var$cycleValue(value.millisecond, amount, 0, 999, options === null || options === void 0 ? void 0 : options.round);
      break;
    default:
      throw new Error("Unsupported field " + field);
  }
  return mutable;
}
function $735220c2d4774dd3$var$cycleValue(value, amount, min, max, round = false) {
  if (round) {
    value += Math.sign(amount);
    if (value < min)
      value = max;
    let div = Math.abs(amount);
    if (amount > 0)
      value = Math.ceil(value / div) * div;
    else
      value = Math.floor(value / div) * div;
    if (value > max)
      value = min;
  } else {
    value += amount;
    if (value < min)
      value = max - (min - value - 1);
    else if (value > max)
      value = min + (value - max - 1);
  }
  return value;
}
function $735220c2d4774dd3$export$96b1d28349274637(dateTime, duration) {
  let ms;
  if (duration.years != null && duration.years !== 0 || duration.months != null && duration.months !== 0 || duration.weeks != null && duration.weeks !== 0 || duration.days != null && duration.days !== 0) {
    let res2 = $735220c2d4774dd3$export$e16d8520af44a096((0, $11d87f3f76e88657$export$b21e0b124e224484)(dateTime), {
      years: duration.years,
      months: duration.months,
      weeks: duration.weeks,
      days: duration.days
    });
    ms = (0, $11d87f3f76e88657$export$5107c82f94518f5c)(res2, dateTime.timeZone);
  } else
    ms = (0, $11d87f3f76e88657$export$bd4fb2bc8bb06fb)(dateTime) - dateTime.offset;
  ms += duration.milliseconds || 0;
  ms += (duration.seconds || 0) * 1e3;
  ms += (duration.minutes || 0) * 6e4;
  ms += (duration.hours || 0) * 36e5;
  let res = (0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms, dateTime.timeZone);
  return (0, $11d87f3f76e88657$export$b4a036af3fc0b032)(res, dateTime.calendar);
}
function $735220c2d4774dd3$export$6814caac34ca03c7(dateTime, duration) {
  return $735220c2d4774dd3$export$96b1d28349274637(dateTime, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$9a297d111fc86b79(dateTime, field, amount, options) {
  switch (field) {
    case "hour": {
      let min = 0;
      let max = 23;
      if ((options === null || options === void 0 ? void 0 : options.hourCycle) === 12) {
        let isPM = dateTime.hour >= 12;
        min = isPM ? 12 : 0;
        max = isPM ? 23 : 11;
      }
      let plainDateTime = (0, $11d87f3f76e88657$export$b21e0b124e224484)(dateTime);
      let minDate = (0, $11d87f3f76e88657$export$b4a036af3fc0b032)($735220c2d4774dd3$export$e5d5e1c1822b6e56(plainDateTime, {
        hour: min
      }), new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)());
      let minAbsolute = [
        (0, $11d87f3f76e88657$export$5107c82f94518f5c)(minDate, dateTime.timeZone, "earlier"),
        (0, $11d87f3f76e88657$export$5107c82f94518f5c)(minDate, dateTime.timeZone, "later")
      ].filter((ms2) => (0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms2, dateTime.timeZone).day === minDate.day)[0];
      let maxDate = (0, $11d87f3f76e88657$export$b4a036af3fc0b032)($735220c2d4774dd3$export$e5d5e1c1822b6e56(plainDateTime, {
        hour: max
      }), new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)());
      let maxAbsolute = [
        (0, $11d87f3f76e88657$export$5107c82f94518f5c)(maxDate, dateTime.timeZone, "earlier"),
        (0, $11d87f3f76e88657$export$5107c82f94518f5c)(maxDate, dateTime.timeZone, "later")
      ].filter((ms2) => (0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms2, dateTime.timeZone).day === maxDate.day).pop();
      let ms = (0, $11d87f3f76e88657$export$bd4fb2bc8bb06fb)(dateTime) - dateTime.offset;
      let hours = Math.floor(ms / $735220c2d4774dd3$var$ONE_HOUR);
      let remainder = ms % $735220c2d4774dd3$var$ONE_HOUR;
      ms = $735220c2d4774dd3$var$cycleValue(hours, amount, Math.floor(minAbsolute / $735220c2d4774dd3$var$ONE_HOUR), Math.floor(maxAbsolute / $735220c2d4774dd3$var$ONE_HOUR), options === null || options === void 0 ? void 0 : options.round) * $735220c2d4774dd3$var$ONE_HOUR + remainder;
      return (0, $11d87f3f76e88657$export$b4a036af3fc0b032)((0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms, dateTime.timeZone), dateTime.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return $735220c2d4774dd3$export$dd02b3e0007dfe28(dateTime, field, amount, options);
    case "era":
    case "year":
    case "month":
    case "day": {
      let res = $735220c2d4774dd3$export$d52ced6badfb9a4c((0, $11d87f3f76e88657$export$b21e0b124e224484)(dateTime), field, amount, options);
      let ms = (0, $11d87f3f76e88657$export$5107c82f94518f5c)(res, dateTime.timeZone);
      return (0, $11d87f3f76e88657$export$b4a036af3fc0b032)((0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms, dateTime.timeZone), dateTime.calendar);
    }
    default:
      throw new Error("Unsupported field " + field);
  }
}
function $735220c2d4774dd3$export$31b5430eb18be4f8(dateTime, fields, disambiguation) {
  let plainDateTime = (0, $11d87f3f76e88657$export$b21e0b124e224484)(dateTime);
  let res = $735220c2d4774dd3$export$e5d5e1c1822b6e56($735220c2d4774dd3$export$adaa4cf7ef1b65be(plainDateTime, fields), fields);
  if (res.compare(plainDateTime) === 0)
    return dateTime;
  let ms = (0, $11d87f3f76e88657$export$5107c82f94518f5c)(res, dateTime.timeZone, disambiguation);
  return (0, $11d87f3f76e88657$export$b4a036af3fc0b032)((0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms, dateTime.timeZone), dateTime.calendar);
}

// node_modules/.pnpm/@internationalized+date@3.5.4/node_modules/@internationalized/date/dist/string.mjs
var $fae977aafc393c5c$var$TIME_RE = /^(\d{2})(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/;
var $fae977aafc393c5c$var$DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
var $fae977aafc393c5c$var$DATE_TIME_RE = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/;
var $fae977aafc393c5c$var$ZONED_DATE_TIME_RE = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:([+-]\d{2})(?::?(\d{2}))?)?\[(.*?)\]$/;
var $fae977aafc393c5c$var$ABSOLUTE_RE = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/;
var $fae977aafc393c5c$var$DATE_TIME_DURATION_RE = /^((?<negative>-)|\+)?P((?<years>\d*)Y)?((?<months>\d*)M)?((?<weeks>\d*)W)?((?<days>\d*)D)?((?<time>T)((?<hours>\d*[.,]?\d{1,9})H)?((?<minutes>\d*[.,]?\d{1,9})M)?((?<seconds>\d*[.,]?\d{1,9})S)?)?$/;
var $fae977aafc393c5c$var$requiredDurationTimeGroups = [
  "hours",
  "minutes",
  "seconds"
];
var $fae977aafc393c5c$var$requiredDurationGroups = [
  "years",
  "months",
  "weeks",
  "days",
  ...$fae977aafc393c5c$var$requiredDurationTimeGroups
];
function $fae977aafc393c5c$export$c9698ec7f05a07e1(value) {
  let m = value.match($fae977aafc393c5c$var$TIME_RE);
  if (!m)
    throw new Error("Invalid ISO 8601 time string: " + value);
  return new (0, $35ea8db9cb2ccb90$export$680ea196effce5f)($fae977aafc393c5c$var$parseNumber(m[1], 0, 23), m[2] ? $fae977aafc393c5c$var$parseNumber(m[2], 0, 59) : 0, m[3] ? $fae977aafc393c5c$var$parseNumber(m[3], 0, 59) : 0, m[4] ? $fae977aafc393c5c$var$parseNumber(m[4], 0, Infinity) * 1e3 : 0);
}
function $fae977aafc393c5c$export$6b862160d295c8e(value) {
  let m = value.match($fae977aafc393c5c$var$DATE_RE);
  if (!m)
    throw new Error("Invalid ISO 8601 date string: " + value);
  let date = new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)($fae977aafc393c5c$var$parseNumber(m[1], 0, 9999), $fae977aafc393c5c$var$parseNumber(m[2], 1, 12), 1);
  date.day = $fae977aafc393c5c$var$parseNumber(m[3], 0, date.calendar.getDaysInMonth(date));
  return date;
}
function $fae977aafc393c5c$export$588937bcd60ade55(value) {
  let m = value.match($fae977aafc393c5c$var$DATE_TIME_RE);
  if (!m)
    throw new Error("Invalid ISO 8601 date time string: " + value);
  let date = new (0, $35ea8db9cb2ccb90$export$ca871e8dbb80966f)($fae977aafc393c5c$var$parseNumber(m[1], 1, 9999), $fae977aafc393c5c$var$parseNumber(m[2], 1, 12), 1, m[4] ? $fae977aafc393c5c$var$parseNumber(m[4], 0, 23) : 0, m[5] ? $fae977aafc393c5c$var$parseNumber(m[5], 0, 59) : 0, m[6] ? $fae977aafc393c5c$var$parseNumber(m[6], 0, 59) : 0, m[7] ? $fae977aafc393c5c$var$parseNumber(m[7], 0, Infinity) * 1e3 : 0);
  date.day = $fae977aafc393c5c$var$parseNumber(m[3], 0, date.calendar.getDaysInMonth(date));
  return date;
}
function $fae977aafc393c5c$export$fd7893f06e92a6a4(value, disambiguation) {
  let m = value.match($fae977aafc393c5c$var$ZONED_DATE_TIME_RE);
  if (!m)
    throw new Error("Invalid ISO 8601 date time string: " + value);
  let date = new (0, $35ea8db9cb2ccb90$export$d3b7288e7994edea)($fae977aafc393c5c$var$parseNumber(m[1], 1, 9999), $fae977aafc393c5c$var$parseNumber(m[2], 1, 12), 1, m[10], 0, m[4] ? $fae977aafc393c5c$var$parseNumber(m[4], 0, 23) : 0, m[5] ? $fae977aafc393c5c$var$parseNumber(m[5], 0, 59) : 0, m[6] ? $fae977aafc393c5c$var$parseNumber(m[6], 0, 59) : 0, m[7] ? $fae977aafc393c5c$var$parseNumber(m[7], 0, Infinity) * 1e3 : 0);
  date.day = $fae977aafc393c5c$var$parseNumber(m[3], 0, date.calendar.getDaysInMonth(date));
  let plainDateTime = (0, $11d87f3f76e88657$export$b21e0b124e224484)(date);
  let ms;
  if (m[8]) {
    var _m_;
    date.offset = $fae977aafc393c5c$var$parseNumber(m[8], -23, 23) * 36e5 + $fae977aafc393c5c$var$parseNumber((_m_ = m[9]) !== null && _m_ !== void 0 ? _m_ : "0", 0, 59) * 6e4;
    ms = (0, $11d87f3f76e88657$export$bd4fb2bc8bb06fb)(date) - date.offset;
    let absolutes = (0, $11d87f3f76e88657$export$136f38efe7caf549)(plainDateTime, date.timeZone);
    if (!absolutes.includes(ms))
      throw new Error(`Offset ${$fae977aafc393c5c$var$offsetToString(date.offset)} is invalid for ${$fae977aafc393c5c$export$4223de14708adc63(date)} in ${date.timeZone}`);
  } else
    ms = (0, $11d87f3f76e88657$export$5107c82f94518f5c)((0, $11d87f3f76e88657$export$b21e0b124e224484)(plainDateTime), date.timeZone, disambiguation);
  return (0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms, date.timeZone);
}
function $fae977aafc393c5c$export$5adfdab05168c219(value, timeZone) {
  let m = value.match($fae977aafc393c5c$var$ABSOLUTE_RE);
  if (!m)
    throw new Error("Invalid ISO 8601 date time string: " + value);
  let date = new (0, $35ea8db9cb2ccb90$export$d3b7288e7994edea)($fae977aafc393c5c$var$parseNumber(m[1], 1, 9999), $fae977aafc393c5c$var$parseNumber(m[2], 1, 12), 1, timeZone, 0, m[4] ? $fae977aafc393c5c$var$parseNumber(m[4], 0, 23) : 0, m[5] ? $fae977aafc393c5c$var$parseNumber(m[5], 0, 59) : 0, m[6] ? $fae977aafc393c5c$var$parseNumber(m[6], 0, 59) : 0, m[7] ? $fae977aafc393c5c$var$parseNumber(m[7], 0, Infinity) * 1e3 : 0);
  date.day = $fae977aafc393c5c$var$parseNumber(m[3], 0, date.calendar.getDaysInMonth(date));
  var _m_;
  if (m[8])
    date.offset = $fae977aafc393c5c$var$parseNumber(m[8], -23, 23) * 36e5 + $fae977aafc393c5c$var$parseNumber((_m_ = m[9]) !== null && _m_ !== void 0 ? _m_ : "0", 0, 59) * 6e4;
  return (0, $11d87f3f76e88657$export$538b00033cc11c75)(date, timeZone);
}
function $fae977aafc393c5c$export$8e384432362ed0f0(value) {
  return $fae977aafc393c5c$export$5adfdab05168c219(value, (0, $14e0f24ef4ac5c92$export$aa8b41735afcabd2)());
}
function $fae977aafc393c5c$var$parseNumber(value, min, max) {
  let val = Number(value);
  if (val < min || val > max)
    throw new RangeError(`Value out of range: ${min} <= ${val} <= ${max}`);
  return val;
}
function $fae977aafc393c5c$export$f59dee82248f5ad4(time) {
  return `${String(time.hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")}:${String(time.second).padStart(2, "0")}${time.millisecond ? String(time.millisecond / 1e3).slice(1) : ""}`;
}
function $fae977aafc393c5c$export$60dfd74aa96791bd(date) {
  let gregorianDate = (0, $11d87f3f76e88657$export$b4a036af3fc0b032)(date, new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)());
  return `${String(gregorianDate.year).padStart(4, "0")}-${String(gregorianDate.month).padStart(2, "0")}-${String(gregorianDate.day).padStart(2, "0")}`;
}
function $fae977aafc393c5c$export$4223de14708adc63(date) {
  return `${$fae977aafc393c5c$export$60dfd74aa96791bd(date)}T${$fae977aafc393c5c$export$f59dee82248f5ad4(date)}`;
}
function $fae977aafc393c5c$var$offsetToString(offset) {
  let sign = Math.sign(offset) < 0 ? "-" : "+";
  offset = Math.abs(offset);
  let offsetHours = Math.floor(offset / 36e5);
  let offsetMinutes = offset % 36e5 / 6e4;
  return `${sign}${String(offsetHours).padStart(2, "0")}:${String(offsetMinutes).padStart(2, "0")}`;
}
function $fae977aafc393c5c$export$bf79f1ebf4b18792(date) {
  return `${$fae977aafc393c5c$export$4223de14708adc63(date)}${$fae977aafc393c5c$var$offsetToString(date.offset)}[${date.timeZone}]`;
}
function $fae977aafc393c5c$export$ecae829bb3747ea6(value) {
  var _match_groups, _match_groups1, _match_groups2, _match_groups3, _match_groups4, _match_groups5, _match_groups6, _match_groups7, _match_groups8;
  const match = value.match($fae977aafc393c5c$var$DATE_TIME_DURATION_RE);
  if (!match)
    throw new Error(`Invalid ISO 8601 Duration string: ${value}`);
  const parseDurationGroup = (group, isNegative2, min, max) => {
    if (!group)
      return 0;
    try {
      const sign = isNegative2 ? -1 : 1;
      return sign * $fae977aafc393c5c$var$parseNumber(group.replace(",", "."), min, max);
    } catch {
      throw new Error(`Invalid ISO 8601 Duration string: ${value}`);
    }
  };
  const isNegative = !!((_match_groups = match.groups) === null || _match_groups === void 0 ? void 0 : _match_groups.negative);
  const hasRequiredGroups = $fae977aafc393c5c$var$requiredDurationGroups.some((group) => {
    var _match_groups9;
    return (_match_groups9 = match.groups) === null || _match_groups9 === void 0 ? void 0 : _match_groups9[group];
  });
  if (!hasRequiredGroups)
    throw new Error(`Invalid ISO 8601 Duration string: ${value}`);
  const durationStringIncludesTime = (_match_groups1 = match.groups) === null || _match_groups1 === void 0 ? void 0 : _match_groups1.time;
  if (durationStringIncludesTime) {
    const hasRequiredDurationTimeGroups = $fae977aafc393c5c$var$requiredDurationTimeGroups.some((group) => {
      var _match_groups9;
      return (_match_groups9 = match.groups) === null || _match_groups9 === void 0 ? void 0 : _match_groups9[group];
    });
    if (!hasRequiredDurationTimeGroups)
      throw new Error(`Invalid ISO 8601 Duration string: ${value}`);
  }
  const duration = {
    years: parseDurationGroup((_match_groups2 = match.groups) === null || _match_groups2 === void 0 ? void 0 : _match_groups2.years, isNegative, 0, 9999),
    months: parseDurationGroup((_match_groups3 = match.groups) === null || _match_groups3 === void 0 ? void 0 : _match_groups3.months, isNegative, 0, 12),
    weeks: parseDurationGroup((_match_groups4 = match.groups) === null || _match_groups4 === void 0 ? void 0 : _match_groups4.weeks, isNegative, 0, Infinity),
    days: parseDurationGroup((_match_groups5 = match.groups) === null || _match_groups5 === void 0 ? void 0 : _match_groups5.days, isNegative, 0, 31),
    hours: parseDurationGroup((_match_groups6 = match.groups) === null || _match_groups6 === void 0 ? void 0 : _match_groups6.hours, isNegative, 0, 23),
    minutes: parseDurationGroup((_match_groups7 = match.groups) === null || _match_groups7 === void 0 ? void 0 : _match_groups7.minutes, isNegative, 0, 59),
    seconds: parseDurationGroup((_match_groups8 = match.groups) === null || _match_groups8 === void 0 ? void 0 : _match_groups8.seconds, isNegative, 0, 59)
  };
  if (duration.hours !== void 0 && duration.hours % 1 !== 0 && (duration.minutes || duration.seconds))
    throw new Error(`Invalid ISO 8601 Duration string: ${value} - only the smallest unit can be fractional`);
  if (duration.minutes !== void 0 && duration.minutes % 1 !== 0 && duration.seconds)
    throw new Error(`Invalid ISO 8601 Duration string: ${value} - only the smallest unit can be fractional`);
  return duration;
}

// node_modules/.pnpm/@swc+helpers@0.5.11/node_modules/@swc/helpers/esm/_check_private_redeclaration.js
function _check_private_redeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

// node_modules/.pnpm/@swc+helpers@0.5.11/node_modules/@swc/helpers/esm/_class_private_field_init.js
function _class_private_field_init(obj, privateMap, value) {
  _check_private_redeclaration(obj, privateMap);
  privateMap.set(obj, value);
}

// node_modules/.pnpm/@internationalized+date@3.5.4/node_modules/@internationalized/date/dist/CalendarDate.mjs
function $35ea8db9cb2ccb90$var$shiftArgs(args) {
  let calendar = typeof args[0] === "object" ? args.shift() : new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)();
  let era;
  if (typeof args[0] === "string")
    era = args.shift();
  else {
    let eras = calendar.getEras();
    era = eras[eras.length - 1];
  }
  let year = args.shift();
  let month = args.shift();
  let day = args.shift();
  return [
    calendar,
    era,
    year,
    month,
    day
  ];
}
var $35ea8db9cb2ccb90$var$_type = /* @__PURE__ */ new WeakMap();
var $35ea8db9cb2ccb90$export$99faa760c7908e4f = class _$35ea8db9cb2ccb90$export$99faa760c7908e4f {
  /** Returns a copy of this date. */
  copy() {
    if (this.era)
      return new _$35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.era, this.year, this.month, this.day);
    else
      return new _$35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(duration) {
    return (0, $735220c2d4774dd3$export$e16d8520af44a096)(this, duration);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(duration) {
    return (0, $735220c2d4774dd3$export$4e2d2ead65e5f7e3)(this, duration);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(fields) {
    return (0, $735220c2d4774dd3$export$adaa4cf7ef1b65be)(this, fields);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(field, amount, options) {
    return (0, $735220c2d4774dd3$export$d52ced6badfb9a4c)(this, field, amount, options);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(timeZone) {
    return (0, $11d87f3f76e88657$export$e67a095c620b86fe)(this, timeZone);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return (0, $fae977aafc393c5c$export$60dfd74aa96791bd)(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(b) {
    return (0, $14e0f24ef4ac5c92$export$68781ddf31c0090f)(this, b);
  }
  constructor(...args) {
    (0, _class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type, {
      writable: true,
      value: void 0
    });
    let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
    this.calendar = calendar;
    this.era = era;
    this.year = year;
    this.month = month;
    this.day = day;
    (0, $735220c2d4774dd3$export$c4e2ecac49351ef2)(this);
  }
};
var $35ea8db9cb2ccb90$var$_type1 = /* @__PURE__ */ new WeakMap();
var $35ea8db9cb2ccb90$export$680ea196effce5f = class _$35ea8db9cb2ccb90$export$680ea196effce5f {
  /** Returns a copy of this time. */
  copy() {
    return new _$35ea8db9cb2ccb90$export$680ea196effce5f(this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `Time` with the given duration added to it. */
  add(duration) {
    return (0, $735220c2d4774dd3$export$7ed87b6bc2506470)(this, duration);
  }
  /** Returns a new `Time` with the given duration subtracted from it. */
  subtract(duration) {
    return (0, $735220c2d4774dd3$export$fe34d3a381cd7501)(this, duration);
  }
  /** Returns a new `Time` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(fields) {
    return (0, $735220c2d4774dd3$export$e5d5e1c1822b6e56)(this, fields);
  }
  /**
  * Returns a new `Time` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(field, amount, options) {
    return (0, $735220c2d4774dd3$export$dd02b3e0007dfe28)(this, field, amount, options);
  }
  /** Converts the time to an ISO 8601 formatted string. */
  toString() {
    return (0, $fae977aafc393c5c$export$f59dee82248f5ad4)(this);
  }
  /** Compares this time with another. A negative result indicates that this time is before the given one, and a positive time indicates that it is after. */
  compare(b) {
    return (0, $14e0f24ef4ac5c92$export$c19a80a9721b80f6)(this, b);
  }
  constructor(hour = 0, minute = 0, second = 0, millisecond = 0) {
    (0, _class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type1, {
      writable: true,
      value: void 0
    });
    this.hour = hour;
    this.minute = minute;
    this.second = second;
    this.millisecond = millisecond;
    (0, $735220c2d4774dd3$export$7555de1e070510cb)(this);
  }
};
var $35ea8db9cb2ccb90$var$_type2 = /* @__PURE__ */ new WeakMap();
var $35ea8db9cb2ccb90$export$ca871e8dbb80966f = class _$35ea8db9cb2ccb90$export$ca871e8dbb80966f {
  /** Returns a copy of this date. */
  copy() {
    if (this.era)
      return new _$35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
    else
      return new _$35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(duration) {
    return (0, $735220c2d4774dd3$export$e16d8520af44a096)(this, duration);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(duration) {
    return (0, $735220c2d4774dd3$export$4e2d2ead65e5f7e3)(this, duration);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(fields) {
    return (0, $735220c2d4774dd3$export$adaa4cf7ef1b65be)((0, $735220c2d4774dd3$export$e5d5e1c1822b6e56)(this, fields), fields);
  }
  /**
  * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(field, amount, options) {
    switch (field) {
      case "era":
      case "year":
      case "month":
      case "day":
        return (0, $735220c2d4774dd3$export$d52ced6badfb9a4c)(this, field, amount, options);
      default:
        return (0, $735220c2d4774dd3$export$dd02b3e0007dfe28)(this, field, amount, options);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(timeZone, disambiguation) {
    return (0, $11d87f3f76e88657$export$e67a095c620b86fe)(this, timeZone, disambiguation);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return (0, $fae977aafc393c5c$export$4223de14708adc63)(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(b) {
    let res = (0, $14e0f24ef4ac5c92$export$68781ddf31c0090f)(this, b);
    if (res === 0)
      return (0, $14e0f24ef4ac5c92$export$c19a80a9721b80f6)(this, (0, $11d87f3f76e88657$export$b21e0b124e224484)(b));
    return res;
  }
  constructor(...args) {
    (0, _class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type2, {
      writable: true,
      value: void 0
    });
    let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
    this.calendar = calendar;
    this.era = era;
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = args.shift() || 0;
    this.minute = args.shift() || 0;
    this.second = args.shift() || 0;
    this.millisecond = args.shift() || 0;
    (0, $735220c2d4774dd3$export$c4e2ecac49351ef2)(this);
  }
};
var $35ea8db9cb2ccb90$var$_type3 = /* @__PURE__ */ new WeakMap();
var $35ea8db9cb2ccb90$export$d3b7288e7994edea = class _$35ea8db9cb2ccb90$export$d3b7288e7994edea {
  /** Returns a copy of this date. */
  copy() {
    if (this.era)
      return new _$35ea8db9cb2ccb90$export$d3b7288e7994edea(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
    else
      return new _$35ea8db9cb2ccb90$export$d3b7288e7994edea(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(duration) {
    return (0, $735220c2d4774dd3$export$96b1d28349274637)(this, duration);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(duration) {
    return (0, $735220c2d4774dd3$export$6814caac34ca03c7)(this, duration);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(fields, disambiguation) {
    return (0, $735220c2d4774dd3$export$31b5430eb18be4f8)(this, fields, disambiguation);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(field, amount, options) {
    return (0, $735220c2d4774dd3$export$9a297d111fc86b79)(this, field, amount, options);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return (0, $11d87f3f76e88657$export$83aac07b4c37b25)(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return (0, $fae977aafc393c5c$export$bf79f1ebf4b18792)(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(b) {
    return this.toDate().getTime() - (0, $11d87f3f76e88657$export$84c95a83c799e074)(b, this.timeZone).toDate().getTime();
  }
  constructor(...args) {
    (0, _class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type3, {
      writable: true,
      value: void 0
    });
    let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
    let timeZone = args.shift();
    let offset = args.shift();
    this.calendar = calendar;
    this.era = era;
    this.year = year;
    this.month = month;
    this.day = day;
    this.timeZone = timeZone;
    this.offset = offset;
    this.hour = args.shift() || 0;
    this.minute = args.shift() || 0;
    this.second = args.shift() || 0;
    this.millisecond = args.shift() || 0;
    (0, $735220c2d4774dd3$export$c4e2ecac49351ef2)(this);
  }
};

// node_modules/.pnpm/@internationalized+date@3.5.4/node_modules/@internationalized/date/dist/JapaneseCalendar.mjs
var $62225008020f0a13$var$ERA_START_DATES = [
  [
    1868,
    9,
    8
  ],
  [
    1912,
    7,
    30
  ],
  [
    1926,
    12,
    25
  ],
  [
    1989,
    1,
    8
  ],
  [
    2019,
    5,
    1
  ]
];
var $62225008020f0a13$var$ERA_END_DATES = [
  [
    1912,
    7,
    29
  ],
  [
    1926,
    12,
    24
  ],
  [
    1989,
    1,
    7
  ],
  [
    2019,
    4,
    30
  ]
];
var $62225008020f0a13$var$ERA_ADDENDS = [
  1867,
  1911,
  1925,
  1988,
  2018
];
var $62225008020f0a13$var$ERA_NAMES = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function $62225008020f0a13$var$findEraFromGregorianDate(date) {
  const idx = $62225008020f0a13$var$ERA_START_DATES.findIndex(([year, month, day]) => {
    if (date.year < year)
      return true;
    if (date.year === year && date.month < month)
      return true;
    if (date.year === year && date.month === month && date.day < day)
      return true;
    return false;
  });
  if (idx === -1)
    return $62225008020f0a13$var$ERA_START_DATES.length - 1;
  if (idx === 0)
    return 0;
  return idx - 1;
}
function $62225008020f0a13$var$toGregorian(date) {
  let eraAddend = $62225008020f0a13$var$ERA_ADDENDS[$62225008020f0a13$var$ERA_NAMES.indexOf(date.era)];
  if (!eraAddend)
    throw new Error("Unknown era: " + date.era);
  return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(date.year + eraAddend, date.month, date.day);
}
var $62225008020f0a13$export$b746ab2b60cdffbf = class extends (0, $3b62074eb05584b2$export$80ee6245ec4f29ec) {
  fromJulianDay(jd) {
    let date = super.fromJulianDay(jd);
    let era = $62225008020f0a13$var$findEraFromGregorianDate(date);
    return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, $62225008020f0a13$var$ERA_NAMES[era], date.year - $62225008020f0a13$var$ERA_ADDENDS[era], date.month, date.day);
  }
  toJulianDay(date) {
    return super.toJulianDay($62225008020f0a13$var$toGregorian(date));
  }
  balanceDate(date) {
    let gregorianDate = $62225008020f0a13$var$toGregorian(date);
    let era = $62225008020f0a13$var$findEraFromGregorianDate(gregorianDate);
    if ($62225008020f0a13$var$ERA_NAMES[era] !== date.era) {
      date.era = $62225008020f0a13$var$ERA_NAMES[era];
      date.year = gregorianDate.year - $62225008020f0a13$var$ERA_ADDENDS[era];
    }
    this.constrainDate(date);
  }
  constrainDate(date) {
    let idx = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
    let end = $62225008020f0a13$var$ERA_END_DATES[idx];
    if (end != null) {
      let [endYear, endMonth, endDay] = end;
      let maxYear = endYear - $62225008020f0a13$var$ERA_ADDENDS[idx];
      date.year = Math.max(1, Math.min(maxYear, date.year));
      if (date.year === maxYear) {
        date.month = Math.min(endMonth, date.month);
        if (date.month === endMonth)
          date.day = Math.min(endDay, date.day);
      }
    }
    if (date.year === 1 && idx >= 0) {
      let [, startMonth, startDay] = $62225008020f0a13$var$ERA_START_DATES[idx];
      date.month = Math.max(startMonth, date.month);
      if (date.month === startMonth)
        date.day = Math.max(startDay, date.day);
    }
  }
  getEras() {
    return $62225008020f0a13$var$ERA_NAMES;
  }
  getYearsInEra(date) {
    let era = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
    let cur = $62225008020f0a13$var$ERA_START_DATES[era];
    let next = $62225008020f0a13$var$ERA_START_DATES[era + 1];
    if (next == null)
      return 9999 - cur[0] + 1;
    let years = next[0] - cur[0];
    if (date.month < next[1] || date.month === next[1] && date.day < next[2])
      years++;
    return years;
  }
  getDaysInMonth(date) {
    return super.getDaysInMonth($62225008020f0a13$var$toGregorian(date));
  }
  getMinimumMonthInYear(date) {
    let start = $62225008020f0a13$var$getMinimums(date);
    return start ? start[1] : 1;
  }
  getMinimumDayInMonth(date) {
    let start = $62225008020f0a13$var$getMinimums(date);
    return start && date.month === start[1] ? start[2] : 1;
  }
  constructor(...args) {
    super(...args);
    this.identifier = "japanese";
  }
};
function $62225008020f0a13$var$getMinimums(date) {
  if (date.year === 1) {
    let idx = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
    return $62225008020f0a13$var$ERA_START_DATES[idx];
  }
}

// node_modules/.pnpm/@internationalized+date@3.5.4/node_modules/@internationalized/date/dist/BuddhistCalendar.mjs
var $8d73d47422ca7302$var$BUDDHIST_ERA_START = -543;
var $8d73d47422ca7302$export$42d20a78301dee44 = class extends (0, $3b62074eb05584b2$export$80ee6245ec4f29ec) {
  fromJulianDay(jd) {
    let gregorianDate = super.fromJulianDay(jd);
    let year = (0, $3b62074eb05584b2$export$c36e0ecb2d4fa69d)(gregorianDate.era, gregorianDate.year);
    return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, year - $8d73d47422ca7302$var$BUDDHIST_ERA_START, gregorianDate.month, gregorianDate.day);
  }
  toJulianDay(date) {
    return super.toJulianDay($8d73d47422ca7302$var$toGregorian(date));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(date) {
    return super.getDaysInMonth($8d73d47422ca7302$var$toGregorian(date));
  }
  balanceDate() {
  }
  constructor(...args) {
    super(...args);
    this.identifier = "buddhist";
  }
};
function $8d73d47422ca7302$var$toGregorian(date) {
  let [era, year] = (0, $3b62074eb05584b2$export$4475b7e617eb123c)(date.year + $8d73d47422ca7302$var$BUDDHIST_ERA_START);
  return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(era, year, date.month, date.day);
}

// node_modules/.pnpm/@internationalized+date@3.5.4/node_modules/@internationalized/date/dist/TaiwanCalendar.mjs
var $5f31bd6f0c8940b2$var$TAIWAN_ERA_START = 1911;
function $5f31bd6f0c8940b2$var$gregorianYear(date) {
  return date.era === "minguo" ? date.year + $5f31bd6f0c8940b2$var$TAIWAN_ERA_START : 1 - date.year + $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
}
function $5f31bd6f0c8940b2$var$gregorianToTaiwan(year) {
  let y = year - $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
  if (y > 0)
    return [
      "minguo",
      y
    ];
  else
    return [
      "before_minguo",
      1 - y
    ];
}
var $5f31bd6f0c8940b2$export$65e01080afcb0799 = class extends (0, $3b62074eb05584b2$export$80ee6245ec4f29ec) {
  fromJulianDay(jd) {
    let date = super.fromJulianDay(jd);
    let extendedYear = (0, $3b62074eb05584b2$export$c36e0ecb2d4fa69d)(date.era, date.year);
    let [era, year] = $5f31bd6f0c8940b2$var$gregorianToTaiwan(extendedYear);
    return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, era, year, date.month, date.day);
  }
  toJulianDay(date) {
    return super.toJulianDay($5f31bd6f0c8940b2$var$toGregorian(date));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(date) {
    let [era, year] = $5f31bd6f0c8940b2$var$gregorianToTaiwan($5f31bd6f0c8940b2$var$gregorianYear(date));
    date.era = era;
    date.year = year;
  }
  isInverseEra(date) {
    return date.era === "before_minguo";
  }
  getDaysInMonth(date) {
    return super.getDaysInMonth($5f31bd6f0c8940b2$var$toGregorian(date));
  }
  getYearsInEra(date) {
    return date.era === "before_minguo" ? 9999 : 9999 - $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
  }
  constructor(...args) {
    super(...args);
    this.identifier = "roc";
  }
};
function $5f31bd6f0c8940b2$var$toGregorian(date) {
  let [era, year] = (0, $3b62074eb05584b2$export$4475b7e617eb123c)($5f31bd6f0c8940b2$var$gregorianYear(date));
  return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(era, year, date.month, date.day);
}

// node_modules/.pnpm/@internationalized+date@3.5.4/node_modules/@internationalized/date/dist/PersianCalendar.mjs
var $f3ed2e4472ae7e25$var$PERSIAN_EPOCH = 1948320;
var $f3ed2e4472ae7e25$var$MONTH_START = [
  0,
  31,
  62,
  93,
  124,
  155,
  186,
  216,
  246,
  276,
  306,
  336
  // Esfand
];
var $f3ed2e4472ae7e25$export$37fccdbfd14c5939 = class {
  fromJulianDay(jd) {
    let daysSinceEpoch = jd - $f3ed2e4472ae7e25$var$PERSIAN_EPOCH;
    let year = 1 + Math.floor((33 * daysSinceEpoch + 3) / 12053);
    let farvardin1 = 365 * (year - 1) + Math.floor((8 * year + 21) / 33);
    let dayOfYear = daysSinceEpoch - farvardin1;
    let month = dayOfYear < 216 ? Math.floor(dayOfYear / 31) : Math.floor((dayOfYear - 6) / 30);
    let day = dayOfYear - $f3ed2e4472ae7e25$var$MONTH_START[month] + 1;
    return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, year, month + 1, day);
  }
  toJulianDay(date) {
    let jd = $f3ed2e4472ae7e25$var$PERSIAN_EPOCH - 1 + 365 * (date.year - 1) + Math.floor((8 * date.year + 21) / 33);
    jd += $f3ed2e4472ae7e25$var$MONTH_START[date.month - 1];
    jd += date.day;
    return jd;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(date) {
    if (date.month <= 6)
      return 31;
    if (date.month <= 11)
      return 30;
    let isLeapYear = (0, $2b4dce13dd5a17fa$export$842a2cf37af977e1)(25 * date.year + 11, 33) < 8;
    return isLeapYear ? 30 : 29;
  }
  getEras() {
    return [
      "AP"
    ];
  }
  getYearsInEra() {
    return 9377;
  }
  constructor() {
    this.identifier = "persian";
  }
};

// node_modules/.pnpm/@internationalized+date@3.5.4/node_modules/@internationalized/date/dist/IndianCalendar.mjs
var $82c358003bdda0a8$var$INDIAN_ERA_START = 78;
var $82c358003bdda0a8$var$INDIAN_YEAR_START = 80;
var $82c358003bdda0a8$export$39f31c639fa15726 = class extends (0, $3b62074eb05584b2$export$80ee6245ec4f29ec) {
  fromJulianDay(jd) {
    let date = super.fromJulianDay(jd);
    let indianYear = date.year - $82c358003bdda0a8$var$INDIAN_ERA_START;
    let yDay = jd - (0, $3b62074eb05584b2$export$f297eb839006d339)(date.era, date.year, 1, 1);
    let leapMonth;
    if (yDay < $82c358003bdda0a8$var$INDIAN_YEAR_START) {
      indianYear--;
      leapMonth = (0, $3b62074eb05584b2$export$553d7fa8e3805fc0)(date.year - 1) ? 31 : 30;
      yDay += leapMonth + 155 + 90 + 10;
    } else {
      leapMonth = (0, $3b62074eb05584b2$export$553d7fa8e3805fc0)(date.year) ? 31 : 30;
      yDay -= $82c358003bdda0a8$var$INDIAN_YEAR_START;
    }
    let indianMonth;
    let indianDay;
    if (yDay < leapMonth) {
      indianMonth = 1;
      indianDay = yDay + 1;
    } else {
      let mDay = yDay - leapMonth;
      if (mDay < 155) {
        indianMonth = Math.floor(mDay / 31) + 2;
        indianDay = mDay % 31 + 1;
      } else {
        mDay -= 155;
        indianMonth = Math.floor(mDay / 30) + 7;
        indianDay = mDay % 30 + 1;
      }
    }
    return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, indianYear, indianMonth, indianDay);
  }
  toJulianDay(date) {
    let extendedYear = date.year + $82c358003bdda0a8$var$INDIAN_ERA_START;
    let [era, year] = (0, $3b62074eb05584b2$export$4475b7e617eb123c)(extendedYear);
    let leapMonth;
    let jd;
    if ((0, $3b62074eb05584b2$export$553d7fa8e3805fc0)(year)) {
      leapMonth = 31;
      jd = (0, $3b62074eb05584b2$export$f297eb839006d339)(era, year, 3, 21);
    } else {
      leapMonth = 30;
      jd = (0, $3b62074eb05584b2$export$f297eb839006d339)(era, year, 3, 22);
    }
    if (date.month === 1)
      return jd + date.day - 1;
    jd += leapMonth + Math.min(date.month - 2, 5) * 31;
    if (date.month >= 8)
      jd += (date.month - 7) * 30;
    jd += date.day - 1;
    return jd;
  }
  getDaysInMonth(date) {
    if (date.month === 1 && (0, $3b62074eb05584b2$export$553d7fa8e3805fc0)(date.year + $82c358003bdda0a8$var$INDIAN_ERA_START))
      return 31;
    if (date.month >= 2 && date.month <= 6)
      return 31;
    return 30;
  }
  getYearsInEra() {
    return 9919;
  }
  getEras() {
    return [
      "saka"
    ];
  }
  balanceDate() {
  }
  constructor(...args) {
    super(...args);
    this.identifier = "indian";
  }
};

// node_modules/.pnpm/@internationalized+date@3.5.4/node_modules/@internationalized/date/dist/IslamicCalendar.mjs
var $f2f3e0e3a817edbd$var$CIVIL_EPOC = 1948440;
var $f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC = 1948439;
var $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START = 1300;
var $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END = 1600;
var $f2f3e0e3a817edbd$var$UMALQURA_START_DAYS = 460322;
function $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, month, day) {
  return day + Math.ceil(29.5 * (month - 1)) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30) + epoch - 1;
}
function $f2f3e0e3a817edbd$var$julianDayToIslamic(calendar, epoch, jd) {
  let year = Math.floor((30 * (jd - epoch) + 10646) / 10631);
  let month = Math.min(12, Math.ceil((jd - (29 + $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, 1, 1))) / 29.5) + 1);
  let day = jd - $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, month, 1) + 1;
  return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(calendar, year, month, day);
}
function $f2f3e0e3a817edbd$var$isLeapYear(year) {
  return (14 + 11 * year) % 30 < 11;
}
var $f2f3e0e3a817edbd$export$2066795aadd37bfc = class {
  fromJulianDay(jd) {
    return $f2f3e0e3a817edbd$var$julianDayToIslamic(this, $f2f3e0e3a817edbd$var$CIVIL_EPOC, jd);
  }
  toJulianDay(date) {
    return $f2f3e0e3a817edbd$var$islamicToJulianDay($f2f3e0e3a817edbd$var$CIVIL_EPOC, date.year, date.month, date.day);
  }
  getDaysInMonth(date) {
    let length = 29 + date.month % 2;
    if (date.month === 12 && $f2f3e0e3a817edbd$var$isLeapYear(date.year))
      length++;
    return length;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(date) {
    return $f2f3e0e3a817edbd$var$isLeapYear(date.year) ? 355 : 354;
  }
  getYearsInEra() {
    return 9665;
  }
  getEras() {
    return [
      "AH"
    ];
  }
  constructor() {
    this.identifier = "islamic-civil";
  }
};
var $f2f3e0e3a817edbd$export$37f0887f2f9d22f7 = class extends $f2f3e0e3a817edbd$export$2066795aadd37bfc {
  fromJulianDay(jd) {
    return $f2f3e0e3a817edbd$var$julianDayToIslamic(this, $f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC, jd);
  }
  toJulianDay(date) {
    return $f2f3e0e3a817edbd$var$islamicToJulianDay($f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC, date.year, date.month, date.day);
  }
  constructor(...args) {
    super(...args);
    this.identifier = "islamic-tbla";
  }
};
var $f2f3e0e3a817edbd$var$UMALQURA_DATA = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
var $f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH;
var $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE;
function $f2f3e0e3a817edbd$var$umalquraYearStart(year) {
  return $f2f3e0e3a817edbd$var$UMALQURA_START_DAYS + $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START];
}
function $f2f3e0e3a817edbd$var$umalquraMonthLength(year, month) {
  let idx = year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START;
  let mask = 1 << 11 - (month - 1);
  if (($f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH[idx] & mask) === 0)
    return 29;
  else
    return 30;
}
function $f2f3e0e3a817edbd$var$umalquraMonthStart(year, month) {
  let day = $f2f3e0e3a817edbd$var$umalquraYearStart(year);
  for (let i = 1; i < month; i++)
    day += $f2f3e0e3a817edbd$var$umalquraMonthLength(year, i);
  return day;
}
function $f2f3e0e3a817edbd$var$umalquraYearLength(year) {
  return $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year + 1 - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START] - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START];
}
var $f2f3e0e3a817edbd$export$5baab4758c231076 = class extends $f2f3e0e3a817edbd$export$2066795aadd37bfc {
  fromJulianDay(jd) {
    let days = jd - $f2f3e0e3a817edbd$var$CIVIL_EPOC;
    let startDays = $f2f3e0e3a817edbd$var$umalquraYearStart($f2f3e0e3a817edbd$var$UMALQURA_YEAR_START);
    let endDays = $f2f3e0e3a817edbd$var$umalquraYearStart($f2f3e0e3a817edbd$var$UMALQURA_YEAR_END);
    if (days < startDays || days > endDays)
      return super.fromJulianDay(jd);
    else {
      let y = $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START - 1;
      let m = 1;
      let d = 1;
      while (d > 0) {
        y++;
        d = days - $f2f3e0e3a817edbd$var$umalquraYearStart(y) + 1;
        let yearLength = $f2f3e0e3a817edbd$var$umalquraYearLength(y);
        if (d === yearLength) {
          m = 12;
          break;
        } else if (d < yearLength) {
          let monthLength = $f2f3e0e3a817edbd$var$umalquraMonthLength(y, m);
          m = 1;
          while (d > monthLength) {
            d -= monthLength;
            m++;
            monthLength = $f2f3e0e3a817edbd$var$umalquraMonthLength(y, m);
          }
          break;
        }
      }
      return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, y, m, days - $f2f3e0e3a817edbd$var$umalquraMonthStart(y, m) + 1);
    }
  }
  toJulianDay(date) {
    if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END)
      return super.toJulianDay(date);
    return $f2f3e0e3a817edbd$var$CIVIL_EPOC + $f2f3e0e3a817edbd$var$umalquraMonthStart(date.year, date.month) + (date.day - 1);
  }
  getDaysInMonth(date) {
    if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END)
      return super.getDaysInMonth(date);
    return $f2f3e0e3a817edbd$var$umalquraMonthLength(date.year, date.month);
  }
  getDaysInYear(date) {
    if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END)
      return super.getDaysInYear(date);
    return $f2f3e0e3a817edbd$var$umalquraYearLength(date.year);
  }
  constructor() {
    super();
    this.identifier = "islamic-umalqura";
    if (!$f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH)
      $f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH = new Uint16Array(Uint8Array.from(atob($f2f3e0e3a817edbd$var$UMALQURA_DATA), (c) => c.charCodeAt(0)).buffer);
    if (!$f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE) {
      $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE = new Uint32Array($f2f3e0e3a817edbd$var$UMALQURA_YEAR_END - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START + 1);
      let yearStart = 0;
      for (let year = $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START; year <= $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END; year++) {
        $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START] = yearStart;
        for (let i = 1; i <= 12; i++)
          yearStart += $f2f3e0e3a817edbd$var$umalquraMonthLength(year, i);
      }
    }
  }
};

// node_modules/.pnpm/@internationalized+date@3.5.4/node_modules/@internationalized/date/dist/HebrewCalendar.mjs
var $7c5f6fbf42389787$var$HEBREW_EPOCH = 347997;
var $7c5f6fbf42389787$var$HOUR_PARTS = 1080;
var $7c5f6fbf42389787$var$DAY_PARTS = 24 * $7c5f6fbf42389787$var$HOUR_PARTS;
var $7c5f6fbf42389787$var$MONTH_DAYS = 29;
var $7c5f6fbf42389787$var$MONTH_FRACT = 12 * $7c5f6fbf42389787$var$HOUR_PARTS + 793;
var $7c5f6fbf42389787$var$MONTH_PARTS = $7c5f6fbf42389787$var$MONTH_DAYS * $7c5f6fbf42389787$var$DAY_PARTS + $7c5f6fbf42389787$var$MONTH_FRACT;
function $7c5f6fbf42389787$var$isLeapYear(year) {
  return (0, $2b4dce13dd5a17fa$export$842a2cf37af977e1)(year * 7 + 1, 19) < 7;
}
function $7c5f6fbf42389787$var$hebrewDelay1(year) {
  let months = Math.floor((235 * year - 234) / 19);
  let parts = 12084 + 13753 * months;
  let day = months * 29 + Math.floor(parts / 25920);
  if ((0, $2b4dce13dd5a17fa$export$842a2cf37af977e1)(3 * (day + 1), 7) < 3)
    day += 1;
  return day;
}
function $7c5f6fbf42389787$var$hebrewDelay2(year) {
  let last = $7c5f6fbf42389787$var$hebrewDelay1(year - 1);
  let present = $7c5f6fbf42389787$var$hebrewDelay1(year);
  let next = $7c5f6fbf42389787$var$hebrewDelay1(year + 1);
  if (next - present === 356)
    return 2;
  if (present - last === 382)
    return 1;
  return 0;
}
function $7c5f6fbf42389787$var$startOfYear(year) {
  return $7c5f6fbf42389787$var$hebrewDelay1(year) + $7c5f6fbf42389787$var$hebrewDelay2(year);
}
function $7c5f6fbf42389787$var$getDaysInYear(year) {
  return $7c5f6fbf42389787$var$startOfYear(year + 1) - $7c5f6fbf42389787$var$startOfYear(year);
}
function $7c5f6fbf42389787$var$getYearType(year) {
  let yearLength = $7c5f6fbf42389787$var$getDaysInYear(year);
  if (yearLength > 380)
    yearLength -= 30;
  switch (yearLength) {
    case 353:
      return 0;
    case 354:
      return 1;
    case 355:
      return 2;
  }
}
function $7c5f6fbf42389787$var$getDaysInMonth(year, month) {
  if (month >= 6 && !$7c5f6fbf42389787$var$isLeapYear(year))
    month++;
  if (month === 4 || month === 7 || month === 9 || month === 11 || month === 13)
    return 29;
  let yearType = $7c5f6fbf42389787$var$getYearType(year);
  if (month === 2)
    return yearType === 2 ? 30 : 29;
  if (month === 3)
    return yearType === 0 ? 29 : 30;
  if (month === 6)
    return $7c5f6fbf42389787$var$isLeapYear(year) ? 30 : 0;
  return 30;
}
var $7c5f6fbf42389787$export$ca405048b8fb5af = class {
  fromJulianDay(jd) {
    let d = jd - $7c5f6fbf42389787$var$HEBREW_EPOCH;
    let m = d * $7c5f6fbf42389787$var$DAY_PARTS / $7c5f6fbf42389787$var$MONTH_PARTS;
    let year = Math.floor((19 * m + 234) / 235) + 1;
    let ys = $7c5f6fbf42389787$var$startOfYear(year);
    let dayOfYear = Math.floor(d - ys);
    while (dayOfYear < 1) {
      year--;
      ys = $7c5f6fbf42389787$var$startOfYear(year);
      dayOfYear = Math.floor(d - ys);
    }
    let month = 1;
    let monthStart = 0;
    while (monthStart < dayOfYear) {
      monthStart += $7c5f6fbf42389787$var$getDaysInMonth(year, month);
      month++;
    }
    month--;
    monthStart -= $7c5f6fbf42389787$var$getDaysInMonth(year, month);
    let day = dayOfYear - monthStart;
    return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, year, month, day);
  }
  toJulianDay(date) {
    let jd = $7c5f6fbf42389787$var$startOfYear(date.year);
    for (let month = 1; month < date.month; month++)
      jd += $7c5f6fbf42389787$var$getDaysInMonth(date.year, month);
    return jd + date.day + $7c5f6fbf42389787$var$HEBREW_EPOCH;
  }
  getDaysInMonth(date) {
    return $7c5f6fbf42389787$var$getDaysInMonth(date.year, date.month);
  }
  getMonthsInYear(date) {
    return $7c5f6fbf42389787$var$isLeapYear(date.year) ? 13 : 12;
  }
  getDaysInYear(date) {
    return $7c5f6fbf42389787$var$getDaysInYear(date.year);
  }
  getYearsInEra() {
    return 9999;
  }
  getEras() {
    return [
      "AM"
    ];
  }
  balanceYearMonth(date, previousDate) {
    if (previousDate.year !== date.year) {
      if ($7c5f6fbf42389787$var$isLeapYear(previousDate.year) && !$7c5f6fbf42389787$var$isLeapYear(date.year) && previousDate.month > 6)
        date.month--;
      else if (!$7c5f6fbf42389787$var$isLeapYear(previousDate.year) && $7c5f6fbf42389787$var$isLeapYear(date.year) && previousDate.month > 6)
        date.month++;
    }
  }
  constructor() {
    this.identifier = "hebrew";
  }
};

// node_modules/.pnpm/@internationalized+date@3.5.4/node_modules/@internationalized/date/dist/EthiopicCalendar.mjs
var $b956b2d7a6cf451f$var$ETHIOPIC_EPOCH = 1723856;
var $b956b2d7a6cf451f$var$COPTIC_EPOCH = 1824665;
var $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA = 5500;
function $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, month, day) {
  return epoch + 365 * year + Math.floor(year / 4) + 30 * (month - 1) + day - 1;
}
function $b956b2d7a6cf451f$var$julianDayToCE(epoch, jd) {
  let year = Math.floor(4 * (jd - epoch) / 1461);
  let month = 1 + Math.floor((jd - $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, 1, 1)) / 30);
  let day = jd + 1 - $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, month, 1);
  return [
    year,
    month,
    day
  ];
}
function $b956b2d7a6cf451f$var$getLeapDay(year) {
  return Math.floor(year % 4 / 3);
}
function $b956b2d7a6cf451f$var$getDaysInMonth(year, month) {
  if (month % 13 !== 0)
    return 30;
  else
    return $b956b2d7a6cf451f$var$getLeapDay(year) + 5;
}
var $b956b2d7a6cf451f$export$26ba6eab5e20cd7d = class {
  fromJulianDay(jd) {
    let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, jd);
    let era = "AM";
    if (year <= 0) {
      era = "AA";
      year += $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
    }
    return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, era, year, month, day);
  }
  toJulianDay(date) {
    let year = date.year;
    if (date.era === "AA")
      year -= $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
    return $b956b2d7a6cf451f$var$ceToJulianDay($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, year, date.month, date.day);
  }
  getDaysInMonth(date) {
    return $b956b2d7a6cf451f$var$getDaysInMonth(date.year, date.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(date) {
    return 365 + $b956b2d7a6cf451f$var$getLeapDay(date.year);
  }
  getYearsInEra(date) {
    return date.era === "AA" ? 9999 : 9991;
  }
  getEras() {
    return [
      "AA",
      "AM"
    ];
  }
  constructor() {
    this.identifier = "ethiopic";
  }
};
var $b956b2d7a6cf451f$export$d72e0c37005a4914 = class extends $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
  fromJulianDay(jd) {
    let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, jd);
    year += $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
    return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, "AA", year, month, day);
  }
  getEras() {
    return [
      "AA"
    ];
  }
  getYearsInEra() {
    return 9999;
  }
  constructor(...args) {
    super(...args);
    this.identifier = "ethioaa";
  }
};
var $b956b2d7a6cf451f$export$fe6243cbe1a4b7c1 = class extends $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
  fromJulianDay(jd) {
    let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$COPTIC_EPOCH, jd);
    let era = "CE";
    if (year <= 0) {
      era = "BCE";
      year = 1 - year;
    }
    return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, era, year, month, day);
  }
  toJulianDay(date) {
    let year = date.year;
    if (date.era === "BCE")
      year = 1 - year;
    return $b956b2d7a6cf451f$var$ceToJulianDay($b956b2d7a6cf451f$var$COPTIC_EPOCH, year, date.month, date.day);
  }
  getDaysInMonth(date) {
    let year = date.year;
    if (date.era === "BCE")
      year = 1 - year;
    return $b956b2d7a6cf451f$var$getDaysInMonth(year, date.month);
  }
  isInverseEra(date) {
    return date.era === "BCE";
  }
  balanceDate(date) {
    if (date.year <= 0) {
      date.era = date.era === "BCE" ? "CE" : "BCE";
      date.year = 1 - date.year;
    }
  }
  getEras() {
    return [
      "BCE",
      "CE"
    ];
  }
  getYearsInEra(date) {
    return date.era === "BCE" ? 9999 : 9715;
  }
  constructor(...args) {
    super(...args);
    this.identifier = "coptic";
  }
};

// node_modules/.pnpm/@internationalized+date@3.5.4/node_modules/@internationalized/date/dist/createCalendar.mjs
function $64244302c3013299$export$dd0bbc9b26defe37(name) {
  switch (name) {
    case "buddhist":
      return new (0, $8d73d47422ca7302$export$42d20a78301dee44)();
    case "ethiopic":
      return new (0, $b956b2d7a6cf451f$export$26ba6eab5e20cd7d)();
    case "ethioaa":
      return new (0, $b956b2d7a6cf451f$export$d72e0c37005a4914)();
    case "coptic":
      return new (0, $b956b2d7a6cf451f$export$fe6243cbe1a4b7c1)();
    case "hebrew":
      return new (0, $7c5f6fbf42389787$export$ca405048b8fb5af)();
    case "indian":
      return new (0, $82c358003bdda0a8$export$39f31c639fa15726)();
    case "islamic-civil":
      return new (0, $f2f3e0e3a817edbd$export$2066795aadd37bfc)();
    case "islamic-tbla":
      return new (0, $f2f3e0e3a817edbd$export$37f0887f2f9d22f7)();
    case "islamic-umalqura":
      return new (0, $f2f3e0e3a817edbd$export$5baab4758c231076)();
    case "japanese":
      return new (0, $62225008020f0a13$export$b746ab2b60cdffbf)();
    case "persian":
      return new (0, $f3ed2e4472ae7e25$export$37fccdbfd14c5939)();
    case "roc":
      return new (0, $5f31bd6f0c8940b2$export$65e01080afcb0799)();
    case "gregory":
    default:
      return new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)();
  }
}

// node_modules/.pnpm/@internationalized+date@3.5.4/node_modules/@internationalized/date/dist/DateFormatter.mjs
var $fb18d541ea1ad717$var$formatterCache = /* @__PURE__ */ new Map();
var $fb18d541ea1ad717$export$ad991b66133851cf = class {
  /** Formats a date as a string according to the locale and format options passed to the constructor. */
  format(value) {
    return this.formatter.format(value);
  }
  /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */
  formatToParts(value) {
    return this.formatter.formatToParts(value);
  }
  /** Formats a date range as a string. */
  formatRange(start, end) {
    if (typeof this.formatter.formatRange === "function")
      return this.formatter.formatRange(start, end);
    if (end < start)
      throw new RangeError("End date must be >= start date");
    return `${this.formatter.format(start)} – ${this.formatter.format(end)}`;
  }
  /** Formats a date range as an array of parts. */
  formatRangeToParts(start, end) {
    if (typeof this.formatter.formatRangeToParts === "function")
      return this.formatter.formatRangeToParts(start, end);
    if (end < start)
      throw new RangeError("End date must be >= start date");
    let startParts = this.formatter.formatToParts(start);
    let endParts = this.formatter.formatToParts(end);
    return [
      ...startParts.map((p) => ({
        ...p,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...endParts.map((p) => ({
        ...p,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let resolvedOptions = this.formatter.resolvedOptions();
    if ($fb18d541ea1ad717$var$hasBuggyResolvedHourCycle()) {
      if (!this.resolvedHourCycle)
        this.resolvedHourCycle = $fb18d541ea1ad717$var$getResolvedHourCycle(resolvedOptions.locale, this.options);
      resolvedOptions.hourCycle = this.resolvedHourCycle;
      resolvedOptions.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12";
    }
    if (resolvedOptions.calendar === "ethiopic-amete-alem")
      resolvedOptions.calendar = "ethioaa";
    return resolvedOptions;
  }
  constructor(locale, options = {}) {
    this.formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options);
    this.options = options;
  }
};
var $fb18d541ea1ad717$var$hour12Preferences = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options = {}) {
  if (typeof options.hour12 === "boolean" && $fb18d541ea1ad717$var$hasBuggyHour12Behavior()) {
    options = {
      ...options
    };
    let pref = $fb18d541ea1ad717$var$hour12Preferences[String(options.hour12)][locale.split("-")[0]];
    let defaultHourCycle = options.hour12 ? "h12" : "h23";
    options.hourCycle = pref !== null && pref !== void 0 ? pref : defaultHourCycle;
    delete options.hour12;
  }
  let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : "");
  if ($fb18d541ea1ad717$var$formatterCache.has(cacheKey))
    return $fb18d541ea1ad717$var$formatterCache.get(cacheKey);
  let numberFormatter = new Intl.DateTimeFormat(locale, options);
  $fb18d541ea1ad717$var$formatterCache.set(cacheKey, numberFormatter);
  return numberFormatter;
}
var $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = null;
function $fb18d541ea1ad717$var$hasBuggyHour12Behavior() {
  if ($fb18d541ea1ad717$var$_hasBuggyHour12Behavior == null)
    $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      hour12: false
    }).format(new Date(2020, 2, 3, 0)) === "24";
  return $fb18d541ea1ad717$var$_hasBuggyHour12Behavior;
}
var $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = null;
function $fb18d541ea1ad717$var$hasBuggyResolvedHourCycle() {
  if ($fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle == null)
    $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = new Intl.DateTimeFormat("fr", {
      hour: "numeric",
      hour12: false
    }).resolvedOptions().hourCycle === "h12";
  return $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle;
}
function $fb18d541ea1ad717$var$getResolvedHourCycle(locale, options) {
  if (!options.timeStyle && !options.hour)
    return void 0;
  locale = locale.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "");
  locale += (locale.includes("-u-") ? "" : "-u") + "-nu-latn";
  let formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, {
    ...options,
    timeZone: void 0
    // use local timezone
  });
  let min = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 0)).find((p) => p.type === "hour").value, 10);
  let max = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 23)).find((p) => p.type === "hour").value, 10);
  if (min === 0 && max === 23)
    return "h23";
  if (min === 24 && max === 23)
    return "h24";
  if (min === 0 && max === 11)
    return "h11";
  if (min === 12 && max === 11)
    return "h12";
  throw new Error("Unexpected hour cycle result");
}

export {
  $3b62074eb05584b2$export$80ee6245ec4f29ec,
  $14e0f24ef4ac5c92$export$ea39ec197993aef0,
  $14e0f24ef4ac5c92$export$a18c89cbd24170ff,
  $14e0f24ef4ac5c92$export$5841f9eb9773f25f,
  $14e0f24ef4ac5c92$export$91b62ebf2ba703ee,
  $14e0f24ef4ac5c92$export$5a8da0c44a3afdf2,
  $14e0f24ef4ac5c92$export$ea840f5a6dda8147,
  $14e0f24ef4ac5c92$export$629b0a497aa65267,
  $14e0f24ef4ac5c92$export$2061056d06d7cdf7,
  $14e0f24ef4ac5c92$export$461939dd4422153,
  $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3,
  $14e0f24ef4ac5c92$export$126c91c941de7e,
  $14e0f24ef4ac5c92$export$aa8b41735afcabd2,
  $14e0f24ef4ac5c92$export$a5a3b454ada2268e,
  $14e0f24ef4ac5c92$export$a2258d9c4118825c,
  $14e0f24ef4ac5c92$export$f91e89d3d0406102,
  $14e0f24ef4ac5c92$export$8b7aa55c66d5569e,
  $14e0f24ef4ac5c92$export$5412ac11713b72ad,
  $14e0f24ef4ac5c92$export$b2f4953d301981d5,
  $14e0f24ef4ac5c92$export$42c81a444fbfb5d4,
  $14e0f24ef4ac5c92$export$ef8b6d9133084f4e,
  $14e0f24ef4ac5c92$export$ccc1b2479e7dd654,
  $14e0f24ef4ac5c92$export$5c333a116e949cdd,
  $14e0f24ef4ac5c92$export$a75f2bff57811055,
  $14e0f24ef4ac5c92$export$618d60ea299da42,
  $14e0f24ef4ac5c92$export$ee9d87258e1d19ed,
  $11d87f3f76e88657$export$1b96692a1ba042ac,
  $11d87f3f76e88657$export$e57ff100d91bd4b9,
  $11d87f3f76e88657$export$93522d1a439f3617,
  $11d87f3f76e88657$export$b21e0b124e224484,
  $11d87f3f76e88657$export$d33f79e3ffc3dc83,
  $11d87f3f76e88657$export$b4a036af3fc0b032,
  $11d87f3f76e88657$export$84c95a83c799e074,
  $11d87f3f76e88657$export$538b00033cc11c75,
  $11d87f3f76e88657$export$d9b67bc93c097491,
  $fae977aafc393c5c$export$c9698ec7f05a07e1,
  $fae977aafc393c5c$export$6b862160d295c8e,
  $fae977aafc393c5c$export$588937bcd60ade55,
  $fae977aafc393c5c$export$fd7893f06e92a6a4,
  $fae977aafc393c5c$export$5adfdab05168c219,
  $fae977aafc393c5c$export$8e384432362ed0f0,
  $fae977aafc393c5c$export$ecae829bb3747ea6,
  _class_private_field_init,
  $35ea8db9cb2ccb90$export$99faa760c7908e4f,
  $35ea8db9cb2ccb90$export$680ea196effce5f,
  $35ea8db9cb2ccb90$export$ca871e8dbb80966f,
  $35ea8db9cb2ccb90$export$d3b7288e7994edea,
  $62225008020f0a13$export$b746ab2b60cdffbf,
  $8d73d47422ca7302$export$42d20a78301dee44,
  $5f31bd6f0c8940b2$export$65e01080afcb0799,
  $f3ed2e4472ae7e25$export$37fccdbfd14c5939,
  $82c358003bdda0a8$export$39f31c639fa15726,
  $f2f3e0e3a817edbd$export$2066795aadd37bfc,
  $f2f3e0e3a817edbd$export$37f0887f2f9d22f7,
  $f2f3e0e3a817edbd$export$5baab4758c231076,
  $7c5f6fbf42389787$export$ca405048b8fb5af,
  $b956b2d7a6cf451f$export$26ba6eab5e20cd7d,
  $b956b2d7a6cf451f$export$d72e0c37005a4914,
  $b956b2d7a6cf451f$export$fe6243cbe1a4b7c1,
  $64244302c3013299$export$dd0bbc9b26defe37,
  $fb18d541ea1ad717$export$ad991b66133851cf
};
//# sourceMappingURL=chunk-AUG3XKC7.js.map
