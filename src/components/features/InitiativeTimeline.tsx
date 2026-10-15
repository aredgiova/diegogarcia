interface InitiativeTimelineProps {
  initiative: string;
}

// Filing is confirmed; the remaining stages and dates are still pending.
const timelineMarkers = Array.from({ length: 4 }, (_, index) => index);

export function InitiativeTimeline({ initiative }: InitiativeTimelineProps) {
  return (
    <div
      className="bill-timeline"
      role="group"
      aria-label={`Línea de tiempo: ${initiative}`}
    >
      <h4>Línea de tiempo</h4>
      <div className="bill-timeline-track" aria-hidden="true">
        {timelineMarkers.map(marker => (
          <span className={`bill-timeline-marker${marker === 0 ? " bill-timeline-marker-current" : ""}`} key={marker} />
        ))}
      </div>
      <p className="bill-timeline-status">Radicado</p>
      <p className="bill-timeline-note">Próximas etapas y fechas por confirmar.</p>
    </div>
  );
}
