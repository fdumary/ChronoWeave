─── FIGMA DESIGN PROMPT: ChronoWeave App ───
APP OVERVIEW
ChronoWeave is a dark-mode wellness app for people with ADHD who struggle with time perception (they don't feel how fast time is passing). It helps users understand when their 'felt time' drifts from 'real time' and gently nudges them back on track. The tone is calm, warm, non-judgmental, and slightly scientific — like a kind coach, not a strict alarm.
DESIGN LANGUAGE
Style: Cosmic wellness. Dark and deep like space, warm like a campfire. Think: Calm app meets NASA mission control meets soft aurora borealis.
Mood: Reassuring, not alarming. Every colour choice, label, and animation should feel like a hug, not a warning.
COLOUR SYSTEM (use exactly these)
Background Primary:    #0F1123  (very dark navy — all screens)
Background Card:       #1E2040  (slightly lighter navy for cards/modals)
Background Elevated:   #252850  (for selected states, active toggles)
Primary Teal:          #1FC8A0  (main CTA buttons, active icons, charts)
Primary Gradient:      #1FC8A0 → #17A882  (all primary buttons left→right)
Stable / Safe:         #1FC8A0  (green-teal — used for 'Stable' drift badge)
Moderate Drift:        #A78BFA  (soft purple — used for 'Moderate' badge)
Fast Drift:            #F472B6  (soft pink — used for 'Fast Drift' badge)
Morning Accent:        #FBBF24  (warm amber — morning icon, chart line)
Text Primary:          #FFFFFF  (all headings and bold text)
Text Secondary:        #AAAACC  (subtitles, descriptions, axis labels)
Text Disabled:         #555577  (inactive states, placeholder text)
Divider Lines:         #2A2B50  (very subtle line separators)
NEVER use: pure white backgrounds, lime green, bright red, black #000000
TYPOGRAPHY
Headings (H1):    SF Pro Display Bold, 34pt, white #FFFFFF, tracking -0.5
Headings (H2):    SF Pro Display Semibold, 24pt, white #FFFFFF
Body text:        SF Pro Text Regular, 16pt, #AAAACC, line-height 1.5x
Metric numbers:   SF Pro Display Bold, 40pt, coloured by drift level
Labels/badges:    SF Pro Text Semibold, 13pt, uppercase, letter-spacing +1
COMPONENT SPECS
Primary Button:     Height 56px, full width minus 24px margins, radius 28px,
                    gradient #1FC8A0→#17A882, white bold text 17pt
Secondary Button:   Height 56px, full width minus 24px margins, radius 28px,
                    background #1E2040, white regular text 17pt
Card:               Background #1E2040, radius 20px, padding 20px all sides,
                    subtle shadow: 0px 4px 20px rgba(0,0,0,0.4)
Toggle (on):        Thumb white, track gradient #1FC8A0→#17A882
Toggle (off):       Thumb white, track #2A2B50 (dark grey)
Input field:        Background #252850, radius 14px, height 52px, border
                    1px #3A3B68 (focus: 2px #1FC8A0), text white, placeholder #555577
Nav bar:            Background #1A1B3C, blur effect, height 83px (includes safe area)
SCREEN-BY-SCREEN INSTRUCTIONS
SCREEN 0 — Splash Screen (NEW — ADD THIS)
Background: #0F1123 full bleed. Centre: ChronoWeave logo (⌛ icon + wordmark in #1FC8A0). Below: tagline 'Know your time. Own your day.' in 16pt #AAAACC. Add a soft circular pulse glow animation behind the logo (opacity 0.15, radius grows from 40px to 80px, loops every 2s). Screen auto-dismisses after 2s into the landing screen.
SCREEN 1 — Landing Screen (keep mostly, minor fixes)
Keep the dark background and 3D character. Fix: the 'Login' button currently has a semi-transparent dark background — change it to the Secondary Button spec (#1E2040, radius 28px). The 'Sign Up' button is correct — keep it. Ensure buttons are full-width (margin 24px each side) and sit 34px above the bottom safe area.
SCREEN 2 — Create Account (good, minor tweak)
This screen is mostly correct. Fix: the input fields look slightly too dark — change to #252850 background. Ensure the 'Create Account' teal gradient button matches the Primary Button spec exactly. 'Continue as Guest' should match Secondary Button spec. Add a small show/hide password eye icon inside the password field.
SCREEN 3 — Choose Your Avatar (needs redesign)
REPLACE the colour blobs with illustrated character icons (small animals or abstract faces). Suggested characters with brand colour background: Owl (#A78BFA purple), Fox (#F472B6 pink), Sloth (#1FC8A0 teal), Robot (#4DC8FF blue), Bear (#FBBF24 amber), Cloud (#C4B5FD lavender), Star (#F9A8D4 soft pink), Penguin (#34D399 green), Cat (#FB923C orange), Jellyfish (#818CF8 indigo), Sun (#FDE68A yellow), Moon (#6EE7B7 mint). Each icon in a rounded square, 72x72px, radius 18px. On selection: add a white ring border 2px + a soft white glow shadow.
SCREEN 4 — How does time feel? (looks good, small polish)
Keep this screen design. Polish: on tap/select each option, the card should animate — background changes from #252850 to a subtle gradient matching the emoji (⚡ yellow tint, 🐢 green tint, ☁ blue tint), border appears in #1FC8A0 (1px), and the icon badge glows softly. The 'Continue' button should be disabled grey (#555577) until a selection is made, then activates to the teal gradient.
SCREEN 5 — Calibration Test 'Hold Me' (needs improvements)
Keep the dark gradient background. Fix the empty space: add a concentric ring animation around the 'Hold Me' button — 3 rings, each fading out, radiating slowly like a sonar pulse (opacity 0.3, 0.15, 0.05; each ring radius expands over 2s). Add a tip text below the button: 'Don't count in your head — just breathe and feel the time.' in 15pt #AAAACC italic. The button itself: 140px diameter, teal fill, radius 70px, white bold text, inner glow when pressed (shadow inset white 0.2 opacity).
SCREEN 5B — Calibration Result (NEW — ADD THIS)
Background #0F1123. Top: progress bar (complete — all 3 segments teal). Centre: big emoji character reacting (e.g. 🚀 if fast, 🌊 if slow). Below: large result label e.g. 'Time Flier' in 40pt white bold. Sub-label: 'You released at 7.2 sec — your felt time runs faster than the clock.' in 16pt #AAAACC. Below that: a soft horizontal bar showing where they sit on a spectrum (Slow ←───●───→ Fast) with their position marked in teal. CTA: 'Continue to Second Test' teal gradient button. Small text: 'This is just a starting point — it changes with context!'
SCREEN 6 — Second Calibration & Third (keep, small polish)
Keep the gradient background. The 'Start Test' button looks slightly too compact — widen to full width minus 48px margins. The progress dots at the top should have the completed dot in solid teal, in-progress in teal outline, and not-yet in #2A2B50 grey.
SCREEN 7 — Home: Today's Rhythm (looks good, minor tweaks)
This screen is one of the best designed. Tweaks: the 3 metric cards (4h / 3h / 2h) should have a subtle gradient overlay on their top edge matching their accent colour (teal, purple, pink) fading to transparent — adds depth. The 'Rhythm Cues' toggle card looks slightly crowded — add 4px more padding inside. Time Stability Forecast cards look great — no changes needed.
SCREEN 8 — Drift Map (looks great, minor additions)
This screen is well-designed. Add: when a time-of-day card (Morning/Afternoon/Evening) is tapped, it expands to show a mini description: 'Your best focus window. Time tends to flow naturally here.' The circular progress rings look great. Add a small tap instruction hint: 'Tap any time to learn more ↓' in 13pt #555577 below the three stat cards.
SCREEN 9 — Drift Map detail scroll (Today's Flow chart)
The 'Today's Flow' card with the purple wave chart looks good. Fix: the chart area below the wave should be filled with a gradient (purple #A78BFA at top, transparent at bottom) not solid. The 'Swipe for insights >>' pill button should have a teal border (#1FC8A0, 1px) to make it more visible. The 'What does this mean?' card is perfect — keep it.
SCREEN 10 — Weekly Insights (MAJOR FIX — needs dark mode)
THIS SCREEN IS WHITE AND MUST BE CONVERTED. Change ALL backgrounds to #0F1123. Convert ALL text to white (#FFFFFF for headings, #AAAACC for body). The 'Weekly Drift Calendar' card becomes #1E2040, all the dot circles stay their colours (orange, red, purple), empty dots become #2A2B50. The 'Pattern Detected' green banner: change to a card with background #1E2040, left border 4px #1FC8A0, icon 💡 in teal, text white. 'Suggested Focus Windows' cards become #1E2040 background, the vertical coloured bars stay. Page background #0F1123 throughout.
SCREEN 11 — Accuracy Trend / Analytics (MAJOR FIX — needs dark mode)
THIS SCREEN IS WHITE AND MUST BE CONVERTED. The 'Accuracy Trend' line chart: change background to #1E2040, axis labels to #AAAACC, grid lines to #2A2B50, the blue line to teal #1FC8A0, and dots to white with teal outline. The 'What helped your focus?' chip buttons: change background to #252850, text to white, border to #3A3B68. On selection, border becomes #1FC8A0 and text becomes teal. The 'Run New Calibration Test' button MUST use the primary teal gradient (not dark navy). All page background: #0F1123.
SCREEN 12 — Live Nudge Active (excellent — keep, tiny polish)
This is one of the best screens. Polish only: the waveform background pattern (the curved lines behind the toggle cards) could be slightly more visible — increase opacity from ~5% to ~12%. The 'Monitoring' status pill looks great. The info card at the bottom that's being cut off — ensure it has a 'tap to expand' chevron icon in the top right corner.
SCREEN 13 — Settings / Preferences (MAJOR FIX — needs dark mode)
The top half (colour picker grid) is dark and looks fine. The bottom half (Time Format section + Save Changes button) is white and must be fixed. Change the white card background to #1E2040. Change 'Choose how time is displayed' text to #AAAACC. The selected '12-hour format' card: use the teal gradient as background (not solid green). The unselected '15:00-18:00' card: background #252850, text #AAAACC, border #2A2B50. 'Save Changes' button: teal gradient, full width. All section background: #0F1123.
NAVIGATION BAR
Background: #1A1B3C with a top border 1px #2A2B50. Use background blur effect. 4 tabs: Home (house icon), Drift Map (wave/map icon), Live Nudge (waveform icon — this is the CENTRE FAB button in teal #1FC8A0, 56px diameter, elevated), Analytics (trend up icon). Active tab icon: #1FC8A0 teal. Inactive tab icon: #555577. Add a 4px teal dot under the active icon. Height: 49px content area + safe area. The centre FAB button should have a soft teal glow (box-shadow 0 0 20px rgba(31,200,160,0.4)).
─── END OF FIGMA PROMPT ───
