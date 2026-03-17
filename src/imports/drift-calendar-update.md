text
Update the Weekly Drift Calendar. Replace the **heavy purple empty boxes** with **light, neutral placeholders** that don't compete with drift data.

**New Color System**:
Active Drift Indicators (keep existing):

Green ● = Stable

Purple ● = Moderate

Pink ● = Fast

Empty/No Data Cells (replace purple boxes):

Very light gray outline circle ○ (#E5E7EB, 1px stroke only)

No fill, no heavy color, maximum subtlety

text

**Implementation**:
All empty cells = identical light gray outline circles

Perfect 24x24px size, 2px stroke weight

Consistent 8px gap between all cells

Maintain existing row headers and day labels

Add small legend bottom-right: "○ No data | ● Drift detected"

Visual Hierarchy:

text
Drift dots = 100% opacity (dominant)
Empty circles = 20% opacity (background)
Day labels = 80% opacity (supporting)
Row headers = 90% opacity (sectioning)
Style Reference:

Apple Health weekly summaries (light outlines for empty days)

Google Fit activity calendar (subtle empty states)

Strava training log (neutral placeholders)

Result: Calendar instantly shows drift patterns without visual noise from purple empty cells.
​

text

---

### **Exact Color Codes**:
Empty cell outline: #E5E7EB (1px stroke)
Active dots: Keep your green/purple/pink
Day labels: #9CA3AF (60% opacity)
Row headers: #6B7280 (70% opacity)

text

**Before**: Purple boxes distract from actual drift data  
**After**: Light outlines let **patterns emerge clearly**. Perfect data visualization.