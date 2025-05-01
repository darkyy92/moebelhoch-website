## Changes Required

1. Hero Section Text Update
- Remove mention of "Basha's GmbH" from intro paragraph
- Rewrite to focus on EMMAUS Zürich

2. Services Section Update
- Remove "Basha's GmbH" from expert description in "Fachmännische Beratung" card
- Update text to focus on EMMAUS expertise

3. Partner Cards Section
- Remove entire Basha's GmbH card
- Adjust grid layout to single column for EMMAUS card
- Center EMMAUS card and adjust width/styling

4. Bullet Points Update
- Review and update any bullet points mentioning partnerships
- Keep focus on EMMAUS's social impact and expertise

## Implementation Details

1. Hero Section:
```tsx
<p className="text-lg text-gray-600 mb-8">
  Sie wollen bei Ihrem Umzug nichts dem Zufall überlassen? 
  Dann haben wir mit EMMAUS Zürich einen erfahrenen Partner an der Hand, der Ihnen gerne fachmännisch zur Hand geht.
</p>
```

2. Services Section:
```tsx
<p className="text-gray-600">
  Unsere Experten von EMMAUS Zürich unterstützen Sie mit ihrer langjährigen Erfahrung.
</p>
```

3. Partner Section:
```tsx
<div className="max-w-lg mx-auto">
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-bold text-movers-primary mb-4">EMMAUS Zürich</h3>
    <p className="text-gray-600 mb-6">
      Gemeinnütziger Umzugshelfer, der lokale und internationale Hilfsprojekte unterstützt.
    </p>
    <Link to="/offerten-anfordern" className="btn-outline w-full justify-center">
      Kontakt aufnehmen
    </Link>
  </div>
</div>
```

4. Additional Text Updates:
```tsx
<p className="text-gray-700">
  Wir haben Ihr Interesse geweckt? Dann zögern Sie nicht, sich mit EMMAUS Zürich in Verbindung zu setzen oder direkt hier eine unverbindliche Offerte einzuholen.
</p>
```