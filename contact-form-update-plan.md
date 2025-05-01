## Changes Required

1. Remove Photo Upload
- Remove the furniture field from formFields array in Umzuege.tsx
- Add new description field for furniture without photo requirement

2. Add Radio Group for Möbellift
- Replace the select field for "lift" with a radio group
- Default to "Ja"
- Style to match form layout
- Add validation

3. Update Form Layout
- Adjust spacing between form fields
- Group related fields (e.g., address fields)
- Improve visual hierarchy

## Implementation Details

1. Update formFields:
```tsx
const formFields = [{
  // ... existing fields ...
}, {
  id: "lift",
  label: "Möbellift mieten?",
  type: "radio",
  required: true,
  defaultValue: "ja",
  options: [
    { value: "ja", label: "Ja" },
    { value: "nein", label: "Nein" }
  ]
}, {
  id: "furniture",
  label: "Beschreibung der zu transportierenden Möbelstücke",
  type: "textarea",
  placeholder: "Beschreiben Sie kurz die Art und ungefähre Anzahl der Möbelstücke",
  required: true,
  rows: 3
}];
```

2. Update ContactForm Component:
- Add support for radio group type
- Adjust spacing classes
- Improve field grouping

3. Styling Updates:
```tsx
// Field groups
<div className="grid gap-4 md:grid-cols-2">
  // Address fields
</div>

// Radio group styling
<div className="flex items-center gap-4">
  // Radio options
</div>
```