Design a Weekly Insights screen for the ChronoWeave mobile app that helps users understand patterns in their perception of time and plan their schedule around those patterns.

Do not modify the existing visual style or design system.

The screen should combine reflection, pattern detection, and schedule suggestions.

Weekly Drift Calendar

Create a calendar-style weekly grid similar to a digital calendar layout.

Columns represent days of the week:

Mon, Tue, Wed, Thu, Fri, Sat, Sun

Rows represent time periods:

Morning
Midday
Afternoon
Evening

Cells display drift indicators where time perception drift occurred during that period.

Some cells remain empty if no drift was detected.

Drift indicators vary in size depending on drift intensity.

Calendar Animation

When the screen loads:

• Drift indicators appear sequentially across the week
• Cells animate with a soft scale-in effect
• Animation progresses from Monday to Sunday

Pattern Insight Card

Below the calendar display a pattern insight card summarizing detected behavior.

Example messages:

“Your time tends to move faster during evening hours.”

“Midweek afternoons show moderate time drift.”

The card should appear with a slide-up and fade animation.

Smart Schedule Suggestions

Add a schedule recommendation card showing the best times for focus.

Example:

Suggested Focus Windows

Tomorrow

9:00 – 11:30
Low drift risk

2:00 – 3:30
Moderate drift risk

7:00 – 10:00
High drift likelihood

This section helps users plan activities around their time rhythm.

Weekly Accuracy Chart

Add a line chart showing how time estimation accuracy changed during the week.

The chart shows data points for each day of the week.

When the screen loads:

• The line draws from left to right
• Data points appear sequentially

Users can tap a point to see the exact accuracy value.

Reflection Prompt

Add a simple question:

“What helped your focus most this week?”

Include selectable options.

Bottom Action

Primary button:

Run a New Calibration Test