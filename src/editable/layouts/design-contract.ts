import type { CSSProperties } from 'react'

/** The public collections design language. Keep JSX consuming these tokens. */
export const editableRootStyle = {
  '--slot4-page-bg': '#ecede7', '--slot4-page-text': '#2d2d2d', '--slot4-panel-bg': '#dcded3', '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#64645f', '--slot4-soft-muted-text': '#8a8a84', '--slot4-accent': '#ecf86e', '--slot4-accent-fill': '#2d2d2d',
  '--slot4-accent-soft': '#dfecff', '--slot4-on-accent': '#ffffff', '--slot4-dark-bg': '#2d2d2d', '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#dcded3', '--slot4-cream': '#ecede7', '--slot4-warm': '#dcded3', '--slot4-lavender': '#dfecff', '--slot4-gray': '#f6f6f6',
  '--slot4-body-gradient': 'none', '--editable-page-bg': '#ecede7', '--editable-page-text': '#2d2d2d', '--editable-container': '1750px',
  '--editable-border': '#d4d4d8', '--editable-nav-bg': '#ecede7', '--editable-nav-text': '#2d2d2d', '--editable-nav-active': '#2d2d2d',
  '--editable-nav-active-text': '#ffffff', '--editable-cta-bg': '#2d2d2d', '--editable-cta-text': '#ffffff', '--editable-search-bg': '#ffffff',
  '--editable-footer-bg': '#2d2d2d', '--editable-footer-text': '#ffffff',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]', pageText: 'text-[var(--slot4-page-text)]', panelBg: 'bg-[var(--slot4-panel-bg)]', panelText: 'text-[var(--slot4-page-text)]', surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  mutedText: 'text-[var(--slot4-muted-text)]', softMutedText: 'text-[var(--slot4-soft-muted-text)]', accentText: 'text-[var(--slot4-accent)]', accentBg: 'bg-[var(--slot4-accent-fill)]', accentSoftBg: 'bg-[var(--slot4-accent-soft)]', accentSoftText: 'text-[var(--slot4-page-text)]', onAccentText: 'text-[var(--slot4-on-accent)]', darkBg: 'bg-[var(--slot4-dark-bg)]', darkText: 'text-[var(--slot4-dark-text)]', mediaBg: 'bg-[var(--slot4-media-bg)]', creamBg: 'bg-[var(--slot4-cream)]', warmBg: 'bg-[var(--slot4-warm)]', lavenderBg: 'bg-[var(--slot4-lavender)]', grayBg: 'bg-[var(--slot4-gray)]', border: 'border-[var(--editable-border)]', darkBorder: 'border-white/15', shadow: 'shadow-none', shadowStrong: 'shadow-none', overlay: 'bg-[linear-gradient(180deg,transparent,rgba(45,45,45,.72))]',
} as const

export const editableDesignContract = {
  shell: { page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`, section: 'mx-auto w-full max-w-[var(--editable-container)] px-5 sm:px-8 lg:px-12', sectionY: 'py-20 sm:py-28 lg:py-36' },
  layout: { safeGrid: 'grid gap-5 md:grid-cols-2 xl:grid-cols-3', featureGrid: 'grid gap-8 lg:grid-cols-2 lg:items-center', rail: 'flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none]', minRailCard: 'w-72 shrink-0 snap-start' },
  type: { eyebrow: 'text-[11px] font-bold uppercase tracking-[.2em]', heroTitle: 'text-5xl font-semibold leading-[.86] tracking-[-.065em] sm:text-7xl lg:text-8xl', sectionTitle: 'text-4xl font-semibold leading-[.9] tracking-[-.06em] sm:text-6xl', body: 'text-base leading-relaxed' },
  surface: { card: `rounded-[2rem] border ${editablePalette.border} ${editablePalette.surfaceBg}`, soft: `rounded-[2rem] ${editablePalette.panelBg}`, dark: `rounded-[2rem] ${editablePalette.darkBg} ${editablePalette.darkText}` },
  button: { primary: 'inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-accent-fill)] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5', secondary: 'inline-flex items-center justify-center gap-2 rounded-full border border-[var(--editable-border)] bg-white px-6 py-3 text-sm font-bold transition hover:bg-[var(--slot4-accent)]', accent: 'inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-accent)] px-6 py-3 text-sm font-bold text-[var(--slot4-page-text)] transition hover:-translate-y-0.5' },
  media: { frame: `relative overflow-hidden rounded-[2rem] ${editablePalette.mediaBg}`, ratio: 'aspect-[4/3]' }, motion: { lift: 'transition duration-500 hover:-translate-y-1', fade: 'transition duration-500 hover:opacity-75' },
} as const

export const aiLayoutRules = ['Use the collections token contract; do not hardcode public visual colors or fonts in JSX.', 'Keep real post fetching and postHref intact.', 'Profiles remain direct-route-only.'] as const
