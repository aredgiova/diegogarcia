interface InitiativeTimelineProps {
  initiative: string;
}

// Decorative placeholders follow the reference; confirmed stages are pending.
const placeholderMarkers = Array.from({ length: 9 }, (_, index) => index);

export function InitiativeTimeline({ initiative }: InitiativeTimelineProps) {
  return (
    <div
      className="bill-timeline"
      role="group"
      aria-label={`Línea de tiempo: ${initiative}`}
    >
      <h4>Línea de tiempo</h4>
      <div className="bill-timeline-track" aria-hidden="true">
        {placeholderMarkers.map(marker => (
          <span className="bill-timeline-marker" key={marker} />
        ))}
      </div>
      <p className="bill-timeline-status">Seguimiento pendiente de actualización.</p>
      <p className="bill-timeline-note">Etapas y fechas por confirmar.</p>
    </div>
  );
}
