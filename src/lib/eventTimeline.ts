export type TimelinePhase = {
  phase: string;
  title: string;
  date: string;
  dateStart: Date;
  dateEnd: Date;
  desc: string;
};

export type TimelineState = "In Progress" | "Upcoming" | "Completed";

export type CurrentTimelineStatus = {
  title: string;
  date: string;
  state: TimelineState;
  phase?: string;
};

const PHASE_1_START_TEXT = "March 16, 2026";
const FINAL_PHASE_END_TEXT = "March 28, 2026";

export const TIMELINE_PHASES: TimelinePhase[] = [
  {
    phase: "Phase 1",
    title: "Registration and Idea Submission",
    date: "March 16 - March 25, 2026",
    dateStart: new Date("2026-03-16T10:00:00+05:30"),
    dateEnd: new Date("2026-03-25T14:00:00+05:30"), // ✅ 2 PM end
    desc: "Teams register and submit their idea PPT on Unstop based on the given themes.",
  },
  {
    phase: "Phase 2",
    title: "Online Screening & Shortlisting",
    date: "March 26, 2026",
    dateStart: new Date("2026-03-26T00:00:00+05:30"),
    dateEnd: new Date("2026-03-26T14:00:00+05:30"), // ✅ till 2 PM
    desc: "Submissions are reviewed and shortlisted teams are selected.",
  },
  {
    phase: "Phase 3",
    title: "Finalist Announcement",
    date: "March 26, 2026",
    dateStart: new Date("2026-03-26T14:00:00+05:30"), // ✅ starts at 2 PM
    dateEnd: new Date("2026-03-26T23:59:59+05:30"),
    desc: "Shortlisted teams are announced and further instructions are shared.",
  },
  {
    phase: "Phase 4",
    title: "Problem Statement Announcement",
    date: "March 27, 2026",
    dateStart: new Date("2026-03-27T08:00:00+05:30"), // ✅ 8 AM
    dateEnd: new Date("2026-03-27T23:59:59+05:30"),
    desc: "Problem statement is released for final round. Teams can start planning and building.",
  },
  {
    phase: "Phase 5",
    title: "Buildathon Day - 6 Hour Sprint",
    date: "March 28, 2026",
    dateStart: new Date("2026-03-28T00:00:00+05:30"),
    dateEnd: new Date("2026-03-28T23:59:59+05:30"),
    desc: "Teams complete and present their prototype during the 6-hour offline Buildathon.",
  },
];

export const getCurrentPhaseIndex = (now: Date = new Date()): number => {
  let matchedIndex = -1;

  for (let i = 0; i < TIMELINE_PHASES.length; i += 1) {
    if (now >= TIMELINE_PHASES[i].dateStart && now <= TIMELINE_PHASES[i].dateEnd) {
      // Resolve overlaps in favor of the latest phase in the schedule.
      matchedIndex = i;
    }
  }

  if (matchedIndex !== -1) return matchedIndex;
  if (now < TIMELINE_PHASES[0].dateStart) return -1;
  return TIMELINE_PHASES.length;
};

export const getCurrentTimelineStatus = (now: Date = new Date()): CurrentTimelineStatus => {
  const currentPhase = getCurrentPhaseIndex(now);

  if (currentPhase >= 0 && currentPhase < TIMELINE_PHASES.length) {
    const current = TIMELINE_PHASES[currentPhase];
    return {
      title: current.title,
      date: current.date,
      state: "In Progress",
      phase: current.phase,
    };
  }

  if (currentPhase === -1) {
    return {
      title: TIMELINE_PHASES[0].title,
      date: `Phase 1 starts on ${PHASE_1_START_TEXT}`,
      state: "Upcoming",
      phase: TIMELINE_PHASES[0].phase,
    };
  }

  return {
    title: "Buildathon Completed",
    date: `Final phase completed on ${FINAL_PHASE_END_TEXT}`,
    state: "Completed",
  };
};
