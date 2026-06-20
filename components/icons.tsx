type IconProps = {
  className?: string;
};

const base = "h-5 w-5";

export function IconUpload({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 16V4M12 4 7 9M12 4l5 5M5 16v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconTarget({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function IconLayers({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3 21 8l-9 5-9-5 9-5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M3 12l9 5 9-5M3 16l9 5 9-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCompass({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M14.8 9.2 13 13l-3.8 1.8L11 11l3.8-1.8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSend({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M21 3 3 10.5l7 2.5 2.5 7L21 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 3 10.5 13.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconPhoneCall({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M5 4h3.2l1.3 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.3V17a2 2 0 0 1-2 2c-7 0-13-6-13-13a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconRotate({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M18 3v4h-4M6 21v-4h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCalendarCheck({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="3.5"
        y="5"
        width="17"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M3.5 9.5h17M8 3v4M16 3v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8.5 14l2 2 4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconFileText({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14 3v4h4M9 12.5h6M9 16h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconBookOpen({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 6.5c-1.6-1.3-3.8-2-6.5-2A2 2 0 0 0 3.5 6.5v11A2 2 0 0 1 5.5 16c2.6 0 4.7.7 6.5 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6.5c1.6-1.3 3.8-2 6.5-2a2 2 0 0 1 2 2v11a2 2 0 0 0-2-2c-2.6 0-4.7.7-6.5 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 6.5V19" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconCircleSlash({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6.3 6.3l11.4 11.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconWaveform({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M2 12h2.2M6 8v8M9.5 4v16M13 9v6M16.5 6v12M20 11v2M21.8 12H22"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconLifeBuoy({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 3.5v5M12 15.5v5M3.5 12h5M15.5 12h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconAlertTriangle({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 4 21 19H3L12 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 10v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function IconPlateau({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M3 18h3l4-9h4l6 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 5h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconClimb({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSetback({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M7 7 17 17M17 9v8h-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconBusyManager({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="8.5" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3 20c0-3.4 2.5-5.8 5.5-5.8 1 0 1.9.2 2.7.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="17" cy="16" r="4.3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M17 13.5V16l1.8 1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconShuffle({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M3 7h4l3 4 3-4h6M3 17h4l3-4 3 4h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 4l3 3-3 3M17 14l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconLinkedIn({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.98h3.96V21H3V9.98ZM9.5 9.98h3.8v1.51h.05c.53-.96 1.82-1.97 3.74-1.97 4 0 4.74 2.4 4.74 5.53V21h-3.96v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21H9.5V9.98Z" />
    </svg>
  );
}

export function IconTikTok({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.5 3c.4 2.2 1.9 3.7 4.2 3.9v3.1c-1.5 0-2.9-.4-4.2-1.3v6.3a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v3.2a2.5 2.5 0 1 0 1.8 2.4V3h2.9Z" />
    </svg>
  );
}

export function IconX({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4 3h3.6l4 5.3L16 3h3.6l-6 7.4L20 21h-3.6l-4.3-5.7L7 21H3.4l6.4-7.9L4 3Z" />
    </svg>
  );
}
