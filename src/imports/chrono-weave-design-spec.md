Here's your exact copy-paste prompt for Figma Make:

---

```
Design a complete dark mode mobile app called ChronoWeave for iPhone (base size 390×844px, 
responsive for SE 375px to 16 Pro Max 430px). This is a wellness app for people with ADHD 
who struggle with time perception. Tone: calm, warm, non-judgmental — like a kind coach, 
not a strict alarm. Style: cosmic wellness — deep space dark meets soft aurora glow.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COLOUR SYSTEM (use ONLY these — no exceptions)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background (all screens):     #0F1123
Card / panel background:       #1E2040
Elevated / selected state:     #252850
Input fields:                  #252850
Primary teal (CTAs, icons):    #1FC8A0
Primary button gradient:       #1FC8A0 → #17A882 (left to right)
Stable badge:                  #1FC8A0 (teal)
Moderate drift badge:          #A78BFA (soft purple)
Fast drift badge:              #F472B6 (soft pink)
Morning accent:                #FBBF24 (warm amber)
Heading text:                  #FFFFFF
Body / subtitle text:          #AAAACC
Disabled / placeholder text:   #555577
Dividers:                      #2A2B50
Nav bar background:            #1A1B3C

NEVER USE: white backgrounds, lime green, bright red, or pure black #000000.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TYPOGRAPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
H1 headings:      SF Pro Display Bold, 34pt, #FFFFFF, tracking -0.5
H2 headings:      SF Pro Display Semibold, 24pt, #FFFFFF
Body text:        SF Pro Text Regular, 16pt, #AAAACC, line-height 1.5
Big metrics:      SF Pro Display Bold, 40pt, coloured by drift level
Badges/labels:    SF Pro Text Semibold, 13pt, uppercase, letter-spacing +1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPONENTS (reuse across all screens)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Primary button:    Height 56px, full width minus 24px each side, radius 28px,
                   gradient #1FC8A0→#17A882, white bold text 17pt

Secondary button:  Height 56px, full width minus 24px each side, radius 28px,
                   background #1E2040, white regular text 17pt, border 1px #2A2B50

Card:              Background #1E2040, radius 20px, padding 20px all sides,
                   shadow 0px 4px 20px rgba(0,0,0,0.4)

Toggle ON:         White thumb, track gradient #1FC8A0→#17A882
Toggle OFF:        White thumb, track #2A2B50

Input field:       Background #252850, radius 14px, height 52px,
                   border 1px #3A3B68, focus border 2px #1FC8A0,
                   text #FFFFFF, placeholder #555577

Drift badge:       Radius 20px, padding 6px 14px, text semibold 13pt uppercase.
                   Stable = #1FC8A0 border + text on transparent bg.
                   Moderate = #A78BFA border + text.
                   Fast Drift = #F472B6 border + text.

Nav bar:           Background #1A1B3C, blur backdrop, top border 1px #2A2B50,
                   height 49px + bottom safe area. 4 tabs: Home, Drift Map,
                   Live Nudge (centre FAB 56px teal circle, glow shadow
                   0 0 20px rgba(31,200,160,0.4)), Analytics.
                   Active icon: #1FC8A0. Inactive: #555577. Dot under active tab.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 0 — Splash Screen
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Full bleed #0F1123. Centred vertically: ChronoWeave hourglass icon (⌛ style,
in #1FC8A0, 72x72px), wordmark "ChronoWeave" in 28pt bold white below it,
tagline "Know your time. Own your day." in 16pt #AAAACC italic below that.
Soft circular pulse glow behind icon: opacity 0.12, radius pulses 40→80px, 2s loop.
Auto-dismiss after 2 seconds.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 1 — Landing / Welcome
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background #0F1123. Top-left: large teal heading "Time feels different for everyone."
Below: body text "Let's discover how it feels for you." in #AAAACC.
Centre: 3D character illustration holding a clock (keep existing character).
Bottom (pinned above safe area, 34px gap): 
  — "Login" button using Secondary Button spec
  — "Sign Up" button using Primary Button spec (teal gradient)
Both buttons full width, stacked vertically with 12px gap.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 2 — Create Account
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background #0F1123. Top: H1 "Create your account", subtitle "Start understanding
your time perception" in #AAAACC. 
Card (#1E2040, radius 20px) containing 3 input fields:
  Name, Email, Password — all using Input Field spec above.
  Password field has a show/hide eye icon on the right in #555577.
Below card (24px gap):
  — "Create Account" using Primary Button spec (teal gradient)
  — "Continue as a Guest" using Secondary Button spec
Bottom link: "Already have an account? Log In" — "Log In" in #1FC8A0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 3 — Choose Your Avatar
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background #0F1123. H1 "Choose your avatar", subtitle "Pick a companion that
represents your mood journey." in #AAAACC.
Grid of 12 character icon buttons (4 columns x 3 rows), each 72x72px rounded square
radius 18px. Replace plain colour circles with illustrated animal/character icons:
Row 1: Owl (#A78BFA bg), Fox (#F472B6 bg), Sloth (#1FC8A0 bg), Robot (#4DC8FF bg)
Row 2: Bear (#FBBF24 bg), Cloud (#C4B5FD bg), Star (#F9A8D4 bg), Penguin (#34D399 bg)
Row 3: Cat (#FB923C bg), Jellyfish (#818CF8 bg), Sun (#FDE68A bg), Moon (#6EE7B7 bg)
Selected state: white ring border 2px + soft white glow shadow.
Card wrapping grid: #1E2040, radius 20px, padding 16px.
Bottom: "Continue" Primary Button (disabled grey #555577 until selection made,
then activates to teal gradient). "Skip for now" ghost text link in #AAAACC.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 4 — How does time feel to you?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background #0F1123. Progress bar top: 3 segments, first one teal, rest #2A2B50,
radius 4px, height 4px, full width minus 24px margins.
H1 "How does time usually feel to you?" 
Subtitle "There's no wrong answer. Pick what feels closest." in #AAAACC.
3 selection cards (full width, Card spec), each with: 
  Left icon badge (72x48px rounded square #252850), icon in brand colour.
  Title text 17pt white bold. Subtitle 15pt #AAAACC.
  ⚡ "Time flies" — Hours disappear quickly.
  🐢 "Time drags" — Minutes feel long.  
  ☁ "I lose track of time" — You forget to check the clock.
On tap: card border becomes 1px #1FC8A0, subtle tinted glow on icon badge.
Bottom: "Continue" Primary Button (disabled until selection). "Go to Dashboard" ghost link.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 5 — Calibration Test (Hold Me)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background: deep blue radial gradient #0F1123 centre → #1A1B3C edges.
Progress bar top: 2 of 3 segments teal, one grey.
H1 "Calibration Test" white bold centred.
Body text centred: "Hold the button and release when you think 10 seconds have passed."
Centre of screen: large circular button 140px diameter, teal fill #1FC8A0,
  radius 70px, "Hold Me" white bold 18pt.
  3 concentric ring halos radiating outward: opacity 0.25, 0.12, 0.05,
  each ring expands outward slowly (sonar pulse animation 2s stagger).
Below button: italic tip text "Don't count — just breathe and feel the time." 15pt #AAAACC.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 5B — Calibration Result (NEW SCREEN — MUST INCLUDE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background #0F1123. Progress bar top: all 3 segments teal (complete).
Big emoji centred top area (🚀 for fast, 🌊 for slow, 🎯 for accurate).
H1 result label "Time Flier" in 40pt white bold.
Body: "You released at 7.2 sec — your felt time runs faster than the clock." in #AAAACC.
Below: horizontal spectrum bar (full width minus 48px margins):
  Label "Slow" left, "Fast" right in #555577.
  Bar background #252850, radius 8px, height 8px.
  Filled teal portion showing their position. White dot marker at their score.
Small note: "This is just a starting point — it changes with context!" in 13pt #555577 italic.
Bottom: "Continue to Second Test" Primary Button (teal gradient).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 6 — Second Calibration
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Same deep gradient background as Screen 5. Progress bar: 2 of 3 teal.
H1 "Second Calibration" white bold centred.
Body "Ready for a longer test?" in #AAAACC centred.
Large "Start Test" Primary Button (teal gradient, full width minus 48px, radius 28px).
Button sits at vertical centre of screen, not bottom.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 7 — Home: Today's Rhythm
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background #0F1123. Top: small date label "Saturday, March 7" in #AAAACC,
H1 "Today's Rhythm" white bold, subtitle "Your personalised time flow for today."
3 metric stat cards in a row (equal width, Card spec, 16px gap):
  "4h" in #1FC8A0 teal bold 36pt, label "Stable time" #AAAACC below.
  "3h" in #A78BFA purple bold 36pt, label "Moderate" below.
  "2h" in #F472B6 pink bold 36pt, label "Fast drift" below.
  Each card has a subtle colour glow gradient at top edge fading to transparent.
Below: full-width "Rhythm Cues" card (Card spec):
  Left: bell icon in teal circle badge. Title "Rhythm Cues" white bold. 
  Subtitle "Gentle time awareness" in #AAAACC. Right: toggle switch (OFF state).
Section header: "🕐 Time Stability Forecast" white semibold with clock icon.
List of time block cards (Card spec, 12px gap):
  Each shows: time range in #AAAACC 15pt, period name white bold 17pt,
  right-aligned drift badge (Stable teal / Moderate purple / Fast Drift pink).
  Cards for: Morning 9AM–12PM (Stable), Midday 12PM–3PM (Moderate),
  Afternoon 3PM–6PM (Fast Drift), Evening 6PM–9PM (Stable).
Bottom nav bar.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 8 — Drift Map
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background #0F1123. Top-left: user avatar (small circle, 40px).
Centre icon badge: wave icon in #1FC8A0 on #1E2040 rounded square.
H1 "Drift Map" white bold. Subtitle "How time feels throughout your day" #AAAACC.
3 stat cards in a row (equal width):
  "92%" in #1FC8A0, label "Morning". "74%" in #A78BFA, label "Afternoon".
  "61%" in #F472B6, label "Evening".
Below: 3 large expandable cards (Card spec, 16px gap):
  Morning card: sun icon on amber #FBBF24 bg badge. "Morning" title + "Stable" badge.
    "Time flows steadily" subtitle. Right: circular progress ring 92% in amber.
  Afternoon card: gear icon on purple bg. "Afternoon" + "Moderate" badge.
    "Time may speed up". Right: circular progress ring 74% in purple.  
  Evening card: moon icon on pink bg. "Evening" + "Fast" badge.
    "Time flies quickly". Right: circular progress ring 61% in pink.
Tap hint: "Tap any period to learn more ↓" in 13pt #555577.
Bottom nav bar (Drift Map tab active).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 9 — Drift Map: Insights scroll (Today's Flow)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background #0F1123.
"What does this mean?" info card (Card spec):
  Left: ⓘ icon in teal circle badge 40px.
  Title "What does this mean?" white bold 17pt.
  Body text "These patterns show when your perception of time tends to drift.
  It's completely normal! ChronoWeave will help you stay aware of these shifts
  throughout your day." in #AAAACC 15pt.
"Swipe for insights >>" pill button: background transparent, border 1px #1FC8A0,
  text #1FC8A0, radius 20px, centred.
Horizontally scrollable card row (peek at next card on right):
  Card 1 — "Time Distribution" (Card spec):
    Title white bold. Subtitle #AAAACC. 
    Pie chart: 3 segments. Stable = #1FC8A0 teal (45%), Moderate = #A78BFA purple (30%),
    Fast Drift = #F472B6 pink (25%). Legend below chart with colour dots + labels.
  Card 2 — "Weekly Insight" (Card spec):
    Line chart with teal #1FC8A0 line, dots at each day, 
    gradient fill below line (#1FC8A0 top → transparent). 
    X-axis: Mon–Sun in #AAAACC. Y-axis: 0–100 in #AAAACC. Grid lines #2A2B50.
  Card 3 — "Today's Flow" (Card spec):
    Smooth wave area chart in purple #A78BFA, gradient fill below
    (#A78BFA → transparent). X-axis: 9AM 12PM 3PM 6PM 9PM. "Analytics" badge top-right.
Bottom nav bar.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 10 — Weekly Insights (FULL DARK MODE — critical)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background #0F1123. ALL text white or #AAAACC. NO white backgrounds anywhere.
H1 "Weekly Insights" white bold. Subtitle "Your time perception patterns" #AAAACC.
"Weekly Drift Calendar" Card (#1E2040):
  Title "Weekly Drift Calendar" white bold. Subtitle "When you experienced time drift." #AAAACC.
  Grid: 7 columns (M T W T F S S) x 4 rows (Morning Midday Afternoon Evening).
  Empty dot: #2A2B50 circle 12px. Orange dot: #FB923C. Purple dot: #A78BFA. Red dot: #EF4444.
"Pattern Detected" card (Card spec #1E2040, left border 4px #1FC8A0):
  💡 icon in teal. Title "Pattern Detected" in #1FC8A0 semibold.
  Body: "Your time tends to move faster during evening hours, and midweek 
  afternoons show moderate time drift." in #AAAACC. NO lime green anywhere.
"Suggested Focus Windows" Card (#1E2040):
  Title white bold. Subtitle "Tomorrow" #AAAACC.
  3 time slot rows, each with left vertical bar (teal/orange/red) + time range 
  white bold + drift label #AAAACC.
Bottom: "Run New Calibration Test" Primary Button (teal gradient — NOT dark navy).
Bottom nav bar.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 11 — Analytics / Accuracy Trend (FULL DARK MODE — critical)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background #0F1123. ALL elements dark. NO white backgrounds.
"Accuracy Trend" Card (#1E2040):
  Title "Accuracy Trend" white bold. Subtitle "Time estimation accuracy this week" #AAAACC.
  Line chart: background transparent, grid lines #2A2B50 dashed, axis labels #AAAACC 12pt.
  Chart line: #1FC8A0 teal, 2px stroke. Dots: white 6px with teal outline.
  Gradient fill below line: #1FC8A0 → transparent.
  X-axis: Mon–Sun. Y-axis: 0, 25, 50, 75, 100.
"What helped your focus most this week?" Card (#1E2040):
  Title white bold. 4 chip buttons in 2x2 grid:
  Taking breaks / Less screen time / Better sleep / Physical activity.
  Chip: background #252850, radius 20px, border 1px #3A3B68, text #AAAACC 15pt.
  Selected chip: border 1px #1FC8A0, text #1FC8A0, background #1E2040.
"Run New Calibration Test" Primary Button (teal gradient — MUST match all other CTAs).
Small floating action button bottom-right: teal circle, trend-up icon white.
Bottom nav bar.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 12 — Live Nudge Active
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background #0F1123. Centre top: waveform icon badge in #1E2040 rounded square.
H1 "Live Nudge Active" white bold. Subtitle "Choose your sensory feedback modes" #AAAACC.
"● Monitoring" status pill: background #1E2040, border 1px #1FC8A0, 
  green dot #1FC8A0, text #1FC8A0, centred.
3 toggle cards (Card spec, 12px gap between):
  Each: left icon badge (#252850 rounded square, icon #AAAACC), 
  title white bold 17pt, subtitle #AAAACC 15pt, right toggle switch.
  1. ☀ "Subtle haptic pulse" — "Gentle vibration feedback" — toggle OFF
  2. ♪ "Audio tempo tone" — "Rhythmic sound cues" — toggle OFF  
  3. ☀ "Ambient light cue" — "Soft visual pulse" — toggle ON (teal toggle)
Subtle background decoration: thin curved wave lines at very low opacity 12%
  in teal and purple, behind the cards.
Info card at bottom (Card spec, partial visible, tap to expand):
  ⓘ icon teal. Body text about nudges adapting in real-time. Chevron ↕ top-right.
Bottom nav bar (Live Nudge centre FAB active, glowing).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 13 — Settings / Preferences (FULL DARK MODE — critical)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background #0F1123 throughout. ALL sections dark. NO white anywhere.
Top section — Avatar/colour picker Card (#1E2040):
  Same 4x3 grid of character icons as Screen 3. Selected avatar has white ring.
  "Selected: [name]" below in #1FC8A0.
Section header "Time Format" white bold 20pt.
Subtitle "Choose how time is displayed" in #AAAACC.
Time format card (#1E2040, radius 20px):
  Selected option "12-hour format" row: background teal gradient #1FC8A0→#17A882,
    radius 14px, white bold text "12-hour format" + "3:00 PM – 6:00 PM", 
    white checkmark circle right.
  Unselected option "24-hour format" row: background #252850, radius 14px,
    grey text "15:00 – 18:00" in #555577.
Bottom: "Save Changes" Primary Button (teal gradient, full width, radius 28px).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVE RULES (apply to all screens)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Use Auto Layout on every screen (vertical, fill container width).
Safe area top: 54px minimum from frame top.
Safe area bottom: 34px minimum from frame bottom before buttons.
Side margins: 24px left and right on all content.
Cards: fill width (stretch with screen width).
Buttons: fill width minus 24px each side.
Nav bar: pinned to bottom, stretches full width.
Scrollable content: sits in a frame between top header and nav bar,
  scrolls vertically, hug height off.
Test at: 375px (SE), 390px (14/15 standard), 430px (Plus/Max).
```

---

That's the full prompt — copy everything between the triple backticks and paste it directly into **Figma Make** (the AI button in your toolbar). It covers all 13 screens + the 2 new missing ones, the complete colour system, every component spec, and responsive rules.